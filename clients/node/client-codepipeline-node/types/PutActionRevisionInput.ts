import { _ActionRevision } from "./_ActionRevision";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>PutActionRevision</code> action.</p>
 */
export interface PutActionRevisionInput {
  /**
   * <p>The name of the pipeline that will start processing the revision to the source.</p>
   */
  pipelineName: string;

  /**
   * <p>The name of the stage that contains the action that will act upon the revision.</p>
   */
  stageName: string;

  /**
   * <p>The name of the action that will process the revision.</p>
   */
  actionName: string;

  /**
   * <p>Represents information about the version (or revision) of an action.</p>
   */
  actionRevision: _ActionRevision;

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
