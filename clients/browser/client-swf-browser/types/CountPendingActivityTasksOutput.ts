import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the count of tasks in a task list.</p>
 */
export interface CountPendingActivityTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of tasks in the task list.</p>
   */
  count: number;

  /**
   * <p>If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.</p>
   */
  truncated?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
