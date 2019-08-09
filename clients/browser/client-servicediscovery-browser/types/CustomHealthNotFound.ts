import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The health check for the instance that is specified by <code>ServiceId</code> and <code>InstanceId</code> is not a custom health check. </p>
 */
export interface CustomHealthNotFound
  extends __ServiceException__<_CustomHealthNotFoundDetails> {
  name: "CustomHealthNotFound";
}

export interface _CustomHealthNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
