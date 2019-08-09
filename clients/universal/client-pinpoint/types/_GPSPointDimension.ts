import {
  _GPSCoordinates,
  _UnmarshalledGPSCoordinates
} from "./_GPSCoordinates";

/**
 * <p>Specifies GPS-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface _GPSPointDimension {
  /**
   * <p>The GPS coordinates to measure distance from.</p>
   */
  Coordinates: _GPSCoordinates;

  /**
   * <p>The range, in kilometers, from the GPS coordinates.</p>
   */
  RangeInKilometers?: number;
}

export interface _UnmarshalledGPSPointDimension extends _GPSPointDimension {
  /**
   * <p>The GPS coordinates to measure distance from.</p>
   */
  Coordinates: _UnmarshalledGPSCoordinates;
}
