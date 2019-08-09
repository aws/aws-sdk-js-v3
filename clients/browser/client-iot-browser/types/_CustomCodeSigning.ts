import {
  _CodeSigningSignature,
  _UnmarshalledCodeSigningSignature
} from "./_CodeSigningSignature";
import {
  _CodeSigningCertificateChain,
  _UnmarshalledCodeSigningCertificateChain
} from "./_CodeSigningCertificateChain";

/**
 * <p>Describes a custom method used to code sign a file.</p>
 */
export interface _CustomCodeSigning {
  /**
   * <p>The signature for the file.</p>
   */
  signature?: _CodeSigningSignature;

  /**
   * <p>The certificate chain.</p>
   */
  certificateChain?: _CodeSigningCertificateChain;

  /**
   * <p>The hash algorithm used to code sign the file.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature algorithm used to code sign the file.</p>
   */
  signatureAlgorithm?: string;
}

export interface _UnmarshalledCustomCodeSigning extends _CustomCodeSigning {
  /**
   * <p>The signature for the file.</p>
   */
  signature?: _UnmarshalledCodeSigningSignature;

  /**
   * <p>The certificate chain.</p>
   */
  certificateChain?: _UnmarshalledCodeSigningCertificateChain;
}
