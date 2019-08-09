import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An entity that you specified doesn't exist.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
