import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
 */
export interface InvalidOperationException
  extends __ServiceException__<_InvalidOperationExceptionDetails> {
  name: "InvalidOperationException";
}

export interface _InvalidOperationExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
