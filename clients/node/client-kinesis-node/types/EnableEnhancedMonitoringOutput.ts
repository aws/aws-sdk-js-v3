import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.</p>
 */
export interface EnableEnhancedMonitoringOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the Kinesis data stream.</p>
   */
  StreamName?: string;

  /**
   * <p>Represents the current state of the metrics that are in the enhanced state before the operation.</p>
   */
  CurrentShardLevelMetrics?: Array<
    | "IncomingBytes"
    | "IncomingRecords"
    | "OutgoingBytes"
    | "OutgoingRecords"
    | "WriteProvisionedThroughputExceeded"
    | "ReadProvisionedThroughputExceeded"
    | "IteratorAgeMilliseconds"
    | "ALL"
    | string
  >;

  /**
   * <p>Represents the list of all the metrics that would be in the enhanced state after the operation.</p>
   */
  DesiredShardLevelMetrics?: Array<
    | "IncomingBytes"
    | "IncomingRecords"
    | "OutgoingBytes"
    | "OutgoingRecords"
    | "WriteProvisionedThroughputExceeded"
    | "ReadProvisionedThroughputExceeded"
    | "IteratorAgeMilliseconds"
    | "ALL"
    | string
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
