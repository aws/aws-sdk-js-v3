import { RetryStrategy } from "@aws-sdk/types";
import { ExponentialBackOffStrategy } from "./defaultStrategy";

export interface RetryConfigInput {
  /**
   * The maximum number of times requests that encounter potentially transient failures should be retried
   */
  maxRetries?: number;
  /**
   * The strategy to retry the request. Using built-in exponential backoff strategy by default.
   */
  retryStrategy?: RetryStrategy;
}
export interface RetryConfigResolved {
  maxRetries: number;
  retryStrategy: RetryStrategy;
}
export function resolveRetryConfig<T>(
  input: T & RetryConfigInput
): T & RetryConfigResolved {
  const maxRetries = input.maxRetries === undefined ? 3 : input.maxRetries;
  return {
    ...input,
    maxRetries,
    retryStrategy:
      input.retryStrategy || new ExponentialBackOffStrategy(maxRetries)
  };
}
