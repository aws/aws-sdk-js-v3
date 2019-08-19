/**
 * <p>Describes association information for an Elastic IP address (IPv4 only).</p>
 */
export interface _NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network interface.</p>
   */
  PublicIp?: string;
}

export type _UnmarshalledNetworkInterfaceAssociation = _NetworkInterfaceAssociation;
