import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportTasksInput shape
 */
export interface DescribeExportTasksInput {
  /**
   * <p>The ID of the export task. Specifying a task ID filters the results to zero or one export tasks.</p>
   */
  taskId?: string;

  /**
   * <p>The status code of the export task. Specifying a status code filters the results to zero or more export tasks.</p>
   */
  statusCode?:
    | "CANCELLED"
    | "COMPLETED"
    | "FAILED"
    | "PENDING"
    | "PENDING_CANCEL"
    | "RUNNING"
    | string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
