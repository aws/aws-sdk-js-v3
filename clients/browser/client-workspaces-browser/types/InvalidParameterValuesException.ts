import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValuesException
  extends __ServiceException__<_InvalidParameterValuesExceptionDetails> {
  name: "InvalidParameterValuesException";
}

export interface _InvalidParameterValuesExceptionDetails {
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}
