// smithy-typescript generated code
import type {
  ApplicationType,
  BillingFeature,
  BillingFeatureFilterName,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  CreditSharingType,
  CreditStatus,
  Dimension,
  PreferenceValue,
  SearchOption,
} from "./enums";

/**
 * <p>A time range with a start and end time.</p>
 * @public
 */
export interface ActiveTimeRange {
  /**
   * <p>The inclusive time range start date.</p>
   * @public
   */
  activeAfterInclusive: Date | undefined;

  /**
   * <p> The inclusive time range end date. </p>
   * @public
   */
  activeBeforeInclusive: Date | undefined;
}

/**
 * <p>An additional charge applied to an Enterprise Support contract.</p>
 * @public
 */
export interface AdditionalCharge {
  /**
   * <p>A description of the additional charge.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The charge amount.</p>
   * @public
   */
  amount?: string | undefined;

  /**
   * <p>The type of additional charge.</p>
   * @public
   */
  chargeType?: string | undefined;
}

/**
 * <p>A monetary amount with a currency code. Used throughout the Billing API to represent credit balances, allocations, and adjustments.</p>
 * @public
 */
export interface Amount {
  /**
   * <p>The ISO 4217 currency code for the amount (for example, <code>USD</code>).</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The amount as a decimal string (for example, <code>"743.21"</code>). Negative values represent credits that reduce a bill.</p>
   * @public
   */
  currencyAmount: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing view to associate source views with. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A list of ARNs of the source billing views to associate. </p>
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsResponse {
  /**
   * <p> The ARN of the billing view that the source views were associated with. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The field's information of a request that resulted in an exception. </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p> The Cost Categories values used for filtering the costs. </p>
 * @public
 */
export interface CostCategoryValues {
  /**
   * <p> The unique name of the Cost Category. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The specific value of the Cost Category. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> The metadata that you can use to filter and group your results. </p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p> The names of the metadata types that you can use to filter and group your results. </p>
   * @public
   */
  key: Dimension | undefined;

  /**
   * <p> The metadata values that you can use to filter and group your results. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> The values that are available for a tag. </p>
 * @public
 */
export interface TagValues {
  /**
   * <p> The key for the tag. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The specific value of the tag. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> Specifies a time range with inclusive begin and end dates. </p>
 * @public
 */
export interface TimeRange {
  /**
   * <p> The inclusive start date of the time range. </p>
   * @public
   */
  beginDateInclusive?: Date | undefined;

  /**
   * <p> The inclusive end date of the time range. </p>
   * @public
   */
  endDateInclusive?: Date | undefined;
}

/**
 * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code>, <code>Tags</code>, and <code>CostCategories</code>. </p>
 * @public
 */
export interface Expression {
  /**
   * <p> The specific <code>Dimension</code> to use for <code>Expression</code>. </p>
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * <p> The specific <code>Tag</code> to use for <code>Expression</code>. </p>
   * @public
   */
  tags?: TagValues | undefined;

  /**
   * <p> The filter that's based on <code>CostCategory</code> values. </p>
   * @public
   */
  costCategories?: CostCategoryValues | undefined;

  /**
   * <p> Specifies a time range filter for the billing view data. </p>
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * <p> The tag structure that contains a tag key and value. </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p> The key that's associated with the tag. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The value that's associated with the tag. </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewRequest {
  /**
   * <p> The name of the billing view. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of billing views used as the data source for the custom billing view.</p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code>, <code>Tags</code>, and <code>CostCategories</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key value map specifying tags associated to the billing view being created. </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The time when the billing view was created. </p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> If set to true, forces deletion of the billing view even if it has derived resources (e.g. other billing views or budgets). Use with caution as this may break dependent resources. </p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceViewsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing view to disassociate source views from. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A list of ARNs of the source billing views to disassociate. </p>
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceViewsResponse {
  /**
   * <p> The ARN of the billing view that the source views were disassociated from. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>A filter that narrows the set of preferences returned by <code>GetBillingPreferences</code>.</p>
 * @public
 */
export interface BillingFeatureFilter {
  /**
   * <p>The filter name. Currently the only supported value is <code>PREFERENCE_KEY</code>.</p>
   * @public
   */
  name?: BillingFeatureFilterName | undefined;

  /**
   * <p>The filter values to match. For <code>PREFERENCE_KEY</code>, supply 1 to 10 preference key values to match.</p>
   * @public
   */
  value?: string[] | undefined;
}

/**
 * @public
 */
export interface GetBillingPreferencesRequest {
  /**
   * <p>Pagination token from a previous response. Pass the value returned in <code>nextToken</code> to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to return per page. Range: 1 to 50. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The feature to retrieve. Specify exactly one value. Valid values: <code>BILLING_ALERTS</code>, <code>RI_SHARING</code>, <code>RI_SHARING_HISTORY</code>, <code>CREDIT_SHARING</code>, <code>CREDIT_SHARING_HISTORY</code>, <code>CREDIT_LEVEL_SHARING</code>, <code>CREDIT_PREFERENCE_OPTIONS</code>.</p>
   * @public
   */
  features: BillingFeature[] | undefined;

  /**
   * <p>Filters to narrow results. Specify exactly one filter when supplied. The supported filter name is <code>PREFERENCE_KEY</code>, which accepts 1 to 10 values to match preference keys.</p>
   * @public
   */
  filters?: BillingFeatureFilter[] | undefined;
}

/**
 * <p>A specific billing period identified by year and month.</p>
 * @public
 */
export interface BillingPeriod {
  /**
   * <p>The four-digit year of the billing period.</p>
   * @public
   */
  year: number | undefined;

  /**
   * <p>The month of the billing period as an integer between 1 and 12.</p>
   * @public
   */
  month: number | undefined;
}

/**
 * <p>A single billing preference entry returned by <code>GetBillingPreferences</code>.</p>
 * @public
 */
export interface BillingPreferenceSummary {
  /**
   * <p>The feature this preference belongs to.</p>
   * @public
   */
  feature: BillingFeature | undefined;

  /**
   * <p>The preference key. Format depends on the feature.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The preference value. Valid values: <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  value: PreferenceValue | undefined;

  /**
   * <p>The display name of the account. Populated together with <code>accountId</code>; <code>null</code> otherwise.</p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>The associated Amazon Web Services account ID. Populated for account-list keys; <code>null</code> otherwise.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The billing period associated with the preference change. Populated only for the history features <code>RI_SHARING_HISTORY</code> and <code>CREDIT_SHARING_HISTORY</code>.</p>
   * @public
   */
  billingPeriod?: BillingPeriod | undefined;
}

/**
 * @public
 */
export interface GetBillingPreferencesResponse {
  /**
   * <p>The list of preference entries matching the request.</p>
   * @public
   */
  billingPreferences: BillingPreferenceSummary[] | undefined;

  /**
   * <p>Pagination token. Present when more pages are available; <code>null</code> when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p> Represents the health status of a billing view, including a status code and optional reasons for the status. </p>
 * @public
 */
export interface BillingViewHealthStatus {
  /**
   * <p>The current health status code of the billing view.</p>
   * @public
   */
  statusCode?: BillingViewStatus | undefined;

  /**
   * <p>A list of reasons explaining the current health status, if applicable.</p>
   * @public
   */
  statusReasons?: BillingViewStatusReason[] | undefined;
}

/**
 * <p>The metadata associated to the billing view. </p>
 * @public
 */
export interface BillingViewElement {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The account name of the billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of billing group. </p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * <p>The account owner of the billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code>, <code>Tags</code>, and <code>CostCategories</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>The time when the billing view was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time when the billing view was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p> The number of billing views that use this billing view as a source. </p>
   * @public
   */
  derivedViewCount?: number | undefined;

  /**
   * <p> The number of source views associated with this billing view. </p>
   * @public
   */
  sourceViewCount?: number | undefined;

  /**
   * <p> The timestamp of when the billing view definition was last updated. </p>
   * @public
   */
  viewDefinitionLastUpdatedAt?: Date | undefined;

  /**
   * <p> The current health status of the billing view. </p>
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface GetBillingViewResponse {
  /**
   * <p>The billing view element associated with the specified ARN. </p>
   * @public
   */
  billingView: BillingViewElement | undefined;
}

/**
 * @public
 */
export interface GetCreditAllocationHistoryRequest {
  /**
   * <p>The Amazon Web Services account ID whose allocation history to retrieve. Must be a 12-digit numeric string.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Filters the result to a single credit. When omitted, returns allocation entries for all credits.</p>
   * @public
   */
  creditId?: number | undefined;

  /**
   * <p>Inclusive start date as Unix epoch seconds. Must be on or before <code>endDate</code>. The range from <code>startDate</code> to <code>endDate</code> cannot exceed 24 billing months.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>Inclusive end date as Unix epoch seconds.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>Pagination token from a previous response. Pass the value returned in <code>nextToken</code> to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of records to return per page. Range: 1 to 1000. Default: 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A single entry in the credit allocation history, representing how a credit was applied to a specific service during a billing month.</p>
 * @public
 */
export interface CreditAllocationHistoryEntry {
  /**
   * <p>The identifier of the credit that was applied.</p>
   * @public
   */
  creditId: string | undefined;

  /**
   * <p>The amount of credit applied. Negative values represent credits that reduced the bill.</p>
   * @public
   */
  creditAmount: Amount | undefined;

  /**
   * <p>A human-readable description of the credit allocation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Web Services account the credit was applied to.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The Amazon Web Services service the credit was applied to.</p>
   * @public
   */
  appliedServiceName: string | undefined;

  /**
   * <p>The billing month of the application in <code>YYYY-MM</code> format.</p>
   * @public
   */
  billingMonth: string | undefined;

  /**
   * <p> <code>true</code> when the entry was applied to an in-flight bill that has not yet been finalized.</p>
   * @public
   */
  isEstimatedBill: boolean | undefined;
}

/**
 * @public
 */
export interface GetCreditAllocationHistoryResponse {
  /**
   * <p>Allocation entries sorted by <code>billingMonth</code> in descending order.</p>
   * @public
   */
  creditAllocationHistoryList?: CreditAllocationHistoryEntry[] | undefined;

  /**
   * <p> <code>true</code> when data could not be retrieved for one or more billing months. The <code>failedMonths</code> field lists which months are missing.</p>
   * @public
   */
  partialResults: boolean | undefined;

  /**
   * <p>Billing months in <code>YYYY-MM</code> format that failed to return data. Non-empty only when <code>partialResults</code> is <code>true</code>.</p>
   * @public
   */
  failedMonths?: string[] | undefined;

  /**
   * <p>Pagination token. Present when more pages are available; <code>null</code> when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCreditsRequest {
  /**
   * <p>The Amazon Web Services account ID. Must be a 12-digit numeric string.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The start date for the credit period as Unix epoch seconds. Must be a past date that is not more than one year before the current date.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The end date for the credit period as Unix epoch seconds. Must not be a future date and must be on or after <code>startDate</code>. Defaults to the current date when omitted.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>When <code>true</code> and the caller is the management account, the response aggregates credits across the entire consolidated billing family. When <code>false</code> or omitted, returns only credits for the specified <code>accountId</code>.</p>
   * @public
   */
  payerAccountFlag?: boolean | undefined;
}

/**
 * <p>Detailed information about an Amazon Web Services credit, including its identifier, type, monetary amounts, applicable products, sharing configuration, and current enabled status.</p>
 * @public
 */
export interface CreditData {
  /**
   * <p>The unique identifier for the credit.</p>
   * @public
   */
  creditId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the credit.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The type of credit. Examples: <code>Promotion</code>, <code>Refund</code>, <code>TrueUp</code>.</p>
   * @public
   */
  creditType: string | undefined;

  /**
   * <p>The initial amount of the credit when it was issued.</p>
   * @public
   */
  initialAmount: Amount | undefined;

  /**
   * <p>The unused balance of the credit.</p>
   * @public
   */
  remainingAmount: Amount | undefined;

  /**
   * <p>The estimated remaining balance, including in-flight (open) bills that have not yet been finalized.</p>
   * @public
   */
  estimatedAmount?: Amount | undefined;

  /**
   * <p>The names of Amazon Web Services services this credit applies to.</p>
   * @public
   */
  applicableProductNames?: string[] | undefined;

  /**
   * <p>A human-readable description of the credit.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The date the credit becomes valid, as Unix epoch seconds.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The date the credit expires, as Unix epoch seconds.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The date the credit balance reached zero, as Unix epoch seconds.</p>
   * @public
   */
  exhaustDate?: Date | undefined;

  /**
   * <p>When the credit is applied during bill computation. Valid values: <code>BEFORE_CROSS_SERVICE_DISCOUNTS</code>, <code>AFTER_DISCOUNTS</code>.</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>The Amazon Web Services account IDs entitled to apply this credit.</p>
   * @public
   */
  shareableAccounts?: string[] | undefined;

  /**
   * <p>Whether the owning account has account-level credit sharing turned on.</p>
   * @public
   */
  accountHasCreditSharingEnabled?: boolean | undefined;

  /**
   * <p>The display configuration for the credit in the Amazon Web Services Billing console.</p>
   * @public
   */
  creditConsoleVisibility?: string | undefined;

  /**
   * <p>The sharing configuration for the credit. Valid values: <code>DEFAULT</code>, <code>DISABLED</code>, <code>CUSTOM</code>, <code>COST_CATEGORY_RULE</code>.</p>
   * @public
   */
  creditSharingType?: CreditSharingType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Cost Category controlling the credit's sharing scope. Present only when <code>creditSharingType</code> is <code>COST_CATEGORY_RULE</code>.</p>
   * @public
   */
  costCategoryArn?: string | undefined;

  /**
   * <p>The rule name within the Cost Category. Present only when <code>creditSharingType</code> is <code>COST_CATEGORY_RULE</code>.</p>
   * @public
   */
  ruleName?: string | undefined;

  /**
   * <p>Whether the credit participates in billing runs. Valid values: <code>ENABLED</code>, <code>DISABLED</code>.</p>
   * @public
   */
  creditStatus?: CreditStatus | undefined;

  /**
   * <p>Restricts which purchase types this credit applies to. When <code>null</code> or omitted, the credit applies to all purchase types.</p>
   * @public
   */
  purchaseTypeApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface GetCreditsResponse {
  /**
   * <p>The list of credits matching the request. Returns an empty list when no credits exist.</p>
   * @public
   */
  credits?: CreditData[] | undefined;
}

/**
 * <p>The request structure for GetEnterpriseSupportChargeSummary.</p>
 * @public
 */
export interface GetEnterpriseSupportChargeSummaryRequest {
  /**
   * <p>The billing month in YYYY-MM format. This must be a month in the past.</p>
   * @public
   */
  billingMonth: string | undefined;
}

/**
 * <p>A tier within an Enterprise Support pricing plan.</p>
 * @public
 */
export interface PricingPlanTier {
  /**
   * <p>The minimum spend threshold for this tier.</p>
   * @public
   */
  tierMinimum: string | undefined;

  /**
   * <p>The maximum spend threshold for this tier.</p>
   * @public
   */
  tierMaximum?: string | undefined;

  /**
   * <p>The base charge for this tier.</p>
   * @public
   */
  baseCharge: string | undefined;

  /**
   * <p>The additional percentage applied to aggregate charges in this tier.</p>
   * @public
   */
  additionalPercentageOfAggregateCharges: string | undefined;

  /**
   * <p>The adjustment applied to aggregate charges.</p>
   * @public
   */
  aggregateChargesAdjustment: string | undefined;

  /**
   * <p>Whether the tier charges are calculated incrementally.</p>
   * @public
   */
  incremental: boolean | undefined;

  /**
   * <p>The increment amount for incremental tier calculations.</p>
   * @public
   */
  increment?: string | undefined;

  /**
   * <p>The charge per increment.</p>
   * @public
   */
  incrementCharge?: string | undefined;
}

/**
 * <p>A pricing plan for Enterprise Support billing.</p>
 * @public
 */
export interface PricingPlan {
  /**
   * <p>The unique identifier for the pricing plan.</p>
   * @public
   */
  pricingPlanId?: string | undefined;

  /**
   * <p>The name of the pricing plan.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the pricing plan.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The start date of the pricing plan.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The end date of the pricing plan.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The discount percentage applied by this pricing plan.</p>
   * @public
   */
  planDiscountPercent?: string | undefined;

  /**
   * <p>Whether the discount applies to the minimum Support charge.</p>
   * @public
   */
  discountAppliesToMinimumCharge?: boolean | undefined;

  /**
   * <p>The minimum Support charge amount for this pricing plan.</p>
   * @public
   */
  minimumCharge?: string | undefined;

  /**
   * <p>Whether the pricing plan uses tiered pricing.</p>
   * @public
   */
  tiered?: string | undefined;

  /**
   * <p>The pricing tiers within this plan.</p>
   * @public
   */
  tiers: PricingPlanTier[] | undefined;
}

/**
 * <p>The response structure for GetEnterpriseSupportChargeSummary.</p>
 * @public
 */
export interface GetEnterpriseSupportChargeSummaryResponse {
  /**
   * <p>The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile.</p>
   * @public
   */
  payerAccountId: string | undefined;

  /**
   * <p>The billing month in YYYY-MM format. This must be a month in the past.</p>
   * @public
   */
  billingMonth: string | undefined;

  /**
   * <p>The start date of the billing period.</p>
   * @public
   */
  billingPeriodStartDate: Date | undefined;

  /**
   * <p>The end date of the billing period.</p>
   * @public
   */
  billingPeriodEndDate: Date | undefined;

  /**
   * <p>When true, the Support charge amount is estimated. When false, the Support charge amount is finalized.</p>
   * @public
   */
  isEstimated: boolean | undefined;

  /**
   * <p>The date the bill was generated.</p>
   * @public
   */
  billDate: Date | undefined;

  /**
   * <p>The Support charge amount for the account.</p>
   * @public
   */
  supportCharge: string | undefined;

  /**
   * <p>The total Support charge amount for all accounts in the Support profile.</p>
   * @public
   */
  totalSupportCharge: string | undefined;

  /**
   * <p>The support discount amount.</p>
   * @public
   */
  supportDiscount: string | undefined;

  /**
   * <p>The total Support-eligible Spend from all accounts in the Support profile. This includes eligible spend from usage of Amazon Web Services, Reserved Instances, and Savings Plans.</p>
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * <p>The total Support-eligible spend from usage of Amazon Web Services from all accounts in the Support profile.</p>
   * @public
   */
  totalSupportEligibleUsageSpend: string | undefined;

  /**
   * <p>The total Support-eligible Reserved Instance spend from all accounts in the Support profile.</p>
   * @public
   */
  totalSupportEligibleReservedInstanceSpend: string | undefined;

  /**
   * <p>The total Support-eligible Savings Plan spend from all accounts in the Support profile.</p>
   * @public
   */
  totalSupportEligibleSavingsPlanSpend: string | undefined;

  /**
   * <p>The percentage applied to the total Support-eligible spend to calculate the total Support charge across all accounts in the Support profile.</p>
   * @public
   */
  supportChargePercentage: string | undefined;

  /**
   * <p>The effective pricing plan used for the support charge calculation.</p>
   * @public
   */
  supportEffectivePricingPlan: PricingPlan | undefined;
}

/**
 * <p>The request structure for GetEnterpriseSupportContractDetails.</p>
 * @public
 */
export interface GetEnterpriseSupportContractDetailsRequest {
  /**
   * <p>The billing month in YYYY-MM format. This must be a month in the past.</p>
   * @public
   */
  billingMonth: string | undefined;
}

/**
 * <p>An account that is charged all or a portion of the total Support charge and the percentage of the charge allocated to it.</p>
 * @public
 */
export interface ChargeAccount {
  /**
   * <p>The account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The percentage of the total Support charge allocated to this account. This is 0.0 when supportAllocationMethod = Proportional.</p>
   * @public
   */
  chargePercentage: string | undefined;
}

/**
 * <p>An account that is covered by the Enterprise Support contract.</p>
 * @public
 */
export interface ContractAccount {
  /**
   * <p>The account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>When true, Support charges are calculated on charges before private discounts. When false, they are calculated after private discounts.</p>
   * @public
   */
  isGdn: boolean | undefined;
}

/**
 * <p>The response structure for GetEnterpriseSupportContractDetails.</p>
 * @public
 */
export interface GetEnterpriseSupportContractDetailsResponse {
  /**
   * <p>When true, the Enterprise Support contract is active. When false, the Enterprise Support Contract is inactive.</p>
   * @public
   */
  isContractActive?: boolean | undefined;

  /**
   * <p>The method used to distribute the total Support charge amount across each account in the Support profile. Valid values: Proportional, Fixed_Percentage. Proportional means support charges are distributed to each account in proportion to its eligible Spend. Fixed_Percentage means support charges are distributed across accounts according to pre-configured percentages from the contract.</p>
   * @public
   */
  supportAllocationMethod: string | undefined;

  /**
   * <p>When supportReservedInstanceTreatmentMethod = AmortizedCustom, only amortized fees for Reserved Instances purchased on or after this date are included in the calculation. This field is Null for all other treatment methods.</p>
   * @public
   */
  supportReservedInstanceAmortizationStartDate?: Date | undefined;

  /**
   * <p>The method used to include Reserved Instance (RI) fees in the Enterprise Support charge calculation. Valid values: None (RI fees excluded from Support-eligible spend), Upfront (full upfront RI fees included in month of purchase), Amortized (RI fees spread over commitment term for RIs purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for RIs purchased on or after a specified custom start date), AmortizedAll (RI fees amortized for all active RIs including those purchased before Support subscription started).</p>
   * @public
   */
  supportReservedInstanceTreatmentMethod?: string | undefined;

  /**
   * <p>This is applicable when supportSavingsPlansTreatmentMethod = Amortized and is Null for all other methods. It shows the start date from which Savings Plan fees are included in Support Eligible Spend.</p>
   * @public
   */
  supportSavingsPlansAmortizationStartDate?: Date | undefined;

  /**
   * <p>The method used to include Savings Plans fees in Enterprise Support charge calculations. Valid values: None (Savings Plan fees excluded from Support-eligible spend), Upfront (full upfront Savings Plan fees included in month of purchase), Amortized (Savings Plan fees spread over commitment term for Savings Plans purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for Savings Plans purchased on or after a specified custom start date), AmortizedAll (Savings Plan fees amortized for all active Savings Plans including those purchased before Support subscription started).</p>
   * @public
   */
  supportSavingsPlansTreatmentMethod?: string | undefined;

  /**
   * <p>The start date for accounts subscribed or unsubscribed to Support billing during the billing month.</p>
   * @public
   */
  supportProrateStartDate?: Date | undefined;

  /**
   * <p>The list of accounts covered by the Enterprise Support contract.</p>
   * @public
   */
  contractPayerAccountIds: ContractAccount[] | undefined;

  /**
   * <p>The list of payer accounts and their charge allocation percentages.</p>
   * @public
   */
  chargedPayerAccountIds: ChargeAccount[] | undefined;

  /**
   * <p>Any Additional support charges applied to the contract.</p>
   * @public
   */
  additionalSupportCharge?: AdditionalCharge[] | undefined;

  /**
   * <p>Any Additional support-eligible usage spend charges.</p>
   * @public
   */
  additionalSupportEligibleUsageSpend?: AdditionalCharge[] | undefined;

  /**
   * <p>The pricing plans associated with this Enterprise Support contract.</p>
   * @public
   */
  pricingPlans: PricingPlan[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The resource-based policy document attached to the resource in <code>JSON</code> format. </p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * <p> A structure that defines how to search for string values. You can specify a search option and the value to search for. </p>
 * @public
 */
export interface StringSearch {
  /**
   * <p> The type of search operation to perform on the string value. Determines how the search value is matched against the target field. </p>
   * @public
   */
  searchOption: SearchOption | undefined;

  /**
   * <p> The string value to use in the search operation. This value is compared against the target field using the specified search option. </p>
   * @public
   */
  searchValue: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsRequest {
  /**
   * <p> The time range for the billing views listed. <code>PRIMARY</code> billing view is always listed. <code>BILLING_GROUP</code> billing views are listed for time ranges when the associated billing group resource in Billing Conductor is active. The time range must be within one calendar month. </p>
   * @public
   */
  activeTimeRange?: ActiveTimeRange | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arns?: string[] | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewTypes?: BillingViewType[] | undefined;

  /**
   * <p> Filters the list of billing views by name. You can specify search criteria to match billing view names based on the search option provided. </p>
   * @public
   */
  names?: StringSearch[] | undefined;

  /**
   * <p> The list of owners of the billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> Filters the results to include only billing views that use the specified account as a source. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p>The maximum number of billing views to retrieve. Default is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that is used on subsequent calls to list billing views.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A representation of a billing view.</p>
 * @public
 */
export interface BillingViewListElement {
  /**
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> A list of names of the Billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The list of owners of the Billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * <p> The current health status of the billing view. </p>
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsResponse {
  /**
   * <p>A list of <code>BillingViewListElement</code> retrieved.</p>
   * @public
   */
  billingViews: BillingViewListElement[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request structure for ListEnterpriseSupportLinkedAccountCharges.</p>
 * @public
 */
export interface ListEnterpriseSupportLinkedAccountChargesRequest {
  /**
   * <p>The billing month in YYYY-MM format. This must be a month in the past.</p>
   * @public
   */
  billingMonth: string | undefined;

  /**
   * <p>An optional linked account ID to filter results to a specific account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A time period for Enterprise Support billing.</p>
 * @public
 */
export interface EnterpriseSupportTimePeriod {
  /**
   * <p>The begin date of the time period.</p>
   * @public
   */
  beginDate: Date | undefined;

  /**
   * <p>The end date of the time period.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>Service-level usage details by account.</p>
 * @public
 */
export interface ServiceLevelAccountUsage {
  /**
   * <p>The service code for which to return Support-eligible spend data.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The total support-eligible spend for the service.</p>
   * @public
   */
  totalSupportEligibleSpend?: string | undefined;
}

/**
 * <p>Enterprise Support charges for a linked account.</p>
 * @public
 */
export interface LinkedAccountCharge {
  /**
   * <p>The linked account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile.</p>
   * @public
   */
  payerAccountId: string | undefined;

  /**
   * <p>The type of account.</p>
   * @public
   */
  accountType?: string | undefined;

  /**
   * <p>The number of billable seconds in the billing period based on when the account was subscribed to Enterprise Support.</p>
   * @public
   */
  billableSeconds: number | undefined;

  /**
   * <p>The total number of seconds in the billing period.</p>
   * @public
   */
  totalSeconds: number | undefined;

  /**
   * <p>The total support-eligible spend for this account.</p>
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * <p>The prorated total support-eligible spend based on when the account was subscribed to Enterprise Support.</p>
   * @public
   */
  proratedTotalSupportEligibleSpend: string | undefined;

  /**
   * <p>The time periods during which this account was linked.</p>
   * @public
   */
  linkedTimePeriods?: EnterpriseSupportTimePeriod[] | undefined;

  /**
   * <p>The subscription time periods for this account.</p>
   * @public
   */
  subscriptionTimePeriods?: EnterpriseSupportTimePeriod[] | undefined;

  /**
   * <p>The total support-eligible Reserved Instance spend for this account.</p>
   * @public
   */
  totalSupportEligibleReservedInstanceSpend?: string | undefined;

  /**
   * <p>The total support-eligible Savings Plan spend for this account.</p>
   * @public
   */
  totalSupportEligibleSavingsPlanSpend?: string | undefined;

  /**
   * <p>The support-eligible spend broken down by service.</p>
   * @public
   */
  supportEligibleSpendByService?: ServiceLevelAccountUsage[] | undefined;
}

/**
 * <p>The response structure for ListEnterpriseSupportLinkedAccountCharges.</p>
 * @public
 */
export interface ListEnterpriseSupportLinkedAccountChargesResponse {
  /**
   * <p>The list of Enterprise Support charges per linked account.</p>
   * @public
   */
  linkedAccount: LinkedAccountCharge[] | undefined;

  /**
   * <p>The pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The number of entries a paginated response contains. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewResponse {
  /**
   * <p>A list of billing views used as the data source for the custom billing view. </p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface RedeemCreditsRequest {
  /**
   * <p>The promotional credit code to redeem.</p>
   * @public
   */
  promoCode: string | undefined;
}

/**
 * @public
 */
export interface RedeemCreditsResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A single key/value entry used to update a billing preference.</p>
 * @public
 */
export interface BillingPreferenceForKey {
  /**
   * <p>The preference key. Format depends on the feature being updated.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The preference value. Valid values: <code>ENABLED</code> or <code>DISABLED</code>.</p>
   * @public
   */
  value: PreferenceValue | undefined;
}

/**
 * @public
 */
export interface UpdateBillingPreferencesRequest {
  /**
   * <p>The feature to update. Valid values: <code>BILLING_ALERTS</code>, <code>RI_SHARING</code>, <code>CREDIT_SHARING</code>, <code>CREDIT_LEVEL_SHARING</code>, <code>CREDIT_PREFERENCE_OPTIONS</code>. The history features (<code>RI_SHARING_HISTORY</code> and <code>CREDIT_SHARING_HISTORY</code>) are read-only and cannot be updated.</p>
   * @public
   */
  feature: BillingFeature | undefined;

  /**
   * <p>Key/value pairs to apply. All keys in a single request must be valid for the specified <code>feature</code> and must not be duplicated. For <code>CREDIT_PREFERENCE_OPTIONS</code>, all keys must reference the same <code>creditId</code>.</p>
   * @public
   */
  billingPreferencesPerKey: BillingPreferenceForKey[] | undefined;
}

/**
 * @public
 */
export interface UpdateBillingPreferencesResponse {}

/**
 * @public
 */
export interface UpdateBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The name of the billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code>, <code>Tags</code>, and <code>CostCategories</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface UpdateBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The time when the billing view was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;
}
