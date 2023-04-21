import { CredentialsProviderError } from "@aws-sdk/property-provider";

import { fromArgs } from "./fromArgs";

describe(fromArgs.name, () => {
  const mockAccessKeyId = "mockAccessKeyId";
  const mockSecretAccessKey = "mockSecretAccessKey";
  const mockSessionToken = "mockSessionToken";
  const mockExpiration = new Date().toISOString();
  const init = {
    accessKeyId: mockAccessKeyId,
    secretAccessKey: mockSecretAccessKey,
    sessionToken: mockSessionToken,
    expiry: mockExpiration,
  };

  it("should read credentials from arguments", async () => {
    const receivedCreds = await fromArgs(init)();
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockAccessKeyId,
      secretAccessKey: mockSecretAccessKey,
      sessionToken: mockSessionToken,
      expiration: new Date(mockExpiration),
    });
  });

  it("can create credentials without a session token or expiration", async () => {
    delete init.sessionToken;
    delete init.expiry;
    const receivedCreds = await fromArgs(init)();
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockAccessKeyId,
      secretAccessKey: mockSecretAccessKey,
    });
  });

  it.each(["accessKeyId", "secretAccessKey"])("throws if init['%s'] is not found", async (key) => {
    delete init[key];
    const expectedError = new CredentialsProviderError("Unable to find arguments credentials.");
    try {
      await fromArgs(init)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
  });
});
