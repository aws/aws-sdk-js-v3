import { AdaptiveRetryStrategy } from "./AdaptiveRetryStrategy";
import { RETRY_MODES } from "./configurations";
import { DefaultRateLimiter } from "./DefaultRateLimiter";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RateLimiter, RetryQuota } from "./types";

jest.mock("./StandardRetryStrategy");
jest.mock("./DefaultRateLimiter");

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

    it(`sets mode=${RETRY_MODES.adaptive}`, () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      expect(retryStrategy.mode).toStrictEqual(RETRY_MODES.adaptive);
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

  describe("beforeRequest", () => {
    it("calls rateLimiter.getSendToken", async () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      await retryStrategy["beforeRequest"]();
      expect(mockDefaultRateLimiter.getSendToken).toHaveBeenCalledTimes(1);
    });
  });

  describe("afterRequest", () => {
    it("calls rateLimiter.updateClientSendingRate", async () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      retryStrategy["afterRequest"]({});
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledTimes(1);
    });
  });
});
