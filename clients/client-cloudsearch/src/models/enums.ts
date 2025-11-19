// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AlgorithmicStemming = {
  full: "full",
  light: "light",
  minimal: "minimal",
  none: "none",
} as const;
/**
 * @public
 */
export type AlgorithmicStemming = (typeof AlgorithmicStemming)[keyof typeof AlgorithmicStemming];

/**
 * @public
 * @enum
 */
export const AnalysisSchemeLanguage = {
  ar: "ar",
  bg: "bg",
  ca: "ca",
  cs: "cs",
  da: "da",
  de: "de",
  el: "el",
  en: "en",
  es: "es",
  eu: "eu",
  fa: "fa",
  fi: "fi",
  fr: "fr",
  ga: "ga",
  gl: "gl",
  he: "he",
  hi: "hi",
  hu: "hu",
  hy: "hy",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  lv: "lv",
  mul: "mul",
  nl: "nl",
  no: "no",
  pt: "pt",
  ro: "ro",
  ru: "ru",
  sv: "sv",
  th: "th",
  tr: "tr",
  zh_Hans: "zh-Hans",
  zh_Hant: "zh-Hant",
} as const;
/**
 * @public
 */
export type AnalysisSchemeLanguage = (typeof AnalysisSchemeLanguage)[keyof typeof AnalysisSchemeLanguage];

/**
 * @public
 * @enum
 */
export const OptionState = {
  Active: "Active",
  FailedToValidate: "FailedToValidate",
  Processing: "Processing",
  RequiresIndexDocuments: "RequiresIndexDocuments",
} as const;
/**
 * @public
 */
export type OptionState = (typeof OptionState)[keyof typeof OptionState];

/**
 * @public
 * @enum
 */
export const IndexFieldType = {
  date: "date",
  date_array: "date-array",
  double: "double",
  double_array: "double-array",
  int: "int",
  int_array: "int-array",
  latlon: "latlon",
  literal: "literal",
  literal_array: "literal-array",
  text: "text",
  text_array: "text-array",
} as const;
/**
 * @public
 */
export type IndexFieldType = (typeof IndexFieldType)[keyof typeof IndexFieldType];

/**
 * @public
 * @enum
 */
export const SuggesterFuzzyMatching = {
  high: "high",
  low: "low",
  none: "none",
} as const;
/**
 * @public
 */
export type SuggesterFuzzyMatching = (typeof SuggesterFuzzyMatching)[keyof typeof SuggesterFuzzyMatching];

/**
 * @public
 * @enum
 */
export const TLSSecurityPolicy = {
  POLICY_MIN_TLS_1_0_2019_07: "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07: "Policy-Min-TLS-1-2-2019-07",
} as const;
/**
 * @public
 */
export type TLSSecurityPolicy = (typeof TLSSecurityPolicy)[keyof typeof TLSSecurityPolicy];

/**
 * @public
 * @enum
 */
export const PartitionInstanceType = {
  search_2xlarge: "search.2xlarge",
  search_large: "search.large",
  search_m1_large: "search.m1.large",
  search_m1_small: "search.m1.small",
  search_m2_2xlarge: "search.m2.2xlarge",
  search_m2_xlarge: "search.m2.xlarge",
  search_m3_2xlarge: "search.m3.2xlarge",
  search_m3_large: "search.m3.large",
  search_m3_medium: "search.m3.medium",
  search_m3_xlarge: "search.m3.xlarge",
  search_medium: "search.medium",
  search_previousgeneration_2xlarge: "search.previousgeneration.2xlarge",
  search_previousgeneration_large: "search.previousgeneration.large",
  search_previousgeneration_small: "search.previousgeneration.small",
  search_previousgeneration_xlarge: "search.previousgeneration.xlarge",
  search_small: "search.small",
  search_xlarge: "search.xlarge",
} as const;
/**
 * @public
 */
export type PartitionInstanceType = (typeof PartitionInstanceType)[keyof typeof PartitionInstanceType];
