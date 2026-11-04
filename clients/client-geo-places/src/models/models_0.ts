// smithy-typescript generated code
import type {
  AccessPointType,
  AddressTranslationComponent,
  AdminNamesPreference,
  AutocompleteAdditionalFeature,
  AutocompleteFilterPlaceType,
  AutocompleteIntendedUse,
  GeocodeAdditionalFeature,
  GeocodeAddressNamesMode,
  GeocodeFilterPlaceType,
  GeocodeIntendedUse,
  GetPlaceAdditionalFeature,
  GetPlaceAddressNamesMode,
  GetPlaceIntendedUse,
  PlaceAttribute,
  PlaceType,
  PostalAuthority,
  PostalCodeMode,
  PostalCodeType,
  QueryType,
  RecordTypeCode,
  ReverseGeocodeAdditionalFeature,
  ReverseGeocodeAddressNamesMode,
  ReverseGeocodeFilterPlaceType,
  ReverseGeocodeIntendedUse,
  SearchNearbyAdditionalFeature,
  SearchNearbyIntendedUse,
  SearchTextAdditionalFeature,
  SearchTextIntendedUse,
  SearchTextTravelMode,
  SuggestAdditionalFeature,
  SuggestIntendedUse,
  SuggestResultItemType,
  SuggestTravelMode,
  TranslationNameType,
  TypePlacement,
  ZipClassificationCode,
} from "./enums";

/**
 * Position of the access point represented by longitude and latitude for a vehicle.
 *
 * @public
 */
export interface AccessPoint {
  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The type of access point, indicating its intended use. Only applies to results of type place.
   *
   * @public
   */
  Type?: AccessPointType | undefined;

  /**
   * Set to `true` for the primary access position when the place has more than one access point.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * A short textual description of the access point, such as `"North Entrance"`.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * Category of the `Place` returned.
 *
 * @public
 */
export interface Category {
  /**
   * The category ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The category name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Localized name of the category type.
   *
   * @public
   */
  LocalizedName?: string | undefined;

  /**
   * Boolean which indicates if this category is the primary offered by the place.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * Indicates if the access location is restricted. Index correlates to that of an access point and indicates if access through this point has some form of restriction.
 *
 * @public
 */
export interface AccessRestriction {
  /**
   * The restriction.
   *
   * @public
   */
  Restricted?: boolean | undefined;

  /**
   * Categories of results that results must belong too.
   *
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * The alpha-2 or alpha-3 character code for the country that the results will be present in.
 *
 * @public
 */
export interface Country {
  /**
   * Country, represented by its alpha 2-character code.
   *
   * @public
   */
  Code2?: string | undefined;

  /**
   * Country, represented by its alpha t-character code.
   *
   * @public
   */
  Code3?: string | undefined;

  /**
   * Name of the country.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The region or state results should be to be present in.
 *
 * Example: `North Rhine-Westphalia`.
 *
 * @public
 */
export interface Region {
  /**
   * Abbreviated code for a the state, province or region of the country. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Example: `BC`.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * Name for a the state, province, or region of the country.
   *
   * Example: `British Columbia`.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Components that correspond to secondary identifiers on an address. The only component type supported currently is Unit.
 *
 * @public
 */
export interface SecondaryAddressComponent {
  /**
   * Number that uniquely identifies a secondary address.
   *
   * @public
   */
  Number: string | undefined;

  /**
   * The designator of the secondary address component.
   *
   * Example: `Apt`.
   *
   * @public
   */
  Designator?: string | undefined;
}

/**
 * Components of a street.
 *
 * @public
 */
export interface StreetComponents {
  /**
   * Base name part of the street name.
   *
   * Example: Younge from the "Younge street".
   *
   * @public
   */
  BaseName?: string | undefined;

  /**
   * Street type part of the street name.
   *
   * Example: `"avenue"`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Defines if the street type is before or after the base name.
   *
   * @public
   */
  TypePlacement?: TypePlacement | undefined;

  /**
   * Defines a separator character such as `""` or `" "` between the base name and type.
   *
   * @public
   */
  TypeSeparator?: string | undefined;

  /**
   * A prefix is a directional identifier that precedes, but is not included in, the base name of a road.
   *
   * Example: E for East.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A suffix is a directional identifier that follows, but is not included in, the base name of a road.
   *
   * Example W for West.
   *
   * @public
   */
  Suffix?: string | undefined;

  /**
   * Indicates the official directional identifiers assigned to highways.
   *
   * @public
   */
  Direction?: string | undefined;

  /**
   * A [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;
}

/**
 * The sub-region.
 *
 * @public
 */
export interface SubRegion {
  /**
   * Abbreviated code for the county or sub-region. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * Name for the county or sub-region.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The place address.
 *
 * @public
 */
export interface Address {
  /**
   * Assembled address value built out of the address components, according to the regional postal rules. This is the correctly formatted address.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The country component of the address.
   *
   * @public
   */
  Country?: Country | undefined;

  /**
   * The region or state results should be present in.
   *
   * Example: `North Rhine-Westphalia`.
   *
   * @public
   */
  Region?: Region | undefined;

  /**
   * The sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: SubRegion | undefined;

  /**
   * The city or locality of the address.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: string | undefined;

  /**
   * The district or division of a locality associated with this address.
   *
   * @public
   */
  District?: string | undefined;

  /**
   * A subdivision of a district.
   *
   * Example: `Minden-Lübbecke`.
   *
   * @public
   */
  SubDistrict?: string | undefined;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * Name of the block. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Example: `Sunny Mansion 203 block: 2 Chome`
   *
   * @public
   */
  Block?: string | undefined;

  /**
   * Name of sub-block. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Example: `Sunny Mansion 203 sub-block: 4`
   *
   * @public
   */
  SubBlock?: string | undefined;

  /**
   * Name of the streets in the intersection. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Example: `["Friedrichstraße","Unter den Linden"]`
   *
   * @public
   */
  Intersection?: string[] | undefined;

  /**
   * The name of the street results should be present in.
   *
   * @public
   */
  Street?: string | undefined;

  /**
   * Components of the street. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Example: Yonge from "Yonge street".
   *
   * @public
   */
  StreetComponents?: StreetComponents[] | undefined;

  /**
   * The number that identifies an address within a street.
   *
   * @public
   */
  AddressNumber?: string | undefined;

