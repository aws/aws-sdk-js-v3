/**
 *
 *             <p>Details for client authentication using TLS.</p>
 *
 */
export interface _Tls {
  /**
   *
   *             <p>List of ACM Certificate Authority ARNs.</p>
   *
   */
  CertificateAuthorityArnList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTls extends _Tls {
  /**
   *
   *             <p>List of ACM Certificate Authority ARNs.</p>
   *
   */
  CertificateAuthorityArnList?: Array<string>;
}
