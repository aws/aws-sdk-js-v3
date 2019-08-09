import { _CloudWatchLoggingOption } from "./_CloudWatchLoggingOption";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationCloudWatchLoggingOptionInput shape
 */
export interface AddApplicationCloudWatchLoggingOptionInput {
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN. Note: To write application messages to CloudWatch, the IAM role that is used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  CloudWatchLoggingOption: _CloudWatchLoggingOption;

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
