import {
  _NodeFabricAttributes,
  _UnmarshalledNodeFabricAttributes
} from "./_NodeFabricAttributes";

/**
 * <p>Attributes relevant to a peer node on a Managed Blockchain network for the blockchain framework that the network uses.</p>
 */
export interface _NodeFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _NodeFabricAttributes;
}

export interface _UnmarshalledNodeFrameworkAttributes
  extends _NodeFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _UnmarshalledNodeFabricAttributes;
}
