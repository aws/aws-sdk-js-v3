import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
