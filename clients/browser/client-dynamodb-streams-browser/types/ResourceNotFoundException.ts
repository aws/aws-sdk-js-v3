import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation tried to access a nonexistent stream.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * <p>The resource which is being requested does not exist.</p>
   */
  message?: string;
}
