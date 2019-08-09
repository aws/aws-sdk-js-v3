import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.</p>
 */
export interface PutDedicatedIpWarmupAttributesInput {
  /**
   * <p>The dedicated IP address that you want to update the warm-up attributes for.</p>
   */
  Ip: string;

  /**
   * <p>The warm-up percentage that you want to associate with the dedicated IP address.</p>
   */
  WarmupPercentage: number;

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
