import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the requested operation can only operate on index objects.</p>
 */
export interface NotIndexException
  extends __ServiceException__<_NotIndexExceptionDetails> {
  name: "NotIndexException";
}

export interface _NotIndexExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
