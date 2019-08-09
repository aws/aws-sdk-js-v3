import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
