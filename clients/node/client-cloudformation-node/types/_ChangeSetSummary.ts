/**
 * <p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.</p>
 */
export interface _ChangeSetSummary {
  /**
   * <p>The ID of the stack with which the change set is associated.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack with which the change set is associated.</p>
   */
  StackName?: string;

  /**
   * <p>The ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was already updated.</p>
   */
  ExecutionStatus?:
    | "UNAVAILABLE"
    | "AVAILABLE"
    | "EXECUTE_IN_PROGRESS"
    | "EXECUTE_COMPLETE"
    | "EXECUTE_FAILED"
    | "OBSOLETE"
    | string;

  /**
   * <p>The state of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?:
    | "CREATE_PENDING"
    | "CREATE_IN_PROGRESS"
    | "CREATE_COMPLETE"
    | "DELETE_COMPLETE"
    | "FAILED"
    | string;

  /**
   * <p>A description of the change set's status. For example, if your change set is in the <code>FAILED</code> state, AWS CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>Descriptive information about the change set.</p>
   */
  Description?: string;
}

export interface _UnmarshalledChangeSetSummary extends _ChangeSetSummary {
  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;
}
