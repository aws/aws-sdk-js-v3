import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified tag is invalid.</p>
 */
export interface InvalidTagException
  extends __ServiceException__<_InvalidTagExceptionDetails> {
  name: "InvalidTagException";
}

export interface _InvalidTagExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
