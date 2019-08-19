import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified profile for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionProfileAlreadyExists
  extends __ServiceException__<
    _FieldLevelEncryptionProfileAlreadyExistsDetails
  > {
  name: "FieldLevelEncryptionProfileAlreadyExists";
}

export interface _FieldLevelEncryptionProfileAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
