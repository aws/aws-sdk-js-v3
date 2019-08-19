import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
