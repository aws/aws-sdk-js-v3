import { _UnmarshalledMetricAlarm } from "./_MetricAlarm";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlarmsOutput shape
 */
export interface DescribeAlarmsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The information for the specified alarms.</p>
   */
  MetricAlarms?: Array<_UnmarshalledMetricAlarm>;

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
