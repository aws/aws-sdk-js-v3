import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTapeArchivesInput</p>
 */
export interface DescribeTapeArchivesInput {
  /**
   * <p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.</p>
   */
  TapeARNs?: Array<string> | Iterable<string>;

  /**
   * <p>An opaque string that indicates the position at which to begin describing virtual tapes.</p>
   */
  Marker?: string;

  /**
   * <p>Specifies that the number of virtual tapes descried be limited to the specified number.</p>
   */
  Limit?: number;

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
