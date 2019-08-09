import {
  _ScheduledInstancesBlockDeviceMapping,
  _UnmarshalledScheduledInstancesBlockDeviceMapping
} from "./_ScheduledInstancesBlockDeviceMapping";
import {
  _ScheduledInstancesIamInstanceProfile,
  _UnmarshalledScheduledInstancesIamInstanceProfile
} from "./_ScheduledInstancesIamInstanceProfile";
import {
  _ScheduledInstancesMonitoring,
  _UnmarshalledScheduledInstancesMonitoring
} from "./_ScheduledInstancesMonitoring";
import {
  _ScheduledInstancesNetworkInterface,
  _UnmarshalledScheduledInstancesNetworkInterface
} from "./_ScheduledInstancesNetworkInterface";
import {
  _ScheduledInstancesPlacement,
  _UnmarshalledScheduledInstancesPlacement
} from "./_ScheduledInstancesPlacement";

/**
 * <p>Describes the launch specification for a Scheduled Instance.</p> <p>If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either <code>SubnetId</code> or <code>NetworkInterface</code>.</p>
 */
export interface _ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?:
    | Array<_ScheduledInstancesBlockDeviceMapping>
    | Iterable<_ScheduledInstancesBlockDeviceMapping>;

  /**
   * <p>Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.</p> <p>Default: <code>false</code> </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _ScheduledInstancesIamInstanceProfile;

  /**
   * <p>The ID of the Amazon Machine Image (AMI).</p>
   */
  ImageId: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: _ScheduledInstancesMonitoring;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?:
    | Array<_ScheduledInstancesNetworkInterface>
    | Iterable<_ScheduledInstancesNetworkInterface>;

  /**
   * <p>The placement information.</p>
   */
  Placement?: _ScheduledInstancesPlacement;

  /**
   * <p>The ID of the RAM disk.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The base64-encoded MIME user data.</p>
   */
  UserData?: string;
}

export interface _UnmarshalledScheduledInstancesLaunchSpecification
  extends _ScheduledInstancesLaunchSpecification {
  /**
   * <p>The block device mapping entries.</p>
   */
  BlockDeviceMappings?: Array<
    _UnmarshalledScheduledInstancesBlockDeviceMapping
  >;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _UnmarshalledScheduledInstancesIamInstanceProfile;

  /**
   * <p>Enable or disable monitoring for the instances.</p>
   */
  Monitoring?: _UnmarshalledScheduledInstancesMonitoring;

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: Array<_UnmarshalledScheduledInstancesNetworkInterface>;

  /**
   * <p>The placement information.</p>
   */
  Placement?: _UnmarshalledScheduledInstancesPlacement;

  /**
   * <p>The IDs of the security groups.</p>
   */
  SecurityGroupIds?: Array<string>;
}
