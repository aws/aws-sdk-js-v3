import { ProviderError } from "@aws-sdk/property-provider";

import { fromEnv } from "./fromEnv";

describe("fromEnv", () => {
  const envVarName = "ENV_VAR_NAME";
  const envVarValue = process.env[envVarName];
  const mockEnvVarValue = "mockEnvVarValue";

  const getProviderError = (envVarName: string) =>
    new ProviderError(`No value defined for the ${envVarName} environment variable`);

  beforeEach(() => {
    delete process.env[envVarName];
  });

  afterAll(() => {
    process.env[envVarName] = envVarValue;
  });

  it(`returns value in '${envVarName}' env var when set`, () => {
    process.env[envVarName] = mockEnvVarValue;
    return expect(fromEnv(envVarName)()).resolves.toBe(mockEnvVarValue);
  });

  it(`throws when '${envVarName}' env var is not set`, () => {
    return expect(fromEnv(envVarName)()).rejects.toMatchObject(getProviderError(envVarName));
  });
});
