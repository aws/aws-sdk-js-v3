import { _Ebs, _UnmarshalledEbs } from "./_Ebs";

/**
 * <p>Describes a block device mapping.</p>
 */
export interface _BlockDeviceMapping {
  /**
   * <p>The name of the virtual device (for example, <code>ephemeral0</code>).</p>
   */
  VirtualName?: string;

  /**
   * <p>The device name exposed to the EC2 instance (for example, <code>/dev/sdh</code> or <code>xvdh</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html">Device Naming on Linux Instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  DeviceName: string;

  /**
   * <p>The information about the Amazon EBS volume.</p>
   */
  Ebs?: _Ebs;

  /**
   * <p>Suppresses a device mapping.</p> <p>If this parameter is true for the root device, the instance might fail the EC2 health check. In that case, Amazon EC2 Auto Scaling launches a replacement instance.</p>
   */
  NoDevice?: boolean;
}

export interface _UnmarshalledBlockDeviceMapping extends _BlockDeviceMapping {
  /**
   * <p>The information about the Amazon EBS volume.</p>
   */
  Ebs?: _UnmarshalledEbs;
}
