import { RetryStrategy } from "@aws-sdk/types";
import { ExponentialBackOffStrategy } from "./defaultStrategy";

export namespace RetryConfig {
  export interface Input {
    /**
     * The maximum number of times requests that encounter potentially transient failures should be retried
     */
    maxRetries?: number;
    /**
     * The strategy to retry the request. Using built-in exponential backoff strategy by default.
     */
    retryStrategy?: RetryStrategy;
  }
  export interface Resolved {
    maxRetries: number;
    retryStrategy: RetryStrategy;
  }
  export function resolve<T>(input: T & Input): T & Resolved {
    const maxRetries = input.maxRetries === undefined ? 3 : input.maxRetries;
    return {
      ...input,
      maxRetries,
      retryStrategy:
        input.retryStrategy || new ExponentialBackOffStrategy(maxRetries)
    };
  }
}

//export separately for showing comment block in Intellisense
export type RetryConfigInput = RetryConfig.Input;
