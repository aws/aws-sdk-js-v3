import { _UnmarshalledAlarmHistoryItem } from "./_AlarmHistoryItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlarmHistoryOutput shape
 */
export interface DescribeAlarmHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The alarm histories, in JSON format.</p>
   */
  AlarmHistoryItems?: Array<_UnmarshalledAlarmHistoryItem>;

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