  /**
   * The name of the building at the address. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Building?: string | undefined;

  /**
   * Components that correspond to secondary identifiers on an Address. Secondary address components include information such as Suite or Unit Number, Building, or Floor. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:**
   * >
   * > Coverage for `Address.SecondaryAddressComponents` is available in the following countries:
   * >
   * > AUS, CAN, NZL, USA, PRI
   *
   * @public
   */
  SecondaryAddressComponents?: SecondaryAddressComponent[] | undefined;
}

/**
 * Match score for a secondary address component in the result.
 *
 * @public
 */
export interface SecondaryAddressComponentMatchScore {
  /**
   * Match score for the secondary address number.
   *
   * @public
   */
  Number?: number | undefined;
}

/**
 * Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.
 *
 * @public
 */
export interface AddressComponentMatchScores {
  /**
   * The alpha-2 or alpha-3 character code for the country that the results will be present in.
   *
   * @public
   */
  Country?: number | undefined;

  /**
   * The region or state results should be to be present in.
   *
   * Example: `North Rhine-Westphalia`.
   *
   * @public
   */
  Region?: number | undefined;

  /**
   * The sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: number | undefined;

  /**
   * The city or locality results should be present in.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: number | undefined;

  /**
   * The district or division of a city the results should be present in.
   *
   * @public
   */
  District?: number | undefined;

  /**
   * A subdivision of a district.
   *
   * Example: `Minden-Lübbecke`
   *
   * @public
   */
  SubDistrict?: number | undefined;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess.
   *
   * @public
   */
  PostalCode?: number | undefined;

  /**
   * Name of the block.
   *
   * Example: `Sunny Mansion 203 block: 2 Chome`
   *
   * @public
   */
  Block?: number | undefined;

  /**
   * Name of sub-block.
   *
   * Example: `Sunny Mansion 203 sub-block: 4`
   *
   * @public
   */
  SubBlock?: number | undefined;

  /**
   * Name of the streets in the intersection.
   *
   * Example: `["Friedrichstraße","Unter den Linden"]`
   *
   * @public
   */
  Intersection?: number[] | undefined;

  /**
   * The house number or address results should have.
   *
   * @public
   */
  AddressNumber?: number | undefined;

  /**
   * The name of the building at the address.
   *
   * @public
   */
  Building?: number | undefined;

  /**
   * Match scores for the secondary address components in the result.
   *
   * > **Note:** Coverage for this functionality is available in the following countries: AUS, AUT, BRA, CAN, ESP, FRA, GBR, IDN, IND, NZL, TUR, TWN, USA.
   *
   * @public
   */
  SecondaryAddressComponents?: SecondaryAddressComponentMatchScore[] | undefined;
}

/**
 * How to pronounce the various components of the address or place.
 *
 * @public
 */
export interface PhonemeTranscription {
  /**
   * Value which indicates how to pronounce the value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * Boolean which indicates if it the preferred pronunciation.
   *
   * @public
   */
  Preferred?: boolean | undefined;
}

/**
 * How to pronounce the various components of the address or place.
 *
 * @public
 */
export interface AddressComponentPhonemes {
  /**
   * The alpha-2 or alpha-3 character code for the country that the results will be present in.
   *
   * @public
   */
  Country?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the region or state results should be to be present in.
   *
   * @public
   */
  Region?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the city or locality results should be present in.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the district or division of a city results should be present in.
   *
   * @public
   */
  District?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the sub-district or division of a city results should be present in.
   *
   * @public
   */
  SubDistrict?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the name of the block.
   *
   * @public
   */
  Block?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the name of the sub-block.
   *
   * @public
   */
  SubBlock?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the name of the street results should be present in.
   *
   * @public
   */
  Street?: PhonemeTranscription[] | undefined;
}

/**
 * A translation or alternative name for an address component.
 *
 * @public
 */
export interface TranslationName {
  /**
   * The translated or alternative name value.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * A [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language code for the translation name.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The type of translation name. Valid values are `Abbreviation`, `AreaCode`, `BaseName`, `Exonym`, `Shortened`, and `Synonym`.
   *
   * @public
   */
  Type: TranslationNameType | undefined;

  /**
   * If `true`, indicates this is the primary name variant for the given language.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * If `true`, indicates this name is a transliterated version rather than a native script translation.
   *
   * @public
   */
  Transliterated?: boolean | undefined;
}

/**
 * The official administrative names for an address component, returned when `AddressNamesMode` is set to `Administrative`.
 *
 * @public
 */
export interface AdminNames {
  /**
   * A list of translation names for the administrative address component, including name variants and translations in available languages.
   *
   * @public
   */
  Names: TranslationName[] | undefined;

  /**
   * Indicates the preference level of the administrative name. Valid values are `Primary` and `Alternative`.
   *
   * @public
   */
  Preference?: AdminNamesPreference | undefined;
}

/**
 * The `Circle` that all results must be in.
 *
 * @public
 */
export interface FilterCircle {
  /**
   * The center position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Center: number[] | undefined;

  /**
   * The radius, in meters, of the `FilterCircle`. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers,`ap-southeast-1` and `ap-southeast-5` regions support only up to a maximum value of 300,000.
   *
   * @public
   */
  Radius: number | undefined;
}

/**
 * Autocomplete structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
 *
 * @public
 */
export interface AutocompleteFilter {
  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * The `Circle` that all results must be in.
   *
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.
   *
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * The included place types.
   *
   * @public
   */
  IncludePlaceTypes?: AutocompleteFilterPlaceType[] | undefined;
}

/**
 * @public
 */
export interface AutocompleteRequest {
  /**
   * The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.
   *
   * > **Note:** The fields `QueryText`, and `QueryID` are mutually exclusive.
   *
   * @public
   */
  QueryText: string | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 5
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The position in longitude and latitude that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in `[lng, lat]` and in the WGS 84 format.
   *
   * > **Note:** The fields `BiasPosition`, `FilterBoundingBox`, and `FilterCircle` are mutually exclusive.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: AutocompleteFilter | undefined;

  /**
   * The `PostalCodeMode` affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value `EnumerateSpannedLocalities`, all cities in that postal code are returned. If it's populated with the value `EnumerateSpannedDistricts`, all combinations of the postal code with the corresponding district and city names are returned.
   *
   * @public
   */
  PostalCodeMode?: PostalCodeMode | undefined;

