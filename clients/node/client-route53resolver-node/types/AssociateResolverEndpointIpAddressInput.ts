import { _IpAddressUpdate } from "./_IpAddressUpdate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateResolverEndpointIpAddressInput shape
 */
export interface AssociateResolverEndpointIpAddressInput {
  /**
   * <p>The ID of the resolver endpoint that you want to associate IP addresses with.</p>
   */
  ResolverEndpointId: string;

  /**
   * <p>Either the IPv4 address that you want to add to a resolver endpoint or a subnet ID. If you specify a subnet ID, Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
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
