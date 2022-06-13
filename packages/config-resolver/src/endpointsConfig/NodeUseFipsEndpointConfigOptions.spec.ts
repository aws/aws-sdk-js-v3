import { booleanSelector, SelectorType } from "@aws-sdk/util-config-provider";

import {
  CONFIG_USE_FIPS_ENDPOINT,
  DEFAULT_USE_FIPS_ENDPOINT,
  ENV_USE_FIPS_ENDPOINT,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
} from "./NodeUseFipsEndpointConfigOptions";

jest.mock("@aws-sdk/util-config-provider");

describe("NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const test = (func: Function, obj: Record<string, string>, key: string, type: SelectorType) => {
    it.each([true, false, undefined])("returns %s", (output) => {
      (booleanSelector as jest.Mock).mockReturnValueOnce(output);
      expect(func(obj)).toEqual(output);
      expect(booleanSelector).toBeCalledWith(obj, key, type);
    });

    it("throws error", () => {
      const mockError = new Error("error");
      (booleanSelector as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => {
        func(obj);
      }).toThrow(mockError);
    });
  };

  describe("calls booleanSelector for environmentVariableSelector", () => {
    const env: { [ENV_USE_FIPS_ENDPOINT]: any } = {} as any;
    const { environmentVariableSelector } = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    test(environmentVariableSelector, env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV);
  });

  describe("calls booleanSelector for configFileSelector", () => {
    const profileContent: { [CONFIG_USE_FIPS_ENDPOINT]: any } = {} as any;
    const { configFileSelector } = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    test(configFileSelector, profileContent, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG);
  });

  it("returns false for default", () => {
    const { default: defaultValue } = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    expect(defaultValue).toEqual(DEFAULT_USE_FIPS_ENDPOINT);
  });
});
