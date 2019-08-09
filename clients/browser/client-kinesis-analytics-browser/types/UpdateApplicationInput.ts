import { _ApplicationUpdate } from "./_ApplicationUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApplicationInput shape
 */
export interface UpdateApplicationInput {
  /**
   * <p>Name of the Amazon Kinesis Analytics application to update.</p>
   */
  ApplicationName: string;

  /**
   * <p>The current application version ID. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>Describes application updates.</p>
   */
  ApplicationUpdate: _ApplicationUpdate;

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
