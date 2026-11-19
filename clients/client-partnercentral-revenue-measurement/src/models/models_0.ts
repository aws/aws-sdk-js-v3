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
  RevenueShareProductAccountType,
  SortOrder,
  TenancyModel,
} from "./enums";

/**
 * <p>Read-time AWS Marketplace product attributes returned in revenue attribution responses, including service-resolved fields.</p>
 * @public
 */
export interface MarketplaceProductSummary {
  /**
   * <p>The product identifier provided at attribution creation.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The AWS Marketplace product code resolved using the product identifier.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The display name of the AWS Marketplace product.</p>
   * @public
   */
  ProductName?: string | undefined;
}

/**
 * <p>Summary representation of a revenue attribution returned in list operations.</p>
 * @public
 */
export interface AttributionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the revenue attribution.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the revenue attribution.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The catalog that the revenue attribution belongs to.</p>
   * @public
   */
  Catalog?: CatalogName | undefined;

  /**
   * <p>The display name of the revenue attribution.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The tenancy model for this revenue attribution.</p>
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * <p>The AWS Marketplace product attributes associated with this attribution, if set.</p>
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * <p>The date when the revenue attribution was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date when the revenue attribution was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The latest revision of the revenue attribution resource.</p>
   * @public
   */
  LatestRevision?: string | undefined;

  /**
   * <p>The date from which this revenue attribution is effective, derived from the earliest allocation start date (YYYY-MM-DD).</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date until which this revenue attribution is effective, derived from the latest allocation end date (YYYY-MM-DD).</p>
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * <p>The total number of allocations under this revenue attribution whose Status is ACTIVE.</p>
   * @public
   */
  TotalActiveRevenueAttributionAllocationCount?: number | undefined;

  /**
   * <p>The total number of allocations under this revenue attribution, counting both ACTIVE and INACTIVE.</p>
   * @public
   */
  TotalRevenueAttributionAllocationCount?: number | undefined;

  /**
   * <p>Program-defined key-value attributes for the revenue attribution.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * <p>A typed account list supplied for a product in a CreateMarketplaceRevenueShare or UpdateMarketplaceRevenueShare request.</p>
 * @public
 */
export interface RevenueShareProductAccountEntry {
  /**
   * <p>The type of account list.</p>
   * @public
   */
  AccountType: RevenueShareProductAccountType | undefined;

  /**
   * <p>The AWS account identifiers for this type. Each ID must be a 12-digit AWS account ID. Account ownership is verified after the request is accepted.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>A product and its typed account lists as supplied in a CreateMarketplaceRevenueShare or UpdateMarketplaceRevenueShare request.</p>
 * @public
 */
export interface MarketplaceRevenueShareProductEntry {
  /**
   * <p>The AWS Marketplace product ID or product ARN. The share stores and returns the product ID.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The typed account lists for this product. Omit to have the service determine the accounts. At most one entry per type; each entry must carry at least one account. An empty list is the same as omitting the field.</p>
   * @public
   */
  Accounts?: RevenueShareProductAccountEntry[] | undefined;
}

/**
 * <p>A key-value pair used for organizing and managing resources through metadata tags.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key portion of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value portion of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareInput {
  /**
   * <p>The catalog in which to create the marketplace revenue share.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>A unique token to ensure idempotency of the create request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The products in the marketplace revenue share, each with its typed account lists. 1 to 25 products.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductEntry[] | undefined;

  /**
   * <p>Tags to associate with the marketplace revenue share upon creation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A per-type count of accounts associated with a product.</p>
 * @public
 */
export interface RevenueShareProductAccountSummary {
  /**
   * <p>The type of account list.</p>
   * @public
   */
  AccountType: RevenueShareProductAccountType | undefined;

