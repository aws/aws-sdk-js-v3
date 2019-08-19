import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The collection specified in the request cannot be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
