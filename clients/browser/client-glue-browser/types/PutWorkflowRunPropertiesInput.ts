import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutWorkflowRunPropertiesInput shape
 */
export interface PutWorkflowRunPropertiesInput {
  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   */
  RunId: string;

  /**
   * <p>The properties to put for the specified run.</p>
   */
  RunProperties: { [key: string]: string } | Iterable<[string, string]>;

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
