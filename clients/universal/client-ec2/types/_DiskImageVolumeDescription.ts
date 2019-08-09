/**
 * <p>Describes a disk image volume.</p>
 */
export interface _DiskImageVolumeDescription {
  /**
   * <p>The volume identifier.</p>
   */
  Id?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  Size?: number;
}

export type _UnmarshalledDiskImageVolumeDescription = _DiskImageVolumeDescription;
