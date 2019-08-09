/**
 * <p>A <code>UserIdentityInfo</code> object that contains information about the user's identity, including email address, first name, and last name.</p>
 */
export interface _UserIdentityInfo {
  /**
   * <p>The first name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name used in the user account. This is required if you are using Amazon Connect or SAML for identity management.</p>
   */
  LastName?: string;

  /**
   * <p>The email address added to the user account. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>
   */
  Email?: string;
}

export type _UnmarshalledUserIdentityInfo = _UserIdentityInfo;
