import {
  _VpcCidrBlockState,
  _UnmarshalledVpcCidrBlockState
} from "./_VpcCidrBlockState";

/**
 * <p>Describes an IPv6 CIDR block associated with a VPC.</p>
 */
export interface _VpcIpv6CidrBlockAssociation {
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: _VpcCidrBlockState;
}

export interface _UnmarshalledVpcIpv6CidrBlockAssociation
  extends _VpcIpv6CidrBlockAssociation {
  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  Ipv6CidrBlockState?: _UnmarshalledVpcCidrBlockState;
}
