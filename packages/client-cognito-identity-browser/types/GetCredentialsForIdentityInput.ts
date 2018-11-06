import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Input to the <code>GetCredentialsForIdentity</code> action.</p>
 */
export interface GetCredentialsForIdentityInput {
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string;

    /**
     * <p>A set of optional name-value pairs that map provider names to provider tokens.</p>
     */
    Logins?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.</p>
     */
    CustomRoleArn?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}