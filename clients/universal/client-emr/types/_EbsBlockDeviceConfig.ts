import {
  _VolumeSpecification,
  _UnmarshalledVolumeSpecification
} from "./_VolumeSpecification";

/**
 * <p>Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.</p>
 */
export interface _EbsBlockDeviceConfig {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification: _VolumeSpecification;

  /**
   * <p>Number of EBS volumes with a specific volume configuration that will be associated with every instance in the instance group</p>
   */
  VolumesPerInstance?: number;
}

export interface _UnmarshalledEbsBlockDeviceConfig
  extends _EbsBlockDeviceConfig {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification: _UnmarshalledVolumeSpecification;
}
