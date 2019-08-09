import { _SortCriteria } from "./_SortCriteria";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsInput shape
 */
export interface GetFindingsInput {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.</p>
   */
  DetectorId: string;

  /**
   * <p>IDs of the findings that you want to retrieve.</p>
   */
  FindingIds: Array<string> | Iterable<string>;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: _SortCriteria;

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
