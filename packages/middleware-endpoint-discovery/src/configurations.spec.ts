import { NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS } from "./configurations";

const {
  environmentVariableSelector,
  configFileSelector,
  default: defaultSelector,
} = NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS;

describe("NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS", () => {
  describe("environmentVariableSelector", () => {
    const ENV_ENDPOINT_DISCOVERY = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];
    describe.each(ENV_ENDPOINT_DISCOVERY)("env key: %p", (envKey) => {
      const envValues = {};

      beforeEach(() => {
        ENV_ENDPOINT_DISCOVERY.forEach((envKey) => {
          envValues[envKey] = process.env[envKey];
          delete process.env[envKey];
        });
      });

      afterEach(() => {
        ENV_ENDPOINT_DISCOVERY.forEach((envKey) => {
          process.env[envKey] = envValues[envKey];
          delete envValues[envKey];
        });
      });

      describe(`returns false`, () => {
        it.each(["false", "0"])("if value stored is %s", (falsyValue) => {
          process.env[envKey] = falsyValue;
          expect(environmentVariableSelector(process.env)).toEqual(false);
        });
      });

      describe(`returns true`, () => {
        it.each(["true", "1", "non-empty-value"])("if value stored is %s", (truthyValue) => {
          process.env[envKey] = truthyValue;
          expect(environmentVariableSelector(process.env)).toEqual(true);
        });
      });

      it(`returns undefined if value is not stored`, () => {
        expect(environmentVariableSelector(process.env)).not.toBeDefined();
      });

      it(`throws error if value stored is empty`, () => {
        process.env[envKey] = "";
        expect(() => {
          environmentVariableSelector(process.env);
        }).toThrow();
      });
    });
  });

  describe("configFileSelector", () => {
    const CONFIG_ENDPOINT_DISCOVERY = "endpoint_discovery_enabled";

    describe(`returns false`, () => {
      it.each(["false", "0"])("if value stored is %s", (falsyValue) => {
        expect(configFileSelector({ [CONFIG_ENDPOINT_DISCOVERY]: falsyValue })).toEqual(false);
      });
    });

    describe(`returns true`, () => {
      it.each(["true", "1", "non-empty-value"])("if value stored is %s", (truthyValue) => {
        expect(configFileSelector({ [CONFIG_ENDPOINT_DISCOVERY]: truthyValue })).toEqual(true);
      });
    });

    it(`returns undefined if value is not available`, () => {
      expect(configFileSelector({})).not.toBeDefined();
    });

    it(`throws if value stored is undefined`, () => {
      expect(() => {
        configFileSelector({ [CONFIG_ENDPOINT_DISCOVERY]: undefined });
      }).toThrow();
    });
  });

  it("defaultSelector returns undefined", () => {
    expect(defaultSelector).toBeUndefined();
  });
});
