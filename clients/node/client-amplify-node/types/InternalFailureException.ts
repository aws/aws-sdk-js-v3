import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
