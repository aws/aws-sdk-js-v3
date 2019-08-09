import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException
  extends __ServiceException__<_UnknownResourceExceptionDetails> {
  name: "UnknownResourceException";
}

export interface _UnknownResourceExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
