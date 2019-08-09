import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
