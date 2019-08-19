import { _JobSummary, _UnmarshalledJobSummary } from "./_JobSummary";
import { _Step, _UnmarshalledStep } from "./_Step";

/**
 * <p> Structure for an execution job for an Amplify App. </p>
 */
export interface _Job {
  /**
   * <p> Summary for an execution job for an Amplify App. </p>
   */
  summary: _JobSummary;

  /**
   * <p> Execution steps for an execution job, for an Amplify App. </p>
   */
  steps: Array<_Step> | Iterable<_Step>;
}

export interface _UnmarshalledJob extends _Job {
  /**
   * <p> Summary for an execution job for an Amplify App. </p>
   */
  summary: _UnmarshalledJobSummary;

  /**
   * <p> Execution steps for an execution job, for an Amplify App. </p>
   */
  steps: Array<_UnmarshalledStep>;
}
