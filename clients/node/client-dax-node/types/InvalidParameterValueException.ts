import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value for a parameter is invalid.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {
  /**
   * _AwsQueryErrorMessage shape
   */
  message?: string;
}
