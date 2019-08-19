/**
 * <p>A container for filter information for the selection of S3 objects encrypted with AWS KMS.</p>
 */
export interface _SseKmsEncryptedObjects {
  /**
   * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS-managed key.</p>
   */
  Status: "Enabled" | "Disabled" | string;
}

export type _UnmarshalledSseKmsEncryptedObjects = _SseKmsEncryptedObjects;
