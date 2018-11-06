import {_VPC} from './_VPC';
import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts.</p>
 */
export interface CreateVPCAssociationAuthorizationInput {
    /**
     * <p>The ID of the private hosted zone that you want to authorize associating a VPC with.</p>
     */
    HostedZoneId: string;

    /**
     * <p>A complex type that contains the VPC ID and region for the VPC that you want to authorize associating with your hosted zone.</p>
     */
    VPC: _VPC;

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