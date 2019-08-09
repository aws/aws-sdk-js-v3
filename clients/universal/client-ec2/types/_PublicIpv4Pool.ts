import {
  _PublicIpv4PoolRange,
  _UnmarshalledPublicIpv4PoolRange
} from "./_PublicIpv4PoolRange";

/**
 * <p>Describes an address pool.</p>
 */
export interface _PublicIpv4Pool {
  /**
   * <p>The ID of the IPv4 address pool.</p>
   */
  PoolId?: string;

  /**
   * <p>A description of the address pool.</p>
   */
  Description?: string;

  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?:
    | Array<_PublicIpv4PoolRange>
    | Iterable<_PublicIpv4PoolRange>;

  /**
   * <p>The total number of addresses.</p>
   */
  TotalAddressCount?: number;

  /**
   * <p>The total number of available addresses.</p>
   */
  TotalAvailableAddressCount?: number;
}

export interface _UnmarshalledPublicIpv4Pool extends _PublicIpv4Pool {
  /**
   * <p>The address ranges.</p>
   */
  PoolAddressRanges?: Array<_UnmarshalledPublicIpv4PoolRange>;
}
