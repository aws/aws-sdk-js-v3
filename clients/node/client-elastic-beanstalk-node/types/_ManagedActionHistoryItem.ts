/**
 * <p>The record of a completed or failed managed action.</p>
 */
export interface _ManagedActionHistoryItem {
  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>The type of the managed action.</p>
   */
  ActionType?: "InstanceRefresh" | "PlatformUpdate" | "Unknown" | string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>If the action failed, the type of failure.</p>
   */
  FailureType?:
    | "UpdateCancelled"
    | "CancellationFailed"
    | "RollbackFailed"
    | "RollbackSuccessful"
    | "InternalFailure"
    | "InvalidEnvironmentState"
    | "PermissionsError"
    | string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: "Completed" | "Failed" | "Unknown" | string;

  /**
   * <p>If the action failed, a description of the failure.</p>
   */
  FailureDescription?: string;

  /**
   * <p>The date and time that the action started executing.</p>
   */
  ExecutedTime?: Date | string | number;

  /**
   * <p>The date and time that the action finished executing.</p>
   */
  FinishedTime?: Date | string | number;
}

export interface _UnmarshalledManagedActionHistoryItem
  extends _ManagedActionHistoryItem {
  /**
   * <p>The date and time that the action started executing.</p>
   */
  ExecutedTime?: Date;

  /**
   * <p>The date and time that the action finished executing.</p>
   */
  FinishedTime?: Date;
}
