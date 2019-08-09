import { _Input } from "./_Input";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface AddApplicationInputInput {
  /**
   * <p>Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.</p>
   */
  ApplicationName: string;

  /**
   * <p>Current version of your Amazon Kinesis Analytics application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html">Input</a> to add.</p>
   */
  Input: _Input;

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
