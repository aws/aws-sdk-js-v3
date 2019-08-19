import {
  _VolumeSpecification,
  _UnmarshalledVolumeSpecification
} from "./_VolumeSpecification";

/**
 * <p>Configuration of requested EBS block device associated with the instance group.</p>
 */
export interface _EbsBlockDevice {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification?: _VolumeSpecification;

  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;
}

export interface _UnmarshalledEbsBlockDevice extends _EbsBlockDevice {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification?: _UnmarshalledVolumeSpecification;
}
