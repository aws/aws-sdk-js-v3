import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The named resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ResourceType shape
   */
  ResourceType?: string;

  /**
   * _ResourceId shape
   */
  ResourceId?: string;
}
