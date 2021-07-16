import {
  isClockSkewError,
  isRetryableByTrait,
  isThrottlingError,
  isTransientError,
} from "@aws-sdk/service-error-classification";
import { SdkError } from "@aws-sdk/types";

import { defaultRetryDecider } from "./retryDecider";

jest.mock("@aws-sdk/service-error-classification");

describe("defaultRetryDecider", () => {
  const createMockError = () => Object.assign(new Error(), { $metadata: {} }) as SdkError;

  beforeEach(() => {
    (isRetryableByTrait as jest.Mock).mockReturnValue(false);
    (isClockSkewError as jest.Mock).mockReturnValue(false);
    (isThrottlingError as jest.Mock).mockReturnValue(false);
    (isTransientError as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return false when the provided error is falsy", () => {
    expect(defaultRetryDecider(null as any)).toBe(false);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(0);
  });

  it("should return true for RetryableByTrait error", () => {
    (isRetryableByTrait as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(0);
  });

  it("should return true for ClockSkewError", () => {
    (isClockSkewError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(0);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(0);
  });

  it("should return true for ThrottlingError", () => {
    (isThrottlingError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(0);
  });

  it("should return true for TransientError", () => {
    (isTransientError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(1);
  });

  it("should return false for other errors", () => {
    expect(defaultRetryDecider(createMockError())).toBe(false);
    expect(isRetryableByTrait as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isClockSkewError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
    expect(isTransientError as jest.Mock).toHaveBeenCalledTimes(1);
  });
});
