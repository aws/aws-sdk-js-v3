import {
  _VolumeStatusDetails,
  _UnmarshalledVolumeStatusDetails
} from "./_VolumeStatusDetails";

/**
 * <p>Describes the status of a volume.</p>
 */
export interface _VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: Array<_VolumeStatusDetails> | Iterable<_VolumeStatusDetails>;

  /**
   * <p>The status of the volume.</p>
   */
  Status?: "ok" | "impaired" | "insufficient-data" | string;
}

export interface _UnmarshalledVolumeStatusInfo extends _VolumeStatusInfo {
  /**
   * <p>The details of the volume status.</p>
   */
  Details?: Array<_UnmarshalledVolumeStatusDetails>;
}
