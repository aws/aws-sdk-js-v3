import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified configuration for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionConfigAlreadyExists
  extends __ServiceException__<
    _FieldLevelEncryptionConfigAlreadyExistsDetails
  > {
  name: "FieldLevelEncryptionConfigAlreadyExists";
}

export interface _FieldLevelEncryptionConfigAlreadyExistsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