  /**
   * A list of optional additional parameters that can be requested for each result.
   *
   * @public
   */
  AdditionalFeatures?: AutocompleteAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * The following political views are currently supported:
   *
   * - `ARG`: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands
   * - `EGY`: Egypt's view on Bir Tawil
   * - `IND`: India's view on Gilgit-Baltistan
   * - `KEN`: Kenya's view on the Ilemi Triangle
   * - `MAR`: Morocco's view on Western Sahara
   * - `RUS`: Russia's view on Crimea
   * - `SDN`: Sudan's view on the Halaib Triangle
   * - `SRB`: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands
   * - `SUR`: Suriname's view on the Courantyne Headwaters and Lawa Headwaters
   * - `SYR`: Syria's view on the Golan Heights
   * - `TUR`: Turkey's view on Cyprus and Northern Cyprus
   * - `TZA`: Tanzania's view on Lake Malawi
   * - `URY`: Uruguay's view on Rincon de Artigas
   * - `VNM`: Vietnam's view on the Paracel Islands and Spratly Islands
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored). Currently, `Autocomplete` does not support storage of results.
   *
   * @public
   */
  IntendedUse?: AutocompleteIntendedUse | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Indicates the starting and ending index of the text query that match the found title.
 *
 * @public
 */
export interface Highlight {
  /**
   * Start index of the highlight.
   *
   * @public
   */
  StartIndex?: number | undefined;

  /**
   * End index of the highlight.
   *
   * @public
   */
  EndIndex?: number | undefined;

  /**
   * The highlight's value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Indicates the starting and ending index of the country in the text query that match the found title.
 *
 * @public
 */
export interface CountryHighlights {
  /**
   * Indicates the starting and ending index of the country code in the text query that match the found title.
   *
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * Indicates the starting and ending index of the country code in the text query that match the found title.
   *
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * Indicates the starting and ending index of the region in the text query that match the found title.
 *
 * @public
 */
export interface RegionHighlights {
  /**
   * Indicates the starting and ending index of the region in the text query that match the found title.
   *
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * Indicates the starting and ending index of the region name in the text query that match the found title.
   *
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * Indicates the starting and ending index of the sub-region in the text query that match the found title.
 *
 * @public
 */
export interface SubRegionHighlights {
  /**
   * Indicates the starting and ending index of the sub-region in the text query that match the found title.
   *
   * @public
   */
  Code?: Highlight[] | undefined;

  /**
   * Indicates the starting and ending index of the name in the text query that match the found title.
   *
   * @public
   */
  Name?: Highlight[] | undefined;
}

/**
 * Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms.
 *
 * @public
 */
export interface AutocompleteAddressHighlights {
  /**
   * Indicates the starting and ending indexes for result items where they are identified to match the input query. This should be used to provide emphasis to output display to make selecting the correct result from a list easier for end users.
   *
   * @public
   */
  Label?: Highlight[] | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the country that the results will be present in.
   *
   * @public
   */
  Country?: CountryHighlights | undefined;

  /**
   * The region or state results should be to be present in.
   *
   * Example: `North Rhine-Westphalia`.
   *
   * @public
   */
  Region?: RegionHighlights | undefined;

  /**
   * The sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: SubRegionHighlights | undefined;

  /**
   * The city or locality results should be present in.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: Highlight[] | undefined;

  /**
   * The district or division of a city the results should be present in.
   *
   * @public
   */
  District?: Highlight[] | undefined;

  /**
   * Indicates the starting and ending index of the title in the text query that match the found title.
   *
   * @public
   */
  SubDistrict?: Highlight[] | undefined;

  /**
   * The name of the street results should be present in.
   *
   * @public
   */
  Street?: Highlight[] | undefined;

  /**
   * Name of the block.
   *
   * Example: `Sunny Mansion 203 block: 2 Chome`
   *
   * @public
   */
  Block?: Highlight[] | undefined;

  /**
   * Name of sub-block.
   *
   * Example: `Sunny Mansion 203 sub-block: 4`
   *
   * @public
   */
  SubBlock?: Highlight[] | undefined;

  /**
   * Name of the streets in the intersection. For example: e.g. ["Friedrichstraße","Unter den Linden"]
   *
   * @public
   */
  Intersection?: Highlight[][] | undefined;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess.
   *
   * @public
   */
  PostalCode?: Highlight[] | undefined;

  /**
   * The house number or address results should have.
   *
   * @public
   */
  AddressNumber?: Highlight[] | undefined;

  /**
   * The name of the building at the address.
   *
   * @public
   */
  Building?: Highlight[] | undefined;
}

/**
 * Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms.
 *
 * @public
 */
export interface AutocompleteHighlights {
  /**
   * Indicates where the title field in the result matches the input query.
   *
   * @public
   */
  Title?: Highlight[] | undefined;

  /**
   * Describes how part of the result address match the input query.
   *
   * @public
   */
  Address?: AutocompleteAddressHighlights | undefined;
}

/**
 * A result matching the input query text.
 *
 * @public
 */
export interface AutocompleteResultItem {
  /**
   * The PlaceId of the place associated with this result. This can be used to look up additional details about the result via GetPlace.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * PlaceType describes the type of result entry returned.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * A formatted string for display when presenting this result to an end user.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The address associated with this result.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The distance in meters between the center of the search area and this result. Useful to evaluate how far away from the original bias position the result is.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates the starting and ending index of the place in the text query that match the found title.
   *
   * @public
   */
  Highlights?: AutocompleteHighlights | undefined;

  /**
   * If `true`, indicates that the coordinates of the position and access points of the point address are estimated.
   *
   * @public
   */
  EstimatedPointAddress?: boolean | undefined;
}

/**
 * @public
 */
export interface AutocompleteResponse {
  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: AutocompleteResultItem[] | undefined;
}

/**
 * The input fails to satisfy the constraints specified by the Amazon Location service.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A businesschain is a chain of businesses that belong to the same brand. For example `7-11`.
 *
 * @public
 */
export interface BusinessChain {
  /**
   * The business chain name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Business Chain Id.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Indicates how well the returned title and address components matches the input TextQuery. For each component a score is provied with 1 indicating all tokens were matched and 0 indicating no tokens were matched.
 *
 * @public
 */
export interface ComponentMatchScores {
  /**
   * Indicates the match score of the title in the text query that match the found title.
   *
   * @public
   */
  Title?: number | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: AddressComponentMatchScores | undefined;
}

/**
 * Details related to contacts.
 *
 * @public
 */
export interface ContactDetails {
  /**
   * The contact's label.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The contact's value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Categories of results that results must belong too.
   *
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * A list of potential contact methods for the result/place.
 *
 * @public
 */
export interface Contacts {
  /**
   * List of phone numbers for the results contact.
   *
   * @public
   */
  Phones?: ContactDetails[] | undefined;

  /**
   * List of fax addresses for the result contact.
   *
   * @public
   */
  Faxes?: ContactDetails[] | undefined;

  /**
   * List of website URLs that belong to the result.
   *
   * @public
   */
  Websites?: ContactDetails[] | undefined;

