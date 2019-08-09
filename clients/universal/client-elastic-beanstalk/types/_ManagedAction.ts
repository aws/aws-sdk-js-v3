/**
 * <p>The record of an upcoming or in-progress managed action.</p>
 */
export interface _ManagedAction {
  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>The type of managed action.</p>
   */
  ActionType?: "InstanceRefresh" | "PlatformUpdate" | "Unknown" | string;

  /**
   * <p>The status of the managed action. If the action is <code>Scheduled</code>, you can apply it immediately with <a>ApplyEnvironmentManagedAction</a>.</p>
   */
  Status?: "Scheduled" | "Pending" | "Running" | "Unknown" | string;

  /**
   * <p>The start time of the maintenance window in which the managed action will execute.</p>
   */
  WindowStartTime?: Date | string | number;
}

export interface _UnmarshalledManagedAction extends _ManagedAction {
  /**
   * <p>The start time of the maintenance window in which the managed action will execute.</p>
   */
  WindowStartTime?: Date;
}
