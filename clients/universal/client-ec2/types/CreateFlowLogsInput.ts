import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFlowLogsInput shape
 */
export interface CreateFlowLogsInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.</p> <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p> <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</p> <p>Constraints: Maximum of 1000 resources</p>
   */
  ResourceIds: Array<string> | Iterable<string>;

  /**
   * <p>The type of resource for which to create the flow log. For example, if you specified a VPC ID for the <code>ResourceId</code> property, specify <code>VPC</code> for this property.</p>
   */
  ResourceType: "VPC" | "Subnet" | "NetworkInterface" | string;

  /**
   * <p>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</p>
   */
  TrafficType: "ACCEPT" | "REJECT" | "ALL" | string;

  /**
   * <p>Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify <code>cloud-watch-logs</code>. To publish flow log data to Amazon S3, specify <code>s3</code>.</p> <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p> <p>Default: <code>cloud-watch-logs</code> </p>
   */
  LogDestinationType?: "cloud-watch-logs" | "s3" | string;

  /**
   * <p>Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified for <code>LogDestinationType</code>.</p> <p>If LogDestinationType is not specified or <code>cloud-watch-logs</code>, specify the Amazon Resource Name (ARN) of the CloudWatch Logs log group.</p> <p>If LogDestinationType is <code>s3</code>, specify the ARN of the Amazon S3 bucket. You can also specify a subfolder in the bucket. To specify a subfolder in the bucket, use the following ARN format: <code>bucket_ARN/subfolder_name/</code>. For example, to specify a subfolder named <code>my-logs</code> in a bucket named <code>my-bucket</code>, use the following ARN: <code>arn:aws:s3:::my-bucket/my-logs/</code>. You cannot use <code>AWSLogs</code> as a subfolder name. This is a reserved term.</p>
   */
  LogDestination?: string;

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
