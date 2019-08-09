import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for CreateCustomerGateway.</p>
 */
export interface CreateCustomerGatewayInput {
  /**
   * <p>For devices that support BGP, the customer gateway's BGP ASN.</p> <p>Default: 65000</p>
   */
  BgpAsn: number;

  /**
   * <p>The Internet-routable IP address for the customer gateway's outside interface. The address must be static.</p>
   */
  PublicIp: string;

  /**
   * <p>The type of VPN connection that this customer gateway supports (<code>ipsec.1</code>).</p>
   */
  Type: "ipsec.1" | string;

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
