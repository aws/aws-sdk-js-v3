import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The target is not valid or does not exist. It might not be configured for EC2 Systems Manager or you might not have permission to perform the operation.</p>
 */
export interface InvalidTarget
  extends __ServiceException__<_InvalidTargetDetails> {
  name: "InvalidTarget";
}

export interface _InvalidTargetDetails {
  /**
   * _String shape
   */
  Message?: string;
}
