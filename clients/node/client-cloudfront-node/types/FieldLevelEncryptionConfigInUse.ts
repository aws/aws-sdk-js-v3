import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified configuration for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionConfigInUse
  extends __ServiceException__<_FieldLevelEncryptionConfigInUseDetails> {
  name: "FieldLevelEncryptionConfigInUse";
}

export interface _FieldLevelEncryptionConfigInUseDetails {
  /**
   * _string shape
   */
  Message?: string;
}
