import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSubnetInput shape
 */
export interface CreateSubnetInput {
  /**
   * <p>The Availability Zone for the subnet.</p> <p>Default: AWS selects one for you. If you create more than one subnet in your VPC, we may not necessarily select a different zone for each subnet.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>.</p>
   */
  CidrBlock: string;

  /**
   * <p>The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string;

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
