import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
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
