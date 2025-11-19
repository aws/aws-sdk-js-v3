// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FilterType = {
  ANY_OF: "ANY_OF",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NONE_OF: "NONE_OF",
  TERM_MATCH: "TERM_MATCH",
} as const;
/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];
