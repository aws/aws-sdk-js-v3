/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface _PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddress?: string;
}

export type _UnmarshalledPrivateIpAddressSpecification = _PrivateIpAddressSpecification;
