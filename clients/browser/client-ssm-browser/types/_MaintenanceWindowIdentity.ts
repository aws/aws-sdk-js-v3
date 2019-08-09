/**
 * <p>Information about the maintenance window.</p>
 */
export interface _MaintenanceWindowIdentity {
  /**
   * <p>The ID of the maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>A description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.</p>
   */
  EndDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.</p>
   */
  StartDate?: string;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;
}

export type _UnmarshalledMaintenanceWindowIdentity = _MaintenanceWindowIdentity;
