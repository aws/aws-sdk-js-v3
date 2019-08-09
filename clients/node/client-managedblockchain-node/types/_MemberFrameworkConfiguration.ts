import {
  _MemberFabricConfiguration,
  _UnmarshalledMemberFabricConfiguration
} from "./_MemberFabricConfiguration";

/**
 * <p>Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface _MemberFrameworkConfiguration {
  /**
   * <p>Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _MemberFabricConfiguration;
}

export interface _UnmarshalledMemberFrameworkConfiguration
  extends _MemberFrameworkConfiguration {
  /**
   * <p>Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _UnmarshalledMemberFabricConfiguration;
}
