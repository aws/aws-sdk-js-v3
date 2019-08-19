import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters had an invalid value.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _errorMessage shape
   */
  Message?: string;
}
