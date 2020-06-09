import { defaultRetryQuota } from "./defaultRetryQuota";
import { SdkError } from "@aws-sdk/smithy-client";
import {
  INITIAL_RETRY_TOKENS,
  TIMEOUT_RETRY_COST,
  RETRY_COST,
  NO_RETRY_INCREMENT
} from "./constants";

describe("defaultRetryQuota", () => {
  const getMockError = () => new Error() as SdkError;
  const getMockTimeoutError = () =>
    Object.assign(new Error(), {
      name: "TimeoutError"
    }) as SdkError;

  const getDrainedRetryQuota = (targetCapacity: number, error: SdkError) => {
    const retryQuota = defaultRetryQuota();
    let availableCapacity = INITIAL_RETRY_TOKENS;
    while (availableCapacity >= targetCapacity) {
      retryQuota.retrieveRetryToken(error);
      availableCapacity -= targetCapacity;
    }
    return retryQuota;
  };

  describe("hasRetryTokens", () => {
    describe("returns true if capacity is available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        expect(defaultRetryQuota().hasRetryTokens(timeoutError)).toBe(true);
      });

      it("when it's not TimeoutError", () => {
        expect(defaultRetryQuota().hasRetryTokens(getMockError())).toBe(true);
      });
    });

    describe("returns false if capacity is not available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        const retryQuota = getDrainedRetryQuota(
          TIMEOUT_RETRY_COST,
          timeoutError
        );
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
        expect(defaultRetryQuota().retrieveRetryToken(timeoutError)).toBe(
          TIMEOUT_RETRY_COST
        );
      });

      it("when it's not TimeoutError", () => {
        expect(defaultRetryQuota().retrieveRetryToken(getMockError())).toBe(
          RETRY_COST
        );
      });
    });

    describe("throws error if retry tokens not available", () => {
      it("when it's TimeoutError", () => {
        const timeoutError = getMockTimeoutError();
        const retryQuota = getDrainedRetryQuota(
          TIMEOUT_RETRY_COST,
          timeoutError
        );
        expect(() => {
          retryQuota.retrieveRetryToken(timeoutError);
        }).toThrowError(new Error("No retry token available"));
      });

      it("when it's not TimeoutError", () => {
        const error = getMockError();
        const retryQuota = getDrainedRetryQuota(RETRY_COST, error);
        expect(() => {
          retryQuota.retrieveRetryToken(error);
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
      retryQuota.releaseRetryToken(RETRY_COST);
      expect(retryQuota.hasRetryTokens(error)).toBe(true);
      expect(retryQuota.retrieveRetryToken(error)).toBe(RETRY_COST);
      expect(retryQuota.hasRetryTokens(error)).toBe(false);
    });

    it("adds NO_RETRY_INCREMENT if capacityReleaseAmount not passed", () => {
      const error = getMockError();
      const retryQuota = getDrainedRetryQuota(RETRY_COST, error);

      // retry tokens will not be available till NO_RETRY_INCREMENT is added
      // till it's equal to RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST)
      let tokensReleased = 0;
      const tokensToBeReleased =
        RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST);
      while (tokensReleased < tokensToBeReleased) {
        expect(retryQuota.hasRetryTokens(error)).toBe(false);
        retryQuota.releaseRetryToken();
        tokensReleased += NO_RETRY_INCREMENT;
      }
      expect(retryQuota.hasRetryTokens(error)).toBe(true);
    });

    it("ensures availableCapacity is maxed at INITIAL_RETRY_TOKENS", () => {
      const error = getMockError();
      const retryQuota = defaultRetryQuota();

      // release 100 tokens.
      [...Array(100).keys()].forEach(key => {
        retryQuota.releaseRetryToken();
      });

      // availableCapacity is still maxed at INITIAL_RETRY_TOKENS
      // hasRetryTokens would be true only till INITIAL_RETRY_TOKENS/RETRY_COST times
      [...Array(Math.floor(INITIAL_RETRY_TOKENS / RETRY_COST)).keys()].forEach(
        key => {
          expect(retryQuota.hasRetryTokens(error)).toBe(true);
          retryQuota.retrieveRetryToken(error);
        }
      );
      expect(retryQuota.hasRetryTokens(error)).toBe(false);
    });
  });
});
