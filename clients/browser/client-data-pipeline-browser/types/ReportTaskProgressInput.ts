import { _Field } from "./_Field";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for ReportTaskProgress.</p>
 */
export interface ReportTaskProgressInput {
  /**
   * <p>The ID of the task assigned to the task runner. This value is provided in the response for <a>PollForTask</a>.</p>
   */
  taskId: string;

  /**
   * <p>Key-value pairs that define the properties of the ReportTaskProgressInput object.</p>
   */
  fields?: Array<_Field> | Iterable<_Field>;

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
