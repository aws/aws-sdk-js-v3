import {
  _NetworkInterfaceAssociation,
  _UnmarshalledNetworkInterfaceAssociation
} from "./_NetworkInterfaceAssociation";
import {
  _NetworkInterfaceAttachment,
  _UnmarshalledNetworkInterfaceAttachment
} from "./_NetworkInterfaceAttachment";
import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import {
  _NetworkInterfaceIpv6Address,
  _UnmarshalledNetworkInterfaceIpv6Address
} from "./_NetworkInterfaceIpv6Address";
import {
  _NetworkInterfacePrivateIpAddress,
  _UnmarshalledNetworkInterfacePrivateIpAddress
} from "./_NetworkInterfacePrivateIpAddress";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a network interface.</p>
 */
export interface _NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: _NetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: _NetworkInterfaceAttachment;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: "interface" | "natGateway" | "efa" | string;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?:
    | Array<_NetworkInterfaceIpv6Address>
    | Iterable<_NetworkInterfaceIpv6Address>;

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The AWS account ID of the owner of the network interface.</p>
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
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?:
    | Array<_NetworkInterfacePrivateIpAddress>
    | Iterable<_NetworkInterfacePrivateIpAddress>;

  /**
   * <p>The ID of the entity that launched the instance on your behalf (for example, AWS Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>Indicates whether the network interface is being managed by AWS.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>Indicates whether traffic to or from the instance is validated.</p>
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
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export interface _UnmarshalledNetworkInterface extends _NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: _UnmarshalledNetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: _UnmarshalledNetworkInterfaceAttachment;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: Array<_UnmarshalledNetworkInterfaceIpv6Address>;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: Array<_UnmarshalledNetworkInterfacePrivateIpAddress>;

  /**
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Array<_UnmarshalledTag>;
}
