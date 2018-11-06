import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
 */
export interface UpdateMLModelOutput {
    /**
     * <p>The ID assigned to the <code>MLModel</code> during creation. This value should be identical to the value of the <code>MLModelID</code> in the request.</p>
     */
    MLModelId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
