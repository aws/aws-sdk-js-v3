/**
 * <p>Describes association information for an Elastic IP address (IPv4).</p>
 */
export interface _InstanceNetworkInterfaceAssociation {
  /**
   * <p>The ID of the owner of the Elastic IP address.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address or Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

export type _UnmarshalledInstanceNetworkInterfaceAssociation = _InstanceNetworkInterfaceAssociation;
