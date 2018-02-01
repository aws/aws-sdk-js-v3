import {_CognitoIdentityProvider} from './_CognitoIdentityProvider';
import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>An object representing an Amazon Cognito identity pool.</p>
 */
export interface UpdateIdentityPoolInput {
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
    SupportedLoginProviders?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName?: string;

    /**
     * <p>A list of OpendID Connect provider ARNs.</p>
     */
    OpenIdConnectProviderARNs?: Array<string>|Iterable<string>;

    /**
     * <p>A list representing an Amazon Cognito Identity User Pool and its client ID.</p>
     */
    CognitoIdentityProviders?: Array<_CognitoIdentityProvider>|Iterable<_CognitoIdentityProvider>;

    /**
     * <p>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.</p>
     */
    SamlProviderARNs?: Array<string>|Iterable<string>;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}