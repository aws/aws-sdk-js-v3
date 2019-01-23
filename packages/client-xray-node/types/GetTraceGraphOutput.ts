import {_UnmarshalledService} from './_Service';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetTraceGraphOutput shape
 */
export interface GetTraceGraphOutput {
    /**
     * <p>The services that have processed one of the specified requests.</p>
     */
    Services?: Array<_UnmarshalledService>;

    /**
     * <p>Pagination token. Not used.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
