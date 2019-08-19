import { _UnmarshalledTaskListEntry } from "./_TaskListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListTasksResponse</p>
 */
export interface ListTasksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of all the tasks that are returned.</p>
   */
  Tasks?: Array<_UnmarshalledTaskListEntry>;

  /**
   * <p>An opaque string that indicates the position at which to begin returning the next list of tasks.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
