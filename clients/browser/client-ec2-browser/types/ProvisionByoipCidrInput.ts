import { _CidrAuthorizationContext } from "./_CidrAuthorizationContext";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ProvisionByoipCidrInput shape
 */
export interface ProvisionByoipCidrInput {
  /**
   * <p>The public IPv4 address range, in CIDR notation. The most specific prefix that you can specify is /24. The address range cannot overlap with another address range that you've brought to this or another Region.</p>
   */
  Cidr: string;

  /**
   * <p>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</p>
   */
  CidrAuthorizationContext?: _CidrAuthorizationContext;

  /**
   * <p>A description for the address range and the address pool.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
