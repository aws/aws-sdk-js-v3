import {
  _SpotInstanceStateFault,
  _UnmarshalledSpotInstanceStateFault
} from "./_SpotInstanceStateFault";
import {
  _LaunchSpecification,
  _UnmarshalledLaunchSpecification
} from "./_LaunchSpecification";
import {
  _SpotInstanceStatus,
  _UnmarshalledSpotInstanceStatus
} from "./_SpotInstanceStatus";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a Spot Instance request.</p>
 */
export interface _SpotInstanceRequest {
  /**
   * <p>If you specified a duration and your Spot Instance request was fulfilled, this is the fixed hourly price in effect for the Spot Instance while it runs.</p>
   */
  ActualBlockHourlyPrice?: string;

  /**
   * <p>The Availability Zone group. If you specify the same Availability Zone group for all Spot Instance requests, all Spot Instances are launched in the same Availability Zone.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>The duration for the Spot Instance, in minutes.</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: _SpotInstanceStateFault;

  /**
   * <p>The instance ID, if an instance has been launched to fulfill the Spot Instance request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance launch group. Launch groups are Spot Instances that launch together and terminate together.</p>
   */
  LaunchGroup?: string;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: _LaunchSpecification;

  /**
   * <p>The Availability Zone in which the request is launched.</p>
   */
  LaunchedAvailabilityZone?: string;

  /**
   * <p>The product description associated with the Spot Instance.</p>
   */
  ProductDescription?:
    | "Linux/UNIX"
    | "Linux/UNIX (Amazon VPC)"
    | "Windows"
    | "Windows (Amazon VPC)"
    | string;

  /**
   * <p>The ID of the Spot Instance request.</p>
   */
  SpotInstanceRequestId?: string;

  /**
   * <p>The maximum price per hour that you are willing to pay for a Spot Instance.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The state of the Spot Instance request. Spot status information helps track your Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot Status</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  State?: "open" | "active" | "closed" | "cancelled" | "failed" | string;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: _SpotInstanceStatus;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Spot Instance request type.</p>
   */
  Type?: "one-time" | "persistent" | string;

  /**
   * <p>The start date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date | string | number;

  /**
   * <p>The end date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). If this is a one-time request, it remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date is reached. The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate" | string;
}

export interface _UnmarshalledSpotInstanceRequest extends _SpotInstanceRequest {
  /**
   * <p>The date and time when the Spot Instance request was created, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z).</p>
   */
  CreateTime?: Date;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: _UnmarshalledSpotInstanceStateFault;

  /**
   * <p>Additional information for launching instances.</p>
   */
  LaunchSpecification?: _UnmarshalledLaunchSpecification;

  /**
   * <p>The status code and status message describing the Spot Instance request.</p>
   */
  Status?: _UnmarshalledSpotInstanceStatus;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The start date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). The request becomes active at this date and time.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). If this is a one-time request, it remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date is reached. The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;
}
