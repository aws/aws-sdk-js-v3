import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFindingsFeedbackInput shape
 */
export interface UpdateFindingsFeedbackInput {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to mark as useful or not useful.</p>
   */
  DetectorId: string;

  /**
   * <p>IDs of the findings that you want to mark as useful or not useful.</p>
   */
  FindingIds: Array<string> | Iterable<string>;

  /**
   * <p>Valid values: USEFUL | NOT_USEFUL</p>
   */
  Feedback: "USEFUL" | "NOT_USEFUL" | string;

  /**
   * <p>Additional feedback about the GuardDuty findings.</p>
   */
  Comments?: string;

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
