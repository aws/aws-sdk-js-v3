/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.</p>
 */
export interface _Permission {
  /**
   * <p>The identifier of the user, group, or resource to which the permissions are granted.</p>
   */
  GranteeId: string;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   */
  GranteeType: "GROUP" | "USER" | string;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues:
    | Array<"FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF" | string>
    | Iterable<"FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF" | string>;
}

export interface _UnmarshalledPermission extends _Permission {
  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues: Array<
    "FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF" | string
  >;
}
