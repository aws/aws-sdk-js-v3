import {
  isRetryableByTrait,
  isClockSkewError,
  isThrottlingError,
  isTransientError
} from "@aws-sdk/service-error-classification";
import { defaultRetryDecider } from "./retryDecider";
import { SdkError } from "@aws-sdk/smithy-client";

jest.mock("@aws-sdk/service-error-classification", () => ({
  isRetryableByTrait: jest.fn().mockReturnValue(false),
  isClockSkewError: jest.fn().mockReturnValue(false),
  isThrottlingError: jest.fn().mockReturnValue(false),
  isTransientError: jest.fn().mockReturnValue(false)
}));

describe("defaultRetryDecider", () => {
  const createMockError = () =>
    Object.assign(new Error(), { $metadata: {} }) as SdkError;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return false when the provided error is falsy", () => {
    expect(defaultRetryDecider(null as any)).toBe(false);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(0);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(0);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(0);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(0);
  });

  it("should return true for RetryableByTrait error", () => {
    (isRetryableByTrait as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(1);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(0);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(0);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(0);
  });

  it("should return true for ClockSkewError", () => {
    (isClockSkewError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(1);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(1);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(0);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(0);
  });

  it("should return true for ThrottlingError", () => {
    (isThrottlingError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(1);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(1);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(1);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(0);
  });

  it("should return true for TransientError", () => {
    (isTransientError as jest.Mock).mockReturnValueOnce(true);
    expect(defaultRetryDecider(createMockError())).toBe(true);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(1);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(1);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(1);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(1);
  });

  it("should return false for other errors", () => {
    expect(defaultRetryDecider(createMockError())).toBe(false);
    expect((isRetryableByTrait as jest.Mock).mock.calls.length).toBe(1);
    expect((isClockSkewError as jest.Mock).mock.calls.length).toBe(1);
    expect((isThrottlingError as jest.Mock).mock.calls.length).toBe(1);
    expect((isTransientError as jest.Mock).mock.calls.length).toBe(1);
  });
});
