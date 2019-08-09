import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Resource being accessed is in use.</p>
 */
export interface ResourceInUse
  extends __ServiceException__<_ResourceInUseDetails> {
  name: "ResourceInUse";
}

export interface _ResourceInUseDetails {
  /**
   * _FailureReason shape
   */
  Message?: string;
}
