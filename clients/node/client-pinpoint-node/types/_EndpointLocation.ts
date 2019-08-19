/**
 * <p>Specifies geographic information about an endpoint.</p>
 */
export interface _EndpointLocation {
  /**
   * <p>The name of the city where the endpoint is located.</p>
   */
  City?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.</p>
   */
  Country?: string;

  /**
   * <p>The latitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Latitude?: number;

  /**
   * <p>The longitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Longitude?: number;

  /**
   * <p>The postal or ZIP code for the area where the endpoint is located.</p>
   */
  PostalCode?: string;

  /**
   * <p>The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.</p>
   */
  Region?: string;
}

export type _UnmarshalledEndpointLocation = _EndpointLocation;
