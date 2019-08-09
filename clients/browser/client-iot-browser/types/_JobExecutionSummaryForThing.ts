import {
  _JobExecutionSummary,
  _UnmarshalledJobExecutionSummary
} from "./_JobExecutionSummary";

/**
 * <p>The job execution summary for a thing.</p>
 */
export interface _JobExecutionSummaryForThing {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: _JobExecutionSummary;
}

export interface _UnmarshalledJobExecutionSummaryForThing
  extends _JobExecutionSummaryForThing {
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: _UnmarshalledJobExecutionSummary;
}
