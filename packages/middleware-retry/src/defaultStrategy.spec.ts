import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS
} from "./constants";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { StandardRetryStrategy, RetryQuota } from "./defaultStrategy";
import { getDefaultRetryQuota } from "./defaultRetryQuota";

jest.mock("@aws-sdk/service-error-classification", () => ({
  isThrottlingError: jest.fn().mockReturnValue(true)
}));

jest.mock("./delayDecider", () => ({
  defaultDelayDecider: jest.fn().mockReturnValue(0)
}));

jest.mock("./retryDecider", () => ({
  defaultRetryDecider: jest.fn().mockReturnValue(true)
}));

jest.mock("./defaultRetryQuota", () => {
  const mockDefaultRetryQuota = {
    hasRetryTokens: jest.fn().mockReturnValue(true),
    retrieveRetryTokens: jest.fn().mockReturnValue(1),
    releaseRetryTokens: jest.fn()
  };
  return { getDefaultRetryQuota: () => mockDefaultRetryQuota };
});

describe("defaultStrategy", () => {
  const maxAttempts = 3;

  const mockSuccessfulOperation = (
    maxAttempts: number,
    options?: { mockResponse?: string }
  ) => {
    const next = jest.fn().mockResolvedValueOnce({
      response: options?.mockResponse,
      output: { $metadata: {} }
    });

    const retryStrategy = new StandardRetryStrategy(maxAttempts);
    return retryStrategy.retry(next, {} as any);
  };

  const mockFailedOperation = async (
    maxAttempts: number,
    options?: { mockError?: Error }
  ) => {
    const mockError = options?.mockError ?? new Error("mockError");
    const next = jest.fn().mockRejectedValue(mockError);

    const retryStrategy = new StandardRetryStrategy(maxAttempts);
    try {
      await retryStrategy.retry(next, {} as any);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
      return error;
    }
  };

  const mockSuccessAfterOneFail = (
    maxAttempts: number,
    options?: { mockError?: Error; mockResponse?: string }
  ) => {
    const mockError = options?.mockError ?? new Error("mockError");
    const mockResponse = {
      response: options?.mockResponse,
      output: { $metadata: {} }
    };

    const next = jest
      .fn()
      .mockRejectedValueOnce(mockError)
      .mockResolvedValueOnce(mockResponse);

    const retryStrategy = new StandardRetryStrategy(maxAttempts);
    return retryStrategy.retry(next, {} as any);
  };

  const mockSuccessAfterTwoFails = (
    maxAttempts: number,
    options?: { mockError?: Error; mockResponse?: string }
  ) => {
    const mockError = options?.mockError ?? new Error("mockError");
    const mockResponse = {
      response: options?.mockResponse,
      output: { $metadata: {} }
    };

    const next = jest
      .fn()
      .mockRejectedValueOnce(mockError)
      .mockRejectedValueOnce(mockError)
      .mockResolvedValueOnce(mockResponse);

    const retryStrategy = new StandardRetryStrategy(maxAttempts);
    return retryStrategy.retry(next, {} as any);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sets maxAttempts as class member variable", () => {
    [1, 2, 3].forEach(maxAttempts => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      expect(retryStrategy.maxAttempts).toBe(maxAttempts);
    });
  });

  describe("retryDecider init", () => {
    it("sets defaultRetryDecider if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      expect(retryStrategy["retryDecider"]).toBe(defaultRetryDecider);
    });

    it("sets defaultRetryDecider if options.retryDecider is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {});
      expect(retryStrategy["retryDecider"]).toBe(defaultRetryDecider);
    });

    it("sets options.retryDecider if defined", () => {
      const retryDecider = jest.fn();
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {
        retryDecider
      });
      expect(retryStrategy["retryDecider"]).toBe(retryDecider);
    });
  });

  describe("delayDecider init", () => {
    it("sets defaultDelayDecider if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      expect(retryStrategy["delayDecider"]).toBe(defaultDelayDecider);
    });

    it("sets defaultDelayDecider if options.delayDecider undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {});
      expect(retryStrategy["delayDecider"]).toBe(defaultDelayDecider);
    });

    it("sets options.delayDecider if defined", () => {
      const delayDecider = jest.fn();
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {
        delayDecider
      });
      expect(retryStrategy["delayDecider"]).toBe(delayDecider);
    });
  });

  describe("retryQuota init", () => {
    it("sets getDefaultRetryQuota if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      expect(retryStrategy["retryQuota"]).toBe(
        getDefaultRetryQuota(INITIAL_RETRY_TOKENS)
      );
    });

    it("sets getDefaultRetryQuota if options.delayDecider undefined", () => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {});
      expect(retryStrategy["retryQuota"]).toBe(
        getDefaultRetryQuota(INITIAL_RETRY_TOKENS)
      );
    });

    it("sets options.retryQuota if defined", () => {
      const retryQuota = {} as RetryQuota;
      const retryStrategy = new StandardRetryStrategy(maxAttempts, {
        retryQuota
      });
      expect(retryStrategy["retryQuota"]).toBe(retryQuota);
    });
  });

  describe("delayDecider", () => {
    describe("delayBase value passed", () => {
      const testDelayBasePassed = async (
        delayBaseToTest: number,
        mockThrottlingError: boolean
      ) => {
        (isThrottlingError as jest.Mock).mockReturnValueOnce(
          mockThrottlingError
        );

        const mockError = new Error();
        await mockSuccessAfterOneFail(maxAttempts, { mockError });

        expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
        expect(isThrottlingError as jest.Mock).toHaveBeenCalledWith(mockError);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][0]).toBe(
          delayBaseToTest
        );
      };

      it("should be equal to THROTTLING_RETRY_DELAY_BASE if error is throttling error", async () => {
        return testDelayBasePassed(THROTTLING_RETRY_DELAY_BASE, true);
      });

      it("should be equal to DEFAULT_RETRY_DELAY_BASE in error is not a throttling error", async () => {
        return testDelayBasePassed(DEFAULT_RETRY_DELAY_BASE, false);
      });
    });

    describe("attempts value passed", () => {
      it("on successful operation", async () => {
        await mockSuccessfulOperation(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).not.toHaveBeenCalled();
      });

      it("in case of single failure", async () => {
        await mockSuccessAfterOneFail(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][1]).toBe(1);
      });

      it("on all fails", async () => {
        await mockFailedOperation(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(2);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][1]).toBe(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[1][1]).toBe(2);
      });
    });

    it("delay value returned", async () => {
      jest.spyOn(global, "setTimeout");

      const FIRST_DELAY = 100;
      const SECOND_DELAY = 200;

      (defaultDelayDecider as jest.Mock)
        .mockReturnValueOnce(FIRST_DELAY)
        .mockReturnValueOnce(SECOND_DELAY);

      const maxAttempts = 3;
      const error = await mockFailedOperation(maxAttempts);
      expect(error.$metadata.totalRetryDelay).toEqual(
        FIRST_DELAY + SECOND_DELAY
      );

      expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(
        maxAttempts - 1
      );
      expect(setTimeout).toHaveBeenCalledTimes(maxAttempts - 1);
      expect(((setTimeout as unknown) as jest.Mock).mock.calls[0][1]).toBe(
        FIRST_DELAY
      );
      expect(((setTimeout as unknown) as jest.Mock).mock.calls[1][1]).toBe(
        SECOND_DELAY
      );
    });
  });

  describe("retryQuota", () => {
    describe("hasRetryTokens", () => {
      it("not called on successful operation", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessfulOperation(maxAttempts);
        expect(hasRetryTokens).not.toHaveBeenCalled();
      });

      it("called once in case of single failure", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessAfterOneFail(maxAttempts);
        expect(hasRetryTokens).toHaveBeenCalledTimes(1);
      });

      it("called once on each retry request", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockFailedOperation(maxAttempts);
        expect(hasRetryTokens).toHaveBeenCalledTimes(maxAttempts - 1);
      });
    });

    describe("releaseRetryTokens", () => {
      it("called once without param on successful operation", async () => {
        const { releaseRetryTokens } = getDefaultRetryQuota(
          INITIAL_RETRY_TOKENS
        );
        await mockSuccessfulOperation(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(undefined);
      });

      it("called once with retryTokenAmount in case of single failure", async () => {
        const retryTokens = 15;
        const {
          releaseRetryTokens,
          retrieveRetryTokens
        } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (retrieveRetryTokens as jest.Mock).mockReturnValueOnce(retryTokens);

        await mockSuccessAfterOneFail(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(retryTokens);
      });

      it("called once with second retryTokenAmount in case of two failures", async () => {
        const retryTokensFirst = 15;
        const retryTokensSecond = 30;

        const {
          releaseRetryTokens,
          retrieveRetryTokens
        } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);

        (retrieveRetryTokens as jest.Mock)
          .mockReturnValueOnce(retryTokensFirst)
          .mockReturnValueOnce(retryTokensSecond);

        await mockSuccessAfterTwoFails(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(retryTokensSecond);
      });

      it("not called on unsuccessful operation", async () => {
        const { releaseRetryTokens } = getDefaultRetryQuota(
          INITIAL_RETRY_TOKENS
        );
        await mockFailedOperation(maxAttempts);
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });
    });

    describe("retrieveRetryTokens", () => {
      it("not called on successful operation", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(
          INITIAL_RETRY_TOKENS
        );
        await mockSuccessfulOperation(maxAttempts);
        expect(retrieveRetryTokens).not.toHaveBeenCalled();
      });

      it("called once in case of single failure", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(
          INITIAL_RETRY_TOKENS
        );
        await mockSuccessAfterOneFail(maxAttempts);
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(1);
      });

      it("called once on each retry request", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(
          INITIAL_RETRY_TOKENS
        );
        await mockFailedOperation(maxAttempts);
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(maxAttempts - 1);
      });
    });
  });

  describe("should not retry", () => {
    it("when the handler completes successfully", async () => {
      const mockResponse = "mockResponse";
      const { response, output } = await mockSuccessfulOperation(maxAttempts, {
        mockResponse
      });

      expect(response).toStrictEqual(mockResponse);
      expect(output.$metadata.attempts).toBe(1);
      expect(output.$metadata.totalRetryDelay).toBe(0);
      expect(defaultRetryDecider as jest.Mock).not.toHaveBeenCalled();
      expect(defaultDelayDecider as jest.Mock).not.toHaveBeenCalled();
    });

    it("when retryDecider returns false", async () => {
      (defaultRetryDecider as jest.Mock).mockReturnValueOnce(false);
      const mockError = new Error();
      await mockFailedOperation(maxAttempts, { mockError });
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(1);
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledWith(mockError);
    });

    it("when the maximum number of attempts is reached", async () => {
      await mockFailedOperation(maxAttempts);
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(
        maxAttempts - 1
      );
    });

    describe("when retryQuota.hasRetryTokens returns false", () => {
      it("in the first request", async () => {
        const {
          hasRetryTokens,
          retrieveRetryTokens,
          releaseRetryTokens
        } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (hasRetryTokens as jest.Mock).mockReturnValueOnce(false);

        const mockError = new Error();
        await mockFailedOperation(maxAttempts, { mockError });

        expect(hasRetryTokens).toHaveBeenCalledTimes(1);
        expect(hasRetryTokens).toHaveBeenCalledWith(mockError);
        expect(retrieveRetryTokens).not.toHaveBeenCalled();
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });

      it("after the first retry", async () => {
        const {
          hasRetryTokens,
          retrieveRetryTokens,
          releaseRetryTokens
        } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (hasRetryTokens as jest.Mock)
          .mockReturnValueOnce(true)
          .mockReturnValueOnce(false);

        const mockError = new Error();
        await mockFailedOperation(maxAttempts, { mockError });

        expect(hasRetryTokens).toHaveBeenCalledTimes(2);
        [1, 2].forEach(n => {
          expect(hasRetryTokens).toHaveBeenNthCalledWith(n, mockError);
        });
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(1);
        expect(retrieveRetryTokens).toHaveBeenCalledWith(mockError);
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });
    });
  });
});
