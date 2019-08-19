import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetWorkflowRunsInput shape
 */
export interface GetWorkflowRunsInput {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   */
  Name: string;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
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
