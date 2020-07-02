import { fromInstanceMetadata } from "./fromInstanceMetadata";
import { httpGet } from "./remoteProvider/httpGet";
import {
  fromImdsCredentials,
  ImdsCredentials
} from "./remoteProvider/ImdsCredentials";
import { providerConfigFromInit } from "./remoteProvider/RemoteProviderInit";
import { Credentials } from "@aws-sdk/types";
import { retry } from "./remoteProvider/retry";

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

  const mockImdsCreds: ImdsCredentials = Object.freeze({
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

  it("passes maxRetries returned from providerConfigFromInit to retry", () => {});

  it("passes timeout returned from providerConfigFromInit to requestFromEc2Imds", () => {});

  it("throws ProviderError is credentials returns are incorrect", () => {});

  it("throws Error if requestFromEc2Imds for profile fails", () => {});

  it("throws Error if requestFromEc2Imds for credentials fails", () => {});
});
