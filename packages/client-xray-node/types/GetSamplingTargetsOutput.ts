import {_UnmarshalledSamplingTargetDocument} from './_SamplingTargetDocument';
import {_UnmarshalledUnprocessedStatistics} from './_UnprocessedStatistics';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetSamplingTargetsOutput shape
 */
export interface GetSamplingTargetsOutput {
    /**
     * _SamplingTargetDocumentList shape
     */
    SamplingTargetDocuments?: Array<_UnmarshalledSamplingTargetDocument>;

    /**
     * _Timestamp shape
     */
    LastRuleModification?: Date;

    /**
     * _UnprocessedStatisticsList shape
     */
    UnprocessedStatistics?: Array<_UnmarshalledUnprocessedStatistics>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
