import { _ParameterNameValue } from "./_ParameterNameValue";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateParameterGroupInput shape
 */
export interface UpdateParameterGroupInput {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName: string;

  /**
   * <p>An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.</p>
   */
  ParameterNameValues:
    | Array<_ParameterNameValue>
    | Iterable<_ParameterNameValue>;

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
