import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStreamInput shape
 */
export interface CreateStreamInput {
  /**
   * <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
   */
  DeviceName?: string;

  /**
   * <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
   */
  StreamName: string;

  /**
   * <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
   */
  MediaType?: string;

  /**
   * <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
   */
  DataRetentionInHours?: number;

  /**
   * <p>A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
