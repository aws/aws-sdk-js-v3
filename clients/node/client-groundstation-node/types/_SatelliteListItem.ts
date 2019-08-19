/**
 * <p>Item in a list of satellites.</p>
 */
export interface _SatelliteListItem {
  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>ID of a satellite.</p>
   */
  satelliteId?: string;
}

export type _UnmarshalledSatelliteListItem = _SatelliteListItem;
