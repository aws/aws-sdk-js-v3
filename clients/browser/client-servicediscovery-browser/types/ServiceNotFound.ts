import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No service exists with the specified ID.</p>
 */
export interface ServiceNotFound
  extends __ServiceException__<_ServiceNotFoundDetails> {
  name: "ServiceNotFound";
}

export interface _ServiceNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
