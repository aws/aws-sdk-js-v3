// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TranscriptionLanguage = {
  DEU: "deu",
  ENG: "eng",
  ENG_AU: "eng-au",
  ENG_GB: "eng-gb",
  ENG_US: "eng-us",
  FRA: "fra",
  ITA: "ita",
  POR: "por",
  SPA: "spa",
} as const;
/**
 * @public
 */
export type TranscriptionLanguage = (typeof TranscriptionLanguage)[keyof typeof TranscriptionLanguage];

/**
 * @public
 * @enum
 */
export const ProfanityFilterMode = {
  CENSOR: "CENSOR",
  DISABLED: "DISABLED",
  DROP: "DROP",
} as const;
/**
 * @public
 */
export type ProfanityFilterMode = (typeof ProfanityFilterMode)[keyof typeof ProfanityFilterMode];

/**
 * @public
 * @enum
 */
export const OutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus];

/**
 * @public
 * @enum
 */
export const DictionaryLanguage = {
  DEU: "deu",
  ENG: "eng",
  FRA: "fra",
  ITA: "ita",
  POR: "por",
  SPA: "spa",
} as const;
/**
 * @public
 */
export type DictionaryLanguage = (typeof DictionaryLanguage)[keyof typeof DictionaryLanguage];

/**
 * @public
 * @enum
 */
export const DictionaryStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  REFERENCED: "REFERENCED",
} as const;
/**
 * @public
 */
export type DictionaryStatus = (typeof DictionaryStatus)[keyof typeof DictionaryStatus];

/**
 * @public
 * @enum
 */
export const FeedStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FeedStatus = (typeof FeedStatus)[keyof typeof FeedStatus];
