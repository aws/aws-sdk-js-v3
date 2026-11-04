// smithy-typescript generated code
import type {
  BatchCreateBillScenarioCommitmentModificationErrorCode,
  BatchCreateBillScenarioUsageModificationErrorCode,
  BatchCreateWorkloadEstimateUsageCode,
  BatchDeleteBillScenarioCommitmentModificationErrorCode,
  BatchDeleteBillScenarioUsageModificationErrorCode,
  BatchUpdateBillScenarioCommitmentModificationErrorCode,
  BatchUpdateBillScenarioUsageModificationErrorCode,
  BillEstimateStatus,
  BillScenarioStatus,
  CurrencyCode,
  GroupSharingPreferenceEnum,
  ListBillEstimateLineItemsFilterName,
  ListBillEstimatesFilterName,
  ListBillScenariosFilterName,
  ListUsageFilterName,
  ListWorkloadEstimatesFilterName,
  MatchOption,
  PurchaseAgreementType,
  RateType,
  WorkloadEstimateCostStatus,
  WorkloadEstimateRateType,
  WorkloadEstimateStatus,
  WorkloadEstimateUpdateUsageErrorCode,
} from "./enums";

/**
 * Represents an action to add a Reserved Instance to a bill scenario.
 *
 * @public
 */
export interface AddReservedInstanceAction {
  /**
   * The ID of the Reserved Instance offering to add. For more information, see [DescribeReservedInstancesOfferings](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html).
   *
   * @public
   */
  reservedInstancesOfferingId?: string | undefined;

  /**
   * The number of instances to add for this Reserved Instance offering.
   *
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * Represents an action to add a Savings Plan to a bill scenario.
 *
 * @public
 */
export interface AddSavingsPlanAction {
  /**
   * The ID of the Savings Plan offering to add. For more information, see [DescribeSavingsPlansOfferings](https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferings.html).
   *
   * @public
   */
  savingsPlanOfferingId?: string | undefined;

