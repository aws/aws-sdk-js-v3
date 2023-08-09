import { CredentialsProviderError } from "@smithy/property-provider";

import { ENV_EXPIRATION, ENV_KEY, ENV_SECRET, ENV_SESSION, fromEnv } from "./fromEnv";

describe(fromEnv.name, () => {
  const ORIGINAL_ENV = process.env;
  const mockAccessKeyId = "mockAccessKeyId";
  const mockSecretAccessKey = "mockSecretAccessKey";
  const mockSessionToken = "mockSessionToken";
  const mockExpiration = new Date().toISOString();

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      [ENV_KEY]: mockAccessKeyId,
      [ENV_SECRET]: mockSecretAccessKey,
      [ENV_SESSION]: mockSessionToken,
      [ENV_EXPIRATION]: mockExpiration,
    };
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  it("should read credentials from known environment variables", async () => {
    const receivedCreds = await fromEnv()();
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockAccessKeyId,
      secretAccessKey: mockSecretAccessKey,
      sessionToken: mockSessionToken,
      expiration: new Date(mockExpiration),
    });
  });

  it("can create credentials without a session token or expiration", async () => {
    delete process.env[ENV_SESSION];
    delete process.env[ENV_EXPIRATION];
    const receivedCreds = await fromEnv()();
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockAccessKeyId,
      secretAccessKey: mockSecretAccessKey,
    });
  });

  it.each([ENV_KEY, ENV_SECRET])("throws if env['%s'] is not found", async (key) => {
    delete process.env[key];
    const expectedError = new CredentialsProviderError("Unable to find environment variable credentials.");
    try {
      await fromEnv()();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
  });
});
