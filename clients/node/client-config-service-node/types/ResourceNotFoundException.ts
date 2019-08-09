import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a resource that does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
