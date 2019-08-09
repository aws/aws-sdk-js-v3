import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes the result of a cluster resize operation.</p>
 */
export interface CancelResizeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The node type that the cluster will have after the resize operation is complete.</p>
   */
  TargetNodeType?: string;

  /**
   * <p>The number of nodes that the cluster will have after the resize operation is complete.</p>
   */
  TargetNumberOfNodes?: number;

  /**
   * <p>The cluster type after the resize operation is complete.</p> <p>Valid Values: <code>multi-node</code> | <code>single-node</code> </p>
   */
  TargetClusterType?: string;

  /**
   * <p>The status of the resize operation.</p> <p>Valid Values: <code>NONE</code> | <code>IN_PROGRESS</code> | <code>FAILED</code> | <code>SUCCEEDED</code> | <code>CANCELLING</code> </p>
   */
  Status?: string;

  /**
   * <p>The names of tables that have been completely imported .</p> <p>Valid Values: List of table names.</p>
   */
  ImportTablesCompleted?: Array<string>;

  /**
   * <p>The names of tables that are being currently imported.</p> <p>Valid Values: List of table names.</p>
   */
  ImportTablesInProgress?: Array<string>;

  /**
   * <p>The names of tables that have not been yet imported.</p> <p>Valid Values: List of table names</p>
   */
  ImportTablesNotStarted?: Array<string>;

  /**
   * <p>The average rate of the resize operation over the last few minutes, measured in megabytes per second. After the resize operation completes, this value shows the average rate of the entire resize operation.</p>
   */
  AvgResizeRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimated total amount of data, in megabytes, on the cluster before the resize operation began.</p>
   */
  TotalResizeDataInMegaBytes?: number;

  /**
   * <p>While the resize operation is in progress, this value shows the current amount of data, in megabytes, that has been processed so far. When the resize operation is complete, this value shows the total amount of data, in megabytes, on the cluster, which may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data before resize).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The amount of seconds that have elapsed since the resize operation began. After the resize operation completes, this value shows the total actual time, in seconds, for the resize operation.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimated time remaining, in seconds, until the resize operation is complete. This value is calculated based on the average resize rate and the estimated amount of data remaining to be processed. Once the resize operation is complete, this value will be 0.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>An enum with possible values of <code>ClassicResize</code> and <code>ElasticResize</code>. These values describe the type of resize operation being performed. </p>
   */
  ResizeType?: string;

  /**
   * <p>An optional string to provide additional details about the resize action.</p>
   */
  Message?: string;

  /**
   * <p>The type of encryption for the cluster after the resize is complete.</p> <p>Possible values are <code>KMS</code> and <code>None</code>. In the China region possible values are: <code>Legacy</code> and <code>None</code>.</p>
   */
  TargetEncryptionType?: string;

  /**
   * <p>The percent of data transferred from source cluster to target cluster.</p>
   */
  DataTransferProgressPercent?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
