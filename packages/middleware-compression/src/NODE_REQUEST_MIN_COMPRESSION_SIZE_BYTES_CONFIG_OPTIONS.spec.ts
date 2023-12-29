import { numberSelector, SelectorType } from "@smithy/util-config-provider";

import {
  DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
  NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS,
  NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME,
  NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME,
} from "./NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS";

jest.mock("@smithy/util-config-provider");

describe("NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const test = (func: Function, obj: Record<string, string>, key: string, type: SelectorType) => {
    it.each([0, 1, undefined])("returns %s", (output) => {
      (numberSelector as jest.Mock).mockReturnValueOnce(output);
      expect(func(obj)).toEqual(output);
      expect(numberSelector).toBeCalledWith(obj, key, type);
    });

    it("throws error", () => {
      const mockError = new Error("error");
      (numberSelector as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => {
        func(obj);
      }).toThrow(mockError);
    });
  };

  describe("calls numberSelector for environmentVariableSelector", () => {
    const env: { [NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME]: any } = {} as any;
    const { environmentVariableSelector } = NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS;
    test(environmentVariableSelector, env, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_ENV_NAME, SelectorType.ENV);
  });

  describe("calls numberSelector for configFileSelector", () => {
    const profileContent: { [NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME]: any } = {} as any;
    const { configFileSelector } = NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS;
    test(configFileSelector, profileContent, NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_INI_NAME, SelectorType.CONFIG);
  });

  it(`returns ${DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES} for default`, () => {
    const { default: defaultValue } = NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS;
    expect(defaultValue).toEqual(DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES);
  });
});
