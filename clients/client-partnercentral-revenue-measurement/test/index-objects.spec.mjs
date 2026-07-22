import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AllocationStatus,
  AttributionSortBy,
  AttributionSummary$,
  CatalogName,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateMarketplaceRevenueShare$,
  CreateMarketplaceRevenueShareAllocation$,
  CreateMarketplaceRevenueShareAllocationCommand,
  CreateMarketplaceRevenueShareAllocationInput$,
  CreateMarketplaceRevenueShareAllocationOutput$,
  CreateMarketplaceRevenueShareCommand,
  CreateMarketplaceRevenueShareInput$,
  CreateMarketplaceRevenueShareOutput$,
  CreateRevenueAttribution$,
  CreateRevenueAttributionCommand,
  CreateRevenueAttributionInput$,
  CreateRevenueAttributionOutput$,
  EntityType,
  FieldValidationCode,
  GetMarketplaceRevenueShare$,
  GetMarketplaceRevenueShareAllocation$,
  GetMarketplaceRevenueShareAllocationCommand,
  GetMarketplaceRevenueShareAllocationInput$,
  GetMarketplaceRevenueShareAllocationOutput$,
  GetMarketplaceRevenueShareCommand,
  GetMarketplaceRevenueShareInput$,
  GetMarketplaceRevenueShareOutput$,
  GetRevenueAttribution$,
  GetRevenueAttributionAllocation$,
  GetRevenueAttributionAllocationCommand,
  GetRevenueAttributionAllocationInput$,
  GetRevenueAttributionAllocationOutput$,
  GetRevenueAttributionAllocationsTask$,
  GetRevenueAttributionAllocationsTaskCommand,
  GetRevenueAttributionAllocationsTaskInput$,
  GetRevenueAttributionAllocationsTaskOutput$,
  GetRevenueAttributionCommand,
  GetRevenueAttributionInput$,
  GetRevenueAttributionOutput$,
  InternalServerException,
  InternalServerException$,
  ListMarketplaceRevenueShareAllocations$,
  ListMarketplaceRevenueShareAllocationsCommand,
  ListMarketplaceRevenueShareAllocationsInput$,
  ListMarketplaceRevenueShareAllocationsOutput$,
  ListMarketplaceRevenueShares$,
  ListMarketplaceRevenueSharesCommand,
  ListMarketplaceRevenueSharesInput$,
  ListMarketplaceRevenueSharesOutput$,
  ListRevenueAttributionAllocations$,
  ListRevenueAttributionAllocationsCommand,
  ListRevenueAttributionAllocationsInput$,
  ListRevenueAttributionAllocationsOutput$,
  ListRevenueAttributions$,
  ListRevenueAttributionsCommand,
  ListRevenueAttributionsInput$,
  ListRevenueAttributionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MarketplaceProductSummary$,
  MarketplaceRevenueShareAllocationSortField,
  MarketplaceRevenueShareAllocationSummary$,
  MarketplaceRevenueShareSortBy,
  MarketplaceRevenueShareSummary$,
  paginateListMarketplaceRevenueShareAllocations,
  paginateListMarketplaceRevenueShares,
  paginateListRevenueAttributionAllocations,
  paginateListRevenueAttributions,
  PartnerCentralRevenueMeasurement,
  PartnerCentralRevenueMeasurementClient,
  PartnerCentralRevenueMeasurementServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  RevenueAttributionAllocationAction,
  RevenueAttributionAllocationErrorCode,
  RevenueAttributionAllocationErrorDetail$,
  RevenueAttributionAllocationSortField,
  RevenueAttributionAllocationSummary$,
  RevenueAttributionAllocationTaskStatus,
  RevenueShareAllocation$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  SortOrder,
  StartRevenueAttributionAllocationsTask$,
  StartRevenueAttributionAllocationsTaskCommand,
  StartRevenueAttributionAllocationsTaskInput$,
  StartRevenueAttributionAllocationsTaskOutput$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TenancyModel,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateMarketplaceRevenueShareAllocation$,
  UpdateMarketplaceRevenueShareAllocationCommand,
  UpdateMarketplaceRevenueShareAllocationInput$,
  UpdateMarketplaceRevenueShareAllocationOutput$,
  UpdateRevenueAttribution$,
  UpdateRevenueAttributionCommand,
  UpdateRevenueAttributionInput$,
  UpdateRevenueAttributionOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralRevenueMeasurementClient === "function");
