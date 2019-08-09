/**
 * <p>In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.</p>
 */
export interface _IpAddressUpdate {
  /**
   * <p> <i>Only when removing an IP address from a resolver endpoint</i>: The ID of the IP address that you want to remove. To get this ID, use <a>GetResolverEndpoint</a>.</p>
   */
  IpId?: string;

  /**
   * <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use <a>GetResolverEndpoint</a>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The new IP address.</p>
   */
  Ip?: string;
}

export type _UnmarshalledIpAddressUpdate = _IpAddressUpdate;
