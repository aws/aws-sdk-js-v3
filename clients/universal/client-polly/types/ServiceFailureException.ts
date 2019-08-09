import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An unknown condition has caused a service failure.</p>
 */
export interface ServiceFailureException
  extends __ServiceException__<_ServiceFailureExceptionDetails> {
  name: "ServiceFailureException";
}

export interface _ServiceFailureExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
