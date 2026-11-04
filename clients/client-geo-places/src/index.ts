// smithy-typescript generated code
/* eslint-disable */
/**
 * The Places API enables powerful location search and geocoding capabilities for your applications, offering global coverage with rich, detailed information. Key features include:
 *
 * - Forward and reverse geocoding for addresses and coordinates. See [Geocode](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Geocode.html) and [ReverseGeocode](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_ReverseGeocode.html).
 * - Comprehensive place searches with detailed information. See [SearchText](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_SearchText.html), [SearchNearby](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_SearchNearby.html), and [GetPlace](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_GetPlace.html). Place information you can find include:
 *
 *   - Business names and addresses
 *   - Contact information
 *   - Hours of operation
 *   - Points of Interest (POI) categories
 *   - Food types for restaurants
 *   - Chain affiliation for relevant businesses
 * - Address and place completion as users type, enhancing input efficiency by completing partial queries with valid addresses. See [Autocomplete](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Autocomplete.html).
 * - Intelligent place and query recommendation based on user's input or context, returning relevant places, points of interest, query terms, or search categories. See [Suggest](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_Suggest.html).
 * - Global data coverage with a wide range of POI categories.
 * - Regular data updates to ensure accuracy and relevance.
 * - Bulk address validation for verifying and standardizing large volumes of addresses in a single operation using [Amazon Location Service Jobs](https://docs.aws.amazon.com/location/latest/APIReference/Welcome.html#Welcome_Amazon_Location_Service_Jobs).
 *
 * @packageDocumentation
 */
export * from "./GeoPlacesClient";
export * from "./GeoPlaces";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GeoPlacesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { GeoPlacesServiceException } from "./models/GeoPlacesServiceException";
