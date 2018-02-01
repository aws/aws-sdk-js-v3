import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>Input to the <code>UnlinkDeveloperIdentity</code> action.</p>
 */
export interface UnlinkDeveloperIdentityInput {
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string;

    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string;

    /**
     * <p>The "domain" by which Cognito will refer to your users.</p>
     */
    DeveloperProviderName: string;

    /**
     * <p>A unique ID used by your backend authentication process to identify a user.</p>
     */
    DeveloperUserIdentifier: string;

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