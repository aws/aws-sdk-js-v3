/**
 * <p>The hash algorithms that are available to an AWS Signer job.</p>
 */
export interface _HashAlgorithmOptions {
  /**
   * <p>The set of accepted hash algorithms allowed in an AWS Signer job.</p>
   */
  allowedValues:
    | Array<"SHA1" | "SHA256" | string>
    | Iterable<"SHA1" | "SHA256" | string>;

  /**
   * <p>The default hash algorithm that is used in an AWS Signer job.</p>
   */
  defaultValue: "SHA1" | "SHA256" | string;
}

export interface _UnmarshalledHashAlgorithmOptions
  extends _HashAlgorithmOptions {
  /**
   * <p>The set of accepted hash algorithms allowed in an AWS Signer job.</p>
   */
  allowedValues: Array<"SHA1" | "SHA256" | string>;
}
