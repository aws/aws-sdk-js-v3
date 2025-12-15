// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FilterNameStringType = {
  all: "all",
  description: "description",
  name: "name",
  owning_service: "owning-service",
  primary_region: "primary-region",
  tag_key: "tag-key",
  tag_value: "tag-value",
} as const;
/**
 * @public
 */
export type FilterNameStringType = (typeof FilterNameStringType)[keyof typeof FilterNameStringType];

/**
 * @public
 * @enum
 */
export const StatusType = {
  Failed: "Failed",
  InProgress: "InProgress",
  InSync: "InSync",
} as const;
/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 * @enum
 */
export const SortByType = {
  created_date: "created-date",
  last_accessed_date: "last-accessed-date",
  last_changed_date: "last-changed-date",
  name: "name",
} as const;
/**
 * @public
 */
export type SortByType = (typeof SortByType)[keyof typeof SortByType];

/**
 * @public
 * @enum
 */
export const SortOrderType = {
  asc: "asc",
  desc: "desc",
} as const;
/**
 * @public
 */
export type SortOrderType = (typeof SortOrderType)[keyof typeof SortOrderType];
