// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LocaleType = {
  DE: "de",
  DEFAULT: "default",
  EN: "en",
  ES: "es",
  FR: "fr",
  JA: "ja",
  KO: "ko",
  PT_BR: "pt_BR",
  RU: "ru",
  ZH_CN: "zh_CN",
  ZH_TW: "zh_TW",
} as const;
/**
 * @public
 */
export type LocaleType = (typeof LocaleType)[keyof typeof LocaleType];

/**
 * @public
 * @enum
 */
export const UserStatusType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type UserStatusType = (typeof UserStatusType)[keyof typeof UserStatusType];

/**
 * @public
 * @enum
 */
export const StorageType = {
  QUOTA: "QUOTA",
  UNLIMITED: "UNLIMITED",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const UserType = {
  ADMIN: "ADMIN",
  MINIMALUSER: "MINIMALUSER",
  POWERUSER: "POWERUSER",
  USER: "USER",
  WORKSPACESUSER: "WORKSPACESUSER",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const CommentStatusType = {
  DELETED: "DELETED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type CommentStatusType = (typeof CommentStatusType)[keyof typeof CommentStatusType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  DOCUMENT: "DOCUMENT",
  FOLDER: "FOLDER",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ActivityType = {
  DOCUMENT_ANNOTATION_ADDED: "DOCUMENT_ANNOTATION_ADDED",
  DOCUMENT_ANNOTATION_DELETED: "DOCUMENT_ANNOTATION_DELETED",
  DOCUMENT_CHECKED_IN: "DOCUMENT_CHECKED_IN",
  DOCUMENT_CHECKED_OUT: "DOCUMENT_CHECKED_OUT",
  DOCUMENT_COMMENT_ADDED: "DOCUMENT_COMMENT_ADDED",
  DOCUMENT_COMMENT_DELETED: "DOCUMENT_COMMENT_DELETED",
  DOCUMENT_MOVED: "DOCUMENT_MOVED",
  DOCUMENT_RECYCLED: "DOCUMENT_RECYCLED",
  DOCUMENT_RENAMED: "DOCUMENT_RENAMED",
  DOCUMENT_RESTORED: "DOCUMENT_RESTORED",
  DOCUMENT_REVERTED: "DOCUMENT_REVERTED",
  DOCUMENT_SHAREABLE_LINK_CREATED: "DOCUMENT_SHAREABLE_LINK_CREATED",
  DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED: "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED",
  DOCUMENT_SHAREABLE_LINK_REMOVED: "DOCUMENT_SHAREABLE_LINK_REMOVED",
  DOCUMENT_SHARED: "DOCUMENT_SHARED",
  DOCUMENT_SHARE_PERMISSION_CHANGED: "DOCUMENT_SHARE_PERMISSION_CHANGED",
  DOCUMENT_UNSHARED: "DOCUMENT_UNSHARED",
  DOCUMENT_VERSION_DELETED: "DOCUMENT_VERSION_DELETED",
  DOCUMENT_VERSION_DOWNLOADED: "DOCUMENT_VERSION_DOWNLOADED",
  DOCUMENT_VERSION_UPLOADED: "DOCUMENT_VERSION_UPLOADED",
  DOCUMENT_VERSION_VIEWED: "DOCUMENT_VERSION_VIEWED",
  FOLDER_CREATED: "FOLDER_CREATED",
  FOLDER_DELETED: "FOLDER_DELETED",
  FOLDER_MOVED: "FOLDER_MOVED",
  FOLDER_RECYCLED: "FOLDER_RECYCLED",
  FOLDER_RENAMED: "FOLDER_RENAMED",
  FOLDER_RESTORED: "FOLDER_RESTORED",
  FOLDER_SHAREABLE_LINK_CREATED: "FOLDER_SHAREABLE_LINK_CREATED",
  FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED: "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED",
  FOLDER_SHAREABLE_LINK_REMOVED: "FOLDER_SHAREABLE_LINK_REMOVED",
  FOLDER_SHARED: "FOLDER_SHARED",
  FOLDER_SHARE_PERMISSION_CHANGED: "FOLDER_SHARE_PERMISSION_CHANGED",
  FOLDER_UNSHARED: "FOLDER_UNSHARED",
} as const;
/**
 * @public
 */
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];

/**
 * @public
 * @enum
 */
export const AdditionalResponseFieldType = {
  WEBURL: "WEBURL",
} as const;
/**
 * @public
 */
export type AdditionalResponseFieldType =
  (typeof AdditionalResponseFieldType)[keyof typeof AdditionalResponseFieldType];

/**
 * @public
 * @enum
 */
export const RoleType = {
  CONTRIBUTOR: "CONTRIBUTOR",
  COOWNER: "COOWNER",
  OWNER: "OWNER",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type RoleType = (typeof RoleType)[keyof typeof RoleType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  ANONYMOUS: "ANONYMOUS",
  GROUP: "GROUP",
  INVITE: "INVITE",
  ORGANIZATION: "ORGANIZATION",
  USER: "USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ShareStatusType = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ShareStatusType = (typeof ShareStatusType)[keyof typeof ShareStatusType];

/**
 * @public
 * @enum
 */
export const CommentVisibilityType = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type CommentVisibilityType = (typeof CommentVisibilityType)[keyof typeof CommentVisibilityType];

/**
 * @public
 * @enum
 */
export const ResourceStateType = {
  ACTIVE: "ACTIVE",
  RECYCLED: "RECYCLED",
  RECYCLING: "RECYCLING",
  RESTORING: "RESTORING",
} as const;
/**
 * @public
 */
export type ResourceStateType = (typeof ResourceStateType)[keyof typeof ResourceStateType];

/**
 * @public
 * @enum
 */
export const SubscriptionProtocolType = {
  HTTPS: "HTTPS",
  SQS: "SQS",
} as const;
/**
 * @public
 */
export type SubscriptionProtocolType = (typeof SubscriptionProtocolType)[keyof typeof SubscriptionProtocolType];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * @enum
 */
export const DocumentSourceType = {
  ORIGINAL: "ORIGINAL",
  WITH_COMMENTS: "WITH_COMMENTS",
} as const;
/**
 * @public
 */
export type DocumentSourceType = (typeof DocumentSourceType)[keyof typeof DocumentSourceType];

/**
 * @public
 * @enum
 */
export const DocumentStatusType = {
  ACTIVE: "ACTIVE",
  INITIALIZED: "INITIALIZED",
} as const;
/**
 * @public
 */
export type DocumentStatusType = (typeof DocumentStatusType)[keyof typeof DocumentStatusType];

/**
 * @public
 * @enum
 */
export const DocumentThumbnailType = {
  LARGE: "LARGE",
  SMALL: "SMALL",
  SMALL_HQ: "SMALL_HQ",
} as const;
/**
 * @public
 */
export type DocumentThumbnailType = (typeof DocumentThumbnailType)[keyof typeof DocumentThumbnailType];

/**
 * @public
 * @enum
 */
export const OrderType = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type OrderType = (typeof OrderType)[keyof typeof OrderType];

/**
 * @public
 * @enum
 */
export const ResourceSortType = {
  DATE: "DATE",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type ResourceSortType = (typeof ResourceSortType)[keyof typeof ResourceSortType];

/**
 * @public
 * @enum
 */
export const FolderContentType = {
  ALL: "ALL",
  DOCUMENT: "DOCUMENT",
  FOLDER: "FOLDER",
} as const;
/**
 * @public
 */
export type FolderContentType = (typeof FolderContentType)[keyof typeof FolderContentType];

/**
 * @public
 * @enum
 */
export const RolePermissionType = {
  DIRECT: "DIRECT",
  INHERITED: "INHERITED",
} as const;
/**
 * @public
 */
export type RolePermissionType = (typeof RolePermissionType)[keyof typeof RolePermissionType];

/**
 * @public
 * @enum
 */
export const UserFilterType = {
  ACTIVE_PENDING: "ACTIVE_PENDING",
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type UserFilterType = (typeof UserFilterType)[keyof typeof UserFilterType];

/**
 * @public
 * @enum
 */
export const UserSortType = {
  FULL_NAME: "FULL_NAME",
  STORAGE_LIMIT: "STORAGE_LIMIT",
  STORAGE_USED: "STORAGE_USED",
  USER_NAME: "USER_NAME",
  USER_STATUS: "USER_STATUS",
} as const;
/**
 * @public
 */
export type UserSortType = (typeof UserSortType)[keyof typeof UserSortType];

/**
 * @public
 * @enum
 */
export const ResourceCollectionType = {
  SHARED_WITH_ME: "SHARED_WITH_ME",
} as const;
/**
 * @public
 */
export type ResourceCollectionType = (typeof ResourceCollectionType)[keyof typeof ResourceCollectionType];

/**
 * @public
 * @enum
 */
export const ContentCategoryType = {
  AUDIO: "AUDIO",
  DOCUMENT: "DOCUMENT",
  IMAGE: "IMAGE",
  OTHER: "OTHER",
  PDF: "PDF",
  PRESENTATION: "PRESENTATION",
  SOURCE_CODE: "SOURCE_CODE",
  SPREADSHEET: "SPREADSHEET",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type ContentCategoryType = (typeof ContentCategoryType)[keyof typeof ContentCategoryType];

/**
 * @public
 * @enum
 */
export const PrincipalRoleType = {
  CONTRIBUTOR: "CONTRIBUTOR",
  COOWNER: "COOWNER",
  OWNER: "OWNER",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type PrincipalRoleType = (typeof PrincipalRoleType)[keyof typeof PrincipalRoleType];

/**
 * @public
 * @enum
 */
export const SearchResourceType = {
  COMMENT: "COMMENT",
  DOCUMENT: "DOCUMENT",
  DOCUMENT_VERSION: "DOCUMENT_VERSION",
  FOLDER: "FOLDER",
} as const;
/**
 * @public
 */
export type SearchResourceType = (typeof SearchResourceType)[keyof typeof SearchResourceType];

/**
 * @public
 * @enum
 */
export const SearchCollectionType = {
  OWNED: "OWNED",
  SHARED_WITH_ME: "SHARED_WITH_ME",
} as const;
/**
 * @public
 */
export type SearchCollectionType = (typeof SearchCollectionType)[keyof typeof SearchCollectionType];

/**
 * @public
 * @enum
 */
export const LanguageCodeType = {
  AR: "AR",
  BG: "BG",
  BN: "BN",
  CS: "CS",
  DA: "DA",
  DE: "DE",
  DEFAULT: "DEFAULT",
  EL: "EL",
  EN: "EN",
  ES: "ES",
  FA: "FA",
  FI: "FI",
  FR: "FR",
  HI: "HI",
  HU: "HU",
  ID: "ID",
  IT: "IT",
  JA: "JA",
  KO: "KO",
  LT: "LT",
  LV: "LV",
  NL: "NL",
  NO: "NO",
  PT: "PT",
  RO: "RO",
  RU: "RU",
  SV: "SV",
  SW: "SW",
  TH: "TH",
  TR: "TR",
  ZH: "ZH",
} as const;
/**
 * @public
 */
export type LanguageCodeType = (typeof LanguageCodeType)[keyof typeof LanguageCodeType];

/**
 * @public
 * @enum
 */
export const OrderByFieldType = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
  MODIFIED_TIMESTAMP: "MODIFIED_TIMESTAMP",
  NAME: "NAME",
  RELEVANCE: "RELEVANCE",
  SIZE: "SIZE",
} as const;
/**
 * @public
 */
export type OrderByFieldType = (typeof OrderByFieldType)[keyof typeof OrderByFieldType];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const SearchQueryScopeType = {
  CONTENT: "CONTENT",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type SearchQueryScopeType = (typeof SearchQueryScopeType)[keyof typeof SearchQueryScopeType];

/**
 * @public
 * @enum
 */
export const ResponseItemType = {
  COMMENT: "COMMENT",
  DOCUMENT: "DOCUMENT",
  DOCUMENT_VERSION: "DOCUMENT_VERSION",
  FOLDER: "FOLDER",
} as const;
/**
 * @public
 */
export type ResponseItemType = (typeof ResponseItemType)[keyof typeof ResponseItemType];

/**
 * @public
 * @enum
 */
export const DocumentVersionStatus = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type DocumentVersionStatus = (typeof DocumentVersionStatus)[keyof typeof DocumentVersionStatus];

/**
 * @public
 * @enum
 */
export const BooleanEnumType = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type BooleanEnumType = (typeof BooleanEnumType)[keyof typeof BooleanEnumType];
