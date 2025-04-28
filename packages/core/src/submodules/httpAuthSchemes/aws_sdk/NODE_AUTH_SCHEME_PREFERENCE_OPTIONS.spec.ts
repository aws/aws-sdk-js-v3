import { afterEach, describe, expect, test as it, vi } from "vitest";

import { getArrayForCommaSeparatedString } from "../utils/getArrayForCommaSeparatedString";
import { NODE_AUTH_SCHEME_PREFERENCE_OPTIONS } from "./NODE_AUTH_SCHEME_PREFERENCE_OPTIONS";

vi.mock("../utils/getArrayForCommaSeparatedString");

describe("NODE_AUTH_SCHEME_PREFERENCE_OPTIONS", () => {
  const mockInput = "a,b,c";
  const mockOutput = ["a", "b", "c"];

  vi.mocked(getArrayForCommaSeparatedString).mockReturnValue(mockOutput);

  afterEach(() => {
    vi.clearAllMocks();
  });

  const test = (func: Function, key: string) => {
    it("returns undefined if no value is provided", () => {
      expect(func({})).toEqual(undefined);
      expect(getArrayForCommaSeparatedString).not.toBeCalled();
    });

    it("returns list if value is defined", () => {
      expect(func({ [key]: mockInput })).toEqual(mockOutput);
      expect(getArrayForCommaSeparatedString).toHaveBeenCalledTimes(1);
      expect(getArrayForCommaSeparatedString).toBeCalledWith(mockInput);
    });
  };

  describe("environmentVariableSelector", () => {
    const { environmentVariableSelector } = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
    test(environmentVariableSelector, "AWS_AUTH_SCHEME_PREFERENCE");
  });

  describe("configFileSelector", () => {
    const { configFileSelector } = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
    test(configFileSelector, "auth_scheme_preference");
  });

  it("returns false for default", () => {
    const { default: defaultValue } = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
    expect(defaultValue).toEqual([]);
  });
});
