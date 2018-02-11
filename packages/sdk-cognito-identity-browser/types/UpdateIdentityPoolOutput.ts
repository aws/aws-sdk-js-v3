import {_UnmarshalledCognitoIdentityProvider} from './_CognitoIdentityProvider';
import * as __aws_types from '@aws/types';

/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface UpdateIdentityPoolOutput {
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string;

    /**
     * <p>A string that you provide.</p>
     */
    IdentityPoolName: string;

    /**
     * <p>TRUE if the identity pool supports unauthenticated logins.</p>
     */
    AllowUnauthenticatedIdentities: boolean;

    /**
     * <p>Optional key:value pairs mapping provider names to provider app IDs.</p>
     */
    SupportedLoginProviders?: {[key: string]: string};

    /**
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName?: string;

    /**
     * <p>A list of OpendID Connect provider ARNs.</p>
     */
    OpenIdConnectProviderARNs?: Array<string>;

    /**
     * <p>A list representing an Amazon Cognito Identity User Pool and its client ID.</p>
     */
    CognitoIdentityProviders?: Array<_UnmarshalledCognitoIdentityProvider>;

    /**
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.</p>
     */
    SamlProviderARNs?: Array<string>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
