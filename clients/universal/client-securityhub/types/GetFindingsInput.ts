import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { _SortCriterion } from "./_SortCriterion";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsInput shape
 */
export interface GetFindingsInput {
  /**
   * <p>The findings attributes used to define a condition to filter the findings returned.</p>
   */
  Filters?: _AwsSecurityFindingFilters;

  /**
   * <p>Findings attributes used to sort the list of findings returned.</p>
   */
  SortCriteria?: Array<_SortCriterion> | Iterable<_SortCriterion>;

  /**
   * <p>Paginates results. On your first call to the <code>GetFindings</code> operation, set the value of this parameter to <code>NULL</code>. For subsequent calls to the operation, fill <code>nextToken</code> in the request with the value of <code>nextToken</code> from the previous response to continue listing data.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;

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
