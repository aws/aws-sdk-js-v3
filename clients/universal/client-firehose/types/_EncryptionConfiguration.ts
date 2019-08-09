import {
  _KMSEncryptionConfig,
  _UnmarshalledKMSEncryptionConfig
} from "./_KMSEncryptionConfig";

/**
 * <p>Describes the encryption for a destination in Amazon S3.</p>
 */
export interface _EncryptionConfiguration {
  /**
   * <p>Specifically override existing encryption information to ensure that no encryption is used.</p>
   */
  NoEncryptionConfig?: "NoEncryption" | string;

  /**
   * <p>The encryption key.</p>
   */
  KMSEncryptionConfig?: _KMSEncryptionConfig;
}

export interface _UnmarshalledEncryptionConfiguration
  extends _EncryptionConfiguration {
  /**
   * <p>The encryption key.</p>
   */
  KMSEncryptionConfig?: _UnmarshalledKMSEncryptionConfig;
}
