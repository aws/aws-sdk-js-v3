/**
 * _GeoLocation shape
 */
export interface _GeoLocation {
  /**
   * <p>Latitude information of remote IP address.</p>
   */
  Lat?: number;

  /**
   * <p>Longitude information of remote IP address.</p>
   */
  Lon?: number;
}

export type _UnmarshalledGeoLocation = _GeoLocation;
