import {
  _PrivateIpAddressDetails,
  _UnmarshalledPrivateIpAddressDetails
} from "./_PrivateIpAddressDetails";
import { _SecurityGroup, _UnmarshalledSecurityGroup } from "./_SecurityGroup";

/**
 * _NetworkInterface shape
 */
export interface _NetworkInterface {
  /**
   * <p>A list of EC2 instance IPv6 address information.</p>
   */
  Ipv6Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the network interface</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   */
  PrivateIpAddresses?:
    | Array<_PrivateIpAddressDetails>
    | Iterable<_PrivateIpAddressDetails>;

  /**
   * <p>Public DNS name of the EC2 instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>Public IP address of the EC2 instance.</p>
   */
  PublicIp?: string;

  /**
   * <p>Security groups associated with the EC2 instance.</p>
   */
  SecurityGroups?: Array<_SecurityGroup> | Iterable<_SecurityGroup>;

  /**
   * <p>The subnet ID of the EC2 instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The VPC ID of the EC2 instance.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledNetworkInterface extends _NetworkInterface {
  /**
   * <p>A list of EC2 instance IPv6 address information.</p>
   */
  Ipv6Addresses?: Array<string>;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledPrivateIpAddressDetails>;

  /**
   * <p>Security groups associated with the EC2 instance.</p>
   */
  SecurityGroups?: Array<_UnmarshalledSecurityGroup>;
}
