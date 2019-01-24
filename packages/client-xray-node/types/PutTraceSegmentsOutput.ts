import {_UnmarshalledUnprocessedTraceSegment} from './_UnprocessedTraceSegment';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * PutTraceSegmentsOutput shape
 */
export interface PutTraceSegmentsOutput {
    /**
     * <p>Segments that failed processing.</p>
     */
    UnprocessedTraceSegments?: Array<_UnmarshalledUnprocessedTraceSegment>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
