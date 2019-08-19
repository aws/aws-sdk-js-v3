import { _UnmarshalledMetricAlarm } from "./_MetricAlarm";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlarmsForMetricOutput shape
 */
export interface DescribeAlarmsForMetricOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The information for each alarm with the specified metric.</p>
   */
  MetricAlarms?: Array<_UnmarshalledMetricAlarm>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
