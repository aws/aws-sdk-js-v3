import { _Ipv6CidrBlock, _UnmarshalledIpv6CidrBlock } from "./_Ipv6CidrBlock";
import { _CidrBlock, _UnmarshalledCidrBlock } from "./_CidrBlock";
import {
  _VpcPeeringConnectionOptionsDescription,
  _UnmarshalledVpcPeeringConnectionOptionsDescription
} from "./_VpcPeeringConnectionOptionsDescription";

/**
 * <p>Describes a VPC in a VPC peering connection.</p>
 */
export interface _VpcPeeringConnectionVpcInfo {
  /**
   * <p>The IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   */
  Ipv6CidrBlockSet?: Array<_Ipv6CidrBlock> | Iterable<_Ipv6CidrBlock>;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   */
  CidrBlockSet?: Array<_CidrBlock> | Iterable<_CidrBlock>;

  /**
   * <p>The AWS account ID of the VPC owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   */
  PeeringOptions?: _VpcPeeringConnectionOptionsDescription;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The Region in which the VPC is located.</p>
   */
  Region?: string;
}

export interface _UnmarshalledVpcPeeringConnectionVpcInfo
  extends _VpcPeeringConnectionVpcInfo {
  /**
   * <p>The IPv6 CIDR block for the VPC.</p>
   */
  Ipv6CidrBlockSet?: Array<_UnmarshalledIpv6CidrBlock>;

  /**
   * <p>Information about the IPv4 CIDR blocks for the VPC.</p>
   */
  CidrBlockSet?: Array<_UnmarshalledCidrBlock>;

  /**
   * <p>Information about the VPC peering connection options for the accepter or requester VPC.</p>
   */
  PeeringOptions?: _UnmarshalledVpcPeeringConnectionOptionsDescription;
}
