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
});
