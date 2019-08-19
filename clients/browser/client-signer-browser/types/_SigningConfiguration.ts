import {
  _EncryptionAlgorithmOptions,
  _UnmarshalledEncryptionAlgorithmOptions
} from "./_EncryptionAlgorithmOptions";
import {
  _HashAlgorithmOptions,
  _UnmarshalledHashAlgorithmOptions
} from "./_HashAlgorithmOptions";

/**
 * <p>The configuration of an AWS Signer operation.</p>
 */
export interface _SigningConfiguration {
  /**
   * <p>The encryption algorithm options that are available for an AWS Signer job.</p>
   */
  encryptionAlgorithmOptions: _EncryptionAlgorithmOptions;

  /**
   * <p>The hash algorithm options that are available for an AWS Signer job.</p>
   */
  hashAlgorithmOptions: _HashAlgorithmOptions;
}

export interface _UnmarshalledSigningConfiguration
  extends _SigningConfiguration {
  /**
   * <p>The encryption algorithm options that are available for an AWS Signer job.</p>
   */
  encryptionAlgorithmOptions: _UnmarshalledEncryptionAlgorithmOptions;

  /**
   * <p>The hash algorithm options that are available for an AWS Signer job.</p>
   */
  hashAlgorithmOptions: _UnmarshalledHashAlgorithmOptions;
}
