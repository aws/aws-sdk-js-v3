/**
 * <p>A complex type for the set of IP addresses for an accelerator.</p>
 */
export interface _IpSet {
  /**
   * <p>The types of IP addresses included in this IP set.</p>
   */
  IpFamily?: string;

  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   */
  IpAddresses?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledIpSet extends _IpSet {
  /**
   * <p>The array of IP addresses in the IP address set. An IP address set can have a maximum of two IP addresses.</p>
   */
  IpAddresses?: Array<string>;
}
