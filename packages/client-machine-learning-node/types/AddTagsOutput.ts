import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Amazon ML returns the following elements. </p>
 */
export interface AddTagsOutput {
    /**
     * <p>The ID of the ML object that was tagged.</p>
     */
    ResourceId?: string;

    /**
     * <p>The type of the ML object that was tagged.</p>
     */
    ResourceType?: 'BatchPrediction'|'DataSource'|'Evaluation'|'MLModel'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
