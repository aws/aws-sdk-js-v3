import {
  _VpcIpv6CidrBlockAssociation,
  _UnmarshalledVpcIpv6CidrBlockAssociation
} from "./_VpcIpv6CidrBlockAssociation";
import {
  _VpcCidrBlockAssociation,
  _UnmarshalledVpcCidrBlockAssociation
} from "./_VpcCidrBlockAssociation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a VPC.</p>
 */
export interface _Vpc {
  /**
   * <p>The primary IPv4 CIDR block for the VPC.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The ID of the set of DHCP options you've associated with the VPC (or <code>default</code> if the default options are associated with the VPC).</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>The current state of the VPC.</p>
   */
  State?: "pending" | "available" | string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the VPC.</p>
   */
  OwnerId?: string;

  /**
   * <p>The allowed tenancy of instances launched into the VPC.</p>
   */
  InstanceTenancy?: "default" | "dedicated" | "host" | string;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?:
    | Array<_VpcIpv6CidrBlockAssociation>
    | Iterable<_VpcIpv6CidrBlockAssociation>;

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?:
    | Array<_VpcCidrBlockAssociation>
    | Iterable<_VpcCidrBlockAssociation>;

  /**
   * <p>Indicates whether the VPC is the default VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledVpc extends _Vpc {
  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: Array<_UnmarshalledVpcIpv6CidrBlockAssociation>;

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: Array<_UnmarshalledVpcCidrBlockAssociation>;

  /**
   * <p>Any tags assigned to the VPC.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