  /**
   * List of emails for contacts of the result.
   *
   * @public
   */
  Emails?: ContactDetails[] | undefined;
}

/**
 * A reference to a third-party supplier's identifier for a place, enabling correlation of places across external systems.
 *
 * @public
 */
export interface CrossReference {
  /**
   * The name of the third-party data supplier (for example, `Yelp` or `TripAdvisor`).
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The place identifier assigned by the third-party supplier.
   *
   * @public
   */
  SourcePlaceId: string | undefined;

  /**
   * The list of place category identifiers this supplier reference relates to.
   *
   * @public
   */
  SourceCategories?: Category[] | undefined;
}

/**
 * List of `Food` types offered by this result.
 *
 * @public
 */
export interface FoodType {
  /**
   * Localized name of the food type.
   *
   * @public
   */
  LocalizedName: string | undefined;

  /**
   * The Food Type Id.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Boolean which indicates if this food type is the primary offered by the place. For example, if a location serves fast food, but also dessert, he primary would likely be fast food.
   *
   * @public
   */
  Primary?: boolean | undefined;
}

/**
 * Geocode structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
 *
 * @public
 */
export interface GeocodeFilter {
  /**
   * A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.
   *
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * The included place types.
   *
   * @public
   */
  IncludePlaceTypes?: GeocodeFilterPlaceType[] | undefined;
}

/**
 * A structured free text query allows you to search for places by the name or text representation of specific properties of the place.
 *
 * @public
 */
export interface GeocodeQueryComponents {
  /**
   * The alpha-2 or alpha-3 character code for the country that the results will be present in.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The region or state results should be to be present in.
   *
   * Example: `North Rhine-Westphalia`.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: string | undefined;

  /**
   * The city or locality results should be present in.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: string | undefined;

  /**
   * The district or division of a city the results should be present in.
   *
   * @public
   */
  District?: string | undefined;

  /**
   * The name of the street results should be present in.
   *
   * @public
   */
  Street?: string | undefined;

  /**
   * The house number or address results should have.
   *
   * @public
   */
  AddressNumber?: string | undefined;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess.
   *
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * @public
 */
export interface GeocodeRequest {
  /**
   * The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.
   *
   * @public
   */
  QueryText?: string | undefined;

  /**
   * A structured free text query allows you to search for places by the name or text representation of specific properties of the place.
   *
   * @public
   */
  QueryComponents?: GeocodeQueryComponents | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in `[lng, lat]` and in the WGS 84 format.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: GeocodeFilter | undefined;

  /**
   * A list of optional additional parameters, such as time zone, that can be requested for each result.
   *
   * @public
   */
  AdditionalFeatures?: GeocodeAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored). Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** When storing `Geocode` responses, you *must* set this field to `Storage` to comply with the terms of service. These requests will be charged at a higher rate. Please review the [user agreement](https://aws.amazon.com/location/sla/) and [service pricing structure](https://aws.amazon.com/location/pricing/) to determine the correct setting for your use case.
   *
   * @public
   */
  IntendedUse?: GeocodeIntendedUse | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The `PostalCodeMode` affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value `EnumerateSpannedLocalities`, all cities in that postal code are returned. If it's populated with the value `EnumerateSpannedDistricts`, all combinations of the postal code with the corresponding district and city names are returned.
   *
   * @public
   */
  PostalCodeMode?: PostalCodeMode | undefined;

  /**
   * Specifies which address components to include translations for. Translations include all name variants and alternative names for the requested fields in all available languages. Valid values are `District`, `Locality`, `Region`, and `SubRegion`.
   *
   * @public
   */
  AddressTranslations?: AddressTranslationComponent[] | undefined;

  /**
   * Specifies how address names are returned. If not set, the service returns normalized (official) names by default. When set to `Matched`, address names in the response are based on the input query rather than official names. When set to `Administrative`, the service returns the official administrative names for address components. `Administrative` currently applies only to addresses in the United States.
   *
   * @public
   */
  AddressNamesMode?: GeocodeAddressNamesMode | undefined;
}

/**
 * All Intersections that are near the provided address.
 *
 * @public
 */
export interface Intersection {
  /**
   * The `PlaceId` of the place result.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The distance from the routing position of the nearby address to the street result.
   *
   * @public
   */
  RouteDistance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set of four coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;
}

/**
 * Place that is related to the result item.
 *
 * @public
 */
export interface RelatedPlace {
  /**
   * The `PlaceId` of the place result.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;
}

/**
 * Details related to the match score.
 *
 * @public
 */
export interface MatchScoreDetails {
  /**
   * Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.
   *
   * @public
   */
  Overall?: number | undefined;

  /**
   * Indicates how well the component input matches the returned. It is equal to 1 if all input tokens are recognized and matched.
   *
   * @public
   */
  Components?: ComponentMatchScores | undefined;
}

/**
 * Parsed components in the provided QueryText.
 *
 * @public
 */
export interface ParsedQueryComponent {
  /**
   * Start index of the parsed query component.
   *
   * @public
   */
  StartIndex?: number | undefined;

  /**
   * End index of the parsed query component.
   *
   * @public
   */
  EndIndex?: number | undefined;

  /**
   * Value of the parsed query component.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The address component that the parsed query component corresponds to.
   *
   * @public
   */
  QueryComponent?: string | undefined;
}

/**
 * Information about a secondary address component parsed from the query text.
 *
 * @public
 */
export interface ParsedQuerySecondaryAddressComponent {
  /**
   * Start index of the parsed secondary address component in the query text.
   *
   * @public
   */
  StartIndex: number | undefined;

  /**
   * End index of the parsed secondary address component in the query text.
   *
   * @public
   */
  EndIndex: number | undefined;

  /**
   * Value of the parsed secondary address component.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Secondary address number provided in the query.
   *
   * @public
   */
  Number: string | undefined;

  /**
   * Secondary address designator provided in the query.
   *
   * @public
   */
  Designator: string | undefined;
}

/**
 * Parsed address components in the provided QueryText.
 *
 * @public
 */
export interface GeocodeParsedQueryAddressComponents {
  /**
   * The alpha-2 or alpha-3 character code for the country that the results will be present in.
   *
   * @public
   */
  Country?: ParsedQueryComponent[] | undefined;

  /**
   * The region or state results should be present in.
   *
   * Example: `North Rhine-Westphalia`.
   *
   * @public
   */
  Region?: ParsedQueryComponent[] | undefined;

  /**
   * The sub-region or county for which results should be present in.
   *
   * @public
   */
  SubRegion?: ParsedQueryComponent[] | undefined;

