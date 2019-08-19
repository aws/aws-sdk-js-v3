import {
  _InstanceIpv6AddressRequest,
  _UnmarshalledInstanceIpv6AddressRequest
} from "./_InstanceIpv6AddressRequest";
import {
  _PrivateIpAddressSpecification,
  _UnmarshalledPrivateIpAddressSpecification
} from "./_PrivateIpAddressSpecification";

/**
 * <p>The parameters for a network interface.</p>
 */
export interface _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
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
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p> <p>Valid values: <code>interface</code> | <code>efa</code> </p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?:
    | Array<_InstanceIpv6AddressRequest>
    | Iterable<_InstanceIpv6AddressRequest>;

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
   * <p>The number of secondary private IPv4 addresses to assign to a network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;
}

export interface _UnmarshalledLaunchTemplateInstanceNetworkInterfaceSpecificationRequest
  extends _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: Array<string>;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledInstanceIpv6AddressRequest>;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledPrivateIpAddressSpecification>;
}
