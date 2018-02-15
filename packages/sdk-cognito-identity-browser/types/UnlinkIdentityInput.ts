import {BrowserHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * <p>Input to the UnlinkIdentity action.</p>
 */
export interface UnlinkIdentityInput {
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId: string;

    /**
     * <p>A set of optional name-value pairs that map provider names to provider tokens.</p>
     */
    Logins: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>Provider names to unlink from this identity.</p>
     */
    LoginsToRemove: Array<string>|Iterable<string>;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}