  /**
   * The city or locality of the address.
   *
   * Example: `Vancouver`.
   *
   * @public
   */
  Locality?: ParsedQueryComponent[] | undefined;

  /**
   * The district or division of a city the results should be present in.
   *
   * @public
   */
  District?: ParsedQueryComponent[] | undefined;

  /**
   * A subdivision of a district.
   *
   * Example: `Minden-Lübbecke`.
   *
   * @public
   */
  SubDistrict?: ParsedQueryComponent[] | undefined;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code, for which the result should possess.
   *
   * @public
   */
  PostalCode?: ParsedQueryComponent[] | undefined;

  /**
   * Name of the block.
   *
   * Example: `Sunny Mansion 203 block: 2 Chome`
   *
   * @public
   */
  Block?: ParsedQueryComponent[] | undefined;

  /**
   * Name of sub-block.
   *
   * Example: `Sunny Mansion 203 sub-block: 4`
   *
   * @public
   */
  SubBlock?: ParsedQueryComponent[] | undefined;

  /**
   * The name of the street results should be present in.
   *
   * @public
   */
  Street?: ParsedQueryComponent[] | undefined;

  /**
   * The number that identifies an address within a street.
   *
   * @public
   */
  AddressNumber?: ParsedQueryComponent[] | undefined;

  /**
   * The name of the building at the address.
   *
   * @public
   */
  Building?: ParsedQueryComponent[] | undefined;

  /**
   * Parsed secondary address components from the provided query text.
   *
   * > **Note:**
   * >
   * > Coverage for `ParsedQuery.Address.SecondaryAddressComponents` is available in the following countries:
   * >
   * > AUS, AUT, BRA, CAN, ESP, FRA, GBR, HKG, IDN, IND, NZL, TUR, TWN, USA
   *
   * @public
   */
  SecondaryAddressComponents?: ParsedQuerySecondaryAddressComponent[] | undefined;

  /**
   * Additional information extracted from the query that does not correspond to standard address components.
   *
   * @public
   */
  OtherComponents?: ParsedQueryComponent[] | undefined;
}

/**
 * Parsed components in the provided QueryText.
 *
 * @public
 */
export interface GeocodeParsedQuery {
  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title?: ParsedQueryComponent[] | undefined;

  /**
   * The place address.
   *
   * @public
   */
  Address?: GeocodeParsedQueryAddressComponents | undefined;
}

/**
 * The USPS zip code.
 *
 * @public
 */
export interface UspsZip {
  /**
   * The ZIP Classification Code, or in other words what type of postal code is it.
   *
   * @public
   */
  ZipClassificationCode?: ZipClassificationCode | undefined;
}

/**
 * The USPS zip+4 code.
 *
 * @public
 */
export interface UspsZipPlus4 {
  /**
   * The USPS ZIP+4 Record Type Code.
   *
   * @public
   */
  RecordTypeCode?: RecordTypeCode | undefined;
}

/**
 * Contains details about the postal code of the place or result.
 *
 * @public
 */
export interface PostalCodeDetails {
  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code for which the result should possess.
   *
   * @public
   */
  PostalCode?: string | undefined;

  /**
   * The postal authority or entity. This could be a governmental authority, a regulatory authority, or a designated postal operator.
   *
   * @public
   */
  PostalAuthority?: PostalAuthority | undefined;

  /**
   * The postal code type.
   *
   * @public
   */
  PostalCodeType?: PostalCodeType | undefined;

  /**
   * The ZIP Classification Code, or in other words what type of postal code is it.
   *
   * @public
   */
  UspsZip?: UspsZip | undefined;

  /**
   * The USPS ZIP+4 Record Type Code.
   *
   * @public
   */
  UspsZipPlus4?: UspsZipPlus4 | undefined;
}

/**
 * The time zone in which the place is located.
 *
 * @public
 */
export interface TimeZone {
  /**
   * The time zone name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Time zone offset of the timezone from UTC.
   *
   * @public
   */
  Offset?: string | undefined;

  /**
   * The offset of the time zone from UTC, in seconds.
   *
   * @public
   */
  OffsetSeconds?: number | undefined;
}

/**
 * Translation details for the address, including alternative names and translations in available languages.
 *
 * @public
 */
export interface TranslationDetails {
  /**
   * A list of administrative names and translations for the locality address component.
   *
   * @public
   */
  Locality?: AdminNames[] | undefined;

  /**
   * A list of administrative names and translations for the region address component.
   *
   * @public
   */
  Region?: AdminNames[] | undefined;

  /**
   * A list of administrative names and translations for the district address component.
   *
   * @public
   */
  District?: AdminNames[] | undefined;

  /**
   * A list of administrative names and translations for the sub-region address component.
   *
   * @public
   */
  SubRegion?: AdminNames[] | undefined;
}

/**
 * The Geocoded result.
 *
 * @public
 */
export interface GeocodeResultItem {
  /**
   * The `PlaceId` of the place result.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Boolean indicating if the address provided has been corrected.
   *
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * Contains details about the postal code of the place/result.
   *
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates how well the entire input matches the returned. It is equal to 1 if all input tokens are recognized and matched.
   *
   * @public
   */
  MatchScores?: MatchScoreDetails | undefined;

  /**
   * Free-form text query.
   *
   * @public
   */
  ParsedQuery?: GeocodeParsedQuery | undefined;

  /**
   * All Intersections that are near the provided address.
   *
   * @public
   */
  Intersections?: Intersection[] | undefined;

  /**
   * The main address corresponding to a place of type Secondary Address.
   *
   * @public
   */
  MainAddress?: RelatedPlace | undefined;

  /**
   * All secondary addresses that are associated with a main address. A secondary address is one that includes secondary designators, such as a Suite or Unit Number, Building, or Floor information.
   *
   * > **Note:** Coverage for this functionality is available in the following countries: AUS, CAN, NZL, USA, PRI.
   *
   * @public
   */
  SecondaryAddresses?: RelatedPlace[] | undefined;

  /**
   * All name translations and alternative names for the requested address fields in all available languages.
   *
   * @public
   */
  Translations?: TranslationDetails | undefined;

