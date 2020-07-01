import { fromInstanceMetadata } from "./fromInstanceMetadata";
import { httpGet } from "./remoteProvider/httpGet";
import {
  fromImdsCredentials,
  ImdsCredentials
} from "./remoteProvider/ImdsCredentials";
import { Credentials } from "@aws-sdk/types";

jest.mock("./remoteProvider/httpGet", () => ({ httpGet: jest.fn() }));
jest.mock("./remoteProvider/ImdsCredentials", () => ({
  fromImdsCredentials: jest.fn(),
  isImdsCredentials: jest.fn().mockReturnValue(true)
}));

describe("fromInstanceMetadata", () => {
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  it.only("should resolve credentials by fetching them from the container metadata service", async () => {
    (httpGet as jest.Mock).mockResolvedValue(JSON.stringify(mockImdsCreds));
    (fromImdsCredentials as jest.Mock).mockReturnValue(mockCreds);

    await expect(fromInstanceMetadata()()).resolves.toEqual(mockCreds);
    expect(httpGet).toHaveBeenCalledTimes(2);
    expect(fromImdsCredentials).toHaveBeenCalledTimes(1);
  });

  it("should retry the fetching operation up to maxRetries times", async () => {
    const maxRetries = 5;
    (httpGet as jest.Mock).mockResolvedValueOnce("foo");
    for (let i = 0; i < maxRetries - 1; i++) {
      (httpGet as jest.Mock).mockResolvedValueOnce("No!");
    }
    (httpGet as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockImdsCreds));

    await expect(fromInstanceMetadata({ maxRetries })()).resolves.toEqual(
      fromImdsCredentials(mockImdsCreds)
    );
    expect(httpGet).toHaveBeenCalledTimes(maxRetries + 1);
  });

  it("should retry responses that receive invalid response values", async () => {
    (httpGet as jest.Mock).mockResolvedValueOnce("foo");
    for (let key of Object.keys(mockImdsCreds)) {
      const invalidCreds: any = { ...mockImdsCreds };
      delete invalidCreds[key];
      (httpGet as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(invalidCreds)
      );
    }
    (httpGet as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockImdsCreds));

    await fromInstanceMetadata({ maxRetries: 100 })();
    expect(httpGet).toHaveBeenCalledTimes(
      Object.keys(mockImdsCreds).length + 2
    );
  });

  it("should pass relevant configuration to httpGet", async () => {
    const timeout = Math.ceil(Math.random() * 1000);
    const profile = "foo-profile";

    (httpGet as jest.Mock).mockResolvedValueOnce(profile);
    (httpGet as jest.Mock).mockResolvedValue(JSON.stringify(mockImdsCreds));

    await fromInstanceMetadata({ timeout })();

    expect(httpGet).toHaveBeenCalledTimes(2);
    expect((httpGet as jest.Mock).mock.calls[0][0]).toEqual({
      host: "169.254.169.254",
      path: "/latest/meta-data/iam/security-credentials/",
      timeout
    });
    expect((httpGet as jest.Mock).mock.calls[1][0]).toEqual({
      host: "169.254.169.254",
      path: `/latest/meta-data/iam/security-credentials/${profile}`,
      timeout
    });
  });

  it("should retry the profile name fetch as necessary", async () => {
    const defaultTimeout = 1000;
    const profile = "foo-profile";

    (httpGet as jest.Mock).mockRejectedValueOnce("Too busy");
    (httpGet as jest.Mock).mockResolvedValueOnce(profile);
    (httpGet as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockImdsCreds));

    await fromInstanceMetadata({ maxRetries: 1 })();
    expect(httpGet).toHaveBeenCalledTimes(3);
    expect((httpGet as jest.Mock).mock.calls[2][0]).toEqual({
      host: "169.254.169.254",
      path: `/latest/meta-data/iam/security-credentials/${profile}`,
      timeout: defaultTimeout
    });
    for (let index of [0, 1]) {
      expect((httpGet as jest.Mock).mock.calls[index][0]).toEqual({
        host: "169.254.169.254",
        path: "/latest/meta-data/iam/security-credentials/",
        timeout: defaultTimeout
      });
    }
  });
});
