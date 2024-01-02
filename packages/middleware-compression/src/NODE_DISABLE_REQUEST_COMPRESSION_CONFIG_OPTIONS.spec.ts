import { booleanSelector, SelectorType } from "@smithy/util-config-provider";

import {
  DEFAULT_DISABLE_REQUEST_COMPRESSION,
  NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS,
  NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME,
  NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME,
} from "./NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS";

jest.mock("@smithy/util-config-provider");

describe("NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS", () => {
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
    const env: { [NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME]: any } = {} as any;
    const { environmentVariableSelector } = NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS;
    test(environmentVariableSelector, env, NODE_DISABLE_REQUEST_COMPRESSION_ENV_NAME, SelectorType.ENV);
  });

  describe("calls booleanSelector for configFileSelector", () => {
    const profileContent: { [NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME]: any } = {} as any;
    const { configFileSelector } = NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS;
    test(configFileSelector, profileContent, NODE_DISABLE_REQUEST_COMPRESSION_INI_NAME, SelectorType.CONFIG);
  });

  it(`returns ${DEFAULT_DISABLE_REQUEST_COMPRESSION} for default`, () => {
    const { default: defaultValue } = NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS;
    expect(defaultValue).toEqual(DEFAULT_DISABLE_REQUEST_COMPRESSION);
  });
});
