import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified configuration for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionConfig
  extends __ServiceException__<_NoSuchFieldLevelEncryptionConfigDetails> {
  name: "NoSuchFieldLevelEncryptionConfig";
}

export interface _NoSuchFieldLevelEncryptionConfigDetails {
  /**
   * _string shape
   */
  Message?: string;
}
