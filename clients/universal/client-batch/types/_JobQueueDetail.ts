import {
  _ComputeEnvironmentOrder,
  _UnmarshalledComputeEnvironmentOrder
} from "./_ComputeEnvironmentOrder";

/**
 * <p>An object representing the details of an AWS Batch job queue.</p>
 */
export interface _JobQueueDetail {
  /**
   * <p>The name of the job queue.</p>
   */
  jobQueueName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue.</p>
   */
  jobQueueArn: string;

  /**
   * <p>Describes the ability of the queue to accept new jobs.</p>
   */
  state: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The status of the job queue (for example, <code>CREATING</code> or <code>VALID</code>).</p>
   */
  status?:
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | "DELETED"
    | "VALID"
    | "INVALID"
    | string;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job queue.</p>
   */
  statusReason?: string;

  /**
   * <p>The priority of the job queue. </p>
   */
  priority: number;

  /**
   * <p>The compute environments that are attached to the job queue and the order in which job placement is preferred. Compute environments are selected for job placement in ascending order.</p>
   */
  computeEnvironmentOrder:
    | Array<_ComputeEnvironmentOrder>
    | Iterable<_ComputeEnvironmentOrder>;
}

export interface _UnmarshalledJobQueueDetail extends _JobQueueDetail {
  /**
   * <p>The compute environments that are attached to the job queue and the order in which job placement is preferred. Compute environments are selected for job placement in ascending order.</p>
   */
  computeEnvironmentOrder: Array<_UnmarshalledComputeEnvironmentOrder>;
}
