import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import { ENV_ACCOUNT_ID, ENV_EXPIRATION, ENV_KEY, ENV_SECRET, ENV_SESSION, fromEnv } from "./fromEnv";

describe(fromEnv.name, () => {
  const ORIGINAL_ENV = process.env;
  const mockAccessKeyId = "mockAccessKeyId";
  const mockSecretAccessKey = "mockSecretAccessKey";
  const mockSessionToken = "mockSessionToken";
  const mockExpiration = new Date().toISOString();
  const mockAccountId = "123456789012";

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      [ENV_KEY]: mockAccessKeyId,
      [ENV_SECRET]: mockSecretAccessKey,
      [ENV_SESSION]: mockSessionToken,
      [ENV_EXPIRATION]: mockExpiration,
      [ENV_ACCOUNT_ID]: mockAccountId,
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
      accountId: mockAccountId,
      $source: {
        CREDENTIALS_ENV_VARS: "g",
      },
    });
  });

  it("can create credentials without a session token, accountId, or expiration", async () => {
    delete process.env[ENV_SESSION];
    delete process.env[ENV_EXPIRATION];
    delete process.env[ENV_ACCOUNT_ID];
    const receivedCreds = await fromEnv()();
    expect(receivedCreds).toStrictEqual({
      accessKeyId: mockAccessKeyId,
      secretAccessKey: mockSecretAccessKey,
      $source: {
        CREDENTIALS_ENV_VARS: "g",
      },
    });
  });

  it("should include accountId when it is provided in environment variables", async () => {
    process.env[ENV_ACCOUNT_ID] = mockAccountId;
    const receivedCreds = await fromEnv()();
    expect(receivedCreds).toHaveProperty("accountId", mockAccountId);
  });

  it("should not include accountId when it is not provided in environment variables", async () => {
    delete process.env[ENV_ACCOUNT_ID]; // Ensure accountId is not set
    const receivedCreds = await fromEnv()();
    expect(receivedCreds).not.toHaveProperty("accountId");
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
