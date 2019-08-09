import { _UnmarshalledMetricDatapoint } from "./_MetricDatapoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceMetricDataOutput shape
 */
export interface GetInstanceMetricDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metric name to return data for.</p>
   */
  metricName?:
    | "CPUUtilization"
    | "NetworkIn"
    | "NetworkOut"
    | "StatusCheckFailed"
    | "StatusCheckFailed_Instance"
    | "StatusCheckFailed_System"
    | string;

  /**
   * <p>An array of key-value pairs containing information about the results of your get instance metric data request.</p>
   */
  metricData?: Array<_UnmarshalledMetricDatapoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
