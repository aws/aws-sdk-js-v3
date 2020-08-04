import {
  NODE_USE_ARN_REGION_CONFIG_OPTIONS as loadOptions,
  NODE_USE_ARN_REGION_ENV_NAME,
  NODE_USE_ARN_REGION_INI_NAME,
} from "./configurations";
describe("Node useArnRegion config loader", () => {
  describe("environment variable selector", () => {
    const env: { [NODE_USE_ARN_REGION_ENV_NAME]: any } = {} as any;

    beforeEach(() => {
      delete env[NODE_USE_ARN_REGION_ENV_NAME];
    });

    it(`should return undefined if the environment variable doesn't have ${NODE_USE_ARN_REGION_ENV_NAME}`, () => {
      expect(loadOptions.environmentVariableSelector(env)).toBeUndefined();
    });

    [
      { envValue: "true", parsed: true },
      { envValue: "false", parsed: false },
    ].forEach(({ envValue, parsed }) => {
      it(`should return boolean if the environment variable ${NODE_USE_ARN_REGION_ENV_NAME} is ${envValue}`, () => {
        env[NODE_USE_ARN_REGION_ENV_NAME] = envValue;
        expect(loadOptions.environmentVariableSelector(env)).toBe(parsed);
      });
    });

    ["0", "1", "yes", "no", undefined, null, void 0, ""].forEach((envValue) => {
      it(`should throw if the environment variable ${NODE_USE_ARN_REGION_ENV_NAME} is ${envValue}`, () => {
        env[NODE_USE_ARN_REGION_ENV_NAME] = envValue as any;
        expect(() => loadOptions.environmentVariableSelector(env)).toThrow(
          `Cannot load env ${NODE_USE_ARN_REGION_ENV_NAME}. Expected "true" or "false", got ${envValue}.`
        );
      });
    });
  });

  describe("shared INI files selector", () => {
    const profileContent: { [NODE_USE_ARN_REGION_INI_NAME]: any } = {} as any;

    beforeEach(() => {
      delete profileContent[NODE_USE_ARN_REGION_INI_NAME];
    });

    it(`should return undefined if shared config profile doesn't have ${NODE_USE_ARN_REGION_INI_NAME}`, () => {
      expect(loadOptions.configFileSelector(profileContent)).toBeUndefined();
    });

    [
      { value: "true", parsed: true },
      { value: "false", parsed: false },
    ].forEach(({ value, parsed }) => {
      it(`should return boolean if the shared config profile ${NODE_USE_ARN_REGION_INI_NAME} is ${value}`, () => {
        profileContent[NODE_USE_ARN_REGION_INI_NAME] = value;
        expect(loadOptions.configFileSelector(profileContent)).toBe(parsed);
      });
    });

    ["0", "1", "yes", "no", undefined, null, void 0, ""].forEach((value) => {
      it(`should throw if the shared config profile ${NODE_USE_ARN_REGION_INI_NAME} is ${value}`, () => {
        profileContent[NODE_USE_ARN_REGION_INI_NAME] = value as any;
        expect(() => loadOptions.configFileSelector(profileContent)).toThrow(
          `Cannot load shared config entry ${NODE_USE_ARN_REGION_INI_NAME}. Expected "true" or "false", got ${value}.`
        );
      });
    });
  });
});
