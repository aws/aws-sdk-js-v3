import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A requested resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * _ErrorCode shape
   */
  Code?: string;

  /**
   * <p>Value is the type of resource that was not found.</p>
   */
  ResourceType?: string;

  /**
   * <p>Value is a list of resource IDs that were not found.</p>
   */
  ResourceIds?: Array<string>;
}
