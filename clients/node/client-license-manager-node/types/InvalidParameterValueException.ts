import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
