import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the object is not attached to the index.</p>
 */
export interface ObjectAlreadyDetachedException
  extends __ServiceException__<_ObjectAlreadyDetachedExceptionDetails> {
  name: "ObjectAlreadyDetachedException";
}

export interface _ObjectAlreadyDetachedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
