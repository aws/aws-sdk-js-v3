import {
  _EncryptionEntities,
  _UnmarshalledEncryptionEntities
} from "./_EncryptionEntities";

/**
 * <p>The field-level encryption profile summary.</p>
 */
export interface _FieldLevelEncryptionProfileSummary {
  /**
   * <p>ID for the field-level encryption profile summary.</p>
   */
  Id: string;

  /**
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   */
  Name: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: _EncryptionEntities;

  /**
   * <p>An optional comment for the field-level encryption profile summary.</p>
   */
  Comment?: string;
}

export interface _UnmarshalledFieldLevelEncryptionProfileSummary
  extends _FieldLevelEncryptionProfileSummary {
  /**
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: _UnmarshalledEncryptionEntities;
}
