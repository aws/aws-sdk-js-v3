import {
  _GPSCoordinates,
  _UnmarshalledGPSCoordinates
} from "./_GPSCoordinates";

/**
 * GPS point location dimension
 */
export interface _GPSPointDimension {
  /**
   * Coordinate to measure distance from.
   */
  Coordinates?: _GPSCoordinates;

  /**
   * Range in kilometers from the coordinate.
   */
  RangeInKilometers?: number;
}

export interface _UnmarshalledGPSPointDimension extends _GPSPointDimension {
  /**
   * Coordinate to measure distance from.
   */
  Coordinates?: _UnmarshalledGPSCoordinates;
}
