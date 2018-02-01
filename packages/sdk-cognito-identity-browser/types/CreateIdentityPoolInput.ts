import {_CognitoIdentityProvider} from './_CognitoIdentityProvider';
import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>Input to the CreateIdentityPool action.</p>
 */
export interface CreateIdentityPoolInput {
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
     * <p>The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (<code>.</code>), underscore (<code>_</code>), and dash (<code>-</code>).</p> <p>Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.</p>
     */
    DeveloperProviderName?: string;

    /**
     * <p>A list of OpendID Connect provider ARNs.</p>
     */
    OpenIdConnectProviderARNs?: Array<string>|Iterable<string>;

    /**
     * <p>An array of Amazon Cognito Identity user pools and their client IDs.</p>
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