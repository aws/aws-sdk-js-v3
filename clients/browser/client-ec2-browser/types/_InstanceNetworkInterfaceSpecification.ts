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
export interface _InstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The public IP address can only be assigned to a network interface for eth0, and can only be assigned to a new network interface, not an existing one. You cannot specify more than one network interface in the request. If launching into a default subnet, the default value is <code>true</code>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>If set to <code>true</code>, the interface is deleted when the instance is terminated. You can specify <code>true</code> only if creating a new network interface when launching an instance.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The description of the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Description?: string;

  /**
   * <p>The position of the network interface in the attachment order. A primary network interface has a device index of 0.</p> <p>If you specify a network interface when launching an instance, you must specify the device index.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * <p>A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the IPv6 addresses from the range of the subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more IPv6 addresses to assign to the network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6Addresses?: Array<_InstanceIpv6Address> | Iterable<_InstanceIpv6Address>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance. You cannot specify this option if you're launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?:
    | Array<_PrivateIpAddressSpecification>
    | Iterable<_PrivateIpAddressSpecification>;

  /**
   * <p>The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet associated with the network string. Applies only if creating a network interface when launching an instance.</p>
   */
  SubnetId?: string;

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p> <p>Valid values: <code>interface</code> | <code>efa</code> </p>
   */
  InterfaceType?: string;
}

export interface _UnmarshalledInstanceNetworkInterfaceSpecification
  extends _InstanceNetworkInterfaceSpecification {
  /**
   * <p>The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.</p>
   */
  Groups?: Array<string>;

  /**
   * <p>One or more IPv6 addresses to assign to the network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledInstanceIpv6Address>;

  /**
   * <p>One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're launching more than one instance in a <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a> request.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledPrivateIpAddressSpecification>;
}
