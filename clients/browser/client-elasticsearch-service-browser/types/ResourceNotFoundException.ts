import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
