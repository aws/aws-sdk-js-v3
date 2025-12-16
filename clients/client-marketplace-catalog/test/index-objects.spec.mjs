import {
  AccessDeniedException,
  AccessDeniedException$,
  AmiProductEntityIdFilter$,
  AmiProductFilters$,
  AmiProductLastModifiedDateFilter$,
  AmiProductLastModifiedDateFilterDateRange$,
  AmiProductSort$,
  AmiProductSortBy,
  AmiProductSummary$,
  AmiProductTitleFilter$,
  AmiProductVisibilityFilter$,
  AmiProductVisibilityString,
  BatchDescribeEntities$,
  BatchDescribeEntitiesCommand,
  BatchDescribeEntitiesRequest$,
  BatchDescribeEntitiesResponse$,
  BatchDescribeErrorDetail$,
  CancelChangeSet$,
  CancelChangeSetCommand,
  CancelChangeSetRequest$,
  CancelChangeSetResponse$,
  Change$,
  ChangeSetSummaryListItem$,
  ChangeStatus,
  ChangeSummary$,
  ContainerProductEntityIdFilter$,
  ContainerProductFilters$,
  ContainerProductLastModifiedDateFilter$,
  ContainerProductLastModifiedDateFilterDateRange$,
  ContainerProductSort$,
  ContainerProductSortBy,
  ContainerProductSummary$,
  ContainerProductTitleFilter$,
  ContainerProductVisibilityFilter$,
  ContainerProductVisibilityString,
  DataProductEntityIdFilter$,
  DataProductFilters$,
  DataProductLastModifiedDateFilter$,
  DataProductLastModifiedDateFilterDateRange$,
  DataProductSort$,
  DataProductSortBy,
  DataProductSummary$,
  DataProductTitleFilter$,
  DataProductVisibilityFilter$,
  DataProductVisibilityString,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DescribeChangeSet$,
  DescribeChangeSetCommand,
  DescribeChangeSetRequest$,
  DescribeChangeSetResponse$,
  DescribeEntity$,
  DescribeEntityCommand,
  DescribeEntityRequest$,
  DescribeEntityResponse$,
  Entity$,
  EntityDetail$,
  EntityRequest$,
  EntitySummary$,
  EntityTypeFilters$,
  EntityTypeSort$,
  ErrorDetail$,
  FailureCode,
  Filter$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  Intent,
  InternalServiceException,
  InternalServiceException$,
  ListChangeSets$,
  ListChangeSetsCommand,
  ListChangeSetsRequest$,
  ListChangeSetsResponse$,
  ListEntities$,
  ListEntitiesCommand,
  ListEntitiesRequest$,
  ListEntitiesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MachineLearningProductEntityIdFilter$,
  MachineLearningProductFilters$,
  MachineLearningProductLastModifiedDateFilter$,
  MachineLearningProductLastModifiedDateFilterDateRange$,
  MachineLearningProductSort$,
  MachineLearningProductSortBy,
  MachineLearningProductSummary$,
  MachineLearningProductTitleFilter$,
  MachineLearningProductVisibilityFilter$,
  MachineLearningProductVisibilityString,
  MarketplaceCatalog,
  MarketplaceCatalogClient,
  MarketplaceCatalogServiceException,
  OfferAvailabilityEndDateFilter$,
  OfferAvailabilityEndDateFilterDateRange$,
  OfferBuyerAccountsFilter$,
  OfferEntityIdFilter$,
  OfferFilters$,
  OfferLastModifiedDateFilter$,
  OfferLastModifiedDateFilterDateRange$,
  OfferNameFilter$,
  OfferProductIdFilter$,
  OfferReleaseDateFilter$,
  OfferReleaseDateFilterDateRange$,
  OfferResaleAuthorizationIdFilter$,
  OfferSetAssociatedOfferIdsFilter$,
  OfferSetEntityIdFilter$,
  OfferSetFilters$,
  OfferSetIdFilter$,
  OfferSetLastModifiedDateFilter$,
  OfferSetLastModifiedDateFilterDateRange$,
  OfferSetNameFilter$,
  OfferSetReleaseDateFilter$,
  OfferSetReleaseDateFilterDateRange$,
  OfferSetSolutionIdFilter$,
  OfferSetSort$,
  OfferSetSortBy,
  OfferSetStateFilter$,
  OfferSetStateString,
  OfferSetSummary$,
  OfferSort$,
  OfferSortBy,
  OfferStateFilter$,
  OfferStateString,
  OfferSummary$,
  OfferTargetingFilter$,
  OfferTargetingString,
  OwnershipType,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ResaleAuthorizationAvailabilityEndDateFilter$,
  ResaleAuthorizationAvailabilityEndDateFilterDateRange$,
  ResaleAuthorizationCreatedDateFilter$,
  ResaleAuthorizationCreatedDateFilterDateRange$,
  ResaleAuthorizationEntityIdFilter$,
  ResaleAuthorizationFilters$,
  ResaleAuthorizationLastModifiedDateFilter$,
  ResaleAuthorizationLastModifiedDateFilterDateRange$,
  ResaleAuthorizationManufacturerAccountIdFilter$,
  ResaleAuthorizationManufacturerLegalNameFilter$,
  ResaleAuthorizationNameFilter$,
  ResaleAuthorizationOfferExtendedStatusFilter$,
  ResaleAuthorizationProductIdFilter$,
  ResaleAuthorizationProductNameFilter$,
  ResaleAuthorizationResellerAccountIDFilter$,
  ResaleAuthorizationResellerLegalNameFilter$,
  ResaleAuthorizationSort$,
  ResaleAuthorizationSortBy,
  ResaleAuthorizationStatusFilter$,
  ResaleAuthorizationStatusString,
  ResaleAuthorizationSummary$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotSupportedException,
  ResourceNotSupportedException$,
  SaaSProductEntityIdFilter$,
  SaaSProductFilters$,
  SaaSProductLastModifiedDateFilter$,
  SaaSProductLastModifiedDateFilterDateRange$,
  SaaSProductSort$,
  SaaSProductSortBy,
  SaaSProductSummary$,
  SaaSProductTitleFilter$,
  SaaSProductVisibilityFilter$,
  SaaSProductVisibilityString,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Sort$,
  SortOrder,
  StartChangeSet$,
  StartChangeSetCommand,
  StartChangeSetRequest$,
  StartChangeSetResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  paginateListChangeSets,
  paginateListEntities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceCatalogClient === "function");
