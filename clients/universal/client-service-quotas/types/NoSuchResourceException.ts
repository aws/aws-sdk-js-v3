import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource does not exist.</p>
 */
export interface NoSuchResourceException
  extends __ServiceException__<_NoSuchResourceExceptionDetails> {
  name: "NoSuchResourceException";
}

export interface _NoSuchResourceExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