assert(typeof PartnerCentralRevenueMeasurement === "function");
// commands
assert(typeof CreateMarketplaceRevenueShareCommand === "function");
assert(typeof CreateMarketplaceRevenueShare$ === "object");
assert(typeof CreateMarketplaceRevenueShareAllocationCommand === "function");
assert(typeof CreateMarketplaceRevenueShareAllocation$ === "object");
assert(typeof CreateRevenueAttributionCommand === "function");
assert(typeof CreateRevenueAttribution$ === "object");
assert(typeof GetMarketplaceRevenueShareCommand === "function");
assert(typeof GetMarketplaceRevenueShare$ === "object");
assert(typeof GetMarketplaceRevenueShareAllocationCommand === "function");
assert(typeof GetMarketplaceRevenueShareAllocation$ === "object");
assert(typeof GetRevenueAttributionCommand === "function");
assert(typeof GetRevenueAttribution$ === "object");
assert(typeof GetRevenueAttributionAllocationCommand === "function");
assert(typeof GetRevenueAttributionAllocation$ === "object");
assert(typeof GetRevenueAttributionAllocationsTaskCommand === "function");
assert(typeof GetRevenueAttributionAllocationsTask$ === "object");
assert(typeof ListMarketplaceRevenueShareAllocationsCommand === "function");
assert(typeof ListMarketplaceRevenueShareAllocations$ === "object");
assert(typeof ListMarketplaceRevenueSharesCommand === "function");
assert(typeof ListMarketplaceRevenueShares$ === "object");
assert(typeof ListRevenueAttributionAllocationsCommand === "function");
assert(typeof ListRevenueAttributionAllocations$ === "object");
assert(typeof ListRevenueAttributionsCommand === "function");
assert(typeof ListRevenueAttributions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartRevenueAttributionAllocationsTaskCommand === "function");
assert(typeof StartRevenueAttributionAllocationsTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMarketplaceRevenueShareAllocationCommand === "function");
assert(typeof UpdateMarketplaceRevenueShareAllocation$ === "object");
assert(typeof UpdateRevenueAttributionCommand === "function");
assert(typeof UpdateRevenueAttribution$ === "object");
// structural schemas
assert(typeof AttributionSummary$ === "object");
assert(typeof CreateMarketplaceRevenueShareAllocationInput$ === "object");
assert(typeof CreateMarketplaceRevenueShareAllocationOutput$ === "object");
assert(typeof CreateMarketplaceRevenueShareInput$ === "object");
assert(typeof CreateMarketplaceRevenueShareOutput$ === "object");
assert(typeof CreateRevenueAttributionInput$ === "object");
assert(typeof CreateRevenueAttributionOutput$ === "object");
assert(typeof GetMarketplaceRevenueShareAllocationInput$ === "object");
assert(typeof GetMarketplaceRevenueShareAllocationOutput$ === "object");
assert(typeof GetMarketplaceRevenueShareInput$ === "object");
assert(typeof GetMarketplaceRevenueShareOutput$ === "object");
assert(typeof GetRevenueAttributionAllocationInput$ === "object");
assert(typeof GetRevenueAttributionAllocationOutput$ === "object");
assert(typeof GetRevenueAttributionAllocationsTaskInput$ === "object");
assert(typeof GetRevenueAttributionAllocationsTaskOutput$ === "object");
assert(typeof GetRevenueAttributionInput$ === "object");
assert(typeof GetRevenueAttributionOutput$ === "object");
assert(typeof ListMarketplaceRevenueShareAllocationsInput$ === "object");
assert(typeof ListMarketplaceRevenueShareAllocationsOutput$ === "object");
assert(typeof ListMarketplaceRevenueSharesInput$ === "object");
assert(typeof ListMarketplaceRevenueSharesOutput$ === "object");
assert(typeof ListRevenueAttributionAllocationsInput$ === "object");
assert(typeof ListRevenueAttributionAllocationsOutput$ === "object");
assert(typeof ListRevenueAttributionsInput$ === "object");
assert(typeof ListRevenueAttributionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MarketplaceProductSummary$ === "object");
assert(typeof MarketplaceRevenueShareAllocationSummary$ === "object");
assert(typeof MarketplaceRevenueShareSummary$ === "object");
assert(typeof RevenueAttributionAllocationErrorDetail$ === "object");
assert(typeof RevenueAttributionAllocationSummary$ === "object");
assert(typeof RevenueShareAllocation$ === "object");
assert(typeof StartRevenueAttributionAllocationsTaskInput$ === "object");
assert(typeof StartRevenueAttributionAllocationsTaskOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateMarketplaceRevenueShareAllocationInput$ === "object");
assert(typeof UpdateMarketplaceRevenueShareAllocationOutput$ === "object");
assert(typeof UpdateRevenueAttributionInput$ === "object");
assert(typeof UpdateRevenueAttributionOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof AllocationStatus === "object");
assert(typeof AttributionSortBy === "object");
assert(typeof CatalogName === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof EntityType === "object");
assert(typeof FieldValidationCode === "object");
assert(typeof MarketplaceRevenueShareAllocationSortField === "object");
assert(typeof MarketplaceRevenueShareSortBy === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof RevenueAttributionAllocationAction === "object");
assert(typeof RevenueAttributionAllocationErrorCode === "object");
assert(typeof RevenueAttributionAllocationSortField === "object");
assert(typeof RevenueAttributionAllocationTaskStatus === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof SortOrder === "object");
assert(typeof TenancyModel === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralRevenueMeasurementServiceException);
assert(typeof ValidationException$ === "object");
assert(PartnerCentralRevenueMeasurementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListMarketplaceRevenueShareAllocations === "function");
assert(typeof paginateListMarketplaceRevenueShares === "function");
assert(typeof paginateListRevenueAttributionAllocations === "function");
assert(typeof paginateListRevenueAttributions === "function");
console.log(`PartnerCentralRevenueMeasurement index test passed.`);
