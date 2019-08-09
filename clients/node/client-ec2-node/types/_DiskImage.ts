import {
  _DiskImageDetail,
  _UnmarshalledDiskImageDetail
} from "./_DiskImageDetail";
import { _VolumeDetail, _UnmarshalledVolumeDetail } from "./_VolumeDetail";

/**
 * <p>Describes a disk image.</p>
 */
export interface _DiskImage {
  /**
   * <p>A description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>Information about the disk image.</p>
   */
  Image?: _DiskImageDetail;

  /**
   * <p>Information about the volume.</p>
   */
  Volume?: _VolumeDetail;
}

export interface _UnmarshalledDiskImage extends _DiskImage {
  /**
   * <p>Information about the disk image.</p>
   */
  Image?: _UnmarshalledDiskImageDetail;

  /**
   * <p>Information about the volume.</p>
   */
  Volume?: _UnmarshalledVolumeDetail;
}
