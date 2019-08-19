import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified object could not be found. For any operation that depends on the existence of a scalable target, this exception is thrown if the scalable target with the specified service namespace, resource ID, and scalable dimension does not exist. For any operation that deletes or deregisters a resource, this exception is thrown if the resource cannot be found.</p>
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
