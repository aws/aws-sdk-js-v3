import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { DEFAULT_ACCOUNT_ID_ENDPOINT_MODE } from "./AccountIdEndpointModeConstants";
import {
  CONFIG_ACCOUNT_ID_ENDPOINT_MODE,
  ENV_ACCOUNT_ID_ENDPOINT_MODE,
  NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS,
} from "./NodeAccountIdEndpointModeConfigOptions";

describe("NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("environmentVariableSelector", () => {
    it("should return the value set in environment variables", () => {
      const testValue = "preferred";
      process.env[ENV_ACCOUNT_ID_ENDPOINT_MODE] = testValue;
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.environmentVariableSelector;
      expect(selector(process.env)).toEqual(testValue);
    });

    it("should throw an error if the environment variable is set to an invalid value", () => {
      process.env[ENV_ACCOUNT_ID_ENDPOINT_MODE] = "InvalidValue";
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.environmentVariableSelector;
      expect(() => selector(process.env)).toThrow("Invalid AccountIdEndpointMode value");
    });

    it("should not throw an error if the environment variable is not set", () => {
      delete process.env[ENV_ACCOUNT_ID_ENDPOINT_MODE];
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.environmentVariableSelector;
      expect(() => selector(process.env)).not.toThrow();
    });
  });

  describe("configFileSelector", () => {
    it("should return the value set in the configuration file", () => {
      const testValue = "required";
      const profile = { [CONFIG_ACCOUNT_ID_ENDPOINT_MODE]: testValue };
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.configFileSelector;
      expect(selector(profile)).toEqual(testValue);
    });

    it("should throw an error if the configuration file contains an invalid value", () => {
      const profile = { [CONFIG_ACCOUNT_ID_ENDPOINT_MODE]: "InvalidValue" };
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.configFileSelector;
      expect(() => selector(profile)).toThrow("Invalid AccountIdEndpointMode value");
    });

    it("should not throw an error if the configuration file does not contain the setting", () => {
      const profile = {};
      const selector = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.configFileSelector;
      expect(() => selector(profile)).not.toThrow();
    });
  });

  describe("default", () => {
    it("should return the default value", () => {
      const defaultValue = NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS.default;
      expect(defaultValue).toEqual(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE);
    });
  });
});
