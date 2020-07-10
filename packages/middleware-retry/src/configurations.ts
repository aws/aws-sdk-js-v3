import { RetryStrategy, Provider } from "@aws-sdk/types";
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

interface PreviouslyResolved {
  maxAttemptsDefaultProvider: (input: any) => Provider<string>;
}
export interface RetryResolvedConfig {
  maxAttempts: Provider<string>;
  retryStrategy: RetryStrategy;
}

export const resolveRetryConfig = <T>(input: T & PreviouslyResolved & RetryInputConfig): T & RetryResolvedConfig => {
  const maxAttempts = normalizeMaxAttempts(input.maxAttempts) ?? input.maxAttemptsDefaultProvider(input as any);
  return {
    ...input,
    maxAttempts,
    retryStrategy: input.retryStrategy || new StandardRetryStrategy(maxAttempts),
  };
};

const normalizeMaxAttempts = (maxAttempts?: number): Provider<string> | undefined => {
  if (maxAttempts) {
    const promisified = Promise.resolve(maxAttempts.toString());
    return () => promisified;
  }
};
