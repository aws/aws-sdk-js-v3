/**
 * <p>The encryption algorithm options that are available to an AWS Signer job.</p>
 */
export interface _EncryptionAlgorithmOptions {
  /**
   * <p>The set of accepted encryption algorithms that are allowed in an AWS Signer job.</p>
   */
  allowedValues:
    | Array<"RSA" | "ECDSA" | string>
    | Iterable<"RSA" | "ECDSA" | string>;

  /**
   * <p>The default encryption algorithm that is used by an AWS Signer job.</p>
   */
  defaultValue: "RSA" | "ECDSA" | string;
}

export interface _UnmarshalledEncryptionAlgorithmOptions
  extends _EncryptionAlgorithmOptions {
  /**
   * <p>The set of accepted encryption algorithms that are allowed in an AWS Signer job.</p>
   */
  allowedValues: Array<"RSA" | "ECDSA" | string>;
}