assert(typeof MarketplaceCatalog === "function");
// commands
assert(typeof BatchDescribeEntitiesCommand === "function");
assert(typeof BatchDescribeEntities$ === "object");
assert(typeof CancelChangeSetCommand === "function");
assert(typeof CancelChangeSet$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DescribeChangeSetCommand === "function");
assert(typeof DescribeChangeSet$ === "object");
assert(typeof DescribeEntityCommand === "function");
assert(typeof DescribeEntity$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListChangeSetsCommand === "function");
assert(typeof ListChangeSets$ === "object");
assert(typeof ListEntitiesCommand === "function");
assert(typeof ListEntities$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof StartChangeSetCommand === "function");
assert(typeof StartChangeSet$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AmiProductEntityIdFilter$ === "object");
assert(typeof AmiProductFilters$ === "object");
assert(typeof AmiProductLastModifiedDateFilter$ === "object");
assert(typeof AmiProductLastModifiedDateFilterDateRange$ === "object");
assert(typeof AmiProductSort$ === "object");
assert(typeof AmiProductSummary$ === "object");
assert(typeof AmiProductTitleFilter$ === "object");
assert(typeof AmiProductVisibilityFilter$ === "object");
assert(typeof BatchDescribeEntitiesRequest$ === "object");
assert(typeof BatchDescribeEntitiesResponse$ === "object");
assert(typeof BatchDescribeErrorDetail$ === "object");
assert(typeof CancelChangeSetRequest$ === "object");
assert(typeof CancelChangeSetResponse$ === "object");
assert(typeof Change$ === "object");
assert(typeof ChangeSetSummaryListItem$ === "object");
assert(typeof ChangeSummary$ === "object");
assert(typeof ContainerProductEntityIdFilter$ === "object");
assert(typeof ContainerProductFilters$ === "object");
assert(typeof ContainerProductLastModifiedDateFilter$ === "object");
assert(typeof ContainerProductLastModifiedDateFilterDateRange$ === "object");
assert(typeof ContainerProductSort$ === "object");
assert(typeof ContainerProductSummary$ === "object");
assert(typeof ContainerProductTitleFilter$ === "object");
assert(typeof ContainerProductVisibilityFilter$ === "object");
assert(typeof DataProductEntityIdFilter$ === "object");
assert(typeof DataProductFilters$ === "object");
assert(typeof DataProductLastModifiedDateFilter$ === "object");
assert(typeof DataProductLastModifiedDateFilterDateRange$ === "object");
assert(typeof DataProductSort$ === "object");
assert(typeof DataProductSummary$ === "object");
assert(typeof DataProductTitleFilter$ === "object");
assert(typeof DataProductVisibilityFilter$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DescribeChangeSetRequest$ === "object");
assert(typeof DescribeChangeSetResponse$ === "object");
assert(typeof DescribeEntityRequest$ === "object");
assert(typeof DescribeEntityResponse$ === "object");
assert(typeof Entity$ === "object");
assert(typeof EntityDetail$ === "object");
assert(typeof EntityRequest$ === "object");
assert(typeof EntitySummary$ === "object");
assert(typeof EntityTypeFilters$ === "object");
assert(typeof EntityTypeSort$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof ListChangeSetsRequest$ === "object");
assert(typeof ListChangeSetsResponse$ === "object");
assert(typeof ListEntitiesRequest$ === "object");
assert(typeof ListEntitiesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MachineLearningProductEntityIdFilter$ === "object");
assert(typeof MachineLearningProductFilters$ === "object");
assert(typeof MachineLearningProductLastModifiedDateFilter$ === "object");
assert(typeof MachineLearningProductLastModifiedDateFilterDateRange$ === "object");
assert(typeof MachineLearningProductSort$ === "object");
assert(typeof MachineLearningProductSummary$ === "object");
assert(typeof MachineLearningProductTitleFilter$ === "object");
assert(typeof MachineLearningProductVisibilityFilter$ === "object");
assert(typeof OfferAvailabilityEndDateFilter$ === "object");
assert(typeof OfferAvailabilityEndDateFilterDateRange$ === "object");
assert(typeof OfferBuyerAccountsFilter$ === "object");
assert(typeof OfferEntityIdFilter$ === "object");
assert(typeof OfferFilters$ === "object");
assert(typeof OfferLastModifiedDateFilter$ === "object");
assert(typeof OfferLastModifiedDateFilterDateRange$ === "object");
assert(typeof OfferNameFilter$ === "object");
assert(typeof OfferProductIdFilter$ === "object");
assert(typeof OfferReleaseDateFilter$ === "object");
assert(typeof OfferReleaseDateFilterDateRange$ === "object");
assert(typeof OfferResaleAuthorizationIdFilter$ === "object");
assert(typeof OfferSetAssociatedOfferIdsFilter$ === "object");
assert(typeof OfferSetEntityIdFilter$ === "object");
assert(typeof OfferSetFilters$ === "object");
assert(typeof OfferSetIdFilter$ === "object");
assert(typeof OfferSetLastModifiedDateFilter$ === "object");
assert(typeof OfferSetLastModifiedDateFilterDateRange$ === "object");
assert(typeof OfferSetNameFilter$ === "object");
assert(typeof OfferSetReleaseDateFilter$ === "object");
assert(typeof OfferSetReleaseDateFilterDateRange$ === "object");
assert(typeof OfferSetSolutionIdFilter$ === "object");
assert(typeof OfferSetSort$ === "object");
assert(typeof OfferSetStateFilter$ === "object");
assert(typeof OfferSetSummary$ === "object");
assert(typeof OfferSort$ === "object");
assert(typeof OfferStateFilter$ === "object");
assert(typeof OfferSummary$ === "object");
assert(typeof OfferTargetingFilter$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof ResaleAuthorizationAvailabilityEndDateFilter$ === "object");
assert(typeof ResaleAuthorizationAvailabilityEndDateFilterDateRange$ === "object");
assert(typeof ResaleAuthorizationCreatedDateFilter$ === "object");
assert(typeof ResaleAuthorizationCreatedDateFilterDateRange$ === "object");
assert(typeof ResaleAuthorizationEntityIdFilter$ === "object");
assert(typeof ResaleAuthorizationFilters$ === "object");
assert(typeof ResaleAuthorizationLastModifiedDateFilter$ === "object");
assert(typeof ResaleAuthorizationLastModifiedDateFilterDateRange$ === "object");
assert(typeof ResaleAuthorizationManufacturerAccountIdFilter$ === "object");
assert(typeof ResaleAuthorizationManufacturerLegalNameFilter$ === "object");
assert(typeof ResaleAuthorizationNameFilter$ === "object");
assert(typeof ResaleAuthorizationOfferExtendedStatusFilter$ === "object");
assert(typeof ResaleAuthorizationProductIdFilter$ === "object");
assert(typeof ResaleAuthorizationProductNameFilter$ === "object");
assert(typeof ResaleAuthorizationResellerAccountIDFilter$ === "object");
assert(typeof ResaleAuthorizationResellerLegalNameFilter$ === "object");
assert(typeof ResaleAuthorizationSort$ === "object");
assert(typeof ResaleAuthorizationStatusFilter$ === "object");
assert(typeof ResaleAuthorizationSummary$ === "object");
assert(typeof SaaSProductEntityIdFilter$ === "object");
assert(typeof SaaSProductFilters$ === "object");
assert(typeof SaaSProductLastModifiedDateFilter$ === "object");
assert(typeof SaaSProductLastModifiedDateFilterDateRange$ === "object");
assert(typeof SaaSProductSort$ === "object");
assert(typeof SaaSProductSummary$ === "object");
assert(typeof SaaSProductTitleFilter$ === "object");
assert(typeof SaaSProductVisibilityFilter$ === "object");
assert(typeof Sort$ === "object");
assert(typeof StartChangeSetRequest$ === "object");
assert(typeof StartChangeSetResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof AmiProductSortBy === "object");
assert(typeof AmiProductVisibilityString === "object");
assert(typeof ChangeStatus === "object");
assert(typeof ContainerProductSortBy === "object");
assert(typeof ContainerProductVisibilityString === "object");
assert(typeof DataProductSortBy === "object");
assert(typeof DataProductVisibilityString === "object");
assert(typeof FailureCode === "object");
assert(typeof Intent === "object");
assert(typeof MachineLearningProductSortBy === "object");
assert(typeof MachineLearningProductVisibilityString === "object");
assert(typeof OfferSetSortBy === "object");
assert(typeof OfferSetStateString === "object");
assert(typeof OfferSortBy === "object");
assert(typeof OfferStateString === "object");
assert(typeof OfferTargetingString === "object");
assert(typeof OwnershipType === "object");
assert(typeof ResaleAuthorizationSortBy === "object");
assert(typeof ResaleAuthorizationStatusString === "object");
assert(typeof SaaSProductSortBy === "object");
assert(typeof SaaSProductVisibilityString === "object");
assert(typeof SortOrder === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServiceException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof InternalServiceException$ === "object");
assert(ResourceInUseException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotSupportedException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ResourceNotSupportedException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceCatalogServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceCatalogServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangeSets === "function");
assert(typeof paginateListEntities === "function");
console.log(`MarketplaceCatalog index test passed.`);
