import {
  _InstanceNetworkInterfaceAssociation,
  _UnmarshalledInstanceNetworkInterfaceAssociation
} from "./_InstanceNetworkInterfaceAssociation";

/**
 * <p>Describes a private IPv4 address.</p>
 */
export interface _InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: _InstanceNetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IP address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;
}

export interface _UnmarshalledInstancePrivateIpAddress
  extends _InstancePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address for the network interface.</p>
   */
  Association?: _UnmarshalledInstanceNetworkInterfaceAssociation;
}
