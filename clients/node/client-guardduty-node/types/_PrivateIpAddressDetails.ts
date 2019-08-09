/**
 * _PrivateIpAddressDetails shape
 */
export interface _PrivateIpAddressDetails {
  /**
   * <p>Private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;
}

export type _UnmarshalledPrivateIpAddressDetails = _PrivateIpAddressDetails;
