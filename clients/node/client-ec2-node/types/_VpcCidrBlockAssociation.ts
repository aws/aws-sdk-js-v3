import {
  _VpcCidrBlockState,
  _UnmarshalledVpcCidrBlockState
} from "./_VpcCidrBlockState";

/**
 * <p>Describes an IPv4 CIDR block associated with a VPC.</p>
 */
export interface _VpcCidrBlockAssociation {
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: _VpcCidrBlockState;
}

export interface _UnmarshalledVpcCidrBlockAssociation
  extends _VpcCidrBlockAssociation {
  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: _UnmarshalledVpcCidrBlockState;
}
