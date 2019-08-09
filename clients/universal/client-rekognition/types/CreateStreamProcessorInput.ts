import { _StreamProcessorInput } from "./_StreamProcessorInput";
import { _StreamProcessorOutput } from "./_StreamProcessorOutput";
import { _StreamProcessorSettings } from "./_StreamProcessorSettings";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStreamProcessorInput shape
 */
export interface CreateStreamProcessorInput {
  /**
   * <p>Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is <code>StreamProcessorInput</code>.</p>
   */
  Input: _StreamProcessorInput;

  /**
   * <p>Kinesis data stream stream to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is <code>StreamProcessorOutput</code>.</p>
   */
  Output: _StreamProcessorOutput;

  /**
   * <p>An identifier you assign to the stream processor. You can use <code>Name</code> to manage the stream processor. For example, you can get the current status of the stream processor by calling <a>DescribeStreamProcessor</a>. <code>Name</code> is idempotent. </p>
   */
  Name: string;

  /**
   * <p>Face recognition input parameters to be used by the stream processor. Includes the collection to use for face recognition and the face attributes to detect.</p>
   */
  Settings: _StreamProcessorSettings;

  /**
   * <p>ARN of the IAM role that allows access to the stream processor.</p>
   */
  RoleArn: string;

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
