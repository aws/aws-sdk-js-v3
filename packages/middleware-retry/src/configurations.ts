import { RetryStrategy } from "@aws-sdk/types";
import { ExponentialBackOffStrategy } from "./defaultStrategy";

export interface RetryInputConfig {
  /**
   * The maximum number of times requests that encounter potentially transient failures should be retried
   */
  maxRetries?: number;
  /**
   * The strategy to retry the request. Using built-in exponential backoff strategy by default.
   */
  retryStrategy?: RetryStrategy;
}
export interface RetryResolvedConfig {
  maxRetries: number;
  retryStrategy: RetryStrategy;
}
export function resolveRetryConfig<T>(
  input: T & RetryInputConfig
): T & RetryResolvedConfig {
  const maxRetries = input.maxRetries === undefined ? 3 : input.maxRetries;
  return {
    ...input,
    maxRetries,
    retryStrategy:
      input.retryStrategy || new ExponentialBackOffStrategy(maxRetries)
  };
}
