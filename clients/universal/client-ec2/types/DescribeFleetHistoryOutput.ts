import { _UnmarshalledHistoryRecordEntry } from "./_HistoryRecordEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetHistoryOutput shape
 */
export interface DescribeFleetHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the events in the history of the EC2 Fleet.</p>
   */
  HistoryRecords?: Array<_UnmarshalledHistoryRecordEntry>;

  /**
   * <p>The last date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). All records up to this time were retrieved.</p> <p>If <code>nextToken</code> indicates that there are more results, this value is not present.</p>
   */
  LastEvaluatedTime?: Date;

  /**
   * <p>The token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the EC Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The start date and time for the events, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  StartTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
