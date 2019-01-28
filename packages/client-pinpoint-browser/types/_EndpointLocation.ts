/**
 * Location data for the endpoint.
 */
export interface _EndpointLocation {
    /**
     * The city where the endpoint is located.
     */
    City?: string;

    /**
     * The two-letter code for the country or region of the endpoint. Specified as an ISO 3166-1 alpha-2 code, such as "US" for the United States.
     */
    Country?: string;

    /**
     * The latitude of the endpoint location, rounded to one decimal place.
     */
    Latitude?: number;

    /**
     * The longitude of the endpoint location, rounded to one decimal place.
     */
    Longitude?: number;

    /**
     * The postal code or zip code of the endpoint.
     */
    PostalCode?: string;

    /**
     * The region of the endpoint location. For example, in the United States, this corresponds to a state.
     */
    Region?: string;
}

export type _UnmarshalledEndpointLocation = _EndpointLocation;