/**
 * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
 */
export interface _NodeFabricAttributes {
  /**
   * <p>The endpoint that identifies the peer node for all services except peer channel-based event services.</p>
   */
  PeerEndpoint?: string;

  /**
   * <p>The endpoint that identifies the peer node for peer channel-based event services.</p>
   */
  PeerEventEndpoint?: string;
}

export type _UnmarshalledNodeFabricAttributes = _NodeFabricAttributes;
