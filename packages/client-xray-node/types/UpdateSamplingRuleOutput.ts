import {_UnmarshalledSamplingRuleRecord} from './_SamplingRuleRecord';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * UpdateSamplingRuleOutput shape
 */
export interface UpdateSamplingRuleOutput {
    /**
     * <p>The updated rule definition and metadata.</p>
     */
    SamplingRuleRecord?: _UnmarshalledSamplingRuleRecord;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
