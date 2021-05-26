import { SdkError } from "@aws-sdk/smithy-client";

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

/**
 * Interface that specifies the retry quota behavior.
 */
export interface RetryQuota {
  /**
   * returns true if retry tokens are available from the retry quota bucket.
   */
  hasRetryTokens: (error: SdkError) => boolean;

  /**
   * returns token amount from the retry quota bucket.
   * throws error is retry tokens are not available.
   */
  retrieveRetryTokens: (error: SdkError) => number;

  /**
   * releases tokens back to the retry quota.
   */
  releaseRetryTokens: (releaseCapacityAmount?: number) => void;
}
