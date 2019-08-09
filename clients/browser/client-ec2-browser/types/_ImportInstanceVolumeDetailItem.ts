import {
  _DiskImageDescription,
  _UnmarshalledDiskImageDescription
} from "./_DiskImageDescription";
import {
  _DiskImageVolumeDescription,
  _UnmarshalledDiskImageVolumeDescription
} from "./_DiskImageVolumeDescription";

/**
 * <p>Describes an import volume task.</p>
 */
export interface _ImportInstanceVolumeDetailItem {
  /**
   * <p>The Availability Zone where the resulting instance will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: _DiskImageDescription;

  /**
   * <p>The status of the import of this particular disk image.</p>
   */
  Status?: string;

  /**
   * <p>The status information or errors related to the disk image.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The volume.</p>
   */
  Volume?: _DiskImageVolumeDescription;
}

export interface _UnmarshalledImportInstanceVolumeDetailItem
  extends _ImportInstanceVolumeDetailItem {
  /**
   * <p>The image.</p>
   */
  Image?: _UnmarshalledDiskImageDescription;

  /**
   * <p>The volume.</p>
   */
  Volume?: _UnmarshalledDiskImageVolumeDescription;
}
