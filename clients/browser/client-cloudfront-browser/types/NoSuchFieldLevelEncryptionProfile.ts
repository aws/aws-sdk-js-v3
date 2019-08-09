import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified profile for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionProfile
  extends __ServiceException__<_NoSuchFieldLevelEncryptionProfileDetails> {
  name: "NoSuchFieldLevelEncryptionProfile";
}

export interface _NoSuchFieldLevelEncryptionProfileDetails {
  /**
   * _string shape
   */
  Message?: string;
}
