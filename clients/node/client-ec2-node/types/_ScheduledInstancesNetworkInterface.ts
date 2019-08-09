import {
  _ScheduledInstancesIpv6Address,
  _UnmarshalledScheduledInstancesIpv6Address
} from "./_ScheduledInstancesIpv6Address";
import {
  _ScheduledInstancesPrivateIpAddressConfig,
  _UnmarshalledScheduledInstancesPrivateIpAddressConfig
} from "./_ScheduledInstancesPrivateIpAddressConfig";

/**
 * <p>Describes a network interface for a Scheduled Instance.</p>
 */
export interface _ScheduledInstancesNetworkInterface {
  /**
   * <p>Indicates whether to assign a public IPv4 address to instances launched in a VPC. The public IPv4 address can only be assigned to a network interface for eth0, and can only be assigned to a new network interface, not an existing one. You cannot specify more than one network interface in the request. If launching into a default subnet, the default value is <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether to delete the interface when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>The index of the device for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups.</p>
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * <p>The number of IPv6 addresses to assign to the network interface. The IPv6 addresses are automatically selected from the subnet range.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?:
    | Array<_ScheduledInstancesIpv6Address>
    | Iterable<_ScheduledInstancesIpv6Address>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?:
    | Array<_ScheduledInstancesPrivateIpAddressConfig>
    | Iterable<_ScheduledInstancesPrivateIpAddressConfig>;

  /**
   * <p>The number of secondary private IPv4 addresses.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export interface _UnmarshalledScheduledInstancesNetworkInterface
  extends _ScheduledInstancesNetworkInterface {
  /**
   * <p>The IDs of the security groups.</p>
   */
  Groups?: Array<string>;

  /**
   * <p>The specific IPv6 addresses from the subnet range.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledScheduledInstancesIpv6Address>;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddressConfigs?: Array<
    _UnmarshalledScheduledInstancesPrivateIpAddressConfig
  >;
}
