/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 */
export interface _JobBookmarksEncryption {
  /**
   * <p>The encryption mode to use for job bookmarks data.</p>
   */
  JobBookmarksEncryptionMode?: "DISABLED" | "CSE-KMS" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export type _UnmarshalledJobBookmarksEncryption = _JobBookmarksEncryption;
