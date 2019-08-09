import { _ComputeEnvironmentOrder } from "./_ComputeEnvironmentOrder";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobQueueInput shape
 */
export interface UpdateJobQueueInput {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueue: string;

  /**
   * <p>Describes the queue's ability to accept new jobs.</p>
   */
  state?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.</p>
   */
  priority?: number;

  /**
   * <p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment should execute a given job. </p>
   */
  computeEnvironmentOrder?:
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
