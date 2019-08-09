/**
 * <p>In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries.</p>
 */
export interface _IpAddressRequest {
  /**
   * <p>The subnet that contains the IP address.</p>
   */
  SubnetId: string;

  /**
   * <p>The IP address that you want to use for DNS queries.</p>
   */
  Ip?: string;
}

export type _UnmarshalledIpAddressRequest = _IpAddressRequest;