  /**
   * The hourly commitment, in the same currency of the `savingsPlanOfferingId`. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.
   *
   * @public
   */
  commitment?: number | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateCommitmentsRequest {
  /**
   * The unique identifier of the bill estimate to list commitments for.
   *
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a monetary amount with associated currency.
 *
 * @public
 */
export interface CostAmount {
  /**
   * The numeric value of the cost.
   *
   * @public
   */
  amount?: number | undefined;

  /**
   * The currency code for the cost amount.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;
}

/**
 * Provides a summary of commitment-related information for a bill estimate.
 *
 * @public
 */
export interface BillEstimateCommitmentSummary {
  /**
   * The unique identifier of the commitment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The type of purchase agreement (e.g., Reserved Instance, Savings Plan).
   *
   * @public
   */
  purchaseAgreementType?: PurchaseAgreementType | undefined;

  /**
   * The identifier of the specific offering associated with this commitment.
   *
   * @public
   */
  offeringId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this commitment.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The Amazon Web Services region associated with this commitment.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The length of the commitment term.
   *
   * @public
   */
  termLength?: string | undefined;

  /**
   * The payment option chosen for this commitment (e.g., All Upfront, Partial Upfront, No Upfront).
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The upfront payment amount for this commitment, if applicable.
   *
   * @public
   */
  upfrontPayment?: CostAmount | undefined;

  /**
   * The monthly payment amount for this commitment, if applicable.
   *
   * @public
   */
  monthlyPayment?: CostAmount | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateCommitmentsResponse {
  /**
   * The list of commitments associated with the bill estimate.
   *
   * @public
   */
  items?: BillEstimateCommitmentSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a field that failed validation in a request.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The error message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Represents the difference between historical and estimated costs.
 *
 * @public
 */
export interface CostDifference {
  /**
   * The historical cost amount.
   *
   * @public
   */
  historicalCost?: CostAmount | undefined;

  /**
   * The estimated cost amount.
   *
   * @public
   */
  estimatedCost?: CostAmount | undefined;
}

/**
 * Provides a summary of cost-related information for a bill estimate.
 *
 * @public
 */
export interface BillEstimateCostSummary {
  /**
   * The total difference in cost between the estimated and historical costs.
   *
   * @public
   */
  totalCostDifference?: CostDifference | undefined;

  /**
   * A breakdown of cost differences by Amazon Web Services service.
   *
   * @public
   */
  serviceCostDifferences?: Record<string, CostDifference> | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputCommitmentModificationsRequest {
  /**
   * The unique identifier of the bill estimate to list input commitment modifications for.
   *
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents an action to remove a Reserved Instance from a bill scenario.
 *
 * This is the ID of an existing Reserved Instance in your account.
 *
 * @public
 */
export interface NegateReservedInstanceAction {
  /**
   * The ID of the Reserved Instance to remove.
   *
   * @public
   */
  reservedInstancesId?: string | undefined;
}

/**
 * Represents an action to remove a Savings Plan from a bill scenario.
 *
 * This is the ID of an existing Savings Plan in your account.
 *
 * @public
 */
export interface NegateSavingsPlanAction {
  /**
   * The ID of the Savings Plan to remove.
   *
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * Represents an action to modify commitments in a bill scenario.
 *
 * @public
 */
export type BillScenarioCommitmentModificationAction =
  | BillScenarioCommitmentModificationAction.AddReservedInstanceActionMember
  | BillScenarioCommitmentModificationAction.AddSavingsPlanActionMember
  | BillScenarioCommitmentModificationAction.NegateReservedInstanceActionMember
  | BillScenarioCommitmentModificationAction.NegateSavingsPlanActionMember
  | BillScenarioCommitmentModificationAction.$UnknownMember;

/**
 * @public
 */
export namespace BillScenarioCommitmentModificationAction {
  /**
   * Action to add a Reserved Instance to the scenario.
   *
   * @public
   */
  export interface AddReservedInstanceActionMember {
    addReservedInstanceAction: AddReservedInstanceAction;
    addSavingsPlanAction?: never;
    negateReservedInstanceAction?: never;
    negateSavingsPlanAction?: never;
    $unknown?: never;
  }

  /**
   * Action to add a Savings Plan to the scenario.
   *
   * @public
   */
  export interface AddSavingsPlanActionMember {
    addReservedInstanceAction?: never;
    addSavingsPlanAction: AddSavingsPlanAction;
    negateReservedInstanceAction?: never;
    negateSavingsPlanAction?: never;
    $unknown?: never;
  }

  /**
   * Action to remove a Reserved Instance from the scenario.
   *
   * @public
   */
  export interface NegateReservedInstanceActionMember {
    addReservedInstanceAction?: never;
    addSavingsPlanAction?: never;
    negateReservedInstanceAction: NegateReservedInstanceAction;
    negateSavingsPlanAction?: never;
    $unknown?: never;
  }

  /**
   * Action to remove a Savings Plan from the scenario.
   *
   * @public
   */
  export interface NegateSavingsPlanActionMember {
    addReservedInstanceAction?: never;
    addSavingsPlanAction?: never;
    negateReservedInstanceAction?: never;
    negateSavingsPlanAction: NegateSavingsPlanAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    addReservedInstanceAction?: never;
    addSavingsPlanAction?: never;
    negateReservedInstanceAction?: never;
    negateSavingsPlanAction?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    addReservedInstanceAction: (value: AddReservedInstanceAction) => T;
    addSavingsPlanAction: (value: AddSavingsPlanAction) => T;
    negateReservedInstanceAction: (value: NegateReservedInstanceAction) => T;
    negateSavingsPlanAction: (value: NegateSavingsPlanAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summarizes an input commitment modification for a bill estimate.
 *
 * @public
 */
export interface BillEstimateInputCommitmentModificationSummary {
  /**
   * The unique identifier of the commitment modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group identifier for the commitment modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this commitment modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The specific commitment action taken in this modification.
   *
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputCommitmentModificationsResponse {
  /**
   * The list of input commitment modifications associated with the bill estimate.
   *
   * @public
   */
  items?: BillEstimateInputCommitmentModificationSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a filter for listing usage data.
 *
 * @public
 */
export interface ListUsageFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  name: ListUsageFilterName | undefined;

  /**
   * The values to filter by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match option for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputUsageModificationsRequest {
  /**
   * The unique identifier of the bill estimate to list input usage modifications for.
   *
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * Filters to apply to the list of input usage modifications.
   *
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a time interval for a bill or estimate.
 *
 * @public
 */
export interface BillInterval {
  /**
   * The start date and time of the interval.
   *
   * @public
   */
  start?: Date | undefined;

  /**
   * The end date and time of the interval.
   *
   * @public
   */
  end?: Date | undefined;
}

/**
 * Represents a filter used within an expression.
 *
 * @public
 */
export interface ExpressionFilter {
  /**
   * The key or attribute to filter on.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The match options for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOptions?: string[] | undefined;

  /**
   * The values to match against.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Represents a usage quantity with associated unit and time period.
 *
 * @public
 */
export interface UsageQuantity {
  /**
   * The start hour of the usage period.
   *
   * @public
   */
  startHour?: Date | undefined;

  /**
   * The unit of measurement for the usage quantity.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The numeric value of the usage quantity.
   *
   * @public
   */
  amount?: number | undefined;
}

/**
 * Represents a filter for listing bill estimate line items.
 *
 * @public
 */
export interface ListBillEstimateLineItemsFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  name: ListBillEstimateLineItemsFilterName | undefined;

  /**
   * The values to filter by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match option for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateLineItemsRequest {
  /**
   * The unique identifier of the bill estimate to list line items for.
   *
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * Filters to apply to the list of line items.
   *
   * @public
   */
  filters?: ListBillEstimateLineItemsFilter[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents the result of a usage quantity calculation.
 *
 * @public
 */
export interface UsageQuantityResult {
  /**
   * The numeric value of the usage quantity result.
   *
   * @public
   */
  amount?: number | undefined;

  /**
   * The unit of measurement for the usage quantity result.
   *
   * @public
   */
  unit?: string | undefined;
}

/**
 * Provides a summary of a line item in a bill estimate.
 *
 * @public
 */
export interface BillEstimateLineItemSummary {
  /**
   * The Amazon Web Services service code associated with this line item.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage for this line item.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this line item.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this line item.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The availability zone associated with this line item, if applicable.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The unique identifier of this line item.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The line item identifier from the original bill.
   *
   * @public
   */
  lineItemId?: string | undefined;

  /**
   * The type of this line item (e.g., Usage, Tax, Credit).
   *
   * @public
   */
  lineItemType?: string | undefined;

  /**
   * The Amazon Web Services account ID of the payer for this line item.
   *
   * @public
   */
  payerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the usage for this line item.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The estimated usage quantity for this line item.
   *
   * @public
   */
  estimatedUsageQuantity?: UsageQuantityResult | undefined;

  /**
   * The estimated cost for this line item.
   *
   * @public
   */
  estimatedCost?: CostAmount | undefined;

  /**
   * The historical usage quantity for this line item.
   *
   * @public
   */
  historicalUsageQuantity?: UsageQuantityResult | undefined;

  /**
   * The historical cost for this line item.
   *
   * @public
   */
  historicalCost?: CostAmount | undefined;

  /**
   * The Amazon Resource Names (ARNs) of any Savings Plans applied to this line item.
   *
   * @public
   */
  savingsPlanArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateLineItemsResponse {
  /**
   * The list of line items associated with the bill estimate.
   *
   * @public
   */
  items?: BillEstimateLineItemSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillEstimateRequest {
  /**
   * The ID of the Bill Scenario for which you want to create a Bill estimate.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * The name of the Bill estimate that will be created. Names must be unique for an account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional list of tags to associate with the specified BillEstimate. You can use resource tags to control access to your BillEstimate using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *
   * - Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services.
   * - The maximum length of a key is 128 characters.
   * - The maximum length of a value is 256 characters.
   * - Keys and values can only contain alphanumeric characters, spaces, and any of the following: `_.:/=+@-`.
   * - Keys and values are case sensitive.
   * - Keys and values are trimmed for any leading or trailing whitespaces.
   * - Don't use `aws:` as a prefix for your keys. This prefix is reserved for Amazon Web Services.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBillEstimateResponse {
  /**
   * The unique identifier of your newly created Bill estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of your newly created Bill estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of your newly created Bill estimate. Bill estimate creation can take anywhere between 8 to 12 hours. The status will allow you to identify when the Bill estimate is complete or has failed.
   *
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * This attribute provides the reason if a Bill estimate result generation fails.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The bill month start and end timestamp that was used to create the Bill estimate. This is set to the last complete anniversary bill month start and end timestamp.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * Returns summary-level cost information once a Bill estimate is successfully generated. This summary includes: 1) the total cost difference, showing the pre-tax cost change for the consolidated billing family between the completed anniversary bill and the estimated bill, and 2) total cost differences per service, detailing the pre-tax cost of each service, comparing the completed anniversary bill to the estimated bill on a per-service basis.
   *
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * The timestamp of when the Bill estimate create process was started (not when it successfully completed or failed).
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the Bill estimate will expire. A Bill estimate becomes inaccessible after expiration.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;

  /**
   * Timestamp of the effective date of the cost category used in the group sharing settings.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceEffectiveDate?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBillEstimateRequest {
  /**
   * The unique identifier of the bill estimate to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillEstimateResponse {}

/**
 * @public
 */
export interface GetBillEstimateRequest {
  /**
   * The unique identifier of the bill estimate to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBillEstimateResponse {
  /**
   * The unique identifier of the retrieved bill estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the retrieved bill estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the bill estimate.
   *
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * An error message if the bill estimate retrieval failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The time period covered by the bill estimate.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * A summary of the estimated costs.
   *
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * The timestamp when the bill estimate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the bill estimate will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;

  /**
   * Timestamp of the effective date of the cost category used in the group sharing settings.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceEffectiveDate?: Date | undefined;
}

/**
 * Represents a time-based filter.
 *
 * @public
 */
export interface FilterTimestamp {
  /**
   * Include results after this timestamp.
   *
   * @public
   */
  afterTimestamp?: Date | undefined;

  /**
   * Include results before this timestamp.
   *
   * @public
   */
  beforeTimestamp?: Date | undefined;
}

/**
 * Represents a filter for listing bill estimates.
 *
 * @public
 */
export interface ListBillEstimatesFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  name: ListBillEstimatesFilterName | undefined;

  /**
   * The values to filter by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match option for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimatesRequest {
  /**
   * Filters to apply to the list of bill estimates.
   *
   * @public
   */
  filters?: ListBillEstimatesFilter[] | undefined;

  /**
   * Filter bill estimates based on the creation date.
   *
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * Filter bill estimates based on the expiration date.
   *
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of a bill estimate.
 *
 * @public
 */
export interface BillEstimateSummary {
  /**
   * The unique identifier of the bill estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the bill estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the bill estimate.
   *
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * The time period covered by the bill estimate.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * The timestamp when the bill estimate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the bill estimate will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBillEstimatesResponse {
  /**
   * The list of bill estimates for the account.
   *
   * @public
   */
  items?: BillEstimateSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillEstimateRequest {
  /**
   * The unique identifier of the bill estimate to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The new name for the bill estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The new expiration date for the bill estimate.
   *
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBillEstimateResponse {
  /**
   * The unique identifier of the updated bill estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated name of the bill estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the updated bill estimate.
   *
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * An error message if the bill estimate update failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The time period covered by the updated bill estimate.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * A summary of the updated estimated costs.
   *
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * The timestamp when the bill estimate was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The updated expiration timestamp for the bill estimate.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;

  /**
   * Timestamp of the effective date of the cost category used in the group sharing settings.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceEffectiveDate?: Date | undefined;
}

/**
 * Represents an entry object in the batch operation to create bill scenario commitment modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationEntry {
  /**
   * A unique identifier for this entry in the batch operation. This can be any valid string. This key is useful to identify errors associated with any commitment entry as any error is returned with this key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * An optional group identifier for the commitment modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID to which this commitment will be applied to.
   *
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * The specific commitment action to be taken (e.g., adding a Reserved Instance or Savings Plan).
   *
   * @public
   */
  commitmentAction: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to create the modeled commitment.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of commitments that you want to model in the Bill Scenario.
   *
   * @public
   */
  commitmentModifications: BatchCreateBillScenarioCommitmentModificationEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents an error that occurred during a batch create operation for bill scenario commitment modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationError {
  /**
   * The key of the entry that caused the error.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * A descriptive message for the error that occurred.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code associated with the failed operation.
   *
   * @public
   */
  errorCode?: BatchCreateBillScenarioCommitmentModificationErrorCode | undefined;
}

/**
 * Represents a successfully created item in a batch operation for bill scenario commitment modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationItem {
  /**
   * The key of the successfully created entry. This can be any valid string. This key is useful to identify errors associated with any commitment entry as any error is returned with this key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The unique identifier assigned to the created commitment modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group identifier for the created commitment modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the created commitment modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The specific commitment action that was taken.
   *
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationResponse {
  /**
   * Returns the list of successful commitment line items that were created for the Bill Scenario.
   *
   * @public
   */
  items?: BatchCreateBillScenarioCommitmentModificationItem[] | undefined;

  /**
   * Returns the list of errors reason and the commitment item keys that cannot be created in the Bill Scenario.
   *
   * @public
   */
  errors?: BatchCreateBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to delete the modeled commitment.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of commitments that you want to delete from the Bill Scenario.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Represents an error that occurred when deleting a commitment in a Bill Scenario.
 *
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: BatchDeleteBillScenarioCommitmentModificationErrorCode | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationResponse {
  /**
   * Returns the list of errors reason and the commitment item keys that cannot be deleted from the Bill Scenario.
   *
   * @public
   */
  errors?: BatchDeleteBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * Represents an entry in a batch operation to update bill scenario commitment modifications.
 *
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationEntry {
  /**
   * The unique identifier of the commitment modification to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated group identifier for the commitment modification.
   *
   * @public
   */
  group?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to modify the commitment group of a modeled commitment.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of commitments that you want to update in a Bill Scenario.
   *
   * @public
   */
  commitmentModifications: BatchUpdateBillScenarioCommitmentModificationEntry[] | undefined;
}

/**
 * Represents an error that occurred when updating a commitment in a Bill Scenario.
 *
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: BatchUpdateBillScenarioCommitmentModificationErrorCode | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Represents a commitment modification item in a bill scenario.
 *
 * @public
 */
export interface BillScenarioCommitmentModificationItem {
  /**
   * The unique identifier of the commitment modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this commitment modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The group identifier for the commitment modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The specific commitment action taken in this modification.
   *
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationResponse {
  /**
   * Returns the list of successful commitment line items that were updated for a Bill Scenario.
   *
   * @public
   */
  items?: BillScenarioCommitmentModificationItem[] | undefined;

  /**
   * Returns the list of error reasons and commitment line item IDs that could not be updated for the Bill Scenario.
   *
   * @public
   */
  errors?: BatchUpdateBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioCommitmentModificationsRequest {
  /**
   * The unique identifier of the bill scenario to list commitment modifications for.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioCommitmentModificationsResponse {
  /**
   * The list of commitment modifications associated with the bill scenario.
   *
   * @public
   */
  items?: BillScenarioCommitmentModificationItem[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a usage amount for a specific time period.
 *
 * @public
 */
export interface UsageAmount {
  /**
   * The start hour of the usage period.
   *
   * @public
   */
  startHour: Date | undefined;

  /**
   * The usage amount for the period.
   *
   * @public
   */
  amount: number | undefined;
}

/**
 * Represents an error that occurred during a batch create operation for bill scenario usage modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationError {
  /**
   * The key of the entry that caused the error.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * A descriptive message for the error that occurred.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code associated with the failed operation.
   *
   * @public
   */
  errorCode?: BatchCreateBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to delete the modeled usage.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of usage that you want to delete from the Bill Scenario.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Represents an error that occurred when deleting usage in a Bill Scenario.
 *
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: BatchDeleteBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationResponse {
  /**
   * Returns the list of errors reason and the usage item keys that cannot be deleted from the Bill Scenario.
   *
   * @public
   */
  errors?: BatchDeleteBillScenarioUsageModificationError[] | undefined;
}

/**
 * Represents an entry in a batch operation to update bill scenario usage modifications.
 *
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationEntry {
  /**
   * The unique identifier of the usage modification to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated group identifier for the usage modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The updated usage amounts for the modification.
   *
   * @public
   */
  amounts?: UsageAmount[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to modify the usage lines.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of usage lines that you want to update in a Bill Scenario identified by the usage ID.
   *
   * @public
   */
  usageModifications: BatchUpdateBillScenarioUsageModificationEntry[] | undefined;
}

/**
 * Represents an error that occurred when updating usage in a Bill Scenario.
 *
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: BatchUpdateBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioUsageModificationsRequest {
  /**
   * The unique identifier of the bill scenario to list usage modifications for.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * Filters to apply to the list of usage modifications.
   *
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface CreateBillScenarioRequest {
  /**
   * A descriptive name for the bill scenario.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags to apply to the bill scenario.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillScenarioResponse {
  /**
   * The unique identifier for the created bill scenario.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the created bill scenario.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time period covered by the bill scenario.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * The current status of the bill scenario.
   *
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * The timestamp when the bill scenario was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the bill scenario will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * An error message if the bill scenario creation failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillScenarioRequest {
  /**
   * The unique identifier of the bill scenario to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillScenarioResponse {}

/**
 * @public
 */
export interface GetBillScenarioRequest {
  /**
   * The unique identifier of the bill scenario to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBillScenarioResponse {
  /**
   * The unique identifier of the retrieved bill scenario.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the retrieved bill scenario.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time period covered by the bill scenario.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * The current status of the bill scenario.
   *
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * The timestamp when the bill scenario was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the bill scenario will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * An error message if the bill scenario retrieval failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * Represents a filter for listing bill scenarios.
 *
 * @public
 */
export interface ListBillScenariosFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  name: ListBillScenariosFilterName | undefined;

  /**
   * The values to filter by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match option for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillScenariosRequest {
  /**
   * Filters to apply to the list of bill scenarios.
   *
   * @public
   */
  filters?: ListBillScenariosFilter[] | undefined;

  /**
   * Filter bill scenarios based on the creation date.
   *
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * Filter bill scenarios based on the expiration date.
   *
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of a bill scenario.
 *
 * @public
 */
export interface BillScenarioSummary {
  /**
   * The unique identifier of the bill scenario.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the bill scenario.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time period covered by the bill scenario.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * The current status of the bill scenario.
   *
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * The timestamp when the bill scenario was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the bill scenario will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * An error message if the bill scenario creation or processing failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListBillScenariosResponse {
  /**
   * The list of bill scenarios for the account.
   *
   * @public
   */
  items?: BillScenarioSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillScenarioRequest {
  /**
   * The unique identifier of the bill scenario to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The new name for the bill scenario.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The new expiration date for the bill scenario.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillScenarioResponse {
  /**
   * The unique identifier of the updated bill scenario.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated name of the bill scenario.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time period covered by the updated bill scenario.
   *
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * The current status of the updated bill scenario.
   *
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * The timestamp when the bill scenario was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The updated expiration timestamp for the bill scenario.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * An error message if the bill scenario update failed.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The setting for the reserved instance and savings plan group sharing used in this estimate.
   *
   * @public
   */
  groupSharingPreference?: GroupSharingPreferenceEnum | undefined;

  /**
   * The arn of the cost category used in the reserved and prioritized group sharing.
   *
   * @public
   */
  costCategoryGroupSharingPreferenceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetPreferencesRequest {}

/**
 * @public
 */
export interface GetPreferencesResponse {
  /**
   * The preferred rate types for the management account.
   *
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The preferred rate types for member accounts.
   *
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The preferred rate types for a standalone account.
   *
   * @public
   */
  standaloneAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags associated with the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdatePreferencesRequest {
  /**
   * The updated preferred rate types for the management account.
   *
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The updated preferred rate types for member accounts.
   *
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The updated preferred rate types for a standalone account.
   *
   * @public
   */
  standaloneAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * The updated preferred rate types for the management account.
   *
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The updated preferred rate types for member accounts.
   *
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * The updated preferred rate types for a standalone account.
   *
   * @public
   */
  standaloneAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkloadEstimateRequest {
  /**
   * A descriptive name for the workload estimate.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The type of pricing rates to use for the estimate.
   *
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * The tags to apply to the workload estimate.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Mixin for common fields returned by CRUD APIs
 * @public
 */
export interface CreateWorkloadEstimateResponse {
  /**
   * The unique identifier for the created workload estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the created workload estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The timestamp when the workload estimate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the workload estimate will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The type of pricing rates used for the estimate.
   *
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * The timestamp of the pricing rates used for the estimate.
   *
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * The current status of the workload estimate.
   *
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * The total estimated cost for the workload.
   *
   * @public
   */
  totalCost?: number | undefined;

  /**
   * The currency of the estimated cost.
   *
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * An error message if the workload estimate creation failed.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadEstimateRequest {
  /**
   * The unique identifier of the workload estimate to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadEstimateResponse {}

/**
 * @public
 */
export interface GetWorkloadEstimateRequest {
  /**
   * The unique identifier of the workload estimate to retrieve.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * Mixin for common fields returned by CRUD APIs
 * @public
 */
export interface GetWorkloadEstimateResponse {
  /**
   * The unique identifier of the retrieved workload estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the retrieved workload estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The timestamp when the workload estimate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the workload estimate will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The type of pricing rates used for the estimate.
   *
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * The timestamp of the pricing rates used for the estimate.
   *
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * The current status of the workload estimate.
   *
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * The total estimated cost for the workload.
   *
   * @public
   */
  totalCost?: number | undefined;

  /**
   * The currency of the estimated cost.
   *
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * An error message if the workload estimate retrieval failed.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * Represents a filter for listing workload estimates.
 *
 * @public
 */
export interface ListWorkloadEstimatesFilter {
  /**
   * The name of the filter attribute.
   *
   * @public
   */
  name: ListWorkloadEstimatesFilterName | undefined;

  /**
   * The values to filter by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The match option for the filter (e.g., equals, contains).
   *
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimatesRequest {
  /**
   * Filter workload estimates based on the creation date.
   *
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * Filter workload estimates based on the expiration date.
   *
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * Filters to apply to the list of workload estimates.
   *
   * @public
   */
  filters?: ListWorkloadEstimatesFilter[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of a workload estimate.
 *
 * @public
 */
export interface WorkloadEstimateSummary {
  /**
   * The unique identifier of the workload estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the workload estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The timestamp when the workload estimate was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the workload estimate will expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The type of pricing rates used for the estimate.
   *
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * The timestamp of the pricing rates used for the estimate.
   *
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * The current status of the workload estimate.
   *
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * The total estimated cost for the workload.
   *
   * @public
   */
  totalCost?: number | undefined;

  /**
   * The currency of the estimated cost.
   *
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * An error message if the workload estimate creation or processing failed.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimatesResponse {
  /**
   * The list of workload estimates for the account.
   *
   * @public
   */
  items?: WorkloadEstimateSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadEstimateRequest {
  /**
   * The unique identifier of the workload estimate to update.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The new name for the workload estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The new expiration date for the workload estimate.
   *
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * Mixin for common fields returned by CRUD APIs
 * @public
 */
export interface UpdateWorkloadEstimateResponse {
  /**
   * The unique identifier of the updated workload estimate.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated name of the workload estimate.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The timestamp when the workload estimate was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The updated expiration timestamp for the workload estimate.
   *
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * The type of pricing rates used for the updated estimate.
   *
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * The timestamp of the pricing rates used for the updated estimate.
   *
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * The current status of the updated workload estimate.
   *
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * The updated total estimated cost for the workload.
   *
   * @public
   */
  totalCost?: number | undefined;

  /**
   * The currency of the updated estimated cost.
   *
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * An error message if the workload estimate update failed.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * Represents an error that occurred during a batch create operation for workload estimate usage.
 *
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageError {
  /**
   * The key of the entry that caused the error.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The error code associated with the failed operation.
   *
   * @public
   */
  errorCode?: BatchCreateWorkloadEstimateUsageCode | undefined;

  /**
   * A descriptive message for the error that occurred.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Represents a usage quantity for a workload estimate.
 *
 * @public
 */
export interface WorkloadEstimateUsageQuantity {
  /**
   * The unit of measurement for the usage quantity.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The numeric value of the usage quantity.
   *
   * @public
   */
  amount?: number | undefined;
}

/**
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageRequest {
  /**
   * The ID of the Workload estimate for which you want to delete the modeled usage.
   *
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * List of usage that you want to delete from the Workload estimate.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Represents an error that occurred when deleting usage in a workload estimate.
 *
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: WorkloadEstimateUpdateUsageErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageResponse {
  /**
   * Returns the list of errors reason and the usage item keys that cannot be deleted from the Workload estimate.
   *
   * @public
   */
  errors?: BatchDeleteWorkloadEstimateUsageError[] | undefined;
}

/**
 * Represents an entry in a batch operation to update workload estimate usage.
 *
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageEntry {
  /**
   * The unique identifier of the usage estimate to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated group identifier for the usage estimate.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The updated estimated usage amount.
   *
   * @public
   */
  amount?: number | undefined;
}

/**
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageRequest {
  /**
   * The ID of the Workload estimate for which you want to modify the usage lines.
   *
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * List of usage line amounts and usage group that you want to update in a Workload estimate identified by the usage ID.
   *
   * @public
   */
  usage: BatchUpdateWorkloadEstimateUsageEntry[] | undefined;
}

/**
 * Represents an error that occurred when updating usage in a workload estimate.
 *
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageError {
  /**
   * The ID of the error.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The code associated with the error.
   *
   * @public
   */
  errorCode?: WorkloadEstimateUpdateUsageErrorCode | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimateUsageRequest {
  /**
   * The unique identifier of the workload estimate to list usage for.
   *
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * Filters to apply to the list of usage items.
   *
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a complex filtering expression for cost and usage data.
 *
 * @public
 */
export interface Expression {
  /**
   * A list of expressions to be combined with AND logic.
   *
   * @public
   */
  and?: Expression[] | undefined;

  /**
   * A list of expressions to be combined with OR logic.
   *
   * @public
   */
  or?: Expression[] | undefined;

  /**
   * An expression to be negated.
   *
   * @public
   */
  not?: Expression | undefined;

  /**
   * Filters based on cost categories.
   *
   * @public
   */
  costCategories?: ExpressionFilter | undefined;

  /**
   * Filters based on dimensions (e.g., service, operation).
   *
   * @public
   */
  dimensions?: ExpressionFilter | undefined;

  /**
   * Filters based on resource tags.
   *
   * @public
   */
  tags?: ExpressionFilter | undefined;
}

/**
 * Represents historical usage data for a specific entity.
 *
 * @public
 */
export interface HistoricalUsageEntity {
  /**
   * The Amazon Web Services service code associated with the usage.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with the usage.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with the usage.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the usage.
   *
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * The time interval for the historical usage data.
   *
   * @public
   */
  billInterval: BillInterval | undefined;

  /**
   * An optional filter expression to apply to the historical usage data.
   *
   * @public
   */
  filterExpression: Expression | undefined;
}

/**
 * Represents an entry in a batch operation to create bill scenario usage modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationEntry {
  /**
   * The Amazon Web Services service code for this usage modification. This identifies the specific Amazon Web Services service to the customer as a unique short abbreviation. For example, `AmazonEC2` and `AWSKMS`.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * Describes the usage details of the usage line item.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage modification. Describes the specific Amazon Web Services operation that this usage line models. For example, `RunInstances` indicates the operation of an Amazon EC2 instance.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The Availability Zone that this usage line uses.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * A unique identifier for this entry in the batch operation. This can be any valid string. This key is useful to identify errors associated with any usage entry as any error is returned with this key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * An optional group identifier for the usage modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID to which this usage will be applied to.
   *
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * The amount of usage you want to create for the service use you are modeling.
   *
   * @public
   */
  amounts?: UsageAmount[] | undefined;

  /**
   * Historical usage data associated with this modification, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * Represents a successfully created item in a batch operation for bill scenario usage modifications.
 *
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationItem {
  /**
   * The Amazon Web Services service code for this usage modification.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage that was modified.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage modification.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this usage modification.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The availability zone associated with this usage modification, if applicable.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The unique identifier assigned to the created usage modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group identifier for the created usage modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the created usage modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The modified usage quantities.
   *
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * Historical usage data associated with this modification, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;

  /**
   * The key of the successfully created entry.
   *
   * @public
   */
  key?: string | undefined;
}

/**
 * Represents an entry in a batch operation to create workload estimate usage.
 *
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageEntry {
  /**
   * The Amazon Web Services service code for this usage estimate.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage being estimated.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage estimate.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * A unique identifier for this entry in the batch operation.
   *
   * @public
   */
  key: string | undefined;

  /**
   * An optional group identifier for the usage estimate.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this usage estimate.
   *
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * The estimated usage amount.
   *
   * @public
   */
  amount: number | undefined;

  /**
   * Historical usage data associated with this estimate, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * Represents a successfully created item in a batch operation for workload estimate usage.
 *
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageItem {
  /**
   * The Amazon Web Services service code for this usage estimate.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage that was estimated.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage estimate.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this usage estimate.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The unique identifier assigned to the created usage estimate.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the created usage estimate.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The group identifier for the created usage estimate.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The estimated usage quantity.
   *
   * @public
   */
  quantity?: WorkloadEstimateUsageQuantity | undefined;

  /**
   * The estimated cost associated with this usage.
   *
   * @public
   */
  cost?: number | undefined;

  /**
   * The currency of the estimated cost.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The current status of the created usage estimate.
   *
   * @public
   */
  status?: WorkloadEstimateCostStatus | undefined;

  /**
   * Historical usage data associated with this estimate, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;

  /**
   * The key of the successfully created entry.
   *
   * @public
   */
  key?: string | undefined;
}

/**
 * Summarizes an input usage modification for a bill estimate.
 *
 * @public
 */
export interface BillEstimateInputUsageModificationSummary {
  /**
   * The Amazon Web Services service code for this usage modification.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage being modified.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage modification.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this usage modification.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The availability zone associated with this usage modification, if applicable.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The unique identifier of the usage modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group identifier for the usage modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this usage modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The modified usage quantities.
   *
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * Historical usage data associated with this modification, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * Represents a usage modification item in a bill scenario.
 *
 * @public
 */
export interface BillScenarioUsageModificationItem {
  /**
   * The Amazon Web Services service code for this usage modification.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage being modified.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage modification.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this usage modification.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The availability zone associated with this usage modification, if applicable.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The unique identifier of the usage modification.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The group identifier for the usage modification.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this usage modification.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The modified usage quantities.
   *
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * Historical usage data associated with this modification, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * Represents a usage item in a workload estimate.
 *
 * @public
 */
export interface WorkloadEstimateUsageItem {
  /**
   * The Amazon Web Services service code associated with this usage item.
   *
   * @public
   */
  serviceCode: string | undefined;

  /**
   * The type of usage for this item.
   *
   * @public
   */
  usageType: string | undefined;

  /**
   * The specific operation associated with this usage item.
   *
   * @public
   */
  operation: string | undefined;

  /**
   * The location associated with this usage item.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The unique identifier of this usage item.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this usage item.
   *
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * The group identifier for this usage item.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The estimated usage quantity for this item.
   *
   * @public
   */
  quantity?: WorkloadEstimateUsageQuantity | undefined;

  /**
   * The estimated cost for this usage item.
   *
   * @public
   */
  cost?: number | undefined;

  /**
   * The currency of the estimated cost.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The current status of this usage item.
   *
   * @public
   */
  status?: WorkloadEstimateCostStatus | undefined;

  /**
   * Historical usage data associated with this item, if available.
   *
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationRequest {
  /**
   * The ID of the Bill Scenario for which you want to create the modeled usage.
   *
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * List of usage that you want to model in the Bill Scenario.
   *
   * @public
   */
  usageModifications: BatchCreateBillScenarioUsageModificationEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationResponse {
  /**
   * Returns the list of successful usage line items that were created for the Bill Scenario.
   *
   * @public
   */
  items?: BatchCreateBillScenarioUsageModificationItem[] | undefined;

  /**
   * Returns the list of errors reason and the usage item keys that cannot be created in the Bill Scenario.
   *
   * @public
   */
  errors?: BatchCreateBillScenarioUsageModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageRequest {
  /**
   * The ID of the Workload estimate for which you want to create the modeled usage.
   *
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * List of usage that you want to model in the Workload estimate.
   *
   * @public
   */
  usage: BatchCreateWorkloadEstimateUsageEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageResponse {
  /**
   * Returns the list of successful usage line items that were created for the Workload estimate.
   *
   * @public
   */
  items?: BatchCreateWorkloadEstimateUsageItem[] | undefined;

  /**
   * Returns the list of errors reason and the usage item keys that cannot be created in the Workload estimate.
   *
   * @public
   */
  errors?: BatchCreateWorkloadEstimateUsageError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationResponse {
  /**
   * Returns the list of successful usage line items that were updated for a Bill Scenario.
   *
   * @public
   */
  items?: BillScenarioUsageModificationItem[] | undefined;

  /**
   * Returns the list of error reasons and usage line item IDs that could not be updated for the Bill Scenario.
   *
   * @public
   */
  errors?: BatchUpdateBillScenarioUsageModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageResponse {
  /**
   * Returns the list of successful usage line items that were updated for a Workload estimate.
   *
   * @public
   */
  items?: WorkloadEstimateUsageItem[] | undefined;

  /**
   * Returns the list of error reasons and usage line item IDs that could not be updated for the Workload estimate.
   *
   * @public
   */
  errors?: BatchUpdateWorkloadEstimateUsageError[] | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputUsageModificationsResponse {
  /**
   * The list of input usage modifications associated with the bill estimate.
   *
   * @public
   */
  items?: BillEstimateInputUsageModificationSummary[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioUsageModificationsResponse {
  /**
   * The list of usage modifications associated with the bill scenario.
   *
   * @public
   */
  items?: BillScenarioUsageModificationItem[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimateUsageResponse {
  /**
   * The list of usage items associated with the workload estimate.
   *
   * @public
   */
  items?: WorkloadEstimateUsageItem[] | undefined;

  /**
   * A token to retrieve the next page of results, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}
