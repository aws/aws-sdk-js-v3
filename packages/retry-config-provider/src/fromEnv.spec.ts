import { fromEnv, ENV_REGION } from "./fromEnv";
import { ProviderError } from "@aws-sdk/property-provider";

describe("fromEnv", () => {
  const envRegion = process.env[ENV_REGION];
  const mockEnvRegion = "mockEnvRegion";

  const getProviderError = (envVarName: string) =>
    new ProviderError(
      `No value defined for the ${envVarName} environment variable`
    );

  beforeEach(() => {
    delete process.env[ENV_REGION];
  });

  afterAll(() => {
    process.env[ENV_REGION] = envRegion;
  });

  it(`returns value in '${ENV_REGION}' env var when set`, () => {
    process.env[ENV_REGION] = mockEnvRegion;
    return expect(fromEnv()()).resolves.toBe(mockEnvRegion);
  });

  it(`throws when '${ENV_REGION}' env var is not set`, () => {
    return expect(fromEnv()()).rejects.toMatchObject(
      getProviderError(ENV_REGION)
    );
  });
});
