/**
 * <p>Object that describes the frequency bandwidth.</p>
 */
export interface _FrequencyBandwidth {
  /**
   * <p>Frequency bandwidth units.</p>
   */
  units: "GHz" | "MHz" | "kHz" | string;

  /**
   * <p>Frequency bandwidth value.</p>
   */
  value: number;
}

export type _UnmarshalledFrequencyBandwidth = _FrequencyBandwidth;
