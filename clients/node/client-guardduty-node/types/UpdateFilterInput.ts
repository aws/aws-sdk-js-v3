import { _FindingCriteria } from "./_FindingCriteria";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFilterInput shape
 */
export interface UpdateFilterInput {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.</p>
   */
  DetectorId: string;

  /**
   * <p>The name of the filter.</p>
   */
  FilterName: string;

  /**
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: "NOOP" | "ARCHIVE" | string;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria?: _FindingCriteria;

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
