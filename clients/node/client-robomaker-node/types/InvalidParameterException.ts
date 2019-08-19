import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The returned message provides an explanation of the error value.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
