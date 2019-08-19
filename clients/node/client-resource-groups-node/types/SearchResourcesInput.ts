import { _ResourceQuery } from "./_ResourceQuery";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchResourcesInput shape
 */
export interface SearchResourcesInput {
  /**
   * <p>The search query, using the same formats that are supported for resource group definition.</p>
   */
  ResourceQuery: _ResourceQuery;

  /**
   * <p>The maximum number of group member ARNs returned by <code>SearchResources</code> in paginated output. By default, this number is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The NextToken value that is returned in a paginated <code>SearchResources</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.</p>
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
