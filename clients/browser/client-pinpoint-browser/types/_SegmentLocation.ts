import { _SetDimension, _UnmarshalledSetDimension } from "./_SetDimension";
import {
  _GPSPointDimension,
  _UnmarshalledGPSPointDimension
} from "./_GPSPointDimension";

/**
 * <p>Specifies geographical dimension settings for a segment.</p>
 */
export interface _SegmentLocation {
  /**
   * <p>The country or region code, in ISO 3166-1 alpha-2 format, for the segment.</p>
   */
  Country?: _SetDimension;

  /**
   * <p>The GPS location and range for the segment.</p>
   */
  GPSPoint?: _GPSPointDimension;
}

export interface _UnmarshalledSegmentLocation extends _SegmentLocation {
  /**
   * <p>The country or region code, in ISO 3166-1 alpha-2 format, for the segment.</p>
   */
  Country?: _UnmarshalledSetDimension;

  /**
   * <p>The GPS location and range for the segment.</p>
   */
  GPSPoint?: _UnmarshalledGPSPointDimension;
}
