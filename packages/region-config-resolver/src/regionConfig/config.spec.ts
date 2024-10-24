import { describe, expect, test as it } from "vitest";

import {
  NODE_REGION_CONFIG_FILE_OPTIONS,
  NODE_REGION_CONFIG_OPTIONS,
  REGION_ENV_NAME,
  REGION_INI_NAME,
} from "./config";

describe("config", () => {
  describe("NODE_REGION_CONFIG_OPTIONS", () => {
    describe("environmentVariableSelector", () => {
      const { environmentVariableSelector } = NODE_REGION_CONFIG_OPTIONS;
      it.each([undefined, "mockRegion"])(`when env[${REGION_ENV_NAME}]: %s`, (mockEndpoint) => {
        expect(environmentVariableSelector({ [REGION_ENV_NAME]: mockEndpoint })).toBe(mockEndpoint);
      });
    });

    describe("configFileSelector", () => {
      const { configFileSelector } = NODE_REGION_CONFIG_OPTIONS;
      it.each([undefined, "mockRegion"])(`when env[${REGION_INI_NAME}]: %s`, (mockEndpoint) => {
        expect(configFileSelector({ [REGION_INI_NAME]: mockEndpoint })).toBe(mockEndpoint);
      });
    });

    it("default throws error", () => {
      const { default: defaultKey } = NODE_REGION_CONFIG_OPTIONS;
      expect(() => {
        (defaultKey as any)();
      }).toThrowError(new Error("Region is missing"));
    });
  });

  describe("NODE_REGION_CONFIG_FILE_OPTIONS", () => {
    it("preferredFile contains credentials", () => {
      const { preferredFile } = NODE_REGION_CONFIG_FILE_OPTIONS;
      expect(preferredFile).toBe("credentials");
    });
  });
});
