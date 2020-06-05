import { resolveRetryConfig } from "./configurations";

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
    it("uses passed retryStrategy if present", () => {});
    describe("creates StandardRetryStrategy if retryStrategy not present", () => {
      it("uses maxAttempts if present", () => {});
      it("uses default 3 if maxAttempts is not present", () => {});
    });
  });
});
