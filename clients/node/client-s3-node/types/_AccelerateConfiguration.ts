/**
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface _AccelerateConfiguration {
  /**
   * <p>Specifies the transfer acceleration status of the bucket.</p>
   */
  Status?: "Enabled" | "Suspended" | string;
}

export type _UnmarshalledAccelerateConfiguration = _AccelerateConfiguration;
