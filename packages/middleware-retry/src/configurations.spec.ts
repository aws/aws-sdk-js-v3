import { AdaptiveRetryStrategy } from "./AdaptiveRetryStrategy";
import { DEFAULT_MAX_ATTEMPTS } from "./config";
import {
  CONFIG_MAX_ATTEMPTS,
  ENV_MAX_ATTEMPTS,
  NODE_MAX_ATTEMPT_CONFIG_OPTIONS,
  resolveRetryConfig,
} from "./configurations";
import { StandardRetryStrategy } from "./StandardRetryStrategy";

jest.mock("./AdaptiveRetryStrategy");
jest.mock("./StandardRetryStrategy");

describe(resolveRetryConfig.name, () => {
  const retryModeProvider = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("maxAttempts", () => {
    it("assigns maxAttempts value if present", async () => {
      for (const maxAttempts of [1, 2, 3]) {
        const output = await resolveRetryConfig({ maxAttempts, retryModeProvider }).maxAttempts();
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
        retryModeProvider,
        retryStrategy: mockRetryStrategy,
      });
      expect(retryStrategy()).resolves.toEqual(mockRetryStrategy);
    });

    describe("creates RetryStrategy if retryStrategy not present", () => {
      describe("StandardRetryStrategy", () => {
        describe("when retryMode=standard", () => {
          describe("passes maxAttempts if present", () => {
            const retryMode = "standard";
            for (const maxAttempts of [1, 2, 3]) {
              it(`when maxAttempts=${maxAttempts}`, async () => {
                const { retryStrategy } = resolveRetryConfig({ maxAttempts, retryMode, retryModeProvider });
                await retryStrategy();
                expect(StandardRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
                expect(AdaptiveRetryStrategy as jest.Mock).not.toHaveBeenCalled();
                const output = await (StandardRetryStrategy as jest.Mock).mock.calls[0][0]();
                expect(output).toStrictEqual(maxAttempts);
              });
            }
          });
        });

        describe("when retryModeProvider returns 'standard'", () => {
          describe("passes maxAttempts if present", () => {
            beforeEach(() => {
              retryModeProvider.mockResolvedValueOnce("standard");
            });
            for (const maxAttempts of [1, 2, 3]) {
              it(`when maxAttempts=${maxAttempts}`, async () => {
                const { retryStrategy } = resolveRetryConfig({ maxAttempts, retryModeProvider });
                await retryStrategy();
                expect(retryModeProvider).toHaveBeenCalledTimes(1);
                expect(StandardRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
                expect(AdaptiveRetryStrategy as jest.Mock).not.toHaveBeenCalled();
                const output = await (StandardRetryStrategy as jest.Mock).mock.calls[0][0]();
                expect(output).toStrictEqual(maxAttempts);
              });
            }
          });
        });
      });

      describe("AdaptiveRetryStrategy", () => {
        describe("when retryMode=adaptive", () => {
          describe("passes maxAttempts if present", () => {
            const retryMode = "adaptive";
            for (const maxAttempts of [1, 2, 3]) {
              it(`when maxAttempts=${maxAttempts}`, async () => {
                const { retryStrategy } = resolveRetryConfig({ maxAttempts, retryMode, retryModeProvider });
                await retryStrategy();
                expect(StandardRetryStrategy as jest.Mock).not.toHaveBeenCalled();
                expect(AdaptiveRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
                const output = await (AdaptiveRetryStrategy as jest.Mock).mock.calls[0][0]();
                expect(output).toStrictEqual(maxAttempts);
              });
            }
          });
        });

        describe("when retryModeProvider returns 'adaptive'", () => {
          describe("passes maxAttempts if present", () => {
            beforeEach(() => {
              retryModeProvider.mockResolvedValueOnce("adaptive");
            });
            for (const maxAttempts of [1, 2, 3]) {
              it(`when maxAttempts=${maxAttempts}`, async () => {
                const { retryStrategy } = resolveRetryConfig({ maxAttempts, retryModeProvider });
                await retryStrategy();
                expect(retryModeProvider).toHaveBeenCalledTimes(1);
                expect(StandardRetryStrategy as jest.Mock).not.toHaveBeenCalled();
                expect(AdaptiveRetryStrategy as jest.Mock).toHaveBeenCalledTimes(1);
                const output = await (AdaptiveRetryStrategy as jest.Mock).mock.calls[0][0]();
                expect(output).toStrictEqual(maxAttempts);
              });
            }
          });
        });
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
