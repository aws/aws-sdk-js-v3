/**
 * <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
 */
export interface _Location {
  /**
   * <p>The latitude.</p>
   */
  latitude: number;

  /**
   * <p>The longitude.</p>
   */
  longitude: number;
}

export type _UnmarshalledLocation = _Location;
