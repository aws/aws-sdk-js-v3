/**
 * <p>An object representing the elastic network interface for a multi-node parallel job node.</p>
 */
export interface _NetworkInterface {
  /**
   * <p>The attachment ID for the network interface.</p>
   */
  attachmentId?: string;

  /**
   * <p>The private IPv6 address for the network interface.</p>
   */
  ipv6Address?: string;

  /**
   * <p>The private IPv4 address for the network interface.</p>
   */
  privateIpv4Address?: string;
}

export type _UnmarshalledNetworkInterface = _NetworkInterface;
