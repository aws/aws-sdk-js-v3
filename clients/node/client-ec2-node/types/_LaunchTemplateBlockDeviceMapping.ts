import {
  _LaunchTemplateEbsBlockDevice,
  _UnmarshalledLaunchTemplateEbsBlockDevice
} from "./_LaunchTemplateEbsBlockDevice";

/**
 * <p>Describes a block device mapping.</p>
 */
export interface _LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: _LaunchTemplateEbsBlockDevice;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;
}

export interface _UnmarshalledLaunchTemplateBlockDeviceMapping
  extends _LaunchTemplateBlockDeviceMapping {
  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: _UnmarshalledLaunchTemplateEbsBlockDevice;
}
