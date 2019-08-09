import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClientVpnRouteInput shape
 */
export interface CreateClientVpnRouteInput {
  /**
   * <p>The ID of the Client VPN endpoint to which to add the route.</p>
   */
  ClientVpnEndpointId: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, of the route destination. For example:</p> <ul> <li> <p>To add a route for Internet access, enter <code>0.0.0.0/0</code> </p> </li> <li> <p>To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range</p> </li> <li> <p>To add a route for an on-premises network, enter the AWS Site-to-Site VPN connection's IPv4 CIDR range</p> </li> </ul> <p>Route address ranges cannot overlap with the CIDR range specified for client allocation.</p>
   */
  DestinationCidrBlock: string;

  /**
   * <p>The ID of the subnet through which you want to route traffic. The specified subnet must be an existing target network of the Client VPN endpoint.</p>
   */
  TargetVpcSubnetId: string;

  /**
   * <p>A brief description of the route.</p>
   */
  Description?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

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
