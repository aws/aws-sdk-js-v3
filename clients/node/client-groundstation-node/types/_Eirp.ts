/**
 * <p>Object that represents EIRP.</p>
 */
export interface _Eirp {
  /**
   * <p>Units of an EIRP.</p>
   */
  units: "dBW" | string;

  /**
   * <p>Value of an EIRP.</p>
   */
  value: number;
}

export type _UnmarshalledEirp = _Eirp;
