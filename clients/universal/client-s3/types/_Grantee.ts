/**
 * <p/>
 */
export interface _Grantee {
  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>Email address of the grantee.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>Type of grantee</p>
   */
  Type: "CanonicalUser" | "AmazonCustomerByEmail" | "Group" | string;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;
}

export type _UnmarshalledGrantee = _Grantee;
