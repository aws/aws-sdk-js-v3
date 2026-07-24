import { describe, expect, test as it } from "vitest";

import { DynamoDBDocumentClient, type TranslateConfig } from "./DynamoDBDocumentClient";

// Minimal mock of DynamoDBClient
const mockDynamoDBClient = {
  config: {},
  middlewareStack: { add() {}, addRelativeTo() {} },
} as any;

describe("DynamoDBDocumentClient translateConfig", () => {
  function getTranslateConfig(translateConfig?: TranslateConfig) {
    const docClient = DynamoDBDocumentClient.from(mockDynamoDBClient, translateConfig);
    return docClient.config.translateConfig;
  }

  describe("legacy marshallOptions/unmarshallOptions (no encodeOptions/decodeOptions)", () => {
    it("maps empty config to legacy-compatible defaults", () => {
      const config = getTranslateConfig({});
      expect(config?.encodeOptions).toEqual({
        convertEmptyValues: false,
        convertEmptySetsToNull: false,
        removeUndefinedValues: false,
        convertClassInstanceToMap: false,
        allowImpreciseNumbers: false,
      });
      expect(config?.decodeOptions).toEqual({
        wrapNumbers: false,
        useMaps: false,
      });
    });

    it("maps undefined config to legacy-compatible defaults", () => {
      const config = getTranslateConfig(undefined);
      expect(config?.encodeOptions).toEqual({
        convertEmptyValues: false,
        convertEmptySetsToNull: false,
        removeUndefinedValues: false,
        convertClassInstanceToMap: false,
        allowImpreciseNumbers: false,
      });
      expect(config?.decodeOptions).toEqual({
        wrapNumbers: false,
        useMaps: false,
      });
    });

    it("maps marshallOptions.removeUndefinedValues=true", () => {
      const config = getTranslateConfig({
        marshallOptions: { removeUndefinedValues: true },
      });
      expect(config?.encodeOptions?.removeUndefinedValues).toBe(true);
    });

    it("maps marshallOptions.convertClassInstanceToMap=true", () => {
      const config = getTranslateConfig({
        marshallOptions: { convertClassInstanceToMap: true },
      });
      expect(config?.encodeOptions?.convertClassInstanceToMap).toBe(true);
    });

    it("maps marshallOptions.convertEmptyValues=true to both convertEmptyValues and convertEmptySetsToNull", () => {
      const config = getTranslateConfig({
        marshallOptions: { convertEmptyValues: true },
      });
      expect(config?.encodeOptions?.convertEmptyValues).toBe(true);
      expect(config?.encodeOptions?.convertEmptySetsToNull).toBe(true);
    });

    it("maps marshallOptions.allowImpreciseNumbers=true", () => {
      const config = getTranslateConfig({
        marshallOptions: { allowImpreciseNumbers: true },
      });
      expect(config?.encodeOptions?.allowImpreciseNumbers).toBe(true);
    });

    it("maps unmarshallOptions.wrapNumbers=true", () => {
      const config = getTranslateConfig({
        unmarshallOptions: { wrapNumbers: true },
      });
      expect(config?.decodeOptions?.wrapNumbers).toBe(true);
    });

    it("maps unmarshallOptions.wrapNumbers as function", () => {
      const customFn = (s: string) => Number(s) * 2;
      const config = getTranslateConfig({
        unmarshallOptions: { wrapNumbers: customFn },
      });
      expect(config?.decodeOptions?.wrapNumbers).toBe(customFn);
    });

    it("maps all marshallOptions together", () => {
      const config = getTranslateConfig({
        marshallOptions: {
          removeUndefinedValues: true,
          convertClassInstanceToMap: true,
          convertEmptyValues: true,
          allowImpreciseNumbers: true,
        },
        unmarshallOptions: {
          wrapNumbers: true,
        },
      });
      expect(config?.encodeOptions).toEqual({
        convertEmptyValues: true,
        convertEmptySetsToNull: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
        allowImpreciseNumbers: true,
      });
      expect(config?.decodeOptions).toEqual({
        wrapNumbers: true,
        useMaps: false,
      });
    });
  });

  describe("new encodeOptions/decodeOptions (takes precedence, no mapping)", () => {
    it("uses encodeOptions directly without mapping", () => {
      const config = getTranslateConfig({
        encodeOptions: {
          removeUndefinedValues: true,
          convertClassInstanceToMap: true,
          convertEmptySetsToNull: true,
        },
      });
      expect(config?.encodeOptions).toEqual({
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
        convertEmptySetsToNull: true,
      });
    });

    it("uses decodeOptions directly without mapping", () => {
      const config = getTranslateConfig({
        decodeOptions: {
          wrapNumbers: true,
          useMaps: true,
        },
      });
      expect(config?.decodeOptions).toEqual({
        wrapNumbers: true,
        useMaps: true,
      });
    });

    it("does NOT apply legacy defaults when encodeOptions is present", () => {
      const config = getTranslateConfig({
        encodeOptions: {},
        decodeOptions: {},
      });
      // Should be empty objects — new API uses its own defaults at encode/decode time
      expect(config?.encodeOptions).toEqual({});
      expect(config?.decodeOptions).toEqual({});
    });

    it("ignores marshallOptions when encodeOptions is present", () => {
      const config = getTranslateConfig({
        encodeOptions: { removeUndefinedValues: true },
        marshallOptions: { removeUndefinedValues: false, convertClassInstanceToMap: true },
      });
      expect(config?.encodeOptions).toEqual({ removeUndefinedValues: true });
      // marshallOptions not mapped
      expect(config?.encodeOptions?.convertClassInstanceToMap).toBeUndefined();
    });

    it("ignores unmarshallOptions when decodeOptions is present", () => {
      const config = getTranslateConfig({
        decodeOptions: { useMaps: true },
        unmarshallOptions: { wrapNumbers: true },
      });
      expect(config?.decodeOptions).toEqual({ useMaps: true });
      expect(config?.decodeOptions?.wrapNumbers).toBeUndefined();
    });
  });
});
