/**
 * <p>Information about the socket address.</p>
 */
export interface _SocketAddress {
  /**
   * <p>Name of a socket address.</p>
   */
  name: string;

  /**
   * <p>Port of a socket address.</p>
   */
  port: number;
}

export type _UnmarshalledSocketAddress = _SocketAddress;
