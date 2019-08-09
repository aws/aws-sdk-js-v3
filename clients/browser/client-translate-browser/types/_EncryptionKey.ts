/**
 * <p>The encryption key used to encrypt the custom terminologies used by Amazon Translate.</p>
 */
export interface _EncryptionKey {
  /**
   * <p>The type of encryption key used by Amazon Translate to encrypt custom terminologies.</p>
   */
  Type: "KMS" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key being used to encrypt the custom terminology.</p>
   */
  Id: string;
}

export type _UnmarshalledEncryptionKey = _EncryptionKey;
