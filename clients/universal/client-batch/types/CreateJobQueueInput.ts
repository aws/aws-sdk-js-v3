import { _ComputeEnvironmentOrder } from "./_ComputeEnvironmentOrder";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobQueueInput shape
 */
export interface CreateJobQueueInput {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName: string;

  /**
   * <p>The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs.</p>
   */
  state?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.</p>
   */
  priority: number;

  /**
   * <p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment should execute a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.</p>
   */
  computeEnvironmentOrder:
    | Array<_ComputeEnvironmentOrder>
    | Iterable<_ComputeEnvironmentOrder>;

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
