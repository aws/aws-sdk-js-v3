// smithy-typescript generated code
import type {
  ApplicationType,
  AssociationStatus,
  BillingDomain,
  BillingFeature,
  BillingFeatureFilterName,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  ContractRestriction,
  ContractType,
  CreditSharingType,
  CreditStatus,
  Dimension,
  InvestmentAttestationStatus,
  InvestmentType,
  MultiplierType,
  PreferenceValue,
  SearchOption,
} from "./enums";

/**
 * A time range with a start and end time.
 *
 * @public
 */
export interface ActiveTimeRange {
  /**
   * The inclusive time range start date.
   *
   * @public
   */
  activeAfterInclusive: Date | undefined;

  /**
   * The inclusive time range end date.
   *
   * @public
   */
  activeBeforeInclusive: Date | undefined;
}

/**
 * An additional charge applied to an Enterprise Support contract.
 *
 * @public
 */
export interface AdditionalCharge {
  /**
   * A description of the additional charge.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The charge amount.
   *
   * @public
   */
  amount?: string | undefined;

  /**
   * The type of additional charge.
   *
   * @public
   */
  chargeType?: string | undefined;
}

/**
 * A recipient copied as a viewer on the executive approval request, in addition to the approver.
 *
 * @public
 */
export interface AdditionalRecipient {
  /**
   * The email address of the recipient. This value is 3–256 characters and must be a valid email address.
   *
   * @public
   */
  email: string | undefined;
}

/**
 * A monetary amount with a currency code. Used throughout the Billing API to represent credit balances, allocations, and adjustments.
 *
 * @public
 */
export interface Amount {
  /**
   * The ISO 4217 currency code for the amount (for example, `USD`).
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The amount as a decimal string (for example, `"743.21"`). Negative values represent credits that reduce a bill.
   *
   * @public
   */
  currencyAmount: string | undefined;
}

/**
 * Information about the executive approver who signs off on an investment attestation.
 *
 * @public
 */
export interface ApproverDetails {
  /**
   * The name of the approver as it appears on the contract. This value can be up to 256 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The title of the approver, such as `Chief Financial Officer`. This value can be up to 256 characters.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The email address of the approver. This value is 3–256 characters and must be a valid email address.
   *
   * @public
   */
  email: string | undefined;
}

/**
 * @public
 */
export interface AssociateContractRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract to associate with your account.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The contract ID from the contract document. It can be found in the top right corner of your contract's pages. This value confirms that you have access to the contract you are associating.
   *
   * @public
   */
  contractDocumentId: string | undefined;
}

/**
 * @public
 */
export interface AssociateContractResponse {}

/**
 * The field's information of a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message describing why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsRequest {
  /**
   * The Amazon Resource Name (ARN) of the billing view to associate source views with.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A list of ARNs of the source billing views to associate.
   *
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsResponse {
  /**
   * The ARN of the billing view that the source views were associated with.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * A quantity-based attestation value, such as a count of workloads migrated.
 *
 * @public
 */
export interface AttestationQuantity {
  /**
   * The number of units being attested, expressed as a decimal string to preserve precision. The value is digits with an optional decimal point and is 1–1000 characters.
   *
   * @public
   */
  attestationVolume: string | undefined;

  /**
   * The unit of the attestation, such as `workloads migrated`. This value is 1–1000 characters.
   *
   * @public
   */
  attestationUnit: string | undefined;
}

/**
 * The value being attested. This is a union in which exactly one member is set. Set `attestationAmount` to attest a monetary amount directly, or set `attestationQuantities` to attest one or more quantities that are converted to a value using the investment's multipliers.
 *
 * @public
 */
export type AttestationValue =
  | AttestationValue.AttestationAmountMember
  | AttestationValue.AttestationQuantitiesMember
  | AttestationValue.$UnknownMember;

/**
 * @public
 */
export namespace AttestationValue {
  /**
   * The value attested as a monetary amount. This form is valid only when the investment has no multiplier.
   *
   * @public
   */
  export interface AttestationAmountMember {
    attestationAmount: Amount;
    attestationQuantities?: never;
    $unknown?: never;
  }

