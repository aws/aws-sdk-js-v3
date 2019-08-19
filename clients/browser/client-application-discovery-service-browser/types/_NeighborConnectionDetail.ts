/**
 * <p>Details about neighboring servers.</p>
 */
export interface _NeighborConnectionDetail {
  /**
   * <p>The ID of the server that opened the network connection.</p>
   */
  sourceServerId: string;

  /**
   * <p>The ID of the server that accepted the network connection.</p>
   */
  destinationServerId: string;

  /**
   * <p>The destination network port for the connection.</p>
   */
  destinationPort?: number;

  /**
   * <p>The network protocol used for the connection.</p>
   */
  transportProtocol?: string;

  /**
   * <p>The number of open network connections with the neighboring server.</p>
   */
  connectionsCount: number;
}

export type _UnmarshalledNeighborConnectionDetail = _NeighborConnectionDetail;
