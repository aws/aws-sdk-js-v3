import {
  _InstanceIpv6Address,
  _UnmarshalledInstanceIpv6Address
} from "./_InstanceIpv6Address";
import {
  _PrivateIpAddressSpecification,
  _UnmarshalledPrivateIpAddressSpecification
} from "./_PrivateIpAddressSpecification";

/**
 * <p>Describes a network interface.</p>
 */
export interface _LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: Array<_InstanceIpv6Address> | Iterable<_InstanceIpv6Address>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?:
    | Array<_PrivateIpAddressSpecification>
    | Iterable<_PrivateIpAddressSpecification>;

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;
}

export interface _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecification
  extends _LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: Array<string>;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledInstanceIpv6Address>;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledPrivateIpAddressSpecification>;
}
