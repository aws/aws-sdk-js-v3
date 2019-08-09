import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * LabelParameterVersionInput shape
 */
export interface LabelParameterVersionInput {
  /**
   * <p>The parameter name on which you want to attach one or more labels.</p>
   */
  Name: string;

  /**
   * <p>The specific version of the parameter on which you want to attach one or more labels. If no version is specified, the system attaches the label to the latest version.)</p>
   */
  ParameterVersion?: number;

  /**
   * <p>One or more labels to attach to the specified parameter version.</p>
   */
  Labels: Array<string> | Iterable<string>;

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
