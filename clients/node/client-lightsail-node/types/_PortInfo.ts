/**
 * <p>Describes information about the ports on your virtual private server (or <i>instance</i>).</p>
 */
export interface _PortInfo {
  /**
   * <p>The first port in the range.</p>
   */
  fromPort?: number;

  /**
   * <p>The last port in the range.</p>
   */
  toPort?: number;

  /**
   * <p>The protocol. </p>
   */
  protocol?: "tcp" | "all" | "udp" | string;
}

export type _UnmarshalledPortInfo = _PortInfo;
