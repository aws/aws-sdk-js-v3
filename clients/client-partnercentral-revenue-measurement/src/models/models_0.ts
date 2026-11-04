// smithy-typescript generated code
import type {
  AllocationStatus,
  AttributionSortBy,
  CatalogName,
  EntityType,
  FieldValidationCode,
  MarketplaceRevenueShareAllocationSortField,
  MarketplaceRevenueShareSortBy,
  RevenueAttributionAllocationAction,
  RevenueAttributionAllocationErrorCode,
  RevenueAttributionAllocationSortField,
  RevenueAttributionAllocationTaskStatus,
  SortOrder,
  TenancyModel,
} from "./enums";

/**
 * Read-time AWS Marketplace product attributes returned in revenue attribution responses, including service-resolved fields.
 *
 * @public
 */
export interface MarketplaceProductSummary {
  /**
   * The product identifier provided at attribution creation.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The AWS Marketplace product code resolved using the product identifier.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;
}

/**
 * Summary representation of a revenue attribution returned in list operations.
 *
 * @public
 */
export interface AttributionSummary {
  /**
   * The Amazon Resource Name (ARN) of the revenue attribution.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the revenue attribution.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The catalog that the revenue attribution belongs to.
   *
   * @public
   */
  Catalog?: CatalogName | undefined;

  /**
   * The display name of the revenue attribution.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The tenancy model for this revenue attribution.
   *
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * The AWS Marketplace product attributes associated with this attribution, if set.
   *
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * The date when the revenue attribution was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the revenue attribution was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The latest revision of the revenue attribution resource.
   *
   * @public
   */
  LatestRevision?: string | undefined;

  /**
   * The date from which this revenue attribution is effective, derived from the earliest allocation start date (YYYY-MM-DD).
   *
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * The date until which this revenue attribution is effective, derived from the latest allocation end date (YYYY-MM-DD).
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The total number of allocations under this revenue attribution whose Status is ACTIVE.
   *
   * @public
   */
  TotalActiveRevenueAttributionAllocationCount?: number | undefined;

  /**
   * The total number of allocations under this revenue attribution, counting both ACTIVE and INACTIVE.
   *
   * @public
   */
  TotalRevenueAttributionAllocationCount?: number | undefined;
}

/**
 * A key-value pair used for organizing and managing resources through metadata tags.
 *
 * @public
 */
export interface Tag {
  /**
   * The key portion of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value portion of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareInput {
  /**
   * The catalog in which to create the marketplace revenue share.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * A unique token to ensure idempotency of the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The AWS Marketplace product identifier for this revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * Tags to associate with the marketplace revenue share upon creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareOutput {
  /**
   * The AWS Marketplace product identifier of the newly created revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created marketplace revenue share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The catalog that the marketplace revenue share belongs to.
   *
   * @public
   */
  Catalog?: CatalogName | undefined;

