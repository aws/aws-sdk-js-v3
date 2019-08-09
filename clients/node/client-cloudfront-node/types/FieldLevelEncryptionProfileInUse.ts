import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified profile for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionProfileInUse
  extends __ServiceException__<_FieldLevelEncryptionProfileInUseDetails> {
  name: "FieldLevelEncryptionProfileInUse";
}

export interface _FieldLevelEncryptionProfileInUseDetails {
  /**
   * _string shape
   */
  Message?: string;
}
