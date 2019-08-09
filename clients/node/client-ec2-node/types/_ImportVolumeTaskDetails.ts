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
export interface _ImportVolumeTaskDetails {
  /**
   * <p>The Availability Zone where the resulting volume will reside.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of bytes converted so far.</p>
   */
  BytesConverted?: number;

  /**
   * <p>The description you provided when starting the import volume task.</p>
   */
  Description?: string;

  /**
   * <p>The image.</p>
   */
  Image?: _DiskImageDescription;

  /**
   * <p>The volume.</p>
   */
  Volume?: _DiskImageVolumeDescription;
}

export interface _UnmarshalledImportVolumeTaskDetails
  extends _ImportVolumeTaskDetails {
  /**
   * <p>The image.</p>
   */
  Image?: _UnmarshalledDiskImageDescription;

  /**
   * <p>The volume.</p>
   */
  Volume?: _UnmarshalledDiskImageVolumeDescription;
}
