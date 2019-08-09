import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource doesn't exist.</p>
 */
export interface UnknownResourceException
  extends __ServiceException__<_UnknownResourceExceptionDetails> {
  name: "UnknownResourceException";
}

export interface _UnknownResourceExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
