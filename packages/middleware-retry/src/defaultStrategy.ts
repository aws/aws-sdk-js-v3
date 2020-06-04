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

export class ExponentialBackOffStrategy implements RetryStrategy {
  constructor(
    public readonly maxRetries: number,
    private retryDecider: RetryDecider = defaultRetryDecider,
    private delayDecider: DelayDecider = defaultDelayDecider
  ) {}
  private shouldRetry(error: SdkError, retryAttempted: number) {
    return retryAttempted < this.maxRetries && this.retryDecider(error);
  }

  async retry<Input extends object, Ouput extends MetadataBearer>(
    next: FinalizeHandler<Input, Ouput>,
    args: FinalizeHandlerArguments<Input>
  ) {
    let retries = 0;
    let totalDelay = 0;
    while (true) {
      try {
        const { response, output } = await next(args);
        output.$metadata.retries = retries;
        output.$metadata.totalRetryDelay = totalDelay;

        return { response, output };
      } catch (err) {
        if (this.shouldRetry(err as SdkError, retries)) {
          const delay = this.delayDecider(
            isThrottlingError(err)
              ? THROTTLING_RETRY_DELAY_BASE
              : DEFAULT_RETRY_DELAY_BASE,
            retries++
          );
          totalDelay += delay;

          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        if (!err.$metadata) {
          err.$metadata = {};
        }

        err.$metadata.retries = retries;
        err.$metadata.totalRetryDelay = totalDelay;
        throw err;
      }
    }
  }
}
