import {
  _NetworkInterfaceAssociation,
  _UnmarshalledNetworkInterfaceAssociation
} from "./_NetworkInterfaceAssociation";

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface _NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: _NetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export interface _UnmarshalledNetworkInterfacePrivateIpAddress
  extends _NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: _UnmarshalledNetworkInterfaceAssociation;
}
