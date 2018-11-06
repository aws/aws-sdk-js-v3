import {_S3DataSpec} from './_S3DataSpec';
import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * CreateDataSourceFromS3Input shape
 */
export interface CreateDataSourceFromS3Input {
    /**
     * <p>A user-supplied identifier that uniquely identifies the <code>DataSource</code>. </p>
     */
    DataSourceId: string;

    /**
     * <p>A user-supplied name or description of the <code>DataSource</code>. </p>
     */
    DataSourceName?: string;

    /**
     * <p>The data specification of a <code>DataSource</code>:</p> <ul> <li><p>DataLocationS3 - The Amazon S3 location of the observation data.</p></li> <li><p>DataSchemaLocationS3 - The Amazon S3 location of the <code>DataSchema</code>.</p></li> <li><p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p></li> <li> <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p> <p> Sample - <code> "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"</code> </p> </li> </ul>
     */
    DataSpec: _S3DataSpec;

    /**
     * <p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training. This parameter must be set to <code>true</code> if the <code></code>DataSource<code></code> needs to be used for <code>MLModel</code> training.</p>
     */
    ComputeStatistics?: boolean;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}