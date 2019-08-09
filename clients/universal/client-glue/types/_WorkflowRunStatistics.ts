/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface _WorkflowRunStatistics {
  /**
   * <p>Total number of Actions in the workflow run.</p>
   */
  TotalActions?: number;

  /**
   * <p>Total number of Actions which timed out.</p>
   */
  TimeoutActions?: number;

  /**
   * <p>Total number of Actions which have failed.</p>
   */
  FailedActions?: number;

  /**
   * <p>Total number of Actions which have stopped.</p>
   */
  StoppedActions?: number;

  /**
   * <p>Total number of Actions which have succeeded.</p>
   */
  SucceededActions?: number;

  /**
   * <p>Total number Actions in running state.</p>
   */
  RunningActions?: number;
}

export type _UnmarshalledWorkflowRunStatistics = _WorkflowRunStatistics;
