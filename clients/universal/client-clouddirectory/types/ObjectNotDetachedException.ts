import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the requested operation cannot be completed because the object has not been detached from the tree.</p>
 */
export interface ObjectNotDetachedException
  extends __ServiceException__<_ObjectNotDetachedExceptionDetails> {
  name: "ObjectNotDetachedException";
}

export interface _ObjectNotDetachedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
