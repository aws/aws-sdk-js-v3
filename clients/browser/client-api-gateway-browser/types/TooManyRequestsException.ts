import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _String shape
   */
  retryAfterSeconds?: string;

  /**
   * _String shape
   */
  message?: string;
}
