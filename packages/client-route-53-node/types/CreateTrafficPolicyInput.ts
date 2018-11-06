import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the traffic policy that you want to create.</p>
 */
export interface CreateTrafficPolicyInput {
    /**
     * <p>The name of the traffic policy.</p>
     */
    Name: string;

    /**
     * <p>The definition of this traffic policy in JSON format. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.</p>
     */
    Document: string;

    /**
     * <p>(Optional) Any comments that you want to include about the traffic policy.</p>
     */
    Comment?: string;

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