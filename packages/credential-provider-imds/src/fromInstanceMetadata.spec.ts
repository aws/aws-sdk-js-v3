import { fromInstanceMetadata } from "./fromInstanceMetadata";
import { httpGet } from "./remoteProvider/httpGet";
import {
  fromImdsCredentials,
  isImdsCredentials
} from "./remoteProvider/ImdsCredentials";
import { providerConfigFromInit } from "./remoteProvider/RemoteProviderInit";
import { Credentials } from "@aws-sdk/types";
import { retry } from "./remoteProvider/retry";
import { ProviderError } from "@aws-sdk/property-provider";

jest.mock("./remoteProvider/httpGet", () => ({ httpGet: jest.fn() }));
jest.mock("./remoteProvider/ImdsCredentials", () => ({
  fromImdsCredentials: jest.fn(),
  isImdsCredentials: jest.fn().mockReturnValue(true)
}));
jest.mock("./remoteProvider/retry", () => ({
  retry: jest.fn()
}));
jest.mock("./remoteProvider/RemoteProviderInit", () => ({
  providerConfigFromInit: jest.fn()
}));

describe("fromInstanceMetadata", () => {
  const mockTimeout = 1000;
  const mockMaxRetries = 3;
  const mockProfile = "foo";

  const mockHttpGetOptions = {
    host: "169.254.169.254",
    path: "/latest/meta-data/iam/security-credentials/",
    timeout: mockTimeout
  };

  const mockImdsCreds = Object.freeze({
    AccessKeyId: "foo",
    SecretAccessKey: "bar",
    Token: "baz",
    Expiration: new Date().toISOString()
  });

  const mockCreds: Credentials = Object.freeze({
    accessKeyId: mockImdsCreds.AccessKeyId,
    secretAccessKey: mockImdsCreds.SecretAccessKey,
    sessionToken: mockImdsCreds.Token,
    expiration: new Date(mockImdsCreds.Expiration)
  });

  beforeEach(() => {
    (providerConfigFromInit as jest.Mock).mockReturnValue({
      timeout: mockTimeout,
      maxRetries: mockMaxRetries
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("gets profile name from IMDS, and passes profile name to fetch credentials", async () => {
    (httpGet as jest.Mock)
      .mockResolvedValueOnce(mockProfile)
      .mockResolvedValueOnce(JSON.stringify(mockImdsCreds));

    (retry as jest.Mock).mockImplementation((fn: any) => fn());
    (fromImdsCredentials as jest.Mock).mockReturnValue(mockCreds);

    await expect(fromInstanceMetadata()()).resolves.toEqual(mockCreds);
    expect(httpGet).toHaveBeenCalledTimes(2);
    expect(httpGet).toHaveBeenNthCalledWith(1, mockHttpGetOptions);
    expect(httpGet).toHaveBeenNthCalledWith(2, {
      ...mockHttpGetOptions,
      path: `${mockHttpGetOptions.path}${mockProfile}`
    });
  });

  it("passes {} to providerConfigFromInit if init not defined", async () => {
    (retry as jest.Mock)
      .mockResolvedValueOnce(mockProfile)
      .mockResolvedValueOnce(mockCreds);

    await expect(fromInstanceMetadata()()).resolves.toEqual(mockCreds);
    expect(providerConfigFromInit).toHaveBeenCalledTimes(1);
    expect(providerConfigFromInit).toHaveBeenCalledWith({});
  });

  it("passes init to providerConfigFromInit", async () => {
    (retry as jest.Mock)
      .mockResolvedValueOnce(mockProfile)
      .mockResolvedValueOnce(mockCreds);

    const init = { maxRetries: 5, timeout: 1213 };
    await expect(fromInstanceMetadata(init)()).resolves.toEqual(mockCreds);
    expect(providerConfigFromInit).toHaveBeenCalledTimes(1);
    expect(providerConfigFromInit).toHaveBeenCalledWith(init);
  });

  it("passes maxRetries returned from providerConfigFromInit to retry", async () => {
    (retry as jest.Mock)
      .mockResolvedValueOnce(mockProfile)
      .mockResolvedValueOnce(mockCreds);

    await expect(fromInstanceMetadata()()).resolves.toEqual(mockCreds);
    expect(retry).toHaveBeenCalledTimes(2);
    expect((retry as jest.Mock).mock.calls[0][1]).toBe(mockMaxRetries);
    expect((retry as jest.Mock).mock.calls[1][1]).toBe(mockMaxRetries);
  });

  it("throws ProviderError is credentials returned are incorrect", async () => {
    (httpGet as jest.Mock)
      .mockResolvedValueOnce(mockProfile)
      .mockResolvedValueOnce(JSON.stringify(mockImdsCreds));

    (retry as jest.Mock).mockImplementation((fn: any) => fn());
    ((isImdsCredentials as unknown) as jest.Mock).mockReturnValueOnce(false);

    await expect(fromInstanceMetadata()()).rejects.toEqual(
      new ProviderError(
        "Invalid response received from instance metadata service."
      )
    );
  });

  it("throws Error if requestFromEc2Imds for profile fails", () => {});

  it("throws Error if requestFromEc2Imds for credentials fails", () => {});
});
