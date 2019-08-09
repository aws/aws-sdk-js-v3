import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionProfiles
  extends __ServiceException__<_TooManyFieldLevelEncryptionProfilesDetails> {
  name: "TooManyFieldLevelEncryptionProfiles";
}

export interface _TooManyFieldLevelEncryptionProfilesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
