import { resolveRetryConfig } from "./configurations";
import { StandardRetryStrategy } from "./defaultStrategy";

describe("resolveRetryConfig", () => {
  describe("maxAttempts", () => {
    it("uses passed maxAttempts value if present", () => {
      [1, 2, 3].forEach(maxAttempts => {
        expect(resolveRetryConfig({ maxAttempts }).maxAttempts).toEqual(
          maxAttempts
        );
      });
    });

    it("assigns default value of 3 if maxAttempts not passed", () => {
      expect(resolveRetryConfig({}).maxAttempts).toEqual(3);
    });
  });

  describe("retryStrategy", () => {
    it("uses passed retryStrategy if present", () => {
      const mockRetryStrategy = {
        maxAttempts: 2,
        retry: jest.fn()
      };
      const { retryStrategy } = resolveRetryConfig({
        retryStrategy: mockRetryStrategy
      });
      expect(retryStrategy).toEqual(mockRetryStrategy);
    });

    describe("creates StandardRetryStrategy if retryStrategy not present", () => {
      describe("uses maxAttempts if present", () => {
        [1, 2, 3].forEach(maxAttempts => {
          const { retryStrategy } = resolveRetryConfig({ maxAttempts });
          expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
          expect(retryStrategy.maxAttempts).toBe(maxAttempts);
        });
      });

      it("uses default 3 if maxAttempts is not present", () => {
        const { retryStrategy } = resolveRetryConfig({});
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
        expect(retryStrategy.maxAttempts).toBe(3);
      });
    });
  });
});
