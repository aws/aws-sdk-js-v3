import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource does not exist or is not available. For example, the pipeline to which you're trying to add a job doesn't exist or is still being created.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {}
