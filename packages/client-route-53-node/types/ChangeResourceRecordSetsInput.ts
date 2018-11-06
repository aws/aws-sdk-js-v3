import {_ChangeBatch} from './_ChangeBatch';
import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains change information for the resource record set.</p>
 */
export interface ChangeResourceRecordSetsInput {
    /**
     * <p>The ID of the hosted zone that contains the resource record sets that you want to change.</p>
     */
    HostedZoneId: string;

    /**
     * <p>A complex type that contains an optional comment and the <code>Changes</code> element.</p>
     */
    ChangeBatch: _ChangeBatch;

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