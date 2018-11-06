/**
 * <p>A provider representing an Amazon Cognito Identity User Pool and its client ID.</p>
 */
export interface _CognitoIdentityProvider {
    /**
     * <p>The provider name for an Amazon Cognito Identity User Pool. For example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.</p>
     */
    ProviderName?: string;

    /**
     * <p>The client ID for the Amazon Cognito Identity User Pool.</p>
     */
    ClientId?: string;

    /**
     * <p>TRUE if server-side token validation is enabled for the identity provider’s token.</p>
     */
    ServerSideTokenCheck?: boolean;
}

export type _UnmarshalledCognitoIdentityProvider = _CognitoIdentityProvider;