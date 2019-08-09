import { _ResourceQuery } from "./_ResourceQuery";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGroupQueryInput shape
 */
export interface UpdateGroupQueryInput {
  /**
   * <p>The name of the resource group for which you want to edit the query.</p>
   */
  GroupName: string;

  /**
   * <p>The resource query that determines which AWS resources are members of the resource group.</p>
   */
  ResourceQuery: _ResourceQuery;

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
