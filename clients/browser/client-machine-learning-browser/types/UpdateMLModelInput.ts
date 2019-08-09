import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMLModelInput shape
 */
export interface UpdateMLModelInput {
  /**
   * <p>The ID assigned to the <code>MLModel</code> during creation.</p>
   */
  MLModelId: string;

  /**
   * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
   */
  MLModelName?: string;

  /**
   * <p>The <code>ScoreThreshold</code> used in binary classification <code>MLModel</code> that marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the <code>ScoreThreshold</code> receive a positive result from the <code>MLModel</code>, such as <code>true</code>. Output values less than the <code>ScoreThreshold</code> receive a negative response from the <code>MLModel</code>, such as <code>false</code>.</p>
   */
  ScoreThreshold?: number;

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
