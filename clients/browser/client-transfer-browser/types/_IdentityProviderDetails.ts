/**
 * <p>Returns information related to the type of user authentication that is in use for a server's users. A server can only have one method of authentication.</p>
 */
export interface _IdentityProviderDetails {
  /**
   * <p>The <code>IdentityProviderDetail</code> parameter contains the location of the service endpoint used to authenticate users.</p>
   */
  Url?: string;

  /**
   * <p>The <code>Role</code> parameter provides the type of <code>InvocationRole</code> used to authenticate the user account.</p>
   */
  InvocationRole?: string;
}

export type _UnmarshalledIdentityProviderDetails = _IdentityProviderDetails;
