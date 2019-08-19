import { _SpotOptionsRequest } from "./_SpotOptionsRequest";
import { _OnDemandOptionsRequest } from "./_OnDemandOptionsRequest";
import { _FleetLaunchTemplateConfigRequest } from "./_FleetLaunchTemplateConfigRequest";
import { _TargetCapacitySpecificationRequest } from "./_TargetCapacitySpecificationRequest";
import { _TagSpecification } from "./_TagSpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFleetInput shape
 */
export interface CreateFleetInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Describes the configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: _SpotOptionsRequest;

  /**
   * <p>Describes the configuration of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: _OnDemandOptionsRequest;

  /**
   * <p>Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: "no-termination" | "termination" | string;

  /**
   * <p>The configuration for the EC2 Fleet.</p>
   */
  LaunchTemplateConfigs:
    | Array<_FleetLaunchTemplateConfigRequest>
    | Iterable<_FleetLaunchTemplateConfigRequest>;

  /**
   * <p>The number of units to request.</p>
   */
  TargetCapacitySpecification: _TargetCapacitySpecificationRequest;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of the request. By default, the EC2 Fleet places an asynchronous request for your desired capacity, and maintains it by replenishing interrupted Spot Instances (<code>maintain</code>). A value of <code>instant</code> places a synchronous one-time request, and returns errors for any instances that could not be launched. A value of <code>request</code> places an asynchronous one-time request without maintaining capacity or submitting requests in alternative capacity pools if capacity is unavailable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-request-type">EC2 Fleet Request Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Type?: "request" | "maintain" | "instant" | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). The default is to start fulfilling the request immediately.</p>
   */
  ValidFrom?: Date | string | number;

  /**
   * <p>The end date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.</p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The key-value pair for tagging the EC2 Fleet request on creation. The value for <code>ResourceType</code> must be <code>fleet</code>, otherwise the fleet request fails. To tag instances at launch, specify the tags in the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template">launch template</a>. For information about tagging after launch, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources">Tagging Your Resources</a>. </p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

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
