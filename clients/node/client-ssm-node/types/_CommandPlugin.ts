/**
 * <p>Describes plugin details.</p>
 */
export interface _CommandPlugin {
  /**
   * <p>The name of the plugin. Must be one of the following: aws:updateAgent, aws:domainjoin, aws:applications, aws:runPowerShellScript, aws:psmodule, aws:cloudWatch, aws:runShellScript, or aws:updateSSMAgent. </p>
   */
  Name?: string;

  /**
   * <p>The status of this plugin. You can run a document with multiple plugins.</p>
   */
  Status?:
    | "Pending"
    | "InProgress"
    | "Success"
    | "TimedOut"
    | "Cancelled"
    | "Failed"
    | string;

  /**
   * <p>A detailed status of the plugin execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitor-commands.html">Understanding Command Statuses</a> in the <i>AWS Systems Manager User Guide</i>. StatusDetails can be one of the following values:</p> <ul> <li> <p>Pending: The command has not been sent to the instance.</p> </li> <li> <p>In Progress: The command has been sent to the instance but has not reached a terminal state.</p> </li> <li> <p>Success: The execution of the command or plugin was successfully completed. This is a terminal state.</p> </li> <li> <p>Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Execution Timed Out: Command execution started on the instance, but the execution was not complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Failed: The command was not successful on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.</p> </li> <li> <p>Canceled: The command was terminated before it was completed. This is a terminal state.</p> </li> <li> <p>Undeliverable: The command can't be delivered to the instance. The instance might not exist, or it might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit, and they don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.</p> </li> <li> <p>Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.</p> </li> </ul>
   */
  StatusDetails?: string;

  /**
   * <p>A numeric response code generated after running the plugin. </p>
   */
  ResponseCode?: number;

  /**
   * <p>The time the plugin started running. </p>
   */
  ResponseStartDateTime?: Date | string | number;

  /**
   * <p>The time the plugin stopped running. Could stop prematurely if, for example, a cancel command was sent. </p>
   */
  ResponseFinishDateTime?: Date | string | number;

  /**
   * <p>Output of the plugin execution.</p>
   */
  Output?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stdout in Amazon S3. If the Amazon S3 bucket for the command was not specified, then this string is empty.</p>
   */
  StandardOutputUrl?: string;

  /**
   * <p>The URL for the complete text written by the plugin to stderr. If execution is not yet complete, then this string is empty.</p>
   */
  StandardErrorUrl?: string;

  /**
   * <p>(Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.</p>
   */
  OutputS3Region?: string;

  /**
   * <p>The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:</p> <p> test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript </p> <p>test_folder is the name of the Amazon S3 bucket;</p> <p> ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;</p> <p>i-1234567876543 is the instance ID;</p> <p>awsrunShellScript is the name of the plugin.</p>
   */
  OutputS3BucketName?: string;

  /**
   * <p>The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:</p> <p> test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript </p> <p>test_folder is the name of the Amazon S3 bucket;</p> <p> ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;</p> <p>i-1234567876543 is the instance ID;</p> <p>awsrunShellScript is the name of the plugin.</p>
   */
  OutputS3KeyPrefix?: string;
}

export interface _UnmarshalledCommandPlugin extends _CommandPlugin {
  /**
   * <p>The time the plugin started running. </p>
   */
  ResponseStartDateTime?: Date;

  /**
   * <p>The time the plugin stopped running. Could stop prematurely if, for example, a cancel command was sent. </p>
   */
  ResponseFinishDateTime?: Date;
}
