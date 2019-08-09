import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request object for <code>ListTagsForResource</code> operation.</p>
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the Amazon FSx resource that will have its tags listed.</p>
   */
  ResourceARN: string;

  /**
   * <p>(Optional) Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the <code>MaxResults</code> parameter specified in the request and the service's internal maximum number of items per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Opaque pagination token returned from a previous <code>ListTagsForResource</code> operation (String). If a token present, the action continues the list from where the returning call left off.</p>
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
