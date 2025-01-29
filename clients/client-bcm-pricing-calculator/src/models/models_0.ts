// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMPricingCalculatorServiceException as __BaseException } from "./BCMPricingCalculatorServiceException";

/**
 * <p>
 *         You do not have sufficient access to perform this action.
 *         </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>
 *                         Represents an action to add a Reserved Instance to a bill scenario.
 *                 </p>
 * @public
 */
export interface AddReservedInstanceAction {
  /**
   * <p>
   *                         The ID of the Reserved Instance offering to add. For more information, see
   *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html">
   *                                 DescribeReservedInstancesOfferings</a>.
   *                 </p>
   * @public
   */
  reservedInstancesOfferingId?: string | undefined;

  /**
   * <p>
   *                         The number of instances to add for this Reserved Instance offering.
   *                 </p>
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * <p>
 *                         Represents an action to add a Savings Plan to a bill scenario.
 *                 </p>
 * @public
 */
export interface AddSavingsPlanAction {
  /**
   * <p>
   *                         The ID of the Savings Plan offering to add. For more information, see
   *                         <a href="https://docs.aws.amazon.com/savingsplans/latest/APIReference/API_DescribeSavingsPlansOfferings.html">
   *                                 DescribeSavingsPlansOfferings</a>.
   *                 </p>
   * @public
   */
  savingsPlanOfferingId?: string | undefined;

  /**
   * <p>
   *                         The hourly commitment, in the same currency of the <code>savingsPlanOfferingId</code>.
   *                         This is a value between 0.001 and 1 million. You cannot specify more than five digits
   *                         after the decimal point.
   *                 </p>
   * @public
   */
  commitment?: number | undefined;
}

/**
 * <p>
 *         The requested data is currently unavailable.
 *         </p>
 * @public
 */
export class DataUnavailableException extends __BaseException {
  readonly name: "DataUnavailableException" = "DataUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataUnavailableException, __BaseException>) {
    super({
      name: "DataUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataUnavailableException.prototype);
  }
}

/**
 * <p>
 *         An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
 *         </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>
   *                         An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support.
   *                 </p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export interface ListBillEstimateCommitmentsRequest {
  /**
   * <p>
   *         The unique identifier of the bill estimate to list commitments for.
   *         </p>
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * <p>
   *         A token to retrieve the next page of results.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *         The maximum number of results to return per page.
   *         </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * <p>
 *         Represents a monetary amount with associated currency.
 *         </p>
 * @public
 */
export interface CostAmount {
  /**
   * <p>
   *         The numeric value of the cost.
   *         </p>
   * @public
   */
  amount?: number | undefined;

  /**
   * <p>
   *         The currency code for the cost amount.
   *         </p>
   * @public
   */
  currency?: CurrencyCode | undefined;
}

/**
 * @public
 * @enum
 */
export const PurchaseAgreementType = {
  RESERVED_INSTANCE: "RESERVED_INSTANCE",
  SAVINGS_PLANS: "SAVINGS_PLANS",
} as const;

/**
 * @public
 */
export type PurchaseAgreementType = (typeof PurchaseAgreementType)[keyof typeof PurchaseAgreementType];

/**
 * <p>
 *         Provides a summary of commitment-related information for a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateCommitmentSummary {
  /**
   * <p>
   *         The unique identifier of the commitment.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The type of purchase agreement (e.g., Reserved Instance, Savings Plan).
   *         </p>
   * @public
   */
  purchaseAgreementType?: PurchaseAgreementType | undefined;

  /**
   * <p>
   *         The identifier of the specific offering associated with this commitment.
   *         </p>
   * @public
   */
  offeringId?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this commitment.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services region associated with this commitment.
   *         </p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>
   *         The length of the commitment term.
   *         </p>
   * @public
   */
  termLength?: string | undefined;

  /**
   * <p>
   *         The payment option chosen for this commitment (e.g., All Upfront, Partial Upfront, No Upfront).
   *         </p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>
   *         The upfront payment amount for this commitment, if applicable.
   *         </p>
   * @public
   */
  upfrontPayment?: CostAmount | undefined;

