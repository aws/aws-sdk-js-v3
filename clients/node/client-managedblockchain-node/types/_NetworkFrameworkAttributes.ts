import {
  _NetworkFabricAttributes,
  _UnmarshalledNetworkFabricAttributes
} from "./_NetworkFabricAttributes";

/**
 * <p>Attributes relevant to the network for the blockchain framework that the network uses.</p>
 */
export interface _NetworkFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _NetworkFabricAttributes;
}

export interface _UnmarshalledNetworkFrameworkAttributes
  extends _NetworkFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _UnmarshalledNetworkFabricAttributes;
}
