import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You provided an invalid value for a parameter.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
