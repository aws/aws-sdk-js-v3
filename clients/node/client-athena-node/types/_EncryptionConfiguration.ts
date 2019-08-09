/**
 * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.</p>
 */
export interface _EncryptionConfiguration {
  /**
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (<code>SSE-S3</code>), server-side encryption with KMS-managed keys (<code>SSE-KMS</code>), or client-side encryption with KMS-managed keys (CSE-KMS) is used.</p> <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup. </p>
   */
  EncryptionOption: "SSE_S3" | "SSE_KMS" | "CSE_KMS" | string;

  /**
   * <p>For <code>SSE-KMS</code> and <code>CSE-KMS</code>, this is the KMS key ARN or ID.</p>
   */
  KmsKey?: string;
}

export type _UnmarshalledEncryptionConfiguration = _EncryptionConfiguration;
