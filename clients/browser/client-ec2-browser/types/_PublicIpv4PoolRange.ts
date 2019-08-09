/**
 * <p>Describes an address range of an IPv4 address pool.</p>
 */
export interface _PublicIpv4PoolRange {
  /**
   * <p>The first IP address in the range.</p>
   */
  FirstAddress?: string;

  /**
   * <p>The last IP address in the range.</p>
   */
  LastAddress?: string;

  /**
   * <p>The number of addresses in the range.</p>
   */
  AddressCount?: number;

  /**
   * <p>The number of available addresses in the range.</p>
   */
  AvailableAddressCount?: number;
}

export type _UnmarshalledPublicIpv4PoolRange = _PublicIpv4PoolRange;
