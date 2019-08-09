import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of the parameter is invalid. Review the value of the parameter you are using to correct it, and then retry your operation.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
