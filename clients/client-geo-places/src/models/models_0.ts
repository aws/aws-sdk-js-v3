// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GeoPlacesServiceException as __BaseException } from "./GeoPlacesServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Position of the access point represented by longitude and latitude for a vehicle.</p>
 * @public
 */
export interface AccessPoint {
  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;
}

/**
 * <p>Category of the <code>Place</code> returned. </p>
 * @public
 */
export interface Category {
  /**
   * <p>The category ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The category name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Localized name of the category type.</p>
   * @public
   */
  LocalizedName?: string | undefined;

  /**
   * <p>Boolean which indicates if this category is the primary offered by the place.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * <p>Indicates if the access location is restricted. Index correlates to that of an access point and indicates if access through this point has some form of restriction. </p>
 * @public
 */
export interface AccessRestriction {
  /**
   * <p>The restriction.</p>
   * @public
   */
  Restricted?: boolean | undefined;

  /**
   * <p>Categories of results that results must belong too.</p>
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
 * @public
 */
export interface Country {
  /**
   * <p>Country, represented by its alpha 2-character code. </p>
   * @public
   */
  Code2?: string | undefined;

  /**
   * <p>Country, represented by its alpha t-character code. </p>
   * @public
   */
  Code3?: string | undefined;

  /**
   * <p>Name of the country.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The region or state results should be to be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>. </p>
 * @public
 */
export interface Region {
  /**
   * <p>Abbreviated code for a the state, province or region of the country. </p> <p>Example: <code>BC</code>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>Name for a the state, province, or region of the country. </p> <p>Example: <code>British Columbia</code>. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Components that correspond to secondary identifiers on an address. The only component type supported currently is Unit.</p>
 * @public
 */
export interface SecondaryAddressComponent {
  /**
   * <p>Number that uniquely identifies a secondary address.</p>
   * @public
   */
  Number: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TypePlacement = {
  AFTER_BASE_NAME: "AfterBaseName",
  BEFORE_BASE_NAME: "BeforeBaseName",
} as const;

/**
 * @public
 */
export type TypePlacement = (typeof TypePlacement)[keyof typeof TypePlacement];

/**
 * <p>Components of a street.</p>
 * @public
 */
export interface StreetComponents {
  /**
   * <p>Base name part of the street name. </p> <p>Example: Younge from the "Younge street".</p>
   * @public
   */
  BaseName?: string | undefined;

  /**
   * <p>Street type part of the street name. </p> <p>Example: <code>"avenue"</code>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Defines if the street type is before or after the base name.</p>
   * @public
   */
  TypePlacement?: TypePlacement | undefined;

  /**
   * <p>Defines a separator character such as <code>""</code> or <code>" "</code> between the base name and type.</p>
   * @public
   */
  TypeSeparator?: string | undefined;

  /**
   * <p>A prefix is a directional identifier that precedes, but is not included in, the base name of a road. </p> <p>Example: E for East.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A suffix is a directional identifier that follows, but is not included in, the base name of a road. </p> <p>Example W for West.</p>
   * @public
   */
  Suffix?: string | undefined;

  /**
   * <p>Indicates the official directional identifiers assigned to highways.</p>
   * @public
   */
  Direction?: string | undefined;

  /**
   * <p>A <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;
}

/**
 * <p>The sub-region.</p>
 * @public
 */
export interface SubRegion {
  /**
   * <p>Abbreviated code for the county or sub-region.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>Name for the county or sub-region.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The place address.</p>
 * @public
 */
export interface Address {
  /**
   * <p>Assembled address value built out of the address components, according to the regional postal rules. This is the correctly formatted address.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The country component of the address.</p>
   * @public
   */
  Country?: Country | undefined;

  /**
   * <p>The region or state results should be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>.</p>
   * @public
   */
  Region?: Region | undefined;

  /**
   * <p>The sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: SubRegion | undefined;

  /**
   * <p>The city or locality of the address.</p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: string | undefined;

  /**
   * <p>The district or division of a locality associated with this address.</p>
   * @public
   */
  District?: string | undefined;

  /**
   * <p>A subdivision of a district. </p> <p>Example: <code>Minden-Lübbecke</code>.</p>
   * @public
   */
  SubDistrict?: string | undefined;

  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess. </p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>Name of the block. </p> <p>Example: <code>Sunny Mansion 203 block: 2 Chome</code> </p>
   * @public
   */
  Block?: string | undefined;

  /**
   * <p>Name of sub-block. </p> <p>Example: <code>Sunny Mansion 203 sub-block: 4</code> </p>
   * @public
   */
  SubBlock?: string | undefined;

  /**
   * <p>Name of the streets in the intersection. </p> <p>Example: <code>["Friedrichstraße","Unter den Linden"]</code> </p>
   * @public
   */
  Intersection?: string[] | undefined;

  /**
   * <p>The name of the street results should be present in.</p>
   * @public
   */
  Street?: string | undefined;

  /**
   * <p>Components of the street. </p> <p>Example: Younge from the "Younge street".</p>
   * @public
   */
  StreetComponents?: StreetComponents[] | undefined;

  /**
   * <p>The number that identifies an address within a street.</p>
   * @public
   */
  AddressNumber?: string | undefined;

  /**
   * <p>The name of the building at the address.</p>
   * @public
   */
  Building?: string | undefined;

  /**
   * <p>Components that correspond to secondary identifiers on an Address. Secondary address components include information such as Suite or Unit Number, Building, or Floor.</p>
   * @public
   */
  SecondaryAddressComponents?: SecondaryAddressComponent[] | undefined;
}

/**
 * <p>Match score for a secondary address component in the result.</p>
 * @public
 */
export interface SecondaryAddressComponentMatchScore {
  /**
   * <p>Match score for the secondary address number.</p>
   * @public
   */
  Number?: number | undefined;
}

/**
 * <p>Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.</p>
 * @public
 */
export interface AddressComponentMatchScores {
  /**
   * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
   * @public
   */
  Country?: number | undefined;

  /**
   * <p>The region or state results should be to be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>.</p>
   * @public
   */
  Region?: number | undefined;

  /**
   * <p>The sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: number | undefined;

  /**
   * <p>The city or locality results should be present in. </p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: number | undefined;

  /**
   * <p>The district or division of a city the results should be present in.</p>
   * @public
   */
  District?: number | undefined;

