/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface _EncryptionAtRest {
  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: "DISABLED" | "SSE-KMS" | string;

  /**
   * <p>The ID of the AWS KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;
}

export type _UnmarshalledEncryptionAtRest = _EncryptionAtRest;
