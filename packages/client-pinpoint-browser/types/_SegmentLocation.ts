import { _SetDimension, _UnmarshalledSetDimension } from "./_SetDimension";
import {
  _GPSPointDimension,
  _UnmarshalledGPSPointDimension
} from "./_GPSPointDimension";

/**
 * Segment location dimensions
 */
export interface _SegmentLocation {
  /**
   * The country or region, in ISO 3166-1 alpha-2 format.
   */
  Country?: _SetDimension;

  /**
   * The GPS Point dimension.
   */
  GPSPoint?: _GPSPointDimension;
}

export interface _UnmarshalledSegmentLocation extends _SegmentLocation {
  /**
   * The country or region, in ISO 3166-1 alpha-2 format.
   */
  Country?: _UnmarshalledSetDimension;

  /**
   * The GPS Point dimension.
   */
  GPSPoint?: _UnmarshalledGPSPointDimension;
}
