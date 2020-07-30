import { ProviderError } from "@aws-sdk/property-provider";

import { fromEnv } from "./fromEnv";

describe("fromEnv", () => {
  describe("with env var name", () => {
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
      expect(fromEnv(envVarName)()).resolves.toBe(mockEnvVarValue);
    });

    it(`throws when '${envVarName}' env var is not set`, () => {
      expect(fromEnv(envVarName)()).rejects.toMatchObject(getProviderError(envVarName));
    });
  });

  describe("with env var getter", () => {
    it("return value from the getter", () => {
      type Value = { Foo: string };
      const value: Value = { Foo: "bar" };
      const getter: (env: any) => Value = jest.fn().mockReturnValue(value);
      expect(fromEnv(getter)()).resolves.toEqual(value);
    });

    it("throws when the getter function throws", () => {
      const exception = new Error("Exception when getting the config");
      const getter: (env: any) => any = jest.fn().mockRejectedValue(exception);
      expect(fromEnv(getter)()).rejects.toEqual(exception);
    });
  });
});
