import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { RetryStrategy, SdkError } from "@aws-sdk/types";

export class ExponentialBackOffStrategy implements RetryStrategy {
  constructor(public readonly maxRetries: number) {}
  shouldRetry(error: SdkError, retryAttempted: number) {
    return retryAttempted < this.maxRetries && defaultRetryDecider(error);
  }
  computeDelayBeforeNextRetry(error: SdkError, retryAttempted: number): number {
    return defaultDelayDecider(
      isThrottlingError(error)
        ? THROTTLING_RETRY_DELAY_BASE
        : DEFAULT_RETRY_DELAY_BASE,
      retryAttempted
    );
  }
}
