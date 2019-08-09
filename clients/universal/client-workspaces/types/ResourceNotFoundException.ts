import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * <p>The resource could not be found.</p>
   */
  message?: string;

  /**
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;
}
