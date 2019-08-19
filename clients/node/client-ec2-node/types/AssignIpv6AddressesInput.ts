import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssignIpv6AddressesInput shape
 */
export interface AssignIpv6AddressesInput {
  /**
   * <p>The number of IPv6 addresses to assign to the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses to be assigned to the network interface. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string;

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
