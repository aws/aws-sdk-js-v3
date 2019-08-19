import {
  _SubnetIpv6CidrBlockAssociation,
  _UnmarshalledSubnetIpv6CidrBlockAssociation
} from "./_SubnetIpv6CidrBlockAssociation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a subnet.</p>
 */
export interface _Subnet {
  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The number of unused private IPv4 addresses in the subnet. The IPv4 addresses for any stopped instances are considered unavailable.</p>
   */
  AvailableIpAddressCount?: number;

  /**
   * <p>The IPv4 CIDR block assigned to the subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether this is the default subnet for the Availability Zone.</p>
   */
  DefaultForAz?: boolean;

  /**
   * <p>Indicates whether instances launched in this subnet receive a public IPv4 address.</p>
   */
  MapPublicIpOnLaunch?: boolean;

  /**
   * <p>The current state of the subnet.</p>
   */
  State?: "pending" | "available" | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC the subnet is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the subnet.</p>
   */
  OwnerId?: string;

  /**
   * <p>Indicates whether a network interface created in this subnet (including a network interface created by <a>RunInstances</a>) receives an IPv6 address.</p>
   */
  AssignIpv6AddressOnCreation?: boolean;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?:
    | Array<_SubnetIpv6CidrBlockAssociation>
    | Iterable<_SubnetIpv6CidrBlockAssociation>;

  /**
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Amazon Resource Name (ARN) of the subnet.</p>
   */
  SubnetArn?: string;
}

export interface _UnmarshalledSubnet extends _Subnet {
  /**
   * <p>Information about the IPv6 CIDR blocks associated with the subnet.</p>
   */
  Ipv6CidrBlockAssociationSet?: Array<
    _UnmarshalledSubnetIpv6CidrBlockAssociation
  >;

  /**
   * <p>Any tags assigned to the subnet.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
