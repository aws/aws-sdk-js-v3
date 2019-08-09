/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface _NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export type _UnmarshalledNetworkAclAssociation = _NetworkAclAssociation;
