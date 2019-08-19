import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchIndexInput shape
 */
export interface SearchIndexInput {
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string;

  /**
   * <p>The token used to get the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

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
