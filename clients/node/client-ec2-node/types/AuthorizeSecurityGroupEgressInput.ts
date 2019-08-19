import { _IpPermission } from "./_IpPermission";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AuthorizeSecurityGroupEgressInput shape
 */
export interface AuthorizeSecurityGroupEgressInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId: string;

  /**
   * <p>The sets of IP permissions. You can't specify a destination security group and a CIDR IP address range in the same set of permissions.</p>
   */
  IpPermissions?: Array<_IpPermission> | Iterable<_IpPermission>;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the CIDR.</p>
   */
  CidrIp?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  FromPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the protocol name or number.</p>
   */
  IpProtocol?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify the port.</p>
   */
  ToPort?: number;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security group.</p>
   */
  SourceSecurityGroupName?: string;

  /**
   * <p>Not supported. Use a set of IP permissions to specify a destination security group.</p>
   */
  SourceSecurityGroupOwnerId?: string;

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
