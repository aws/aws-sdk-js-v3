// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AutocompleteCommand,
  AutocompleteCommandInput,
  AutocompleteCommandOutput,
} from "./commands/AutocompleteCommand";
import { GeocodeCommand, GeocodeCommandInput, GeocodeCommandOutput } from "./commands/GeocodeCommand";
import { GetPlaceCommand, GetPlaceCommandInput, GetPlaceCommandOutput } from "./commands/GetPlaceCommand";
import {
  ReverseGeocodeCommand,
  ReverseGeocodeCommandInput,
  ReverseGeocodeCommandOutput,
} from "./commands/ReverseGeocodeCommand";
import {
  SearchNearbyCommand,
  SearchNearbyCommandInput,
  SearchNearbyCommandOutput,
} from "./commands/SearchNearbyCommand";
import { SearchTextCommand, SearchTextCommandInput, SearchTextCommandOutput } from "./commands/SearchTextCommand";
import { SuggestCommand, SuggestCommandInput, SuggestCommandOutput } from "./commands/SuggestCommand";
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

export interface GeoPlaces {
  /**
   * @see {@link AutocompleteCommand}
   */
  autocomplete(
    args: AutocompleteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AutocompleteCommandOutput>;
  autocomplete(
    args: AutocompleteCommandInput,
    cb: (err: any, data?: AutocompleteCommandOutput) => void
  ): void;
  autocomplete(
    args: AutocompleteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AutocompleteCommandOutput) => void
  ): void;

  /**
   * @see {@link GeocodeCommand}
   */
  geocode(): Promise<GeocodeCommandOutput>;
  geocode(
    args: GeocodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GeocodeCommandOutput>;
  geocode(
    args: GeocodeCommandInput,
    cb: (err: any, data?: GeocodeCommandOutput) => void
  ): void;
  geocode(
    args: GeocodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GeocodeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaceCommand}
   */
  getPlace(
    args: GetPlaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlaceCommandOutput>;
  getPlace(
    args: GetPlaceCommandInput,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;
  getPlace(
    args: GetPlaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ReverseGeocodeCommand}
   */
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReverseGeocodeCommandOutput>;
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    cb: (err: any, data?: ReverseGeocodeCommandOutput) => void
  ): void;
  reverseGeocode(
    args: ReverseGeocodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReverseGeocodeCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchNearbyCommand}
   */
  searchNearby(
    args: SearchNearbyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchNearbyCommandOutput>;
  searchNearby(
    args: SearchNearbyCommandInput,
    cb: (err: any, data?: SearchNearbyCommandOutput) => void
  ): void;
  searchNearby(
    args: SearchNearbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchNearbyCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTextCommand}
   */
  searchText(): Promise<SearchTextCommandOutput>;
  searchText(
    args: SearchTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTextCommandOutput>;
  searchText(
    args: SearchTextCommandInput,
    cb: (err: any, data?: SearchTextCommandOutput) => void
  ): void;
  searchText(
    args: SearchTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTextCommandOutput) => void
  ): void;

  /**
   * @see {@link SuggestCommand}
   */
  suggest(
    args: SuggestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuggestCommandOutput>;
  suggest(
    args: SuggestCommandInput,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;
  suggest(
    args: SuggestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuggestCommandOutput) => void
  ): void;
}

/**
 * <p> The Places API enables powerful location search and geocoding capabilities for your applications, offering global coverage with rich, detailed information. Key features include: </p> <ul> <li> <p>Forward and reverse geocoding for addresses and coordinates</p> </li> <li> <p>Comprehensive place searches with detailed information, including:</p> <ul> <li> <p>Business names and addresses</p> </li> <li> <p>Contact information</p> </li> <li> <p>Hours of operation</p> </li> <li> <p>POI (Points of Interest) categories</p> </li> <li> <p>Food types for restaurants</p> </li> <li> <p>Chain affiliation for relevant businesses</p> </li> </ul> </li> <li> <p>Global data coverage with a wide range of POI categories</p> </li> <li> <p>Regular data updates to ensure accuracy and relevance</p> </li> </ul>
 * @public
 */
export class GeoPlaces extends GeoPlacesClient implements GeoPlaces {}
createAggregatedClient(commands, GeoPlaces);
