/**
 * <p>A job run that was used in the predicate of a conditional trigger that triggered this job run.</p>
 */
export interface _Predecessor {
  /**
   * <p>The name of the job definition used by the predecessor job run.</p>
   */
  JobName?: string;

  /**
   * <p>The job-run ID of the predecessor job run.</p>
   */
  RunId?: string;
}

export type _UnmarshalledPredecessor = _Predecessor;
