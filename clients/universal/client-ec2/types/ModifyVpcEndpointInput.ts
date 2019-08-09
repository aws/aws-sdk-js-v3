import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for ModifyVpcEndpoint.</p>
 */
export interface ModifyVpcEndpointInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the endpoint.</p>
   */
  VpcEndpointId: string;

  /**
   * <p>(Gateway endpoint) Specify <code>true</code> to reset the policy document to the default policy. The default policy allows full access to the service.</p>
   */
  ResetPolicy?: boolean;

  /**
   * <p>A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables IDs to associate with the endpoint.</p>
   */
  AddRouteTableIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Gateway endpoint) One or more route table IDs to disassociate from the endpoint.</p>
   */
  RemoveRouteTableIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) One or more subnet IDs in which to serve the endpoint.</p>
   */
  AddSubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) One or more subnets IDs in which to remove the endpoint.</p>
   */
  RemoveSubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) One or more security group IDs to associate with the network interface.</p>
   */
  AddSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) One or more security group IDs to disassociate from the network interface.</p>
   */
  RemoveSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) Indicate whether a private hosted zone is associated with the VPC.</p>
   */
  PrivateDnsEnabled?: boolean;

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
