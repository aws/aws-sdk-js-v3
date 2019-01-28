import {_UnmarshalledSegmentResponse} from './_SegmentResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetSegmentVersionOutput shape
 */
export interface GetSegmentVersionOutput {
    /**
     * Segment definition.
     */
    SegmentResponse: _UnmarshalledSegmentResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
