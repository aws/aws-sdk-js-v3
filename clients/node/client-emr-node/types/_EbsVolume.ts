/**
 * <p>EBS block device that's attached to an EC2 instance.</p>
 */
export interface _EbsVolume {
  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;

  /**
   * <p>The volume identifier of the EBS volume.</p>
   */
  VolumeId?: string;
}

export type _UnmarshalledEbsVolume = _EbsVolume;