  /**
   * The value attested as one or more quantities, each with its own unit. The list contains at most 50 quantities.
   *
   * @public
   */
  export interface AttestationQuantitiesMember {
    attestationAmount?: never;
    attestationQuantities: AttestationQuantity[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    attestationAmount?: never;
    attestationQuantities?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    attestationAmount: (value: Amount) => T;
    attestationQuantities: (value: AttestationQuantity[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An allocation of an investment disbursement to a specific recipient account. The account is the target account that receives the investment, not your account.
 *
 * @public
 */
export interface InvestmentDistribution {
  /**
   * The recipient Amazon Web Services account ID that receives this portion of the investment. This must be one of the eligible investment accounts on the contract.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The monetary value allocated to the recipient account.
   *
   * @public
   */
  investmentAmount: Amount | undefined;
}

/**
 * The details of an investment attestation submission, including the value being attested and how the resulting investment is distributed.
 *
 * @public
 */
export interface AttestationDetails {
  /**
   * The value being attested, expressed as either a monetary amount or one or more quantities. Exactly one form is set.
   *
   * @public
   */
  attestationValue: AttestationValue | undefined;

  /**
   * The distribution of the resulting investment across the eligible investment accounts on the contract. If you omit this value, the full investment is allocated to the single eligible investment account on the contract. This value is required when multiple investment accounts are eligible. When you provide this value, the sum of all distributions must equal the resulting monetary investment value (the attested amount, or the value computed from the attested quantities using the investment multipliers). The list contains at most 200 distributions.
   *
   * @public
   */
  investmentDistributions?: InvestmentDistribution[] | undefined;
}

/**
 * @public
 */
export interface CancelContractualInvestmentAttestationRequest {
  /**
   * The identifier of the investment attestation to cancel.
   *
   * @public
   */
  attestationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contract that contains the attested investment.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The reason for the cancellation. This value can be 1 to 80 characters.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CancelContractualInvestmentAttestationResponse {}

/**
 * The Cost Categories values used for filtering the costs.
 *
 * @public
 */
export interface CostCategoryValues {
  /**
   * The unique name of the Cost Category.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The specific value of the Cost Category.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * The metadata that you can use to filter and group your results.
 *
 * @public
 */
export interface DimensionValues {
  /**
   * The names of the metadata types that you can use to filter and group your results.
   *
   * @public
   */
  key: Dimension | undefined;

  /**
   * The metadata values that you can use to filter and group your results.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * The values that are available for a tag.
 *
 * @public
 */
export interface TagValues {
  /**
   * The key for the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The specific value of the tag.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Specifies a time range with inclusive begin and end dates.
 *
 * @public
 */
export interface TimeRange {
  /**
   * The inclusive start date of the time range.
   *
   * @public
   */
  beginDateInclusive?: Date | undefined;

  /**
   * The inclusive end date of the time range.
   *
   * @public
   */
  endDateInclusive?: Date | undefined;
}

/**
 * See [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html). Billing view only supports `LINKED_ACCOUNT`, `Tags`, and `CostCategories`.
 *
 * @public
 */
export interface Expression {
  /**
   * The specific `Dimension` to use for `Expression`.
   *
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * The specific `Tag` to use for `Expression`.
   *
   * @public
   */
  tags?: TagValues | undefined;

  /**
   * The filter that's based on `CostCategory` values.
   *
   * @public
   */
  costCategories?: CostCategoryValues | undefined;

  /**
   * Specifies a time range filter for the billing view data.
   *
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value that's associated with the tag.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewRequest {
  /**
   * The name of the billing view.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the billing view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of billing views used as the data source for the custom billing view.
   *
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * See [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html). Billing view only supports `LINKED_ACCOUNT`, `Tags`, and `CostCategories`.
   *
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key value map specifying tags associated to the billing view being created.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewResponse {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the billing view was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateContractualInvestmentAttestationRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract that contains the investment being attested.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The identifier of the investment summary being attested. This is the parent to the investmentId.
   *
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * The identifier of the investment (outcome) being attested.
   *
   * @public
   */
  investmentId: string | undefined;

  /**
   * The contract ID from the contract document, located in the top-right corner of the private pricing contract pages. This value confirms that you have access to the contract.
   *
   * @public
   */
  contractDocumentId: string | undefined;

  /**
   * The details of the executive who authorized the attestation, under the terms of the private pricing contract. The executive receives a click-to-accept email to confirm the attestation.
   *
   * @public
   */
  approverDetails: ApproverDetails | undefined;

  /**
   * The date on which the investment is disbursed to the investment accounts. The disbursement date is subject to review timelines.
   *
   * @public
   */
  investmentDisbursedAt?: Date | undefined;

  /**
   * The details of the attestation, including the value being claimed and how the resulting investment is distributed across investment accounts.
   *
   * @public
   */
  attestationDetails: AttestationDetails | undefined;

  /**
   * The email addresses to copy as viewers on the executive approval request.
   *
   * @public
   */
  additionalRecipients?: AdditionalRecipient[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry completes without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContractualInvestmentAttestationResponse {
  /**
   * The identifier of the submitted attestation.
   *
   * @public
   */
  attestationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewRequest {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * If set to true, forces deletion of the billing view even if it has derived resources (e.g. other billing views or budgets). Use with caution as this may break dependent resources.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewResponse {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateContractRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract to disassociate from your account.
   *
   * @public
   */
  contractArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateContractResponse {}

/**
 * @public
 */
export interface DisassociateSourceViewsRequest {
  /**
   * The Amazon Resource Name (ARN) of the billing view to disassociate source views from.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A list of ARNs of the source billing views to disassociate.
   *
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceViewsResponse {
  /**
   * The ARN of the billing view that the source views were disassociated from.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * A filter that narrows the set of preferences returned by `GetBillingPreferences`.
 *
 * @public
 */
export interface BillingFeatureFilter {
  /**
   * The filter name. Currently the only supported value is `PREFERENCE_KEY`.
   *
   * @public
   */
  name?: BillingFeatureFilterName | undefined;

  /**
   * The filter values to match. For `PREFERENCE_KEY`, supply 1 to 10 preference key values to match.
   *
   * @public
   */
  value?: string[] | undefined;
}

/**
 * @public
 */
export interface GetBillingPreferencesRequest {
  /**
   * Pagination token from a previous response. Pass the value returned in `nextToken` to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to return per page. Range: 1 to 50. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The feature to retrieve. Specify exactly one value. Valid values: `BILLING_ALERTS`, `RI_SHARING`, `RI_SHARING_HISTORY`, `CREDIT_SHARING`, `CREDIT_SHARING_HISTORY`, `CREDIT_LEVEL_SHARING`, `CREDIT_PREFERENCE_OPTIONS`.
   *
   * @public
   */
  features: BillingFeature[] | undefined;

  /**
   * Filters to narrow results. Specify exactly one filter when supplied. The supported filter name is `PREFERENCE_KEY`, which accepts 1 to 10 values to match preference keys.
   *
   * @public
   */
  filters?: BillingFeatureFilter[] | undefined;
}

/**
 * A specific billing period identified by year and month.
 *
 * @public
 */
export interface BillingPeriod {
  /**
   * The four-digit year of the billing period.
   *
   * @public
   */
  year: number | undefined;

  /**
   * The month of the billing period as an integer between 1 and 12.
   *
   * @public
   */
  month: number | undefined;
}

/**
 * A single billing preference entry returned by `GetBillingPreferences`.
 *
 * @public
 */
export interface BillingPreferenceSummary {
  /**
   * The feature this preference belongs to.
   *
   * @public
   */
  feature: BillingFeature | undefined;

  /**
   * The preference key. Format depends on the feature.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The preference value. Valid values: `ENABLED` or `DISABLED`.
   *
   * @public
   */
  value: PreferenceValue | undefined;

  /**
   * The display name of the account. Populated together with `accountId`; `null` otherwise.
   *
   * @public
   */
  accountName?: string | undefined;

  /**
   * The associated Amazon Web Services account ID. Populated for account-list keys; `null` otherwise.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The billing period associated with the preference change. Populated only for the history features `RI_SHARING_HISTORY` and `CREDIT_SHARING_HISTORY`.
   *
   * @public
   */
  billingPeriod?: BillingPeriod | undefined;
}

/**
 * @public
 */
export interface GetBillingPreferencesResponse {
  /**
   * The list of preference entries matching the request.
   *
   * @public
   */
  billingPreferences: BillingPreferenceSummary[] | undefined;

  /**
   * Pagination token. Present when more pages are available; `null` when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBillingViewRequest {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Represents the health status of a billing view, including a status code and optional reasons for the status.
 *
 * @public
 */
export interface BillingViewHealthStatus {
  /**
   * The current health status code of the billing view.
   *
   * @public
   */
  statusCode?: BillingViewStatus | undefined;

  /**
   * A list of reasons explaining the current health status, if applicable.
   *
   * @public
   */
  statusReasons?: BillingViewStatusReason[] | undefined;
}

/**
 * The metadata associated to the billing view.
 *
 * @public
 */
export interface BillingViewElement {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The account name of the billing view.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the billing view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of billing group.
   *
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * The account owner of the billing view.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view.
   *
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * See [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html). Billing view only supports `LINKED_ACCOUNT`, `Tags`, and `CostCategories`.
   *
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * The time when the billing view was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the billing view was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The number of billing views that use this billing view as a source.
   *
   * @public
   */
  derivedViewCount?: number | undefined;

  /**
   * The number of source views associated with this billing view.
   *
   * @public
   */
  sourceViewCount?: number | undefined;

  /**
   * The timestamp of when the billing view definition was last updated.
   *
   * @public
   */
  viewDefinitionLastUpdatedAt?: Date | undefined;

  /**
   * The current health status of the billing view.
   *
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface GetBillingViewResponse {
  /**
   * The billing view element associated with the specified ARN.
   *
   * @public
   */
  billingView: BillingViewElement | undefined;
}

/**
 * @public
 */
export interface GetContractInformationRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract to retrieve information about.
   *
   * @public
   */
  contractArn: string | undefined;
}

/**
 * A time period bounded by an inclusive start date and an inclusive end date.
 *
 * @public
 */
export interface Interval {
  /**
   * The start date of the interval. This date is included in the interval.
   *
   * @public
   */
  startDateInclusive: Date | undefined;

  /**
   * The end date of the interval. This date is included in the interval.
   *
   * @public
   */
  endDateInclusive: Date | undefined;
}

/**
 * A legal entity on a private pricing contract. It can be found on your contract's signature page.
 *
 * @public
 */
export interface LegalEntity {
  /**
   * The name of the legal entity as it appears on the contract document. This value can be up to 256 characters.
   *
   * @public
   */
  legalEntityName: string | undefined;
}

/**
 * The details of a private pricing addendum contract.
 *
 * @public
 */
export interface PrivatePricingAddendum {
  /**
   * The Amazon Resource Name (ARN) of the private pricing addendum.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The contract term period of the private pricing addendum, expressed as an interval with an inclusive start date and an inclusive end date.
   *
   * @public
   */
  contractTerm: Interval | undefined;

  /**
   * The payer accounts that are eligible under the private pricing addendum. The list contains at most 100 account IDs.
   *
   * @public
   */
  eligiblePayerAccounts: string[] | undefined;

  /**
   * The accounts that are eligible to receive investments under the private pricing addendum. An `InvestmentDistribution` must target one of these accounts. The list contains at most 100 account IDs.
   *
   * @public
   */
  investmentAccounts: string[] | undefined;

  /**
   * The legal entities on the private pricing addendum. The list contains at most 10 legal entities.
   *
   * @public
   */
  legalEntities: LegalEntity[] | undefined;

  /**
   * The restrictions that limit the self-service actions you can take on the private pricing addendum. An empty or absent value indicates that no restrictions apply. The list contains at most 10 restrictions.
   *
   * @public
   */
  contractRestrictions?: ContractRestriction[] | undefined;
}

/**
 * The details of a contract returned by `GetContractInformation`. This is a union in which exactly one member is set, corresponding to the contract type. For a private pricing addendum, the `privatePricingAddendum` member is set. Check which member is present to determine the contract type.
 *
 * @public
 */
export type ContractDetails =
  | ContractDetails.PrivatePricingAddendumMember
  | ContractDetails.$UnknownMember;

/**
 * @public
 */
export namespace ContractDetails {
  /**
   * The details of a private pricing addendum contract. This member is set when the contract is a private pricing addendum.
   *
   * @public
   */
  export interface PrivatePricingAddendumMember {
    privatePricingAddendum: PrivatePricingAddendum;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    privatePricingAddendum?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    privatePricingAddendum: (value: PrivatePricingAddendum) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetContractInformationResponse {
  /**
   * The contract details such as term (duration), eligible payer accounts, investment accounts, and legal entities.
   *
   * @public
   */
  contract: ContractDetails | undefined;
}

/**
 * @public
 */
export interface GetCreditAllocationHistoryRequest {
  /**
   * The Amazon Web Services account ID whose allocation history to retrieve. Must be a 12-digit numeric string.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * Filters the result to a single credit. When omitted, returns allocation entries for all credits.
   *
   * @public
   */
  creditId?: number | undefined;

  /**
   * Inclusive start date as Unix epoch seconds. Must be on or before `endDate`. The range from `startDate` to `endDate` cannot exceed 24 billing months.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * Inclusive end date as Unix epoch seconds.
   *
   * @public
   */
  endDate: Date | undefined;

  /**
   * Pagination token from a previous response. Pass the value returned in `nextToken` to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of records to return per page. Range: 1 to 1000. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A single entry in the credit allocation history, representing how a credit was applied to a specific service during a billing month.
 *
 * @public
 */
export interface CreditAllocationHistoryEntry {
  /**
   * The identifier of the credit that was applied.
   *
   * @public
   */
  creditId: string | undefined;

  /**
   * The amount of credit applied. Negative values represent credits that reduced the bill.
   *
   * @public
   */
  creditAmount: Amount | undefined;

  /**
   * A human-readable description of the credit allocation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services account the credit was applied to.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Amazon Web Services service the credit was applied to.
   *
   * @public
   */
  appliedServiceName: string | undefined;

  /**
   * The billing month of the application in `YYYY-MM` format.
   *
   * @public
   */
  billingMonth: string | undefined;

  /**
   * `true` when the entry was applied to an in-flight bill that has not yet been finalized.
   *
   * @public
   */
  isEstimatedBill: boolean | undefined;
}

/**
 * @public
 */
export interface GetCreditAllocationHistoryResponse {
  /**
   * Allocation entries sorted by `billingMonth` in descending order.
   *
   * @public
   */
  creditAllocationHistoryList?: CreditAllocationHistoryEntry[] | undefined;

  /**
   * `true` when data could not be retrieved for one or more billing months. The `failedMonths` field lists which months are missing.
   *
   * @public
   */
  partialResults: boolean | undefined;

  /**
   * Billing months in `YYYY-MM` format that failed to return data. Non-empty only when `partialResults` is `true`.
   *
   * @public
   */
  failedMonths?: string[] | undefined;

  /**
   * Pagination token. Present when more pages are available; `null` when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCreditsRequest {
  /**
   * The Amazon Web Services account ID. Must be a 12-digit numeric string.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The start date for the credit period as Unix epoch seconds. Must be a past date that is not more than one year before the current date.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The end date for the credit period as Unix epoch seconds. Must not be a future date and must be on or after `startDate`. Defaults to the current date when omitted.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * When `true` and the caller is the management account, the response aggregates credits across the entire consolidated billing family. When `false` or omitted, returns only credits for the specified `accountId`.
   *
   * @public
   */
  payerAccountFlag?: boolean | undefined;
}

/**
 * Detailed information about an Amazon Web Services credit, including its identifier, type, monetary amounts, applicable products, sharing configuration, and current enabled status.
 *
 * @public
 */
export interface CreditData {
  /**
   * The unique identifier for the credit.
   *
   * @public
   */
  creditId: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the credit.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The type of credit. Examples: `Promotion`, `Refund`, `TrueUp`.
   *
   * @public
   */
  creditType: string | undefined;

  /**
   * The initial amount of the credit when it was issued.
   *
   * @public
   */
  initialAmount: Amount | undefined;

  /**
   * The unused balance of the credit.
   *
   * @public
   */
  remainingAmount: Amount | undefined;

  /**
   * The estimated remaining balance, including in-flight (open) bills that have not yet been finalized.
   *
   * @public
   */
  estimatedAmount?: Amount | undefined;

  /**
   * The names of Amazon Web Services services this credit applies to.
   *
   * @public
   */
  applicableProductNames?: string[] | undefined;

  /**
   * A human-readable description of the credit.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The date the credit becomes valid, as Unix epoch seconds.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The date the credit expires, as Unix epoch seconds.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The date the credit balance reached zero, as Unix epoch seconds.
   *
   * @public
   */
  exhaustDate?: Date | undefined;

  /**
   * When the credit is applied during bill computation. Valid values: `BEFORE_CROSS_SERVICE_DISCOUNTS`, `AFTER_DISCOUNTS`.
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * The Amazon Web Services account IDs entitled to apply this credit.
   *
   * @public
   */
  shareableAccounts?: string[] | undefined;

  /**
   * Whether the owning account has account-level credit sharing turned on.
   *
   * @public
   */
  accountHasCreditSharingEnabled?: boolean | undefined;

  /**
   * The display configuration for the credit in the Amazon Web Services Billing console.
   *
   * @public
   */
  creditConsoleVisibility?: string | undefined;

  /**
   * The sharing configuration for the credit. Valid values: `DEFAULT`, `DISABLED`, `CUSTOM`, `COST_CATEGORY_RULE`.
   *
   * @public
   */
  creditSharingType?: CreditSharingType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Cost Category controlling the credit's sharing scope. Present only when `creditSharingType` is `COST_CATEGORY_RULE`.
   *
   * @public
   */
  costCategoryArn?: string | undefined;

  /**
   * The rule name within the Cost Category. Present only when `creditSharingType` is `COST_CATEGORY_RULE`.
   *
   * @public
   */
  ruleName?: string | undefined;

  /**
   * Whether the credit participates in billing runs. Valid values: `ENABLED`, `DISABLED`.
   *
   * @public
   */
  creditStatus?: CreditStatus | undefined;

  /**
   * Restricts which purchase types this credit applies to. When `null` or omitted, the credit applies to all purchase types.
   *
   * @public
   */
  purchaseTypeApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface GetCreditsResponse {
  /**
   * The list of credits matching the request. Returns an empty list when no credits exist.
   *
   * @public
   */
  credits?: CreditData[] | undefined;
}

/**
 * The request structure for GetEnterpriseSupportChargeSummary.
 *
 * @public
 */
export interface GetEnterpriseSupportChargeSummaryRequest {
  /**
   * The billing month in YYYY-MM format. This must be a month in the past.
   *
   * @public
   */
  billingMonth: string | undefined;
}

/**
 * A tier within an Enterprise Support pricing plan.
 *
 * @public
 */
export interface PricingPlanTier {
  /**
   * The minimum spend threshold for this tier.
   *
   * @public
   */
  tierMinimum: string | undefined;

  /**
   * The maximum spend threshold for this tier.
   *
   * @public
   */
  tierMaximum?: string | undefined;

  /**
   * The base charge for this tier.
   *
   * @public
   */
  baseCharge: string | undefined;

  /**
   * The additional percentage applied to aggregate charges in this tier.
   *
   * @public
   */
  additionalPercentageOfAggregateCharges: string | undefined;

  /**
   * The adjustment applied to aggregate charges.
   *
   * @public
   */
  aggregateChargesAdjustment: string | undefined;

  /**
   * Whether the tier charges are calculated incrementally.
   *
   * @public
   */
  incremental: boolean | undefined;

  /**
   * The increment amount for incremental tier calculations.
   *
   * @public
   */
  increment?: string | undefined;

  /**
   * The charge per increment.
   *
   * @public
   */
  incrementCharge?: string | undefined;
}

/**
 * A pricing plan for Enterprise Support billing.
 *
 * @public
 */
export interface PricingPlan {
  /**
   * The unique identifier for the pricing plan.
   *
   * @public
   */
  pricingPlanId?: string | undefined;

  /**
   * The name of the pricing plan.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the pricing plan.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The start date of the pricing plan.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The end date of the pricing plan.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The discount percentage applied by this pricing plan.
   *
   * @public
   */
  planDiscountPercent?: string | undefined;

  /**
   * Whether the discount applies to the minimum Support charge.
   *
   * @public
   */
  discountAppliesToMinimumCharge?: boolean | undefined;

  /**
   * The minimum Support charge amount for this pricing plan.
   *
   * @public
   */
  minimumCharge?: string | undefined;

  /**
   * Whether the pricing plan uses tiered pricing.
   *
   * @public
   */
  tiered?: string | undefined;

  /**
   * The pricing tiers within this plan.
   *
   * @public
   */
  tiers: PricingPlanTier[] | undefined;
}

/**
 * The response structure for GetEnterpriseSupportChargeSummary.
 *
 * @public
 */
export interface GetEnterpriseSupportChargeSummaryResponse {
  /**
   * The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile.
   *
   * @public
   */
  payerAccountId: string | undefined;

  /**
   * The billing month in YYYY-MM format. This must be a month in the past.
   *
   * @public
   */
  billingMonth: string | undefined;

  /**
   * The start date of the billing period.
   *
   * @public
   */
  billingPeriodStartDate: Date | undefined;

  /**
   * The end date of the billing period.
   *
   * @public
   */
  billingPeriodEndDate: Date | undefined;

  /**
   * Specifies whether the Support charge amount is estimated. When false, the charge amount is finalized.
   *
   * @public
   */
  isEstimated: boolean | undefined;

  /**
   * The date the bill was generated.
   *
   * @public
   */
  billDate: Date | undefined;

  /**
   * The Support charge amount for the account.
   *
   * @public
   */
  supportCharge: string | undefined;

  /**
   * The total Support charge amount for all accounts in the Support profile.
   *
   * @public
   */
  totalSupportCharge: string | undefined;

  /**
   * The support discount amount.
   *
   * @public
   */
  supportDiscount: string | undefined;

  /**
   * The total Support-eligible Spend from all accounts in the Support profile. This includes eligible spend from usage of Amazon Web Services, Reserved Instances, and Savings Plans.
   *
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * The total Support-eligible spend from usage of Amazon Web Services from all accounts in the Support profile.
   *
   * @public
   */
  totalSupportEligibleUsageSpend: string | undefined;

  /**
   * The total Support-eligible Reserved Instance spend from all accounts in the Support profile.
   *
   * @public
   */
  totalSupportEligibleReservedInstanceSpend: string | undefined;

  /**
   * The total Support-eligible Savings Plan spend from all accounts in the Support profile.
   *
   * @public
   */
  totalSupportEligibleSavingsPlanSpend: string | undefined;

  /**
   * The percentage applied to the total Support-eligible spend to calculate the total Support charge across all accounts in the Support profile.
   *
   * @public
   */
  supportChargePercentage: string | undefined;

  /**
   * The effective pricing plan used for the support charge calculation.
   *
   * @public
   */
  supportEffectivePricingPlan: PricingPlan | undefined;
}

/**
 * The request structure for GetEnterpriseSupportContractDetails.
 *
 * @public
 */
export interface GetEnterpriseSupportContractDetailsRequest {
  /**
   * The billing month in YYYY-MM format. This must be a month in the past.
   *
   * @public
   */
  billingMonth: string | undefined;
}

/**
 * An account that is charged all or a portion of the total Support charge and the percentage of the charge allocated to it.
 *
 * @public
 */
export interface ChargeAccount {
  /**
   * The account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The percentage of the total Support charge allocated to this account. This is 0.0 when supportAllocationMethod = Proportional.
   *
   * @public
   */
  chargePercentage: string | undefined;
}

/**
 * An account that is covered by the Enterprise Support contract.
 *
 * @public
 */
export interface ContractAccount {
  /**
   * The account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * When true, Support charges are calculated on charges before private discounts. When false, they are calculated after private discounts.
   *
   * @public
   */
  isGdn: boolean | undefined;
}

/**
 * The response structure for GetEnterpriseSupportContractDetails.
 *
 * @public
 */
export interface GetEnterpriseSupportContractDetailsResponse {
  /**
   * When true, the Enterprise Support contract is active. When false, the Enterprise Support Contract is inactive.
   *
   * @public
   */
  isContractActive?: boolean | undefined;

  /**
   * The method used to distribute the total Support charge amount across each account in the Support profile. Valid values: Proportional, Fixed_Percentage. Proportional means support charges are distributed to each account in proportion to its eligible Spend. Fixed_Percentage means support charges are distributed across accounts according to pre-configured percentages from the contract.
   *
   * @public
   */
  supportAllocationMethod: string | undefined;

  /**
   * When supportReservedInstanceTreatmentMethod = AmortizedCustom, only amortized fees for Reserved Instances purchased on or after this date are included in the calculation. This field is Null for all other treatment methods.
   *
   * @public
   */
  supportReservedInstanceAmortizationStartDate?: Date | undefined;

  /**
   * The method used to include Reserved Instance (RI) fees in the Enterprise Support charge calculation. Valid values: None (RI fees excluded from Support-eligible spend), Upfront (full upfront RI fees included in month of purchase), Amortized (RI fees spread over commitment term for RIs purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for RIs purchased on or after a specified custom start date), AmortizedAll (RI fees amortized for all active RIs including those purchased before Support subscription started).
   *
   * @public
   */
  supportReservedInstanceTreatmentMethod?: string | undefined;

  /**
   * This is applicable when supportSavingsPlansTreatmentMethod = Amortized and is Null for all other methods. It shows the start date from which Savings Plan fees are included in Support Eligible Spend.
   *
   * @public
   */
  supportSavingsPlansAmortizationStartDate?: Date | undefined;

  /**
   * The method used to include Savings Plans fees in Enterprise Support charge calculations. Valid values: None (Savings Plan fees excluded from Support-eligible spend), Upfront (full upfront Savings Plan fees included in month of purchase), Amortized (Savings Plan fees spread over commitment term for Savings Plans purchased on or after Support subscription start date), AmortizedCustom (same as Amortized but only for Savings Plans purchased on or after a specified custom start date), AmortizedAll (Savings Plan fees amortized for all active Savings Plans including those purchased before Support subscription started).
   *
   * @public
   */
  supportSavingsPlansTreatmentMethod?: string | undefined;

  /**
   * The start date for accounts subscribed or unsubscribed to Support billing during the billing month.
   *
   * @public
   */
  supportProrateStartDate?: Date | undefined;

  /**
   * The list of accounts covered by the Enterprise Support contract.
   *
   * @public
   */
  contractPayerAccountIds: ContractAccount[] | undefined;

  /**
   * The list of payer accounts and their charge allocation percentages.
   *
   * @public
   */
  chargedPayerAccountIds: ChargeAccount[] | undefined;

  /**
   * Any Additional support charges applied to the contract.
   *
   * @public
   */
  additionalSupportCharge?: AdditionalCharge[] | undefined;

  /**
   * Any Additional support-eligible usage spend charges.
   *
   * @public
   */
  additionalSupportEligibleUsageSpend?: AdditionalCharge[] | undefined;

  /**
   * The pricing plans associated with this Enterprise Support contract.
   *
   * @public
   */
  pricingPlans: PricingPlan[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The resource-based policy document attached to the resource in `JSON` format.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * A structure that defines how to search for string values. You can specify a search option and the value to search for.
 *
 * @public
 */
export interface StringSearch {
  /**
   * The type of search operation to perform on the string value. Determines how the search value is matched against the target field.
   *
   * @public
   */
  searchOption: SearchOption | undefined;

  /**
   * The string value to use in the search operation. This value is compared against the target field using the specified search option.
   *
   * @public
   */
  searchValue: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsRequest {
  /**
   * The time range for the billing views listed. `PRIMARY` billing view is always listed. `BILLING_GROUP` billing views are listed for time ranges when the associated billing group resource in Billing Conductor is active. The time range must be within one calendar month.
   *
   * @public
   */
  activeTimeRange?: ActiveTimeRange | undefined;

  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arns?: string[] | undefined;

  /**
   * The type of billing view.
   *
   * @public
   */
  billingViewTypes?: BillingViewType[] | undefined;

  /**
   * Filters the list of billing views by name. You can specify search criteria to match billing view names based on the search option provided.
   *
   * @public
   */
  names?: StringSearch[] | undefined;

  /**
   * The list of owners of the billing view.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * Filters the results to include only billing views that use the specified account as a source.
   *
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * The maximum number of billing views to retrieve. Default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that is used on subsequent calls to list billing views.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A representation of a billing view.
 *
 * @public
 */
export interface BillingViewListElement {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A list of names of the Billing view.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the billing view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of owners of the Billing view.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view.
   *
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * The type of billing view.
   *
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * The current health status of the billing view.
   *
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsResponse {
  /**
   * A list of `BillingViewListElement` retrieved.
   *
   * @public
   */
  billingViews: BillingViewListElement[] | undefined;

  /**
   * The pagination token to use on subsequent calls to list billing views.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies a time range with an inclusive begin date and an exclusive end date.
 *
 * @public
 */
export interface BillingViewSegmentTimeRange {
  /**
   * The inclusive start of the time range. This value can't be in the future.
   *
   * @public
   */
  beginDateInclusive?: Date | undefined;

  /**
   * The exclusive end of the time range. This value must be after `beginDateInclusive`.
   *
   * @public
   */
  endDateExclusive?: Date | undefined;
}

/**
 * @public
 */
export interface ListBillingViewSegmentsRequest {
  /**
   * The billing period to query. If you don't provide a time range, the current billing period, which is the calendar month in UTC, is used.
   *
   * @public
   */
  timeRange?: BillingViewSegmentTimeRange | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the billing view to query. If you don't provide an ARN, the caller's `PRIMARY` billing view is used. The ARN must reference a primary billing view. Custom billing views aren't supported.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of entries a paginated response contains. Valid values range from 1 to 100. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that is used on subsequent calls to list billing view segments.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A billing view segment. A segment represents a time range during which the billing domain and account relationships for a billing view remained unchanged.
 *
 * @public
 */
export interface BillingViewSegmentsListElement {
  /**
   * The billing domain for this segment. The following values are valid:
   *
   * - `PRO_FORMA` - Data shaped by Billing Conductor that doesn't reflect the final charges owed to Amazon Web Services.
   * - `BILLABLE` - Data that represents the final charges owed to Amazon Web Services.
   *
   * @public
   */
  domain?: BillingDomain | undefined;

  /**
   * The time range during which this segment is effective.
   *
   * @public
   */
  timeRange?: BillingViewSegmentTimeRange | undefined;

  /**
   * The billing transfer account ID. The response includes this field only when the caller is a billing transfer source account. The response omits this field for billing group billing views.
   *
   * @public
   */
  billingTransferAccountId?: string | undefined;

  /**
   * The management account ID of the organization. The response includes this field for organization member accounts.
   *
   * @public
   */
  managementAccountId?: string | undefined;

  /**
   * The billing group primary account ID. The response includes this field for billing group members. Compare this value to your own account ID to determine whether you are the primary account.
   *
   * @public
   */
  billingGroupPrimaryAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewSegmentsResponse {
  /**
   * A list of billing view segments. Each segment covers a portion of the requested time period. The response omits hidden segments, so the segments it returns might not cover the entire requested time period.
   *
   * @public
   */
  items: BillingViewSegmentsListElement[] | undefined;

  /**
   * The pagination token that is used on subsequent calls to list billing view segments.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the billing month and optional filters used to retrieve Business Support charges broken down by linked account.
 *
 * @public
 */
export interface ListBusinessSupportAccountChargesRequest {
  /**
   * The billing month to retrieve Business Support charges for, in YYYY-MM format. You can request the current month (charges will be estimated) or a past month (charges will be finalized).
   *
   * @public
   */
  billingMonth: string | undefined;

  /**
   * The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The maximum number of results to return per page. Default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A discount applied to a Business Support account charge, including the discount amount, percentage, type, and source.
 *
 * @public
 */
export interface BusinessSupportDiscount {
  /**
   * The discount amount applied to the Business Support charge. This value is negative, representing a reduction in the charge.
   *
   * @public
   */
  discountAmount?: string | undefined;

  /**
   * The discount percentage applied to the Business Support charge, expressed as a decimal (for example, `0.12` for a 12% discount).
   *
   * @public
   */
  discountPercentage?: string | undefined;

  /**
   * The type of discount applied. Valid values: `Distributor_Discount` (a discount applied through a distributor arrangement), `SPP_Discount` (a discount applied through the Solution Provider Program).
   *
   * @public
   */
  discountType?: string | undefined;

  /**
   * The source or program through which the discount was applied.
   *
   * @public
   */
  discountSource?: string | undefined;
}

/**
 * A service-level spend entry contributing to Business Support eligible spend.
 *
 * @public
 */
export interface BusinessSupportServiceSpend {
  /**
   * The name of the Amazon Web Services service contributing to the Support-eligible spend.
   *
   * @public
   */
  contributingService: string | undefined;

  /**
   * The type of the line item. Valid values: `Usage`.
   *
   * @public
   */
  itemType: string | undefined;

  /**
   * A human-readable description of the service spend entry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Support-eligible spend amount for this service.
   *
   * @public
   */
  chargeAmount: string | undefined;

  /**
   * The ISO 4217 currency code for the charge amount (for example, `USD`).
   *
   * @public
   */
  currency: string | undefined;
}

/**
 * A tier-level charge within a Business Support pricing plan. Business Support uses tiered pricing where different percentage rates apply to different ranges of Support-eligible spend.
 *
 * @public
 */
export interface BusinessSupportTierCharge {
  /**
   * A human-readable description of the pricing tier, including the spend range and percentage rate applied.
   *
   * @public
   */
  tierDescription: string | undefined;

  /**
   * The percentage rate applied to Support-eligible spend within this pricing tier.
   *
   * @public
   */
  tierRate: string | undefined;

  /**
   * The amount of Support-eligible spend that falls within this pricing tier.
   *
   * @public
   */
  usageSlice: string | undefined;

  /**
   * The Business Support charge amount calculated for this pricing tier.
   *
   * @public
   */
  tierCharge: string | undefined;

  /**
   * The start date of the charge period for this tier charge.
   *
   * @public
   */
  chargePeriodStartDate?: Date | undefined;

  /**
   * The end date of the charge period for this tier charge.
   *
   * @public
   */
  chargePeriodEndDate?: Date | undefined;
}

/**
 * Business Support charges for a linked account.
 *
 * @public
 */
export interface BusinessSupportAccountCharge {
  /**
   * The linked account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Support plan name for this account. Valid values: `AWSSupportBusiness` (Business Support plan), `AWSSupportDeveloper` (Developer Support plan), `AWSSupportEssential` (Basic Support plan).
   *
   * @public
   */
  supportPlanName: string | undefined;

  /**
   * The total Business Support charge amount for this account in the billing month.
   *
   * @public
   */
  totalCharge: string | undefined;

  /**
   * The total Support-eligible spend used as the basis for calculating the Business Support charge for this account.
   *
   * @public
   */
  totalUsageBasis: string | undefined;

  /**
   * The tier-level charges that make up the total Business Support charge for this account. Each tier represents a spend range with its own rate.
   *
   * @public
   */
  tierCharges?: BusinessSupportTierCharge[] | undefined;

  /**
   * The discount applied to the Business Support charge for this account, if any. This field is absent when no discount applies.
   *
   * @public
   */
  supportDiscount?: BusinessSupportDiscount | undefined;

  /**
   * The Support-eligible spend broken down by contributing service for this account.
   *
   * @public
   */
  supportEligibleSpendByService?: BusinessSupportServiceSpend[] | undefined;
}

/**
 * Contains the Business Support charges broken down by linked account for the specified billing month, along with account and spend totals.
 *
 * @public
 */
export interface ListBusinessSupportAccountChargesResponse {
  /**
   * The billing month for the returned charges, in YYYY-MM format.
   *
   * @public
   */
  billingMonth: string | undefined;

  /**
   * Specifies whether the Support charge amount is estimated. When false, the charge amount is finalized.
   *
   * @public
   */
  isEstimated: boolean | undefined;

  /**
   * The total Business Support charge amount for all accounts in the billing month.
   *
   * @public
   */
  totalSupportCharge: string | undefined;

  /**
   * The total Support-eligible spend from all accounts in the billing month. This includes eligible spend from usage of Amazon Web Services.
   *
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * The total number of linked accounts with Business Support charges in the billing month.
   *
   * @public
   */
  accountCount: number | undefined;

  /**
   * The list of Business Support charges per linked account.
   *
   * @public
   */
  accountCharges: BusinessSupportAccountCharge[] | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the optional filters used to retrieve the history of Business Support subscription contracts across accounts.
 *
 * @public
 */
export interface ListBusinessSupportSubscriptionHistoryRequest {
  /**
   * The billing month to retrieve subscription contracts for, in YYYY-MM format. If you don't specify a value, defaults to the current month.
   *
   * @public
   */
  billingMonth?: string | undefined;

  /**
   * The account ID to filter results to a specific account. If you don't specify a value, the response includes subscription history for all accounts.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The start date to filter subscription contracts from.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The end date to filter subscription contracts to.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The maximum number of results to return per page. Default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A Business Support subscription contract for an account.
 *
 * @public
 */
export interface BusinessSupportSubscriptionContract {
  /**
   * The account ID associated with this subscription contract.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The name of the Support plan for this subscription contract. Valid values: `AWSSupportBusiness` (Business Support plan), `AWSSupportDeveloper` (Developer Support plan), `AWSSupportEssential` (Basic Support plan).
   *
   * @public
   */
  planName: string | undefined;

  /**
   * The start date of the subscription contract.
   *
   * @public
   */
  contractStartDate: Date | undefined;

  /**
   * The end date of the subscription contract.
   *
   * @public
   */
  contractEndDate: Date | undefined;
}

/**
 * Contains the list of Business Support subscription contracts that match the request filters.
 *
 * @public
 */
export interface ListBusinessSupportSubscriptionHistoryResponse {
  /**
   * The list of Business Support subscription contracts.
   *
   * @public
   */
  subscriptionContracts: BusinessSupportSubscriptionContract[] | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractsRequest {
  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of contracts to return in a single call. Minimum value of 1, maximum value of 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a private pricing contract visible to your account. `ListContracts` returns these summaries.
 *
 * @public
 */
export interface ContractSummary {
  /**
   * The Amazon Resource Name (ARN) of the contract. Pass this value to operations such as `GetContractInformation`, `ListContractualInvestmentSummaries`, and `AssociateContract`.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The contract term period of the contract, expressed as an interval with an inclusive start date and an inclusive end date.
   *
   * @public
   */
  contractTerm: Interval | undefined;

  /**
   * The classification of the contract. Valid values are `Cross-Service`, `Service-Specific`, and `Other`. `Cross-Service` applies across multiple Amazon Web Services services. `Service-Specific` applies to a specific Amazon Web Services service. `Other` applies to other arrangements.
   *
   * @public
   */
  contractType?: ContractType | undefined;

  /**
   * Indicates whether the contract is currently associated with your account. Valid values are `ASSOCIATED` and `NOT_ASSOCIATED`. `ASSOCIATED` means the contract is associated with your account. `NOT_ASSOCIATED` means the contract is not associated with your account.
   *
   * @public
   */
  associationStatus: AssociationStatus | undefined;

  /**
   * The time when the contract was last associated with your account.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListContractsResponse {
  /**
   * The list of contracts that your Amazon Web Services account is an eligible payer account of.
   *
   * @public
   */
  items: ContractSummary[] | undefined;

  /**
   * The pagination token to use on subsequent calls to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentAttestationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract whose attestations you want to list.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The identifier of a specific investment summary to filter the attestations by. If omitted, attestations for all investment summaries in the contract are returned.
   *
   * @public
   */
  investmentSummaryId?: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of attestations to return in a single call. Minimum value of 1, maximum value of 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a submitted investment attestation, as returned by `ListContractualInvestmentAttestations`.
 *
 * @public
 */
export interface InvestmentAttestation {
  /**
   * The identifier of the attestation. This value is returned by `CreateContractualInvestmentAttestation` and is used to cancel the attestation with `CancelContractualInvestmentAttestation`. This value is 1–36 characters.
   *
   * @public
   */
  attestationId: string | undefined;

  /**
   * The name of the investment summary that contains the attested outcome. This value is 1–400 characters.
   *
   * @public
   */
  investmentName: string | undefined;

  /**
   * The description of the attested outcome. This value is 1–2048 characters.
   *
   * @public
   */
  outcomeDescription: string | undefined;

  /**
   * The identifier of the investment summary that was attested, as returned by `ListContractualInvestmentSummaries`.
   *
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * The identifier of the investment that was attested, as returned by `ListContractualInvestments`.
   *
   * @public
   */
  investmentId: string | undefined;

  /**
   * The date on which the attestation was submitted.
   *
   * @public
   */
  attestedAt: Date | undefined;

  /**
   * The date on which the attestation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the attestation. Valid values are `PENDING_REVIEW`, `PENDING_C_LEVEL_APPROVAL`, `PENDING_CANCELLATION`, `REJECTED`, `CANCELLED`, and `DISBURSED`. The values `DISBURSED`, `REJECTED`, and `CANCELLED` are terminal. The other values indicate the attestation is still in progress.
   *
   * @public
   */
  attestationStatus: InvestmentAttestationStatus | undefined;

  /**
   * The start date on which the investment is disbursed to the investment accounts. This is not the same as the time of disbursement, but reflects the date you submitted with the attestation.
   *
   * @public
   */
  investmentDisbursedAt?: Date | undefined;

  /**
   * The monetary value attested.
   *
   * @public
   */
  attestedValue?: Amount | undefined;

  /**
   * The distribution of the attested investment across the eligible investment accounts. The list contains at most 200 distributions.
   *
   * @public
   */
  investmentDistributions?: InvestmentDistribution[] | undefined;

  /**
   * The reasons the attestation was rejected. This value is present only when `attestationStatus` is `REJECTED`. The list contains at most 30 reasons.
   *
   * @public
   */
  rejectionReasons?: string[] | undefined;

  /**
   * Indicates whether the attestation can be canceled with `CancelContractualInvestmentAttestation`.
   *
   * @public
   */
  isCancellable?: boolean | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentAttestationsResponse {
  /**
   * The list of investment attestations submitted under the contract.
   *
   * @public
   */
  items: InvestmentAttestation[] | undefined;

  /**
   * The pagination token to use on subsequent calls to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentsRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract that contains the investment summary.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The identifier of the investment summary whose investments you want to list.
   *
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of investments to return in a single call. Minimum value of 1, maximum value of 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An investment with a fixed value that is disbursed on a schedule. This corresponds to the `MILESTONE_BASED` investment type.
 *
 * @public
 */
export interface MilestoneBasedInvestment {
  /**
   * The identifier of the investment, as returned by `ListContractualInvestments`. This value is 1–36 characters.
   *
   * @public
   */
  investmentId: string | undefined;

  /**
   * The total value of the investment, including its currency and amount.
   *
   * @public
   */
  investmentValue: Amount | undefined;

  /**
   * The date on which the investment is disbursed to the investment accounts.
   *
   * @public
   */
  investmentDisbursedAt: Date | undefined;
}

/**
 * A multiplier used to convert attestation input into an investment value.
 *
 * @public
 */
export interface InvestmentMultiplier {
  /**
   * The multiplier value, expressed as a decimal string to preserve precision. The value is digits with an optional decimal point and is 1–1000 characters. The terms of the contract define this value.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The unit of the attestation input that the multiplier applies to, such as `workloads migrated`. This value is 1–1000 characters. The terms of the contract define this value.
   *
   * @public
   */
  investmentAttestationInputUnit: string | undefined;

  /**
   * The type of the multiplier. A value of `PERCENTAGE` applies a percentage of a value. A value of `CURRENCY_AMOUNT` applies a currency amount per unit of attestation input. The terms of the contract define this value.
   *
   * @public
   */
  multiplierType: MultiplierType | undefined;
}

/**
 * A restriction that caps the value that can be disbursed for an investment. The cap applies for each attestation window.
 *
 * @public
 */
export interface InvestmentRestriction {
  /**
   * The maximum monetary amount allowed under the restriction.
   *
   * @public
   */
  amount: Amount | undefined;
}

/**
 * An investment that is awarded upon completion of a defined outcome. This corresponds to the `OUTCOME_BASED` investment type and is claimed through `CreateContractualInvestmentAttestation`.
 *
 * @public
 */
export interface OutcomeBasedInvestment {
  /**
   * The identifier of the investment, as returned by `ListContractualInvestments`. This value is 1–36 characters.
   *
   * @public
   */
  investmentId: string | undefined;

  /**
   * The description of what must be completed to attest the outcome. This value is 1–2048 characters.
   *
   * @public
   */
  outcomeDescription: string | undefined;

  /**
   * The time window, expressed as an interval with inclusive start and end dates, during which outcomes can be attested to.
   *
   * @public
   */
  attestationWindow: Interval | undefined;

  /**
   * The restrictions that cap the value that can be disbursed for the investment. The list contains at most 10 restrictions.
   *
   * @public
   */
  investmentRestrictions?: InvestmentRestriction[] | undefined;

  /**
   * The multipliers used to compute the investment value from the attestation input. The list contains at most 200 multipliers. Multipliers are derived from the terms of the private pricing contract.
   *
   * @public
   */
  investmentMultipliers?: InvestmentMultiplier[] | undefined;

  /**
   * The total value already disbursed against the investment. This value can be distributed among the investment accounts distribution.
   *
   * @public
   */
  disbursedValue: Amount | undefined;
}

/**
 * An investment within an investment summary. This is a union in which exactly one member is set. The `milestoneBasedInvestment` member represents a fixed, scheduled investment. The `outcomeBasedInvestment` member represents an attestable investment awarded upon completion of a defined outcome. Check which member is present to determine the investment type.
 *
 * @public
 */
export type Investment =
  | Investment.MilestoneBasedInvestmentMember
  | Investment.OutcomeBasedInvestmentMember
  | Investment.$UnknownMember;

/**
 * @public
 */
export namespace Investment {
  /**
   * An investment with a fixed value that is disbursed on a schedule. This member is set for a milestone-based investment and corresponds to the `MILESTONE_BASED` investment type.
   *
   * @public
   */
  export interface MilestoneBasedInvestmentMember {
    milestoneBasedInvestment: MilestoneBasedInvestment;
    outcomeBasedInvestment?: never;
    $unknown?: never;
  }

  /**
   * An investment that is awarded upon completion of a defined outcome. This member is set for an outcome-based (attestable) investment and corresponds to the `OUTCOME_BASED` investment type.
   *
   * @public
   */
  export interface OutcomeBasedInvestmentMember {
    milestoneBasedInvestment?: never;
    outcomeBasedInvestment: OutcomeBasedInvestment;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    milestoneBasedInvestment?: never;
    outcomeBasedInvestment?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    milestoneBasedInvestment: (value: MilestoneBasedInvestment) => T;
    outcomeBasedInvestment: (value: OutcomeBasedInvestment) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListContractualInvestmentsResponse {
  /**
   * The list of investments for the investment summary.
   *
   * @public
   */
  items: Investment[] | undefined;

  /**
   * The pagination token to use on subsequent calls to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentSummariesRequest {
  /**
   * The Amazon Resource Name (ARN) of the contract whose investment summaries you want to list.
   *
   * @public
   */
  contractArn: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of investment summaries to return in a single call. Minimum value of 1, maximum value of 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Detailed information about an investment summary within a contract or a private pricing addendum.
 *
 * @public
 */
export interface InvestmentSummary {
  /**
   * The identifier of the investment summary. Pass this value to `ListContractualInvestments` to list the investments within the summary, and to `CreateContractualInvestmentAttestation` to attest an investment. This value is 1–36 characters.
   *
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * The name of the investment summary, used to reference the investment against a term in the physical contract. This value is 1–400 characters.
   *
   * @public
   */
  investmentName: string | undefined;

  /**
   * The type of the investment summary. Valid values are `MILESTONE_BASED` and `OUTCOME_BASED`. `OUTCOME_BASED` investments can be attested to, upon completion of outcomes. `MILESTONE_BASED` are automatically triggered by Amazon Web Services, based on the time schedule in the contract.
   *
   * @public
   */
  investmentType: InvestmentType | undefined;

  /**
   * The maximum monetary value that can be disbursed against the investment summary, inclusive of all outcomes combined under the summary.
   *
   * @public
   */
  maxAllowedInvestmentDisbursementValue?: Amount | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentSummariesResponse {
  /**
   * The list of investment summaries under the contract. It includes the investment name, maximum investment amount, and investment type. It does not provide investment details. Use this to know if the contract has investment terms and what type.
   *
   * @public
   */
  items: InvestmentSummary[] | undefined;

  /**
   * The pagination token to use on subsequent calls to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request structure for ListEnterpriseSupportLinkedAccountCharges.
 *
 * @public
 */
export interface ListEnterpriseSupportLinkedAccountChargesRequest {
  /**
   * The billing month in YYYY-MM format. This must be a month in the past.
   *
   * @public
   */
  billingMonth: string | undefined;

  /**
   * The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The maximum number of results to return per page. Default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A time period for Enterprise Support billing.
 *
 * @public
 */
export interface EnterpriseSupportTimePeriod {
  /**
   * The begin date of the time period.
   *
   * @public
   */
  beginDate: Date | undefined;

  /**
   * The end date of the time period.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * Service-level usage details by account.
 *
 * @public
 */
export interface ServiceLevelAccountUsage {
  /**
   * The service code for which to return Support-eligible spend data.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The total support-eligible spend for the service.
   *
   * @public
   */
  totalSupportEligibleSpend?: string | undefined;
}

/**
 * Enterprise Support charges for a linked account.
 *
 * @public
 */
export interface LinkedAccountCharge {
  /**
   * The linked account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The payer account ID that is authorized to view Enterprise Support data for all accounts in its Support profile.
   *
   * @public
   */
  payerAccountId: string | undefined;

  /**
   * The type of account.
   *
   * @public
   */
  accountType?: string | undefined;

  /**
   * The number of billable seconds in the billing period based on when the account was subscribed to Enterprise Support.
   *
   * @public
   */
  billableSeconds: number | undefined;

  /**
   * The total number of seconds in the billing period.
   *
   * @public
   */
  totalSeconds: number | undefined;

  /**
   * The total support-eligible spend for this account.
   *
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * The prorated total support-eligible spend based on when the account was subscribed to Enterprise Support.
   *
   * @public
   */
  proratedTotalSupportEligibleSpend: string | undefined;

  /**
   * The time periods during which this account was linked.
   *
   * @public
   */
  linkedTimePeriods?: EnterpriseSupportTimePeriod[] | undefined;

  /**
   * The subscription time periods for this account.
   *
   * @public
   */
  subscriptionTimePeriods?: EnterpriseSupportTimePeriod[] | undefined;

  /**
   * The total support-eligible Reserved Instance spend for this account.
   *
   * @public
   */
  totalSupportEligibleReservedInstanceSpend?: string | undefined;

  /**
   * The total support-eligible Savings Plan spend for this account.
   *
   * @public
   */
  totalSupportEligibleSavingsPlanSpend?: string | undefined;

  /**
   * The support-eligible spend broken down by service.
   *
   * @public
   */
  supportEligibleSpendByService?: ServiceLevelAccountUsage[] | undefined;
}

/**
 * The response structure for ListEnterpriseSupportLinkedAccountCharges.
 *
 * @public
 */
export interface ListEnterpriseSupportLinkedAccountChargesResponse {
  /**
   * The list of Enterprise Support charges per linked account.
   *
   * @public
   */
  linkedAccount: LinkedAccountCharge[] | undefined;

  /**
   * The pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewRequest {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The number of entries a paginated response contains.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that is used on subsequent calls to list billing views.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewResponse {
  /**
   * A list of billing views used as the data source for the custom billing view.
   *
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * The pagination token that is used on subsequent calls to list billing views.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key value pairs that are associated with the resource.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface RedeemCreditsRequest {
  /**
   * The promotional credit code to redeem.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag key value pairs that are associated with the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag key value pairs that are associated with the resource.
   *
   * @public
   */
  resourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A single key/value entry used to update a billing preference.
 *
 * @public
 */
export interface BillingPreferenceForKey {
  /**
   * The preference key. Format depends on the feature being updated.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The preference value. Valid values: `ENABLED` or `DISABLED`.
   *
   * @public
   */
  value: PreferenceValue | undefined;
}

/**
 * @public
 */
export interface UpdateBillingPreferencesRequest {
  /**
   * The feature to update. Valid values: `BILLING_ALERTS`, `RI_SHARING`, `CREDIT_SHARING`, `CREDIT_LEVEL_SHARING`, `CREDIT_PREFERENCE_OPTIONS`. The history features (`RI_SHARING_HISTORY` and `CREDIT_SHARING_HISTORY`) are read-only and cannot be updated.
   *
   * @public
   */
  feature: BillingFeature | undefined;

  /**
   * Key/value pairs to apply. All keys in a single request must be valid for the specified `feature` and must not be duplicated. For `CREDIT_PREFERENCE_OPTIONS`, all keys must reference the same `creditId`.
   *
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
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the billing view.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the billing view.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * See [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html). Billing view only supports `LINKED_ACCOUNT`, `Tags`, and `CostCategories`.
   *
   * @public
   */
  dataFilterExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface UpdateBillingViewResponse {
  /**
   * The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The time when the billing view was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}
