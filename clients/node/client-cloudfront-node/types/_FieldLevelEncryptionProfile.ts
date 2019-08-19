import {
  _FieldLevelEncryptionProfileConfig,
  _UnmarshalledFieldLevelEncryptionProfileConfig
} from "./_FieldLevelEncryptionProfileConfig";

/**
 * <p>A complex data type for field-level encryption profiles.</p>
 */
export interface _FieldLevelEncryptionProfile {
  /**
   * <p>The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string;

  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: _FieldLevelEncryptionProfileConfig;
}

export interface _UnmarshalledFieldLevelEncryptionProfile
  extends _FieldLevelEncryptionProfile {
  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig: _UnmarshalledFieldLevelEncryptionProfileConfig;
}
