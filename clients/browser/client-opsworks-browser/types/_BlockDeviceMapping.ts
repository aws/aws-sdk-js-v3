import {
  _EbsBlockDevice,
  _UnmarshalledEbsBlockDevice
} from "./_EbsBlockDevice";

/**
 * <p>Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. </p>
 */
export interface _BlockDeviceMapping {
  /**
   * <p>The device name that is exposed to the instance, such as <code>/dev/sdh</code>. For the root device, you can use the explicit device name or you can set this parameter to <code>ROOT_DEVICE</code> and AWS OpsWorks Stacks will provide the correct device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>Suppresses the specified device included in the AMI's block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a>.</p>
   */
  VirtualName?: string;

  /**
   * <p>An <code>EBSBlockDevice</code> that defines how to configure an Amazon EBS volume when the instance is launched.</p>
   */
  Ebs?: _EbsBlockDevice;
}

export interface _UnmarshalledBlockDeviceMapping extends _BlockDeviceMapping {
  /**
   * <p>An <code>EBSBlockDevice</code> that defines how to configure an Amazon EBS volume when the instance is launched.</p>
   */
  Ebs?: _UnmarshalledEbsBlockDevice;
}
