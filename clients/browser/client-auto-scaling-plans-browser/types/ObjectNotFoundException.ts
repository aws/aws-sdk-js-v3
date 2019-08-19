import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified object could not be found.</p>
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
