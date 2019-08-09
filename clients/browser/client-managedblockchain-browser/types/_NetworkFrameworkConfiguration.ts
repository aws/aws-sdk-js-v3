import {
  _NetworkFabricConfiguration,
  _UnmarshalledNetworkFabricConfiguration
} from "./_NetworkFabricConfiguration";

/**
 * <p> Configuration properties relevant to the network for the blockchain framework that the network uses. </p>
 */
export interface _NetworkFrameworkConfiguration {
  /**
   * <p> Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric. </p>
   */
  Fabric?: _NetworkFabricConfiguration;
}

export interface _UnmarshalledNetworkFrameworkConfiguration
  extends _NetworkFrameworkConfiguration {
  /**
   * <p> Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric. </p>
   */
  Fabric?: _UnmarshalledNetworkFabricConfiguration;
}
