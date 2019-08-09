import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApplicationInputProcessingConfigurationInput shape
 */
export interface DeleteApplicationInputProcessingConfigurationInput {
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>The ID of the input configuration from which to delete the input processing configuration. You can get a list of the input IDs for an application by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string;

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
