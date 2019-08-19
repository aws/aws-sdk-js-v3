import {
  _MemberFabricAttributes,
  _UnmarshalledMemberFabricAttributes
} from "./_MemberFabricAttributes";

/**
 * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
 */
export interface _MemberFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _MemberFabricAttributes;
}

export interface _UnmarshalledMemberFrameworkAttributes
  extends _MemberFrameworkAttributes {
  /**
   * <p>Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.</p>
   */
  Fabric?: _UnmarshalledMemberFabricAttributes;
}
