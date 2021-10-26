import {
  CONFIG_USE_FIPS_ENDPOINT,
  ENV_USE_FIPS_ENDPOINT,
  USE_FIPS_ENDPOINT_CONFIG_OPTIONS,
} from "./UseFipsEndpointConfigOptions";

describe("USE_FIPS_ENDPOINT_CONFIG_OPTIONS", () => {
  const test = (selector, obj, key) => {
    beforeEach(() => {
      delete obj[key];
    });

    it(`should return undefined if ${key} is not defined`, () => {
      expect(selector(obj)).toBeUndefined();
    });

    it.each([
      [true, "true"],
      [false, "false"],
    ])(`should return boolean %s if ${key}="%s"`, (output, input) => {
      obj[key] = input;
      expect(selector(obj)).toBe(output);
    });

    it.each(["0", "1", "yes", "no", undefined, null, void 0, ""])(`should throw if ${key}=%s`, (input) => {
      obj[key] = input;
      expect(() => selector(obj)).toThrow();
    });
  };

  describe("environment variable selector", () => {
    const env: { [ENV_USE_FIPS_ENDPOINT]: any } = {} as any;
    const { environmentVariableSelector } = USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    test(environmentVariableSelector, env, ENV_USE_FIPS_ENDPOINT);
  });

  describe("config file selector", () => {
    const profileContent: { [CONFIG_USE_FIPS_ENDPOINT]: any } = {} as any;
    const { configFileSelector } = USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    test(configFileSelector, profileContent, CONFIG_USE_FIPS_ENDPOINT);
  });

  it("returns false by default", () => {
    const { default: defaultValue } = USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    expect(defaultValue).toEqual(false);
  });
});
