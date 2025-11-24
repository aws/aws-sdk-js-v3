// smithy-typescript generated code
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
