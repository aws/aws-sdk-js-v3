import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.</p>
 */
export interface _HsmClientCertificate {
  /**
   * <p>The identifier of the HSM client certificate.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The public key that the Amazon Redshift cluster will use to connect to the HSM. You must register the public key in the HSM.</p>
   */
  HsmClientCertificatePublicKey?: string;

  /**
   * <p>The list of tags for the HSM client certificate.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledHsmClientCertificate
  extends _HsmClientCertificate {
  /**
   * <p>The list of tags for the HSM client certificate.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
