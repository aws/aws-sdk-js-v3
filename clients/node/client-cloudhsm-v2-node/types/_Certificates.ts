/**
 * <p>Contains one or more certificates or a certificate signing request (CSR).</p>
 */
export interface _Certificates {
  /**
   * <p>The cluster's certificate signing request (CSR). The CSR exists only when the cluster's state is <code>UNINITIALIZED</code>.</p>
   */
  ClusterCsr?: string;

  /**
   * <p>The HSM certificate issued (signed) by the HSM hardware.</p>
   */
  HsmCertificate?: string;

  /**
   * <p>The HSM hardware certificate issued (signed) by AWS CloudHSM.</p>
   */
  AwsHardwareCertificate?: string;

  /**
   * <p>The HSM hardware certificate issued (signed) by the hardware manufacturer.</p>
   */
  ManufacturerHardwareCertificate?: string;

  /**
   * <p>The cluster certificate issued (signed) by the issuing certificate authority (CA) of the cluster's owner.</p>
   */
  ClusterCertificate?: string;
}

export type _UnmarshalledCertificates = _Certificates;
