import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateMaintenanceWindowInput shape
 */
export interface CreateMaintenanceWindowInput {
  /**
   * <p>The name of the maintenance window.</p>
   */
  Name: string;

  /**
   * <p>An optional description for the maintenance window. We recommend specifying a description to help you organize your maintenance windows. </p>
   */
  Description?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. StartDate allows you to delay activation of the maintenance window until the specified future date.</p>
   */
  StartDate?: string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. EndDate allows you to set a date and time in the future when the maintenance window will no longer run.</p>
   */
  EndDate?: string;

  /**
   * <p>The schedule of the maintenance window in the form of a cron or rate expression.</p>
   */
  Schedule: string;

  /**
   * <p>The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the <a href="https://www.iana.org/time-zones">Time Zone Database</a> on the IANA website.</p>
   */
  ScheduleTimezone?: string;

  /**
   * <p>The duration of the maintenance window in hours.</p>
   */
  Duration: number;

  /**
   * <p>The number of hours before the end of the maintenance window that Systems Manager stops scheduling new tasks for execution.</p>
   */
  Cutoff: number;

  /**
   * <p>Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.</p> <p>If you don't enable this option, then you must specify previously-registered targets when you register a task with the maintenance window.</p>
   */
  AllowUnassociatedTargets: boolean;

  /**
   * <p>User-provided idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in. In this case, you could specify the following key name/value pairs:</p> <ul> <li> <p> <code>Key=TaskType,Value=AgentUpdate</code> </p> </li> <li> <p> <code>Key=OS,Value=Windows</code> </p> </li> <li> <p> <code>Key=Environment,Value=Production</code> </p> </li> </ul> <note> <p>To add tags to an existing maintenance window, use the <a>AddTagsToResource</a> action.</p> </note>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
