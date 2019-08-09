import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Resource being access is not found.</p>
 */
export interface ResourceNotFound
  extends __ServiceException__<_ResourceNotFoundDetails> {
  name: "ResourceNotFound";
}

export interface _ResourceNotFoundDetails {
  /**
   * _FailureReason shape
   */
  Message?: string;
}
