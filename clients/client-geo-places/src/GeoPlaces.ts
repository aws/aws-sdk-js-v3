// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type AutocompleteCommandInput,
  type AutocompleteCommandOutput,
  AutocompleteCommand,
} from "./commands/AutocompleteCommand";
import { type GeocodeCommandInput, type GeocodeCommandOutput, GeocodeCommand } from "./commands/GeocodeCommand";
import { type GetPlaceCommandInput, type GetPlaceCommandOutput, GetPlaceCommand } from "./commands/GetPlaceCommand";
import {
  type ReverseGeocodeCommandInput,
  type ReverseGeocodeCommandOutput,
  ReverseGeocodeCommand,
} from "./commands/ReverseGeocodeCommand";
import {
  type SearchNearbyCommandInput,
  type SearchNearbyCommandOutput,
  SearchNearbyCommand,
} from "./commands/SearchNearbyCommand";
import {
  type SearchTextCommandInput,
  type SearchTextCommandOutput,
  SearchTextCommand,
} from "./commands/SearchTextCommand";
import { type SuggestCommandInput, type SuggestCommandOutput, SuggestCommand } from "./commands/SuggestCommand";
import { GeoPlacesClient } from "./GeoPlacesClient";

const commands = {
  AutocompleteCommand,
  GeocodeCommand,
  GetPlaceCommand,
  ReverseGeocodeCommand,
  SearchNearbyCommand,
  SearchTextCommand,
  SuggestCommand,
};

/**
 * @public
 */
export interface GeoPlacesRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface GeoPlaces {
  /**
   * @see {@link AutocompleteCommand}
   */
  autocomplete(
    args: AutocompleteCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<AutocompleteCommandOutput>;
  autocomplete(
    args: AutocompleteCommandInput,
    cb: (err: any, data?: AutocompleteCommandOutput) => void
  ): void;
  autocomplete(
    args: AutocompleteCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: AutocompleteCommandOutput) => void
  ): void;

  /**
   * @see {@link GeocodeCommand}
   */
  geocode(): Promise<GeocodeCommandOutput>;
  geocode(
    args: GeocodeCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<GeocodeCommandOutput>;
  geocode(
    args: GeocodeCommandInput,
    cb: (err: any, data?: GeocodeCommandOutput) => void
  ): void;
  geocode(
    args: GeocodeCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: GeocodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaceCommand}
   */
  getPlace(
    args: GetPlaceCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<GetPlaceCommandOutput>;
  getPlace(
    args: GetPlaceCommandInput,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;
  getPlace(
    args: GetPlaceCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ReverseGeocodeCommand}
   */
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<ReverseGeocodeCommandOutput>;
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    cb: (err: any, data?: ReverseGeocodeCommandOutput) => void
  ): void;
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: ReverseGeocodeCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchNearbyCommand}
   */
  searchNearby(
    args: SearchNearbyCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<SearchNearbyCommandOutput>;
  searchNearby(
    args: SearchNearbyCommandInput,
    cb: (err: any, data?: SearchNearbyCommandOutput) => void
  ): void;
  searchNearby(
    args: SearchNearbyCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: SearchNearbyCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTextCommand}
   */
  searchText(): Promise<SearchTextCommandOutput>;
  searchText(
    args: SearchTextCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<SearchTextCommandOutput>;
  searchText(
    args: SearchTextCommandInput,
    cb: (err: any, data?: SearchTextCommandOutput) => void
  ): void;
  searchText(
    args: SearchTextCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: SearchTextCommandOutput) => void
  ): void;

  /**
   * @see {@link SuggestCommand}
   */
  suggest(
    args: SuggestCommandInput,
    options?: GeoPlacesRequestOptions
  ): Promise<SuggestCommandOutput>;
  suggest(
    args: SuggestCommandInput,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;
  suggest(
    args: SuggestCommandInput,
    options: GeoPlacesRequestOptions,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;
}

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
 * @public
 */
export class GeoPlaces extends GeoPlacesClient implements GeoPlaces {}
createAggregatedClient(commands, GeoPlaces);
