import { DefaultRateLimiter, RateLimiter, RETRY_MODES } from "@aws-sdk/util-retry";

import { AdaptiveRetryStrategy } from "./AdaptiveRetryStrategy";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RetryQuota } from "./types";

jest.mock("./StandardRetryStrategy");
jest.mock("@aws-sdk/util-retry");

describe(AdaptiveRetryStrategy.name, () => {
  const maxAttemptsProvider = jest.fn();
  const mockDefaultRateLimiter = {
    getSendToken: jest.fn(),
    updateClientSendingRate: jest.fn(),
  };

  beforeEach(() => {
    (DefaultRateLimiter as jest.Mock).mockReturnValue(mockDefaultRateLimiter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("constructor", () => {
    it("calls super constructor", () => {
      const retryDecider = jest.fn();
      const delayDecider = jest.fn();
      const retryQuota = {} as RetryQuota;
      const rateLimiter = {} as RateLimiter;

      new AdaptiveRetryStrategy(maxAttemptsProvider, {
        retryDecider,
        delayDecider,
        retryQuota,
        rateLimiter,
      });
      expect(StandardRetryStrategy).toHaveBeenCalledWith(maxAttemptsProvider, {
        retryDecider,
        delayDecider,
        retryQuota,
      });
    });

    it(`sets mode=${RETRY_MODES.ADAPTIVE}`, () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      expect(retryStrategy.mode).toStrictEqual(RETRY_MODES.ADAPTIVE);
    });

    describe("rateLimiter init", () => {
      it("sets getDefaultrateLimiter if options is undefined", () => {
        const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
        expect(retryStrategy["rateLimiter"]).toBe(mockDefaultRateLimiter);
      });

      it("sets getDefaultrateLimiter if options.delayDecider undefined", () => {
        const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {});
        expect(retryStrategy["rateLimiter"]).toBe(mockDefaultRateLimiter);
      });

      it("sets options.rateLimiter if defined", () => {
        const rateLimiter = {} as RateLimiter;
        const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {
          rateLimiter,
        });
        expect(retryStrategy["rateLimiter"]).toBe(rateLimiter);
      });
    });
  });

  describe("retry", () => {
    const mockedSuperRetry = jest.spyOn(StandardRetryStrategy.prototype, "retry");

    beforeEach(async () => {
      const next = jest.fn();
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      await retryStrategy.retry(next, { request: { headers: {} } } as any);
      expect(mockedSuperRetry).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls rateLimiter.getSendToken in beforeRequest", async () => {
      expect(mockDefaultRateLimiter.getSendToken).toHaveBeenCalledTimes(0);
      await mockedSuperRetry.mock.calls[0][2].beforeRequest();
      expect(mockDefaultRateLimiter.getSendToken).toHaveBeenCalledTimes(1);
    });

    it("calls rateLimiter.updateClientSendingRate in afterRequest", async () => {
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledTimes(0);
      await mockedSuperRetry.mock.calls[0][2].afterRequest();
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledTimes(1);
    });
  });
});
