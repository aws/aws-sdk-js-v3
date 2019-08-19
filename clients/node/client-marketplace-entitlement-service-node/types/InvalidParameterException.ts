import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters in your request was invalid.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
