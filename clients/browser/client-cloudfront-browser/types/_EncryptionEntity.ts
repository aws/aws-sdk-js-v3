import { _FieldPatterns, _UnmarshalledFieldPatterns } from "./_FieldPatterns";

/**
 * <p>Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. </p>
 */
export interface _EncryptionEntity {
  /**
   * <p>The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns. </p>
   */
  PublicKeyId: string;

  /**
   * <p>The provider associated with the public key being used for encryption. This value must also be provided with the private key for applications to be able to decrypt data.</p>
   */
  ProviderId: string;

  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have both ABC* and AB*. Note that field patterns are case-sensitive. </p>
   */
  FieldPatterns: _FieldPatterns;
}

export interface _UnmarshalledEncryptionEntity extends _EncryptionEntity {
  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have both ABC* and AB*. Note that field patterns are case-sensitive. </p>
   */
  FieldPatterns: _UnmarshalledFieldPatterns;
}
