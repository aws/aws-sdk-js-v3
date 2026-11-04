// smithy-typescript generated code
import type {
  AgreementCancellationRequestReasonCode,
  AgreementCancellationRequestStatus,
  AgreementEntitlementStatus,
  AgreementEntitlementStatusReasonCode,
  AgreementStatus,
  BillingAdjustmentErrorCode,
  BillingAdjustmentReasonCode,
  BillingAdjustmentStatus,
  EndTimeBehaviorReasonCode,
  EndTimeBehaviorType,
  Intent,
  InvoiceType,
  LineItemGroupBy,
  PaymentRequestApprovalStrategy,
  PaymentRequestStatus,
  SortOrder,
  TaxEstimation,
  Timing,
} from "./enums";

/**
 * @public
 */
export interface AcceptAgreementCancellationRequestInput {
  /**
   * The unique identifier of the agreement associated with the cancellation request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the cancellation request to accept.
   *
   * @public
   */
  agreementCancellationRequestId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementCancellationRequestOutput {
  /**
   * The unique identifier of the agreement associated with this cancellation request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The unique identifier of the accepted cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The updated status of the cancellation request, which is `APPROVED`.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * The original reason code provided when the cancellation request was created.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The detailed description of the cancellation reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time when the cancellation request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the cancellation request was accepted.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * The input fails to satisfy the constraints specified by the service.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field associated with the error.
   *
   * @public
   */
  name: string | undefined;

  /**
   * See applicable actions.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementPaymentRequestInput {
  /**
   * The unique identifier of the payment request to accept.
   *
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with the payment request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * An optional purchase order reference that buyers can provide to associate the payment request with their internal purchase order system.
   *
   * @public
   */
  purchaseOrderReference?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementPaymentRequestOutput {
  /**
   * The unique identifier of the accepted payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this payment request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The updated status of the payment request, which is `APPROVED`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The detailed description of the payment request, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The amount that was approved to be charged.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The date and time when the payment request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the payment request was accepted.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Contains information about a purchase order association to a charge within an agreement.
 *
 * @public
 */
export interface PurchaseOrder {
  /**
   * The unique identifier of the charge to associate the purchase order with.
   *
   * @public
   */
  chargeId: string | undefined;

  /**
   * The revision of the charge.
   *
   * @public
   */
  chargeRevision?: number | undefined;

  /**
   * The unique identifier of the agreement associated with this charge.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The purchase order reference to associate with the charge.
   *
   * @public
   */
  purchaseOrderReference?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementRequestInput {
  /**
   * The unique identifier of the agreement request.
   *
   * @public
   */
  agreementRequestId: string | undefined;

  /**
   * A list of purchase orders associated with accepting a marketplace agreement request.
   *
   * @public
   */
  purchaseOrders?: PurchaseOrder[] | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementRequestOutput {
  /**
   * The unique identifier of the agreement created or modified by accepting the agreement request.
   *
   * @public
   */
  agreementId?: string | undefined;
}

/**
 * Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.
 *
 * @public
 */
export interface ByolPricingTerm {
  /**
   * Type of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Defines the dimensions that the acceptor has purchased from the overall set of dimensions presented in the rate card.
 *
 * @public
 */
export interface Dimension {
  /**
   * The name of key value of the dimension.
   *
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * The number of units of the dimension the acceptor has purchased.
   *
   * > **Note:** For Agreements with `ConfigurableUpfrontPricingTerm`, the `RateCard` section will define the prices and dimensions defined by the seller (proposer), whereas the `Configuration` section will define the actual dimensions, prices, and units the buyer has chosen to accept.
   *
   * @public
   */
  dimensionValue: number | undefined;
}

/**
 * Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.
 *
 * @public
 */
export interface ConfigurableUpfrontPricingTermConfiguration {
  /**
   * Defines the length of time for which the particular pricing/dimension is being purchased by the acceptor.
   *
   * @public
   */
  selectorValue: string | undefined;

  /**
   * Defines the dimensions that the acceptor has purchased from the overall set of dimensions presented in the rate card.
   *
   * @public
   */
  dimensions: Dimension[] | undefined;
}

/**
 * Defines limits on how the term can be configured by acceptors.
 *
 * @public
 */
export interface Constraints {
  /**
   * Determines if buyers are allowed to select multiple dimensions in the rate card. The possible values are `Allowed` and `Disallowed`. The default value is `Allowed`.
   *
   * @public
   */
  multipleDimensionSelection?: string | undefined;

  /**
   * Determines if acceptors are allowed to configure quantity for each dimension in rate card. The possible values are `Allowed` and `Disallowed`. The default value is `Allowed`.
   *
   * @public
   */
  quantityConfiguration?: string | undefined;
}

/**
 * Defines the per unit rates for each individual product dimension.
 *
 * @public
 */
export interface RateCardItem {
  /**
   * Dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
   *
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * Per unit price for the product dimension that’s used for calculating the amount to be charged.
   *
   * @public
   */
  price?: string | undefined;
}

/**
 * Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.
 *
 * @public
 */
export interface Selector {
  /**
   * Category of selector.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * Contract duration. This field supports the ISO 8601 format.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Within the prepaid payment model defined under `ConfigurableUpfrontPricingTerm`, the `RateCardItem` defines all the various rate cards (including pricing and dimensions) that have been proposed.
 *
 * @public
 */
export interface ConfigurableUpfrontRateCardItem {
  /**
   * Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.
   *
   * @public
   */
  selector?: Selector | undefined;

  /**
   * Defines limits on how the term can be configured by acceptors.
   *
   * @public
   */
  constraints?: Constraints | undefined;

  /**
   * Defines the per unit rates for product dimensions.
   *
   * @public
   */
  rateCard?: RateCardItem[] | undefined;
}

/**
 * Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.
 *
 * @public
 */
export interface ConfigurableUpfrontPricingTerm {
  /**
   * Category of selector.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier of the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in the term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * A rate card defines the per unit rates for product dimensions.
   *
   * @public
   */
  rateCards?: ConfigurableUpfrontRateCardItem[] | undefined;

  /**
   * Additional parameters specified by the acceptor while accepting the term.
   *
   * @public
   */
  configuration?: ConfigurableUpfrontPricingTermConfiguration | undefined;
}

/**
 * Entitlements granted to the acceptor of fixed upfront as part of agreement execution.
 *
 * @public
 */
export interface GrantItem {
  /**
   * Unique dimension key defined in the product document. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
   *
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * Maximum amount of capacity that the buyer can be entitled to the given dimension of the product. If `MaxQuantity` is not provided, the buyer will be able to use an unlimited amount of the given dimension.
   *
   * @public
   */
  maxQuantity?: number | undefined;
}

/**
 * Defines a prepaid pricing model where the customers are charged a fixed upfront amount.
 *
 * @public
 */
export interface FixedUpfrontPricingTerm {
  /**
   * Category of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in this term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * Contract duration for the terms.
   *
   * @public
   */
  duration?: string | undefined;

  /**
   * Fixed amount to be charged to the customer when this term is accepted.
   *
   * @public
   */
  price?: string | undefined;

  /**
   * Entitlements granted to the acceptor of fixed upfront as part of agreement execution.
   *
   * @public
   */
  grants?: GrantItem[] | undefined;
}

/**
 * Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.
 *
 * @public
 */
export interface FreeTrialPricingTerm {
  /**
   * Category of the term.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the terms.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Duration of the free trial period (5–31 days).
   *
   * @public
   */
  duration?: string | undefined;

  /**
   * Entitlements granted to the acceptor of a free trial as part of an agreement execution.
   *
   * @public
   */
  grants?: GrantItem[] | undefined;
}

/**
 * Includes the list of references to legal resources proposed by the proposer to the acceptor. Each `DocumentItem` refers to an individual reference.
 *
 * @public
 */
export interface DocumentItem {
  /**
   * Category of the document. Document types include:
   *
   * - `CustomEula` – A custom EULA provided by you as seller. A URL for a EULA stored in an accessible Amazon S3 bucket is required for this document type.
   * - `CustomDsa` – A custom Data Subscription Agreement (DSA) provided by you as seller. A URL for a DSA stored in an accessible Amazon S3 bucket is required for this document type.
   * - `StandardEula` – The Standard Contract for AWS Marketplace (SCMP). For more information about SCMP, see the AWS Marketplace Seller Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.
   * - `StandardDsa` – DSA for AWS Marketplace. For more information about the DSA, see the AWS Data Exchange User Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * A URL to the legal document for buyers to read. Required when `Type` is `CustomEula`.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * Version of standard contracts provided by AWS Marketplace. Required when Type is `StandardEula` or `StandardDsa`.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).
 *
 * @public
 */
export interface LegalTerm {
  /**
   * Category of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifer for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * List of references to legal resources proposed to the buyers. An example is the EULA.
   *
   * @public
   */
  documents?: DocumentItem[] | undefined;
}

/**
 * Defines the net payment due period for the agreement, specifying when payment is due after an invoice is issued.
 *
 * @public
 */
export interface NetPaymentTerm {
  /**
   * Type of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The duration after an invoice is issued within which the payment is due. The duration is represented in the ISO 8601 format (for example, `P30D` for 30 days or `P60D` for 60 days).
   *
   * @public
   */
  paymentDuePeriod?: string | undefined;
}

/**
 * An individual installment of the payment that includes the date and amount of the charge.
 *
 * @public
 */
export interface ScheduleItem {
  /**
   * The date that the customer would pay the price defined in this payment schedule term. Invoices are generated on the date provided.
   *
   * @public
   */
  chargeDate?: Date | undefined;

  /**
   * The price that the customer would pay on the scheduled date (chargeDate).
   *
   * @public
   */
  chargeAmount?: string | undefined;
}

/**
 * Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.
 *
 * @public
 */
export interface PaymentScheduleTerm {
  /**
   * Type of the term.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in the term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * List of the payment schedule where each element defines one installment of payment. It contains the information necessary for calculating the price.
   *
   * @public
   */
  schedule?: ScheduleItem[] | undefined;
}

/**
 * Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.
 *
 * @public
 */
export interface RecurringPaymentTerm {
  /**
   * Type of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in this term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * Defines the recurrence at which buyers are charged.
   *
   * @public
   */
  billingPeriod?: string | undefined;

  /**
   * Amount charged to the buyer every billing period.
   *
   * @public
   */
  price?: string | undefined;
}

/**
 * Additional parameters specified by the acceptor while accepting the term.
 *
 * @public
 */
export interface RenewalTermConfiguration {
  /**
   * Defines whether the acceptor has chosen to auto-renew the agreement when it reaches its end date. Can be set to `True` or `False`. The acceptor can change this value within the limits set by `LockoutPeriod` and `MaxRenewals`.
   *
   * @public
   */
  enableAutoRenew: boolean | undefined;
}

/**
 * A fixed price increase that is applied each time the agreement renews.
 *
 * @public
 */
export interface FixedPercentage {
  /**
   * The percentage by which the price increases at each renewal, from `0.00` to `100.00` with up to two decimal places. A value of `0.00` means that the agreement renews at the same price.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A range of price increase percentages that the proposer can choose from before the adjustment deadline of the agreement.
 *
 * `MinValue` will be less than `MaxValue`, and `DefaultValue` will fall within the range. When the proposer authorizes a single percentage instead of a range, `PriceIncrease` is a `FixedPercentage` rather than a `PercentageRange`.
 *
 * @public
 */
export interface PercentageRange {
  /**
   * The lowest percentage that the proposer can choose, from `0.00` to `100.00` with up to two decimal places.
   *
   * @public
   */
  minValue?: string | undefined;

  /**
   * The highest percentage that the proposer can choose, from `0.00` to `100.00` with up to two decimal places.
   *
   * @public
   */
  maxValue?: string | undefined;

  /**
   * The percentage that is applied if the proposer doesn't choose a value before the adjustment deadline. Valid values range from `0.00` to `100.00`, with up to two decimal places.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * The price increase that is applied each time the agreement renews. Exactly one of the following fields is set.
 *
 * @public
 */
export type PriceIncrease =
  | PriceIncrease.FixedPercentageMember
  | PriceIncrease.PercentageRangeMember
  | PriceIncrease.$UnknownMember;

/**
 * @public
 */
export namespace PriceIncrease {
  /**
   * A fixed price increase percentage that is applied at each renewal.
   *
   * @public
   */
  export interface FixedPercentageMember {
    fixedPercentage: FixedPercentage;
    percentageRange?: never;
    $unknown?: never;
  }

  /**
   * A range of price increase percentages that the proposer can choose from before the adjustment deadline of the agreement.
   *
   * @public
   */
  export interface PercentageRangeMember {
    fixedPercentage?: never;
    percentageRange: PercentageRange;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fixedPercentage?: never;
    percentageRange?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fixedPercentage: (value: FixedPercentage) => T;
    percentageRange: (value: PercentageRange) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single installment in a payment schedule template. Because the start date of the renewed agreement isn't known when the offer is created, the charge date of each installment is expressed as an offset from that start date rather than as an absolute date.
 *
 * @public
 */
export interface PaymentScheduleEntry {
  /**
   * The time between the start date of the renewed agreement and the date this installment is charged. The duration is represented in the ISO 8601 format in either whole months or whole days (for example, `P1M` for 1 month or `P30D` for 30 days). All installments in a schedule use the same unit.
   *
   * @public
   */
  chargeDateOffset?: string | undefined;

  /**
   * The percentage of the total contract value of the renewed agreement that is charged in this installment. Valid values range from `0.01` to `100.00`, with up to two decimal places.
   *
   * @public
   */
  chargePercentage?: string | undefined;

  /**
   * The day of the month on which this installment is charged, from `1` to `31`. Use this field to anchor the charge to a specific calendar day within the month identified by `ChargeDateOffset`. This field is supported only when `ChargeDateOffset` is expressed in months.
   *
   * @public
   */
  dayOfMonth?: number | undefined;
}

/**
 * Defines the payment schedule that is applied to the renewed agreement.
 *
 * @public
 */
export interface PaymentScheduleTermTemplate {
  /**
   * The installments that make up the payment schedule of the renewed agreement. The `ChargePercentage` values of all installments add up to `100`.
   *
   * @public
   */
  schedule?: PaymentScheduleEntry[] | undefined;
}

/**
 * Defines how a specific type of term changes each time the agreement renews. Exactly one of the following fields is set.
 *
 * @public
 */
export type TermTemplate =
  | TermTemplate.PaymentScheduleTermTemplateMember
  | TermTemplate.$UnknownMember;

/**
 * @public
 */
export namespace TermTemplate {
  /**
   * Defines the payment schedule that is applied to the renewed agreement.
   *
   * @public
   */
  export interface PaymentScheduleTermTemplateMember {
    paymentScheduleTermTemplate: PaymentScheduleTermTemplate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    paymentScheduleTermTemplate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    paymentScheduleTermTemplate: (value: PaymentScheduleTermTemplate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of `RenewalTerm` in the offer document means that auto-renewal is allowed. The acceptor will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. The acceptor can also change this flag from `True` to `False` or `False` to `True`, within the limits set by `LockoutPeriod` and `MaxRenewals`. Setting the flag to `True` doesn't by itself guarantee that the agreement renews, because the proposer can also opt out.
 *
 * @public
 */
export interface RenewalTerm {
  /**
   * Category of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Additional parameters specified by the acceptor while accepting the term.
   *
   * @public
   */
  configuration?: RenewalTermConfiguration | undefined;

  /**
   * The renewal decision deadline, measured back from the end date of the agreement. This is the last day either party can opt in to or opt out of the renewal. The duration is represented in the ISO 8601 format in whole days (for example, `P30D` for 30 days or `P60D` for 60 days).
   *
   * The field is `null` when no renewal decision deadline is set. In that case, either party can change the auto-renewal decision up to the end date of the agreement.
   *
   * @public
   */
  lockoutPeriod?: string | undefined;

  /**
   * The maximum number of times the agreement can be renewed. The field is `null` when the number of renewals is unlimited.
   *
   * After the agreement reaches this limit, it expires on its end date instead of renewing.
   *
   * @public
   */
  maxRenewals?: number | undefined;

  /**
   * The date by which the proposer must finalize the price increase for the next renewal, measured back from the end date of the agreement. The duration is represented in the ISO 8601 format in whole days (for example, `P30D` for 30 days or `P60D` for 60 days).
   *
   * This field applies only when `PriceIncrease` is a `PercentageRange`. The field is `null` when `PriceIncrease` is a `FixedPercentage`, because the price increase is already fixed and there is nothing for the proposer to finalize. If the proposer doesn't finalize a value by the adjustment deadline, the `DefaultValue` of the range applies.
   *
   * `AdjustmentDeadline` must be greater than `LockoutPeriod`.
   *
   * @public
   */
  adjustmentDeadline?: string | undefined;

  /**
   * The price increase that is applied each time the agreement renews. The field is `null` when the price doesn't change at renewal.
   *
   * @public
   */
  priceIncrease?: PriceIncrease | undefined;

  /**
   * Defines how specific terms change each time the agreement renews. The field is `null` when no terms change at renewal.
   *
   * @public
   */
  termTemplates?: TermTemplate[] | undefined;
}

/**
 * Defines the customer support available for the acceptors when they purchase the software.
 *
 * @public
 */
export interface SupportTerm {
  /**
   * Category of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Free-text field about the refund policy description that will be shown to customers as is on the website and console.
   *
   * @public
   */
  refundPolicy?: string | undefined;
}

/**
 * Within the pay-as-you-go model defined under `UsageBasedPricingTerm`, the `UsageBasedRateCardItem` defines an individual rate for a product dimension.
 *
 * @public
 */
export interface UsageBasedRateCardItem {
  /**
   * Defines the per unit rates for product dimensions.
   *
   * @public
   */
  rateCard?: RateCardItem[] | undefined;
}

/**
 * Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.
 *
 * @public
 */
export interface UsageBasedPricingTerm {
  /**
   * Category of the term.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in the term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * List of rate cards.
   *
   * @public
   */
  rateCards?: UsageBasedRateCardItem[] | undefined;
}

/**
 * Defines the conditions that will keep an agreement created from this offer valid.
 *
 * @public
 */
export interface ValidityTerm {
  /**
   * Category of the term being updated.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the duration that the agreement remains active. If `AgreementStartDate` isn’t provided, the agreement duration is relative to the agreement signature time. The duration is represented in the ISO_8601 format.
   *
   * @public
   */
  agreementDuration?: string | undefined;

  /**
   * Defines the date when agreement starts. The agreement starts at 00:00:00.000 UTC on the date provided. If `AgreementStartDate` isn’t provided, the agreement start date is determined based on agreement signature time.
   *
   * @public
   */
  agreementStartDate?: Date | undefined;

  /**
   * Defines the date when the agreement ends. The agreement ends at 23:59:59.999 UTC on the date provided. If `AgreementEndDate` isn’t provided, the agreement end date is determined by the validity of individual terms.
   *
   * @public
   */
  agreementEndDate?: Date | undefined;
}

/**
 * Additional parameters specified by the acceptor while accepting the variable payment term.
 *
 * @public
 */
export interface VariablePaymentTermConfiguration {
  /**
   * Defines the strategy for approving payment requests. Values include `AUTO_APPROVE_ON_EXPIRATION` and `WAIT_FOR_APPROVAL`
   *
   * @public
   */
  paymentRequestApprovalStrategy: PaymentRequestApprovalStrategy | undefined;

  /**
   * Defines the duration after which a payment request is automatically approved if no further action is taken. This only applies when the payment request approval strategy is set to `AUTO_APPROVE_ON_EXPIRATION`. The duration is represented in the ISO_8601 format (e.g., P10D for 10 days).
   *
   * @public
   */
  expirationDuration?: string | undefined;
}

/**
 * Defines a payment model where sellers can submit variable payment requests up to a maximum charge amount, with configurable approval strategies and expiration timelines.
 *
 * @public
 */
export interface VariablePaymentTerm {
  /**
   * Type of the term.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The unique identifier for the term.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Defines the currency for the prices mentioned in the term.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The maximum total amount that can be charged to the customer through variable payment requests under this term.
   *
   * @public
   */
  maxTotalChargeAmount?: string | undefined;

  /**
   * Additional parameters specified by the acceptor while accepting the term.
   *
   * @public
   */
  configuration?: VariablePaymentTermConfiguration | undefined;
}

/**
 * A subset of terms proposed by the proposer, which have been accepted by the acceptor as part of agreement creation.
 *
 * @public
 */
export type AcceptedTerm =
  | AcceptedTerm.ByolPricingTermMember
  | AcceptedTerm.ConfigurableUpfrontPricingTermMember
  | AcceptedTerm.FixedUpfrontPricingTermMember
  | AcceptedTerm.FreeTrialPricingTermMember
  | AcceptedTerm.LegalTermMember
  | AcceptedTerm.NetPaymentTermMember
  | AcceptedTerm.PaymentScheduleTermMember
  | AcceptedTerm.RecurringPaymentTermMember
  | AcceptedTerm.RenewalTermMember
  | AcceptedTerm.SupportTermMember
  | AcceptedTerm.UsageBasedPricingTermMember
  | AcceptedTerm.ValidityTermMember
  | AcceptedTerm.VariablePaymentTermMember
  | AcceptedTerm.$UnknownMember;

/**
 * @public
 */
export namespace AcceptedTerm {
  /**
   * Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).
   *
   * @public
   */
  export interface LegalTermMember {
    legalTerm: LegalTerm;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines the customer support available for the acceptors when they purchase the software.
   *
   * @public
   */
  export interface SupportTermMember {
    legalTerm?: never;
    supportTerm: SupportTerm;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of `RenewalTerm` in the offer document means that auto-renewal is allowed. The acceptor will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. The acceptor can also change this flag from `True` to `False` or `False` to `True`, within the limits set by `LockoutPeriod` and `MaxRenewals`. Setting the flag to `True` doesn't by itself guarantee that the agreement renews, because the proposer can also opt out.
   *
   * @public
   */
  export interface RenewalTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm: RenewalTerm;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.
   *
   * @public
   */
  export interface UsageBasedPricingTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm: UsageBasedPricingTerm;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.
   *
   * @public
   */
  export interface ConfigurableUpfrontPricingTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm: ConfigurableUpfrontPricingTerm;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.
   *
   * @public
   */
  export interface ByolPricingTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm: ByolPricingTerm;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.
   *
   * @public
   */
  export interface RecurringPaymentTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm: RecurringPaymentTerm;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines the conditions that will keep an agreement created from this offer valid.
   *
   * @public
   */
  export interface ValidityTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm: ValidityTerm;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.
   *
   * @public
   */
  export interface PaymentScheduleTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm: PaymentScheduleTerm;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.
   *
   * @public
   */
  export interface FreeTrialPricingTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm: FreeTrialPricingTerm;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a pre-paid pricing model where the customers are charged a fixed upfront amount.
   *
   * @public
   */
  export interface FixedUpfrontPricingTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm: FixedUpfrontPricingTerm;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines a payment model where sellers can submit variable payment requests up to a maximum charge amount, with configurable approval strategies and expiration timelines.
   *
   * @public
   */
  export interface VariablePaymentTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm: VariablePaymentTerm;
    netPaymentTerm?: never;
    $unknown?: never;
  }

  /**
   * Defines the net payment due period for the agreement, specifying when payment is due after an invoice is issued.
   *
   * @public
   */
  export interface NetPaymentTermMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm: NetPaymentTerm;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    legalTerm?: never;
    supportTerm?: never;
    renewalTerm?: never;
    usageBasedPricingTerm?: never;
    configurableUpfrontPricingTerm?: never;
    byolPricingTerm?: never;
    recurringPaymentTerm?: never;
    validityTerm?: never;
    paymentScheduleTerm?: never;
    freeTrialPricingTerm?: never;
    fixedUpfrontPricingTerm?: never;
    variablePaymentTerm?: never;
    netPaymentTerm?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    legalTerm: (value: LegalTerm) => T;
    supportTerm: (value: SupportTerm) => T;
    renewalTerm: (value: RenewalTerm) => T;
    usageBasedPricingTerm: (value: UsageBasedPricingTerm) => T;
    configurableUpfrontPricingTerm: (value: ConfigurableUpfrontPricingTerm) => T;
    byolPricingTerm: (value: ByolPricingTerm) => T;
    recurringPaymentTerm: (value: RecurringPaymentTerm) => T;
    validityTerm: (value: ValidityTerm) => T;
    paymentScheduleTerm: (value: PaymentScheduleTerm) => T;
    freeTrialPricingTerm: (value: FreeTrialPricingTerm) => T;
    fixedUpfrontPricingTerm: (value: FixedUpfrontPricingTerm) => T;
    variablePaymentTerm: (value: VariablePaymentTerm) => T;
    netPaymentTerm: (value: NetPaymentTerm) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of the party accepting the agreement terms. This is commonly the buyer for `PurchaseAgreement`.
 *
 * @public
 */
export interface Acceptor {
  /**
   * The AWS account ID of the acceptor.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Summary view of an agreement cancellation request.
 *
 * @public
 */
export interface AgreementCancellationRequestSummary {
  /**
   * The unique identifier of the cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this cancellation request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The current status of the cancellation request. Possible values include `PENDING_APPROVAL`, `APPROVED`, `REJECTED`, `CANCELLED`, and `VALIDATION_FAILED`.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * The reason code provided for the cancellation.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The type of agreement.
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * The catalog in which the agreement was created.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The date and time when the cancellation request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the cancellation request was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * The list of resources involved in the agreement.
 *
 * @public
 */
export interface Resource {
  /**
   * The unique identifier of the resource.
   *
   * > **Note:** We mention the term resource, which is most commonly a product, so a `resourceId` is also a `productId`.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Type of the resource, which is the product (for example, `SaaSProduct`, `AmiProduct`, `ContainerProduct`).
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * Represents an entitlement associated with an agreement, including the provisioning status, resource, and type.
 *
 * @public
 */
export interface AgreementEntitlement {
  /**
   * The resource that the entitlement is provisioned to, such as a product.
   *
   * @public
   */
  resource?: Resource | undefined;

  /**
   * The type of entitlement.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * A short-lived token required by acceptors to register their account with the product provider. The token is only valid for 30 minutes after creation and is only applicable for purchase agreements.
   *
   * @public
   */
  registrationToken?: string | undefined;

  /**
   * The current state of an entitlement.
   *
   * @public
   */
  status?: AgreementEntitlementStatus | undefined;

  /**
   * Provides more information about the status of an entitlement.
   *
   * @public
   */
  statusReasonCode?: AgreementEntitlementStatusReasonCode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS License Manager license associated with the entitlement.
   *
   * @public
   */
  licenseArn?: string | undefined;
}

/**
 * The billing period for an invoice, specified by month and year.
 *
 * @public
 */
export interface InvoiceBillingPeriod {
  /**
   * The billing period month. Valid range: 1-12.
   *
   * @public
   */
  month: number | undefined;

  /**
   * The billing period year.
   *
   * @public
   */
  year: number | undefined;
}

/**
 * The entity responsible for issuing the invoice.
 *
 * @public
 */
export interface InvoicingEntity {
  /**
   * Legal name of the entity issuing the invoice.
   *
   * @public
   */
  legalName?: string | undefined;

  /**
   * The branch where the issuing entity is operating from.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * Monetary amounts associated with an invoice line item group.
 *
 * @public
 */
export interface PricingCurrencyAmount {
  /**
   * The monetary amount before tax.
   *
   * @public
   */
  amount?: string | undefined;

  /**
   * The maximum refundable amount as a string representation of a decimal number.
   *
   * @public
   */
  maxAdjustmentAmount?: string | undefined;

  /**
   * The 3-letter ISO 4217 currency code (e.g., `USD`, `EUR`, `JPY`).
   *
   * @public
   */
  currencyCode?: string | undefined;
}

/**
 * A summary of grouped billing data for an agreement invoice line item.
 *
 * @public
 */
export interface AgreementInvoiceLineItemGroupSummary {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The identifier of the invoice for this group.
   *
   * @public
   */
  invoiceId?: string | undefined;

  /**
   * Monetary amounts for this invoice group.
   *
   * @public
   */
  pricingCurrencyAmount?: PricingCurrencyAmount | undefined;

  /**
   * The billing period associated with this group.
   *
   * @public
   */
  invoiceBillingPeriod?: InvoiceBillingPeriod | undefined;

  /**
   * The timestamp when the invoice containing this group was created.
   *
   * @public
   */
  issuedTime?: Date | undefined;

  /**
   * The type of invoice. Valid values are `INVOICE` and `CREDIT_MEMO`.
   *
   * @public
   */
  invoiceType?: InvoiceType | undefined;

  /**
   * The entity that issues the invoice.
   *
   * @public
   */
  invoicingEntity?: InvoicingEntity | undefined;
}

/**
 * Represents an entitlement associated with an agreement.
 *
 * @public
 */
export interface Entitlement {
  /**
   * The Amazon Resource Name (ARN) of the AWS License Manager license associated with the entitlement.
   *
   * @public
   */
  licenseArn?: string | undefined;
}

/**
 * A summary of the proposal received from the proposer.
 *
 * @public
 */
export interface ProposalSummary {
  /**
   * The list of resources involved in the agreement.
   *
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * The unique identifier of the offer in AWS Marketplace.
   *
   * @public
   */
  offerId?: string | undefined;

  /**
   * A unique identifier for the offer set containing this offer. All agreements created from offers in this set include this identifier as context.
   *
   * @public
   */
  offerSetId?: string | undefined;
}

/**
 * Details of the party proposing the agreement terms,. This is commonly the seller for `PurchaseAgreement`.
 *
 * @public
 */
export interface Proposer {
  /**
   * The AWS account ID of the proposer.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * A summary of the agreement, including top-level attributes (for example, the agreement ID, proposer, and acceptor).
 *
 * @public
 */
export interface AgreementViewSummary {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The date and time that the agreement was accepted.
   *
   * @public
   */
  acceptanceTime?: Date | undefined;

  /**
   * The date and time when the agreement starts.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time when the agreement ends. The field is `null` for pay-as-you-go agreements, which don’t have end dates.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The date and time when the agreement was last updated. An agreement is updated when any of its attributes or accepted terms change. Amendments, renewals, and a party changing whether the agreement renews are all examples.
   *
   * Use the `BeforeLastUpdateTime` and `AfterLastUpdateTime` filters to search on this value, and `LastUpdateTime` as the `SortBy` value to sort by it. Sorting by `LastUpdateTime` is supported only when `PartyType` is `Proposer`.
   *
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * The type of agreement.
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * Details of the party accepting the agreement terms. This is commonly the buyer for `PurchaseAgreement.`
   *
   * @public
   */
  acceptor?: Acceptor | undefined;

  /**
   * Details of the party proposing the agreement terms, most commonly the seller for `PurchaseAgreement`.
   *
   * @public
   */
  proposer?: Proposer | undefined;

  /**
   * A summary of the proposal
   *
   * @public
   */
  proposalSummary?: ProposalSummary | undefined;

  /**
   * The current status of the agreement.
   *
   * @public
   */
  status?: AgreementStatus | undefined;

  /**
   * A list of entitlements associated with the agreement.
   *
   * @public
   */
  entitlements?: Entitlement[] | undefined;

  /**
   * The unique identifier of the very first agreement in a chain of related agreements, such as renewals or replacements. It stays the same across all agreements in that chain, which lets you trace an agreement back to the original. You can also use it as the `InitialAgreementId` filter value to return every agreement in the same chain.
   *
   * @public
   */
  initialAgreementId?: string | undefined;

  /**
   * The behavior of the agreement when it reaches its end date. The field is `null` for agreements that have no end date, because those agreements never reach an end time.
   *
   * Types include:
   *
   * - `RENEW` – A new agreement is created from the accepted terms of this agreement.
   * - `REPLACE` – A new agreement is created from a different offer than the one this agreement was created from. This happens, for example, when a private offer reaches its end date and the acceptor transitions to the public offer for the product.
   * - `EXPIRE` – The agreement ends and isn't renewed or replaced.
   *
   * @public
   */
  endTimeBehaviorType?: EndTimeBehaviorType | undefined;

  /**
   * The reason why the agreement doesn't renew at its end date. The field is `null` when the agreement renews.
   *
   * More than one reason can apply to the same agreement. When that happens, the operation returns only one reason code, and `PROPOSER_RENEW_OPTED_OUT` takes precedence over all others.
   *
   * The `EnableAutoRenew` field reflects only the acceptor's preference, and doesn't reflect the other reasons an agreement might not renew.
   *
   * Reason codes include:
   *
   * - `PROPOSER_RENEW_OPTED_OUT` – The proposer opted out of renewing the agreement.
   * - `ACCEPTOR_RENEW_OPTED_OUT` – The acceptor opted out of renewing the agreement.
   * - `NO_RENEWAL_TERM` – The accepted terms of the agreement don't include a renewal term, which is required for an agreement to renew.
   * - `RENEWAL_LIMIT_EXHAUSTED` – The agreement reached the maximum number of renewals allowed by its renewal term.
   *
   * @public
   */
  endTimeBehaviorReasonCode?: EndTimeBehaviorReasonCode | undefined;
}

/**
 * An individual entry in a batch billing adjustment request, specifying the invoice and adjustment details.
 *
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestEntry {
  /**
   * The unique identifier of the agreement associated with the invoice.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The identifier of the original invoice to adjust.
   *
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * The adjustment amount as a string representation of a decimal number in the currency of the invoice.
   *
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * The 3-letter ISO 4217 currency code for the adjustment amount. Must match the currency code of the offer associated with the agreement (e.g., `USD`).
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The reason code for the billing adjustment.
   *
   * @public
   */
  adjustmentReasonCode: BillingAdjustmentReasonCode | undefined;

  /**
   * An optional detailed description of the adjustment reason.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestInput {
  /**
   * A list of billing adjustment request entries. Each entry specifies the invoice and adjustment details.
   *
   * @public
   */
  billingAdjustmentRequestEntries: BatchCreateBillingAdjustmentRequestEntry[] | undefined;
}

/**
 * An error for a billing adjustment request entry that failed validation.
 *
 * @public
 */
export interface BatchCreateBillingAdjustmentError {
  /**
   * The error code indicating the reason for failure.
   *
   * @public
   */
  code: BillingAdjustmentErrorCode | undefined;

  /**
   * A human-readable message describing the error.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The client token of the request entry that failed.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * A successfully created billing adjustment request item.
 *
 * @public
 */
export interface BatchCreateBillingAdjustmentItem {
  /**
   * The unique identifier of the created billing adjustment request.
   *
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * The client token provided in the corresponding request entry.
   *
   * @public
   */
  clientToken: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestOutput {
  /**
   * A list of successfully created billing adjustment items, each containing the `billingAdjustmentRequestId` and `clientToken`.
   *
   * @public
   */
  items: BatchCreateBillingAdjustmentItem[] | undefined;

  /**
   * A list of errors for entries that failed validation, each containing the `clientToken`, error `code`, and `message`.
   *
   * @public
   */
  errors: BatchCreateBillingAdjustmentError[] | undefined;
}

/**
 * @public
 */
export interface CancelAgreementInput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface CancelAgreementOutput {}

/**
 * @public
 */
export interface CancelAgreementCancellationRequestInput {
  /**
   * The unique identifier of the agreement associated with the cancellation request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the cancellation request to cancel.
   *
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * A required message explaining why the cancellation request is being withdrawn (1-2000 characters).
   *
   * @public
   */
  cancellationReason: string | undefined;
}

/**
 * @public
 */
export interface CancelAgreementCancellationRequestOutput {
  /**
   * The unique identifier of the cancelled cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this cancellation request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The original reason code provided when the cancellation request was created.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The detailed description of the original cancellation reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated status of the cancellation request, which is `CANCELLED`.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * A message providing additional context about the cancellation request status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when the cancellation request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the cancellation request was cancelled.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CancelAgreementPaymentRequestInput {
  /**
   * The unique identifier of the payment request to cancel.
   *
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with the payment request.
   *
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface CancelAgreementPaymentRequestOutput {
  /**
   * The unique identifier of the cancelled payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this payment request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The updated status of the payment request, which is `CANCELLED`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The detailed description of the payment request, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The amount that was requested to be charged.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The date and time when the payment request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the payment request was cancelled.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A tagged union that represents the term configuration provided by the acceptor. Only one configuration is accepted per term.
 *
 * @public
 */
export type RequestedTermConfiguration =
  | RequestedTermConfiguration.ConfigurableUpfrontPricingTermConfigurationMember
  | RequestedTermConfiguration.RenewalTermConfigurationMember
  | RequestedTermConfiguration.VariablePaymentTermConfigurationMember
  | RequestedTermConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RequestedTermConfiguration {
  /**
   * Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.
   *
   * @public
   */
  export interface ConfigurableUpfrontPricingTermConfigurationMember {
    configurableUpfrontPricingTermConfiguration: ConfigurableUpfrontPricingTermConfiguration;
    renewalTermConfiguration?: never;
    variablePaymentTermConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Additional parameters specified by the acceptor while accepting the term.
   *
   * @public
   */
  export interface RenewalTermConfigurationMember {
    configurableUpfrontPricingTermConfiguration?: never;
    renewalTermConfiguration: RenewalTermConfiguration;
    variablePaymentTermConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Additional parameters specified by the acceptor while accepting the variable payment term.
   *
   * @public
   */
  export interface VariablePaymentTermConfigurationMember {
    configurableUpfrontPricingTermConfiguration?: never;
    renewalTermConfiguration?: never;
    variablePaymentTermConfiguration: VariablePaymentTermConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configurableUpfrontPricingTermConfiguration?: never;
    renewalTermConfiguration?: never;
    variablePaymentTermConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    configurableUpfrontPricingTermConfiguration: (value: ConfigurableUpfrontPricingTermConfiguration) => T;
    renewalTermConfiguration: (value: RenewalTermConfiguration) => T;
    variablePaymentTermConfiguration: (value: VariablePaymentTermConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines what is being accepted as part of the agreement creation or update request, and it includes their configurations.
 *
 * @public
 */
export interface RequestedTerm {
  /**
   * The unique identifier of the term in the agreement proposal.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Additional configuration for the requested terms. This configuration is applicable only to the terms that accept a customer-provided configuration, such as `ConfigurableUpfrontPricingTerm`.
   *
   * @public
   */
  configuration?: RequestedTermConfiguration | undefined;
}

/**
 * Configuration controls for tax estimation in the agreement request.
 *
 * @public
 */
export interface TaxConfiguration {
  /**
   * Toggle to estimate tax as part of the response. Values include `ENABLED` and `DISABLED`. Default is `DISABLED`.
   *
   * @public
   */
  taxEstimation?: TaxEstimation | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequestInput {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The purpose and desired outcome of the agreement request. This is a required parameter that determines how the agreement request is processed.
   *
   * - `NEW` – Creates a new agreement for terms in the request.
   * - `AMEND` – Modifies an existing agreement with terms that are accepted in the request.
   * - `REPLACE` – Creates a new agreement with accepted terms and replaces the existing agreement.
   *
   * @public
   */
  intent: Intent | undefined;

  /**
   * A list of terms that define what is being accepted as part of the agreement. Some terms require configuration.
   *
   * @public
   */
  requestedTerms: RequestedTerm[] | undefined;

  /**
   * The agreement's identifier that the request acts upon.
   *
   * > **Important:** This parameter is required for all non-`NEW` intents (i.e., `AMEND` or `REPLACE`). Don't provide this parameter if the intent is `NEW`.
   *
   * @public
   */
  sourceAgreementIdentifier?: string | undefined;

  /**
   * The agreement proposal signed by the proposer. The proposal includes the requested resources and the terms that outline an agreement outcome.
   *
   * > **Important:** This parameter is required if the intent is not `AMEND`.
   *
   * @public
   */
  agreementProposalIdentifier?: string | undefined;

  /**
   * Configuration for tax estimation in the agreement request response.
   *
   * @public
   */
  taxConfiguration?: TaxConfiguration | undefined;
}

/**
 * Represents a single tax breakdown entry with amount, rate, and type.
 *
 * @public
 */
export interface TaxBreakdownItem {
  /**
   * The estimated tax amount.
   *
   * @public
   */
  amount?: string | undefined;

  /**
   * The tax rate, in decimals.
   *
   * @public
   */
  rate?: string | undefined;

  /**
   * The type of tax (for example, VAT, ST, or GST).
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * Provides an aggregated view of estimated tax information.
 *
 * @public
 */
export interface EstimatedTaxes {
  /**
   * A list of tax breakdown information.
   *
   * @public
   */
  breakdown?: TaxBreakdownItem[] | undefined;

  /**
   * The total amount of tax aggregated from the tax breakdown.
   *
   * @public
   */
  totalAmount?: string | undefined;
}

/**
 * Estimated charge for the request.
 *
 * @public
 */
export interface ExpectedCharge {
  /**
   * Unique identifier of the charge for a given agreement.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The date and time when the charge is due to be invoiced. This is available only when the charge date is known.
   *
   * @public
   */
  time?: Date | undefined;

  /**
   * The tax-exclusive amount of the charge. Only available when the charge amount is known.
   *
   * @public
   */
  amount?: string | undefined;

  /**
   * The tax-inclusive amount the acceptor has to pay. The amount is only present for fixed charges.
   *
   * @public
   */
  amountAfterTax?: string | undefined;

  /**
   * Indicates when the charge amount will be incurred. Values include `ON_ACCEPTANCE` (charged immediately when the agreement request is accepted), `BILLING_PERIOD` (charged on each billing period), and `SCHEDULED` (charged at a predetermined future date).
   *
   * @public
   */
  timing?: Timing | undefined;

  /**
   * Provides an aggregated view of estimated tax information for this specific charge.
   *
   * @public
   */
  estimatedTaxes?: EstimatedTaxes | undefined;
}

/**
 * A breakdown of individual charges or line items within a billing or pricing context.
 *
 * @public
 */
export interface ItemizedCharge {
  /**
   * The dimension key as specified in the accepted term.
   *
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * The requested quantity for this dimension.
   *
   * @public
   */
  newQuantity?: number | undefined;

  /**
   * The existing quantity for this dimension from the source agreement. This value is `0` for NEW intent.
   *
   * @public
   */
  oldQuantity?: number | undefined;

  /**
   * The identifier of the expected charge that this itemized charge contributes to.
   *
   * @public
   */
  chargeReference?: string | undefined;

  /**
   * The total incremental charge amount for this dimension.
   *
   * @public
   */
  incrementalChargeAmount?: string | undefined;
}

/**
 * The `ChargeSummary` provides a detailed breakdown of charges that are associated with an agreement request. This is applicable only when a request is created for a `PurchaseAgreement`.
 *
 * > **Note:**
 * >
 * > Tax and invoicing fields (such as `estimatedTaxes`, `amountAfterTax`, `newAgreementValueAfterTax`, and `invoicingEntity`) are returned on a best-effort basis and do not cause the request to fail if unavailable.
 * >
 * > A `null` tax amount can have two meanings:
 * >
 * > - Tax estimation was unavailable at the time of the request.
 * > - The charge timing is `BILLING_PERIOD`, so the charge amount is not determined at request time. In this case, the tax breakdown may still include the tax `rate` and `type`.
 *
 * @public
 */
export interface ChargeSummary {
  /**
   * The three-letter currency code for all charges (e.g., USD).
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The total value of the agreement, which includes any amendments.
   *
   * @public
   */
  newAgreementValue?: string | undefined;

  /**
   * Expected new agreement value after estimated taxes are applied.
   *
   * @public
   */
  newAgreementValueAfterTax?: string | undefined;

  /**
   * A list of expected charges for the agreement request.
   *
   * @public
   */
  expectedCharges?: ExpectedCharge[] | undefined;

  /**
   * Provides an aggregated view of estimated tax information for the agreement.
   *
   * @public
   */
  estimatedTaxes?: EstimatedTaxes | undefined;

  /**
   * An itemized list of charges for the agreement request.
   *
   * @public
   */
  itemizedCharges?: ItemizedCharge[] | undefined;

  /**
   * The entity responsible for issuing the invoice.
   *
   * @public
   */
  invoicingEntity?: InvoicingEntity | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequestOutput {
  /**
   * The unique identifier of the agreement request created. Use this identifier with `AcceptAgreementRequest` to accept the agreement.
   *
   * @public
   */
  agreementRequestId?: string | undefined;

  /**
   * Provides details of the charges associated with the agreement request. This is only applicable when a request is created for `PurchaseAgreement`.
   *
   * @public
   */
  chargeSummary?: ChargeSummary | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementInput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;
}

/**
 * The details of the renewal that applies at the end date of an agreement.
 *
 * @public
 */
export interface RenewalSummary {
  /**
   * The unique identifier of the offer that provides the terms for the next renewal cycle. For most renewals, this is the same offer that the agreement was created from.
   *
   * @public
   */
  offerId?: string | undefined;
}

/**
 * The behavior of an agreement when it reaches its end date. For example, whether the agreement renews, and if it doesn't, the reason why.
 *
 * @public
 */
export interface EndTimeBehavior {
  /**
   * The behavior of the agreement when it reaches its end date.
   *
   * Types include:
   *
   * - `RENEW` – A new agreement is created from the accepted terms of this agreement.
   * - `REPLACE` – A new agreement is created from a different offer than the one this agreement was created from. This happens, for example, when a private offer reaches its end date and the acceptor transitions to the public offer for the product.
   * - `EXPIRE` – The agreement ends and isn't renewed or replaced.
   *
   * @public
   */
  type: EndTimeBehaviorType | undefined;

  /**
   * The reason why the agreement doesn't renew at its end date. The field is `null` when the agreement renews.
   *
   * More than one reason can apply to the same agreement. When that happens, the operation returns only one reason code, and `PROPOSER_RENEW_OPTED_OUT` takes precedence over all others.
   *
   * The `EnableAutoRenew` field reflects only the acceptor's preference, and doesn't reflect the other reasons an agreement might not renew.
   *
   * Reason codes include:
   *
   * - `PROPOSER_RENEW_OPTED_OUT` – The proposer opted out of renewing the agreement.
   * - `ACCEPTOR_RENEW_OPTED_OUT` – The acceptor opted out of renewing the agreement.
   * - `NO_RENEWAL_TERM` – The accepted terms of the agreement don't include a renewal term, which is required for an agreement to renew.
   * - `RENEWAL_LIMIT_EXHAUSTED` – The agreement reached the maximum number of renewals allowed by its renewal term.
   *
   * @public
   */
  reasonCode?: EndTimeBehaviorReasonCode | undefined;

  /**
   * The details of the renewal that applies at the end date of the agreement. This field is present when `Type` is `RENEW`. It is also present when `ReasonCode` is `PROPOSER_RENEW_OPTED_OUT` or `ACCEPTOR_RENEW_OPTED_OUT`. In those cases, it identifies the offer that the agreement would otherwise have renewed from. The field is `null` in all other cases.
   *
   * @public
   */
  renewalSummary?: RenewalSummary | undefined;
}

/**
 * Estimated cost of the agreement.
 *
 * @public
 */
export interface EstimatedCharges {
  /**
   * Defines the currency code for the charge.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The total known amount customer has to pay across the lifecycle of the agreement.
   *
   * > **Note:**
   * >
   * > This is the total contract value if accepted terms contain `ConfigurableUpfrontPricingTerm` or `FixedUpfrontPricingTerm`. In the case of pure contract pricing, this will be the total value of the contract. In the case of contracts with consumption pricing, this will only include the committed value and not include any overages that occur.
   * >
   * > If the accepted terms contain `PaymentScheduleTerm`, it will be the total payment schedule amount. This occurs when flexible payment schedule is used, and is the sum of all invoice charges in the payment schedule.
   * >
   * > In case a customer has amended an agreement, by purchasing more units of any dimension, this will include both the original cost as well as the added cost incurred due to addition of new units.
   * >
   * > This is `0` if the accepted terms contain `UsageBasedPricingTerm` without `ConfigurableUpfrontPricingTerm` or `RecurringPaymentTerm`. This occurs for usage-based pricing (such as SaaS metered or AMI/container hourly or monthly), because the exact usage is not known upfront.
   *
   * @public
   */
  agreementValue?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementOutput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The details of the party accepting the agreement terms. This is commonly the buyer for `PurchaseAgreement`.
   *
   * @public
   */
  acceptor?: Acceptor | undefined;

  /**
   * The details of the party proposing the agreement terms. This is commonly the seller for `PurchaseAgreement`.
   *
   * @public
   */
  proposer?: Proposer | undefined;

  /**
   * The date and time when the agreement starts.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time when the agreement ends. The field is `null` for pay-as-you-go agreements, which don’t have end dates.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The date and time the offer was accepted or the agreement was created.
   *
   * > **Note:** `AcceptanceTime` and `StartTime` can differ for future dated agreements (FDAs).
   *
   * @public
   */
  acceptanceTime?: Date | undefined;

  /**
   * The type of agreement. Values are `PurchaseAgreement` or `VendorInsightsAgreement`.
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * The estimated cost of the agreement.
   *
   * @public
   */
  estimatedCharges?: EstimatedCharges | undefined;

  /**
   * A summary of the proposal received from the proposer.
   *
   * @public
   */
  proposalSummary?: ProposalSummary | undefined;

  /**
   * The current status of the agreement.
   *
   * Statuses include:
   *
   * - `ACTIVE` – The terms of the agreement are active.
   * - `CANCELLED` – The acceptor ended the agreement before the defined end date.
   * - `EXPIRED` – The agreement ended on the defined end date.
   * - `RENEWED` – The agreement was renewed into a new agreement (for example, an auto-renewal).
   * - `REPLACED` – The agreement was replaced using an agreement replacement offer.
   * - `TERMINATED` – The agreement ended before the defined end date because of an AWS termination (for example, a payment failure).
   *
   * @public
   */
  status?: AgreementStatus | undefined;

  /**
   * The unique identifier of the very first agreement in a chain of related agreements, such as renewals or replacements. It stays the same across all agreements in that chain, which lets you trace an agreement back to the original. When an agreement isn't derived from another agreement, its `InitialAgreementId` is its own `AgreementId`.
   *
   * @public
   */
  initialAgreementId?: string | undefined;

  /**
   * The behavior of the agreement when it reaches its end date. For example, whether the agreement renews, and if it doesn't, the reason why.
   *
   * This field is present for every active agreement that has an end date. It is not present for an agreement that has no end date, because such an agreement never reaches an end time. Pay-as-you-go agreements are the most common example. It is also not present for an agreement that is no longer active.
   *
   * @public
   */
  endTimeBehavior?: EndTimeBehavior | undefined;
}

/**
 * @public
 */
export interface GetAgreementCancellationRequestInput {
  /**
   * The unique identifier of the cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with the cancellation request.
   *
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementCancellationRequestOutput {
  /**
   * The unique identifier of the cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this cancellation request. Use `DescribeAgreement` to retrieve full agreement details.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The reason code provided for the cancellation.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The detailed description of the cancellation reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the cancellation request.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * A message providing additional context about the cancellation request status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when the cancellation request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the cancellation request was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAgreementEntitlementsInput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The maximum number of agreement entitlements to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementEntitlementsOutput {
  /**
   * A list of agreement entitlements which are part of the latest agreement.
   *
   * @public
   */
  agreementEntitlements?: AgreementEntitlement[] | undefined;

  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementPaymentRequestInput {
  /**
   * The identifier of the payment request.
   *
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with the payment request.
   *
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementPaymentRequestOutput {
  /**
   * The unique identifier of the payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this payment request. Use `DescribeAgreement` to retrieve full agreement details.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The current status of the payment request. Possible values include:
   *
   * - `VALIDATING` – The payment request is being validated against agreement terms.
   * - `VALIDATION_FAILED` – The payment request failed validation.
   * - `PENDING_APPROVAL` – The payment request is awaiting buyer action.
   * - `APPROVED` – The buyer has approved the payment request.
   * - `REJECTED` – The buyer has rejected the payment request.
   * - `CANCELLED` – The seller has cancelled the payment request.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * An optional message providing additional context about the payment request status, such as a rejection reason or validation failure details.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The detailed description of the payment request, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests and follows the pattern `ch-[a-zA-Z0-9]+`.
   *
   * @public
   */
  chargeId?: string | undefined;

  /**
   * The amount charged or to be charged to the buyer.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The date and time when the payment request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the payment request was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAgreementTermsInput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The maximum number of agreements to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementTermsOutput {
  /**
   * A subset of terms proposed by the proposer that have been accepted by the acceptor as part of the agreement creation.
   *
   * @public
   */
  acceptedTerms?: AcceptedTerm[] | undefined;

  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBillingAdjustmentRequestInput {
  /**
   * The unique identifier of the agreement associated with the billing adjustment request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the billing adjustment request.
   *
   * @public
   */
  billingAdjustmentRequestId: string | undefined;
}

/**
 * @public
 */
export interface GetBillingAdjustmentRequestOutput {
  /**
   * The unique identifier of the billing adjustment request.
   *
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with this billing adjustment request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The reason code for the billing adjustment.
   *
   * @public
   */
  adjustmentReasonCode: BillingAdjustmentReasonCode | undefined;

  /**
   * The detailed description of the billing adjustment reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier of the original invoice being adjusted.
   *
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * The adjustment amount as a string representation of a decimal number.
   *
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * The currency code for the adjustment amount (e.g., `USD`).
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The current status of the billing adjustment request.
   *
   * @public
   */
  status: BillingAdjustmentStatus | undefined;

  /**
   * A message providing additional context about the billing adjustment request status. This field is populated only when the status is `VALIDATION_FAILED`.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The date and time when the billing adjustment request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the billing adjustment request was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementCancellationRequestsInput {
  /**
   * The party type for the cancellation requests. Required parameter. Use `Proposer` to list cancellation requests where you are the seller, or `Acceptor` to list cancellation requests where you are the buyer.
   *
   * @public
   */
  partyType: string | undefined;

  /**
   * An optional parameter to filter cancellation requests for a specific agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * An optional parameter to filter cancellation requests by status.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * An optional parameter to filter cancellation requests by agreement type (e.g., `PurchaseAgreement`).
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * An optional parameter to filter cancellation requests by catalog (e.g., `AWSMarketplace`).
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The maximum number of cancellation requests to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementCancellationRequestsOutput {
  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of `AgreementCancellationRequestSummary` objects containing summary information about each cancellation request.
   *
   * @public
   */
  items?: AgreementCancellationRequestSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAgreementChargesInput {
  /**
   * The catalog in which the charges were created.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * Filter to retrieve charges of a specific agreement type (for example, `PurchaseAgreement`).
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * The maximum number of charges to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a charge associated with an agreement, including amount, timing, and purchase order details.
 *
 * @public
 */
export interface Charge {
  /**
   * The unique identifier of the charge.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The revision number of the charge.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The unique identifier of the agreement that resulted in this charge.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The type of agreement that resulted in this charge (for example, `PurchaseAgreement`).
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * The purchase order reference associated with the charge, if any.
   *
   * @public
   */
  purchaseOrderReference?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The amount of the charge.
   *
   * @public
   */
  amount?: string | undefined;

  /**
   * The date and time when the charge will be incurred. This is available only when the charge date is known.
   *
   * @public
   */
  time?: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementChargesOutput {
  /**
   * A list of agreement charges.
   *
   * @public
   */
  items?: Charge[] | undefined;

  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementInvoiceLineItemsInput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * Specifies a grouping strategy for line items. Currently supports `INVOICE_ID`.
   *
   * @public
   */
  groupBy: LineItemGroupBy | undefined;

  /**
   * An optional filter to retrieve invoice information for a specific invoice.
   *
   * @public
   */
  invoiceId?: string | undefined;

  /**
   * An optional filter for the type of invoice. Valid values are `INVOICE` and `CREDIT_MEMO`.
   *
   * @public
   */
  invoiceType?: InvoiceType | undefined;

  /**
   * An optional filter for the billing period associated with the invoice.
   *
   * @public
   */
  invoiceBillingPeriod?: InvoiceBillingPeriod | undefined;

  /**
   * An optional filter for invoices issued before the specified timestamp.
   *
   * @public
   */
  beforeIssuedTime?: Date | undefined;

  /**
   * An optional filter for invoices issued after the specified timestamp.
   *
   * @public
   */
  afterIssuedTime?: Date | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementInvoiceLineItemsOutput {
  /**
   * A list of grouped billing data objects.
   *
   * @public
   */
  agreementInvoiceLineItemGroupSummaries?: AgreementInvoiceLineItemGroupSummary[] | undefined;

  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementPaymentRequestsInput {
  /**
   * The party type for the payment requests. Required parameter. Use `Proposer` to list payment requests where you are the seller, or `Acceptor` to list payment requests where you are the buyer.
   *
   * @public
   */
  partyType: string | undefined;

  /**
   * An optional parameter to list payment requests by agreement type (e.g., `PurchaseAgreement`).
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * An optional parameter to list payment requests by catalog (e.g., `AWSMarketplace`).
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * An optional parameter to list payment requests for a specific agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * An optional parameter to list payment requests by status. Valid values include `VALIDATING`, `VALIDATION_FAILED`, `PENDING_APPROVAL`, `APPROVED`, `REJECTED`, and `CANCELLED`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The maximum number of payment requests to return in a single response (1-50). Default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary view of a payment request.
 *
 * @public
 */
export interface PaymentRequestSummary {
  /**
   * The unique identifier of the payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this payment request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The current status of the payment request. Possible values include `VALIDATING`, `VALIDATION_FAILED`, `PENDING_APPROVAL`, `APPROVED`, `REJECTED`, and `CANCELLED`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests.
   *
   * @public
   */
  chargeId?: string | undefined;

  /**
   * The amount charged or to be charged to the buyer.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The date and time when the payment request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the payment request was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementPaymentRequestsOutput {
  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of `PaymentRequestSummary` objects containing summary information about each payment request.
   *
   * @public
   */
  items: PaymentRequestSummary[] | undefined;
}

/**
 * @public
 */
export interface ListBillingAdjustmentRequestsInput {
  /**
   * The unique identifier of the agreement to list billing adjustment requests for.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * An optional filter to return billing adjustment requests with the specified status.
   *
   * @public
   */
  status?: BillingAdjustmentStatus | undefined;

  /**
   * An optional filter to return billing adjustment requests created after the specified timestamp.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * An optional filter to return billing adjustment requests created before the specified timestamp.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * The maximum number of billing adjustment requests to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional filter to return billing adjustment requests by catalog (e.g., `AWSMarketplace`).
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * An optional filter to return billing adjustment requests by agreement type (e.g., `PurchaseAgreement`).
   *
   * @public
   */
  agreementType?: string | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary view of a billing adjustment request.
 *
 * @public
 */
export interface BillingAdjustmentSummary {
  /**
   * The unique identifier of the billing adjustment request.
   *
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * The identifier of the original invoice being adjusted.
   *
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * The adjustment amount as a string representation of a decimal number.
   *
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * The currency code for the adjustment amount.
   *
   * @public
   */
  currencyCode: string | undefined;

  /**
   * The current status of the billing adjustment request.
   *
   * @public
   */
  status: BillingAdjustmentStatus | undefined;

  /**
   * The unique identifier of the agreement associated with this billing adjustment request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The date and time when the billing adjustment request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the billing adjustment request was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The type of agreement.
   *
   * @public
   */
  agreementType: string | undefined;

  /**
   * The catalog in which the agreement was created.
   *
   * @public
   */
  catalog: string | undefined;
}

/**
 * @public
 */
export interface ListBillingAdjustmentRequestsOutput {
  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of `BillingAdjustmentSummary` objects containing summary information about each billing adjustment request.
   *
   * @public
   */
  items: BillingAdjustmentSummary[] | undefined;
}

/**
 * @public
 */
export interface RejectAgreementCancellationRequestInput {
  /**
   * The unique identifier of the agreement associated with the cancellation request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the cancellation request to reject.
   *
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * The reason for rejecting the cancellation request (1-2000 characters). This message is visible to the seller.
   *
   * @public
   */
  rejectionReason: string | undefined;
}

/**
 * @public
 */
export interface RejectAgreementCancellationRequestOutput {
  /**
   * The unique identifier of the agreement associated with this cancellation request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The unique identifier of the rejected cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The updated status of the cancellation request, which is `REJECTED`.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * The rejection reason provided by the buyer.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The original reason code provided when the cancellation request was created.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The detailed description of the cancellation reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time when the cancellation request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the cancellation request was rejected.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface RejectAgreementPaymentRequestInput {
  /**
   * The unique identifier of the payment request to reject.
   *
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * The unique identifier of the agreement associated with the payment request.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * An optional reason for rejecting the payment request (1-250 characters). This message is visible to the seller.
   *
   * @public
   */
  rejectionReason?: string | undefined;
}

/**
 * @public
 */
export interface RejectAgreementPaymentRequestOutput {
  /**
   * The unique identifier of the rejected payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The unique identifier of the agreement associated with this payment request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The updated status of the payment request, which is `REJECTED`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The rejection reason provided by the buyer, if any.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The detailed description of the payment request, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The amount that was requested to be charged.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The date and time when the payment request was originally created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the payment request was rejected.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * The filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria, such as `offerId` or `productId`.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * An object that contains the `SortBy` and `SortOrder` attributes.
 *
 * @public
 */
export interface Sort {
  /**
   * The attribute on which the data is grouped, which can be `EndTime`, `StartTime`, or `LastUpdateTime`. `StartTime` and `LastUpdateTime` are supported only when `PartyType` is `Proposer`. The default value is `EndTime`.
   *
   * @public
   */
  sortBy?: string | undefined;

  /**
   * The sorting order, which can be `ASCENDING` or `DESCENDING`. The default value is `ASCENDING`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchAgreementsInput {
  /**
   * The catalog in which the agreement was created.
   *
   * @public
   */
  catalog?: string | undefined;

  /**
   * The filter name and value pair used to return a specific list of results.
   *
   * The following filters are supported:
   *
   * - `ResourceIdentifier` – The unique identifier of the resource.
   * - `ResourceType` – Type of the resource, which is the product (`AmiProduct`, `ContainerProduct`, `SaaSProduct`, `ProfessionalServicesProduct`, or `MachineLearningProduct`).
   * - `PartyType` – The party type of the caller. Use `Proposer` or `Acceptor`.
   * - `AcceptorAccountId` – The AWS account ID of the party accepting the agreement terms.
   * - `OfferId` – The unique identifier of the offer in which the terms are registered in the agreement token.
   * - `Status` – The current status of the agreement. Values include `ACTIVE`, `CANCELLED`, `EXPIRED`, `RENEWED`, `REPLACED`, and `TERMINATED`.
   * - `BeforeEndTime` – A date used to filter agreements with a date before the `endTime` of an agreement.
   * - `AfterEndTime` – A date used to filter agreements with a date after the `endTime` of an agreement.
   * - `BeforeStartTime` – A date used to filter agreements with a date before the `startTime` of an agreement.
   * - `AfterStartTime` – A date used to filter agreements with a date after the `startTime` of an agreement.
   * - `BeforeLastUpdateTime` – A date used to filter agreements with a date before the `lastUpdateTime` of an agreement.
   * - `AfterLastUpdateTime` – A date used to filter agreements with a date after the `lastUpdateTime` of an agreement.
   * - `AgreementType` – The type of agreement. Supported value includes `PurchaseAgreement`.
   * - `OfferSetId` – A unique identifier for the offer set containing this offer. All agreements created from offers in this set include this identifier as context.
   * - `EndTimeBehaviorType` – What happens to the agreement when it reaches its end date. Values include `RENEW`, `REPLACE`, and `EXPIRE`.
   * - `EndTimeBehaviorReasonCode` – The reason why the agreement doesn't renew at its end date. Values include `PROPOSER_RENEW_OPTED_OUT`, `ACCEPTOR_RENEW_OPTED_OUT`, `NO_RENEWAL_TERM`, and `RENEWAL_LIMIT_EXHAUSTED`.
   * - `InitialAgreementId` – The unique identifier of the very first agreement in a chain of related agreements. Use this filter to return every agreement in the same chain.
   * - `LicenseArn` – The Amazon Resource Name (ARN) of the AWS License Manager license associated with an entitlement granted by the agreement.
   *
   * A proposer can use any combination of the preceding filters along with `AgreementType`, which is required.
   *
   * The following filter combinations are supported when the `PartyType` is `Acceptor`:
   *
   * - `AgreementType`
   * - `AgreementType` + `Status`
   * - `AgreementType` + `EndTime`
   * - `AgreementType` + `Status` + `EndTime`
   * - `AgreementType` + `ResourceIdentifier`
   * - `AgreementType` + `ResourceIdentifier` + `EndTime`
   * - `AgreementType` + `ResourceIdentifier` + `Status`
   * - `AgreementType` + `ResourceIdentifier` + `Status` + `EndTime`
   * - `AgreementType` + `ResourceType`
   * - `AgreementType` + `ResourceType` + `EndTime`
   * - `AgreementType` + `OfferId`
   * - `AgreementType` + `OfferId` + `EndTime`
   * - `AgreementType` + `OfferId` + `Status`
   * - `AgreementType` + `OfferId` + `Status` + `EndTime`
   * - `AgreementType` + `OfferSetId`
   * - `AgreementType` + `OfferSetId` + `EndTime`
   * - `AgreementType` + `OfferSetId` + `Status`
   * - `AgreementType` + `OfferSetId` + `Status` + `EndTime`
   *
   * > **Note:** To filter by `EndTime`, you can use `BeforeEndTime`, `AfterEndTime`, or both.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * An object that contains the `SortBy` and `SortOrder` attributes. For `SearchAgreements`, `SortBy` supports `EndTime` for both party types, and `StartTime` and `LastUpdateTime` only when `PartyType` is `Proposer`. The default `SortBy` value is `EndTime`.
   *
   * @public
   */
  sort?: Sort | undefined;

  /**
   * The maximum number of agreements to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start pagination.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAgreementsOutput {
  /**
   * A summary of the agreement, including top-level attributes (for example, the agreement ID, proposer, and acceptor).
   *
   * @public
   */
  agreementViewSummaries?: AgreementViewSummary[] | undefined;

  /**
   * The token used for pagination. The field is `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementCancellationRequestInput {
  /**
   * The unique identifier of the agreement for which the cancellation request is being submitted.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The reason code for the cancellation request.
   *
   * @public
   */
  reasonCode: AgreementCancellationRequestReasonCode | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional detailed description of the cancellation reason (1-2000 characters).
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementCancellationRequestOutput {
  /**
   * The unique identifier of the agreement.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The unique identifier for the created cancellation request.
   *
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * The current status of the cancellation request. The initial status is `PENDING_APPROVAL`.
   *
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * The reason code provided for the cancellation.
   *
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * The detailed description of the cancellation reason, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time when the cancellation request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time when the cancellation request was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SendAgreementPaymentRequestInput {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the agreement for which the payment request is being submitted. Use `GetAgreementTerms` to retrieve agreement term details.
   *
   * @public
   */
  agreementId: string | undefined;

  /**
   * The unique identifier of the `VariablePaymentTerm` for the agreement that the payment request is being sent for.
   *
   * @public
   */
  termId: string | undefined;

  /**
   * A descriptive name for the payment request (5-64 characters).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The amount requested to be charged to the buyer, positive decimal value in the currency of the accepted term.
   *
   * > **Note:** A `ValidationException` is returned if the `chargeAmount` exceeds the available balance, if the agreement doesn't have an active `VariablePaymentTerm`, or if the `termId` is invalid.
   *
   * @public
   */
  chargeAmount: string | undefined;

  /**
   * An optional detailed description of the payment request (1-2000 characters).
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementPaymentRequestOutput {
  /**
   * The unique identifier for the sent payment request.
   *
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * The agreement identifier for this payment request.
   *
   * @public
   */
  agreementId?: string | undefined;

  /**
   * The current status of the payment request. The initial status is `PENDING_APPROVAL`.
   *
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * The descriptive name of the payment request.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The detailed description of the payment request, if provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The amount being charged to the buyer.
   *
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * The currency code for the charge amount (e.g., `USD`).
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The time when the payment request was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePurchaseOrdersInput {
  /**
   * Contains information about purchase order associations.
   *
   * @public
   */
  purchaseOrders: PurchaseOrder[] | undefined;
}

/**
 * @public
 */
export interface UpdatePurchaseOrdersOutput {}
