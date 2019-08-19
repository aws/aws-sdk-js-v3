import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of encryption entities for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionEncryptionEntities
  extends __ServiceException__<
    _TooManyFieldLevelEncryptionEncryptionEntitiesDetails
  > {
  name: "TooManyFieldLevelEncryptionEncryptionEntities";
}

export interface _TooManyFieldLevelEncryptionEncryptionEntitiesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
