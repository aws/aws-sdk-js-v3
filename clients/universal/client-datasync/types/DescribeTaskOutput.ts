import { _UnmarshalledOptions } from "./_Options";
import { _UnmarshalledFilterRule } from "./_FilterRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTaskResponse</p>
 */
export interface DescribeTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that was described.</p>
   */
  TaskArn?: string;

  /**
   * <p>The status of the task that was described.</p> <p>For detailed information about task execution statuses, see Understanding Task Statuses in the <i>AWS DataSync User Guide.</i> </p>
   */
  Status?: "AVAILABLE" | "CREATING" | "RUNNING" | "UNAVAILABLE" | string;

  /**
   * <p>The name of the task that was described.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that is syncing files.</p>
   */
  CurrentTaskExecutionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source file system's location.</p>
   */
  SourceLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS storage resource's location.</p>
   */
  DestinationLocationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that was used to monitor and log events in the task.</p> <p>For more information on these groups, see Working with Log Groups and Log Streams in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  CloudWatchLogGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source ENIs (Elastic Network Interface) that was created for your subnet.</p>
   */
  SourceNetworkInterfaceArns?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination ENIs (Elastic Network Interface) that was created for your subnet.</p>
   */
  DestinationNetworkInterfaceArns?: Array<string>;

  /**
   * <p>The set of configuration options that control the behavior of a single execution of the task that occurs when you call <code>StartTaskExecution</code>. You can configure these options to preserve metadata such as user ID (UID) and group (GID), file permissions, data integrity verification, and so on.</p> <p>For each individual task execution, you can override these options by specifying the overriding <code>OverrideOptions</code> value to operation. </p>
   */
  Options?: _UnmarshalledOptions;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code> </p> <p> </p>
   */
  Excludes?: Array<_UnmarshalledFilterRule>;

  /**
   * <p>Errors that AWS DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;

  /**
   * <p>The time that the task was created.</p>
   */
  CreationTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
