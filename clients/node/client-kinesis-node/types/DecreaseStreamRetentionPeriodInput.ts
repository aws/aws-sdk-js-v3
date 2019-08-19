import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for <a>DecreaseStreamRetentionPeriod</a>.</p>
 */
export interface DecreaseStreamRetentionPeriodInput {
  /**
   * <p>The name of the stream to modify.</p>
   */
  StreamName: string;

  /**
   * <p>The new retention period of the stream, in hours. Must be less than the current retention period.</p>
   */
  RetentionPeriodHours: number;

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
