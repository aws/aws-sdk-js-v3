import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.</p>
 */
export interface InstanceNotFound
  extends __ServiceException__<_InstanceNotFoundDetails> {
  name: "InstanceNotFound";
}

export interface _InstanceNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
