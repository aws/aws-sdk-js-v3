/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 */
export interface _NatGatewayAddress {
  /**
   * <p>The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the Elastic IP address.</p>
   */
  PrivateIp?: string;

  /**
   * <p>The Elastic IP address associated with the NAT gateway.</p>
   */
  PublicIp?: string;
}

export type _UnmarshalledNatGatewayAddress = _NatGatewayAddress;
