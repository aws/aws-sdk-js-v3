import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { SdkError } from "@aws-sdk/smithy-client";
import {
  FinalizeHandler,
  MetadataBearer,
  FinalizeHandlerArguments,
  RetryStrategy
} from "@aws-sdk/types";

/**
 * Determines whether an error is retryable based on the number of retries
 * already attempted, the HTTP status code, and the error received (if any).
 *
 * @param error         The error encountered.
 */
export interface RetryDecider {
  (error: SdkError): boolean;
}

/**
 * Determines the number of milliseconds to wait before retrying an action.
 *
 * @param delayBase The base delay (in milliseconds).
 * @param attempts  The number of times the action has already been tried.
 */
export interface DelayDecider {
  (delayBase: number, attempts: number): number;
}

export class StandardRetryStrategy implements RetryStrategy {
  constructor(
    public readonly maxAttempts: number,
    private retryDecider: RetryDecider = defaultRetryDecider,
    private delayDecider: DelayDecider = defaultDelayDecider
  ) {}
  private shouldRetry(error: SdkError, attempts: number) {
    return attempts < this.maxAttempts && this.retryDecider(error);
  }

  async retry<Input extends object, Ouput extends MetadataBearer>(
    next: FinalizeHandler<Input, Ouput>,
    args: FinalizeHandlerArguments<Input>
  ) {
    let attempts = 0;
    let totalDelay = 0;
    while (true) {
      try {
        const { response, output } = await next(args);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalDelay;

        return { response, output };
      } catch (err) {
        attempts++;
        if (this.shouldRetry(err as SdkError, attempts)) {
          const delay = this.delayDecider(
            isThrottlingError(err)
              ? THROTTLING_RETRY_DELAY_BASE
              : DEFAULT_RETRY_DELAY_BASE,
            attempts
          );
          totalDelay += delay;

          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        if (!err.$metadata) {
          err.$metadata = {};
        }

        err.$metadata.attempts = attempts;
        err.$metadata.totalRetryDelay = totalDelay;
        throw err;
      }
    }
  }
}
