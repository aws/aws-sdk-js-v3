/**
 * <p>Describes the status of the cluster (job flow).</p>
 */
export interface _JobFlowExecutionStatusDetail {
  /**
   * <p>The state of the job flow.</p>
   */
  State:
    | "STARTING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "WAITING"
    | "SHUTTING_DOWN"
    | "TERMINATED"
    | "COMPLETED"
    | "FAILED"
    | string;

  /**
   * <p>The creation date and time of the job flow.</p>
   */
  CreationDateTime: Date | string | number;

  /**
   * <p>The start date and time of the job flow.</p>
   */
  StartDateTime?: Date | string | number;

  /**
   * <p>The date and time when the job flow was ready to start running bootstrap actions.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The completion date and time of the job flow.</p>
   */
  EndDateTime?: Date | string | number;

  /**
   * <p>Description of the job flow last changed state.</p>
   */
  LastStateChangeReason?: string;
}

export interface _UnmarshalledJobFlowExecutionStatusDetail
  extends _JobFlowExecutionStatusDetail {
  /**
   * <p>The creation date and time of the job flow.</p>
   */
  CreationDateTime: Date;

  /**
   * <p>The start date and time of the job flow.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time when the job flow was ready to start running bootstrap actions.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The completion date and time of the job flow.</p>
   */
  EndDateTime?: Date;
}
