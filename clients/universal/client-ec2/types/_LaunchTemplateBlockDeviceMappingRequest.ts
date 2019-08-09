import {
  _LaunchTemplateEbsBlockDeviceRequest,
  _UnmarshalledLaunchTemplateEbsBlockDeviceRequest
} from "./_LaunchTemplateEbsBlockDeviceRequest";

/**
 * <p>Describes a block device mapping.</p>
 */
export interface _LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.</p>
   */
  VirtualName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: _LaunchTemplateEbsBlockDeviceRequest;

  /**
   * <p>Suppresses the specified device included in the block device mapping of the AMI.</p>
   */
  NoDevice?: string;
}

export interface _UnmarshalledLaunchTemplateBlockDeviceMappingRequest
  extends _LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: _UnmarshalledLaunchTemplateEbsBlockDeviceRequest;
}
