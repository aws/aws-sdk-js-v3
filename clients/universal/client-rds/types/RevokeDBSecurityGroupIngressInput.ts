import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface RevokeDBSecurityGroupIngressInput {
  /**
   * <p>The name of the DB security group to revoke ingress from.</p>
   */
  DBSecurityGroupName: string;

  /**
   * <p> The IP range to revoke access from. Must be a valid CIDR range. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code> can't be provided. </p>
   */
  CIDRIP?: string;

  /**
   * <p> The name of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p> The id of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p> The AWS Account Number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The AWS Access Key ID is not an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided. </p>
   */
  EC2SecurityGroupOwnerId?: string;

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
