/**
 * <p>Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network using the Hyperledger Fabric framework.</p>
 */
export interface _MemberFabricConfiguration {
  /**
   * <p>The user name for the member's initial administrative user.</p>
   */
  AdminUsername: string;

  /**
   * <p>The password for the member's initial administrative user. The <code>AdminPassword</code> must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(‘), double quote(“), forward slash(/), backward slash(\), @, or a space.</p>
   */
  AdminPassword: string;
}

export type _UnmarshalledMemberFabricConfiguration = _MemberFabricConfiguration;
