// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ColorScheme = {
  DARK: "Dark",
  LIGHT: "Light",
} as const;
/**
 * @public
 */
export type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme];

/**
 * @public
 * @enum
 */
export const ContourDensity = {
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type ContourDensity = (typeof ContourDensity)[keyof typeof ContourDensity];

/**
 * @public
 * @enum
 */
export const MapStyle = {
  HYBRID: "Hybrid",
  MONOCHROME: "Monochrome",
  SATELLITE: "Satellite",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type MapStyle = (typeof MapStyle)[keyof typeof MapStyle];

/**
 * @public
 * @enum
 */
export const Variant = {
  DEFAULT: "Default",
} as const;
/**
 * @public
 */
export type Variant = (typeof Variant)[keyof typeof Variant];

/**
 * @public
 * @enum
 */
export const LabelSize = {
  LARGE: "Large",
  SMALL: "Small",
} as const;
/**
 * @public
 */
export type LabelSize = (typeof LabelSize)[keyof typeof LabelSize];

/**
 * @public
 * @enum
 */
export const MapFeatureMode = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type MapFeatureMode = (typeof MapFeatureMode)[keyof typeof MapFeatureMode];

/**
 * @public
 * @enum
 */
export const ScaleBarUnit = {
  KILOMETERS: "Kilometers",
  KILOMETERS_MILES: "KilometersMiles",
  MILES: "Miles",
  MILES_KILOMETERS: "MilesKilometers",
} as const;
/**
 * @public
 */
export type ScaleBarUnit = (typeof ScaleBarUnit)[keyof typeof ScaleBarUnit];

/**
 * @public
 * @enum
 */
export const StaticMapStyle = {
  SATELLITE: "Satellite",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type StaticMapStyle = (typeof StaticMapStyle)[keyof typeof StaticMapStyle];

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
export const Terrain = {
  HILLSHADE: "Hillshade",
} as const;
/**
 * @public
 */
export type Terrain = (typeof Terrain)[keyof typeof Terrain];

/**
 * @public
 * @enum
 */
export const Traffic = {
  ALL: "All",
} as const;
/**
 * @public
 */
export type Traffic = (typeof Traffic)[keyof typeof Traffic];

/**
 * @public
 * @enum
 */
export const TravelMode = {
  TRANSIT: "Transit",
  TRUCK: "Truck",
} as const;
/**
 * @public
 */
export type TravelMode = (typeof TravelMode)[keyof typeof TravelMode];

/**
 * @public
 * @enum
 */
export const TileAdditionalFeature = {
  /**
   * Map elevation contour lines.
   */
  CONTOUR_LINES: "ContourLines",
  /**
   * Map hillshading details for shading elevation changes.
   */
  HILLSHADE: "Hillshade",
  /**
   * Map logistics details, including advanced pois and road networks.
   */
  LOGISTICS: "Logistics",
  /**
   * Map transit details.
   */
  TRANSIT: "Transit",
} as const;
/**
 * @public
 */
export type TileAdditionalFeature = (typeof TileAdditionalFeature)[keyof typeof TileAdditionalFeature];
