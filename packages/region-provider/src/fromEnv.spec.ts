import { ProviderError } from "@aws-sdk/property-provider";

import { ENV_REGION, fromEnv } from "./fromEnv";

describe("fromEnv", () => {
  const ENV_CUSTOM = "AWS_DEFAULT_REGION";
  const envRegion = process.env[ENV_REGION];
  const envCustom = process.env[ENV_CUSTOM];
  const mockEnvRegion = "mockEnvRegion";
  const mockEnvCustom = "mockEnvCustom";

  const getProviderError = (envVarName: string) =>
    new ProviderError(`No value defined for the ${envVarName} environment variable`);

  beforeEach(() => {
    delete process.env[ENV_REGION];
    delete process.env[ENV_CUSTOM];
  });

  afterAll(() => {
    process.env[ENV_CUSTOM] = envCustom;
    process.env[ENV_REGION] = envRegion;
  });

  describe("when no value is passed", () => {
    it(`returns value in '${ENV_REGION}' env var when set`, () => {
      process.env[ENV_REGION] = mockEnvRegion;
      return expect(fromEnv()()).resolves.toBe(mockEnvRegion);
    });

    it(`throws when '${ENV_REGION}' env var is not set`, () => {
      return expect(fromEnv()()).rejects.toMatchObject(getProviderError(ENV_REGION));
    });
  });

  describe(`when custom env var '${ENV_CUSTOM}' is passed`, () => {
    describe(`returns value in '${ENV_CUSTOM}' env var when set`, () => {
      const environmentVariableName = ENV_CUSTOM;

      beforeEach(() => {
        process.env[environmentVariableName] = mockEnvCustom;
        expect(process.env[ENV_REGION]).toBeUndefined();
      });

      it(`when '${ENV_REGION}' is set`, () => {
        process.env[ENV_REGION] = mockEnvRegion;
        return expect(fromEnv({ environmentVariableName })()).resolves.toBe(mockEnvCustom);
      });

      it(`when '${ENV_REGION}' is not set`, () => {
        return expect(fromEnv({ environmentVariableName })()).resolves.toBe(mockEnvCustom);
      });
    });

    describe(`throws when '${ENV_CUSTOM}' env var is not set`, () => {
      const environmentVariableName = ENV_CUSTOM;

      beforeEach(() => {
        delete process.env[environmentVariableName];
        expect(process.env[ENV_REGION]).toBeUndefined();
      });

      it(`when '${ENV_REGION}' is set`, () => {
        process.env[ENV_REGION] = mockEnvRegion;
        return expect(fromEnv({ environmentVariableName })()).rejects.toMatchObject(
          getProviderError(environmentVariableName)
        );
      });

      it(`when '${ENV_REGION}' is not set`, () => {
        return expect(fromEnv({ environmentVariableName })()).rejects.toMatchObject(
          getProviderError(environmentVariableName)
        );
      });
    });
  });
});
