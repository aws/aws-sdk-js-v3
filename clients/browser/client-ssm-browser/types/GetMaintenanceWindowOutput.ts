import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowOutput shape
 */
export interface GetMaintenanceWindowOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the created maintenance window.</p>
   */
  WindowId?: string;

  /**
   * <p>The name of the maintenance window.</p>
   */
  Name?: string;

  /**
   * <p>The description of the maintenance window.</p>
   */
  Description?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window will not run before this specified time.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window will not run after this specified time.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule?: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.</p>
   */
  NextExecutionTime?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration?: number;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new tasks for execution.</p>
   */
  Cutoff?: number;

  /**
   * <p>Whether targets must be registered with the maintenance window before tasks can be defined for those targets.</p>
   */
  AllowUnassociatedTargets?: boolean;

  /**
   * <p>Indicates whether the maintenance window is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The date the maintenance window was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date the maintenance window was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
