/**
 * <p>Describes a gateway's network interface.</p>
 */
export interface _NetworkInterface {
  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the interface.</p>
   */
  Ipv4Address?: string;

  /**
   * <p>The Media Access Control (MAC) address of the interface.</p> <note> <p>This is currently unsupported and will not be returned in output.</p> </note>
   */
  MacAddress?: string;

  /**
   * <p>The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently not supported</i>.</p>
   */
  Ipv6Address?: string;
}

export type _UnmarshalledNetworkInterface = _NetworkInterface;
