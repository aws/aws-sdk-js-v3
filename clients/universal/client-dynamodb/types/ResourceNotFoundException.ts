import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
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
