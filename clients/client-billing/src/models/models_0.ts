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
 * <p>A recipient copied as a viewer on the executive approval request, in addition to the approver.</p>
 * @public
 */
export interface AdditionalRecipient {
  /**
   * <p>The email address of the recipient. This value is 3–256 characters and must be a valid email address.</p>
   * @public
   */
  email: string | undefined;
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
 * <p>Information about the executive approver who signs off on an investment attestation.</p>
 * @public
 */
export interface ApproverDetails {
  /**
   * <p>The name of the approver as it appears on the contract. This value can be up to 256 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The title of the approver, such as <code>Chief Financial Officer</code>. This value can be up to 256 characters.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The email address of the approver. This value is 3–256 characters and must be a valid email address.</p>
   * @public
   */
  email: string | undefined;
}

/**
 * @public
 */
export interface AssociateContractRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract to associate with your account.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The contract ID from the contract document. It can be found in the top right corner of your contract's pages. This value confirms that you have access to the contract you are associating.</p>
   * @public
   */
  contractDocumentId: string | undefined;
}

/**
 * @public
 */
export interface AssociateContractResponse {}

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
 * <p>A quantity-based attestation value, such as a count of workloads migrated.</p>
 * @public
 */
export interface AttestationQuantity {
  /**
   * <p>The number of units being attested, expressed as a decimal string to preserve precision. The value is digits with an optional decimal point and is 1–1000 characters.</p>
   * @public
   */
  attestationVolume: string | undefined;

  /**
   * <p>The unit of the attestation, such as <code>workloads migrated</code>. This value is 1–1000 characters.</p>
   * @public
   */
  attestationUnit: string | undefined;
}

/**
 * <p>The value being attested. This is a union in which exactly one member is set. Set <code>attestationAmount</code> to attest a monetary amount directly, or set <code>attestationQuantities</code> to attest one or more quantities that are converted to a value using the investment's multipliers.</p>
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
   * <p>The value attested as a monetary amount. This form is valid only when the investment has no multiplier.</p>
   * @public
   */
  export interface AttestationAmountMember {
    attestationAmount: Amount;
    attestationQuantities?: never;
    $unknown?: never;
  }

  /**
   * <p>The value attested as one or more quantities, each with its own unit. The list contains at most 50 quantities.</p>
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
 * <p>An allocation of an investment disbursement to a specific recipient account. The account is the target account that receives the investment, not your account.</p>
 * @public
 */
export interface InvestmentDistribution {
  /**
   * <p>The recipient Amazon Web Services account ID that receives this portion of the investment. This must be one of the eligible investment accounts on the contract.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The monetary value allocated to the recipient account.</p>
   * @public
   */
  investmentAmount: Amount | undefined;
}

/**
 * <p>The details of an investment attestation submission, including the value being attested and how the resulting investment is distributed.</p>
 * @public
 */
export interface AttestationDetails {
  /**
   * <p>The value being attested, expressed as either a monetary amount or one or more quantities. Exactly one form is set.</p>
   * @public
   */
  attestationValue: AttestationValue | undefined;

  /**
   * <p>The distribution of the resulting investment across the eligible investment accounts on the contract. If you omit this value, the full investment is allocated to the single eligible investment account on the contract. This value is required when multiple investment accounts are eligible. When you provide this value, the sum of all distributions must equal the resulting monetary investment value (the attested amount, or the value computed from the attested quantities using the investment multipliers). The list contains at most 200 distributions.</p>
   * @public
   */
  investmentDistributions?: InvestmentDistribution[] | undefined;
}

/**
 * @public
 */
export interface CancelContractualInvestmentAttestationRequest {
  /**
   * <p>The identifier of the investment attestation to cancel.</p>
   * @public
   */
  attestationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the contract that contains the attested investment.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The reason for the cancellation. This value can be 1 to 80 characters.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CancelContractualInvestmentAttestationResponse {}

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
export interface CreateContractualInvestmentAttestationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract that contains the investment being attested.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The identifier of the investment summary being attested. This is the parent to the investmentId.</p>
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * <p>The identifier of the investment (outcome) being attested.</p>
   * @public
   */
  investmentId: string | undefined;

