import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of the <code>Type</code> parameter is invalid.</p>
 */
export interface InvalidTypeException
  extends __ServiceException__<_InvalidTypeExceptionDetails> {
  name: "InvalidTypeException";
}

export interface _InvalidTypeExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
