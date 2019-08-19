import { _TagFilter } from "./_TagFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourceSharesInput shape
 */
export interface GetResourceSharesInput {
  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string> | Iterable<string>;

  /**
   * <p>The status of the resource share.</p>
   */
  resourceShareStatus?:
    | "PENDING"
    | "ACTIVE"
    | "FAILED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: "SELF" | "OTHER-ACCOUNTS" | string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>One or more tag filters.</p>
   */
  tagFilters?: Array<_TagFilter> | Iterable<_TagFilter>;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
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
