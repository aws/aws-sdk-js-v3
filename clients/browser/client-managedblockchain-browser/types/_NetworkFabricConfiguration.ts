/**
 * <p>Hyperledger Fabric configuration properties for the network.</p>
 */
export interface _NetworkFabricConfiguration {
  /**
   * <p>The edition of Amazon Managed Blockchain that the network uses. For more information, see <a href="https://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition: "STARTER" | "STANDARD" | string;
}

export type _UnmarshalledNetworkFabricConfiguration = _NetworkFabricConfiguration;
