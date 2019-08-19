import { _SystemTemplateFilter } from "./_SystemTemplateFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchSystemTemplatesInput shape
 */
export interface SearchSystemTemplatesInput {
  /**
   * <p>An array of filters that limit the result set. The only valid filter is <code>FLOW_TEMPLATE_ID</code>.</p>
   */
  filters?: Array<_SystemTemplateFilter> | Iterable<_SystemTemplateFilter>;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

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
