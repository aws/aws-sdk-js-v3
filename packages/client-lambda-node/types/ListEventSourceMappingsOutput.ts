import {_UnmarshalledEventSourceMappingConfiguration} from './_EventSourceMappingConfiguration';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Contains a list of event sources (see <a>EventSourceMappingConfiguration</a>)</p>
 */
export interface ListEventSourceMappingsOutput {
    /**
     * <p>A string, present if there are more event source mappings.</p>
     */
    NextMarker?: string;

    /**
     * <p>An array of <code>EventSourceMappingConfiguration</code> objects.</p>
     */
    EventSourceMappings?: Array<_UnmarshalledEventSourceMappingConfiguration>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
