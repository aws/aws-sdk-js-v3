import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when an error occurs in the AWS DataSync service.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {
  /**
   * _string shape
   */
  message?: string;

  /**
   * _string shape
   */
  errorCode?: string;
}
