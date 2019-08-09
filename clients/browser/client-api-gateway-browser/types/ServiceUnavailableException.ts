import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  retryAfterSeconds?: string;

  /**
   * _String shape
   */
  message?: string;
}
