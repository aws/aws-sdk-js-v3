import {
  _InstanceNetworkInterfaceAssociation,
  _UnmarshalledInstanceNetworkInterfaceAssociation
} from "./_InstanceNetworkInterfaceAssociation";
import {
  _InstanceNetworkInterfaceAttachment,
  _UnmarshalledInstanceNetworkInterfaceAttachment
} from "./_InstanceNetworkInterfaceAttachment";
import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import {
  _InstanceIpv6Address,
  _UnmarshalledInstanceIpv6Address
} from "./_InstanceIpv6Address";
import {
  _InstancePrivateIpAddress,
  _UnmarshalledInstancePrivateIpAddress
} from "./_InstancePrivateIpAddress";

/**
 * <p>Describes a network interface.</p>
 */
export interface _InstanceNetworkInterface {
  /**
   * <p>The association information for an Elastic IPv4 associated with the network interface.</p>
   */
  Association?: _InstanceNetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: _InstanceNetworkInterfaceAttachment;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>One or more security groups.</p>
   */
  Groups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>One or more IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: Array<_InstanceIpv6Address> | Iterable<_InstanceIpv6Address>;

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the AWS account that created the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?:
    | Array<_InstancePrivateIpAddress>
    | Iterable<_InstancePrivateIpAddress>;

  /**
   * <p>Indicates whether to validate network traffic to or from this network interface.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?:
    | "available"
    | "associated"
    | "attaching"
    | "in-use"
    | "detaching"
    | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Describes the type of network interface.</p> <p>Valid values: <code>interface</code> | <code>efa</code> </p>
   */
  InterfaceType?: string;
}

export interface _UnmarshalledInstanceNetworkInterface
  extends _InstanceNetworkInterface {
  /**
   * <p>The association information for an Elastic IPv4 associated with the network interface.</p>
   */
  Association?: _UnmarshalledInstanceNetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: _UnmarshalledInstanceNetworkInterfaceAttachment;

  /**
   * <p>One or more security groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>One or more IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledInstanceIpv6Address>;

  /**
   * <p>One or more private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledInstancePrivateIpAddress>;
}
