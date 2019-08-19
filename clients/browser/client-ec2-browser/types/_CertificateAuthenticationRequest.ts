/**
 * <p>Information about the client certificate to be used for authentication.</p>
 */
export interface _CertificateAuthenticationRequest {
  /**
   * <p>The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in AWS Certificate Manager (ACM).</p>
   */
  ClientRootCertificateChainArn?: string;
}

export type _UnmarshalledCertificateAuthenticationRequest = _CertificateAuthenticationRequest;
