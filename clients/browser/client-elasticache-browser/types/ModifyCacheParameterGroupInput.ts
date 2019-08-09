import { _ParameterNameValue } from "./_ParameterNameValue";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>ModifyCacheParameterGroup</code> operation.</p>
 */
export interface ModifyCacheParameterGroupInput {
  /**
   * <p>The name of the cache parameter group to modify.</p>
   */
  CacheParameterGroupName: string;

  /**
   * <p>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.</p>
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
