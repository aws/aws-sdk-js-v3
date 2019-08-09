import { _Options } from "./_Options";
import { _FilterRule } from "./_FilterRule";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>UpdateTaskResponse</p>
 */
export interface UpdateTaskInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the task to update.</p>
   */
  TaskArn: string;

  /**
   * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p>
   */
  Options?: _Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code> </p> <p> </p>
   */
  Excludes?: Array<_FilterRule> | Iterable<_FilterRule>;

  /**
   * <p>The name of the task to update.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource name of the CloudWatch LogGroup.</p>
   */
  CloudWatchLogGroupArn?: string;

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
