/**
 * <p>Describes a storage volume recovery point object.</p>
 */
export interface _VolumeRecoveryPointInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The size of the volume in bytes.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>The size of the data stored on the volume in bytes.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>
   */
  VolumeUsageInBytes?: number;

  /**
   * <p>The time the recovery point was taken.</p>
   */
  VolumeRecoveryPointTime?: string;
}

export type _UnmarshalledVolumeRecoveryPointInfo = _VolumeRecoveryPointInfo;
