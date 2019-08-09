import { _PipelineActivity } from "./_PipelineActivity";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePipelineInput shape
 */
export interface UpdatePipelineInput {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  pipelineName: string;

  /**
   * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
   */
  pipelineActivities: Array<_PipelineActivity> | Iterable<_PipelineActivity>;

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
