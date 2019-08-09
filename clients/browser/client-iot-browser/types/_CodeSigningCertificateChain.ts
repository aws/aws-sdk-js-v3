/**
 * <p>Describes the certificate chain being used when code signing a file.</p>
 */
export interface _CodeSigningCertificateChain {
  /**
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;

  /**
   * <p>A base64 encoded binary representation of the code signing certificate chain.</p>
   */
  inlineDocument?: string;
}

export type _UnmarshalledCodeSigningCertificateChain = _CodeSigningCertificateChain;
