import {
  _JobExecutionSummary,
  _UnmarshalledJobExecutionSummary
} from "./_JobExecutionSummary";

/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface _JobExecutionSummaryForJob {
  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: _JobExecutionSummary;
}

export interface _UnmarshalledJobExecutionSummaryForJob
  extends _JobExecutionSummaryForJob {
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: _UnmarshalledJobExecutionSummary;
}
