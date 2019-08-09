/**
 * <p>Describes information about the instance ports.</p>
 */
export interface _InstancePortInfo {
  /**
   * <p>The first port in the range.</p>
   */
  fromPort?: number;

  /**
   * <p>The last port in the range.</p>
   */
  toPort?: number;

  /**
   * <p>The protocol being used. Can be one of the following.</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href="https://en.wikipedia.org/wiki/Transport_layer">Transport layer</a> on Wikipedia.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> </ul>
   */
  protocol?: "tcp" | "all" | "udp" | string;

  /**
   * <p>The location from which access is allowed (e.g., <code>Anywhere (0.0.0.0/0)</code>).</p>
   */
  accessFrom?: string;

  /**
   * <p>The type of access (<code>Public</code> or <code>Private</code>).</p>
   */
  accessType?: "Public" | "Private" | string;

  /**
   * <p>The common name.</p>
   */
  commonName?: string;

  /**
   * <p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>
   */
  accessDirection?: "inbound" | "outbound" | string;
}

export type _UnmarshalledInstancePortInfo = _InstancePortInfo;