  /**
   * If `true`, indicates that the coordinates of the position and access points of the point address are estimated.
   *
   * @public
   */
  EstimatedPointAddress?: boolean | undefined;
}

/**
 * @public
 */
export interface GeocodeResponse {
  /**
   * The pricing bucket for which the query is charged at, or the maximum pricing bucket when the query is charged per item within the query.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: GeocodeResultItem[] | undefined;
}

/**
 * @public
 */
export interface GetPlaceRequest {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A list of optional additional parameters such as time zone that can be requested for each result. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `TimeZone` value.
   *
   * @public
   */
  AdditionalFeatures?: GetPlaceAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the following codes: `en, id, km, lo, ms, my, pt, th, tl, vi, zh`
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored). Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** When storing `GetPlace` responses, you *must* set this field to `Storage` to comply with the terms of service. These requests will be charged at a higher rate. Please review the [user agreement](https://aws.amazon.com/location/sla/) and [service pricing structure](https://aws.amazon.com/location/pricing/) to determine the correct setting for your use case.
   *
   * @public
   */
  IntendedUse?: GetPlaceIntendedUse | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Specifies how address names are returned. When set to `Administrative`, the service returns the official administrative names for address components. `Administrative` currently applies only to addresses in the United States.
   *
   * @public
   */
  AddressNamesMode?: GetPlaceAddressNamesMode | undefined;
}

/**
 * Components of the opening hours object.
 *
 * @public
 */
export interface OpeningHoursComponents {
  /**
   * String which represents the opening hours, such as `"T070000"`.
   *
   * @public
   */
  OpenTime?: string | undefined;

  /**
   * String which represents the duration of the opening period, such as `"PT12H00M"`.
   *
   * @public
   */
  OpenDuration?: string | undefined;

  /**
   * Days or periods when the provided opening hours are in affect.
   *
   * Example: `FREQ:DAILY;BYDAY:MO,TU,WE,TH,SU`
   *
   * @public
   */
  Recurrence?: string | undefined;
}

/**
 * List of opening hours objects.
 *
 * @public
 */
export interface OpeningHours {
  /**
   * List of opening hours in the format they are displayed in. This can vary by result and in most cases represents how the result uniquely formats their opening hours.
   *
   * @public
   */
  Display?: string[] | undefined;

  /**
   * Boolean which indicates if the result/place is currently open.
   *
   * @public
   */
  OpenNow?: boolean | undefined;

  /**
   * Components of the opening hours object.
   *
   * @public
   */
  Components?: OpeningHoursComponents[] | undefined;

  /**
   * Categories of results that results must belong too.
   *
   * @public
   */
  Categories?: Category[] | undefined;
}

/**
 * The phoneme details.
 *
 * @public
 */
export interface PhonemeDetails {
  /**
   * List of `PhonemeTranscription`. See `PhonemeTranscription` for fields.
   *
   * @public
   */
  Title?: PhonemeTranscription[] | undefined;

  /**
   * How to pronounce the address.
   *
   * @public
   */
  Address?: AddressComponentPhonemes | undefined;
}

/**
 * @public
 */
export interface GetPlaceResponse {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Boolean indicating if the address provided has been corrected. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * Contains details about the postal code of the place/result. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set of four coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * The Business Chains associated with the place.
   *
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * List of potential contact methods for the result/place. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * List of opening hours objects. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude]. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * How the various components of the result's address are pronounced in various languages. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;

  /**
   * The main address corresponding to a place of type Secondary Address. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  MainAddress?: RelatedPlace | undefined;

  /**
   * All secondary addresses that are associated with a main address. A secondary address is one that includes secondary designators, such as a Suite or Unit Number, Building, or Floor information. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** Coverage for this functionality is available in the following countries: AUS, CAN, NZL, USA, PRI.
   *
   * @public
   */
  SecondaryAddresses?: RelatedPlace[] | undefined;

  /**
   * A list of place attributes for the result, such as whether the business offers drive-through service.
   *
   * @public
   */
  PlaceAttributes?: PlaceAttribute[] | undefined;

  /**
   * If `true`, indicates that the coordinates of the position and access points of the point address are estimated.
   *
   * @public
   */
  EstimatedPointAddress?: boolean | undefined;

  /**
   * The list of supplier references available for this place. Requires the `CrossReferences` additional feature to be enabled.
   *
   * @public
   */
  CrossReferences?: CrossReference[] | undefined;
}

/**
 * The included place types.
 *
 * @public
 */
export interface ReverseGeocodeFilter {
  /**
   * The included place types. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `Street` and `PointAddress` values.
   *
   * @public
   */
  IncludePlaceTypes?: ReverseGeocodeFilterPlaceType[] | undefined;
}

/**
 * @public
 */
export interface ReverseGeocodeRequest {
  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude] for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position
   *
   * @public
   */
  QueryPosition: number[] | undefined;

  /**
   * The maximum distance in meters from the QueryPosition from which a result will be returned. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only up to a maximum value of 100,000.
   *
   * @public
   */
  QueryRadius?: number | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 1
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: ReverseGeocodeFilter | undefined;

  /**
   * A list of optional additional parameters, such as time zone that can be requested for each result. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `TimeZone` value.
   *
   * @public
   */
  AdditionalFeatures?: ReverseGeocodeAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the following codes: `en, id, km, lo, ms, my, pt, th, tl, vi, zh`
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored).
   *
   * > **Note:** When storing `ReverseGeocode` responses, you *must* set this field to `Storage` to comply with the terms of service. These requests will be charged at a higher rate. Please review the [user agreement](https://aws.amazon.com/location/sla/) and [service pricing structure](https://aws.amazon.com/location/pricing/) to determine the correct setting for your use case.
   *
   * @public
   */
  IntendedUse?: ReverseGeocodeIntendedUse | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The heading in degrees from true north in a navigation context. The heading is measured as the angle clockwise from the North direction.
   *
   * Example: North is `0` degrees, East is `90` degrees, South is `180` degrees, and West is `270` degrees.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Specifies how address names are returned. When set to `Administrative`, the service returns the official administrative names for address components. `Administrative` currently applies only to addresses in the United States.
   *
   * @public
   */
  AddressNamesMode?: ReverseGeocodeAddressNamesMode | undefined;
}

/**
 * The returned location from the `Reverse Geocode` action.
 *
 * @public
 */
export interface ReverseGeocodeResultItem {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The localized display name of this result item based on request parameter `language`.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Boolean indicating if the address provided has been corrected. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * Contains details about the postal code of the place/result. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PostalCodeDetails?: PostalCodeDetails[] | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude]. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * All Intersections that are near the provided address. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Intersections?: Intersection[] | undefined;

  /**
   * The main address corresponding to a place of type Secondary Address.
   *
   * @public
   */
  MainAddress?: RelatedPlace | undefined;

