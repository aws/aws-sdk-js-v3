import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the requested index type is not supported.</p>
 */
export interface UnsupportedIndexTypeException
  extends __ServiceException__<_UnsupportedIndexTypeExceptionDetails> {
  name: "UnsupportedIndexTypeException";
}

export interface _UnsupportedIndexTypeExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
