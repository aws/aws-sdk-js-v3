import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Could not perform an operation on an object that does not exist.</p>
 */
export interface ObjectNotFoundException
  extends __ServiceException__<_ObjectNotFoundExceptionDetails> {
  name: "ObjectNotFoundException";
}

export interface _ObjectNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
