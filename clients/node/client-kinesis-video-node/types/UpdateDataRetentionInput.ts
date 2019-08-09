import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDataRetentionInput shape
 */
export interface UpdateDataRetentionInput {
  /**
   * <p>The name of the stream whose retention period you want to change.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream whose retention period you want to change.</p>
   */
  StreamARN?: string;

  /**
   * <p>The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.</p>
   */
  CurrentVersion: string;

  /**
   * <p>Indicates whether you want to increase or decrease the retention period.</p>
   */
  Operation: "INCREASE_DATA_RETENTION" | "DECREASE_DATA_RETENTION" | string;

  /**
   * <p>The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).</p>
   */
  DataRetentionChangeInHours: number;

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
