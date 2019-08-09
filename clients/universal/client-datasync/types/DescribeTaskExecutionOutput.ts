import { _UnmarshalledOptions } from "./_Options";
import { _UnmarshalledFilterRule } from "./_FilterRule";
import { _UnmarshalledTaskExecutionResultDetail } from "./_TaskExecutionResultDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTaskExecutionResponse</p>
 */
export interface DescribeTaskExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the task execution that was described. <code>TaskExecutionArn</code> is hierarchical and includes <code>TaskArn</code> for the task that was executed. </p> <p>For example, a <code>TaskExecution</code> value with the ARN <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2/execution/exec-08ef1e88ec491019b</code> executed the task with the ARN <code>arn:aws:datasync:us-east-1:111222333444:task/task-0208075f79cedf4a2</code>. </p>
   */
  TaskExecutionArn?: string;

  /**
   * <p>The status of the task execution. </p> <p>For detailed information about task execution statuses, see Understanding Task Statuses in the <i>AWS DataSync User Guide.</i> </p>
   */
  Status?:
    | "LAUNCHING"
    | "PREPARING"
    | "TRANSFERRING"
    | "VERIFYING"
    | "SUCCESS"
    | "ERROR"
    | string;

  /**
   * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p>
   */
  Options?: _UnmarshalledOptions;

  /**
   * <p>A list of filter rules that determines which files to exclude from a task. The list should contain a single filter string that consists of the patterns to exclude. The patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code> </p> <p> </p>
   */
  Excludes?: Array<_UnmarshalledFilterRule>;

  /**
   * <p>A list of filter rules that determines which files to include when running a task. The list should contain a single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example: <code>"/folder1|/folder2"</code> </p> <p> </p>
   */
  Includes?: Array<_UnmarshalledFilterRule>;

  /**
   * <p>The time that the task execution was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The expected number of files that is to be transferred over the network. This value is calculated during the PREPARING phase, before the TRANSFERRING phase. This value is the expected number of files to be transferred. It's calculated based on comparing the content of the source and destination locations and finding the delta that needs to be transferred. </p>
   */
  EstimatedFilesToTransfer?: number;

  /**
   * <p>The estimated physical number of bytes that is to be transferred over the network.</p>
   */
  EstimatedBytesToTransfer?: number;

  /**
   * <p>The actual number of files that was transferred over the network. This value is calculated and updated on an ongoing basis during the TRANSFERRING phase. It's updated periodically when each file is read from the source and sent over the network. </p> <p>If failures occur during a transfer, this value can be less than <code>EstimatedFilesToTransfer</code>. This value can also be greater than <code>EstimatedFilesTransferred</code> in some cases. This element is implementation-specific for some location types, so don't use it as an indicator for a correct file number or to monitor your task execution.</p>
   */
  FilesTransferred?: number;

  /**
   * <p>The number of logical bytes written to the destination AWS storage resource.</p>
   */
  BytesWritten?: number;

  /**
   * <p>The physical number of bytes transferred over the network.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The result of the task execution.</p>
   */
  Result?: _UnmarshalledTaskExecutionResultDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
