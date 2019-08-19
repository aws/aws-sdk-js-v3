import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
 */
export interface IndexedAttributeMissingException
  extends __ServiceException__<_IndexedAttributeMissingExceptionDetails> {
  name: "IndexedAttributeMissingException";
}

export interface _IndexedAttributeMissingExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
