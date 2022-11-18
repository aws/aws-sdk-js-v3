import { AwsCredentialIdentity } from "@aws-sdk/types";

import { getValidatedProcessCredentials } from "./getValidatedProcessCredentials";
import { ProcessCredentials } from "./ProcessCredentials";

describe(getValidatedProcessCredentials.name, () => {
  const mockProfileName = "mockProfileName";
  const mockAccessKeyId = "mockAccessKeyId";
  const mockSecretAccessKey = "mockSecretAccessKey";
  const mockSessionToken = "mockSessionToken";
  const mockExpiration = Date.now() + 24 * 60 * 60 * 1000;

  const getMockProcessCreds = (): ProcessCredentials => ({
    Version: 1,
    AccessKeyId: mockAccessKeyId,
    SecretAccessKey: mockSecretAccessKey,
    SessionToken: mockSessionToken,
    Expiration: mockExpiration,
  });

  it.each([undefined, 2])("throws Error when Version is %s", (Version) => {
    expect(() => {
      getValidatedProcessCredentials(mockProfileName, {
        ...getMockProcessCreds(),
        Version,
      });
    }).toThrow(`Profile ${mockProfileName} credential_process did not return Version 1.`);
  });

  it.each(["AccessKeyId", "SecretAccessKey"])("throws Error when '%s' is not defined", (key) => {
    expect(() => {
      getValidatedProcessCredentials(mockProfileName, {
        ...getMockProcessCreds(),
        [key]: undefined,
      });
    }).toThrow(`Profile ${mockProfileName} credential_process returned invalid credentials.`);
  });

  it("throws error when credentials are expired", () => {
    const expirationDayBefore = Date.now() - 24 * 60 * 60 * 1000;
    expect(() => {
      getValidatedProcessCredentials(mockProfileName, {
        ...getMockProcessCreds(),
        Expiration: expirationDayBefore,
      });
    }).toThrow(`Profile ${mockProfileName} credential_process returned expired credentials.`);
  });

  describe("returns validated Process credentials", () => {
    const getValidatedCredentials = (data: ProcessCredentials): AwsCredentialIdentity => ({
      accessKeyId: data.AccessKeyId,
      secretAccessKey: data.SecretAccessKey,
      ...(data.SessionToken && { sessionToken: data.SessionToken }),
      ...(data.Expiration && { expiration: new Date(data.Expiration) }),
    });

    it("with all values", () => {
      const mockProcessCreds = getMockProcessCreds();
      const mockOutputCreds = getValidatedCredentials(mockProcessCreds);
      expect(getValidatedProcessCredentials(mockProfileName, mockProcessCreds)).toStrictEqual(mockOutputCreds);
    });

    it.each(["SessionToken", "Expiration"])("without '%s'", (key) => {
      const mockProcessCreds = { ...getMockProcessCreds(), [key]: undefined };
      const mockOutputCreds = getValidatedCredentials(mockProcessCreds);
      expect(getValidatedProcessCredentials(mockProfileName, mockProcessCreds)).toStrictEqual(mockOutputCreds);
    });
  });
});
