import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of content type profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionContentTypeProfiles
  extends __ServiceException__<
    _TooManyFieldLevelEncryptionContentTypeProfilesDetails
  > {
  name: "TooManyFieldLevelEncryptionContentTypeProfiles";
}

export interface _TooManyFieldLevelEncryptionContentTypeProfilesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
