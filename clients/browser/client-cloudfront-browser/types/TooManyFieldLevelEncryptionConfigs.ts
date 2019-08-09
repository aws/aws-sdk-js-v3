import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of configurations for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionConfigs
  extends __ServiceException__<_TooManyFieldLevelEncryptionConfigsDetails> {
  name: "TooManyFieldLevelEncryptionConfigs";
}

export interface _TooManyFieldLevelEncryptionConfigsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
