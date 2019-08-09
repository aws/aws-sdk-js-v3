import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopInstanceInput shape
 */
export interface StopInstanceInput {
  /**
   * <p>The name of the instance (a virtual private server) to stop.</p>
   */
  instanceName: string;

  /**
   * <p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a <code>stopping</code> state to stop.</p> <important> <p>Only use the <code>force</code> parameter if your instance is stuck in the <code>stopping</code> state. In any other state, your instance should stop normally without adding this parameter to your API request.</p> </important>
   */
  force?: boolean;

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
