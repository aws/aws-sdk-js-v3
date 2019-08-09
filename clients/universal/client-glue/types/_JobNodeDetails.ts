import { _JobRun, _UnmarshalledJobRun } from "./_JobRun";

/**
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface _JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: Array<_JobRun> | Iterable<_JobRun>;
}

export interface _UnmarshalledJobNodeDetails extends _JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: Array<_UnmarshalledJobRun>;
}
