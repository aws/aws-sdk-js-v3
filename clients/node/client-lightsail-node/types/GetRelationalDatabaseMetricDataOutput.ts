import { _UnmarshalledMetricDatapoint } from "./_MetricDatapoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseMetricDataOutput shape
 */
export interface GetRelationalDatabaseMetricDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the metric.</p>
   */
  metricName?:
    | "CPUUtilization"
    | "DatabaseConnections"
    | "DiskQueueDepth"
    | "FreeStorageSpace"
    | "NetworkReceiveThroughput"
    | "NetworkTransmitThroughput"
    | string;

  /**
   * <p>An object describing the result of your get relational database metric data request.</p>
   */
  metricData?: Array<_UnmarshalledMetricDatapoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
