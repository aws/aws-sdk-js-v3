import { _Options } from "./_Options";
import { _FilterRule } from "./_FilterRule";
import { _TagListEntry } from "./_TagListEntry";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateTaskRequest</p>
 */
export interface CreateTaskInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the source location for the task.</p>
   */
  SourceLocationArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS storage resource's location. </p>
   */
  DestinationLocationArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor and log events in the task. </p> <p>For more information on these groups, see Working with Log Groups and Log Streams in the <i>Amazon CloudWatch User Guide.</i> </p> <p>For more information about how to use CloudWatch Logs with DataSync, see Monitoring Your Task in the <i>AWS DataSync User Guide.</i> </p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The name of a task. This value is a text reference that is used to identify the task in the console. </p>
   */
  Name?: string;

  /**
   * <p>The set of configuration options that control the behavior of a single execution of the task that occurs when you call <code>StartTaskExecution</code>. You can configure these options to preserve metadata such as user ID (UID) and group ID (GID), file permissions, data integrity verification, and so on.</p> <p>For each individual task execution, you can override these options by specifying the <code>OverrideOptions</code> before starting a the task execution. For more information, see the operation. </p>
   */
  Options?: _Options;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example, <code>"/folder1|/folder2"</code> </p> <p> </p>
   */
  Excludes?: Array<_FilterRule> | Iterable<_FilterRule>;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the resource. The value can be an empty string. </p>
   */
  Tags?: Array<_TagListEntry> | Iterable<_TagListEntry>;

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
