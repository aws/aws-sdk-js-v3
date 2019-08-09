import {
  _SubnetCidrBlockState,
  _UnmarshalledSubnetCidrBlockState
} from "./_SubnetCidrBlockState";

/**
 * <p>Describes an IPv6 CIDR block associated with a subnet.</p>
 */
export interface _SubnetIpv6CidrBlockAssociation {
  /**
   * <p>The association ID for the CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: _SubnetCidrBlockState;
}

export interface _UnmarshalledSubnetIpv6CidrBlockAssociation
  extends _SubnetIpv6CidrBlockAssociation {
  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: _UnmarshalledSubnetCidrBlockState;
}
