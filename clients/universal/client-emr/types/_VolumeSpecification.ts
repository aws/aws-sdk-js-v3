/**
 * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be requested for the EBS volume attached to an EC2 instance in the cluster.</p>
 */
export interface _VolumeSpecification {
  /**
   * <p>The volume type. Volume types supported are gp2, io1, standard.</p>
   */
  VolumeType: string;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports.</p>
   */
  Iops?: number;

  /**
   * <p>The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.</p>
   */
  SizeInGB: number;
}

export type _UnmarshalledVolumeSpecification = _VolumeSpecification;
