import {_UnmarshalledTraceSummary} from './_TraceSummary';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetTraceSummariesOutput shape
 */
export interface GetTraceSummariesOutput {
    /**
     * _TraceSummaryList shape
     */
    TraceSummaries?: Array<_UnmarshalledTraceSummary>;

    /**
     * _Timestamp shape
     */
    ApproximateTime?: Date;

    /**
     * _NullableLong shape
     */
    TracesProcessedCount?: number;

    /**
     * _String shape
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
