/**
 * <p>Describes the status of changes to HSM settings.</p>
 */
export interface _HsmStatus {
  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Reports whether the Amazon Redshift cluster has finished applying any HSM settings changes specified in a modify cluster command.</p> <p>Values: active, applying</p>
   */
  Status?: string;
}

export type _UnmarshalledHsmStatus = _HsmStatus;
