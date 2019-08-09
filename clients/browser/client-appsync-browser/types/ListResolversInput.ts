import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolversInput shape
 */
export interface ListResolversInput {
  /**
   * <p>The API ID.</p>
   */
  apiId: string;

  /**
   * <p>The type name.</p>
   */
  typeName: string;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return.</p>
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
