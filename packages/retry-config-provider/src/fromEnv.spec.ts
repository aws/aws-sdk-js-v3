import { fromEnv, ENV_MAX_ATTEMPTS } from "./fromEnv";
import { ProviderError } from "@aws-sdk/property-provider";

describe("fromEnv", () => {
  const envRegion = process.env[ENV_MAX_ATTEMPTS];
  const mockEnvMaxAttempts = "mockEnvMaxAttempts";

  const getProviderError = (envVarName: string) =>
    new ProviderError(
      `No value defined for the ${envVarName} environment variable`
    );

  beforeEach(() => {
    delete process.env[ENV_MAX_ATTEMPTS];
  });

  afterAll(() => {
    process.env[ENV_MAX_ATTEMPTS] = envRegion;
  });

  it(`returns value in '${ENV_MAX_ATTEMPTS}' env var when set`, () => {
    process.env[ENV_MAX_ATTEMPTS] = mockEnvMaxAttempts;
    return expect(fromEnv()()).resolves.toBe(mockEnvMaxAttempts);
  });

  it(`throws when '${ENV_MAX_ATTEMPTS}' env var is not set`, () => {
    return expect(fromEnv()()).rejects.toMatchObject(
      getProviderError(ENV_MAX_ATTEMPTS)
    );
  });
});
