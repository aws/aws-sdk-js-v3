import {
  _ContainerSummary,
  _UnmarshalledContainerSummary
} from "./_ContainerSummary";
import {
  _ArrayPropertiesSummary,
  _UnmarshalledArrayPropertiesSummary
} from "./_ArrayPropertiesSummary";
import {
  _NodePropertiesSummary,
  _UnmarshalledNodePropertiesSummary
} from "./_NodePropertiesSummary";

/**
 * <p>An object representing summary details of a job.</p>
 */
export interface _JobSummary {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string;

  /**
   * <p>The name of the job.</p>
   */
  jobName: string;

  /**
   * <p>The Unix timestamp for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the <code>SUBMITTED</code> state (at the time <a>SubmitJob</a> was called). For array child jobs, this is when the child job was spawned by its parent and entered the <code>PENDING</code> state.</p>
   */
  createdAt?: number;

  /**
   * <p>The current status for the job.</p>
   */
  status?:
    | "SUBMITTED"
    | "PENDING"
    | "RUNNABLE"
    | "STARTING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | string;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix timestamp for when the job was started (when the job transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp for when the job was stopped (when the job transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>An object representing the details of the container that is associated with the job.</p>
   */
  container?: _ContainerSummary;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: _ArrayPropertiesSummary;

  /**
   * <p>The node properties for a single node in a job summary list.</p>
   */
  nodeProperties?: _NodePropertiesSummary;
}

export interface _UnmarshalledJobSummary extends _JobSummary {
  /**
   * <p>An object representing the details of the container that is associated with the job.</p>
   */
  container?: _UnmarshalledContainerSummary;

  /**
   * <p>The array properties of the job, if it is an array job.</p>
   */
  arrayProperties?: _UnmarshalledArrayPropertiesSummary;

  /**
   * <p>The node properties for a single node in a job summary list.</p>
   */
  nodeProperties?: _UnmarshalledNodePropertiesSummary;
}
