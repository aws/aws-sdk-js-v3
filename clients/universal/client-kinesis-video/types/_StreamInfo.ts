/**
 * <p>An object describing a Kinesis video stream.</p>
 */
export interface _StreamInfo {
  /**
   * <p>The name of the device that is associated with the stream.</p>
   */
  DeviceName?: string;

  /**
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * <p>The <code>MediaType</code> of the stream. </p>
   */
  MediaType?: string;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key that Kinesis Video Streams uses to encrypt data on the stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The version of the stream.</p>
   */
  Version?: string;

  /**
   * <p>The status of the stream.</p>
   */
  Status?: "CREATING" | "ACTIVE" | "UPDATING" | "DELETING" | string;

  /**
   * <p>A time stamp that indicates when the stream was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>How long the stream retains data, in hours.</p>
   */
  DataRetentionInHours?: number;
}

export interface _UnmarshalledStreamInfo extends _StreamInfo {
  /**
   * <p>A time stamp that indicates when the stream was created.</p>
   */
  CreationTime?: Date;
}
