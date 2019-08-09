/**
 * <p>Describes a volume status.</p>
 */
export interface _VolumeStatusDetails {
  /**
   * <p>The name of the volume status.</p>
   */
  Name?: "io-enabled" | "io-performance" | string;

  /**
   * <p>The intended status of the volume status.</p>
   */
  Status?: string;
}

export type _UnmarshalledVolumeStatusDetails = _VolumeStatusDetails;
