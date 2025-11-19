// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FeatureType = {
  FORMS: "FORMS",
  LAYOUT: "LAYOUT",
  QUERIES: "QUERIES",
  SIGNATURES: "SIGNATURES",
  TABLES: "TABLES",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const AdapterVersionStatus = {
  ACTIVE: "ACTIVE",
  AT_RISK: "AT_RISK",
  CREATION_ERROR: "CREATION_ERROR",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type AdapterVersionStatus = (typeof AdapterVersionStatus)[keyof typeof AdapterVersionStatus];

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;
/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * @enum
 */
export const BlockType = {
  CELL: "CELL",
  KEY_VALUE_SET: "KEY_VALUE_SET",
  LAYOUT_FIGURE: "LAYOUT_FIGURE",
  LAYOUT_FOOTER: "LAYOUT_FOOTER",
  LAYOUT_HEADER: "LAYOUT_HEADER",
  LAYOUT_KEY_VALUE: "LAYOUT_KEY_VALUE",
  LAYOUT_LIST: "LAYOUT_LIST",
  LAYOUT_PAGE_NUMBER: "LAYOUT_PAGE_NUMBER",
  LAYOUT_SECTION_HEADER: "LAYOUT_SECTION_HEADER",
  LAYOUT_TABLE: "LAYOUT_TABLE",
  LAYOUT_TEXT: "LAYOUT_TEXT",
  LAYOUT_TITLE: "LAYOUT_TITLE",
  LINE: "LINE",
  MERGED_CELL: "MERGED_CELL",
  PAGE: "PAGE",
  QUERY: "QUERY",
  QUERY_RESULT: "QUERY_RESULT",
  SELECTION_ELEMENT: "SELECTION_ELEMENT",
  SIGNATURE: "SIGNATURE",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  WORD: "WORD",
} as const;
/**
 * @public
 */
export type BlockType = (typeof BlockType)[keyof typeof BlockType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  COLUMN_HEADER: "COLUMN_HEADER",
  KEY: "KEY",
  SEMI_STRUCTURED_TABLE: "SEMI_STRUCTURED_TABLE",
  STRUCTURED_TABLE: "STRUCTURED_TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_SECTION_TITLE: "TABLE_SECTION_TITLE",
  TABLE_SUMMARY: "TABLE_SUMMARY",
  TABLE_TITLE: "TABLE_TITLE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  ANSWER: "ANSWER",
  CHILD: "CHILD",
  COMPLEX_FEATURES: "COMPLEX_FEATURES",
  MERGED_CELL: "MERGED_CELL",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * @enum
 */
export const SelectionStatus = {
  NOT_SELECTED: "NOT_SELECTED",
  SELECTED: "SELECTED",
} as const;
/**
 * @public
 */
export type SelectionStatus = (typeof SelectionStatus)[keyof typeof SelectionStatus];

/**
 * @public
 * @enum
 */
export const TextType = {
  HANDWRITING: "HANDWRITING",
  PRINTED: "PRINTED",
} as const;
/**
 * @public
 */
export type TextType = (typeof TextType)[keyof typeof TextType];

/**
 * @public
 * @enum
 */
export const ValueType = {
  DATE: "DATE",
} as const;
/**
 * @public
 */
export type ValueType = (typeof ValueType)[keyof typeof ValueType];

/**
 * @public
 * @enum
 */
export const AutoUpdate = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoUpdate = (typeof AutoUpdate)[keyof typeof AutoUpdate];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
