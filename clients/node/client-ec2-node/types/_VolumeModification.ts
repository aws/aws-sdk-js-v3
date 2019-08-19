/**
 * <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
 */
export interface _VolumeModification {
  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The current modification state. The modification state is null for unmodified volumes.</p>
   */
  ModificationState?:
    | "modifying"
    | "optimizing"
    | "completed"
    | "failed"
    | string;

  /**
   * <p>A status message about the modification progress or failure.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The target size of the volume, in GiB.</p>
   */
  TargetSize?: number;

  /**
   * <p>The target IOPS rate of the volume.</p>
   */
  TargetIops?: number;

  /**
   * <p>The target EBS volume type of the volume.</p>
   */
  TargetVolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;

  /**
   * <p>The original size of the volume.</p>
   */
  OriginalSize?: number;

  /**
   * <p>The original IOPS rate of the volume.</p>
   */
  OriginalIops?: number;

  /**
   * <p>The original EBS volume type of the volume.</p>
   */
  OriginalVolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;

  /**
   * <p>The modification progress, from 0 to 100 percent complete.</p>
   */
  Progress?: number;

  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date | string | number;
}

export interface _UnmarshalledVolumeModification extends _VolumeModification {
  /**
   * <p>The modification start time.</p>
   */
  StartTime?: Date;

  /**
   * <p>The modification completion or failure time.</p>
   */
  EndTime?: Date;
}
