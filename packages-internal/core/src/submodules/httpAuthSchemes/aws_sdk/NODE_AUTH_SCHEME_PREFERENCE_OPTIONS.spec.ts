import { afterEach, describe, expect, test as it, vi } from "vitest";

import { getArrayForCommaSeparatedString } from "../utils/getArrayForCommaSeparatedString";
import { getBearerTokenEnvKey } from "../utils/getBearerTokenEnvKey";
import { NODE_AUTH_SCHEME_PREFERENCE_OPTIONS } from "./NODE_AUTH_SCHEME_PREFERENCE_OPTIONS";

vi.mock("../utils/getArrayForCommaSeparatedString");
vi.mock("../utils/getBearerTokenEnvKey");

describe("NODE_AUTH_SCHEME_PREFERENCE_OPTIONS", () => {
  const mockInput = "a,b,c";
  const mockOutput = ["a", "b", "c"];
  const mockBearerTokenEnvKey = "AWS_BEARER_TOKEN_SERVICE_NAME";

  vi.mocked(getArrayForCommaSeparatedString).mockReturnValue(mockOutput);
  vi.mocked(getBearerTokenEnvKey).mockReturnValue(mockBearerTokenEnvKey);

  afterEach(() => {
    vi.clearAllMocks();
  });

  const test = (func: Function, key: string) => {
    it("returns undefined if no value is provided", () => {
      expect(func({})).toEqual(undefined);
      expect(getArrayForCommaSeparatedString).not.toBeCalled();
      expect(getBearerTokenEnvKey).not.toBeCalled();
    });

    it("returns list if value is defined", () => {
      expect(func({ [key]: mockInput })).toEqual(mockOutput);
      expect(getArrayForCommaSeparatedString).toHaveBeenCalledTimes(1);
      expect(getArrayForCommaSeparatedString).toBeCalledWith(mockInput);
      expect(getBearerTokenEnvKey).not.toBeCalled();
    });
  };

  describe("environmentVariableSelector", () => {
    const { environmentVariableSelector } = NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
    test(environmentVariableSelector, "AWS_AUTH_SCHEME_PREFERENCE");

    describe("if signingName is defined", () => {
      const env = { AWS_AUTH_SCHEME_PREFERENCE: mockInput };
      const options = { signingName: "Signing Name" };

      afterEach(() => {
        expect(getBearerTokenEnvKey).toHaveBeenCalledTimes(1);
        expect(getBearerTokenEnvKey).toBeCalledWith(options.signingName);
      });

      it(`ignores if mockBearerTokenEnvKey is not set`, () => {
        expect(environmentVariableSelector(env, options)).toEqual(mockOutput);
        expect(getArrayForCommaSeparatedString).toHaveBeenCalledTimes(1);
        expect(getArrayForCommaSeparatedString).toBeCalledWith(mockInput);
      });

      it("returns ['httpBearerAuth'] if mockBearerTokenEnvKey is set", () => {
        const envWithToken = { ...env, [mockBearerTokenEnvKey]: "token" };
        expect(environmentVariableSelector(envWithToken, options)).toEqual(["httpBearerAuth"]);
        expect(getArrayForCommaSeparatedString).not.toHaveBeenCalled();
      });
    });
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
