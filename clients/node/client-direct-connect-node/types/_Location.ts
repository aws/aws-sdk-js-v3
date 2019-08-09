/**
 * <p>Information about an AWS Direct Connect location.</p>
 */
export interface _Location {
  /**
   * <p>The code for the location.</p>
   */
  locationCode?: string;

  /**
   * <p>The name of the location. This includes the name of the colocation partner and the physical site of the building.</p>
   */
  locationName?: string;

  /**
   * <p>The AWS Region for the location.</p>
   */
  region?: string;

  /**
   * <p>The available port speeds for the location.</p>
   */
  availablePortSpeeds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledLocation extends _Location {
  /**
   * <p>The available port speeds for the location.</p>
   */
  availablePortSpeeds?: Array<string>;
}
