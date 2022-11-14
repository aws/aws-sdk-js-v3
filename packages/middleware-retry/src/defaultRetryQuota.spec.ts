import { SdkError } from "@aws-sdk/types";
import { INITIAL_RETRY_TOKENS, NO_RETRY_INCREMENT, RETRY_COST, TIMEOUT_RETRY_COST } from "@aws-sdk/util-retry";

import { getDefaultRetryQuota } from "./defaultRetryQuota";

describe("defaultRetryQuota", () => {
  const getMockError = () => new Error() as SdkError;
  const getMockTimeoutError = () =>
    Object.assign(new Error(), {
      name: "TimeoutError",
    }) as SdkError;

  const getDrainedRetryQuota = (
    targetCapacity: number,
    error: SdkError,
    initialRetryTokens: number = INITIAL_RETRY_TOKENS
  ) => {
    const retryQuota = getDefaultRetryQuota(initialRetryTokens);
    let availableCapacity = initialRetryTokens;
    while (availableCapacity >= targetCapacity) {
      retryQuota.retrieveRetryTokens(error);
      availableCapacity -= targetCapacity;
    }
    return retryQuota;
  };

  describe("custom initial retry tokens", () => {
    it("hasRetryTokens returns false if capacity is not available", () => {
      const customRetryTokens = 100;
      const error = getMockError();
      const retryQuota = getDrainedRetryQuota(RETRY_COST, error, customRetryTokens);
      expect(retryQuota.hasRetryTokens(error)).toBe(false);
    });

    it("retrieveRetryToken throws error if retry tokens not available", () => {
      const customRetryTokens = 100;
      const error = getMockError();
      const retryQuota = getDrainedRetryQuota(RETRY_COST, error, customRetryTokens);
      expect(() => {
        retryQuota.retrieveRetryTokens(error);
      }).toThrowError(new Error("No retry token available"));
    });
  });

  describe("hasRetryTokens", () => {
    describe("returns true if capacity is available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        expect(getDefaultRetryQuota(INITIAL_RETRY_TOKENS).hasRetryTokens(timeoutError)).toBe(true);
      });

      it("when it's not TimeoutError", () => {
        expect(getDefaultRetryQuota(INITIAL_RETRY_TOKENS).hasRetryTokens(getMockError())).toBe(true);
      });
    });

    describe("returns false if capacity is not available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        const retryQuota = getDrainedRetryQuota(TIMEOUT_RETRY_COST, timeoutError);
        expect(retryQuota.hasRetryTokens(timeoutError)).toBe(false);
      });

      it("when it's not TimeoutError", () => {
        const error = getMockError();
        const retryQuota = getDrainedRetryQuota(RETRY_COST, error);
        expect(retryQuota.hasRetryTokens(error)).toBe(false);
      });
    });
  });

  describe("retrieveRetryToken", () => {
    describe("returns retry tokens amount if available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        expect(getDefaultRetryQuota(INITIAL_RETRY_TOKENS).retrieveRetryTokens(timeoutError)).toBe(TIMEOUT_RETRY_COST);
      });

      it("when it's not TimeoutError", () => {
        expect(getDefaultRetryQuota(INITIAL_RETRY_TOKENS).retrieveRetryTokens(getMockError())).toBe(RETRY_COST);
      });
    });

    describe("throws error if retry tokens not available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        const retryQuota = getDrainedRetryQuota(TIMEOUT_RETRY_COST, timeoutError);
        expect(() => {
          retryQuota.retrieveRetryTokens(timeoutError);
        }).toThrowError(new Error("No retry token available"));
      });

      it("when it's not TimeoutError", () => {
        const error = getMockError();
        const retryQuota = getDrainedRetryQuota(RETRY_COST, error);
        expect(() => {
          retryQuota.retrieveRetryTokens(error);
        }).toThrowError(new Error("No retry token available"));
      });
    });
  });

  describe("releaseRetryToken", () => {
    it("adds capacityReleaseAmount if passed", () => {
      const error = getMockError();
      const retryQuota = getDrainedRetryQuota(RETRY_COST, error);

      // Ensure that retry tokens are not available.
      expect(retryQuota.hasRetryTokens(error)).toBe(false);

      // Release RETRY_COST tokens.
      retryQuota.releaseRetryTokens(RETRY_COST);
      expect(retryQuota.hasRetryTokens(error)).toBe(true);
      expect(retryQuota.retrieveRetryTokens(error)).toBe(RETRY_COST);
      expect(retryQuota.hasRetryTokens(error)).toBe(false);
    });

    it("adds NO_RETRY_INCREMENT if capacityReleaseAmount not passed", () => {
      const error = getMockError();
      const retryQuota = getDrainedRetryQuota(RETRY_COST, error);

      // retry tokens will not be available till NO_RETRY_INCREMENT is added
      // till it's equal to RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST)
      let tokensReleased = 0;
      const tokensToBeReleased = RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST);
      while (tokensReleased < tokensToBeReleased) {
        expect(retryQuota.hasRetryTokens(error)).toBe(false);
        retryQuota.releaseRetryTokens();
        tokensReleased += NO_RETRY_INCREMENT;
      }
      expect(retryQuota.hasRetryTokens(error)).toBe(true);
    });

    it("ensures availableCapacity is maxed at INITIAL_RETRY_TOKENS", () => {
      const error = getMockError();
      const retryQuota = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);

      // release 100 tokens.
      [...Array(100).keys()].forEach(() => {
        retryQuota.releaseRetryTokens();
      });

      // availableCapacity is still maxed at INITIAL_RETRY_TOKENS
      // hasRetryTokens would be true only till INITIAL_RETRY_TOKENS/RETRY_COST times
      [...Array(Math.floor(INITIAL_RETRY_TOKENS / RETRY_COST)).keys()].forEach(() => {
        expect(retryQuota.hasRetryTokens(error)).toBe(true);
        retryQuota.retrieveRetryTokens(error);
      });
      expect(retryQuota.hasRetryTokens(error)).toBe(false);
    });
  });
});
