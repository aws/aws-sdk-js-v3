import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineInput {
  /**
   * <p>The name of the pipeline for which you want to get information. Pipeline names must be unique under an Amazon Web Services (AWS) user account.</p>
   */
  name: string;

  /**
   * <p>The version number of the pipeline. If you do not specify a version, defaults to the most current version.</p>
   */
  version?: number;

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
