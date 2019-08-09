import { _CommandPlugin, _UnmarshalledCommandPlugin } from "./_CommandPlugin";
import {
  _NotificationConfig,
  _UnmarshalledNotificationConfig
} from "./_NotificationConfig";
import {
  _CloudWatchOutputConfig,
  _UnmarshalledCloudWatchOutputConfig
} from "./_CloudWatchOutputConfig";

/**
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran. </p>
 */
export interface _CommandInvocation {
  /**
   * <p>The command against which this invocation was requested.</p>
   */
  CommandId?: string;

  /**
   * <p>The instance ID in which this invocation was requested.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the invocation target. For Amazon EC2 instances this is the value for the aws:Name tag. For on-premises instances, this is the name of the instance.</p>
   */
  InstanceName?: string;

  /**
   * <p>User-specified information about the command, such as a brief description of what the command should do.</p>
   */
  Comment?: string;

  /**
   * <p>The document name that was requested for execution.</p>
   */
  DocumentName?: string;

  /**
   * <p>The SSM document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The time and date the request was sent to this instance.</p>
   */
  RequestedDateTime?: Date | string | number;

  /**
   * <p>Whether or not the invocation succeeded, failed, or is pending.</p>
   */
  Status?:
    | "Pending"
    | "InProgress"
    | "Delayed"
    | "Success"
    | "Cancelled"
    | "TimedOut"
    | "Failed"
    | "Cancelling"
    | string;

  /**
   * <p>A detailed status of the command execution for each invocation (each instance targeted by the command). StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following values:</p> <ul> <li> <p>Pending: The command has not been sent to the instance.</p> </li> <li> <p>In Progress: The command has been sent to the instance but has not reached a terminal state.</p> </li> <li> <p>Success: The execution of the command or plugin was successfully completed. This is a terminal state.</p> </li> <li> <p>Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Execution Timed Out: Command execution started on the instance, but the execution was not complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Failed: The command was not successful on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Canceled: The command was terminated before it was completed. This is a terminal state.</p> </li> <li> <p>Undeliverable: The command can't be delivered to the instance. The instance might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.</p> </li> </ul>
   */
  StatusDetails?: string;

  /**
   * <p> Gets the trace output sent by the agent. </p>
   */
  TraceOutput?: string;

  /**
   * <p>The URL to the plugin's StdOut file in Amazon S3, if the Amazon S3 bucket was defined for the parent command. For an invocation, StandardOutputUrl is populated if there is just one plugin defined for the command, and the Amazon S3 bucket was defined for the command.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The URL to the plugin's StdErr file in Amazon S3, if the Amazon S3 bucket was defined for the parent command. For an invocation, StandardErrorUrl is populated if there is just one plugin defined for the command, and the Amazon S3 bucket was defined for the command.</p>
   */
  StandardErrorUrl?: string;

  /**
   * _CommandPluginList shape
   */
  CommandPlugins?: Array<_CommandPlugin> | Iterable<_CommandPlugin>;

  /**
   * <p>The IAM service role that Run Command uses to act on your behalf when sending notifications about command status changes on a per instance basis.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Configurations for sending notifications about command status changes on a per instance basis.</p>
   */
  NotificationConfig?: _NotificationConfig;

  /**
   * <p>CloudWatch Logs information where you want Systems Manager to send the command output.</p>
   */
  CloudWatchOutputConfig?: _CloudWatchOutputConfig;
}

export interface _UnmarshalledCommandInvocation extends _CommandInvocation {
  /**
   * <p>The time and date the request was sent to this instance.</p>
   */
  RequestedDateTime?: Date;

  /**
   * _CommandPluginList shape
   */
  CommandPlugins?: Array<_UnmarshalledCommandPlugin>;

  /**
   * <p>Configurations for sending notifications about command status changes on a per instance basis.</p>
   */
  NotificationConfig?: _UnmarshalledNotificationConfig;

  /**
   * <p>CloudWatch Logs information where you want Systems Manager to send the command output.</p>
   */
  CloudWatchOutputConfig?: _UnmarshalledCloudWatchOutputConfig;
}
