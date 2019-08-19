import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document does not support the platform type of the given instance ID(s). For example, you sent an document for a Windows instance to a Linux instance.</p>
 */
export interface UnsupportedPlatformType
  extends __ServiceException__<_UnsupportedPlatformTypeDetails> {
  name: "UnsupportedPlatformType";
}

export interface _UnsupportedPlatformTypeDetails {
  /**
   * _String shape
   */
  Message?: string;
}
