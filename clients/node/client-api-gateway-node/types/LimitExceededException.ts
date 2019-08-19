import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _String shape
   */
  retryAfterSeconds?: string;

  /**
   * _String shape
   */
  message?: string;
}
