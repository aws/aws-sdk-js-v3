/**
 * <p> Structure for an execution step for an execution job, for an Amplify App. </p>
 */
export interface _Step {
  /**
   * <p> Name of the execution step. </p>
   */
  stepName: string;

  /**
   * <p> Start date/ time of the execution step. </p>
   */
  startTime: Date | string | number;

  /**
   * <p> Status of the execution step. </p>
   */
  status:
    | "PENDING"
    | "PROVISIONING"
    | "RUNNING"
    | "FAILED"
    | "SUCCEED"
    | "CANCELLING"
    | "CANCELLED"
    | string;

  /**
   * <p> End date/ time of the execution step. </p>
   */
  endTime: Date | string | number;

  /**
   * <p> URL to the logs for the execution step. </p>
   */
  logUrl?: string;

  /**
   * <p> URL to the artifact for the execution step. </p>
   */
  artifactsUrl?: string;

  /**
   * <p> List of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p> The reason for current step status. </p>
   */
  statusReason?: string;

  /**
   * <p> The context for current step, will include build image if step is build. </p>
   */
  context?: string;
}

export interface _UnmarshalledStep extends _Step {
  /**
   * <p> Start date/ time of the execution step. </p>
   */
  startTime: Date;

  /**
   * <p> End date/ time of the execution step. </p>
   */
  endTime: Date;

  /**
   * <p> List of screenshot URLs for the execution step, if relevant. </p>
   */
  screenshots?: { [key: string]: string };
}
