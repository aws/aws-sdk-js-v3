import {
  _LaunchTemplateSpecification,
  _UnmarshalledLaunchTemplateSpecification
} from "./_LaunchTemplateSpecification";

/**
 * <p>Describes an EC2 instance associated with an Auto Scaling group.</p>
 */
export interface _AutoScalingInstanceDetails {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string;

  /**
   * <p>The name of the Auto Scaling group for the instance.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone: string;

  /**
   * <p>The lifecycle state for the instance.</p>
   */
  LifecycleState: string;

  /**
   * <p>The last reported health status of this instance. "Healthy" means that the instance is healthy and should remain in service. "Unhealthy" means that the instance is unhealthy and Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string;

  /**
   * <p>The launch configuration used to launch the instance. This value is not available if you attached the instance to the Auto Scaling group.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: _LaunchTemplateSpecification;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.</p>
   */
  ProtectedFromScaleIn: boolean;
}

export interface _UnmarshalledAutoScalingInstanceDetails
  extends _AutoScalingInstanceDetails {
  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: _UnmarshalledLaunchTemplateSpecification;
}
