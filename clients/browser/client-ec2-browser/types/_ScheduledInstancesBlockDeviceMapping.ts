import {
  _ScheduledInstancesEbs,
  _UnmarshalledScheduledInstancesEbs
} from "./_ScheduledInstancesEbs";

/**
 * <p>Describes a block device mapping for a Scheduled Instance.</p>
 */
export interface _ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: _ScheduledInstancesEbs;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered starting from 0. An instance type with two available instance store volumes can specify mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.</p> <p>Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;
}

export interface _UnmarshalledScheduledInstancesBlockDeviceMapping
  extends _ScheduledInstancesBlockDeviceMapping {
  /**
   * <p>Parameters used to set up EBS volumes automatically when the instance is launched.</p>
   */
  Ebs?: _UnmarshalledScheduledInstancesEbs;
}
