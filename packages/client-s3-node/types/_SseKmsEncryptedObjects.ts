/**
 * <p>Container for filter information of selection of KMS Encrypted S3 objects.</p>
 */
export interface _SseKmsEncryptedObjects {
  /**
   * <p>The replication for KMS encrypted S3 objects is disabled if status is not Enabled.</p>
   */
  Status: "Enabled" | "Disabled" | string;
}

export type _UnmarshalledSseKmsEncryptedObjects = _SseKmsEncryptedObjects;
