import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource with the specified name could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
