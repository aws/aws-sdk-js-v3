// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AmiProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;
/**
 * @public
 */
export type AmiProductVisibilityString = (typeof AmiProductVisibilityString)[keyof typeof AmiProductVisibilityString];

/**
 * @public
 * @enum
 */
export const AmiProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;
/**
 * @public
 */
export type AmiProductSortBy = (typeof AmiProductSortBy)[keyof typeof AmiProductSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const FailureCode = {
  ClientError: "CLIENT_ERROR",
  ServerFault: "SERVER_FAULT",
} as const;
/**
 * @public
 */
export type FailureCode = (typeof FailureCode)[keyof typeof FailureCode];

/**
 * @public
 * @enum
 */
export const Intent = {
  APPLY: "APPLY",
  VALIDATE: "VALIDATE",
} as const;
/**
 * @public
 */
export type Intent = (typeof Intent)[keyof typeof Intent];

/**
 * @public
 * @enum
 */
export const ChangeStatus = {
  APPLYING: "APPLYING",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PREPARING: "PREPARING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ChangeStatus = (typeof ChangeStatus)[keyof typeof ChangeStatus];

/**
 * @public
 * @enum
 */
export const ContainerProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;
/**
 * @public
 */
export type ContainerProductVisibilityString =
  (typeof ContainerProductVisibilityString)[keyof typeof ContainerProductVisibilityString];

/**
 * @public
 * @enum
 */
export const DataProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
  Unavailable: "Unavailable",
} as const;
/**
 * @public
 */
export type DataProductVisibilityString =
  (typeof DataProductVisibilityString)[keyof typeof DataProductVisibilityString];

/**
 * @public
 * @enum
 */
export const MachineLearningProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;
/**
 * @public
 */
export type MachineLearningProductVisibilityString =
  (typeof MachineLearningProductVisibilityString)[keyof typeof MachineLearningProductVisibilityString];

/**
 * @public
 * @enum
 */
export const OfferStateString = {
  Draft: "Draft",
  Released: "Released",
} as const;
/**
 * @public
 */
export type OfferStateString = (typeof OfferStateString)[keyof typeof OfferStateString];

/**
 * @public
 * @enum
 */
export const OfferTargetingString = {
  BuyerAccounts: "BuyerAccounts",
  CountryCodes: "CountryCodes",
  None: "None",
  ParticipatingPrograms: "ParticipatingPrograms",
} as const;
/**
 * @public
 */
export type OfferTargetingString = (typeof OfferTargetingString)[keyof typeof OfferTargetingString];

/**
 * @public
 * @enum
 */
export const OfferSetStateString = {
  Draft: "Draft",
  Released: "Released",
} as const;
/**
 * @public
 */
export type OfferSetStateString = (typeof OfferSetStateString)[keyof typeof OfferSetStateString];

/**
 * @public
 * @enum
 */
export const ResaleAuthorizationStatusString = {
  Active: "Active",
  Draft: "Draft",
  Restricted: "Restricted",
} as const;
/**
 * @public
 */
export type ResaleAuthorizationStatusString =
  (typeof ResaleAuthorizationStatusString)[keyof typeof ResaleAuthorizationStatusString];

/**
 * @public
 * @enum
 */
export const SaaSProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;
/**
 * @public
 */
export type SaaSProductVisibilityString =
  (typeof SaaSProductVisibilityString)[keyof typeof SaaSProductVisibilityString];

/**
 * @public
 * @enum
 */
export const ContainerProductSortBy = {
  CompatibleAWSServices: "CompatibleAWSServices",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;
/**
 * @public
 */
export type ContainerProductSortBy = (typeof ContainerProductSortBy)[keyof typeof ContainerProductSortBy];

/**
 * @public
 * @enum
 */
export const DataProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;
/**
 * @public
 */
export type DataProductSortBy = (typeof DataProductSortBy)[keyof typeof DataProductSortBy];

/**
 * @public
 * @enum
 */
export const MachineLearningProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;
/**
 * @public
 */
export type MachineLearningProductSortBy =
  (typeof MachineLearningProductSortBy)[keyof typeof MachineLearningProductSortBy];

/**
 * @public
 * @enum
 */
export const OfferSetSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  Name: "Name",
  ReleaseDate: "ReleaseDate",
  SolutionId: "SolutionId",
  State: "State",
} as const;
/**
 * @public
 */
export type OfferSetSortBy = (typeof OfferSetSortBy)[keyof typeof OfferSetSortBy];

/**
 * @public
 * @enum
 */
export const OfferSortBy = {
  AvailabilityEndDate: "AvailabilityEndDate",
  BuyerAccounts: "BuyerAccounts",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  Name: "Name",
  OfferSetId: "OfferSetId",
  ProductId: "ProductId",
  ReleaseDate: "ReleaseDate",
  ResaleAuthorizationId: "ResaleAuthorizationId",
  State: "State",
  Targeting: "Targeting",
} as const;
/**
 * @public
 */
export type OfferSortBy = (typeof OfferSortBy)[keyof typeof OfferSortBy];

/**
 * @public
 * @enum
 */
export const ResaleAuthorizationSortBy = {
  AvailabilityEndDate: "AvailabilityEndDate",
  CreatedDate: "CreatedDate",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ManufacturerAccountId: "ManufacturerAccountId",
  ManufacturerLegalName: "ManufacturerLegalName",
  Name: "Name",
  OfferExtendedStatus: "OfferExtendedStatus",
  ProductId: "ProductId",
  ProductName: "ProductName",
  ResellerAccountID: "ResellerAccountID",
  ResellerLegalName: "ResellerLegalName",
  Status: "Status",
} as const;
/**
 * @public
 */
export type ResaleAuthorizationSortBy = (typeof ResaleAuthorizationSortBy)[keyof typeof ResaleAuthorizationSortBy];

/**
 * @public
 * @enum
 */
export const SaaSProductSortBy = {
  DeliveryOptionTypes: "DeliveryOptionTypes",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;
/**
 * @public
 */
export type SaaSProductSortBy = (typeof SaaSProductSortBy)[keyof typeof SaaSProductSortBy];

/**
 * @public
 * @enum
 */
export const OwnershipType = {
  SELF: "SELF",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType];
