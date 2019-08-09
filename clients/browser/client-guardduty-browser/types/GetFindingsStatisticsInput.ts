import { _FindingCriteria } from "./_FindingCriteria";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsStatisticsInput shape
 */
export interface GetFindingsStatisticsInput {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.</p>
   */
  DetectorId: string;

  /**
   * <p>Types of finding statistics to retrieve.</p>
   */
  FindingStatisticTypes:
    | Array<"COUNT_BY_SEVERITY" | string>
    | Iterable<"COUNT_BY_SEVERITY" | string>;

  /**
   * <p>Represents the criteria used for querying findings.</p>
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
