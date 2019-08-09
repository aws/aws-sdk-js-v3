import { _UnmarshalledSnapshotSchedule } from "./_SnapshotSchedule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSnapshotSchedulesOutput shape
 */
export interface DescribeSnapshotSchedulesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of SnapshotSchedules.</p>
   */
  SnapshotSchedules?: Array<_UnmarshalledSnapshotSchedule>;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