  /**
   * If `true`, indicates that the coordinates of the position and access points of the point address are estimated.
   *
   * @public
   */
  EstimatedPointAddress?: boolean | undefined;
}

/**
 * @public
 */
export interface ReverseGeocodeResponse {
  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: ReverseGeocodeResultItem[] | undefined;
}

/**
 * SearchNearby structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
 *
 * @public
 */
export interface SearchNearbyFilter {
  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.
   *
   * @public
   */
  IncludeCountries?: string[] | undefined;

  /**
   * Categories of results that results must belong too.
   *
   * @public
   */
  IncludeCategories?: string[] | undefined;

  /**
   * Categories of results that results are excluded from.
   *
   * @public
   */
  ExcludeCategories?: string[] | undefined;

  /**
   * The Business Chains associated with the place.
   *
   * @public
   */
  IncludeBusinessChains?: string[] | undefined;

  /**
   * The Business Chains associated with the place.
   *
   * @public
   */
  ExcludeBusinessChains?: string[] | undefined;

  /**
   * Food types that results are included from.
   *
   * @public
   */
  IncludeFoodTypes?: string[] | undefined;

  /**
   * Food types that results are excluded from.
   *
   * @public
   */
  ExcludeFoodTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchNearbyRequest {
  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude] for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position
   *
   * @public
   */
  QueryPosition: number[] | undefined;

  /**
   * The maximum distance in meters from the QueryPosition from which a result will be returned.
   *
   * > **Note:** The fields `QueryText`, and `QueryID` are mutually exclusive.
   *
   * @public
   */
  QueryRadius?: number | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: SearchNearbyFilter | undefined;

