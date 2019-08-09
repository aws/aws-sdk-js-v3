import { _NotebookInstanceLifecycleHook } from "./_NotebookInstanceLifecycleHook";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNotebookInstanceLifecycleConfigInput shape
 */
export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string;

  /**
   * <p>A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnCreate?:
    | Array<_NotebookInstanceLifecycleHook>
    | Iterable<_NotebookInstanceLifecycleHook>;

  /**
   * <p>A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?:
    | Array<_NotebookInstanceLifecycleHook>
    | Iterable<_NotebookInstanceLifecycleHook>;

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
