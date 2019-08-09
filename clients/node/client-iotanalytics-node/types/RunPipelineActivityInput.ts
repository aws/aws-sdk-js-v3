import { _PipelineActivity } from "./_PipelineActivity";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RunPipelineActivityInput shape
 */
export interface RunPipelineActivityInput {
  /**
   * <p>The pipeline activity that is run. This must not be a 'channel' activity or a 'datastore' activity because these activities are used in a pipeline only to load the original message and to store the (possibly) transformed message. If a 'lambda' activity is specified, only short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be used.</p>
   */
  pipelineActivity: _PipelineActivity;

  /**
   * <p>The sample message payloads on which the pipeline activity is run.</p>
   */
  payloads:
    | Array<ArrayBuffer | ArrayBufferView | string>
    | Iterable<ArrayBuffer | ArrayBufferView | string>;

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
