import { _AttemptDetail, _UnmarshalledAttemptDetail } from "./_AttemptDetail";
import { _RetryStrategy, _UnmarshalledRetryStrategy } from "./_RetryStrategy";
import { _JobDependency, _UnmarshalledJobDependency } from "./_JobDependency";
import {
  _ContainerDetail,
  _UnmarshalledContainerDetail
} from "./_ContainerDetail";
import { _NodeDetails, _UnmarshalledNodeDetails } from "./_NodeDetails";
import {
  _NodeProperties,
  _UnmarshalledNodeProperties
} from "./_NodeProperties";
import {
  _ArrayPropertiesDetail,
  _UnmarshalledArrayPropertiesDetail
} from "./_ArrayPropertiesDetail";
import { _JobTimeout, _UnmarshalledJobTimeout } from "./_JobTimeout";

/**
 * <p>An object representing an AWS Batch job.</p>
 */
export interface _JobDetail {
  /**
   * <p>The name of the job.</p>
   */
  jobName: string;

  /**
   * <p>The ID for the job.</p>
   */
  jobId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the job queue with which the job is associated.</p>
   */
  jobQueue: string;

  /**
   * <p>The current status for the job. </p> <note> <p>If your jobs do not progress to <code>STARTING</code>, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable">Jobs Stuck in RUNNABLE Status</a> in the troubleshooting section of the <i>AWS Batch User Guide</i>.</p> </note>
   */
  status:
    | "SUBMITTED"
    | "PENDING"
    | "RUNNABLE"
    | "STARTING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | string;

  /**
   * <p>A list of job attempts associated with this job.</p>
   */
  attempts?: Array<_AttemptDetail> | Iterable<_AttemptDetail>;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job. </p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp (in seconds and milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>
   */
  createdAt?: number;

  /**
   * <p>The retry strategy to use for this job if an attempt fails.</p>
   */
  retryStrategy?: _RetryStrategy;

  /**
   * <p>The Unix timestamp (in seconds and milliseconds) for when the job was started (when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt: number;

  /**
   * <p>The Unix timestamp (in seconds and milliseconds) for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>A list of job names or IDs on which this job depends.</p>
   */
  dependsOn?: Array<_JobDependency> | Iterable<_JobDependency>;

  /**
   * <p>The job definition that is used by this job.</p>
   */
  jobDefinition: string;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition. </p>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>An object representing the details of the container that is associated with the job.</p>
   */
  container?: _ContainerDetail;

  /**
   * <p>An object representing the details of a node that is associated with a multi-node parallel job.</p>
   */
  nodeDetails?: _NodeDetails;

  /**
   * <p>An object representing the node properties of a multi-node parallel job.</p>
   */
  nodeProperties?: _NodeProperties;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: _ArrayPropertiesDetail;

  /**
   * <p>The timeout configuration for the job. </p>
   */
  timeout?: _JobTimeout;
}

export interface _UnmarshalledJobDetail extends _JobDetail {
  /**
   * <p>A list of job attempts associated with this job.</p>
   */
  attempts?: Array<_UnmarshalledAttemptDetail>;

  /**
   * <p>The retry strategy to use for this job if an attempt fails.</p>
   */
  retryStrategy?: _UnmarshalledRetryStrategy;

  /**
   * <p>A list of job names or IDs on which this job depends.</p>
   */
  dependsOn?: Array<_UnmarshalledJobDependency>;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition. </p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>An object representing the details of the container that is associated with the job.</p>
   */
  container?: _UnmarshalledContainerDetail;

  /**
   * <p>An object representing the details of a node that is associated with a multi-node parallel job.</p>
   */
  nodeDetails?: _UnmarshalledNodeDetails;

  /**
   * <p>An object representing the node properties of a multi-node parallel job.</p>
   */
  nodeProperties?: _UnmarshalledNodeProperties;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: _UnmarshalledArrayPropertiesDetail;

  /**
   * <p>The timeout configuration for the job. </p>
   */
  timeout?: _UnmarshalledJobTimeout;
}
