import {_UnmarshalledTrace} from './_Trace';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * BatchGetTracesOutput shape
 */
export interface BatchGetTracesOutput {
    /**
     * _TraceList shape
     */
    Traces?: Array<_UnmarshalledTrace>;

    /**
     * _UnprocessedTraceIdList shape
     */
    UnprocessedTraceIds?: Array<string>;

    /**
     * _String shape
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
