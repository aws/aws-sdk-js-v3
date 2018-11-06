import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.</p>
 */
export interface UpdateTrafficPolicyInstanceInput {
    /**
     * <p>The ID of the traffic policy instance that you want to update.</p>
     */
    Id: string;

    /**
     * <p>The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.</p>
     */
    TTL: number;

    /**
     * <p>The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.</p>
     */
    TrafficPolicyId: string;

    /**
     * <p>The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.</p>
     */
    TrafficPolicyVersion: number;

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