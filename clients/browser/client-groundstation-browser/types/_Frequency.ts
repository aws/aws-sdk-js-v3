/**
 * <p>Object that describes the frequency.</p>
 */
export interface _Frequency {
  /**
   * <p>Frequency units.</p>
   */
  units: "GHz" | "MHz" | "kHz" | string;

  /**
   * <p>Frequency value.</p>
   */
  value: number;
}

export type _UnmarshalledFrequency = _Frequency;
