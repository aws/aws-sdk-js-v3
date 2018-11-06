import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
 */
export interface CreateDataSourceFromRedshiftOutput {
    /**
     * <p>A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the <code>DataSourceID</code> in the request. </p>
     */
    DataSourceId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
