/**
 * <p>Contains information about the grantee.</p>
 */
export interface _Grantee {
  /**
   * <p>Type of grantee</p>
   */
  Type: "AmazonCustomerByEmail" | "CanonicalUser" | "Group" | string;

  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>Email address of the grantee.</p>
   */
  EmailAddress?: string;
}

export type _UnmarshalledGrantee = _Grantee;
