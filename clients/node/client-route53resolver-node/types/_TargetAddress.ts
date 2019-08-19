/**
 * <p>In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.</p>
 */
export interface _TargetAddress {
  /**
   * <p>One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.</p>
   */
  Ip: string;

  /**
   * <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   */
  Port?: number;
}

export type _UnmarshalledTargetAddress = _TargetAddress;
