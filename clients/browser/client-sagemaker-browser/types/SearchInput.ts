import { _SearchExpression } from "./_SearchExpression";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchInput shape
 */
export interface SearchInput {
  /**
   * <p>The name of the Amazon SageMaker resource to search for. Currently, the only valid <code>Resource</code> value is <code>TrainingJob</code>.</p>
   */
  Resource: "TrainingJob" | string;

  /**
   * <p>A Boolean conditional statement. Resource objects must satisfy this condition to be included in search results. You must provide at least one subexpression, filter, or nested filter. The maximum number of recursive <code>SubExpressions</code>, <code>NestedFilters</code>, and <code>Filters</code> that can be included in a <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: _SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>If more than <code>MaxResults</code> resource objects match the specified <code>SearchExpression</code>, the <code>SearchResponse</code> includes a <code>NextToken</code>. The <code>NextToken</code> can be passed to the next <code>SearchRequest</code> to continue retrieving results for the specified <code>SearchExpression</code> and <code>Sort</code> parameters.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a <code>SearchResponse</code>.</p>
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
