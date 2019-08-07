import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request throughput limit exceeded</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  retryAfterSeconds?: string;

  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  message?: string;

  /**
   * _ThrottleReason shape
   */
  Reason?:
    | "ConcurrentInvocationLimitExceeded"
    | "FunctionInvocationRateLimitExceeded"
    | "ReservedFunctionConcurrentInvocationLimitExceeded"
    | "ReservedFunctionInvocationRateLimitExceeded"
    | "CallerRateLimitExceeded"
    | string;
}