  /**
   * A list of optional additional parameters, such as time zone, that can be requested for each result.
   *
   * @public
   */
  AdditionalFeatures?: SearchNearbyAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored). Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** When storing `SearchNearby` responses, you *must* set this field to `Storage` to comply with the terms of service. These requests will be charged at a higher rate. Please review the [user agreement](https://aws.amazon.com/location/sla/) and [service pricing structure](https://aws.amazon.com/location/pricing/) to determine the correct setting for your use case.
   *
   * @public
   */
  IntendedUse?: SearchNearbyIntendedUse | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The search results of nearby places.
 *
 * @public
 */
export interface SearchNearbyResultItem {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The item's title.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Boolean indicating if the address provided has been corrected.
   *
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * The Business Chains associated with the place.
   *
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * List of potential contact methods for the result/place.
   *
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * List of opening hours objects.
   *
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.
   *
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * How the various components of the result's address are pronounced in various languages.
   *
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;

  /**
   * A list of place attributes for the result, such as whether the business offers drive-through service.
   *
   * @public
   */
  PlaceAttributes?: PlaceAttribute[] | undefined;

  /**
   * The list of supplier references available for this place. Requires the `CrossReferences` additional feature to be enabled.
   *
   * @public
   */
  CrossReferences?: CrossReference[] | undefined;
}

/**
 * @public
 */
export interface SearchNearbyResponse {
  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: SearchNearbyResultItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * SearchText structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
 *
 * @public
 */
export interface SearchTextFilter {
  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * The `Circle` that all results must be in.
   *
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.
   *
   * @public
   */
  IncludeCountries?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchTextRequest {
  /**
   * The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.
   *
   * > **Note:** Exactly one of the following fields must be set: `QueryText` or `QueryId`.
   *
   * @public
   */
  QueryText?: string | undefined;

  /**
   * The query Id returned by the suggest API. If passed in the request, the SearchText API will preform a SearchText query with the improved query terms for the original query made to the suggest API. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** Exactly one of the following fields must be set: `QueryText` or `QueryId`.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in `[lng, lat]` and in the WGS 84 format.
   *
   * > **Note:** Exactly one of the following fields must be set: `BiasPosition`, `Filter.BoundingBox`, or `Filter.Circle`.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: SearchTextFilter | undefined;

  /**
   * A list of optional additional parameters, such as time zone, that can be requested for each result. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `TimeZone` value.
   *
   * @public
   */
  AdditionalFeatures?: SearchTextAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the following codes: `en, id, km, lo, ms, my, pt, th, tl, vi, zh`
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored).
   *
   * > **Note:** When storing `SearchText` responses, you *must* set this field to `Storage` to comply with the terms of service. These requests will be charged at a higher rate. Please review the [user agreement](https://aws.amazon.com/location/sla/) and [service pricing structure](https://aws.amazon.com/location/pricing/) to determine the correct setting for your use case.
   *
   * @public
   */
  IntendedUse?: SearchTextIntendedUse | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Indicates the mode of mobility used by the end user. This is used to improve the relevance of search results. Valid values are `Car`, `Scooter`, and `Truck`.
   *
   * @public
   */
  TravelMode?: SearchTextTravelMode | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The text search result.
 *
 * @public
 */
export interface SearchTextResultItem {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType: PlaceType | undefined;

  /**
   * The item's title.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * Boolean indicating if the address provided has been corrected.
   *
   * @public
   */
  AddressNumberCorrected?: boolean | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * The Business Chains associated with the place.
   *
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * List of potential contact methods for the result/place.
   *
   * @public
   */
  Contacts?: Contacts | undefined;

  /**
   * List of opening hours objects. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  OpeningHours?: OpeningHours[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction.
   *
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * How the various components of the result's address are pronounced in various languages.
   *
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;

  /**
   * A list of place attributes for the result, such as whether the business offers drive-through service.
   *
   * @public
   */
  PlaceAttributes?: PlaceAttribute[] | undefined;

  /**
   * The list of supplier references available for this place. Requires the `CrossReferences` additional feature to be enabled.
   *
   * @public
   */
  CrossReferences?: CrossReference[] | undefined;
}

/**
 * @public
 */
export interface SearchTextResponse {
  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: SearchTextResultItem[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * SuggestFilter structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
 *
 * @public
 */
export interface SuggestFilter {
  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * The `Circle` that all results must be in.
   *
   * @public
   */
  Circle?: FilterCircle | undefined;

  /**
   * A list of countries that all results must be in. Countries are represented by either their alpha-2 or alpha-3 character codes.
   *
   * @public
   */
  IncludeCountries?: string[] | undefined;
}

/**
 * @public
 */
export interface SuggestRequest {
  /**
   * The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.
   *
   * > **Note:** The fields `QueryText` and `QueryID` are mutually exclusive.
   *
   * @public
   */
  QueryText: string | undefined;

  /**
   * An optional limit for the number of results returned in a single call.
   *
   * Default value: 20
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Maximum number of query terms to be returned for use with a search text query. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  MaxQueryRefinements?: number | undefined;

  /**
   * The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in `[lng, lat]` and in the WGS 84 format.
   *
   * > **Note:** The fields `BiasPosition`, `FilterBoundingBox`, and `FilterCircle` are mutually exclusive.
   *
   * @public
   */
  BiasPosition?: number[] | undefined;

  /**
   * A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result.
   *
   * @public
   */
  Filter?: SuggestFilter | undefined;

  /**
   * A list of optional additional parameters, such as time zone, that can be requested for each result. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the `Core` and `TimeZone` values.
   *
   * @public
   */
  AdditionalFeatures?: SuggestAdditionalFeature[] | undefined;

  /**
   * A list of [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only the following codes: `en, id, km, lo, ms, my, pt, th, tl, vi, zh`
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * Indicates if the query results will be persisted in customer infrastructure. Defaults to `SingleUse` (not stored). Currently, `Suggest` does not support storage of results.
   *
   * @public
   */
  IntendedUse?: SuggestIntendedUse | undefined;

  /**
   * Indicates the mode of mobility used by the end user. This is used to improve the relevance of search results. Valid values are `Car`, `Scooter`, and `Truck`.
   *
   * @public
   */
  TravelMode?: SuggestTravelMode | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * Suggestions for refining individual query terms. Suggestions are returned as objects which note the term, suggested replacement, and its index in the query.
 *
 * @public
 */
export interface QueryRefinement {
  /**
   * The term that will be suggested to the user.
   *
   * @public
   */
  RefinedTerm: string | undefined;

  /**
   * The sub-string of the original query that is replaced by this query term.
   *
   * @public
   */
  OriginalTerm: string | undefined;

  /**
   * Start index of the parsed component.
   *
   * @public
   */
  StartIndex: number | undefined;

  /**
   * End index of the parsed query.
   *
   * @public
   */
  EndIndex: number | undefined;
}

/**
 * Describes how the parts of the textQuery matched the input query by returning the sections of the response which matched to textQuery terms.
 *
 * @public
 */
export interface SuggestAddressHighlights {
  /**
   * Indicates the starting and ending indexes of the places in the result which were identified to match the textQuery. This result is useful for providing emphasis to results where the user query directly matched to make selecting the correct result from a list easier for an end user.
   *
   * @public
   */
  Label?: Highlight[] | undefined;
}

/**
 * Describes how the parts of the textQuery matched the input query by returning the sections of the response which matched to textQuery terms.
 *
 * @public
 */
export interface SuggestHighlights {
  /**
   * Indicates the starting and ending index of the title in the text query that match the found title.
   *
   * @public
   */
  Title?: Highlight[] | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: SuggestAddressHighlights | undefined;
}

/**
 * The suggested place results.
 *
 * @public
 */
export interface SuggestPlaceResult {
  /**
   * The `PlaceId` of the place you wish to receive the information for.
   *
   * @public
   */
  PlaceId?: string | undefined;

  /**
   * A `PlaceType` is a category that the result place must belong to.
   *
   * @public
   */
  PlaceType?: PlaceType | undefined;

  /**
   * The place's address.
   *
   * @public
   */
  Address?: Address | undefined;

  /**
   * The position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position?: number[] | undefined;

  /**
   * The distance in meters from the QueryPosition.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * The bounding box enclosing the geometric shape (area or line) that an individual result covers.
   *
   * The bounding box formed is defined as a set 4 coordinates: `[\{westward lng\}, \{southern lat\}, \{eastward lng\}, \{northern lat\}]`
   *
   * @public
   */
  MapView?: number[] | undefined;

  /**
   * Categories of results that results must belong to.
   *
   * @public
   */
  Categories?: Category[] | undefined;

  /**
   * List of food types offered by this result. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  FoodTypes?: FoodType[] | undefined;

  /**
   * The Business Chains associated with the place. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  BusinessChains?: BusinessChain[] | undefined;

  /**
   * Position of the access point in World Geodetic System (WGS 84) format: [longitude, latitude]. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AccessPoints?: AccessPoint[] | undefined;

  /**
   * Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AccessRestrictions?: AccessRestriction[] | undefined;

  /**
   * The time zone in which the place is located.
   *
   * @public
   */
  TimeZone?: TimeZone | undefined;

  /**
   * The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PoliticalView?: string | undefined;

  /**
   * How the various components of the result's address are pronounced in various languages. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Phonemes?: PhonemeDetails | undefined;

  /**
   * A list of place attributes for the result, such as whether the business offers drive-through service.
   *
   * @public
   */
  PlaceAttributes?: PlaceAttribute[] | undefined;

  /**
   * The list of supplier references available for this place. Requires the `CrossReferences` additional feature to be enabled.
   *
   * @public
   */
  CrossReferences?: CrossReference[] | undefined;
}

/**
 * The suggested query results.
 *
 * @public
 */
export interface SuggestQueryResult {
  /**
   * QueryId can be used to complete a follow up query through the SearchText API. The QueryId retains context from the original Suggest request such as filters, political view and language. See the SearchText API documentation for more details [SearchText API docs](https://docs.aws.amazon.com/location/latest/APIReference/API_geoplaces_SearchText.html). Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** The fields `QueryText`, and `QueryID` are mutually exclusive.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * The query type. Category queries will search for places which have an entry matching the given category, for example "doctor office". BusinessChain queries will search for instances of a given business. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  QueryType?: QueryType | undefined;
}

/**
 * The resulting item from the suggested query.
 *
 * @public
 */
export interface SuggestResultItem {
  /**
   * The display title that should be used when presenting this option to the end user.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * The result type. Place results represent the final result for a point of interest, Query results represent a follow up query which can be completed through the SearchText operation.
   *
   * @public
   */
  SuggestResultItemType: SuggestResultItemType | undefined;

  /**
   * The suggested place by its unique ID.
   *
   * @public
   */
  Place?: SuggestPlaceResult | undefined;

  /**
   * The suggested query results.
   *
   * @public
   */
  Query?: SuggestQueryResult | undefined;

  /**
   * Describes how the parts of the response element matched the input query by returning the sections of the response which matched to input query terms.
   *
   * @public
   */
  Highlights?: SuggestHighlights | undefined;
}

/**
 * @public
 */
export interface SuggestResponse {
  /**
   * The pricing bucket for which the query is charged at.
   *
   * For more information on pricing, please visit [Amazon Location Service Pricing](https://aws.amazon.com/location/pricing/).
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * List of places or results returned for a query.
   *
   * @public
   */
  ResultItems?: SuggestResultItem[] | undefined;

  /**
   * Maximum number of query terms to be returned for use with a search text query. Not available in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  QueryRefinements?: QueryRefinement[] | undefined;
}
