import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A parameter is missing or a malformed string or invalid or out-of-range value was supplied for the request parameter.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
