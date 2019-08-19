import {
  _LaunchTemplateSpecification,
  _UnmarshalledLaunchTemplateSpecification
} from "./_LaunchTemplateSpecification";

/**
 * <p>Describes an EC2 instance.</p>
 */
export interface _Instance {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string;

  /**
   * <p>The Availability Zone in which the instance is running.</p>
   */
  AvailabilityZone: string;

  /**
   * <p>A description of the current lifecycle state. The <code>Quarantined</code> state is not used.</p>
   */
  LifecycleState:
    | "Pending"
    | "Pending:Wait"
    | "Pending:Proceed"
    | "Quarantined"
    | "InService"
    | "Terminating"
    | "Terminating:Wait"
    | "Terminating:Proceed"
    | "Terminated"
    | "Detaching"
    | "Detached"
    | "EnteringStandby"
    | "Standby"
    | string;

  /**
   * <p>The last reported health status of the instance. "Healthy" means that the instance is healthy and should remain in service. "Unhealthy" means that the instance is unhealthy and that Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string;

  /**
   * <p>The launch configuration associated with the instance.</p>
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

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: _UnmarshalledLaunchTemplateSpecification;
}
