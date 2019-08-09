import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionQueryArgProfiles
  extends __ServiceException__<
    _TooManyFieldLevelEncryptionQueryArgProfilesDetails
  > {
  name: "TooManyFieldLevelEncryptionQueryArgProfiles";
}

export interface _TooManyFieldLevelEncryptionQueryArgProfilesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
