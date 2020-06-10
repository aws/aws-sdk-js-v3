import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { StandardRetryStrategy } from "./defaultStrategy";

jest.mock("@aws-sdk/service-error-classification", () => ({
  isThrottlingError: jest.fn().mockReturnValue(true)
}));

jest.mock("./delayDecider", () => ({
  defaultDelayDecider: jest.fn().mockReturnValue(0)
}));

jest.mock("./retryDecider", () => ({
  defaultRetryDecider: jest.fn().mockReturnValue(true)
}));

describe("defaultStrategy", () => {
  const maxAttempts = 2;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sets maxAttempts as class member variable", () => {
    [1, 2, 3].forEach(maxAttempts => {
      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      expect(retryStrategy.maxAttempts).toBe(maxAttempts);
    });
  });

  describe("retryDecider", () => {
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

  describe("delayDecider", () => {
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

  describe("delayBase passed to delayDecider", () => {
    const testDelayBasePassed = async (
      delayBaseToTest: number,
      mockThrottlingError: boolean
    ) => {
      (isThrottlingError as jest.Mock).mockReturnValueOnce(mockThrottlingError);

      const mockError = new Error("mockError");
      const mockResponse = {
        response: "mockResponse",
        output: { $metadata: {} }
      };

      const next = jest
        .fn()
        .mockRejectedValueOnce(mockError)
        .mockResolvedValueOnce(mockResponse);

      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      await retryStrategy.retry(next, {} as any);

      expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
      expect(isThrottlingError as jest.Mock).toHaveBeenCalledWith(mockError);
      expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(1);
      expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledWith(
        delayBaseToTest,
        1
      );
    };

    it("should be equal to THROTTLING_RETRY_DELAY_BASE if error is throttling error", async () => {
      return testDelayBasePassed(THROTTLING_RETRY_DELAY_BASE, true);
    });

    it("should be equal to DEFAULT_RETRY_DELAY_BASE in error is not a throttling error", async () => {
      return testDelayBasePassed(DEFAULT_RETRY_DELAY_BASE, false);
    });
  });

  describe("should not retry", () => {
    it("when the handler completes successfully", async () => {
      const mockResponse = {
        response: "mockResponse",
        output: { $metadata: {} }
      };

      const next = jest.fn().mockResolvedValueOnce(mockResponse);

      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      const { response, output } = await retryStrategy.retry(next, {} as any);

      expect(response).toStrictEqual(mockResponse.response);
      expect(output.$metadata.attempts).toBe(1);
      expect(output.$metadata.totalRetryDelay).toBe(0);
      expect(defaultRetryDecider as jest.Mock).not.toHaveBeenCalled();
      expect(defaultDelayDecider as jest.Mock).not.toHaveBeenCalled();
    });

    it("when retryDecider returns false", async () => {
      (defaultRetryDecider as jest.Mock).mockReturnValueOnce(false);

      const mockError = new Error("mockError");
      const next = jest.fn().mockRejectedValueOnce(mockError);

      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      try {
        await retryStrategy.retry(next, {} as any);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }

      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(1);
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledWith(mockError);
    });

    it("when the the maximum number of attempts is reached", async () => {
      const mockError = new Error("mockError");
      const next = jest.fn().mockRejectedValue(mockError);

      const retryStrategy = new StandardRetryStrategy(maxAttempts);
      try {
        await retryStrategy.retry(next, {} as any);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(
        maxAttempts - 1
      );
    });
  });

  it("should delay equal to the value returned by delayDecider", async () => {
    jest.spyOn(global, "setTimeout");

    const FIRST_DELAY = 100;
    const SECOND_DELAY = 200;

    (defaultDelayDecider as jest.Mock)
      .mockReturnValueOnce(FIRST_DELAY)
      .mockReturnValueOnce(SECOND_DELAY);

    const mockError = new Error("mockError");
    const next = jest.fn().mockRejectedValue(mockError);

    const retryStrategy = new StandardRetryStrategy(3);
    try {
      await retryStrategy.retry(next, {} as any);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
      expect(error.$metadata.totalRetryDelay).toEqual(
        FIRST_DELAY + SECOND_DELAY
      );
    }

    expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenNthCalledWith(
      1,
      expect.any(Function),
      FIRST_DELAY
    );
    expect(setTimeout).toHaveBeenNthCalledWith(
      2,
      expect.any(Function),
      SECOND_DELAY
    );
  });
});
