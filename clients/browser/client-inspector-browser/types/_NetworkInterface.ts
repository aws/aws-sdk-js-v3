import { _PrivateIp, _UnmarshalledPrivateIp } from "./_PrivateIp";
import { _SecurityGroup, _UnmarshalledSecurityGroup } from "./_SecurityGroup";

/**
 * <p>Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.</p>
 */
export interface _NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The ID of a subnet associated with the network interface.</p>
   */
  subnetId?: string;

  /**
   * <p>The ID of a VPC associated with the network interface.</p>
   */
  vpcId?: string;

  /**
   * <p>The name of a private DNS associated with the network interface.</p>
   */
  privateDnsName?: string;

  /**
   * <p>The private IP address associated with the network interface.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes the privateDnsName and privateIpAddress.</p>
   */
  privateIpAddresses?: Array<_PrivateIp> | Iterable<_PrivateIp>;

  /**
   * <p>The name of a public DNS associated with the network interface.</p>
   */
  publicDnsName?: string;

  /**
   * <p>The public IP address from which the network interface is reachable.</p>
   */
  publicIp?: string;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   */
  ipv6Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>A list of the security groups associated with the network interface. Includes the groupId and groupName.</p>
   */
  securityGroups?: Array<_SecurityGroup> | Iterable<_SecurityGroup>;
}

export interface _UnmarshalledNetworkInterface extends _NetworkInterface {
  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes the privateDnsName and privateIpAddress.</p>
   */
  privateIpAddresses?: Array<_UnmarshalledPrivateIp>;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   */
  ipv6Addresses?: Array<string>;

  /**
   * <p>A list of the security groups associated with the network interface. Includes the groupId and groupName.</p>
   */
  securityGroups?: Array<_UnmarshalledSecurityGroup>;
}
