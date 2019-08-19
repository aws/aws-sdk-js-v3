import {
  _FieldLevelEncryptionConfig,
  _UnmarshalledFieldLevelEncryptionConfig
} from "./_FieldLevelEncryptionConfig";

/**
 * <p>A complex data type that includes the profile configurations and other options specified for field-level encryption. </p>
 */
export interface _FieldLevelEncryption {
  /**
   * <p>The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string;

  /**
   * <p>The last time the field-level encryption configuration was changed. </p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
   */
  FieldLevelEncryptionConfig: _FieldLevelEncryptionConfig;
}

export interface _UnmarshalledFieldLevelEncryption
  extends _FieldLevelEncryption {
  /**
   * <p>The last time the field-level encryption configuration was changed. </p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
   */
  FieldLevelEncryptionConfig: _UnmarshalledFieldLevelEncryptionConfig;
}
