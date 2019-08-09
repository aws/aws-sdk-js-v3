import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCodeRepositoriesInput shape
 */
export interface ListCodeRepositoriesInput {
  /**
   * <p>A filter that returns only Git repositories that were created after the specified time.</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified time.</p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of Git repositories, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | "LastModifiedTime" | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

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
