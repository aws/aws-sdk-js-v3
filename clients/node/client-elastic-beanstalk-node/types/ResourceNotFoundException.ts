import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
