import { _UnmarshalledScheduleAction } from "./_ScheduleAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   */
  ScheduleActions?: Array<_UnmarshalledScheduleAction>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