  /**
   * <p>The number of accounts of this type.</p>
   * @public
   */
  Count: number | undefined;
}

/**
 * <p>A product in a marketplace revenue share, as returned in Create, Update and List responses, with per-type account counts but no account IDs.</p>
 * @public
 */
export interface MarketplaceRevenueShareProductSummary {
  /**
   * <p>The AWS Marketplace product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The AWS Marketplace product code, resolved by the service.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The display name of the AWS Marketplace product, resolved by the service.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>Per-type counts of the accounts associated with this product.</p>
   * @public
   */
  Accounts?: RevenueShareProductAccountSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareOutput {
  /**
   * <p>The unique identifier of the newly created marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created marketplace revenue share.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The catalog that the marketplace revenue share belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The products in the newly created marketplace revenue share, each with per-type account counts.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductSummary[] | undefined;

  /**
   * <p>The date when the marketplace revenue share was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the marketplace revenue share was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of the newly created marketplace revenue share.</p>
   * @public
   */
  Revision: string | undefined;
}

/**
 * <p>Details about a specific field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A human-readable message describing why the field validation failed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The specific validation error code indicating the type of validation failure.</p>
   * @public
   */
  Code: FieldValidationCode | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareAllocationInput {
  /**
   * <p>The catalog in which to create the allocation.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The parent marketplace revenue share, by ID (mrs-...) or ARN.</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>A unique token to ensure idempotency of the create request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The revision of the parent marketplace revenue share that the caller last read, for optimistic concurrency control. A stale value returns ConflictException with Reason REVISION_MISMATCH.</p>
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * <p>The effective start date for the allocation. Must be the first day of a month.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date for the allocation. Must be the last day of a month (YYYY-MM-DD).</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The revenue share percentage for this allocation.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceRevenueShareAllocationOutput {
  /**
   * <p>The unique identifier of the newly created allocation.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The parent marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The effective start date of the allocation.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date of the allocation.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>The status of the allocation.</p>
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * <p>The date when the allocation was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the allocation was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of the parent marketplace revenue share at which the allocation was created.</p>
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * <p>The latest revision of the parent marketplace revenue share.</p>
   * @public
   */
  MarketplaceRevenueShareLatestRevision: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareInput {
  /**
   * <p>The catalog that the marketplace revenue share belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The marketplace revenue share to retrieve, by ID (mrs-...) or ARN.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The revision of the marketplace revenue share to retrieve. Omit to return the latest revision.</p>
   * @public
   */
  Revision?: string | undefined;
}

/**
 * <p>A typed account list returned by GetMarketplaceRevenueShare, with its count and full list of IDs.</p>
 * @public
 */
export interface RevenueShareProductAccountDetail {
  /**
   * <p>The type of account list.</p>
   * @public
   */
  AccountType: RevenueShareProductAccountType | undefined;

  /**
   * <p>The number of accounts of this type.</p>
   * @public
   */
  Count: number | undefined;

  /**
   * <p>The full list of AWS account identifiers of this type.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>A product in a marketplace revenue share, as returned by GetMarketplaceRevenueShare, with the full typed account lists.</p>
 * @public
 */
export interface MarketplaceRevenueShareProductDetail {
  /**
   * <p>The AWS Marketplace product identifier.</p>
   * @public
   */
  ProductId: string | undefined;

  /**
   * <p>The AWS Marketplace product code, resolved by the service.</p>
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * <p>The display name of the AWS Marketplace product, resolved by the service.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The typed account lists for this product, each with its count and full list of IDs.</p>
   * @public
   */
  Accounts?: RevenueShareProductAccountDetail[] | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareOutput {
  /**
   * <p>The unique identifier of the marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the marketplace revenue share.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The catalog that the marketplace revenue share belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The products in the marketplace revenue share, each with its typed account lists and full account IDs. Empty when the share is closed.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductDetail[] | undefined;

  /**
   * <p>The date when the marketplace revenue share was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the marketplace revenue share was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of the retrieved marketplace revenue share.</p>
   * @public
   */
  Revision: string | undefined;

  /**
   * <p>The latest revision of the marketplace revenue share.</p>
   * @public
   */
  LatestRevision: string | undefined;

  /**
   * <p>The date from which this share is effective, derived from the earliest ACTIVE allocation start date (YYYY-MM-DD). Absent when no ACTIVE allocation remains.</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date until which this share is effective, derived from the latest ACTIVE allocation end date (YYYY-MM-DD). Absent when no ACTIVE allocation remains.</p>
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * <p>The number of active allocations under this marketplace revenue share.</p>
   * @public
   */
  TotalActiveMarketplaceRevenueShareAllocationCount: number | undefined;

  /**
   * <p>The total number of allocations under this marketplace revenue share.</p>
   * @public
   */
  TotalMarketplaceRevenueShareAllocationCount: number | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareAllocationInput {
  /**
   * <p>The catalog that the allocation belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The parent marketplace revenue share, by ID (mrs-...) or ARN.</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the allocation to retrieve.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The revision of the parent marketplace revenue share at which to retrieve the allocation. Omit to return the latest.</p>
   * @public
   */
  MarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceRevenueShareAllocationOutput {
  /**
   * <p>The unique identifier of the allocation.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The parent marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The effective start date of the allocation.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date of the allocation.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>The status of the allocation.</p>
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * <p>The date when the allocation was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the allocation was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of the parent marketplace revenue share at which the allocation was read.</p>
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * <p>The latest revision of the parent marketplace revenue share.</p>
   * @public
   */
  MarketplaceRevenueShareLatestRevision: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueShareAllocationsInput {
  /**
   * <p>The catalog containing the allocations.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The parent marketplace revenue share, by ID (mrs-...) or ARN.</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>Filter by allocation status.</p>
   * @public
   */
  StatusFilter?: AllocationStatus | undefined;

  /**
   * <p>Inclusive lower bound for EffectiveFrom date filter.</p>
   * @public
   */
  AfterEffectiveFrom?: string | undefined;

  /**
   * <p>Exclusive upper bound for EffectiveFrom date filter (half-open range).</p>
   * @public
   */
  BeforeEffectiveFrom?: string | undefined;

  /**
   * <p>Inclusive lower bound for EffectiveUntil date filter.</p>
   * @public
   */
  AfterEffectiveUntil?: string | undefined;

  /**
   * <p>Exclusive upper bound for EffectiveUntil date filter (half-open range).</p>
   * @public
   */
  BeforeEffectiveUntil?: string | undefined;

  /**
   * <p>The field to sort marketplace revenue share allocations by.</p>
   * @public
   */
  SortBy?: MarketplaceRevenueShareAllocationSortField | undefined;

  /**
   * <p>The direction to sort results. Defaults to ASCENDING.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>Maximum number of results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token from a previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Optional share revision for historical list. Returns allocations as they existed at this revision.</p>
   * @public
   */
  MarketplaceRevenueShareRevision?: string | undefined;
}

/**
 * <p>Summary information about a marketplace revenue share allocation.</p>
 * @public
 */
export interface MarketplaceRevenueShareAllocationSummary {
  /**
   * <p>The unique identifier of the allocation.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The parent marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The effective start date of the allocation.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date of the allocation.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>The status of the allocation.</p>
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * <p>The date when the allocation was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the allocation was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueShareAllocationsOutput {
  /**
   * <p>The list of allocation summaries for the current page.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationSummaries: MarketplaceRevenueShareAllocationSummary[] | undefined;

  /**
   * <p>Pagination token for the next page. Absent if no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueSharesInput {
  /**
   * <p>The catalog to list marketplace revenue shares from.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>Filter results to only include these marketplace revenue shares, by ID or ARN. 1 to 100 identifiers. When several filters are sent, a share must match all of them.</p>
   * @public
   */
  Identifiers?: string[] | undefined;

  /**
   * <p>Filter results to the marketplace revenue shares that contain any of these products. 1 to 10 product IDs or product ARNs. Shares the caller does not own are never returned.</p>
   * @public
   */
  ProductIds?: string[] | undefined;

  /**
   * <p>Filter results to the marketplace revenue shares that contain a product with any of these product codes. 1 to 10 product codes.</p>
   * @public
   */
  ProductCodes?: string[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Token for pagination. Use the value returned in the previous response to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field to sort marketplace revenue shares by.</p>
   * @public
   */
  SortBy?: MarketplaceRevenueShareSortBy | undefined;

  /**
   * <p>The direction to sort results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>Filter results to marketplace revenue shares created at or after this timestamp (inclusive).</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter results to marketplace revenue shares created before this timestamp (exclusive).</p>
   * @public
   */
  CreatedBefore?: Date | undefined;
}

/**
 * <p>Summary information about a marketplace revenue share.</p>
 * @public
 */
export interface MarketplaceRevenueShareSummary {
  /**
   * <p>The unique identifier of the marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the marketplace revenue share.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The catalog that the marketplace revenue share belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The products in the marketplace revenue share, each with per-type account counts. Empty when the share is closed.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductSummary[] | undefined;

  /**
   * <p>The date when the marketplace revenue share was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the marketplace revenue share was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The latest revision of the marketplace revenue share.</p>
   * @public
   */
  LatestRevision: string | undefined;

  /**
   * <p>The date from which this share is effective, derived from the earliest ACTIVE allocation start date (YYYY-MM-DD). Absent when no ACTIVE allocation remains.</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date until which this share is effective, derived from the latest ACTIVE allocation end date (YYYY-MM-DD). Absent when no ACTIVE allocation remains.</p>
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * <p>The number of active allocations under this share.</p>
   * @public
   */
  TotalActiveMarketplaceRevenueShareAllocationCount: number | undefined;

  /**
   * <p>The total number of allocations under this share.</p>
   * @public
   */
  TotalMarketplaceRevenueShareAllocationCount: number | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceRevenueSharesOutput {
  /**
   * <p>The list of marketplace revenue share summaries.</p>
   * @public
   */
  MarketplaceRevenueShareSummaries: MarketplaceRevenueShareSummary[] | undefined;

  /**
   * <p>Token for pagination. Present if there are more results available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareInput {
  /**
   * <p>The catalog that the marketplace revenue share belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The marketplace revenue share to update, by ID (mrs-...) or ARN.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique token to ensure idempotency of the update request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The current revision of the marketplace revenue share, for optimistic concurrency control. A stale value returns ConflictException with Reason REVISION_MISMATCH.</p>
   * @public
   */
  Revision: string | undefined;

  /**
   * <p>The complete desired set of products in the marketplace revenue share, each with its typed account lists. 0 to 25 products; an empty list closes the marketplace revenue share.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductEntry[] | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareOutput {
  /**
   * <p>The unique identifier of the updated marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated marketplace revenue share.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The products in the marketplace revenue share after the update, each with per-type account counts. Empty when the marketplace revenue share is closed.</p>
   * @public
   */
  Products: MarketplaceRevenueShareProductSummary[] | undefined;

  /**
   * <p>The date when the marketplace revenue share was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The latest revision of the marketplace revenue share after the update.</p>
   * @public
   */
  LatestRevision: string | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareAllocationInput {
  /**
   * <p>The catalog containing the allocation.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The parent marketplace revenue share, by ID (mrs-...) or ARN.</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The identifier of the allocation to update.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The current revision of the parent share. Must match for optimistic concurrency control.</p>
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * <p>A unique token to ensure idempotency of the update request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The new revenue share percentage. Only modifiable on future-dated allocations.</p>
   * @public
   */
  RevenueSharePercent?: string | undefined;

  /**
   * <p>The new status. Set to INACTIVE for soft-delete. Only modifiable on future-dated allocations.</p>
   * @public
   */
  Status?: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceRevenueShareAllocationOutput {
  /**
   * <p>The unique identifier of the updated allocation.</p>
   * @public
   */
  MarketplaceRevenueShareAllocationId: string | undefined;

  /**
   * <p>The parent marketplace revenue share, short ID form (mrs-...).</p>
   * @public
   */
  MarketplaceRevenueShareIdentifier: string | undefined;

  /**
   * <p>The effective start date of the allocation.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date of the allocation.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>The status of the allocation.</p>
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * <p>The date when the allocation was created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>The date when the allocation was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of the parent marketplace revenue share at which the update was committed.</p>
   * @public
   */
  MarketplaceRevenueShareRevision: string | undefined;

  /**
   * <p>The latest revision of the parent marketplace revenue share after the update.</p>
   * @public
   */
  MarketplaceRevenueShareLatestRevision: string | undefined;
}

/**
 * @public
 */
export interface CreateRevenueAttributionInput {
  /**
   * <p>The catalog in which to create the revenue attribution.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>A unique token to ensure idempotency of the create request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the revenue attribution. Must be unique within the catalog and the partner's account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the revenue attribution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tenancy model for this revenue attribution.</p>
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * <p>The unique product identifier in AWS Marketplace. Accepts a product entity ID (e.g., prod-abc123def4567) or a product ARN.</p>
   * @public
   */
  ProductIdentifier?: string | undefined;

  /**
   * <p>Tags to associate with the revenue attribution upon creation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Program-defined key-value attributes for the revenue attribution.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRevenueAttributionOutput {
  /**
   * <p>The unique identifier of the newly created revenue attribution.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the newly created revenue attribution.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the revenue attribution.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the revenue attribution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tenancy model for this revenue attribution.</p>
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * <p>The associated AWS Marketplace product listing, if set at creation.</p>
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * <p>The revision of the newly created attribution resource.</p>
   * @public
   */
  Revision?: string | undefined;

  /**
   * <p>Program-defined key-value attributes for the revenue attribution.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionInput {
  /**
   * <p>The catalog that the revenue attribution belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The unique identifier of the revenue attribution to retrieve. Accepts a direct ID or ARN.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The revision of the attribution to retrieve. Omit to return the latest revision.</p>
   * @public
   */
  Revision?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the revenue attribution.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the revenue attribution.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The catalog that the revenue attribution belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The display name of the revenue attribution.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the revenue attribution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tenancy model for this revenue attribution.</p>
   * @public
   */
  TenancyModel: TenancyModel | undefined;

  /**
   * <p>The associated AWS Marketplace product listing, if set.</p>
   * @public
   */
  MarketplaceProduct?: MarketplaceProductSummary | undefined;

  /**
   * <p>The date when the revenue attribution was created.</p>
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * <p>The date when the revenue attribution was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The revision of the retrieved attribution.</p>
   * @public
   */
  Revision?: string | undefined;

  /**
   * <p>The latest revision of the attribution.</p>
   * @public
   */
  LatestRevision?: string | undefined;

  /**
   * <p>The date from which this revenue attribution is effective, derived from the earliest allocation start date (YYYY-MM-DD).</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date until which this revenue attribution is effective, derived from the latest allocation end date (YYYY-MM-DD).</p>
   * @public
   */
  EffectiveUntil?: string | undefined;

  /**
   * <p>The total number of allocations under this revenue attribution whose Status is ACTIVE.</p>
   * @public
   */
  TotalActiveRevenueAttributionAllocationCount?: number | undefined;

  /**
   * <p>The total number of allocations under this revenue attribution, counting both ACTIVE and INACTIVE.</p>
   * @public
   */
  TotalRevenueAttributionAllocationCount?: number | undefined;

  /**
   * <p>Program-defined key-value attributes for the revenue attribution.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationInput {
  /**
   * <p>The catalog that contains the resource.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The revenue attribution identifier.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * <p>The allocation identifier.</p>
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * <p>Point-in-time revision number to query.</p>
   * @public
   */
  RevenueAttributionRevision?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationOutput {
  /**
   * <p>Unique allocation identifier.</p>
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * <p>The revenue attribution identifier.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * <p>The type of the associated deal entity.</p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p>The unique identifier of the associated deal entity.</p>
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * <p>The display name of the associated deal entity.</p>
   * @public
   */
  EntityName?: string | undefined;

  /**
   * <p>The customer AWS account ID for this associated deal entity.</p>
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * <p>Revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>First day of the effective month.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>Last day of the effective month.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>Current allocation status.</p>
   * @public
   */
  Status: AllocationStatus | undefined;

  /**
   * <p>When the allocation was first created.</p>
   * @public
   */
  CreatedDate: Date | undefined;

  /**
   * <p>When the allocation was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The revision of this allocation version.</p>
   * @public
   */
  RevenueAttributionRevision: string | undefined;

  /**
   * <p>The latest committed revision.</p>
   * @public
   */
  RevenueAttributionLatestRevision: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationsTaskInput {
  /**
   * <p>The catalog that contains the resource.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The revenue attribution identifier.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;
}

/**
 * <p>Details of a validation error for a single revenue attribution allocation record.</p>
 * @public
 */
export interface RevenueAttributionAllocationErrorDetail {
  /**
   * <p>The allocation identifier. Present for UPDATE actions; absent for CREATE actions.</p>
   * @public
   */
  RevenueAttributionAllocationId?: string | undefined;

  /**
   * <p>The deal entity type of the failing record.</p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p>The deal entity identifier of the failing record.</p>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The customer AWS account ID of the failing record.</p>
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * <p>Effective start date of the failing record.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>Effective end date of the failing record.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>The action that was attempted.</p>
   * @public
   */
  Action: RevenueAttributionAllocationAction | undefined;

  /**
   * <p>Machine-readable error code.</p>
   * @public
   */
  ErrorCode: RevenueAttributionAllocationErrorCode | undefined;

  /**
   * <p>Human-readable error description.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueAttributionAllocationsTaskOutput {
  /**
   * <p>The unique identifier for the asynchronous task.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>Current task status.</p>
   * @public
   */
  Status: RevenueAttributionAllocationTaskStatus | undefined;

  /**
   * <p>The catalog used for this task.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>ARN of the revenue attribution resource.</p>
   * @public
   */
  RevenueAttributionArn: string | undefined;

  /**
   * <p>When processing started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>When processing ended. Only present when COMPLETE or FAILED.</p>
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * <p>Total revenue attribution allocation records in the batch.</p>
   * @public
   */
  TotalRevenueAttributionAllocationRecords: number | undefined;

  /**
   * <p>Human-readable description, if provided at creation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The revision number assigned to this batch. Only present when COMPLETE.</p>
   * @public
   */
  RevenueAttributionLatestRevision?: string | undefined;

  /**
   * <p>All errors discovered during async processing. Only present when FAILED.</p>
   * @public
   */
  ErrorDetailList?: RevenueAttributionAllocationErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionAllocationsInput {
  /**
   * <p>The catalog that contains the resource.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The revenue attribution identifier to query.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * <p>Filter by deal entity types.</p>
   * @public
   */
  EntityTypeFilters?: EntityType[] | undefined;

  /**
   * <p>Filter by deal entity identifiers.</p>
   * @public
   */
  EntityIdentifierFilters?: string[] | undefined;

  /**
   * <p>Filter by customer AWS account IDs for associated deal entities.</p>
   * @public
   */
  CustomerAwsAccountIdFilters?: string[] | undefined;

  /**
   * <p>Filter by allocation status.</p>
   * @public
   */
  StatusFilter?: AllocationStatus | undefined;

  /**
   * <p>Inclusive lower bound for EffectiveFrom date filter.</p>
   * @public
   */
  AfterEffectiveFrom?: string | undefined;

  /**
   * <p>Exclusive upper bound for EffectiveFrom date filter (half-open range).</p>
   * @public
   */
  BeforeEffectiveFrom?: string | undefined;

  /**
   * <p>Inclusive lower bound for EffectiveUntil date filter.</p>
   * @public
   */
  AfterEffectiveUntil?: string | undefined;

  /**
   * <p>Exclusive upper bound for EffectiveUntil date filter (half-open range).</p>
   * @public
   */
  BeforeEffectiveUntil?: string | undefined;

  /**
   * <p>Field to sort by.</p>
   * @public
   */
  SortBy?: RevenueAttributionAllocationSortField | undefined;

  /**
   * <p>Sort direction. Defaults to ASCENDING.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>Point-in-time revision number to query.</p>
   * @public
   */
  RevenueAttributionRevision?: string | undefined;

  /**
   * <p>Maximum results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Pagination token from previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a revenue attribution allocation.</p>
 * @public
 */
export interface RevenueAttributionAllocationSummary {
  /**
   * <p>Unique allocation identifier.</p>
   * @public
   */
  RevenueAttributionAllocationId: string | undefined;

  /**
   * <p>The revenue attribution identifier.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * <p>The type of the associated deal entity.</p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p>The unique identifier of the associated deal entity.</p>
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * <p>The display name of the associated deal entity.</p>
   * @public
   */
  EntityName?: string | undefined;

  /**
   * <p>The customer AWS account ID for this associated deal entity.</p>
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * <p>Revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>First day of the effective month.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>Last day of the effective month.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>Current allocation status.</p>
   * @public
   */
  Status: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionAllocationsOutput {
  /**
   * <p>Paginated list of allocations matching filters.</p>
   * @public
   */
  RevenueAttributionAllocationSummaries: RevenueAttributionAllocationSummary[] | undefined;

  /**
   * <p>Token for next page. Absent if no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filters revenue attributions by a context key and, optionally, a set of values.</p>
 * @public
 */
export interface ContextFilter {
  /**
   * <p>The context key to filter on.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Matches when the stored value equals any of these values. When omitted, matches when the key is present.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionsInput {
  /**
   * <p>The catalog to list revenue attributions from.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>Filter results to only include revenue attributions with the specified identifiers.</p>
   * @public
   */
  Identifiers?: string[] | undefined;

  /**
   * <p>Filter results to only include revenue attributions created after this timestamp.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter results to only include revenue attributions created before this timestamp.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The field to sort revenue attributions by.</p>
   * @public
   */
  SortBy?: AttributionSortBy | undefined;

  /**
   * <p>The direction to sort results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Token for pagination. Use the value returned in the previous response to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter results by context. Filters are combined with AND; values within a filter are combined with OR.</p>
   * @public
   */
  ContextFilters?: ContextFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRevenueAttributionsOutput {
  /**
   * <p>The list of revenue attribution summaries.</p>
   * @public
   */
  RevenueAttributionSummaries?: AttributionSummary[] | undefined;

  /**
   * <p>Token for pagination. Present if there are more results available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A single allocation change within a batch request.</p>
 * @public
 */
export interface RevenueShareAllocation {
  /**
   * <p>The operation type: CREATE or UPDATE.</p>
   * @public
   */
  Action: RevenueAttributionAllocationAction | undefined;

  /**
   * <p>The allocation to update. Required when Action is UPDATE.</p>
   * @public
   */
  RevenueAttributionAllocationId?: string | undefined;

  /**
   * <p>The type of the associated deal entity.</p>
   * @public
   */
  EntityType: EntityType | undefined;

  /**
   * <p>The unique identifier of the associated deal entity.</p>
   * @public
   */
  EntityIdentifier: string | undefined;

  /**
   * <p>The customer AWS account ID for this associated deal entity.</p>
   * @public
   */
  CustomerAwsAccountId: string | undefined;

  /**
   * <p>Revenue share percentage.</p>
   * @public
   */
  RevenueSharePercent: string | undefined;

  /**
   * <p>The effective start date for this allocation.</p>
   * @public
   */
  EffectiveFrom: string | undefined;

  /**
   * <p>The effective end date for this allocation.</p>
   * @public
   */
  EffectiveUntil: string | undefined;

  /**
   * <p>Allocation status. Defaults to ACTIVE on CREATE.</p>
   * @public
   */
  Status?: AllocationStatus | undefined;
}

/**
 * @public
 */
export interface StartRevenueAttributionAllocationsTaskInput {
  /**
   * <p>The catalog context for this operation.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The revenue attribution identifier.</p>
   * @public
   */
  RevenueAttributionIdentifier: string | undefined;

  /**
   * <p>Current revision of the revenue attribution for optimistic locking.</p>
   * @public
   */
  RevenueAttributionRevision: string | undefined;

  /**
   * <p>The list of allocation changes to process in this batch.</p>
   * @public
   */
  RevenueShareAllocations: RevenueShareAllocation[] | undefined;

  /**
   * <p>Idempotency token for deduplication and retry.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Human-readable description of the batch.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface StartRevenueAttributionAllocationsTaskOutput {
  /**
   * <p>Unique identifier for the submitted task.</p>
   * @public
   */
  TaskId: string | undefined;

  /**
   * <p>Initial task status. Always IN_PROGRESS on successful submission.</p>
   * @public
   */
  Status: RevenueAttributionAllocationTaskStatus | undefined;

  /**
   * <p>The catalog used for this task.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>ARN of the revenue attribution resource.</p>
   * @public
   */
  RevenueAttributionArn: string | undefined;

  /**
   * <p>When processing started.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>Total revenue attribution allocation records in the batch.</p>
   * @public
   */
  TotalRevenueAttributionAllocationRecords: number | undefined;
}

/**
 * @public
 */
export interface UpdateRevenueAttributionInput {
  /**
   * <p>The catalog that the revenue attribution belongs to.</p>
   * @public
   */
  Catalog: CatalogName | undefined;

  /**
   * <p>The unique identifier of the revenue attribution to update. Accepts a direct ID or ARN.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A unique token to ensure idempotency of the update request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The updated description of the revenue attribution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current revision of the revenue attribution. Must match the server's current value.</p>
   * @public
   */
  Revision: string | undefined;

  /**
   * <p>Full-replacement context map. Omit to leave the stored context unchanged; pass an empty map to clear it.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRevenueAttributionOutput {
  /**
   * <p>The unique identifier of the updated revenue attribution.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated revenue attribution.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The updated description of the revenue attribution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date when the attribution was last modified.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;

  /**
   * <p>The latest revision of the attribution after the update.</p>
   * @public
   */
  LatestRevision?: string | undefined;

  /**
   * <p>The context stored on the revenue attribution after the update.</p>
   * @public
   */
  Context?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
