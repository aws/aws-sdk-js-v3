import {
  _ComputeResource,
  _UnmarshalledComputeResource
} from "./_ComputeResource";

/**
 * <p>An object representing an AWS Batch compute environment.</p>
 */
export interface _ComputeEnvironmentDetail {
  /**
   * <p>The name of the compute environment. </p>
   */
  computeEnvironmentName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the compute environment. </p>
   */
  computeEnvironmentArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment. </p>
   */
  ecsClusterArn: string;

  /**
   * <p>The type of the compute environment.</p>
   */
  type?: "MANAGED" | "UNMANAGED" | string;

  /**
   * <p>The state of the compute environment. The valid values are <code>ENABLED</code> or <code>DISABLED</code>. </p> <p>If the state is <code>ENABLED</code>, then the AWS Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the AWS Batch scheduler does not attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state do not scale out. However, they scale in to <code>minvCpus</code> value after instances become idle.</p>
   */
  state?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The current status of the compute environment (for example, <code>CREATING</code> or <code>VALID</code>).</p>
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
   * <p>A short, human-readable string to provide additional details about the current status of the compute environment.</p>
   */
  statusReason?: string;

  /**
   * <p>The compute resources defined for the compute environment. </p>
   */
  computeResources?: _ComputeResource;

  /**
   * <p>The service role associated with the compute environment that allows AWS Batch to make calls to AWS API operations on your behalf.</p>
   */
  serviceRole?: string;
}

export interface _UnmarshalledComputeEnvironmentDetail
  extends _ComputeEnvironmentDetail {
  /**
   * <p>The compute resources defined for the compute environment. </p>
   */
  computeResources?: _UnmarshalledComputeResource;
}
