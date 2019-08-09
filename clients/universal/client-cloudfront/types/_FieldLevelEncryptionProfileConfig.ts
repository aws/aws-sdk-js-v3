import {
  _EncryptionEntities,
  _UnmarshalledEncryptionEntities
} from "./_EncryptionEntities";

/**
 * <p>A complex data type of profiles for the field-level encryption.</p>
 */
export interface _FieldLevelEncryptionProfileConfig {
  /**
   * <p>Profile name for the field-level encryption profile.</p>
   */
  Name: string;

  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   */
  CallerReference: string;

  /**
   * <p>An optional comment for the field-level encryption profile.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: _EncryptionEntities;
}

export interface _UnmarshalledFieldLevelEncryptionProfileConfig
  extends _FieldLevelEncryptionProfileConfig {
  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: _UnmarshalledEncryptionEntities;
}
