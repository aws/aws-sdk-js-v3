/**
 * <p>The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.</p>
 */
export interface _ExecutionDetails {
  /**
   * <p>The summary of the current status of the actions.</p>
   */
  summary?: string;

  /**
   * <p>The system-generated unique ID of this action used to identify this job worker in any external systems, such as AWS CodeDeploy.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The percentage of work completed on the action, represented on a scale of zero to one hundred percent.</p>
   */
  percentComplete?: number;
}

export type _UnmarshalledExecutionDetails = _ExecutionDetails;
