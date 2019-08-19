import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid parameter has been specified. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
 */
export interface InvalidTagParameterException
  extends __ServiceException__<_InvalidTagParameterExceptionDetails> {
  name: "InvalidTagParameterException";
}

export interface _InvalidTagParameterExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
