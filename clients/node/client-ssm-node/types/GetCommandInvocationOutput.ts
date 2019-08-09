import { _UnmarshalledCloudWatchOutputConfig } from "./_CloudWatchOutputConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCommandInvocationOutput shape
 */
export interface GetCommandInvocationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The parent command ID of the invocation plugin.</p>
   */
  CommandId?: string;

  /**
   * <p>The ID of the managed instance targeted by the command. A managed instance can be an Amazon EC2 instance or an instance in your hybrid environment that is configured for Systems Manager.</p>
   */
  InstanceId?: string;

  /**
   * <p>The comment text for the command.</p>
   */
  Comment?: string;

  /**
   * <p>The name of the document that was run. For example, AWS-RunShellScript.</p>
   */
  DocumentName?: string;

  /**
   * <p>The SSM document version used in the request.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The name of the plugin for which you want detailed results. For example, aws:RunShellScript is a plugin.</p>
   */
  PluginName?: string;

  /**
   * <p>The error level response code for the plugin script. If the response code is -1, then the command has not started running on the instance, or it was not received by the instance.</p>
   */
  ResponseCode?: number;

  /**
   * <p>The date and time the plugin started running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI command uses the <code>InvokedBefore</code> filter.</p> <p> <code>aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z</code> </p> <p>If the plugin has not started to run, the string is empty.</p>
   */
  ExecutionStartDateTime?: string;

  /**
   * <p>Duration since ExecutionStartDateTime.</p>
   */
  ExecutionElapsedTime?: string;

  /**
   * <p>The date and time the plugin was finished running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI command uses the <code>InvokedAfter</code> filter.</p> <p> <code>aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z</code> </p> <p>If the plugin has not started to run, the string is empty.</p>
   */
  ExecutionEndDateTime?: string;

  /**
   * <p>The status of this invocation plugin. This status can be different than StatusDetails.</p>
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
   * <p>A detailed status of the command execution for an invocation. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following values:</p> <ul> <li> <p>Pending: The command has not been sent to the instance.</p> </li> <li> <p>In Progress: The command has been sent to the instance but has not reached a terminal state.</p> </li> <li> <p>Delayed: The system attempted to send the command to the target, but the target was not available. The instance might not be available because of network issues, the instance was stopped, etc. The system will try to deliver the command again.</p> </li> <li> <p>Success: The command or plugin was run successfully. This is a terminal state.</p> </li> <li> <p>Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Execution Timed Out: The command started to run on the instance, but the execution was not complete before the timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Failed: The command wasn't run successfully on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Canceled: The command was terminated before it was completed. This is a terminal state.</p> </li> <li> <p>Undeliverable: The command can't be delivered to the instance. The instance might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.</p> </li> </ul>
   */
  StatusDetails?: string;

  /**
   * <p>The first 24,000 characters written by the plugin to stdout. If the command has not finished running, if ExecutionStatus is neither Succeeded nor Failed, then this string is empty.</p>
   */
  StandardOutputContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If an Amazon S3 bucket was not specified, then this string is empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The first 8,000 characters written by the plugin to stderr. If the command has not finished running, then this string is empty.</p>
   */
  StandardErrorContent?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If the command has not finished running, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>CloudWatch Logs information where Systems Manager sent the command output.</p>
   */
  CloudWatchOutputConfig?: _UnmarshalledCloudWatchOutputConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