  /**
   * <p>A subdivision of a district. </p> <p>Example: <code>Minden-Lübbecke</code> </p>
   * @public
   */
  SubDistrict?: number | undefined;

  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess. </p>
   * @public
   */
  PostalCode?: number | undefined;

  /**
   * <p>Name of the block. </p> <p>Example: <code>Sunny Mansion 203 block: 2 Chome</code> </p>
   * @public
   */
  Block?: number | undefined;

  /**
   * <p>Name of sub-block. </p> <p>Example: <code>Sunny Mansion 203 sub-block: 4</code> </p>
   * @public
   */
  SubBlock?: number | undefined;

  /**
   * <p>Name of the streets in the intersection. </p> <p>Example: <code>["Friedrichstraße","Unter den Linden"]</code> </p>
   * @public
   */
  Intersection?: number[] | undefined;

  /**
   * <p>The house number or address results should have. </p>
   * @public
   */
  AddressNumber?: number | undefined;

  /**
   * <p>The name of the building at the address.</p>
   * @public
   */
  Building?: number | undefined;

  /**
   * <p>Match scores for the secondary address components in the result.</p>
   * @public
   */
  SecondaryAddressComponents?: SecondaryAddressComponentMatchScore[] | undefined;
}

/**
 * <p>How to pronounce the various components of the address or place.</p>
 * @public
 */
export interface PhonemeTranscription {
  /**
   * <p>Value which indicates how to pronounce the value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>Boolean which indicates if it the preferred pronunciation.</p>
   * @public
   */
  Preferred?: boolean | undefined;
}

/**
 * <p>How to pronounce the various components of the address or place.</p>
 * @public
 */
export interface AddressComponentPhonemes {
  /**
   * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
   * @public
   */
  Country?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the region or state results should be to be present in.</p>
   * @public
   */
  Region?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the city or locality results should be present in. </p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the district or division of a city results should be present in.</p>
   * @public
   */
  District?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the sub-district or division of a city results should be present in.</p>
   * @public
   */
  SubDistrict?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the name of the block.</p>
   * @public
   */
  Block?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the name of the sub-block.</p>
   * @public
   */
  SubBlock?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the name of the street results should be present in.</p>
   * @public
   */
  Street?: PhonemeTranscription[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AutocompleteAdditionalFeature = {
  CORE: "Core",
} as const;

/**
 * @public
 */
export type AutocompleteAdditionalFeature =
  (typeof AutocompleteAdditionalFeature)[keyof typeof AutocompleteAdditionalFeature];

/**
 * <p>The <code>Circle</code> that all results must be in. </p>
 * @public
 */
export interface FilterCircle {
  /**
   * <p>The center position, in longitude and latitude, of the <code>FilterCircle</code>.</p>
   * @public
   */
  Center: number[] | undefined;

  /**
   * <p>The radius, in meters, of the <code>FilterCircle</code>.</p>
   * @public
   */
  Radius: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AutocompleteFilterPlaceType = {
  LOCALITY: "Locality",
  POSTAL_CODE: "PostalCode",
} as const;

/**
 * @public
 */
export type AutocompleteFilterPlaceType =
  (typeof AutocompleteFilterPlaceType)[keyof typeof AutocompleteFilterPlaceType];

/**
 * <p>Autocomplete structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
 * @public
 */
export interface AutocompleteFilter {
  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>The <code>Circle</code> that all results must be in. </p>
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * <p> A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.</p>
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * <p>The included place types.</p>
   * @public
   */
  IncludePlaceTypes?: AutocompleteFilterPlaceType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AutocompleteIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
} as const;

/**
 * @public
 */
export type AutocompleteIntendedUse = (typeof AutocompleteIntendedUse)[keyof typeof AutocompleteIntendedUse];

/**
 * @public
 * @enum
 */
export const PostalCodeMode = {
  ENUMERATE_SPANNED_LOCALITIES: "EnumerateSpannedLocalities",
  MERGE_ALL_SPANNED_LOCALITIES: "MergeAllSpannedLocalities",
} as const;

/**
 * @public
 */
export type PostalCodeMode = (typeof PostalCodeMode)[keyof typeof PostalCodeMode];

/**
 * @public
 */
export interface AutocompleteRequest {
  /**
   * <p>The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryText: string | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The position in longitude and latitude that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in <code>[lng, lat]</code> and in the WSG84 format.</p> <note> <p>The fields <code>BiasPosition</code>, <code>FilterBoundingBox</code>, and <code>FilterCircle</code> are mutually exclusive.</p> </note>
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: AutocompleteFilter | undefined;

  /**
   * <p>The <code>PostalCodeMode</code> affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value <code>EnumerateSpannedLocalities</code>, all cities in that postal code are returned.</p>
   * @public
   */
  PostalCodeMode?: PostalCodeMode | undefined;

  /**
   * <p>A list of optional additional parameters that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: AutocompleteAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p> <p>The following political views are currently supported:</p> <ul> <li> <p> <code>ARG</code>: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands</p> </li> <li> <p> <code>EGY</code>: Egypt's view on Bir Tawil</p> </li> <li> <p> <code>IND</code>: India's view on Gilgit-Baltistan</p> </li> <li> <p> <code>KEN</code>: Kenya's view on the Ilemi Triangle</p> </li> <li> <p> <code>MAR</code>: Morocco's view on Western Sahara</p> </li> <li> <p> <code>RUS</code>: Russia's view on Crimea</p> </li> <li> <p> <code>SDN</code>: Sudan's view on the Halaib Triangle</p> </li> <li> <p> <code>SRB</code>: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands</p> </li> <li> <p> <code>SUR</code>: Suriname's view on the Courantyne Headwaters and Lawa Headwaters</p> </li> <li> <p> <code>SYR</code>: Syria's view on the Golan Heights</p> </li> <li> <p> <code>TUR</code>: Turkey's view on Cyprus and Northern Cyprus</p> </li> <li> <p> <code>TZA</code>: Tanzania's view on Lake Malawi</p> </li> <li> <p> <code>URY</code>: Uruguay's view on Rincon de Artigas</p> </li> <li> <p> <code>VNM</code>: Vietnam's view on the Paracel Islands and Spratly Islands</p> </li> </ul>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p>
   * @public
   */
  IntendedUse?: AutocompleteIntendedUse | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>Indicates the starting and ending index of the text query that match the found title.</p>
 * @public
 */
export interface Highlight {
  /**
   * <p>Start index of the highlight.</p>
   * @public
   */
  StartIndex?: number | undefined;

  /**
   * <p>End index of the highlight.</p>
   * @public
   */
  EndIndex?: number | undefined;

  /**
   * <p>The highlight's value.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Indicates the starting and ending index of the country in the text query that match the found title. </p>
 * @public
 */
export interface CountryHighlights {
  /**
   * <p>Indicates the starting and ending index of the country code in the text query that match the found title.</p>
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * <p>Indicates the starting and ending index of the country code in the text query that match the found title.</p>
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * <p>Indicates the starting and ending index of the region in the text query that match the found title. </p>
 * @public
 */
export interface RegionHighlights {
  /**
   * <p>Indicates the starting and ending index of the region in the text query that match the found title. </p>
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * <p>Indicates the starting and ending index of the region name in the text query that match the found title. </p>
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * <p>Indicates the starting and ending index of the sub-region in the text query that match the found title. </p>
 * @public
 */
export interface SubRegionHighlights {
  /**
   * <p>Indicates the starting and ending index of the sub-region in the text query that match the found title. </p>
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * <p>Indicates the starting and ending index of the name in the text query that match the found title. </p>
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * <p>Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms.</p>
 * @public
 */
export interface AutocompleteAddressHighlights {
  /**
   * <p>Indicates the starting and ending indexes for result items where they are identified to match the input query. This should be used to provide emphasis to output display to make selecting the correct result from a list easier for end users.</p>
   * @public
   */
  Label?: Highlight[] | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
   * @public
   */
  Country?: CountryHighlights | undefined;

  /**
   * <p>The region or state results should be to be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>.</p>
   * @public
   */
  Region?: RegionHighlights | undefined;

  /**
   * <p>The sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: SubRegionHighlights | undefined;

  /**
   * <p>The city or locality results should be present in. </p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: Highlight[] | undefined;

  /**
   * <p>The district or division of a city the results should be present in.</p>
   * @public
   */
  District?: Highlight[] | undefined;

  /**
   * <p>Indicates the starting and ending index of the title in the text query that match the found title. </p>
   * @public
   */
  SubDistrict?: Highlight[] | undefined;

  /**
   * <p>The name of the street results should be present in.</p>
   * @public
   */
  Street?: Highlight[] | undefined;

  /**
   * <p>Name of the block. </p> <p>Example: <code>Sunny Mansion 203 block: 2 Chome</code> </p>
   * @public
   */
  Block?: Highlight[] | undefined;

  /**
   * <p>Name of sub-block. </p> <p>Example: <code>Sunny Mansion 203 sub-block: 4</code> </p>
   * @public
   */
  SubBlock?: Highlight[] | undefined;

  /**
   * <p>Name of the streets in the intersection. For example: e.g. ["Friedrichstraße","Unter den Linden"]</p>
   * @public
   */
  Intersection?: Highlight[][] | undefined;

  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess. </p>
   * @public
   */
  PostalCode?: Highlight[] | undefined;

  /**
   * <p>The house number or address results should have. </p>
   * @public
   */
  AddressNumber?: Highlight[] | undefined;

  /**
   * <p>The name of the building at the address.</p>
   * @public
   */
  Building?: Highlight[] | undefined;
}

/**
 * <p>Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms.</p>
 * @public
 */
export interface AutocompleteHighlights {
  /**
   * <p>Indicates where the title field in the result matches the input query.</p>
   * @public
   */
  Title?: Highlight[] | undefined;

  /**
   * <p>Describes how part of the result address match the input query.</p>
   * @public
   */
  Address?: AutocompleteAddressHighlights | undefined;
}

/**
 * @public
 * @enum
 */
export const PlaceType = {
  BLOCK: "Block",
  COUNTRY: "Country",
  DISTRICT: "District",
  INTERPOLATED_ADDRESS: "InterpolatedAddress",
  INTERSECTION: "Intersection",
  LOCALITY: "Locality",
  POINT_ADDRESS: "PointAddress",
  POINT_OF_INTEREST: "PointOfInterest",
  POSTAL_CODE: "PostalCode",
  REGION: "Region",
  SECONDARY_ADDRESS: "SecondaryAddress",
  STREET: "Street",
  SUB_BLOCK: "SubBlock",
  SUB_DISTRICT: "SubDistrict",
  SUB_REGION: "SubRegion",
} as const;

/**
 * @public
 */
export type PlaceType = (typeof PlaceType)[keyof typeof PlaceType];

/**
 * <p>A result matching the input query text.</p>
 * @public
 */
export interface AutocompleteResultItem {
  /**
   * <p>The PlaceId of the place associated with this result. This can be used to look up additional details about the result via GetPlace.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>PlaceType describes the type of result entry returned.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>A formatted string for display when presenting this result to an end user.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The address associated with this result.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The distance in meters between the center of the search area and this result. Useful to evaluate how far away from the original bias position the result is.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates the starting and ending index of the place in the text query that match the found title. </p>
   * @public
   */
  Highlights?: AutocompleteHighlights | undefined;
}

/**
 * @public
 */
export interface AutocompleteResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: AutocompleteResultItem[] | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the Amazon Location service.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   *     The input cannot be parsed. For example a required JSON document, ARN identifier,
   *     date value, or numeric field cannot be parsed.
   *
   */
  CANNOT_PARSE: "CannotParse",
  /**
   *     The input is present and parsable, but it is otherwise invalid. For example, a
   *     required numeric argument is outside the allowed range.
   *
   */
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  /**
   * The required input is missing.
   */
  MISSING: "Missing",
  /**
   * The input is invalid but no more specific reason is applicable.
   */
  OTHER: "Other",
  /**
   * No such field is supported.
   */
  UNKNOWN_FIELD: "UnknownField",
  /**
   * No such operation is supported.
   */
  UNKNOWN_OPERATION: "UnknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Test stub for reason</p>
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * <p>Test stub for FieldList.</p>
   * @public
   */
  FieldList: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
}

/**
 * <p>A businesschain is a chain of businesses that belong to the same brand. For example <code>7-11</code>.</p>
 * @public
 */
export interface BusinessChain {
  /**
   * <p>The business chain name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Business Chain Id.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Indicates how well the returned title and address components matches the input TextQuery. For each component a score is provied with 1 indicating all tokens were matched and 0 indicating no tokens were matched.</p>
 * @public
 */
export interface ComponentMatchScores {
  /**
   * <p>Indicates the match score of the title in the text query that match the found title. </p>
   * @public
   */
  Title?: number | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: AddressComponentMatchScores | undefined;
}

/**
 * <p>Details related to contacts.</p>
 * @public
 */
export interface ContactDetails {
  /**
   * <p>The contact's label.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The contact's value.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Categories of results that results must belong too.</p>
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * <p>A list of potential contact methods for the result/place.</p>
 * @public
 */
export interface Contacts {
  /**
   * <p>List of phone numbers for the results contact. </p>
   * @public
   */
  Phones?: ContactDetails[] | undefined;

  /**
   * <p>List of fax addresses for the result contact. </p>
   * @public
   */
  Faxes?: ContactDetails[] | undefined;

  /**
   * <p>List of website URLs that belong to the result. </p>
   * @public
   */
  Websites?: ContactDetails[] | undefined;

  /**
   * <p>List of emails for contacts of the result. </p>
   * @public
   */
  Emails?: ContactDetails[] | undefined;
}

/**
 * <p>List of <code>Food</code> types offered by this result.</p>
 * @public
 */
export interface FoodType {
  /**
   * <p>Localized name of the food type.</p>
   * @public
   */
  LocalizedName: string | undefined;

  /**
   * <p>The Food Type Id.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Boolean which indicates if this food type is the primary offered by the place. For example, if a location serves fast food, but also dessert, he primary would likely be fast food.</p>
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const GeocodeAdditionalFeature = {
  ACCESS: "Access",
  INTERSECTIONS: "Intersections",
  SECONDARY_ADDRESSES: "SecondaryAddresses",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type GeocodeAdditionalFeature = (typeof GeocodeAdditionalFeature)[keyof typeof GeocodeAdditionalFeature];

/**
 * @public
 * @enum
 */
export const GeocodeFilterPlaceType = {
  INTERPOLATED_ADDRESS: "InterpolatedAddress",
  INTERSECTION: "Intersection",
  LOCALITY: "Locality",
  POINT_ADDRESS: "PointAddress",
  POSTAL_CODE: "PostalCode",
  STREET: "Street",
} as const;

/**
 * @public
 */
export type GeocodeFilterPlaceType = (typeof GeocodeFilterPlaceType)[keyof typeof GeocodeFilterPlaceType];

/**
 * <p>Geocode structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
 * @public
 */
export interface GeocodeFilter {
  /**
   * <p> A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.</p>
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * <p>The included place types.</p>
   * @public
   */
  IncludePlaceTypes?: GeocodeFilterPlaceType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GeocodeIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
  /**
   * Indicates that results of the operation may be stored locally.
   */
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type GeocodeIntendedUse = (typeof GeocodeIntendedUse)[keyof typeof GeocodeIntendedUse];

/**
 * <p>A structured free text query allows you to search for places by the name or text representation of specific properties of the place. </p>
 * @public
 */
export interface GeocodeQueryComponents {
  /**
   * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The region or state results should be to be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: string | undefined;

  /**
   * <p>The city or locality results should be present in. </p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: string | undefined;

  /**
   * <p>The district or division of a city the results should be present in.</p>
   * @public
   */
  District?: string | undefined;

  /**
   * <p>The name of the street results should be present in.</p>
   * @public
   */
  Street?: string | undefined;

  /**
   * <p>The house number or address results should have. </p>
   * @public
   */
  AddressNumber?: string | undefined;

  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess. </p>
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * @public
 */
export interface GeocodeRequest {
  /**
   * <p>The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryText?: string | undefined;

  /**
   * <p>A structured free text query allows you to search for places by the name or text representation of specific properties of the place. </p>
   * @public
   */
  QueryComponents?: GeocodeQueryComponents | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in <code>[lng, lat]</code> and in the WSG84 format.</p> <note> <p>The fields <code>BiasPosition</code>, <code>FilterBoundingBox</code>, and <code>FilterCircle</code> are mutually exclusive.</p> </note>
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: GeocodeFilter | undefined;

  /**
   * <p>A list of optional additional parameters, such as time zone, that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: GeocodeAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p> <note> <p>Storing the response of an Geocode query is required to comply with service terms, but charged at a higher cost per request. Please review the <a href="https://aws.amazon.com/location/sla/">user agreement</a> and <a href="https://aws.amazon.com/location/pricing/">service pricing structure</a> to determine the correct setting for your use case.</p> </note>
   * @public
   */
  IntendedUse?: GeocodeIntendedUse | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>All Intersections that are near the provided address.</p>
 * @public
 */
export interface Intersection {
  /**
   * <p>The <code>PlaceId</code> of the place result.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The distance from the routing position of the nearby address to the street result.</p>
   * @public
   */
  RouteDistance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set of four coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Position of the access point represented by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;
}

/**
 * <p>Place that is related to the result item.</p>
 * @public
 */
export interface RelatedPlace {
  /**
   * <p>The <code>PlaceId</code> of the place result.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>Position of the access point represented by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;
}

/**
 * <p>Details related to the match score.</p>
 * @public
 */
export interface MatchScoreDetails {
  /**
   * <p>Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.</p>
   * @public
   */
  Overall?: number | undefined;

  /**
   * <p>Indicates how well the component input matches the returned. It is equal to 1 if all input tokens are recognized and matched.</p>
   * @public
   */
  Components?: ComponentMatchScores | undefined;
}

/**
 * <p>Parsed components in the provided QueryText.</p>
 * @public
 */
export interface ParsedQueryComponent {
  /**
   * <p>Start index of the parsed query component.</p>
   * @public
   */
  StartIndex?: number | undefined;

  /**
   * <p>End index of the parsed query component.</p>
   * @public
   */
  EndIndex?: number | undefined;

  /**
   * <p>Value of the parsed query component.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The address component that the parsed query component corresponds to.</p>
   * @public
   */
  QueryComponent?: string | undefined;
}

/**
 * <p>Information about a secondary address component parsed from the query text.</p>
 * @public
 */
export interface ParsedQuerySecondaryAddressComponent {
  /**
   * <p>Start index of the parsed secondary address component in the query text.</p>
   * @public
   */
  StartIndex: number | undefined;

  /**
   * <p>End index of the parsed secondary address component in the query text.</p>
   * @public
   */
  EndIndex: number | undefined;

  /**
   * <p>Value of the parsed secondary address component.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Secondary address number provided in the query.</p>
   * @public
   */
  Number: string | undefined;

  /**
   * <p>Secondary address designator provided in the query.</p>
   * @public
   */
  Designator: string | undefined;
}

/**
 * <p>Parsed address components in the provided QueryText.</p>
 * @public
 */
export interface GeocodeParsedQueryAddressComponents {
  /**
   * <p>The alpha-2 or alpha-3 character code for the country that the results will be present in.</p>
   * @public
   */
  Country?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The region or state results should be present in. </p> <p>Example: <code>North Rhine-Westphalia</code>.</p>
   * @public
   */
  Region?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The sub-region or county for which results should be present in. </p>
   * @public
   */
  SubRegion?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The city or locality of the address.</p> <p>Example: <code>Vancouver</code>.</p>
   * @public
   */
  Locality?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The district or division of a city the results should be present in.</p>
   * @public
   */
  District?: ParsedQueryComponent[] | undefined;

  /**
   * <p>A subdivision of a district. </p> <p>Example: <code>Minden-Lübbecke</code>.</p>
   * @public
   */
  SubDistrict?: ParsedQueryComponent[] | undefined;

  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess. </p>
   * @public
   */
  PostalCode?: ParsedQueryComponent[] | undefined;

  /**
   * <p>Name of the block. </p> <p>Example: <code>Sunny Mansion 203 block: 2 Chome</code> </p>
   * @public
   */
  Block?: ParsedQueryComponent[] | undefined;

  /**
   * <p>Name of sub-block. </p> <p>Example: <code>Sunny Mansion 203 sub-block: 4</code> </p>
   * @public
   */
  SubBlock?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The name of the street results should be present in.</p>
   * @public
   */
  Street?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The number that identifies an address within a street.</p>
   * @public
   */
  AddressNumber?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The name of the building at the address.</p>
   * @public
   */
  Building?: ParsedQueryComponent[] | undefined;

  /**
   * <p>Parsed secondary address components from the provided query text.</p>
   * @public
   */
  SecondaryAddressComponents?: ParsedQuerySecondaryAddressComponent[] | undefined;
}

/**
 * <p>Parsed components in the provided QueryText.</p>
 * @public
 */
export interface GeocodeParsedQuery {
  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>.</p>
   * @public
   */
  Title?: ParsedQueryComponent[] | undefined;

  /**
   * <p>The place address.</p>
   * @public
   */
  Address?: GeocodeParsedQueryAddressComponents | undefined;
}

/**
 * @public
 * @enum
 */
export const PostalAuthority = {
  USPS: "Usps",
} as const;

/**
 * @public
 */
export type PostalAuthority = (typeof PostalAuthority)[keyof typeof PostalAuthority];

/**
 * @public
 * @enum
 */
export const PostalCodeType = {
  USPS_ZIP: "UspsZip",
  USPS_ZIP_PLUS_4: "UspsZipPlus4",
} as const;

/**
 * @public
 */
export type PostalCodeType = (typeof PostalCodeType)[keyof typeof PostalCodeType];

/**
 * @public
 * @enum
 */
export const ZipClassificationCode = {
  MILITARY: "Military",
  POST_OFFICE_BOXES: "PostOfficeBoxes",
  UNIQUE: "Unique",
} as const;

/**
 * @public
 */
export type ZipClassificationCode = (typeof ZipClassificationCode)[keyof typeof ZipClassificationCode];

/**
 * <p>The USPS zip code.</p>
 * @public
 */
export interface UspsZip {
  /**
   * <p>The ZIP Classification Code, or in other words what type of postal code is it. </p>
   * @public
   */
  ZipClassificationCode?: ZipClassificationCode | undefined;
}

/**
 * @public
 * @enum
 */
export const RecordTypeCode = {
  FIRM: "Firm",
  GENERAL: "General",
  HIGH_RISE: "HighRise",
  POST_OFFICE_BOX: "PostOfficeBox",
  RURAL: "Rural",
  STREET: "Street",
} as const;

/**
 * @public
 */
export type RecordTypeCode = (typeof RecordTypeCode)[keyof typeof RecordTypeCode];

/**
 * <p>The USPS zip+4 code.</p>
 * @public
 */
export interface UspsZipPlus4 {
  /**
   * <p>The USPS ZIP+4 Record Type Code.</p>
   * @public
   */
  RecordTypeCode?: RecordTypeCode | undefined;
}

/**
 * <p>Contains details about the postal code of the place or result.</p>
 * @public
 */
export interface PostalCodeDetails {
  /**
   * <p>An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess. </p>
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * <p>The postal authority or entity. This could be a governmental authority, a regulatory authority, or a designated postal operator.</p>
   * @public
   */
  PostalAuthority?: PostalAuthority | undefined;

  /**
   * <p>The postal code type.</p>
   * @public
   */
  PostalCodeType?: PostalCodeType | undefined;

  /**
   * <p>The ZIP Classification Code, or in other words what type of postal code is it.</p>
   * @public
   */
  UspsZip?: UspsZip | undefined;

  /**
   * <p>The USPS ZIP+4 Record Type Code.</p>
   * @public
   */
  UspsZipPlus4?: UspsZipPlus4 | undefined;
}

/**
 * <p>The time zone in which the place is located.</p>
 * @public
 */
export interface TimeZone {
  /**
   * <p>The time zone name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Time zone offset of the timezone from UTC.</p>
   * @public
   */
  Offset?: string | undefined;

  /**
   * <p>The offset of the time zone from UTC, in seconds.</p>
   * @public
   */
  OffsetSeconds?: number | undefined;
}

/**
 * <p>The Geocoded result.</p>
 * @public
 */
export interface GeocodeResultItem {
  /**
   * <p>The <code>PlaceId</code> of the place result.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>. </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Boolean indicating if the address provided has been corrected.</p>
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * <p>Contains details about the postal code of the place/result. </p>
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * <p>The position in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>Position of the access point represented by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.</p>
   * @public
   */
  MatchScores?: MatchScoreDetails | undefined;

  /**
   * <p>Free-form text query.</p>
   * @public
   */
  ParsedQuery?: GeocodeParsedQuery | undefined;

  /**
   * <p>All Intersections that are near the provided address.</p>
   * @public
   */
  Intersections?: Intersection[] | undefined;

  /**
   * <p>The main address corresponding to a place of type Secondary Address.</p>
   * @public
   */
  MainAddress?: RelatedPlace | undefined;

  /**
   * <p>All secondary addresses that are associated with a main address. A secondary address is one that includes secondary designators, such as a Suite or Unit Number, Building, or Floor information.</p>
   * @public
   */
  SecondaryAddresses?: RelatedPlace[] | undefined;
}

/**
 * @public
 */
export interface GeocodeResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: GeocodeResultItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GetPlaceAdditionalFeature = {
  ACCESS: "Access",
  CONTACT: "Contact",
  PHONEMES: "Phonemes",
  SECONDARY_ADDRESSES: "SecondaryAddresses",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type GetPlaceAdditionalFeature = (typeof GetPlaceAdditionalFeature)[keyof typeof GetPlaceAdditionalFeature];

/**
 * @public
 * @enum
 */
export const GetPlaceIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
  /**
   * Indicates that results of the operation may be stored locally.
   */
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type GetPlaceIntendedUse = (typeof GetPlaceIntendedUse)[keyof typeof GetPlaceIntendedUse];

/**
 * @public
 */
export interface GetPlaceRequest {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A list of optional additional parameters such as time zone that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: GetPlaceAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p> <note> <p>Storing the response of an GetPlace query is required to comply with service terms, but charged at a higher cost per request. Please review the <a href="https://aws.amazon.com/location/sla/">user agreement</a> and <a href="https://aws.amazon.com/location/pricing/">service pricing structure</a> to determine the correct setting for your use case.</p> </note>
   * @public
   */
  IntendedUse?: GetPlaceIntendedUse | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>Components of the opening hours object.</p>
 * @public
 */
export interface OpeningHoursComponents {
  /**
   * <p>String which represents the opening hours, such as <code>"T070000"</code>.</p>
   * @public
   */
  OpenTime?: string | undefined;

  /**
   * <p>String which represents the duration of the opening period, such as <code>"PT12H00M"</code>.</p>
   * @public
   */
  OpenDuration?: string | undefined;

  /**
   * <p>Days or periods when the provided opening hours are in affect. </p> <p>Example: <code>FREQ:DAILY;BYDAY:MO,TU,WE,TH,SU</code> </p>
   * @public
   */
  Recurrence?: string | undefined;
}

/**
 * <p>List of opening hours objects.</p>
 * @public
 */
export interface OpeningHours {
  /**
   * <p>List of opening hours in the format they are displayed in. This can vary by result and in most cases represents how the result uniquely formats their opening hours. </p>
   * @public
   */
  Display?: string[] | undefined;

  /**
   * <p>Boolean which indicates if the result/place is currently open. </p>
   * @public
   */
  OpenNow?: boolean | undefined;

  /**
   * <p>Components of the opening hours object.</p>
   * @public
   */
  Components?: OpeningHoursComponents[] | undefined;

  /**
   * <p>Categories of results that results must belong too.</p>
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * <p>The phoneme details.</p>
 * @public
 */
export interface PhonemeDetails {
  /**
   * <p>List of <code>PhonemeTranscription</code>. See <code>PhonemeTranscription</code> for fields.</p>
   * @public
   */
  Title?: PhonemeTranscription[] | undefined;

  /**
   * <p>How to pronounce the address.</p>
   * @public
   */
  Address?: AddressComponentPhonemes | undefined;
}

/**
 * @public
 */
export interface GetPlaceResponse {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Boolean indicating if the address provided has been corrected.</p>
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * <p>Contains details about the postal code of the place/result. </p>
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set of four coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * <p>List of potential contact methods for the result/place.</p>
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * <p>List of opening hours objects.</p>
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * <p>Position of the access point in <code>(lng,lat)</code>.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.</p>
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>How the various components of the result's address are pronounced in various languages.</p>
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;

  /**
   * <p>The main address corresponding to a place of type Secondary Address.</p>
   * @public
   */
  MainAddress?: RelatedPlace | undefined;

  /**
   * <p>All secondary addresses that are associated with a main address. A secondary address is one that includes secondary designators, such as a Suite or Unit Number, Building, or Floor information.</p>
   * @public
   */
  SecondaryAddresses?: RelatedPlace[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReverseGeocodeAdditionalFeature = {
  ACCESS: "Access",
  INTERSECTIONS: "Intersections",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type ReverseGeocodeAdditionalFeature =
  (typeof ReverseGeocodeAdditionalFeature)[keyof typeof ReverseGeocodeAdditionalFeature];

/**
 * @public
 * @enum
 */
export const ReverseGeocodeFilterPlaceType = {
  INTERPOLATED_ADDRESS: "InterpolatedAddress",
  INTERSECTION: "Intersection",
  LOCALITY: "Locality",
  POINT_ADDRESS: "PointAddress",
  STREET: "Street",
} as const;

/**
 * @public
 */
export type ReverseGeocodeFilterPlaceType =
  (typeof ReverseGeocodeFilterPlaceType)[keyof typeof ReverseGeocodeFilterPlaceType];

/**
 * <p>The included place types.</p>
 * @public
 */
export interface ReverseGeocodeFilter {
  /**
   * <p>The included place types.</p>
   * @public
   */
  IncludePlaceTypes?: ReverseGeocodeFilterPlaceType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReverseGeocodeIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
  /**
   * Indicates that results of the operation may be stored locally.
   */
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type ReverseGeocodeIntendedUse = (typeof ReverseGeocodeIntendedUse)[keyof typeof ReverseGeocodeIntendedUse];

/**
 * @public
 */
export interface ReverseGeocodeRequest {
  /**
   * <p>The position, in <code>[lng, lat]</code> for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position</p>
   * @public
   */
  QueryPosition: number[] | undefined;

  /**
   * <p>The maximum distance in meters from the QueryPosition from which a result will be returned.</p>
   * @public
   */
  QueryRadius?: number | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: ReverseGeocodeFilter | undefined;

  /**
   * <p>A list of optional additional parameters, such as time zone that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: ReverseGeocodeAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p> <note> <p>Storing the response of an ReverseGeocode query is required to comply with service terms, but charged at a higher cost per request. Please review the <a href="https://aws.amazon.com/location/sla/">user agreement</a> and <a href="https://aws.amazon.com/location/pricing/">service pricing structure</a> to determine the correct setting for your use case.</p> </note>
   * @public
   */
  IntendedUse?: ReverseGeocodeIntendedUse | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>The returned location from the <code>Reverse Geocode</code> action.</p>
 * @public
 */
export interface ReverseGeocodeResultItem {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The localized display name of this result item based on request parameter <code>language</code>. </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Boolean indicating if the address provided has been corrected.</p>
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * <p>Contains details about the postal code of the place/result. </p>
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * <p>The position in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>Position of the access point represented by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>All Intersections that are near the provided address.</p>
   * @public
   */
  Intersections?: Intersection[] | undefined;
}

/**
 * @public
 */
export interface ReverseGeocodeResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: ReverseGeocodeResultItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchNearbyAdditionalFeature = {
  ACCESS: "Access",
  CONTACT: "Contact",
  PHONEMES: "Phonemes",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type SearchNearbyAdditionalFeature =
  (typeof SearchNearbyAdditionalFeature)[keyof typeof SearchNearbyAdditionalFeature];

/**
 * <p>SearchNearby structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
 * @public
 */
export interface SearchNearbyFilter {
  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.</p>
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * <p>Categories of results that results must belong too.</p>
   * @public
   */
  IncludeCategories?: string[] | undefined;

  /**
   * <p>Categories of results that results are excluded from.</p>
   * @public
   */
  ExcludeCategories?: string[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  IncludeBusinessChains?: string[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  ExcludeBusinessChains?: string[] | undefined;

  /**
   * <p>Food types that results are included from.</p>
   * @public
   */
  IncludeFoodTypes?: string[] | undefined;

  /**
   * <p>Food types that results are excluded from.</p>
   * @public
   */
  ExcludeFoodTypes?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchNearbyIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
  /**
   * Indicates that results of the operation may be stored locally.
   */
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type SearchNearbyIntendedUse = (typeof SearchNearbyIntendedUse)[keyof typeof SearchNearbyIntendedUse];

/**
 * @public
 */
export interface SearchNearbyRequest {
  /**
   * <p>The position, in <code>[lng, lat]</code> for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position</p>
   * @public
   */
  QueryPosition: number[] | undefined;

  /**
   * <p>The maximum distance in meters from the QueryPosition from which a result will be returned.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryRadius?: number | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: SearchNearbyFilter | undefined;

  /**
   * <p>A list of optional additional parameters, such as time zone, that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: SearchNearbyAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p> <note> <p>Storing the response of an SearchNearby query is required to comply with service terms, but charged at a higher cost per request. Please review the <a href="https://aws.amazon.com/location/sla/">user agreement</a> and <a href="https://aws.amazon.com/location/pricing/">service pricing structure</a> to determine the correct setting for your use case.</p> </note>
   * @public
   */
  IntendedUse?: SearchNearbyIntendedUse | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>The search results of nearby places.</p>
 * @public
 */
export interface SearchNearbyResultItem {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The item's title.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Boolean indicating if the address provided has been corrected.</p>
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * <p>The position in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * <p>List of potential contact methods for the result/place.</p>
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * <p>List of opening hours objects.</p>
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * <p>Position of the access point represent by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.</p>
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>How the various components of the result's address are pronounced in various languages.</p>
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;
}

/**
 * @public
 */
export interface SearchNearbyResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: SearchNearbyResultItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchTextAdditionalFeature = {
  ACCESS: "Access",
  CONTACT: "Contact",
  PHONEMES: "Phonemes",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type SearchTextAdditionalFeature =
  (typeof SearchTextAdditionalFeature)[keyof typeof SearchTextAdditionalFeature];

/**
 * <p>SearchText structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
 * @public
 */
export interface SearchTextFilter {
  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>The <code>Circle</code> that all results must be in. </p>
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * <p> A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.</p>
   * @public
   */
  IncludeCountries?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchTextIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
  /**
   * Indicates that results of the operation may be stored locally.
   */
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type SearchTextIntendedUse = (typeof SearchTextIntendedUse)[keyof typeof SearchTextIntendedUse];

/**
 * @public
 */
export interface SearchTextRequest {
  /**
   * <p>The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryText?: string | undefined;

  /**
   * <p>The query Id returned by the suggest API. If passed in the request, the SearchText API will preform a SearchText query with the improved query terms for the original query made to the suggest API.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in <code>[lng, lat]</code> and in the WSG84 format.</p> <note> <p>The fields <code>BiasPosition</code>, <code>FilterBoundingBox</code>, and <code>FilterCircle</code> are mutually exclusive.</p> </note>
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: SearchTextFilter | undefined;

  /**
   * <p>A list of optional additional parameters, such as time zone, that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: SearchTextAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p> <note> <p>Storing the response of an SearchText query is required to comply with service terms, but charged at a higher cost per request. Please review the <a href="https://aws.amazon.com/location/sla/">user agreement</a> and <a href="https://aws.amazon.com/location/pricing/">service pricing structure</a> to determine the correct setting for your use case.</p> </note>
   * @public
   */
  IntendedUse?: SearchTextIntendedUse | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>The text search result.</p>
 * @public
 */
export interface SearchTextResultItem {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * <p>The item's title.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>Boolean indicating if the address provided has been corrected.</p>
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * <p>List of potential contact methods for the result/place.</p>
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * <p>List of opening hours objects.</p>
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * <p>Position of the access point represent by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.</p>
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>How the various components of the result's address are pronounced in various languages.</p>
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;
}

/**
 * @public
 */
export interface SearchTextResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: SearchTextResultItem[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SuggestAdditionalFeature = {
  ACCESS: "Access",
  CORE: "Core",
  PHONEMES: "Phonemes",
  TIME_ZONE: "TimeZone",
} as const;

/**
 * @public
 */
export type SuggestAdditionalFeature = (typeof SuggestAdditionalFeature)[keyof typeof SuggestAdditionalFeature];

/**
 * <p>SuggestFilter structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
 * @public
 */
export interface SuggestFilter {
  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>The <code>Circle</code> that all results must be in. </p>
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * <p> A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.</p>
   * @public
   */
  IncludeCountries?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SuggestIntendedUse = {
  /**
   * Indicates that results of the operation are for single use, e.g., displaying results on a map or presenting options to users.
   */
  SINGLE_USE: "SingleUse",
} as const;

/**
 * @public
 */
export type SuggestIntendedUse = (typeof SuggestIntendedUse)[keyof typeof SuggestIntendedUse];

/**
 * @public
 */
export interface SuggestRequest {
  /**
   * <p>The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryText: string | undefined;

  /**
   * <p>An optional limit for the number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Maximum number of query terms to be returned for use with a search text query.</p>
   * @public
   */
  MaxQueryRefinements?: number | undefined;

  /**
   * <p>The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in <code>[lng, lat]</code> and in the WSG84 format.</p> <note> <p>The fields <code>BiasPosition</code>, <code>FilterBoundingBox</code>, and <code>FilterCircle</code> are mutually exclusive.</p> </note>
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * <p>A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.</p>
   * @public
   */
  Filter?: SuggestFilter | undefined;

  /**
   * <p>A list of optional additional parameters, such as time zone, that can be requested for each result.</p>
   * @public
   */
  AdditionalFeatures?: SuggestAdditionalFeature[] | undefined;

  /**
   * <p>A list of <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>Indicates if the results will be stored. Defaults to <code>SingleUse</code>, if left empty.</p>
   * @public
   */
  IntendedUse?: SuggestIntendedUse | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>Suggestions for refining individual query terms. Suggestions are returned as objects which note the term, suggested replacement, and its index in the query. </p>
 * @public
 */
export interface QueryRefinement {
  /**
   * <p>The term that will be suggested to the user.</p>
   * @public
   */
  RefinedTerm: string | undefined;

  /**
   * <p>The sub-string of the original query that is replaced by this query term.</p>
   * @public
   */
  OriginalTerm: string | undefined;

  /**
   * <p>Start index of the parsed component.</p>
   * @public
   */
  StartIndex: number | undefined;

  /**
   * <p>End index of the parsed query.</p>
   * @public
   */
  EndIndex: number | undefined;
}

/**
 * <p>Describes how the parts of the textQuery matched the input query by returning the sections of the response which matched to textQuery terms.</p>
 * @public
 */
export interface SuggestAddressHighlights {
  /**
   * <p>Indicates the starting and ending indexes of the places in the result which were identified to match the textQuery. This result is useful for providing emphasis to results where the user query directly matched to make selecting the correct result from a list easier for an end user.</p>
   * @public
   */
  Label?: Highlight[] | undefined;
}

/**
 * <p>Describes how the parts of the textQuery matched the input query by returning the sections of the response which matched to textQuery terms.</p>
 * @public
 */
export interface SuggestHighlights {
  /**
   * <p>Indicates the starting and ending index of the title in the text query that match the found title. </p>
   * @public
   */
  Title?: Highlight[] | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: SuggestAddressHighlights | undefined;
}

/**
 * <p>The suggested place results.</p>
 * @public
 */
export interface SuggestPlaceResult {
  /**
   * <p>The <code>PlaceId</code> of the place you wish to receive the information for.</p>
   * @public
   */
  PlaceId?: string | undefined;

  /**
   * <p>A <code>PlaceType</code> is a category that the result place must belong to.</p>
   * @public
   */
  PlaceType?: PlaceType | undefined;

  /**
   * <p>The place's address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The position, in longitude and latitude.</p>
   * @public
   */
  Position?: number[] | undefined;

  /**
   * <p>The distance in meters from the QueryPosition.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>The bounding box enclosing the geometric shape (area or line) that an individual result covers.</p> <p>The bounding box formed is defined as a set 4 coordinates: <code>[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]</code> </p>
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * <p>Categories of results that results must belong to.</p>
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * <p>List of food types offered by this result.</p>
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * <p>The Business Chains associated with the place.</p>
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * <p>Position of the access point represent by longitude and latitude.</p>
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * <p>Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.</p>
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * <p>The time zone in which the place is located.</p>
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * <p>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.</p>
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * <p>How the various components of the result's address are pronounced in various languages.</p>
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryType = {
  BUSINESS_CHAIN: "BusinessChain",
  CATEGORY: "Category",
} as const;

/**
 * @public
 */
export type QueryType = (typeof QueryType)[keyof typeof QueryType];

/**
 * <p>The suggested query results.</p>
 * @public
 */
export interface SuggestQueryResult {
  /**
   * <p>QueryId can be used to complete a follow up query through the SearchText API. The QueryId retains context from the original Suggest request such as filters, political view and language. See the SearchText API documentation for more details <a href="https://docs.aws.amazon.com/latest/APIReference/API_geoplaces_SearchText.html">SearchText API docs</a>.</p> <note> <p>The fields <code>QueryText</code>, and <code>QueryID</code> are mutually exclusive.</p> </note>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>The query type. Category queries will search for places which have an entry matching the given category, for example "doctor office". BusinessChain queries will search for instances of a given business.</p>
   * @public
   */
  QueryType?: QueryType | undefined;
}

/**
 * @public
 * @enum
 */
export const SuggestResultItemType = {
  PLACE: "Place",
  QUERY: "Query",
} as const;

/**
 * @public
 */
export type SuggestResultItemType = (typeof SuggestResultItemType)[keyof typeof SuggestResultItemType];

/**
 * <p>The resulting item from the suggested query.</p>
 * @public
 */
export interface SuggestResultItem {
  /**
   * <p>The display title that should be used when presenting this option to the end user.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The result type. Place results represent the final result for a point of interest, Query results represent a follow up query which can be completed through the SearchText operation.</p>
   * @public
   */
  SuggestResultItemType: SuggestResultItemType | undefined;

  /**
   * <p>The suggested place by its unique ID.</p>
   * @public
   */
  Place?: SuggestPlaceResult | undefined;

  /**
   * <p>The suggested query results.</p>
   * @public
   */
  Query?: SuggestQueryResult | undefined;

  /**
   * <p>Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms. </p>
   * @public
   */
  Highlights?: SuggestHighlights | undefined;
}

/**
 * @public
 */
export interface SuggestResponse {
  /**
   * <p>The pricing bucket for which the query is charged at.</p> <p>For more information on pricing, please visit <a href="https://aws.amazon.com/location/pricing/">Amazon Location Service Pricing</a>.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>List of places or results returned for a query. </p>
   * @public
   */
  ResultItems?: SuggestResultItem[] | undefined;

  /**
   * <p>Maximum number of query terms to be returned for use with a search text query.</p>
   * @public
   */
  QueryRefinements?: QueryRefinement[] | undefined;
}
