import { _FindingCriteria } from "./_FindingCriteria";
import { _SortCriteria } from "./_SortCriteria";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFindingsInput shape
 */
export interface ListFindingsInput {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to list.</p>
   */
  DetectorId: string;

  /**
   * <p>Represents the criteria used for querying findings.</p>
   */
  FindingCriteria?: _FindingCriteria;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: _SortCriteria;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   */
  NextToken?: string;

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
