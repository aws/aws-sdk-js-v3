import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBundleTasksInput shape
 */
export interface DescribeBundleTasksInput {
  /**
   * <p>The bundle task IDs.</p> <p>Default: Describes all your bundle tasks.</p>
   */
  BundleIds?: Array<string> | Iterable<string>;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>bundle-id</code> - The ID of the bundle task.</p> </li> <li> <p> <code>error-code</code> - If the task failed, the error code returned.</p> </li> <li> <p> <code>error-message</code> - If the task failed, the error message returned.</p> </li> <li> <p> <code>instance-id</code> - The ID of the instance.</p> </li> <li> <p> <code>progress</code> - The level of task completion, as a percentage (for example, 20%).</p> </li> <li> <p> <code>s3-bucket</code> - The Amazon S3 bucket to store the AMI.</p> </li> <li> <p> <code>s3-prefix</code> - The beginning of the AMI name.</p> </li> <li> <p> <code>start-time</code> - The time the task started (for example, 2013-09-15T17:15:20.000Z).</p> </li> <li> <p> <code>state</code> - The state of the task (<code>pending</code> | <code>waiting-for-shutdown</code> | <code>bundling</code> | <code>storing</code> | <code>cancelling</code> | <code>complete</code> | <code>failed</code>).</p> </li> <li> <p> <code>update-time</code> - The time of the most recent update for the task.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
