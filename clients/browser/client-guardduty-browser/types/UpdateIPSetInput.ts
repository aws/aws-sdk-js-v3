import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateIPSetInput shape
 */
export interface UpdateIPSetInput {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
   */
  DetectorId: string;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  IpSetId: string;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   */
  Name?: string;

  /**
   * <p>The updated URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).</p>
   */
  Location?: string;

  /**
   * <p>The updated boolean value that specifies whether the IPSet is active or not.</p>
   */
  Activate?: boolean;

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
