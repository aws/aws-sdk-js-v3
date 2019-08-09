import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters don't have a valid value.</p>
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

  /**
   * <p>The AWS request ID for this request.</p>
   */
  RequestId?: string;
}
