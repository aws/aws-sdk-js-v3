import { _IpAddressUpdate } from "./_IpAddressUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateResolverEndpointIpAddressInput shape
 */
export interface DisassociateResolverEndpointIpAddressInput {
  /**
   * <p>The ID of the resolver endpoint that you want to disassociate an IP address from.</p>
   */
  ResolverEndpointId: string;

  /**
   * <p>The IPv4 address that you want to remove from a resolver endpoint.</p>
   */
  IpAddress: _IpAddressUpdate;

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
