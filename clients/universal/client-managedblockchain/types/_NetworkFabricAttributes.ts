/**
 * <p>Attributes of Hyperledger Fabric for a network.</p>
 */
export interface _NetworkFabricAttributes {
  /**
   * <p>The endpoint of the ordering service for the network.</p>
   */
  OrderingServiceEndpoint?: string;

  /**
   * <p>The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see <a href="https://aws.amazon.com/managed-blockchain/pricing/">Amazon Managed Blockchain Pricing</a>.</p>
   */
  Edition?: "STARTER" | "STANDARD" | string;
}

export type _UnmarshalledNetworkFabricAttributes = _NetworkFabricAttributes;
