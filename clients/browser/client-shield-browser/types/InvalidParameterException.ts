import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the parameters passed to the API are invalid. </p>
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
