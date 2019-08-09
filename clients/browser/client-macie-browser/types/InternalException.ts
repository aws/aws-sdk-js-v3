import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Internal server error.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {
  /**
   * Error code for the exception
   */
  errorCode?: string;

  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
