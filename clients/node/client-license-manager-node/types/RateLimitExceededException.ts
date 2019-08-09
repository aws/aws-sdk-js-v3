import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Too many requests have been submitted. Try again after a brief wait.</p>
 */
export interface RateLimitExceededException
  extends __ServiceException__<_RateLimitExceededExceptionDetails> {
  name: "RateLimitExceededException";
}

export interface _RateLimitExceededExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
