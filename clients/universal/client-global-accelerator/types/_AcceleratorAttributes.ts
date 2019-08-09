/**
 * <p>Attributes of an accelerator.</p>
 */
export interface _AcceleratorAttributes {
  /**
   * <p>Indicates whether flow logs are enabled. The default value is false. If the value is true, <code>FlowLogsS3Bucket</code> and <code>FlowLogsS3Prefix</code> must be specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/monitoring-global-accelerator.flow-logs.html">Flow Logs</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
   */
  FlowLogsEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. The bucket must exist and have a bucket policy that grants AWS Global Accelerator permission to write to the bucket.</p>
   */
  FlowLogsS3Bucket?: string;

  /**
   * <p>The prefix for the location in the Amazon S3 bucket for the flow logs. Attribute is required if <code>FlowLogsEnabled</code> is <code>true</code>. If you don’t specify a prefix, the flow logs are stored in the root of the bucket.</p>
   */
  FlowLogsS3Prefix?: string;
}

export type _UnmarshalledAcceleratorAttributes = _AcceleratorAttributes;