  /**
   * The AWS Marketplace product code.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The date when the marketplace revenue share was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the marketplace revenue share was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The revision number of the newly created marketplace revenue share.
   *
   * @public
   */
  Revision?: number | undefined;
}

/**
 * Details about a specific field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A human-readable message describing why the field validation failed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The specific validation error code indicating the type of validation failure.
   *
   * @public
   */
  Code: FieldValidationCode | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareAllocationInput {
  /**
   * The catalog in which to create the allocation.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product identifier for the parent revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * A unique token to ensure idempotency of the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The effective start date for the allocation. Must be the first day of a month.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date for the allocation. Must be the last day of a month (YYYY-MM-DD). Omit for open-ended allocations.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The revenue share percentage for this allocation.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareAllocationOutput {
  /**
   * The unique identifier of the newly created allocation.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The AWS Marketplace product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the allocation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The effective start date of the allocation.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date of the allocation, or null if open-ended.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * The status of the allocation.
   *
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * The date when the allocation was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the allocation was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The latest revision of the parent marketplace revenue share.
   *
   * @public
   */
  LatestMarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareInput {
  /**
   * The catalog that the marketplace revenue share belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product identifier of the revenue share to retrieve.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The revision of the marketplace revenue share to retrieve. Omit to return the latest revision.
   *
   * @public
   */
  Revision?: number | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareOutput {
  /**
   * The AWS Marketplace product identifier of the revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the marketplace revenue share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The catalog that the marketplace revenue share belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product code.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The date when the marketplace revenue share was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the marketplace revenue share was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The revision number of the retrieved marketplace revenue share.
   *
   * @public
   */
  Revision?: number | undefined;

  /**
   * The latest revision number of the marketplace revenue share.
   *
   * @public
   */
  LatestRevision?: number | undefined;

  /**
   * The number of active allocations under this marketplace revenue share.
   *
   * @public
   */
  TotalActiveMarketplaceRevenueShareAllocationCount?: number | undefined;

  /**
   * The total number of allocations under this marketplace revenue share.
   *
   * @public
   */
  TotalMarketplaceRevenueShareAllocationCount?: number | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareAllocationInput {
  /**
   * The catalog that the allocation belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product identifier of the parent revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The unique identifier of the allocation to retrieve.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The revision of the parent marketplace revenue share at which to retrieve the allocation. Omit to return the latest.
   *
   * @public
   */
  MarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareAllocationOutput {
  /**
   * The unique identifier of the allocation.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The AWS Marketplace product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the allocation.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The effective start date of the allocation.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date of the allocation, or null if open-ended.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * The status of the allocation.
   *
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * The date when the allocation was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the allocation was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The latest revision of the parent marketplace revenue share.
   *
   * @public
   */
  LatestMarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueShareAllocationsInput {
  /**
   * The catalog containing the allocations.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product identifier for the parent revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * Filter by allocation status.
   *
   * @public
   */
  Status?: AllocationStatus | undefined;

  /**
   * Inclusive lower bound for EffectiveFrom date filter.
   *
   * @public
   */
  AfterEffectiveFrom?: string | undefined;

  /**
   * Exclusive upper bound for EffectiveFrom date filter (half-open range).
   *
   * @public
   */
  BeforeEffectiveFrom?: string | undefined;

  /**
   * The field to sort marketplace revenue share allocations by.
   *
   * @public
   */
  SortBy?: MarketplaceRevenueShareAllocationSortField | undefined;

  /**
   * The direction to sort results. Defaults to DESCENDING.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * Maximum number of results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token from a previous response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional share revision for historical list. Returns allocations as they existed at this revision.
   *
   * @public
   */
  MarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * Summary information about a marketplace revenue share allocation.
 *
 * @public
 */
export interface MarketplaceRevenueShareAllocationSummary {
  /**
   * The unique identifier of the allocation.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The AWS Marketplace product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parent marketplace revenue share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The effective start date of the allocation.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date of the allocation, or null if open-ended.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * The status of the allocation.
   *
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * The date when the allocation was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the allocation was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueShareAllocationsOutput {
  /**
   * The list of allocation summaries for the current page.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationSummaries: MarketplaceRevenueShareAllocationSummary[] | undefined;

  /**
   * Pagination token for the next page. Absent if no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueSharesInput {
  /**
   * The catalog to list marketplace revenue shares from.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * Filter results to only include shares with these product identifiers.
   *
   * @public
   */
  ProductIds?: string[] | undefined;

  /**
   * Filter results to only include shares with these product codes.
   *
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for pagination. Use the value returned in the previous response to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field to sort marketplace revenue shares by.
   *
   * @public
   */
  SortBy?: MarketplaceRevenueShareSortBy | undefined;

  /**
   * The direction to sort results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * Filter results to only include marketplace revenue shares created after this timestamp.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter results to only include marketplace revenue shares created before this timestamp.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;
}

/**
 * Summary information about a marketplace revenue share.
 *
 * @public
 */
export interface MarketplaceRevenueShareSummary {
  /**
   * The AWS Marketplace product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the marketplace revenue share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The catalog that the marketplace revenue share belongs to.
   *
   * @public
   */
  Catalog?: CatalogName | undefined;

  /**
   * The AWS Marketplace product code.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The date when the marketplace revenue share was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the marketplace revenue share was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The latest revision number of the marketplace revenue share.
   *
   * @public
   */
  LatestRevision?: number | undefined;

  /**
   * The number of active allocations under this share.
   *
   * @public
   */
  TotalActiveMarketplaceRevenueShareAllocationCount?: number | undefined;

  /**
   * The total number of allocations under this share.
   *
   * @public
   */
  TotalMarketplaceRevenueShareAllocationCount?: number | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueSharesOutput {
  /**
   * The list of marketplace revenue share summaries.
   *
   * @public
   */
  MarketplaceRevenueShareSummaries: MarketplaceRevenueShareSummary[] | undefined;

  /**
   * Token for pagination. Present if there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareAllocationInput {
  /**
   * The catalog containing the allocation.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The AWS Marketplace product identifier for the parent revenue share.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The identifier of the allocation to update.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The current revision of the parent share. Must match for optimistic concurrency control.
   *
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * A unique token to ensure idempotency of the update request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The new effective start date. Must be the first day of a month. Only modifiable on future-dated allocations.
   *
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * The new effective end date. Must be the last day of a month and on or after today.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The new revenue share percentage. Only modifiable on future-dated allocations.
   *
   * @public
   */
  RevenueSharePercent?: string | undefined;

  /**
   * The new status. Set to INACTIVE for soft-delete. Only modifiable on future-dated allocations.
   *
   * @public
   */
  Status?: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareAllocationOutput {
  /**
   * The unique identifier of the updated allocation.
   *
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * The AWS Marketplace product identifier.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The display name of the AWS Marketplace product.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parent marketplace revenue share.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The effective start date of the allocation.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date of the allocation, or null if open-ended.
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * The status of the allocation.
   *
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * The date when the allocation was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the allocation was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The latest revision of the parent marketplace revenue share after the update.
   *
   * @public
   */
  LatestMarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * @public
 */
export interface CreateRevenueAttributionInput {
  /**
   * The catalog in which to create the revenue attribution.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * A unique token to ensure idempotency of the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the revenue attribution. Must be unique within the catalog and the partner's account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the revenue attribution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tenancy model for this revenue attribution.
   *
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * The unique product identifier in AWS Marketplace. Accepts a product entity ID (e.g., prod-abc123def4567) or a product ARN.
   *
   * @public
   */
  ProductIdentifier?: string | undefined;

  /**
   * Tags to associate with the revenue attribution upon creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateRevenueAttributionOutput {
  /**
   * The unique identifier of the newly created revenue attribution.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the newly created revenue attribution.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the revenue attribution.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the revenue attribution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tenancy model for this revenue attribution.
   *
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * The associated AWS Marketplace product listing, if set at creation.
   *
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * The revision of the newly created attribution resource.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionInput {
  /**
   * The catalog that the revenue attribution belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The unique identifier of the revenue attribution to retrieve. Accepts a direct ID or ARN.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The revision of the attribution to retrieve. Omit to return the latest revision.
   *
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionOutput {
  /**
   * The Amazon Resource Name (ARN) of the revenue attribution.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the revenue attribution.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The catalog that the revenue attribution belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The display name of the revenue attribution.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the revenue attribution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tenancy model for this revenue attribution.
   *
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * The associated AWS Marketplace product listing, if set.
   *
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * The date when the revenue attribution was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The date when the revenue attribution was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The revision of the retrieved attribution.
   *
   * @public
   */
  Revision?: string | undefined;

  /**
   * The latest revision of the attribution.
   *
   * @public
   */
  LatestRevision?: string | undefined;

  /**
   * The date from which this revenue attribution is effective, derived from the earliest allocation start date (YYYY-MM-DD).
   *
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * The date until which this revenue attribution is effective, derived from the latest allocation end date (YYYY-MM-DD).
   *
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * The total number of allocations under this revenue attribution whose Status is ACTIVE.
   *
   * @public
   */
  TotalActiveRevenueAttributionAllocationCount?: number | undefined;

  /**
   * The total number of allocations under this revenue attribution, counting both ACTIVE and INACTIVE.
   *
   * @public
   */
  TotalRevenueAttributionAllocationCount?: number | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationInput {
  /**
   * The catalog that contains the resource.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The revenue attribution identifier.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * The allocation identifier.
   *
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * Point-in-time revision number to query.
   *
   * @public
   */
  RevenueAttributionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationOutput {
  /**
   * Unique allocation identifier.
   *
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * The revenue attribution identifier.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * The type of the associated deal entity.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * The unique identifier of the associated deal entity.
   *
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * The display name of the associated deal entity.
   *
   * @public
   */
  EntityName?: string | undefined;

  /**
   * The customer AWS account ID for this associated deal entity.
   *
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * Revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * First day of the effective month.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * Last day of the effective month.
   *
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * Current allocation status.
   *
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * When the allocation was first created.
   *
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * When the allocation was last modified.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * The revision of this allocation version.
   *
   * @public
   */
  RevenueAttributionRevision: string | undefined;

  /**
   * The latest committed revision.
   *
   * @public
   */
  RevenueAttributionLatestRevision: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationsTaskInput {
  /**
   * The catalog that contains the resource.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The revenue attribution identifier.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;
}

/**
 * Details of a validation error for a single revenue attribution allocation record.
 *
 * @public
 */
export interface RevenueAttributionAllocationErrorDetail {
  /**
   * The allocation identifier. Present for UPDATE actions; absent for CREATE actions.
   *
   * @public
   */
  RevenueAttributionAllocationId?: string | undefined;

  /**
   * The deal entity type of the failing record.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * The deal entity identifier of the failing record.
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The customer AWS account ID of the failing record.
   *
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * Effective start date of the failing record.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * Effective end date of the failing record.
   *
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * The action that was attempted.
   *
   * @public
   */
  Action: RevenueAttributionAllocationAction | undefined;

  /**
   * Machine-readable error code.
   *
   * @public
   */
  ErrorCode: RevenueAttributionAllocationErrorCode | undefined;

  /**
   * Human-readable error description.
   *
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationsTaskOutput {
  /**
   * The unique identifier for the asynchronous task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * Current task status.
   *
   * @public
   */
  Status: RevenueAttributionAllocationTaskStatus | undefined;

  /**
   * The catalog used for this task.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * ARN of the revenue attribution resource.
   *
   * @public
   */
  RevenueAttributionArn: string | undefined;

  /**
   * When processing started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * When processing ended. Only present when COMPLETE or FAILED.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * Total revenue attribution allocation records in the batch.
   *
   * @public
   */
  TotalRevenueAttributionAllocationRecords: number | undefined;

  /**
   * Human-readable description, if provided at creation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The revision number assigned to this batch. Only present when COMPLETE.
   *
   * @public
   */
  RevenueAttributionLatestRevision?: string | undefined;

  /**
   * All errors discovered during async processing. Only present when FAILED.
   *
   * @public
   */
  ErrorDetailList?: RevenueAttributionAllocationErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionAllocationsInput {
  /**
   * The catalog that contains the resource.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The revenue attribution identifier to query.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * Filter by deal entity types.
   *
   * @public
   */
  EntityTypeFilters?: EntityType[] | undefined;

  /**
   * Filter by deal entity identifiers.
   *
   * @public
   */
  EntityIdentifierFilters?: string[] | undefined;

  /**
   * Filter by customer AWS account IDs for associated deal entities.
   *
   * @public
   */
  CustomerAwsAccountIdFilters?: string[] | undefined;

  /**
   * Filter by allocation status.
   *
   * @public
   */
  StatusFilter?: AllocationStatus | undefined;

  /**
   * Inclusive lower bound for EffectiveFrom date filter.
   *
   * @public
   */
  AfterEffectiveFrom?: string | undefined;

  /**
   * Exclusive upper bound for EffectiveFrom date filter (half-open range).
   *
   * @public
   */
  BeforeEffectiveFrom?: string | undefined;

  /**
   * Inclusive lower bound for EffectiveUntil date filter.
   *
   * @public
   */
  AfterEffectiveUntil?: string | undefined;

  /**
   * Exclusive upper bound for EffectiveUntil date filter (half-open range).
   *
   * @public
   */
  BeforeEffectiveUntil?: string | undefined;

  /**
   * Field to sort by.
   *
   * @public
   */
  SortBy?: RevenueAttributionAllocationSortField | undefined;

  /**
   * Sort direction. Defaults to ASCENDING.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * Point-in-time revision number to query.
   *
   * @public
   */
  RevenueAttributionRevision?: string | undefined;

  /**
   * Maximum results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Pagination token from previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a revenue attribution allocation.
 *
 * @public
 */
export interface RevenueAttributionAllocationSummary {
  /**
   * Unique allocation identifier.
   *
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * The revenue attribution identifier.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * The type of the associated deal entity.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * The unique identifier of the associated deal entity.
   *
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * The display name of the associated deal entity.
   *
   * @public
   */
  EntityName?: string | undefined;

  /**
   * The customer AWS account ID for this associated deal entity.
   *
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * Revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * First day of the effective month.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * Last day of the effective month.
   *
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * Current allocation status.
   *
   * @public
   */
  Status: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionAllocationsOutput {
  /**
   * Paginated list of allocations matching filters.
   *
   * @public
   */
  RevenueAttributionAllocationSummaries: RevenueAttributionAllocationSummary[] | undefined;

  /**
   * Token for next page. Absent if no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionsInput {
  /**
   * The catalog to list revenue attributions from.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * Filter results to only include revenue attributions with the specified identifiers.
   *
   * @public
   */
  Identifiers?: string[] | undefined;

  /**
   * Filter results to only include revenue attributions created after this timestamp.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter results to only include revenue attributions created before this timestamp.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The field to sort revenue attributions by.
   *
   * @public
   */
  SortBy?: AttributionSortBy | undefined;

  /**
   * The direction to sort results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Token for pagination. Use the value returned in the previous response to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionsOutput {
  /**
   * The list of revenue attribution summaries.
   *
   * @public
   */
  RevenueAttributionSummaries?: AttributionSummary[] | undefined;

  /**
   * Token for pagination. Present if there are more results available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A single allocation change within a batch request.
 *
 * @public
 */
export interface RevenueShareAllocation {
  /**
   * The operation type: CREATE or UPDATE.
   *
   * @public
   */
  Action: RevenueAttributionAllocationAction | undefined;

  /**
   * The allocation to update. Required when Action is UPDATE.
   *
   * @public
   */
  RevenueAttributionAllocationId?: string | undefined;

  /**
   * The type of the associated deal entity.
   *
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * The unique identifier of the associated deal entity.
   *
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * The customer AWS account ID for this associated deal entity.
   *
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * Revenue share percentage.
   *
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * The effective start date for this allocation.
   *
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * The effective end date for this allocation.
   *
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * Allocation status. Defaults to ACTIVE on CREATE.
   *
   * @public
   */
  Status?: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface StartRevenueAttributionAllocationsTaskInput {
  /**
   * The catalog context for this operation.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The revenue attribution identifier.
   *
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * Current revision of the revenue attribution for optimistic locking.
   *
   * @public
   */
  RevenueAttributionRevision: string | undefined;

  /**
   * The list of allocation changes to process in this batch.
   *
   * @public
   */
  RevenueShareAllocations: RevenueShareAllocation[] | undefined;

  /**
   * Idempotency token for deduplication and retry.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Human-readable description of the batch.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface StartRevenueAttributionAllocationsTaskOutput {
  /**
   * Unique identifier for the submitted task.
   *
   * @public
   */
  TaskId: string | undefined;

  /**
   * Initial task status. Always IN_PROGRESS on successful submission.
   *
   * @public
   */
  Status: RevenueAttributionAllocationTaskStatus | undefined;

  /**
   * The catalog used for this task.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * ARN of the revenue attribution resource.
   *
   * @public
   */
  RevenueAttributionArn: string | undefined;

  /**
   * When processing started.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * Total revenue attribution allocation records in the batch.
   *
   * @public
   */
  TotalRevenueAttributionAllocationRecords: number | undefined;
}

/**
 * @public
 */
export interface UpdateRevenueAttributionInput {
  /**
   * The catalog that the revenue attribution belongs to.
   *
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * The unique identifier of the revenue attribution to update. Accepts a direct ID or ARN.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique token to ensure idempotency of the update request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The updated description of the revenue attribution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current revision of the revenue attribution. Must match the server's current value.
   *
   * @public
   */
  Revision: string | undefined;
}

/**
 * @public
 */
export interface UpdateRevenueAttributionOutput {
  /**
   * The unique identifier of the updated revenue attribution.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated revenue attribution.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The updated description of the revenue attribution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date when the attribution was last modified.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * The latest revision of the attribution after the update.
   *
   * @public
   */
  LatestRevision?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
