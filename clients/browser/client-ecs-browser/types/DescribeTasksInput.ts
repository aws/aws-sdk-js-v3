import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTasksInput shape
 */
export interface DescribeTasksInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the task or tasks to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the task or tasks you are describing were launched in any cluster other than the default cluster.</p>
   */
  cluster?: string;

  /**
   * <p>A list of up to 100 task IDs or full ARN entries.</p>
   */
  tasks: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether you want to see the resource tags for the task. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.</p>
   */
  include?: Array<"TAGS" | string> | Iterable<"TAGS" | string>;

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
