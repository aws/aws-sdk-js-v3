import {_UnmarshalledTrafficPolicy} from './_TrafficPolicy';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.</p>
 */
export interface CreateTrafficPolicyVersionOutput {
    /**
     * <p>A complex type that contains settings for the new version of the traffic policy.</p>
     */
    TrafficPolicy: _UnmarshalledTrafficPolicy;

    /**
     * <p>A unique URL that represents a new traffic policy version.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
