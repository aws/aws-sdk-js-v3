/**
 * <p>Attributes of Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface _MemberFabricAttributes {
  /**
   * <p>The user name for the initial administrator user for the member.</p>
   */
  AdminUsername?: string;

  /**
   * <p>The endpoint used to access the member's certificate authority.</p>
   */
  CaEndpoint?: string;
}

export type _UnmarshalledMemberFabricAttributes = _MemberFabricAttributes;
