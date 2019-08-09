import {
  _EbsInstanceBlockDeviceSpecification,
  _UnmarshalledEbsInstanceBlockDeviceSpecification
} from "./_EbsInstanceBlockDeviceSpecification";

/**
 * <p>Describes a block device mapping entry.</p>
 */
export interface _InstanceBlockDeviceMappingSpecification {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: _EbsInstanceBlockDeviceSpecification;

  /**
   * <p>suppress the specified device included in the block device mapping.</p>
   */
  NoDevice?: string;

  /**
   * <p>The virtual device name.</p>
   */
  VirtualName?: string;
}

export interface _UnmarshalledInstanceBlockDeviceMappingSpecification
  extends _InstanceBlockDeviceMappingSpecification {
  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: _UnmarshalledEbsInstanceBlockDeviceSpecification;
}
