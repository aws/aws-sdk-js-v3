import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
