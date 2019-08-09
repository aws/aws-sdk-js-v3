/**
 * <p>Detailed information about a device's network profile.</p>
 */
export interface _DeviceNetworkProfileInfo {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The ARN of the certificate associated with a device.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The time (in epoch) when the certificate expires.</p>
   */
  CertificateExpirationTime?: Date | string | number;
}

export interface _UnmarshalledDeviceNetworkProfileInfo
  extends _DeviceNetworkProfileInfo {
  /**
   * <p>The time (in epoch) when the certificate expires.</p>
   */
  CertificateExpirationTime?: Date;
}
