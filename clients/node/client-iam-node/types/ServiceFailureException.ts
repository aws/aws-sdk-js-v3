import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export interface ServiceFailureException
  extends __ServiceException__<_ServiceFailureExceptionDetails> {
  name: "ServiceFailureException";
}

export interface _ServiceFailureExceptionDetails {
  /**
   * _serviceFailureExceptionMessage shape
   */
  message?: string;
}
