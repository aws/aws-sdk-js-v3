import { RetryStrategy } from "@aws-sdk/types";
import { StandardRetryStrategy } from "./defaultStrategy";

export interface RetryInputConfig {
  /**
   * The maximum number of times requests that encounter retryable failures should be attempted.
   */
  maxAttempts?: number;
  /**
   * The strategy to retry the request. Using built-in exponential backoff strategy by default.
   */
  retryStrategy?: RetryStrategy;
}

export interface RetryResolvedConfig {
  maxAttempts: number;
  retryStrategy: RetryStrategy;
}

export const resolveRetryConfig = <T>(
  input: T & RetryInputConfig
): T & RetryResolvedConfig => {
  const maxAttempts = input.maxAttempts ?? 3;
  return {
    ...input,
    maxAttempts,
    retryStrategy: input.retryStrategy || new StandardRetryStrategy(maxAttempts)
  };
};