  /**
   * <p>
   *         The monthly payment amount for this commitment, if applicable.
   *         </p>
   * @public
   */
  monthlyPayment?: CostAmount | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateCommitmentsResponse {
  /**
   * <p>
   *         The list of commitments associated with the bill estimate.
   *         </p>
   * @public
   */
  items?: BillEstimateCommitmentSummary[] | undefined;

  /**
   * <p>
   *         A token to retrieve the next page of results, if any.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *         The specified resource was not found.
 *         </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *                         The identifier of the resource that was not found.
   *                 </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *                         The type of the resource that was not found.
   *                 </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>
 *         The request was denied due to request throttling.
 *         </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The service code that exceeded the throttling limit.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quota code that exceeded the throttling limit.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The service code that exceeded the throttling limit. Retry your
   *                         request, but if the problem persists, contact Amazon Web Services support.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>
 *         Represents a field that failed validation in a request.
 *         </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>
   *         The name of the field that failed validation.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *         The error message describing why the field failed validation.
   *         </p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  DISALLOWED_RATE: "disallowedRate",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_REQUEST_FROM_MEMBER: "invalidRequestFromMember",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>
 *         The input provided fails to satisfy the constraints specified by an Amazon Web Services service.
 *         </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *                         The reason for the validation exception.
   *                 </p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>
   *                         The list of fields that are invalid.
   *                 </p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>
 *         Represents the difference between historical and estimated costs.
 *         </p>
 * @public
 */
export interface CostDifference {
  /**
   * <p>
   *         The historical cost amount.
   *         </p>
   * @public
   */
  historicalCost?: CostAmount | undefined;

  /**
   * <p>
   *         The estimated cost amount.
   *         </p>
   * @public
   */
  estimatedCost?: CostAmount | undefined;
}

/**
 * <p>
 *         Provides a summary of cost-related information for a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateCostSummary {
  /**
   * <p>
   *         The total difference in cost between the estimated and historical costs.
   *         </p>
   * @public
   */
  totalCostDifference?: CostDifference | undefined;

  /**
   * <p>
   *         A breakdown of cost differences by Amazon Web Services service.
   *         </p>
   * @public
   */
  serviceCostDifferences?: Record<string, CostDifference> | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputCommitmentModificationsRequest {
  /**
   * <p>
   *                         The unique identifier of the bill estimate to list input commitment modifications for.
   *                 </p>
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Represents an action to remove a Reserved Instance from a bill scenario.
 *         </p>
 *          <p>
 *                         This is the ID of an existing Reserved Instance in your account.
 *                 </p>
 * @public
 */
export interface NegateReservedInstanceAction {
  /**
   * <p>
   *         The ID of the Reserved Instance to remove.
   *         </p>
   * @public
   */
  reservedInstancesId?: string | undefined;
}

/**
 * <p>
 *         Represents an action to remove a Savings Plan from a bill scenario.
 *         </p>
 *          <p>
 *                         This is the ID of an existing Savings Plan in your account.
 *                 </p>
 * @public
 */
export interface NegateSavingsPlanAction {
  /**
   * <p>
   *         The ID of the Savings Plan to remove.
   *         </p>
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * <p>
 *         Represents an action to modify commitments in a bill scenario.
 *         </p>
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
   * <p>
   *         Action to add a Reserved Instance to the scenario.
   *         </p>
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
   * <p>
   *         Action to add a Savings Plan to the scenario.
   *         </p>
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
   * <p>
   *         Action to remove a Reserved Instance from the scenario.
   *         </p>
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
   * <p>
   *         Action to remove a Savings Plan from the scenario.
   *         </p>
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

  export interface Visitor<T> {
    addReservedInstanceAction: (value: AddReservedInstanceAction) => T;
    addSavingsPlanAction: (value: AddSavingsPlanAction) => T;
    negateReservedInstanceAction: (value: NegateReservedInstanceAction) => T;
    negateSavingsPlanAction: (value: NegateSavingsPlanAction) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BillScenarioCommitmentModificationAction, visitor: Visitor<T>): T => {
    if (value.addReservedInstanceAction !== undefined)
      return visitor.addReservedInstanceAction(value.addReservedInstanceAction);
    if (value.addSavingsPlanAction !== undefined) return visitor.addSavingsPlanAction(value.addSavingsPlanAction);
    if (value.negateReservedInstanceAction !== undefined)
      return visitor.negateReservedInstanceAction(value.negateReservedInstanceAction);
    if (value.negateSavingsPlanAction !== undefined)
      return visitor.negateSavingsPlanAction(value.negateSavingsPlanAction);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>
 *         Summarizes an input commitment modification for a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateInputCommitmentModificationSummary {
  /**
   * <p>
   *         The unique identifier of the commitment modification.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The group identifier for the commitment modification.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this commitment modification.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The specific commitment action taken in this modification.
   *         </p>
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputCommitmentModificationsResponse {
  /**
   * <p>
   *                         The list of input commitment modifications associated with the bill estimate.
   *                 </p>
   * @public
   */
  items?: BillEstimateInputCommitmentModificationSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MatchOption = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * @public
 * @enum
 */
export const ListUsageFilterName = {
  HISTORICAL_LOCATION: "HISTORICAL_LOCATION",
  HISTORICAL_OPERATION: "HISTORICAL_OPERATION",
  HISTORICAL_SERVICE_CODE: "HISTORICAL_SERVICE_CODE",
  HISTORICAL_USAGE_ACCOUNT_ID: "HISTORICAL_USAGE_ACCOUNT_ID",
  HISTORICAL_USAGE_TYPE: "HISTORICAL_USAGE_TYPE",
  LOCATION: "LOCATION",
  OPERATION: "OPERATION",
  SERVICE_CODE: "SERVICE_CODE",
  USAGE_ACCOUNT_ID: "USAGE_ACCOUNT_ID",
  USAGE_GROUP: "USAGE_GROUP",
  USAGE_TYPE: "USAGE_TYPE",
} as const;

/**
 * @public
 */
export type ListUsageFilterName = (typeof ListUsageFilterName)[keyof typeof ListUsageFilterName];

/**
 * <p>
 *         Represents a filter for listing usage data.
 *         </p>
 * @public
 */
export interface ListUsageFilter {
  /**
   * <p>
   *         The name of the filter attribute.
   *         </p>
   * @public
   */
  name: ListUsageFilterName | undefined;

  /**
   * <p>
   *         The values to filter by.
   *         </p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>
   *         The match option for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputUsageModificationsRequest {
  /**
   * <p>
   *                         The unique identifier of the bill estimate to list input usage modifications for.
   *                 </p>
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * <p>
   *                         Filters to apply to the list of input usage modifications.
   *                 </p>
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Represents a time interval for a bill or estimate.
 *         </p>
 * @public
 */
export interface BillInterval {
  /**
   * <p>
   *         The start date and time of the interval.
   *         </p>
   * @public
   */
  start?: Date | undefined;

  /**
   * <p>
   *         The end date and time of the interval.
   *         </p>
   * @public
   */
  end?: Date | undefined;
}

/**
 * <p>
 *         Represents a filter used within an expression.
 *         </p>
 * @public
 */
export interface ExpressionFilter {
  /**
   * <p>
   *         The key or attribute to filter on.
   *         </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *         The match options for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOptions?: string[] | undefined;

  /**
   * <p>
   *         The values to match against.
   *         </p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>
 *         Represents a usage quantity with associated unit and time period.
 *         </p>
 * @public
 */
export interface UsageQuantity {
  /**
   * <p>
   *         The start hour of the usage period.
   *         </p>
   * @public
   */
  startHour?: Date | undefined;

  /**
   * <p>
   *         The unit of measurement for the usage quantity.
   *         </p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>
   *         The numeric value of the usage quantity.
   *         </p>
   * @public
   */
  amount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ListBillEstimateLineItemsFilterName = {
  LINE_ITEM_TYPE: "LINE_ITEM_TYPE",
  LOCATION: "LOCATION",
  OPERATION: "OPERATION",
  SERVICE_CODE: "SERVICE_CODE",
  USAGE_ACCOUNT_ID: "USAGE_ACCOUNT_ID",
  USAGE_TYPE: "USAGE_TYPE",
} as const;

/**
 * @public
 */
export type ListBillEstimateLineItemsFilterName =
  (typeof ListBillEstimateLineItemsFilterName)[keyof typeof ListBillEstimateLineItemsFilterName];

/**
 * <p>
 *         Represents a filter for listing bill estimate line items.
 *         </p>
 * @public
 */
export interface ListBillEstimateLineItemsFilter {
  /**
   * <p>
   *         The name of the filter attribute.
   *         </p>
   * @public
   */
  name: ListBillEstimateLineItemsFilterName | undefined;

  /**
   * <p>
   *         The values to filter by.
   *         </p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>
   *         The match option for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateLineItemsRequest {
  /**
   * <p>
   *                         The unique identifier of the bill estimate to list line items for.
   *                 </p>
   * @public
   */
  billEstimateId: string | undefined;

  /**
   * <p>
   *                         Filters to apply to the list of line items.
   *                 </p>
   * @public
   */
  filters?: ListBillEstimateLineItemsFilter[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Represents the result of a usage quantity calculation.
 *         </p>
 * @public
 */
export interface UsageQuantityResult {
  /**
   * <p>
   *         The numeric value of the usage quantity result.
   *         </p>
   * @public
   */
  amount?: number | undefined;

  /**
   * <p>
   *         The unit of measurement for the usage quantity result.
   *         </p>
   * @public
   */
  unit?: string | undefined;
}

/**
 * <p>
 *         Provides a summary of a line item in a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateLineItemSummary {
  /**
   * <p>
   *         The Amazon Web Services service code associated with this line item.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage for this line item.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this line item.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with this line item.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The availability zone associated with this line item, if applicable.
   *         </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *         The unique identifier of this line item.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The line item identifier from the original bill.
   *         </p>
   * @public
   */
  lineItemId?: string | undefined;

  /**
   * <p>
   *         The type of this line item (e.g., Usage, Tax, Credit).
   *         </p>
   * @public
   */
  lineItemType?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID of the payer for this line item.
   *         </p>
   * @public
   */
  payerAccountId?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with the usage for this line item.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The estimated usage quantity for this line item.
   *         </p>
   * @public
   */
  estimatedUsageQuantity?: UsageQuantityResult | undefined;

  /**
   * <p>
   *         The estimated cost for this line item.
   *         </p>
   * @public
   */
  estimatedCost?: CostAmount | undefined;

  /**
   * <p>
   *         The historical usage quantity for this line item.
   *         </p>
   * @public
   */
  historicalUsageQuantity?: UsageQuantityResult | undefined;

  /**
   * <p>
   *         The historical cost for this line item.
   *         </p>
   * @public
   */
  historicalCost?: CostAmount | undefined;

  /**
   * <p>
   *         The Amazon Resource Names (ARNs) of any Savings Plans applied to this line item.
   *         </p>
   * @public
   */
  savingsPlanArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateLineItemsResponse {
  /**
   * <p>
   *                         The list of line items associated with the bill estimate.
   *                 </p>
   * @public
   */
  items?: BillEstimateLineItemSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BillEstimateStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type BillEstimateStatus = (typeof BillEstimateStatus)[keyof typeof BillEstimateStatus];

/**
 * <p>
 *         The request could not be processed because of conflict in the current state of the resource.
 *         </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *                         The identifier of the resource that was not found.
   *                 </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *                         The type of the resource that was not found.
   *                 </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CreateBillEstimateRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to create a Bill estimate.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         The name of the Bill estimate that will be created. Names must be unique for an account.
   *                 </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *                         A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *                 </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>
   *                 An optional list of tags to associate with the specified BillEstimate. You can use resource tags to control access to your
   *                 BillEstimate using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *         </p>
   *          <ul>
   *             <li>
   *                <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource.
   *                                 The remaining are reserved for Amazon Web Services. </p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a key is 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a value is 256 characters.</p>
   *             </li>
   *             <li>
   *                <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code>.</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are trimmed for any leading or trailing whitespaces.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services.</p>
   *             </li>
   *          </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBillEstimateResponse {
  /**
   * <p> The unique identifier of your newly created Bill estimate. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p> The name of your newly created Bill estimate. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The status of your newly created Bill estimate. Bill estimate creation can take anywhere between 8 to 12 hours.
   *                         The status will allow you to identify when the Bill estimate is complete or has failed. </p>
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * <p> This attribute provides the reason if a Bill estimate result generation fails. </p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p> The bill month start and end
   *                 timestamp that was used to create the Bill estimate. This is set to the last complete anniversary bill month start and end timestamp. </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p> Returns summary-level cost information once a Bill estimate is
   *                 successfully generated. This summary includes: 1) the total cost difference, showing the pre-tax cost change for the consolidated
   *                 billing family between the completed anniversary bill and the estimated bill, and 2) total cost differences per service, detailing
   *                 the pre-tax cost of each service, comparing the completed anniversary bill to the estimated bill on a per-service basis. </p>
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * <p> The timestamp of when the Bill estimate create process
   *                 was started (not when it successfully completed or failed). </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p> The timestamp of when the Bill estimate will
   *                 expire. A Bill estimate becomes inaccessible after expiration. </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBillEstimateRequest {
  /**
   * <p>
   *         The unique identifier of the bill estimate to delete.
   *         </p>
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
   * <p>
   *         The unique identifier of the bill estimate to retrieve.
   *         </p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBillEstimateResponse {
  /**
   * <p>
   *         The unique identifier of the retrieved bill estimate.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the retrieved bill estimate.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The current status of the bill estimate.
   *         </p>
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * <p>
   *         An error message if the bill estimate retrieval failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>
   *         The time period covered by the bill estimate.
   *         </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *         A summary of the estimated costs.
   *         </p>
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * <p>
   *         The timestamp when the bill estimate was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the bill estimate will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * <p>
 *         Represents a time-based filter.
 *         </p>
 * @public
 */
export interface FilterTimestamp {
  /**
   * <p>
   *         Include results after this timestamp.
   *         </p>
   * @public
   */
  afterTimestamp?: Date | undefined;

  /**
   * <p>
   *         Include results before this timestamp.
   *         </p>
   * @public
   */
  beforeTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ListBillEstimatesFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ListBillEstimatesFilterName =
  (typeof ListBillEstimatesFilterName)[keyof typeof ListBillEstimatesFilterName];

/**
 * <p>
 *         Represents a filter for listing bill estimates.
 *         </p>
 * @public
 */
export interface ListBillEstimatesFilter {
  /**
   * <p>
   *         The name of the filter attribute.
   *         </p>
   * @public
   */
  name: ListBillEstimatesFilterName | undefined;

  /**
   * <p>
   *         The values to filter by.
   *         </p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>
   *         The match option for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillEstimatesRequest {
  /**
   * <p>
   *                         Filters to apply to the list of bill estimates.
   *                 </p>
   * @public
   */
  filters?: ListBillEstimatesFilter[] | undefined;

  /**
   * <p>
   *                         Filter bill estimates based on the creation date.
   *                 </p>
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         Filter bill estimates based on the expiration date.
   *                 </p>
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Provides a summary of a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateSummary {
  /**
   * <p>
   *         The unique identifier of the bill estimate.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the bill estimate.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The current status of the bill estimate.
   *         </p>
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * <p>
   *         The time period covered by the bill estimate.
   *         </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *         The timestamp when the bill estimate was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the bill estimate will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBillEstimatesResponse {
  /**
   * <p>
   *                         The list of bill estimates for the account.
   *                 </p>
   * @public
   */
  items?: BillEstimateSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillEstimateRequest {
  /**
   * <p>
   *                         The unique identifier of the bill estimate to update.
   *                 </p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>
   *                         The new name for the bill estimate.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The new expiration date for the bill estimate.
   *                 </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBillEstimateResponse {
  /**
   * <p>
   *                         The unique identifier of the updated bill estimate.
   *                 </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *                         The updated name of the bill estimate.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The current status of the updated bill estimate.
   *                 </p>
   * @public
   */
  status?: BillEstimateStatus | undefined;

  /**
   * <p>
   *                         An error message if the bill estimate update failed.
   *                 </p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>
   *                         The time period covered by the updated bill estimate.
   *                 </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *                         A summary of the updated estimated costs.
   *                 </p>
   * @public
   */
  costSummary?: BillEstimateCostSummary | undefined;

  /**
   * <p>
   *                         The timestamp when the bill estimate was originally created.
   *                 </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *                         The updated expiration timestamp for the bill estimate.
   *                 </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * <p>
 *                         Represents an entry object in the batch operation to create bill scenario commitment modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationEntry {
  /**
   * <p>
   *                         A unique identifier for this entry in the batch operation. This can be any valid string.
   *                         This key is useful to identify errors associated with any commitment entry as any error is
   *                         returned with this key.
   *                 </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>
   *                         An optional group identifier for the commitment modification.
   *                 </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *                         The Amazon Web Services account ID to which this commitment will be applied to.
   *                 </p>
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * <p>
   *                         The specific commitment action to be taken (e.g., adding a Reserved Instance or Savings Plan).
   *                 </p>
   * @public
   */
  commitmentAction: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to create the modeled commitment.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of commitments that you want to model in the Bill Scenario.
   *                 </p>
   * @public
   */
  commitmentModifications: BatchCreateBillScenarioCommitmentModificationEntry[] | undefined;

  /**
   * <p>
   *                         A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *                 </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchCreateBillScenarioCommitmentModificationErrorCode = {
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  INVALID_ACCOUNT: "INVALID_ACCOUNT",
} as const;

/**
 * @public
 */
export type BatchCreateBillScenarioCommitmentModificationErrorCode =
  (typeof BatchCreateBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchCreateBillScenarioCommitmentModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred during a batch create operation for bill scenario commitment modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationError {
  /**
   * <p>
   *                         The key of the entry that caused the error.
   *                 </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *                         A descriptive message for the error that occurred.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The error code associated with the failed operation.
   *                 </p>
   * @public
   */
  errorCode?: BatchCreateBillScenarioCommitmentModificationErrorCode | undefined;
}

/**
 * <p>
 *                         Represents a successfully created item in a batch operation for bill scenario commitment modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationItem {
  /**
   * <p>
   *                         The key of the successfully created entry. This can be any valid string. This key is useful to
   *                         identify errors associated with any commitment entry as any error is returned with this key.
   *                 </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *                         The unique identifier assigned to the created commitment modification.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The group identifier for the created commitment modification.
   *                 </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *                         The Amazon Web Services account ID associated with the created commitment modification.
   *                 </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *                         The specific commitment action that was taken.
   *                 </p>
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioCommitmentModificationResponse {
  /**
   * <p>
   *                         Returns the list of successful commitment line items that were created for the Bill Scenario.
   *                 </p>
   * @public
   */
  items?: BatchCreateBillScenarioCommitmentModificationItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of errors reason and the commitment item keys that cannot be created in the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchCreateBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to delete the modeled commitment.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of commitments that you want to delete from the Bill Scenario.
   *                 </p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchDeleteBillScenarioCommitmentModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;

/**
 * @public
 */
export type BatchDeleteBillScenarioCommitmentModificationErrorCode =
  (typeof BatchDeleteBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchDeleteBillScenarioCommitmentModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred when deleting a commitment in a Bill Scenario.
 *                 </p>
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: BatchDeleteBillScenarioCommitmentModificationErrorCode | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioCommitmentModificationResponse {
  /**
   * <p>
   *                         Returns the list of errors reason and the commitment item keys that cannot be deleted from the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchDeleteBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * <p>
 *         Represents an entry in a batch operation to update bill scenario commitment modifications.
 *         </p>
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationEntry {
  /**
   * <p>
   *         The unique identifier of the commitment modification to update.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The updated group identifier for the commitment modification.
   *         </p>
   * @public
   */
  group?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to modify the commitment group of a modeled commitment.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of commitments that you want to update in a Bill Scenario.
   *                 </p>
   * @public
   */
  commitmentModifications: BatchUpdateBillScenarioCommitmentModificationEntry[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchUpdateBillScenarioCommitmentModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type BatchUpdateBillScenarioCommitmentModificationErrorCode =
  (typeof BatchUpdateBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchUpdateBillScenarioCommitmentModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred when updating a commitment in a Bill Scenario.
 *                 </p>
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: BatchUpdateBillScenarioCommitmentModificationErrorCode | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>
 *         Represents a commitment modification item in a bill scenario.
 *         </p>
 * @public
 */
export interface BillScenarioCommitmentModificationItem {
  /**
   * <p>
   *         The unique identifier of the commitment modification.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this commitment modification.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The group identifier for the commitment modification.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The specific commitment action taken in this modification.
   *         </p>
   * @public
   */
  commitmentAction?: BillScenarioCommitmentModificationAction | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioCommitmentModificationResponse {
  /**
   * <p>
   *                         Returns the list of successful commitment line items that were updated for a Bill Scenario.
   *                 </p>
   * @public
   */
  items?: BillScenarioCommitmentModificationItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of error reasons and commitment line item IDs that could not be updated for the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchUpdateBillScenarioCommitmentModificationError[] | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioCommitmentModificationsRequest {
  /**
   * <p>
   *                         The unique identifier of the bill scenario to list commitment modifications for.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioCommitmentModificationsResponse {
  /**
   * <p>
   *                         The list of commitment modifications associated with the bill scenario.
   *                 </p>
   * @public
   */
  items?: BillScenarioCommitmentModificationItem[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BillScenarioStatus = {
  FAILED: "FAILED",
  LOCKED: "LOCKED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type BillScenarioStatus = (typeof BillScenarioStatus)[keyof typeof BillScenarioStatus];

/**
 * <p>
 *         Represents a usage amount for a specific time period.
 *         </p>
 * @public
 */
export interface UsageAmount {
  /**
   * <p>
   *         The start hour of the usage period.
   *         </p>
   * @public
   */
  startHour: Date | undefined;

  /**
   * <p>
   *         The usage amount for the period.
   *         </p>
   * @public
   */
  amount: number | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchCreateBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type BatchCreateBillScenarioUsageModificationErrorCode =
  (typeof BatchCreateBillScenarioUsageModificationErrorCode)[keyof typeof BatchCreateBillScenarioUsageModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred during a batch create operation for bill scenario usage modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationError {
  /**
   * <p>
   *                         The key of the entry that caused the error.
   *                 </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *                         A descriptive message for the error that occurred.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The error code associated with the failed operation.
   *                 </p>
   * @public
   */
  errorCode?: BatchCreateBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * <p>
 *         The request would cause you to exceed your service quota.
 *         </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *                         The identifier of the resource that exceeded quota.
   *                 </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *                         The type of the resource that exceeded quota.
   *                 </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>
   *                         The service code that exceeded quota.
   *                 </p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>
   *                         The quota code that was exceeded.
   *                 </p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to delete the modeled usage.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of usage that you want to delete from the Bill Scenario.
   *                 </p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchDeleteBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;

/**
 * @public
 */
export type BatchDeleteBillScenarioUsageModificationErrorCode =
  (typeof BatchDeleteBillScenarioUsageModificationErrorCode)[keyof typeof BatchDeleteBillScenarioUsageModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred when deleting  usage in a Bill Scenario.
 *                 </p>
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: BatchDeleteBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBillScenarioUsageModificationResponse {
  /**
   * <p>
   *                         Returns the list of errors reason and the usage item keys that cannot be deleted from the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchDeleteBillScenarioUsageModificationError[] | undefined;
}

/**
 * <p>
 *         Represents an entry in a batch operation to update bill scenario usage modifications.
 *         </p>
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationEntry {
  /**
   * <p>
   *         The unique identifier of the usage modification to update.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The updated group identifier for the usage modification.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The updated usage amounts for the modification.
   *         </p>
   * @public
   */
  amounts?: UsageAmount[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to modify the usage lines.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of usage lines that you want to update in a Bill Scenario identified by the usage ID.
   *                 </p>
   * @public
   */
  usageModifications: BatchUpdateBillScenarioUsageModificationEntry[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchUpdateBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type BatchUpdateBillScenarioUsageModificationErrorCode =
  (typeof BatchUpdateBillScenarioUsageModificationErrorCode)[keyof typeof BatchUpdateBillScenarioUsageModificationErrorCode];

/**
 * <p>
 *                         Represents an error that occurred when updating usage in a Bill Scenario.
 *                 </p>
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: BatchUpdateBillScenarioUsageModificationErrorCode | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioUsageModificationsRequest {
  /**
   * <p>
   *                         The unique identifier of the bill scenario to list usage modifications for.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         Filters to apply to the list of usage modifications.
   *                 </p>
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface CreateBillScenarioRequest {
  /**
   * <p>
   *         A descriptive name for the bill scenario.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *         A unique, case-sensitive identifier to ensure idempotency of the request.
   *         </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>
   *         The tags to apply to the bill scenario.
   *         </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBillScenarioResponse {
  /**
   * <p>
   *         The unique identifier for the created bill scenario.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the created bill scenario.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The time period covered by the bill scenario.
   *         </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *         The current status of the bill scenario.
   *         </p>
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         An error message if the bill scenario creation failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillScenarioRequest {
  /**
   * <p>
   *         The unique identifier of the bill scenario to delete.
   *         </p>
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
   * <p>
   *         The unique identifier of the bill scenario to retrieve.
   *         </p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetBillScenarioResponse {
  /**
   * <p>
   *         The unique identifier of the retrieved bill scenario.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the retrieved bill scenario.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The time period covered by the bill scenario.
   *         </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *         The current status of the bill scenario.
   *         </p>
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         An error message if the bill scenario retrieval failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListBillScenariosFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ListBillScenariosFilterName =
  (typeof ListBillScenariosFilterName)[keyof typeof ListBillScenariosFilterName];

/**
 * <p>
 *         Represents a filter for listing bill scenarios.
 *         </p>
 * @public
 */
export interface ListBillScenariosFilter {
  /**
   * <p>
   *         The name of the filter attribute.
   *         </p>
   * @public
   */
  name: ListBillScenariosFilterName | undefined;

  /**
   * <p>
   *         The values to filter by.
   *         </p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>
   *         The match option for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListBillScenariosRequest {
  /**
   * <p>
   *                         Filters to apply to the list of bill scenarios.
   *                 </p>
   * @public
   */
  filters?: ListBillScenariosFilter[] | undefined;

  /**
   * <p>
   *                         Filter bill scenarios based on the creation date.
   *                 </p>
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         Filter bill scenarios based on the expiration date.
   *                 </p>
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Provides a summary of a bill scenario.
 *         </p>
 * @public
 */
export interface BillScenarioSummary {
  /**
   * <p>
   *         The unique identifier of the bill scenario.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the bill scenario.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The time period covered by the bill scenario.
   *         </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *         The current status of the bill scenario.
   *         </p>
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the bill scenario will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         An error message if the bill scenario creation or processing failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListBillScenariosResponse {
  /**
   * <p>
   *                         The list of bill scenarios for the account.
   *                 </p>
   * @public
   */
  items?: BillScenarioSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillScenarioRequest {
  /**
   * <p>
   *                         The unique identifier of the bill scenario to update.
   *                 </p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>
   *                         The new name for the bill scenario.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The new expiration date for the bill scenario.
   *                 </p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBillScenarioResponse {
  /**
   * <p>
   *                         The unique identifier of the updated bill scenario.
   *                 </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *                         The updated name of the bill scenario.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The time period covered by the updated bill scenario.
   *                 </p>
   * @public
   */
  billInterval?: BillInterval | undefined;

  /**
   * <p>
   *                         The current status of the updated bill scenario.
   *                 </p>
   * @public
   */
  status?: BillScenarioStatus | undefined;

  /**
   * <p>
   *                         The timestamp when the bill scenario was originally created.
   *                 </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *                         The updated expiration timestamp for the bill scenario.
   *                 </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *                         An error message if the bill scenario update failed.
   *                 </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetPreferencesRequest {}

/**
 * @public
 * @enum
 */
export const RateType = {
  AFTER_DISCOUNTS: "AFTER_DISCOUNTS",
  BEFORE_DISCOUNTS: "BEFORE_DISCOUNTS",
} as const;

/**
 * @public
 */
export type RateType = (typeof RateType)[keyof typeof RateType];

/**
 * @public
 */
export interface GetPreferencesResponse {
  /**
   * <p>
   *         The preferred rate types for the management account.
   *         </p>
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * <p>
   *         The preferred rate types for member accounts.
   *         </p>
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *                         The Amazon Resource Name (ARN) of the resource to list tags for.
   *                 </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *                         The list of tags associated with the specified resource.
   *                 </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *                         The Amazon Resource Name (ARN) of the resource to add tags to.
   *                 </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *                         The tags to add to the resource.
   *                 </p>
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
   * <p>
   *                         The Amazon Resource Name (ARN) of the resource to remove tags from.
   *                 </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *                         The keys of the tags to remove from the resource.
   *                 </p>
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
   * <p>
   *                         The updated preferred rate types for the management account.
   *                 </p>
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * <p>
   *                         The updated preferred rate types for member accounts.
   *                 </p>
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * <p>
   *                         The updated preferred rate types for the management account.
   *                 </p>
   * @public
   */
  managementAccountRateTypeSelections?: RateType[] | undefined;

  /**
   * <p>
   *                         The updated preferred rate types for member accounts.
   *                 </p>
   * @public
   */
  memberAccountRateTypeSelections?: RateType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadEstimateRateType = {
  AFTER_DISCOUNTS: "AFTER_DISCOUNTS",
  BEFORE_DISCOUNTS: "BEFORE_DISCOUNTS",
} as const;

/**
 * @public
 */
export type WorkloadEstimateRateType = (typeof WorkloadEstimateRateType)[keyof typeof WorkloadEstimateRateType];

/**
 * @public
 */
export interface CreateWorkloadEstimateRequest {
  /**
   * <p>
   *         A descriptive name for the workload estimate.
   *         </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *         A unique, case-sensitive identifier to ensure idempotency of the request.
   *         </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>
   *         The type of pricing rates to use for the estimate.
   *         </p>
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * <p>
   *         The tags to apply to the workload estimate.
   *         </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadEstimateStatus = {
  ACTION_NEEDED: "ACTION_NEEDED",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type WorkloadEstimateStatus = (typeof WorkloadEstimateStatus)[keyof typeof WorkloadEstimateStatus];

/**
 * Mixin for common fields returned by CRUD APIs
 * @public
 */
export interface CreateWorkloadEstimateResponse {
  /**
   * <p>
   *         The unique identifier for the created workload estimate.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the created workload estimate.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         The type of pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * <p>
   *         The timestamp of the pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * <p>
   *         The current status of the workload estimate.
   *         </p>
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * <p>
   *         The total estimated cost for the workload.
   *         </p>
   * @public
   */
  totalCost?: number | undefined;

  /**
   * <p>
   *         The currency of the estimated cost.
   *         </p>
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * <p>
   *         An error message if the workload estimate creation failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadEstimateRequest {
  /**
   * <p>
   *         The unique identifier of the workload estimate to delete.
   *         </p>
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
   * <p>
   *         The unique identifier of the workload estimate to retrieve.
   *         </p>
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
   * <p>
   *         The unique identifier of the retrieved workload estimate.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the retrieved workload estimate.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         The type of pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * <p>
   *         The timestamp of the pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * <p>
   *         The current status of the workload estimate.
   *         </p>
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * <p>
   *         The total estimated cost for the workload.
   *         </p>
   * @public
   */
  totalCost?: number | undefined;

  /**
   * <p>
   *         The currency of the estimated cost.
   *         </p>
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * <p>
   *         An error message if the workload estimate retrieval failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListWorkloadEstimatesFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ListWorkloadEstimatesFilterName =
  (typeof ListWorkloadEstimatesFilterName)[keyof typeof ListWorkloadEstimatesFilterName];

/**
 * <p>
 *         Represents a filter for listing workload estimates.
 *         </p>
 * @public
 */
export interface ListWorkloadEstimatesFilter {
  /**
   * <p>
   *         The name of the filter attribute.
   *         </p>
   * @public
   */
  name: ListWorkloadEstimatesFilterName | undefined;

  /**
   * <p>
   *         The values to filter by.
   *         </p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>
   *         The match option for the filter (e.g., equals, contains).
   *         </p>
   * @public
   */
  matchOption?: MatchOption | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimatesRequest {
  /**
   * <p>
   *                         Filter workload estimates based on the creation date.
   *                 </p>
   * @public
   */
  createdAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         Filter workload estimates based on the expiration date.
   *                 </p>
   * @public
   */
  expiresAtFilter?: FilterTimestamp | undefined;

  /**
   * <p>
   *                         Filters to apply to the list of workload estimates.
   *                 </p>
   * @public
   */
  filters?: ListWorkloadEstimatesFilter[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Provides a summary of a workload estimate.
 *         </p>
 * @public
 */
export interface WorkloadEstimateSummary {
  /**
   * <p>
   *         The unique identifier of the workload estimate.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The name of the workload estimate.
   *         </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate was created.
   *         </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *         The timestamp when the workload estimate will expire.
   *         </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *         The type of pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * <p>
   *         The timestamp of the pricing rates used for the estimate.
   *         </p>
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * <p>
   *         The current status of the workload estimate.
   *         </p>
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * <p>
   *         The total estimated cost for the workload.
   *         </p>
   * @public
   */
  totalCost?: number | undefined;

  /**
   * <p>
   *         The currency of the estimated cost.
   *         </p>
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * <p>
   *         An error message if the workload estimate creation or processing failed.
   *         </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimatesResponse {
  /**
   * <p>
   *                         The list of workload estimates for the account.
   *                 </p>
   * @public
   */
  items?: WorkloadEstimateSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadEstimateRequest {
  /**
   * <p>
   *                         The unique identifier of the workload estimate to update.
   *                 </p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>
   *                         The new name for the workload estimate.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The new expiration date for the workload estimate.
   *                 </p>
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
   * <p>
   *                         The unique identifier of the updated workload estimate.
   *                 </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *                         The updated name of the workload estimate.
   *                 </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *                         The timestamp when the workload estimate was originally created.
   *                 </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *                         The updated expiration timestamp for the workload estimate.
   *                 </p>
   * @public
   */
  expiresAt?: Date | undefined;

  /**
   * <p>
   *                         The type of pricing rates used for the updated estimate.
   *                 </p>
   * @public
   */
  rateType?: WorkloadEstimateRateType | undefined;

  /**
   * <p>
   *                         The timestamp of the pricing rates used for the updated estimate.
   *                 </p>
   * @public
   */
  rateTimestamp?: Date | undefined;

  /**
   * <p>
   *                         The current status of the updated workload estimate.
   *                 </p>
   * @public
   */
  status?: WorkloadEstimateStatus | undefined;

  /**
   * <p>
   *                         The updated total estimated cost for the workload.
   *                 </p>
   * @public
   */
  totalCost?: number | undefined;

  /**
   * <p>
   *                         The currency of the updated estimated cost.
   *                 </p>
   * @public
   */
  costCurrency?: CurrencyCode | undefined;

  /**
   * <p>
   *                         An error message if the workload estimate update failed.
   *                 </p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchCreateWorkloadEstimateUsageCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type BatchCreateWorkloadEstimateUsageCode =
  (typeof BatchCreateWorkloadEstimateUsageCode)[keyof typeof BatchCreateWorkloadEstimateUsageCode];

/**
 * <p>
 *         Represents an error that occurred during a batch create operation for workload estimate usage.
 *         </p>
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageError {
  /**
   * <p>
   *         The key of the entry that caused the error.
   *         </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *         The error code associated with the failed operation.
   *         </p>
   * @public
   */
  errorCode?: BatchCreateWorkloadEstimateUsageCode | undefined;

  /**
   * <p>
   *         A descriptive message for the error that occurred.
   *         </p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>
 *         Represents a usage quantity for a workload estimate.
 *         </p>
 * @public
 */
export interface WorkloadEstimateUsageQuantity {
  /**
   * <p>
   *         The unit of measurement for the usage quantity.
   *         </p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>
   *         The numeric value of the usage quantity.
   *         </p>
   * @public
   */
  amount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadEstimateCostStatus = {
  INVALID: "INVALID",
  STALE: "STALE",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type WorkloadEstimateCostStatus = (typeof WorkloadEstimateCostStatus)[keyof typeof WorkloadEstimateCostStatus];

/**
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageRequest {
  /**
   * <p>
   *                         The ID of the Workload estimate for which you want to delete the modeled usage.
   *                 </p>
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * <p>
   *                         List of usage that you want to delete from the Workload estimate.
   *                 </p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadEstimateUpdateUsageErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type WorkloadEstimateUpdateUsageErrorCode =
  (typeof WorkloadEstimateUpdateUsageErrorCode)[keyof typeof WorkloadEstimateUpdateUsageErrorCode];

/**
 * <p>
 *                         Represents an error that occurred when deleting usage in a workload estimate.
 *                 </p>
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: WorkloadEstimateUpdateUsageErrorCode | undefined;
}

/**
 * @public
 */
export interface BatchDeleteWorkloadEstimateUsageResponse {
  /**
   * <p>
   *                         Returns the list of errors reason and the usage item keys that cannot be deleted from the Workload estimate.
   *                 </p>
   * @public
   */
  errors?: BatchDeleteWorkloadEstimateUsageError[] | undefined;
}

/**
 * <p>
 *         Represents an entry in a batch operation to update workload estimate usage.
 *         </p>
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageEntry {
  /**
   * <p>
   *         The unique identifier of the usage estimate to update.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *         The updated group identifier for the usage estimate.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The updated estimated usage amount.
   *         </p>
   * @public
   */
  amount?: number | undefined;
}

/**
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageRequest {
  /**
   * <p>
   *                         The ID of the Workload estimate for which you want to modify the usage lines.
   *                 </p>
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * <p>
   *                         List of usage line amounts and usage group that you want to update in a Workload estimate identified by the usage ID.
   *                 </p>
   * @public
   */
  usage: BatchUpdateWorkloadEstimateUsageEntry[] | undefined;
}

/**
 * <p>
 *                         Represents an error that occurred when updating usage in a workload estimate.
 *                 </p>
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageError {
  /**
   * <p>
   *                         The ID of the error.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The message that describes the error.
   *                 </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>
   *                         The code associated with the error.
   *                 </p>
   * @public
   */
  errorCode?: WorkloadEstimateUpdateUsageErrorCode | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimateUsageRequest {
  /**
   * <p>
   *                         The unique identifier of the workload estimate to list usage for.
   *                 </p>
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * <p>
   *                         Filters to apply to the list of usage items.
   *                 </p>
   * @public
   */
  filters?: ListUsageFilter[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *                         The maximum number of results to return per page.
   *                 </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>
 *         Represents a complex filtering expression for cost and usage data.
 *         </p>
 * @public
 */
export interface Expression {
  /**
   * <p>
   *         A list of expressions to be combined with AND logic.
   *         </p>
   * @public
   */
  and?: Expression[] | undefined;

  /**
   * <p>
   *         A list of expressions to be combined with OR logic.
   *         </p>
   * @public
   */
  or?: Expression[] | undefined;

  /**
   * <p>
   *         An expression to be negated.
   *         </p>
   * @public
   */
  not?: Expression | undefined;

  /**
   * <p>
   *         Filters based on cost categories.
   *         </p>
   * @public
   */
  costCategories?: ExpressionFilter | undefined;

  /**
   * <p>
   *         Filters based on dimensions (e.g., service, operation).
   *         </p>
   * @public
   */
  dimensions?: ExpressionFilter | undefined;

  /**
   * <p>
   *         Filters based on resource tags.
   *         </p>
   * @public
   */
  tags?: ExpressionFilter | undefined;
}

/**
 * <p>
 *         Represents historical usage data for a specific entity.
 *         </p>
 * @public
 */
export interface HistoricalUsageEntity {
  /**
   * <p>
   *         The Amazon Web Services service code associated with the usage.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with the usage.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with the usage.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with the usage.
   *         </p>
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * <p>
   *         The time interval for the historical usage data.
   *         </p>
   * @public
   */
  billInterval: BillInterval | undefined;

  /**
   * <p>
   *         An optional filter expression to apply to the historical usage data.
   *         </p>
   * @public
   */
  filterExpression: Expression | undefined;
}

/**
 * <p>
 *                         Represents an entry in a batch operation to create bill scenario usage modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationEntry {
  /**
   * <p>
   *                         The Amazon Web Services service code for this usage modification.
   *                         This identifies the specific Amazon Web Services service to the customer as
   *                         a unique short abbreviation. For example, <code>AmazonEC2</code>
   *                         and <code>AWSKMS</code>.
   *                 </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *                         Describes the usage details of the usage line item.
   *                 </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *                         The specific operation associated with this usage modification.
   *                         Describes the specific Amazon Web Services operation that this usage line models.
   *                         For example, <code>RunInstances</code> indicates the operation of an Amazon EC2 instance.
   *                 </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *                         The Availability Zone that this usage line uses.
   *                 </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *                         A unique identifier for this entry in the batch operation.
   *                         This can be any valid string. This key is useful to identify errors
   *                         associated with any usage entry as any error is returned with this key.
   *                 </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>
   *                         An optional group identifier for the usage modification.
   *                 </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *                         The Amazon Web Services account ID to which this usage will be applied to.
   *                 </p>
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * <p>
   *                         The amount of usage you want to create for the service use you are modeling.
   *                 </p>
   * @public
   */
  amounts?: UsageAmount[] | undefined;

  /**
   * <p>
   *                         Historical usage data associated with this modification, if available.
   *                 </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * <p>
 *                         Represents a successfully created item in a batch operation for bill scenario usage modifications.
 *                 </p>
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationItem {
  /**
   * <p>
   *                         The Amazon Web Services service code for this usage modification.
   *                 </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *                         The type of usage that was modified.
   *                 </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *                         The specific operation associated with this usage modification.
   *                 </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *                         The location associated with this usage modification.
   *                 </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *                         The availability zone associated with this usage modification, if applicable.
   *                 </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *                         The unique identifier assigned to the created usage modification.
   *                 </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *                         The group identifier for the created usage modification.
   *                 </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *                         The Amazon Web Services account ID associated with the created usage modification.
   *                 </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *                         The modified usage quantities.
   *                 </p>
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * <p>
   *                         Historical usage data associated with this modification, if available.
   *                 </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;

  /**
   * <p>
   *                         The key of the successfully created entry.
   *                 </p>
   * @public
   */
  key?: string | undefined;
}

/**
 * <p>
 *         Represents an entry in a batch operation to create workload estimate usage.
 *         </p>
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageEntry {
  /**
   * <p>
   *         The Amazon Web Services service code for this usage estimate.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage being estimated.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this usage estimate.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         A unique identifier for this entry in the batch operation.
   *         </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>
   *         An optional group identifier for the usage estimate.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this usage estimate.
   *         </p>
   * @public
   */
  usageAccountId: string | undefined;

  /**
   * <p>
   *         The estimated usage amount.
   *         </p>
   * @public
   */
  amount: number | undefined;

  /**
   * <p>
   *         Historical usage data associated with this estimate, if available.
   *         </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * <p>
 *         Represents a successfully created item in a batch operation for workload estimate usage.
 *         </p>
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageItem {
  /**
   * <p>
   *         The Amazon Web Services service code for this usage estimate.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage that was estimated.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this usage estimate.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with this usage estimate.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The unique identifier assigned to the created usage estimate.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with the created usage estimate.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The group identifier for the created usage estimate.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The estimated usage quantity.
   *         </p>
   * @public
   */
  quantity?: WorkloadEstimateUsageQuantity | undefined;

  /**
   * <p>
   *         The estimated cost associated with this usage.
   *         </p>
   * @public
   */
  cost?: number | undefined;

  /**
   * <p>
   *         The currency of the estimated cost.
   *         </p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>
   *         The current status of the created usage estimate.
   *         </p>
   * @public
   */
  status?: WorkloadEstimateCostStatus | undefined;

  /**
   * <p>
   *         Historical usage data associated with this estimate, if available.
   *         </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;

  /**
   * <p>
   *         The key of the successfully created entry.
   *         </p>
   * @public
   */
  key?: string | undefined;
}

/**
 * <p>
 *         Summarizes an input usage modification for a bill estimate.
 *         </p>
 * @public
 */
export interface BillEstimateInputUsageModificationSummary {
  /**
   * <p>
   *         The Amazon Web Services service code for this usage modification.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage being modified.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this usage modification.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with this usage modification.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The availability zone associated with this usage modification, if applicable.
   *         </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *         The unique identifier of the usage modification.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The group identifier for the usage modification.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this usage modification.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The modified usage quantities.
   *         </p>
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * <p>
   *         Historical usage data associated with this modification, if available.
   *         </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * <p>
 *         Represents a usage modification item in a bill scenario.
 *         </p>
 * @public
 */
export interface BillScenarioUsageModificationItem {
  /**
   * <p>
   *         The Amazon Web Services service code for this usage modification.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage being modified.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this usage modification.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with this usage modification.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The availability zone associated with this usage modification, if applicable.
   *         </p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>
   *         The unique identifier of the usage modification.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The group identifier for the usage modification.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this usage modification.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The modified usage quantities.
   *         </p>
   * @public
   */
  quantities?: UsageQuantity[] | undefined;

  /**
   * <p>
   *         Historical usage data associated with this modification, if available.
   *         </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * <p>
 *         Represents a usage item in a workload estimate.
 *         </p>
 * @public
 */
export interface WorkloadEstimateUsageItem {
  /**
   * <p>
   *         The Amazon Web Services service code associated with this usage item.
   *         </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *         The type of usage for this item.
   *         </p>
   * @public
   */
  usageType: string | undefined;

  /**
   * <p>
   *         The specific operation associated with this usage item.
   *         </p>
   * @public
   */
  operation: string | undefined;

  /**
   * <p>
   *         The location associated with this usage item.
   *         </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>
   *         The unique identifier of this usage item.
   *         </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>
   *         The Amazon Web Services account ID associated with this usage item.
   *         </p>
   * @public
   */
  usageAccountId?: string | undefined;

  /**
   * <p>
   *         The group identifier for this usage item.
   *         </p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>
   *         The estimated usage quantity for this item.
   *         </p>
   * @public
   */
  quantity?: WorkloadEstimateUsageQuantity | undefined;

  /**
   * <p>
   *         The estimated cost for this usage item.
   *         </p>
   * @public
   */
  cost?: number | undefined;

  /**
   * <p>
   *         The currency of the estimated cost.
   *         </p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>
   *         The current status of this usage item.
   *         </p>
   * @public
   */
  status?: WorkloadEstimateCostStatus | undefined;

  /**
   * <p>
   *         Historical usage data associated with this item, if available.
   *         </p>
   * @public
   */
  historicalUsage?: HistoricalUsageEntity | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationRequest {
  /**
   * <p>
   *                         The ID of the Bill Scenario for which you want to create the modeled usage.
   *                 </p>
   * @public
   */
  billScenarioId: string | undefined;

  /**
   * <p>
   *                         List of usage that you want to model in the Bill Scenario.
   *                 </p>
   * @public
   */
  usageModifications: BatchCreateBillScenarioUsageModificationEntry[] | undefined;

  /**
   * <p>
   *                         A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *                 </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillScenarioUsageModificationResponse {
  /**
   * <p>
   *                         Returns the list of successful usage line items that were created for the Bill Scenario.
   *                 </p>
   * @public
   */
  items?: BatchCreateBillScenarioUsageModificationItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of errors reason and the usage item keys that cannot be created in the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchCreateBillScenarioUsageModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageRequest {
  /**
   * <p>
   *                         The ID of the Workload estimate for which you want to create the modeled usage.
   *                 </p>
   * @public
   */
  workloadEstimateId: string | undefined;

  /**
   * <p>
   *                         List of usage that you want to model in the Workload estimate.
   *                 </p>
   * @public
   */
  usage: BatchCreateWorkloadEstimateUsageEntry[] | undefined;

  /**
   * <p>
   *                         A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *                 </p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateWorkloadEstimateUsageResponse {
  /**
   * <p>
   *                         Returns the list of successful usage line items that were created for the Workload estimate.
   *                 </p>
   * @public
   */
  items?: BatchCreateWorkloadEstimateUsageItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of errors reason and the usage item keys that cannot be created in the Workload estimate.
   *                 </p>
   * @public
   */
  errors?: BatchCreateWorkloadEstimateUsageError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateBillScenarioUsageModificationResponse {
  /**
   * <p>
   *                         Returns the list of successful usage line items that were updated for a Bill Scenario.
   *                 </p>
   * @public
   */
  items?: BillScenarioUsageModificationItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of error reasons and usage line item IDs that could not be updated for the Bill Scenario.
   *                 </p>
   * @public
   */
  errors?: BatchUpdateBillScenarioUsageModificationError[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateWorkloadEstimateUsageResponse {
  /**
   * <p>
   *                         Returns the list of successful usage line items that were updated for a Workload estimate.
   *                 </p>
   * @public
   */
  items?: WorkloadEstimateUsageItem[] | undefined;

  /**
   * <p>
   *                         Returns the list of error reasons and usage line item IDs that could not be updated for the Workload estimate.
   *                 </p>
   * @public
   */
  errors?: BatchUpdateWorkloadEstimateUsageError[] | undefined;
}

/**
 * @public
 */
export interface ListBillEstimateInputUsageModificationsResponse {
  /**
   * <p>
   *                         The list of input usage modifications associated with the bill estimate.
   *                 </p>
   * @public
   */
  items?: BillEstimateInputUsageModificationSummary[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBillScenarioUsageModificationsResponse {
  /**
   * <p>
   *                         The list of usage modifications associated with the bill scenario.
   *                 </p>
   * @public
   */
  items?: BillScenarioUsageModificationItem[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadEstimateUsageResponse {
  /**
   * <p>
   *                         The list of usage items associated with the workload estimate.
   *                 </p>
   * @public
   */
  items?: WorkloadEstimateUsageItem[] | undefined;

  /**
   * <p>
   *                         A token to retrieve the next page of results, if any.
   *                 </p>
   * @public
   */
  nextToken?: string | undefined;
}
