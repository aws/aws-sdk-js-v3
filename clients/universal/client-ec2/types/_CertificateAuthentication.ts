/**
 * <p>Information about the client certificate used for authentication.</p>
 */
export interface _CertificateAuthentication {
  /**
   * <p>The ARN of the client certificate. </p>
   */
  ClientRootCertificateChain?: string;
}

export type _UnmarshalledCertificateAuthentication = _CertificateAuthentication;
