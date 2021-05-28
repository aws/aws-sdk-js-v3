import {
  CONFIG_MAX_ATTEMPTS,
  DEFAULT_MAX_ATTEMPTS,
  ENV_MAX_ATTEMPTS,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  resolveRetryConfig,
} from "./configurations";
import { StandardRetryStrategy } from "./defaultStrategy";

jest.mock("./defaultStrategy");

describe("resolveRetryConfig", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("maxAttempts", () => {
    it("assigns maxAttempts value if present", async () => {
      for (const maxAttempts of [1, 2, 3]) {
        const output = await resolveRetryConfig({ maxAttempts }).maxAttempts();
        expect(output).toStrictEqual(maxAttempts);
      }
    });
  });

  describe("retryStrategy", () => {
    it("passes retryStrategy if present", () => {
      const mockRetryStrategy = {
        retry: jest.fn(),
      };
      const { retryStrategy } = resolveRetryConfig({
        retryStrategy: mockRetryStrategy,
      });
      expect(retryStrategy).toEqual(mockRetryStrategy);
    });

    describe("creates StandardRetryStrategy if retryStrategy not present", () => {
      describe("passes maxAttempts if present", () => {
        for (const maxAttempts of [1, 2, 3]) {
          it(`when maxAttempts=${maxAttempts}`, async () => {
            resolveRetryConfig({ maxAttempts });
            expect(StandardRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
            const output = await (StandardRetryStrategy as jest.Mock).mock.calls[0][0]();
            expect(output).toStrictEqual(maxAttempts);
          });
        }
      });
    });
  });

  describe("node maxAttempts config options", () => {
    describe("environmentVariableSelector", () => {
      it(`should return value of env ${ENV_MAX_ATTEMPTS} is number`, () => {
        const value = "3";
        const env = { [ENV_MAX_ATTEMPTS]: value };
        expect(NODE_MAX_ATTEMPT_CONFIG_OPTIONS.environmentVariableSelector(env)).toBe(parseInt(value));
      });

      it(`should return undefined if env ${ENV_MAX_ATTEMPTS} is not set`, () => {
        expect(NODE_MAX_ATTEMPT_CONFIG_OPTIONS.environmentVariableSelector({})).toBe(undefined);
      });

      it(`should throw if if value of env ${ENV_MAX_ATTEMPTS} is not a number`, () => {
        const value = "not a number";
        const env = { [ENV_MAX_ATTEMPTS]: value };
        expect(() => NODE_MAX_ATTEMPT_CONFIG_OPTIONS.environmentVariableSelector(env)).toThrow("");
      });
    });

    describe("configFileSelector", () => {
      it(`should return value of shared INI files entry ${CONFIG_MAX_ATTEMPTS} is number`, () => {
        const value = "3";
        const profile = { [CONFIG_MAX_ATTEMPTS]: value };
        expect(NODE_MAX_ATTEMPT_CONFIG_OPTIONS.configFileSelector(profile)).toBe(parseInt(value));
      });

      it(`should return undefined if shared INI files entry ${CONFIG_MAX_ATTEMPTS} is not set`, () => {
        expect(NODE_MAX_ATTEMPT_CONFIG_OPTIONS.configFileSelector({})).toBe(undefined);
      });

      it(`should throw if shared INI files entry ${CONFIG_MAX_ATTEMPTS} is not a number`, () => {
        const value = "not a number";
        const profile = { [CONFIG_MAX_ATTEMPTS]: value };
        expect(() => NODE_MAX_ATTEMPT_CONFIG_OPTIONS.configFileSelector(profile)).toThrow("");
      });
    });

    describe("default", () => {
      it(`should equal to ${DEFAULT_MAX_ATTEMPTS}`, () => {
        expect(NODE_MAX_ATTEMPT_CONFIG_OPTIONS.default).toBe(DEFAULT_MAX_ATTEMPTS);
      });
    });
  });
});
