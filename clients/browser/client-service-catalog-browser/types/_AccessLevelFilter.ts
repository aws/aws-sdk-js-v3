/**
 * <p>The access level to use to filter results.</p>
 */
export interface _AccessLevelFilter {
  /**
   * <p>The access level.</p> <ul> <li> <p> <code>Account</code> - Filter results based on the account.</p> </li> <li> <p> <code>Role</code> - Filter results based on the federated role of the specified user.</p> </li> <li> <p> <code>User</code> - Filter results based on the specified user.</p> </li> </ul>
   */
  Key?: "Account" | "Role" | "User" | string;

  /**
   * <p>The user to which the access level applies. The only supported value is <code>Self</code>.</p>
   */
  Value?: string;
}

export type _UnmarshalledAccessLevelFilter = _AccessLevelFilter;
