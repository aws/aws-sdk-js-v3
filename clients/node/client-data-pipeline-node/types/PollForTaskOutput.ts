import { _UnmarshalledTaskObject } from "./_TaskObject";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of PollForTask.</p>
 */
export interface PollForTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The information needed to complete the task that is being assigned to the task runner. One of the fields returned in this object is <code>taskId</code>, which contains an identifier for the task being assigned. The calling task runner uses <code>taskId</code> in subsequent calls to <a>ReportTaskProgress</a> and <a>SetTaskStatus</a>.</p>
   */
  taskObject?: _UnmarshalledTaskObject;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
