import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListReviewPolicyResultsForHITInput shape
 */
export interface ListReviewPolicyResultsForHITInput {
  /**
   * <p>The unique identifier of the HIT to retrieve review results for.</p>
   */
  HITId: string;

  /**
   * <p> The Policy Level(s) to retrieve review results for - HIT or Assignment. If omitted, the default behavior is to retrieve all data for both policy levels. For a list of all the described policies, see Review Policies. </p>
   */
  PolicyLevels?:
    | Array<"Assignment" | "HIT" | string>
    | Iterable<"Assignment" | "HIT" | string>;

  /**
   * <p> Specify if the operation should retrieve a list of the actions taken executing the Review Policies and their outcomes. </p>
   */
  RetrieveActions?: boolean;

  /**
   * <p> Specify if the operation should retrieve a list of the results computed by the Review Policies. </p>
   */
  RetrieveResults?: boolean;

  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  /**
   * <p>Limit the number of results returned.</p>
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
