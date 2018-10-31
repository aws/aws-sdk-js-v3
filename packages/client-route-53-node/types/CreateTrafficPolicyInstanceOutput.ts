import {_UnmarshalledTrafficPolicyInstance} from './_TrafficPolicyInstance';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.</p>
 */
export interface CreateTrafficPolicyInstanceOutput {
    /**
     * <p>A complex type that contains settings for the new traffic policy instance.</p>
     */
    TrafficPolicyInstance: _UnmarshalledTrafficPolicyInstance;

    /**
     * <p>A unique URL that represents a new traffic policy instance.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
