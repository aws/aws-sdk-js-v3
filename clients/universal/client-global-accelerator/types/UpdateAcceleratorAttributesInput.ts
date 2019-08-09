import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAcceleratorAttributesInput shape
 */
export interface UpdateAcceleratorAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator that you want to update. Attribute is required.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>Update whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>Update the prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. If you don’t specify a prefix, the flow logs are stored in the root of the bucket.</p>
   */
  FlowLogsS3Prefix?: string;

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
