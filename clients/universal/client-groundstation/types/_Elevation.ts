/**
 * <p>Elevation angle of the satellite in the sky during a contact.</p>
 */
export interface _Elevation {
  /**
   * <p>Elevation angle units.</p>
   */
  unit: "DEGREE_ANGLE" | "RADIAN" | string;

  /**
   * <p>Elevation angle value.</p>
   */
  value: number;
}

export type _UnmarshalledElevation = _Elevation;