  /**
   * <p>The contract ID from the contract document, located in the top-right corner of the private pricing contract pages. This value confirms that you have access to the contract.</p>
   * @public
   */
  contractDocumentId: string | undefined;

  /**
   * <p>The details of the executive who authorized the attestation, under the terms of the private pricing contract. The executive receives a click-to-accept email to confirm the attestation.</p>
   * @public
   */
  approverDetails: ApproverDetails | undefined;

  /**
   * <p>The date on which the investment is disbursed to the investment accounts. The disbursement date is subject to review timelines.</p>
   * @public
   */
  investmentDisbursedAt?: Date | undefined;

  /**
   * <p>The details of the attestation, including the value being claimed and how the resulting investment is distributed across investment accounts.</p>
   * @public
   */
  attestationDetails: AttestationDetails | undefined;

  /**
   * <p>The email addresses to copy as viewers on the executive approval request.</p>
   * @public
   */
  additionalRecipients?: AdditionalRecipient[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token and parameters, the retry completes without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContractualInvestmentAttestationResponse {
  /**
   * <p>The identifier of the submitted attestation.</p>
   * @public
   */
  attestationId: string | undefined;
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
export interface DisassociateContractRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract to disassociate from your account.</p>
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
export interface GetContractInformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract to retrieve information about.</p>
   * @public
   */
  contractArn: string | undefined;
}

/**
 * <p>A time period bounded by an inclusive start date and an inclusive end date.</p>
 * @public
 */
export interface Interval {
  /**
   * <p>The start date of the interval. This date is included in the interval.</p>
   * @public
   */
  startDateInclusive: Date | undefined;

  /**
   * <p>The end date of the interval. This date is included in the interval.</p>
   * @public
   */
  endDateInclusive: Date | undefined;
}

/**
 * <p>A legal entity on a private pricing contract. It can be found on your contract's signature page.</p>
 * @public
 */
export interface LegalEntity {
  /**
   * <p>The name of the legal entity as it appears on the contract document. This value can be up to 256 characters.</p>
   * @public
   */
  legalEntityName: string | undefined;
}

/**
 * <p>The details of a private pricing addendum contract.</p>
 * @public
 */
export interface PrivatePricingAddendum {
  /**
   * <p>The Amazon Resource Name (ARN) of the private pricing addendum.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The contract term period of the private pricing addendum, expressed as an interval with an inclusive start date and an inclusive end date.</p>
   * @public
   */
  contractTerm: Interval | undefined;

  /**
   * <p>The payer accounts that are eligible under the private pricing addendum. The list contains at most 100 account IDs.</p>
   * @public
   */
  eligiblePayerAccounts: string[] | undefined;

  /**
   * <p>The accounts that are eligible to receive investments under the private pricing addendum. An <code>InvestmentDistribution</code> must target one of these accounts. The list contains at most 100 account IDs.</p>
   * @public
   */
  investmentAccounts: string[] | undefined;

  /**
   * <p>The legal entities on the private pricing addendum. The list contains at most 10 legal entities.</p>
   * @public
   */
  legalEntities: LegalEntity[] | undefined;

  /**
   * <p>The restrictions that limit the self-service actions you can take on the private pricing addendum. An empty or absent value indicates that no restrictions apply. The list contains at most 10 restrictions.</p>
   * @public
   */
  contractRestrictions?: ContractRestriction[] | undefined;
}

/**
 * <p>The details of a contract returned by <code>GetContractInformation</code>. This is a union in which exactly one member is set, corresponding to the contract type. For a private pricing addendum, the <code>privatePricingAddendum</code> member is set. Check which member is present to determine the contract type.</p>
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
   * <p>The details of a private pricing addendum contract. This member is set when the contract is a private pricing addendum.</p>
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
   * <p>The contract details such as term (duration), eligible payer accounts, investment accounts, and legal entities.</p>
   * @public
   */
  contract: ContractDetails | undefined;
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
   * <p>Specifies whether the Support charge amount is estimated. When false, the charge amount is finalized.</p>
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
 * <p> Specifies a time range with an inclusive begin date and an exclusive end date. </p>
 * @public
 */
export interface BillingViewSegmentTimeRange {
  /**
   * <p> The inclusive start of the time range. This value can't be in the future. </p>
   * @public
   */
  beginDateInclusive?: Date | undefined;

  /**
   * <p> The exclusive end of the time range. This value must be after <code>beginDateInclusive</code>. </p>
   * @public
   */
  endDateExclusive?: Date | undefined;
}

/**
 * @public
 */
export interface ListBillingViewSegmentsRequest {
  /**
   * <p> The billing period to query. If you don't provide a time range, the current billing period, which is the calendar month in UTC, is used. </p>
   * @public
   */
  timeRange?: BillingViewSegmentTimeRange | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that uniquely identifies the billing view to query. If you don't provide an ARN, the caller's <code>PRIMARY</code> billing view is used. The ARN must reference a primary billing view. Custom billing views aren't supported. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The number of entries a paginated response contains. Valid values range from 1 to 100. The default is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing view segments. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p> A billing view segment. A segment represents a time range during which the billing domain and account relationships for a billing view remained unchanged. </p>
 * @public
 */
export interface BillingViewSegmentsListElement {
  /**
   * <p>The billing domain for this segment. The following values are valid:</p> <ul> <li> <p> <code>PRO_FORMA</code> - Data shaped by Billing Conductor that doesn't reflect the final charges owed to Amazon Web Services.</p> </li> <li> <p> <code>BILLABLE</code> - Data that represents the final charges owed to Amazon Web Services.</p> </li> </ul>
   * @public
   */
  domain?: BillingDomain | undefined;

  /**
   * <p> The time range during which this segment is effective. </p>
   * @public
   */
  timeRange?: BillingViewSegmentTimeRange | undefined;

  /**
   * <p> The billing transfer account ID. The response includes this field only when the caller is a billing transfer source account. The response omits this field for billing group billing views. </p>
   * @public
   */
  billingTransferAccountId?: string | undefined;

  /**
   * <p> The management account ID of the organization. The response includes this field for organization member accounts. </p>
   * @public
   */
  managementAccountId?: string | undefined;

  /**
   * <p> The billing group primary account ID. The response includes this field for billing group members. Compare this value to your own account ID to determine whether you are the primary account. </p>
   * @public
   */
  billingGroupPrimaryAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewSegmentsResponse {
  /**
   * <p> A list of billing view segments. Each segment covers a portion of the requested time period. The response omits hidden segments, so the segments it returns might not cover the entire requested time period. </p>
   * @public
   */
  items: BillingViewSegmentsListElement[] | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing view segments. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the billing month and optional filters used to retrieve Business Support charges broken down by linked account.</p>
 * @public
 */
export interface ListBusinessSupportAccountChargesRequest {
  /**
   * <p>The billing month to retrieve Business Support charges for, in YYYY-MM format. You can request the current month (charges will be estimated) or a past month (charges will be finalized).</p>
   * @public
   */
  billingMonth: string | undefined;

  /**
   * <p>The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. Default is 100.</p>
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
 * <p>A discount applied to a Business Support account charge, including the discount amount, percentage, type, and source.</p>
 * @public
 */
export interface BusinessSupportDiscount {
  /**
   * <p>The discount amount applied to the Business Support charge. This value is negative, representing a reduction in the charge.</p>
   * @public
   */
  discountAmount?: string | undefined;

  /**
   * <p>The discount percentage applied to the Business Support charge, expressed as a decimal (for example, <code>0.12</code> for a 12% discount).</p>
   * @public
   */
  discountPercentage?: string | undefined;

  /**
   * <p>The type of discount applied. Valid values: <code>Distributor_Discount</code> (a discount applied through a distributor arrangement), <code>SPP_Discount</code> (a discount applied through the Solution Provider Program).</p>
   * @public
   */
  discountType?: string | undefined;

  /**
   * <p>The source or program through which the discount was applied.</p>
   * @public
   */
  discountSource?: string | undefined;
}

/**
 * <p>A service-level spend entry contributing to Business Support eligible spend.</p>
 * @public
 */
export interface BusinessSupportServiceSpend {
  /**
   * <p>The name of the Amazon Web Services service contributing to the Support-eligible spend.</p>
   * @public
   */
  contributingService: string | undefined;

  /**
   * <p>The type of the line item. Valid values: <code>Usage</code>.</p>
   * @public
   */
  itemType: string | undefined;

  /**
   * <p>A human-readable description of the service spend entry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Support-eligible spend amount for this service.</p>
   * @public
   */
  chargeAmount: string | undefined;

  /**
   * <p>The ISO 4217 currency code for the charge amount (for example, <code>USD</code>).</p>
   * @public
   */
  currency: string | undefined;
}

/**
 * <p>A tier-level charge within a Business Support pricing plan. Business Support uses tiered pricing where different percentage rates apply to different ranges of Support-eligible spend.</p>
 * @public
 */
export interface BusinessSupportTierCharge {
  /**
   * <p>A human-readable description of the pricing tier, including the spend range and percentage rate applied.</p>
   * @public
   */
  tierDescription: string | undefined;

  /**
   * <p>The percentage rate applied to Support-eligible spend within this pricing tier.</p>
   * @public
   */
  tierRate: string | undefined;

  /**
   * <p>The amount of Support-eligible spend that falls within this pricing tier.</p>
   * @public
   */
  usageSlice: string | undefined;

  /**
   * <p>The Business Support charge amount calculated for this pricing tier.</p>
   * @public
   */
  tierCharge: string | undefined;

  /**
   * <p>The start date of the charge period for this tier charge.</p>
   * @public
   */
  chargePeriodStartDate?: Date | undefined;

  /**
   * <p>The end date of the charge period for this tier charge.</p>
   * @public
   */
  chargePeriodEndDate?: Date | undefined;
}

/**
 * <p>Business Support charges for a linked account.</p>
 * @public
 */
export interface BusinessSupportAccountCharge {
  /**
   * <p>The linked account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The Support plan name for this account. Valid values: <code>AWSSupportBusiness</code> (Business Support plan), <code>AWSSupportDeveloper</code> (Developer Support plan), <code>AWSSupportEssential</code> (Basic Support plan).</p>
   * @public
   */
  supportPlanName: string | undefined;

  /**
   * <p>The total Business Support charge amount for this account in the billing month.</p>
   * @public
   */
  totalCharge: string | undefined;

  /**
   * <p>The total Support-eligible spend used as the basis for calculating the Business Support charge for this account.</p>
   * @public
   */
  totalUsageBasis: string | undefined;

  /**
   * <p>The tier-level charges that make up the total Business Support charge for this account. Each tier represents a spend range with its own rate.</p>
   * @public
   */
  tierCharges?: BusinessSupportTierCharge[] | undefined;

  /**
   * <p>The discount applied to the Business Support charge for this account, if any. This field is absent when no discount applies.</p>
   * @public
   */
  supportDiscount?: BusinessSupportDiscount | undefined;

  /**
   * <p>The Support-eligible spend broken down by contributing service for this account.</p>
   * @public
   */
  supportEligibleSpendByService?: BusinessSupportServiceSpend[] | undefined;
}

/**
 * <p>Contains the Business Support charges broken down by linked account for the specified billing month, along with account and spend totals.</p>
 * @public
 */
export interface ListBusinessSupportAccountChargesResponse {
  /**
   * <p>The billing month for the returned charges, in YYYY-MM format.</p>
   * @public
   */
  billingMonth: string | undefined;

  /**
   * <p>Specifies whether the Support charge amount is estimated. When false, the charge amount is finalized.</p>
   * @public
   */
  isEstimated: boolean | undefined;

  /**
   * <p>The total Business Support charge amount for all accounts in the billing month.</p>
   * @public
   */
  totalSupportCharge: string | undefined;

  /**
   * <p>The total Support-eligible spend from all accounts in the billing month. This includes eligible spend from usage of Amazon Web Services.</p>
   * @public
   */
  totalSupportEligibleSpend: string | undefined;

  /**
   * <p>The total number of linked accounts with Business Support charges in the billing month.</p>
   * @public
   */
  accountCount: number | undefined;

  /**
   * <p>The list of Business Support charges per linked account.</p>
   * @public
   */
  accountCharges: BusinessSupportAccountCharge[] | undefined;

  /**
   * <p>The pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the optional filters used to retrieve the history of Business Support subscription contracts across accounts.</p>
 * @public
 */
export interface ListBusinessSupportSubscriptionHistoryRequest {
  /**
   * <p>The billing month to retrieve subscription contracts for, in YYYY-MM format. If you don't specify a value, defaults to the current month.</p>
   * @public
   */
  billingMonth?: string | undefined;

  /**
   * <p>The account ID to filter results to a specific account. If you don't specify a value, the response includes subscription history for all accounts.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The start date to filter subscription contracts from.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The end date to filter subscription contracts to.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The maximum number of results to return per page. Default is 100.</p>
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
 * <p>A Business Support subscription contract for an account.</p>
 * @public
 */
export interface BusinessSupportSubscriptionContract {
  /**
   * <p>The account ID associated with this subscription contract.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The name of the Support plan for this subscription contract. Valid values: <code>AWSSupportBusiness</code> (Business Support plan), <code>AWSSupportDeveloper</code> (Developer Support plan), <code>AWSSupportEssential</code> (Basic Support plan).</p>
   * @public
   */
  planName: string | undefined;

  /**
   * <p>The start date of the subscription contract.</p>
   * @public
   */
  contractStartDate: Date | undefined;

  /**
   * <p>The end date of the subscription contract.</p>
   * @public
   */
  contractEndDate: Date | undefined;
}

/**
 * <p>Contains the list of Business Support subscription contracts that match the request filters.</p>
 * @public
 */
export interface ListBusinessSupportSubscriptionHistoryResponse {
  /**
   * <p>The list of Business Support subscription contracts.</p>
   * @public
   */
  subscriptionContracts: BusinessSupportSubscriptionContract[] | undefined;

  /**
   * <p>The pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractsRequest {
  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of contracts to return in a single call. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a private pricing contract visible to your account. <code>ListContracts</code> returns these summaries.</p>
 * @public
 */
export interface ContractSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract. Pass this value to operations such as <code>GetContractInformation</code>, <code>ListContractualInvestmentSummaries</code>, and <code>AssociateContract</code>.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The contract term period of the contract, expressed as an interval with an inclusive start date and an inclusive end date.</p>
   * @public
   */
  contractTerm: Interval | undefined;

  /**
   * <p>The classification of the contract. Valid values are <code>Cross-Service</code>, <code>Service-Specific</code>, and <code>Other</code>. <code>Cross-Service</code> applies across multiple Amazon Web Services services. <code>Service-Specific</code> applies to a specific Amazon Web Services service. <code>Other</code> applies to other arrangements.</p>
   * @public
   */
  contractType?: ContractType | undefined;

  /**
   * <p>Indicates whether the contract is currently associated with your account. Valid values are <code>ASSOCIATED</code> and <code>NOT_ASSOCIATED</code>. <code>ASSOCIATED</code> means the contract is associated with your account. <code>NOT_ASSOCIATED</code> means the contract is not associated with your account.</p>
   * @public
   */
  associationStatus: AssociationStatus | undefined;

  /**
   * <p>The time when the contract was last associated with your account.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListContractsResponse {
  /**
   * <p>The list of contracts that your Amazon Web Services account is an eligible payer account of.</p>
   * @public
   */
  items: ContractSummary[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentAttestationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract whose attestations you want to list.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The identifier of a specific investment summary to filter the attestations by. If omitted, attestations for all investment summaries in the contract are returned.</p>
   * @public
   */
  investmentSummaryId?: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of attestations to return in a single call. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of a submitted investment attestation, as returned by <code>ListContractualInvestmentAttestations</code>.</p>
 * @public
 */
export interface InvestmentAttestation {
  /**
   * <p>The identifier of the attestation. This value is returned by <code>CreateContractualInvestmentAttestation</code> and is used to cancel the attestation with <code>CancelContractualInvestmentAttestation</code>. This value is 1–36 characters.</p>
   * @public
   */
  attestationId: string | undefined;

  /**
   * <p>The name of the investment summary that contains the attested outcome. This value is 1–400 characters.</p>
   * @public
   */
  investmentName: string | undefined;

  /**
   * <p>The description of the attested outcome. This value is 1–2048 characters.</p>
   * @public
   */
  outcomeDescription: string | undefined;

  /**
   * <p>The identifier of the investment summary that was attested, as returned by <code>ListContractualInvestmentSummaries</code>.</p>
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * <p>The identifier of the investment that was attested, as returned by <code>ListContractualInvestments</code>.</p>
   * @public
   */
  investmentId: string | undefined;

  /**
   * <p>The date on which the attestation was submitted.</p>
   * @public
   */
  attestedAt: Date | undefined;

  /**
   * <p>The date on which the attestation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the attestation. Valid values are <code>PENDING_REVIEW</code>, <code>PENDING_C_LEVEL_APPROVAL</code>, <code>PENDING_CANCELLATION</code>, <code>REJECTED</code>, <code>CANCELLED</code>, and <code>DISBURSED</code>. The values <code>DISBURSED</code>, <code>REJECTED</code>, and <code>CANCELLED</code> are terminal. The other values indicate the attestation is still in progress.</p>
   * @public
   */
  attestationStatus: InvestmentAttestationStatus | undefined;

  /**
   * <p>The start date on which the investment is disbursed to the investment accounts. This is not the same as the time of disbursement, but reflects the date you submitted with the attestation.</p>
   * @public
   */
  investmentDisbursedAt?: Date | undefined;

  /**
   * <p>The monetary value attested.</p>
   * @public
   */
  attestedValue?: Amount | undefined;

  /**
   * <p>The distribution of the attested investment across the eligible investment accounts. The list contains at most 200 distributions.</p>
   * @public
   */
  investmentDistributions?: InvestmentDistribution[] | undefined;

  /**
   * <p>The reasons the attestation was rejected. This value is present only when <code>attestationStatus</code> is <code>REJECTED</code>. The list contains at most 30 reasons.</p>
   * @public
   */
  rejectionReasons?: string[] | undefined;

  /**
   * <p>Indicates whether the attestation can be canceled with <code>CancelContractualInvestmentAttestation</code>.</p>
   * @public
   */
  isCancellable?: boolean | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentAttestationsResponse {
  /**
   * <p>The list of investment attestations submitted under the contract.</p>
   * @public
   */
  items: InvestmentAttestation[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract that contains the investment summary.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The identifier of the investment summary whose investments you want to list.</p>
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of investments to return in a single call. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An investment with a fixed value that is disbursed on a schedule. This corresponds to the <code>MILESTONE_BASED</code> investment type.</p>
 * @public
 */
export interface MilestoneBasedInvestment {
  /**
   * <p>The identifier of the investment, as returned by <code>ListContractualInvestments</code>. This value is 1–36 characters.</p>
   * @public
   */
  investmentId: string | undefined;

  /**
   * <p>The total value of the investment, including its currency and amount.</p>
   * @public
   */
  investmentValue: Amount | undefined;

  /**
   * <p>The date on which the investment is disbursed to the investment accounts.</p>
   * @public
   */
  investmentDisbursedAt: Date | undefined;
}

/**
 * <p>A multiplier used to convert attestation input into an investment value.</p>
 * @public
 */
export interface InvestmentMultiplier {
  /**
   * <p>The multiplier value, expressed as a decimal string to preserve precision. The value is digits with an optional decimal point and is 1–1000 characters. The terms of the contract define this value.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The unit of the attestation input that the multiplier applies to, such as <code>workloads migrated</code>. This value is 1–1000 characters. The terms of the contract define this value.</p>
   * @public
   */
  investmentAttestationInputUnit: string | undefined;

  /**
   * <p>The type of the multiplier. A value of <code>PERCENTAGE</code> applies a percentage of a value. A value of <code>CURRENCY_AMOUNT</code> applies a currency amount per unit of attestation input. The terms of the contract define this value.</p>
   * @public
   */
  multiplierType: MultiplierType | undefined;
}

/**
 * <p>A restriction that caps the value that can be disbursed for an investment. The cap applies for each attestation window.</p>
 * @public
 */
export interface InvestmentRestriction {
  /**
   * <p>The maximum monetary amount allowed under the restriction.</p>
   * @public
   */
  amount: Amount | undefined;
}

/**
 * <p>An investment that is awarded upon completion of a defined outcome. This corresponds to the <code>OUTCOME_BASED</code> investment type and is claimed through <code>CreateContractualInvestmentAttestation</code>.</p>
 * @public
 */
export interface OutcomeBasedInvestment {
  /**
   * <p>The identifier of the investment, as returned by <code>ListContractualInvestments</code>. This value is 1–36 characters.</p>
   * @public
   */
  investmentId: string | undefined;

  /**
   * <p>The description of what must be completed to attest the outcome. This value is 1–2048 characters.</p>
   * @public
   */
  outcomeDescription: string | undefined;

  /**
   * <p>The time window, expressed as an interval with inclusive start and end dates, during which outcomes can be attested to.</p>
   * @public
   */
  attestationWindow: Interval | undefined;

  /**
   * <p>The restrictions that cap the value that can be disbursed for the investment. The list contains at most 10 restrictions.</p>
   * @public
   */
  investmentRestrictions?: InvestmentRestriction[] | undefined;

  /**
   * <p>The multipliers used to compute the investment value from the attestation input. The list contains at most 200 multipliers. Multipliers are derived from the terms of the private pricing contract.</p>
   * @public
   */
  investmentMultipliers?: InvestmentMultiplier[] | undefined;

  /**
   * <p>The total value already disbursed against the investment. This value can be distributed among the investment accounts distribution.</p>
   * @public
   */
  disbursedValue: Amount | undefined;
}

/**
 * <p>An investment within an investment summary. This is a union in which exactly one member is set. The <code>milestoneBasedInvestment</code> member represents a fixed, scheduled investment. The <code>outcomeBasedInvestment</code> member represents an attestable investment awarded upon completion of a defined outcome. Check which member is present to determine the investment type.</p>
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
   * <p>An investment with a fixed value that is disbursed on a schedule. This member is set for a milestone-based investment and corresponds to the <code>MILESTONE_BASED</code> investment type.</p>
   * @public
   */
  export interface MilestoneBasedInvestmentMember {
    milestoneBasedInvestment: MilestoneBasedInvestment;
    outcomeBasedInvestment?: never;
    $unknown?: never;
  }

  /**
   * <p>An investment that is awarded upon completion of a defined outcome. This member is set for an outcome-based (attestable) investment and corresponds to the <code>OUTCOME_BASED</code> investment type.</p>
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
   * <p>The list of investments for the investment summary.</p>
   * @public
   */
  items: Investment[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentSummariesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contract whose investment summaries you want to list.</p>
   * @public
   */
  contractArn: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of investment summaries to return in a single call. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Detailed information about an investment summary within a contract or a private pricing addendum.</p>
 * @public
 */
export interface InvestmentSummary {
  /**
   * <p>The identifier of the investment summary. Pass this value to <code>ListContractualInvestments</code> to list the investments within the summary, and to <code>CreateContractualInvestmentAttestation</code> to attest an investment. This value is 1–36 characters.</p>
   * @public
   */
  investmentSummaryId: string | undefined;

  /**
   * <p>The name of the investment summary, used to reference the investment against a term in the physical contract. This value is 1–400 characters.</p>
   * @public
   */
  investmentName: string | undefined;

  /**
   * <p>The type of the investment summary. Valid values are <code>MILESTONE_BASED</code> and <code>OUTCOME_BASED</code>. <code>OUTCOME_BASED</code> investments can be attested to, upon completion of outcomes. <code>MILESTONE_BASED</code> are automatically triggered by Amazon Web Services, based on the time schedule in the contract.</p>
   * @public
   */
  investmentType: InvestmentType | undefined;

  /**
   * <p>The maximum monetary value that can be disbursed against the investment summary, inclusive of all outcomes combined under the summary.</p>
   * @public
   */
  maxAllowedInvestmentDisbursementValue?: Amount | undefined;
}

/**
 * @public
 */
export interface ListContractualInvestmentSummariesResponse {
  /**
   * <p>The list of investment summaries under the contract. It includes the investment name, maximum investment amount, and investment type. It does not provide investment details. Use this to know if the contract has investment terms and what type.</p>
   * @public
   */
  items: InvestmentSummary[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to retrieve the next set of results.</p>
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
   * <p>The linked account ID to filter results to a specific account. If you don't specify a value, the response includes charges for all linked accounts.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The maximum number of results to return per page. Default is 100.</p>
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
