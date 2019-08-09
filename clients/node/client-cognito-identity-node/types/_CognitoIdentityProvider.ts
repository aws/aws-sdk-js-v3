/**
 * <p>A provider representing an Amazon Cognito user pool and its client ID.</p>
 */
export interface _CognitoIdentityProvider {
  /**
   * <p>The provider name for an Amazon Cognito user pool. For example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
   */
  ProviderName?: string;

  /**
   * <p>The client ID for the Amazon Cognito user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>TRUE if server-side token validation is enabled for the identity provider’s token.</p> <p>Once you set <code>ServerSideTokenCheck</code> to TRUE for an identity pool, that identity pool will check with the integrated user pools to make sure that the user has not been globally signed out or deleted before the identity pool provides an OIDC token or AWS credentials for the user.</p> <p>If the user is signed out or deleted, the identity pool will return a 400 Not Authorized error.</p>
   */
  ServerSideTokenCheck?: boolean;
}

export type _UnmarshalledCognitoIdentityProvider = _CognitoIdentityProvider;
