/**
 * <p>A signing configuration that overrides the default encryption or hash algorithm of a signing job.</p>
 */
export interface _SigningConfigurationOverrides {
  /**
   * <p>A specified override of the default encryption algorithm that is used in an AWS Signer job.</p>
   */
  encryptionAlgorithm?: "RSA" | "ECDSA" | string;

  /**
   * <p>A specified override of the default hash algorithm that is used in an AWS Signer job.</p>
   */
  hashAlgorithm?: "SHA1" | "SHA256" | string;
}

export type _UnmarshalledSigningConfigurationOverrides = _SigningConfigurationOverrides;
