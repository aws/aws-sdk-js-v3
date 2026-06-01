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
   * <p>The unique identifier of the agreement associated with the cancellation request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the cancellation request to accept.</p>
   * @public
   */
  agreementCancellationRequestId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementCancellationRequestOutput {
  /**
   * <p>The unique identifier of the agreement associated with this cancellation request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The unique identifier of the accepted cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The updated status of the cancellation request, which is <code>APPROVED</code>.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>The original reason code provided when the cancellation request was created.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The detailed description of the cancellation reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time when the cancellation request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the cancellation request was accepted.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field associated with the error.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>See applicable actions.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementPaymentRequestInput {
  /**
   * <p>The unique identifier of the payment request to accept.</p>
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with the payment request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>An optional purchase order reference that buyers can provide to associate the payment request with their internal purchase order system.</p>
   * @public
   */
  purchaseOrderReference?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementPaymentRequestOutput {
  /**
   * <p>The unique identifier of the accepted payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this payment request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The updated status of the payment request, which is <code>APPROVED</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The detailed description of the payment request, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The amount that was approved to be charged.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The date and time when the payment request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the payment request was accepted.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Contains information about a purchase order association to a charge within an agreement.</p>
 * @public
 */
export interface PurchaseOrder {
  /**
   * <p>The unique identifier of the charge to associate the purchase order with.</p>
   * @public
   */
  chargeId: string | undefined;

  /**
   * <p>The revision of the charge.</p>
   * @public
   */
  chargeRevision?: number | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this charge.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The purchase order reference to associate with the charge.</p>
   * @public
   */
  purchaseOrderReference?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementRequestInput {
  /**
   * <p>The unique identifier of the agreement request.</p>
   * @public
   */
  agreementRequestId: string | undefined;

  /**
   * <p>A list of purchase orders associated with accepting a marketplace agreement request.</p>
   * @public
   */
  purchaseOrders?: PurchaseOrder[] | undefined;
}

/**
 * @public
 */
export interface AcceptAgreementRequestOutput {
  /**
   * <p>The unique identifier of the agreement created or modified by accepting the agreement request.</p>
   * @public
   */
  agreementId?: string | undefined;
}

/**
 * <p>Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.</p>
 * @public
 */
export interface ByolPricingTerm {
  /**
   * <p>Type of the term being updated.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>Defines the dimensions that the acceptor has purchased from the overall set of dimensions presented in the rate card.</p>
 * @public
 */
export interface Dimension {
  /**
   * <p>The name of key value of the dimension.</p>
   * @public
   */
  dimensionKey: string | undefined;

  /**
   * <p>The number of units of the dimension the acceptor has purchased.</p> <note> <p>For Agreements with <code>ConfigurableUpfrontPricingTerm</code>, the <code>RateCard</code> section will define the prices and dimensions defined by the seller (proposer), whereas the <code>Configuration</code> section will define the actual dimensions, prices, and units the buyer has chosen to accept.</p> </note>
   * @public
   */
  dimensionValue: number | undefined;
}

/**
 * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</p>
 * @public
 */
export interface ConfigurableUpfrontPricingTermConfiguration {
  /**
   * <p>Defines the length of time for which the particular pricing/dimension is being purchased by the acceptor.</p>
   * @public
   */
  selectorValue: string | undefined;

  /**
   * <p>Defines the dimensions that the acceptor has purchased from the overall set of dimensions presented in the rate card.</p>
   * @public
   */
  dimensions: Dimension[] | undefined;
}

/**
 * <p>Defines limits on how the term can be configured by acceptors. </p>
 * @public
 */
export interface Constraints {
  /**
   * <p>Determines if buyers are allowed to select multiple dimensions in the rate card. The possible values are <code>Allowed</code> and <code>Disallowed</code>. The default value is <code>Allowed</code>.</p>
   * @public
   */
  multipleDimensionSelection?: string | undefined;

  /**
   * <p>Determines if acceptors are allowed to configure quantity for each dimension in rate card. The possible values are <code>Allowed</code> and <code>Disallowed</code>. The default value is <code>Allowed</code>.</p>
   * @public
   */
  quantityConfiguration?: string | undefined;
}

/**
 * <p>Defines the per unit rates for each individual product dimension.</p>
 * @public
 */
export interface RateCardItem {
  /**
   * <p>Dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.</p>
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * <p>Per unit price for the product dimension that’s used for calculating the amount to be charged.</p>
   * @public
   */
  price?: string | undefined;
}

/**
 * <p>Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.</p>
 * @public
 */
export interface Selector {
  /**
   * <p>Category of selector.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>Contract duration. This field supports the ISO 8601 format. </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Within the prepaid payment model defined under <code>ConfigurableUpfrontPricingTerm</code>, the <code>RateCardItem</code> defines all the various rate cards (including pricing and dimensions) that have been proposed.</p>
 * @public
 */
export interface ConfigurableUpfrontRateCardItem {
  /**
   * <p>Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.</p>
   * @public
   */
  selector?: Selector | undefined;

  /**
   * <p>Defines limits on how the term can be configured by acceptors.</p>
   * @public
   */
  constraints?: Constraints | undefined;

  /**
   * <p>Defines the per unit rates for product dimensions.</p>
   * @public
   */
  rateCard?: RateCardItem[] | undefined;
}

/**
 * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</p>
 * @public
 */
export interface ConfigurableUpfrontPricingTerm {
  /**
   * <p>Category of selector.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier of the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in the term.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>A rate card defines the per unit rates for product dimensions.</p>
   * @public
   */
  rateCards?: ConfigurableUpfrontRateCardItem[] | undefined;

  /**
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   * @public
   */
  configuration?: ConfigurableUpfrontPricingTermConfiguration | undefined;
}

/**
 * <p>Entitlements granted to the acceptor of fixed upfront as part of agreement execution.</p>
 * @public
 */
export interface GrantItem {
  /**
   * <p>Unique dimension key defined in the product document. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace. </p>
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * <p>Maximum amount of capacity that the buyer can be entitled to the given dimension of the product. If <code>MaxQuantity</code> is not provided, the buyer will be able to use an unlimited amount of the given dimension. </p>
   * @public
   */
  maxQuantity?: number | undefined;
}

/**
 * <p>Defines a prepaid pricing model where the customers are charged a fixed upfront amount.</p>
 * @public
 */
export interface FixedUpfrontPricingTerm {
  /**
   * <p>Category of the term being updated.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in this term. </p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>Contract duration for the terms.</p>
   * @public
   */
  duration?: string | undefined;

  /**
   * <p>Fixed amount to be charged to the customer when this term is accepted.</p>
   * @public
   */
  price?: string | undefined;

  /**
   * <p>Entitlements granted to the acceptor of fixed upfront as part of agreement execution.</p>
   * @public
   */
  grants?: GrantItem[] | undefined;
}

/**
 * <p>Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.</p>
 * @public
 */
export interface FreeTrialPricingTerm {
  /**
   * <p>Category of the term.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the terms.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Duration of the free trial period (5–31 days). </p>
   * @public
   */
  duration?: string | undefined;

  /**
   * <p>Entitlements granted to the acceptor of a free trial as part of an agreement execution.</p>
   * @public
   */
  grants?: GrantItem[] | undefined;
}

/**
 * <p>Includes the list of references to legal resources proposed by the proposer to the acceptor. Each <code>DocumentItem</code> refers to an individual reference.</p>
 * @public
 */
export interface DocumentItem {
  /**
   * <p>Category of the document. Document types include:</p> <ul> <li> <p> <code>CustomEula</code> – A custom EULA provided by you as seller. A URL for a EULA stored in an accessible Amazon S3 bucket is required for this document type.</p> </li> <li> <p> <code>CustomDsa</code> – A custom Data Subscription Agreement (DSA) provided by you as seller. A URL for a DSA stored in an accessible Amazon S3 bucket is required for this document type.</p> </li> <li> <p> <code>StandardEula</code> – The Standard Contract for AWS Marketplace (SCMP). For more information about SCMP, see the AWS Marketplace Seller Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.</p> </li> <li> <p> <code>StandardDsa</code> – DSA for AWS Marketplace. For more information about the DSA, see the AWS Data Exchange User Guide. You don’t provide a URL for this type because it’s managed by AWS Marketplace.</p> </li> </ul>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>A URL to the legal document for buyers to read. Required when <code>Type</code> is <code>CustomEula</code>.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>Version of standard contracts provided by AWS Marketplace. Required when Type is <code>StandardEula</code> or <code>StandardDsa</code>. </p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).</p>
 * @public
 */
export interface LegalTerm {
  /**
   * <p>Category of the term being updated.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifer for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>List of references to legal resources proposed to the buyers. An example is the EULA.</p>
   * @public
   */
  documents?: DocumentItem[] | undefined;
}

/**
 * <p>An individual installment of the payment that includes the date and amount of the charge.</p>
 * @public
 */
export interface ScheduleItem {
  /**
   * <p>The date that the customer would pay the price defined in this payment schedule term. Invoices are generated on the date provided.</p>
   * @public
   */
  chargeDate?: Date | undefined;

  /**
   * <p>The price that the customer would pay on the scheduled date (chargeDate).</p>
   * @public
   */
  chargeAmount?: string | undefined;
}

/**
 * <p>Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.</p>
 * @public
 */
export interface PaymentScheduleTerm {
  /**
   * <p>Type of the term.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in the term. </p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>List of the payment schedule where each element defines one installment of payment. It contains the information necessary for calculating the price.</p>
   * @public
   */
  schedule?: ScheduleItem[] | undefined;
}

/**
 * <p>Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.</p>
 * @public
 */
export interface RecurringPaymentTerm {
  /**
   * <p>Type of the term being updated.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in this term. </p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>Defines the recurrence at which buyers are charged.</p>
   * @public
   */
  billingPeriod?: string | undefined;

  /**
   * <p>Amount charged to the buyer every billing period.</p>
   * @public
   */
  price?: string | undefined;
}

/**
 * <p>Additional parameters specified by the acceptor while accepting the term.</p>
 * @public
 */
export interface RenewalTermConfiguration {
  /**
   * <p>Defines whether the acceptor has chosen to auto-renew the agreement at the end of its lifecycle. Can be set to <code>True</code> or <code>False</code>.</p>
   * @public
   */
  enableAutoRenew: boolean | undefined;
}

/**
 * <p>Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. The presence of <code>RenewalTerm</code> in the offer document means that auto-renewal is allowed. Buyers will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. Buyers can also change this flag from <code>True</code> to <code>False</code> or <code>False</code> to <code>True</code> at anytime during the agreement's lifecycle.</p>
 * @public
 */
export interface RenewalTerm {
  /**
   * <p>Category of the term being updated. </p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   * @public
   */
  configuration?: RenewalTermConfiguration | undefined;
}

/**
 * <p>Defines the customer support available for the acceptors when they purchase the software.</p>
 * @public
 */
export interface SupportTerm {
  /**
   * <p>Category of the term being updated.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Free-text field about the refund policy description that will be shown to customers as is on the website and console.</p>
   * @public
   */
  refundPolicy?: string | undefined;
}

/**
 * <p>Within the pay-as-you-go model defined under <code>UsageBasedPricingTerm</code>, the <code>UsageBasedRateCardItem</code> defines an individual rate for a product dimension.</p>
 * @public
 */
export interface UsageBasedRateCardItem {
  /**
   * <p>Defines the per unit rates for product dimensions.</p>
   * @public
   */
  rateCard?: RateCardItem[] | undefined;
}

/**
 * <p>Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.</p>
 * @public
 */
export interface UsageBasedPricingTerm {
  /**
   * <p>Category of the term.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in the term. </p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>List of rate cards.</p>
   * @public
   */
  rateCards?: UsageBasedRateCardItem[] | undefined;
}

/**
 * <p>Defines the conditions that will keep an agreement created from this offer valid. </p>
 * @public
 */
export interface ValidityTerm {
  /**
   * <p>Category of the term being updated. </p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the duration that the agreement remains active. If <code>AgreementStartDate</code> isn’t provided, the agreement duration is relative to the agreement signature time. The duration is represented in the ISO_8601 format.</p>
   * @public
   */
  agreementDuration?: string | undefined;

  /**
   * <p>Defines the date when agreement starts. The agreement starts at 00:00:00.000 UTC on the date provided. If <code>AgreementStartDate</code> isn’t provided, the agreement start date is determined based on agreement signature time.</p>
   * @public
   */
  agreementStartDate?: Date | undefined;

  /**
   * <p>Defines the date when the agreement ends. The agreement ends at 23:59:59.999 UTC on the date provided. If <code>AgreementEndDate</code> isn’t provided, the agreement end date is determined by the validity of individual terms.</p>
   * @public
   */
  agreementEndDate?: Date | undefined;
}

/**
 * <p>Additional parameters specified by the acceptor while accepting the variable payment term.</p>
 * @public
 */
export interface VariablePaymentTermConfiguration {
  /**
   * <p>Defines the strategy for approving payment requests. Values include <code>AUTO_APPROVE_ON_EXPIRATION</code> and <code>WAIT_FOR_APPROVAL</code> </p>
   * @public
   */
  paymentRequestApprovalStrategy: PaymentRequestApprovalStrategy | undefined;

  /**
   * <p>Defines the duration after which a payment request is automatically approved if no further action is taken. This only applies when the payment request approval strategy is set to <code>AUTO_APPROVE_ON_EXPIRATION</code>. The duration is represented in the ISO_8601 format (e.g., P10D for 10 days).</p>
   * @public
   */
  expirationDuration?: string | undefined;
}

/**
 * <p>Defines a payment model where sellers can submit variable payment requests up to a maximum charge amount, with configurable approval strategies and expiration timelines.</p>
 * @public
 */
export interface VariablePaymentTerm {
  /**
   * <p>Type of the term.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The unique identifier for the term.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Defines the currency for the prices mentioned in the term.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The maximum total amount that can be charged to the customer through variable payment requests under this term.</p>
   * @public
   */
  maxTotalChargeAmount?: string | undefined;

  /**
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   * @public
   */
  configuration?: VariablePaymentTermConfiguration | undefined;
}

/**
 * <p>A subset of terms proposed by the proposer, which have been accepted by the acceptor as part of agreement creation.</p>
 * @public
 */
export type AcceptedTerm =
  | AcceptedTerm.ByolPricingTermMember
  | AcceptedTerm.ConfigurableUpfrontPricingTermMember
  | AcceptedTerm.FixedUpfrontPricingTermMember
  | AcceptedTerm.FreeTrialPricingTermMember
  | AcceptedTerm.LegalTermMember
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
   * <p>Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines the customer support available for the acceptors when they purchase the software.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of <code>RenewalTerm</code> in the offer document means that auto-renewal is allowed. Buyers will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. Buyers can also change this flag from <code>True</code> to <code>False</code> or <code>False</code> to <code>True</code> at anytime during the agreement's lifecycle.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines the conditions that will keep an agreement created from this offer valid.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a pre-paid pricing model where the customers are charged a fixed upfront amount.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Defines a payment model where sellers can submit variable payment requests up to a maximum charge amount, with configurable approval strategies and expiration timelines.</p>
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The details of the party accepting the agreement terms. This is commonly the buyer for <code>PurchaseAgreement</code>.</p>
 * @public
 */
export interface Acceptor {
  /**
   * <p>The AWS account ID of the acceptor.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Summary view of an agreement cancellation request.</p>
 * @public
 */
export interface AgreementCancellationRequestSummary {
  /**
   * <p>The unique identifier of the cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this cancellation request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The current status of the cancellation request. Possible values include <code>PENDING_APPROVAL</code>, <code>APPROVED</code>, <code>REJECTED</code>, <code>CANCELLED</code>, and <code>VALIDATION_FAILED</code>.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>The reason code provided for the cancellation.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The type of agreement.</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>The catalog in which the agreement was created.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The date and time when the cancellation request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the cancellation request was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>The list of resources involved in the agreement.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The unique identifier of the resource.</p> <note> <p>We mention the term resource, which is most commonly a product, so a <code>resourceId</code> is also a <code>productId</code>.</p> </note>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Type of the resource, which is the product (for example, <code>SaaSProduct</code>, <code>AmiProduct</code>, <code>ContainerProduct</code>).</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>Represents an entitlement associated with an agreement, including the provisioning status, resource, and type.</p>
 * @public
 */
export interface AgreementEntitlement {
  /**
   * <p>The resource that the entitlement is provisioned to, such as a product.</p>
   * @public
   */
  resource?: Resource | undefined;

  /**
   * <p>The type of entitlement.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>A short-lived token required by acceptors to register their account with the product provider. The token is only valid for 30 minutes after creation and is only applicable for purchase agreements.</p>
   * @public
   */
  registrationToken?: string | undefined;

  /**
   * <p>The current state of an entitlement.</p>
   * @public
   */
  status?: AgreementEntitlementStatus | undefined;

  /**
   * <p>Provides more information about the status of an entitlement.</p>
   * @public
   */
  statusReasonCode?: AgreementEntitlementStatusReasonCode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS License Manager license associated with the entitlement.</p>
   * @public
   */
  licenseArn?: string | undefined;
}

/**
 * <p>The billing period for an invoice, specified by month and year.</p>
 * @public
 */
export interface InvoiceBillingPeriod {
  /**
   * <p>The billing period month. Valid range: 1-12.</p>
   * @public
   */
  month: number | undefined;

  /**
   * <p>The billing period year.</p>
   * @public
   */
  year: number | undefined;
}

/**
 * <p>The entity responsible for issuing the invoice.</p>
 * @public
 */
export interface InvoicingEntity {
  /**
   * <p>Legal name of the entity issuing the invoice.</p>
   * @public
   */
  legalName?: string | undefined;

  /**
   * <p>The branch where the issuing entity is operating from.</p>
   * @public
   */
  branchName?: string | undefined;
}

/**
 * <p>Monetary amounts associated with an invoice line item group.</p>
 * @public
 */
export interface PricingCurrencyAmount {
  /**
   * <p>The monetary amount before tax.</p>
   * @public
   */
  amount?: string | undefined;

  /**
   * <p>The maximum refundable amount as a string representation of a decimal number.</p>
   * @public
   */
  maxAdjustmentAmount?: string | undefined;

  /**
   * <p>The 3-letter ISO 4217 currency code (e.g., <code>USD</code>, <code>EUR</code>, <code>JPY</code>).</p>
   * @public
   */
  currencyCode?: string | undefined;
}

/**
 * <p>A summary of grouped billing data for an agreement invoice line item.</p>
 * @public
 */
export interface AgreementInvoiceLineItemGroupSummary {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The identifier of the invoice for this group.</p>
   * @public
   */
  invoiceId?: string | undefined;

  /**
   * <p>Monetary amounts for this invoice group.</p>
   * @public
   */
  pricingCurrencyAmount?: PricingCurrencyAmount | undefined;

  /**
   * <p>The billing period associated with this group.</p>
   * @public
   */
  invoiceBillingPeriod?: InvoiceBillingPeriod | undefined;

  /**
   * <p>The timestamp when the invoice containing this group was created.</p>
   * @public
   */
  issuedTime?: Date | undefined;

  /**
   * <p>The type of invoice. Valid values are <code>INVOICE</code> and <code>CREDIT_MEMO</code>.</p>
   * @public
   */
  invoiceType?: InvoiceType | undefined;

  /**
   * <p>The entity that issues the invoice.</p>
   * @public
   */
  invoicingEntity?: InvoicingEntity | undefined;
}

/**
 * <p>Represents an entitlement associated with an agreement.</p>
 * @public
 */
export interface Entitlement {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS License Manager license associated with the entitlement.</p>
   * @public
   */
  licenseArn?: string | undefined;
}

/**
 * <p>A summary of the proposal received from the proposer.</p>
 * @public
 */
export interface ProposalSummary {
  /**
   * <p>The list of resources involved in the agreement.</p>
   * @public
   */
  resources?: Resource[] | undefined;

  /**
   * <p>The unique identifier of the offer in AWS Marketplace.</p>
   * @public
   */
  offerId?: string | undefined;

  /**
   * <p>A unique identifier for the offer set containing this offer. All agreements created from offers in this set include this identifier as context.</p>
   * @public
   */
  offerSetId?: string | undefined;
}

/**
 * <p>Details of the party proposing the agreement terms,. This is commonly the seller for <code>PurchaseAgreement</code>. </p>
 * @public
 */
export interface Proposer {
  /**
   * <p>The AWS account ID of the proposer.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>A summary of the agreement, including top-level attributes (for example, the agreement ID, proposer, and acceptor).</p>
 * @public
 */
export interface AgreementViewSummary {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The date and time that the agreement was accepted.</p>
   * @public
   */
  acceptanceTime?: Date | undefined;

  /**
   * <p>The date and time when the agreement starts.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time when the agreement ends. The field is <code>null</code> for pay-as-you-go agreements, which don’t have end dates.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The type of agreement.</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>Details of the party accepting the agreement terms. This is commonly the buyer for <code>PurchaseAgreement.</code> </p>
   * @public
   */
  acceptor?: Acceptor | undefined;

  /**
   * <p>Details of the party proposing the agreement terms, most commonly the seller for <code>PurchaseAgreement</code>.</p>
   * @public
   */
  proposer?: Proposer | undefined;

  /**
   * <p>A summary of the proposal</p>
   * @public
   */
  proposalSummary?: ProposalSummary | undefined;

  /**
   * <p>The current status of the agreement. </p>
   * @public
   */
  status?: AgreementStatus | undefined;

  /**
   * <p>A list of entitlements associated with the agreement.</p>
   * @public
   */
  entitlements?: Entitlement[] | undefined;
}

/**
 * <p>An individual entry in a batch billing adjustment request, specifying the invoice and adjustment details.</p>
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestEntry {
  /**
   * <p>The unique identifier of the agreement associated with the invoice.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The identifier of the original invoice to adjust.</p>
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * <p>The adjustment amount as a string representation of a decimal number in the currency of the invoice.</p>
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * <p>The 3-letter ISO 4217 currency code for the adjustment amount. Must match the currency code of the offer associated with the agreement (e.g., <code>USD</code>).</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The reason code for the billing adjustment.</p>
   * @public
   */
  adjustmentReasonCode: BillingAdjustmentReasonCode | undefined;

  /**
   * <p>An optional detailed description of the adjustment reason.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestInput {
  /**
   * <p>A list of billing adjustment request entries. Each entry specifies the invoice and adjustment details.</p>
   * @public
   */
  billingAdjustmentRequestEntries: BatchCreateBillingAdjustmentRequestEntry[] | undefined;
}

/**
 * <p>An error for a billing adjustment request entry that failed validation.</p>
 * @public
 */
export interface BatchCreateBillingAdjustmentError {
  /**
   * <p>The error code indicating the reason for failure.</p>
   * @public
   */
  code: BillingAdjustmentErrorCode | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The client token of the request entry that failed.</p>
   * @public
   */
  clientToken: string | undefined;
}

/**
 * <p>A successfully created billing adjustment request item.</p>
 * @public
 */
export interface BatchCreateBillingAdjustmentItem {
  /**
   * <p>The unique identifier of the created billing adjustment request.</p>
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * <p>The client token provided in the corresponding request entry.</p>
   * @public
   */
  clientToken: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateBillingAdjustmentRequestOutput {
  /**
   * <p>A list of successfully created billing adjustment items, each containing the <code>billingAdjustmentRequestId</code> and <code>clientToken</code>.</p>
   * @public
   */
  items: BatchCreateBillingAdjustmentItem[] | undefined;

  /**
   * <p>A list of errors for entries that failed validation, each containing the <code>clientToken</code>, error <code>code</code>, and <code>message</code>.</p>
   * @public
   */
  errors: BatchCreateBillingAdjustmentError[] | undefined;
}

/**
 * @public
 */
export interface CancelAgreementInput {
  /**
   * <p>The unique identifier of the agreement.</p>
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
   * <p>The unique identifier of the agreement associated with the cancellation request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the cancellation request to cancel.</p>
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * <p>A required message explaining why the cancellation request is being withdrawn (1-2000 characters).</p>
   * @public
   */
  cancellationReason: string | undefined;
}

/**
 * @public
 */
export interface CancelAgreementCancellationRequestOutput {
  /**
   * <p>The unique identifier of the cancelled cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this cancellation request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The original reason code provided when the cancellation request was created.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The detailed description of the original cancellation reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated status of the cancellation request, which is <code>CANCELLED</code>.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>A message providing additional context about the cancellation request status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The date and time when the cancellation request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the cancellation request was cancelled.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CancelAgreementPaymentRequestInput {
  /**
   * <p>The unique identifier of the payment request to cancel.</p>
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with the payment request.</p>
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface CancelAgreementPaymentRequestOutput {
  /**
   * <p>The unique identifier of the cancelled payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this payment request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The updated status of the payment request, which is <code>CANCELLED</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The detailed description of the payment request, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The amount that was requested to be charged.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The date and time when the payment request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the payment request was cancelled.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A tagged union that represents the term configuration provided by the acceptor. Only one configuration is accepted per term.</p>
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
   * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</p>
   * @public
   */
  export interface ConfigurableUpfrontPricingTermConfigurationMember {
    configurableUpfrontPricingTermConfiguration: ConfigurableUpfrontPricingTermConfiguration;
    renewalTermConfiguration?: never;
    variablePaymentTermConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   * @public
   */
  export interface RenewalTermConfigurationMember {
    configurableUpfrontPricingTermConfiguration?: never;
    renewalTermConfiguration: RenewalTermConfiguration;
    variablePaymentTermConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Additional parameters specified by the acceptor while accepting the variable payment term.</p>
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
 * <p>Defines what is being accepted as part of the agreement creation or update request, and it includes their configurations.</p>
 * @public
 */
export interface RequestedTerm {
  /**
   * <p>The unique identifier of the term in the agreement proposal.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Additional configuration for the requested terms. This configuration is applicable only to the terms that accept a customer-provided configuration, such as <code>ConfigurableUpfrontPricingTerm</code>.</p>
   * @public
   */
  configuration?: RequestedTermConfiguration | undefined;
}

/**
 * <p>Configuration controls for tax estimation in the agreement request.</p>
 * @public
 */
export interface TaxConfiguration {
  /**
   * <p>Toggle to estimate tax as part of the response. Values include <code>ENABLED</code> and <code>DISABLED</code>. Default is <code>DISABLED</code>.</p>
   * @public
   */
  taxEstimation?: TaxEstimation | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequestInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The purpose and desired outcome of the agreement request. This is a required parameter that determines how the agreement request is processed.</p> <ul> <li> <p> <code>NEW</code> – Creates a new agreement for terms in the request.</p> </li> <li> <p> <code>AMEND</code> – Modifies an existing agreement with terms that are accepted in the request.</p> </li> <li> <p> <code>REPLACE</code> – Creates a new agreement with accepted terms and replaces the existing agreement.</p> </li> </ul>
   * @public
   */
  intent: Intent | undefined;

  /**
   * <p>A list of terms that define what is being accepted as part of the agreement. Some terms require configuration.</p>
   * @public
   */
  requestedTerms: RequestedTerm[] | undefined;

  /**
   * <p>The agreement's identifier that the request acts upon.</p> <important> <p> This parameter is required for all non-<code>NEW</code> intents (i.e., <code>AMEND</code> or <code>REPLACE</code>). Don't provide this parameter if the intent is <code>NEW</code>. </p> </important>
   * @public
   */
  sourceAgreementIdentifier?: string | undefined;

  /**
   * <p>The agreement proposal signed by the proposer. The proposal includes the requested resources and the terms that outline an agreement outcome.</p> <important> <p> This parameter is required if the intent is not <code>AMEND</code>.</p> </important>
   * @public
   */
  agreementProposalIdentifier?: string | undefined;

  /**
   * <p>Configuration for tax estimation in the agreement request response.</p>
   * @public
   */
  taxConfiguration?: TaxConfiguration | undefined;
}

/**
 * <p>Represents a single tax breakdown entry with amount, rate, and type.</p>
 * @public
 */
export interface TaxBreakdownItem {
  /**
   * <p>The estimated tax amount.</p>
   * @public
   */
  amount?: string | undefined;

  /**
   * <p>The tax rate, in decimals.</p>
   * @public
   */
  rate?: string | undefined;

  /**
   * <p>The type of tax (for example, VAT, ST, or GST).</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>Provides an aggregated view of estimated tax information.</p>
 * @public
 */
export interface EstimatedTaxes {
  /**
   * <p>A list of tax breakdown information.</p>
   * @public
   */
  breakdown?: TaxBreakdownItem[] | undefined;

  /**
   * <p>The total amount of tax aggregated from the tax breakdown.</p>
   * @public
   */
  totalAmount?: string | undefined;
}

/**
 * <p>Estimated charge for the request.</p>
 * @public
 */
export interface ExpectedCharge {
  /**
   * <p>Unique identifier of the charge for a given agreement.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The date and time when the charge is due to be invoiced. This is available only when the charge date is known.</p>
   * @public
   */
  time?: Date | undefined;

  /**
   * <p>The tax-exclusive amount of the charge. Only available when the charge amount is known.</p>
   * @public
   */
  amount?: string | undefined;

  /**
   * <p>The tax-inclusive amount the acceptor has to pay. The amount is only present for fixed charges.</p>
   * @public
   */
  amountAfterTax?: string | undefined;

  /**
   * <p>Indicates when the charge amount will be incurred. Values include <code>ON_ACCEPTANCE</code> (charged immediately when the agreement request is accepted), <code>BILLING_PERIOD</code> (charged on each billing period), and <code>SCHEDULED</code> (charged at a predetermined future date).</p>
   * @public
   */
  timing?: Timing | undefined;

  /**
   * <p>Provides an aggregated view of estimated tax information for this specific charge.</p>
   * @public
   */
  estimatedTaxes?: EstimatedTaxes | undefined;
}

/**
 * <p>A breakdown of individual charges or line items within a billing or pricing context.</p>
 * @public
 */
export interface ItemizedCharge {
  /**
   * <p>The dimension key as specified in the accepted term.</p>
   * @public
   */
  dimensionKey?: string | undefined;

  /**
   * <p>The requested quantity for this dimension.</p>
   * @public
   */
  newQuantity?: number | undefined;

  /**
   * <p>The existing quantity for this dimension from the source agreement. This value is <code>0</code> for NEW intent.</p>
   * @public
   */
  oldQuantity?: number | undefined;

  /**
   * <p>The identifier of the expected charge that this itemized charge contributes to.</p>
   * @public
   */
  chargeReference?: string | undefined;

  /**
   * <p>The total incremental charge amount for this dimension.</p>
   * @public
   */
  incrementalChargeAmount?: string | undefined;
}

/**
 * <p>The <code>ChargeSummary</code> provides a detailed breakdown of charges that are associated with an agreement request. This is applicable only when a request is created for a <code>PurchaseAgreement</code>.</p> <note> <p>Tax and invoicing fields (such as <code>estimatedTaxes</code>, <code>amountAfterTax</code>, <code>newAgreementValueAfterTax</code>, and <code>invoicingEntity</code>) are returned on a best-effort basis and do not cause the request to fail if unavailable.</p> <p>A <code>null</code> tax amount can have two meanings:</p> <ul> <li> <p>Tax estimation was unavailable at the time of the request.</p> </li> <li> <p>The charge timing is <code>BILLING_PERIOD</code>, so the charge amount is not determined at request time. In this case, the tax breakdown may still include the tax <code>rate</code> and <code>type</code>.</p> </li> </ul> </note>
 * @public
 */
export interface ChargeSummary {
  /**
   * <p>The three-letter currency code for all charges (e.g., USD).</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The total value of the agreement, which includes any amendments.</p>
   * @public
   */
  newAgreementValue?: string | undefined;

  /**
   * <p>Expected new agreement value after estimated taxes are applied.</p>
   * @public
   */
  newAgreementValueAfterTax?: string | undefined;

  /**
   * <p>A list of expected charges for the agreement request.</p>
   * @public
   */
  expectedCharges?: ExpectedCharge[] | undefined;

  /**
   * <p>Provides an aggregated view of estimated tax information for the agreement.</p>
   * @public
   */
  estimatedTaxes?: EstimatedTaxes | undefined;

  /**
   * <p>An itemized list of charges for the agreement request.</p>
   * @public
   */
  itemizedCharges?: ItemizedCharge[] | undefined;

  /**
   * <p>The entity responsible for issuing the invoice.</p>
   * @public
   */
  invoicingEntity?: InvoicingEntity | undefined;
}

/**
 * @public
 */
export interface CreateAgreementRequestOutput {
  /**
   * <p>The unique identifier of the agreement request created. Use this identifier with <code>AcceptAgreementRequest</code> to accept the agreement.</p>
   * @public
   */
  agreementRequestId?: string | undefined;

  /**
   * <p>Provides details of the charges associated with the agreement request. This is only applicable when a request is created for <code>PurchaseAgreement</code>.</p>
   * @public
   */
  chargeSummary?: ChargeSummary | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementInput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;
}

/**
 * <p>Estimated cost of the agreement.</p>
 * @public
 */
export interface EstimatedCharges {
  /**
   * <p>Defines the currency code for the charge.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The total known amount customer has to pay across the lifecycle of the agreement.</p> <note> <p>This is the total contract value if accepted terms contain <code>ConfigurableUpfrontPricingTerm</code> or <code>FixedUpfrontPricingTerm</code>. In the case of pure contract pricing, this will be the total value of the contract. In the case of contracts with consumption pricing, this will only include the committed value and not include any overages that occur.</p> <p>If the accepted terms contain <code>PaymentScheduleTerm</code>, it will be the total payment schedule amount. This occurs when flexible payment schedule is used, and is the sum of all invoice charges in the payment schedule.</p> <p>In case a customer has amended an agreement, by purchasing more units of any dimension, this will include both the original cost as well as the added cost incurred due to addition of new units. </p> <p>This is <code>0</code> if the accepted terms contain <code>UsageBasedPricingTerm</code> without <code>ConfigurableUpfrontPricingTerm</code> or <code>RecurringPaymentTerm</code>. This occurs for usage-based pricing (such as SaaS metered or AMI/container hourly or monthly), because the exact usage is not known upfront.</p> </note>
   * @public
   */
  agreementValue?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgreementOutput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The details of the party accepting the agreement terms. This is commonly the buyer for <code>PurchaseAgreement</code>.</p>
   * @public
   */
  acceptor?: Acceptor | undefined;

  /**
   * <p>The details of the party proposing the agreement terms. This is commonly the seller for <code>PurchaseAgreement</code>.</p>
   * @public
   */
  proposer?: Proposer | undefined;

  /**
   * <p>The date and time when the agreement starts.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time when the agreement ends. The field is <code>null</code> for pay-as-you-go agreements, which don’t have end dates.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The date and time the offer was accepted or the agreement was created.</p> <note> <p> <code>AcceptanceTime</code> and <code>StartTime</code> can differ for future dated agreements (FDAs).</p> </note>
   * @public
   */
  acceptanceTime?: Date | undefined;

  /**
   * <p>The type of agreement. Values are <code>PurchaseAgreement</code> or <code>VendorInsightsAgreement</code>.</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>The estimated cost of the agreement.</p>
   * @public
   */
  estimatedCharges?: EstimatedCharges | undefined;

  /**
   * <p>A summary of the proposal received from the proposer.</p>
   * @public
   */
  proposalSummary?: ProposalSummary | undefined;

  /**
   * <p>The current status of the agreement.</p> <p>Statuses include:</p> <ul> <li> <p> <code>ACTIVE</code> – The terms of the agreement are active.</p> </li> <li> <p> <code>ARCHIVED</code> – The agreement ended without a specified reason.</p> </li> <li> <p> <code>CANCELLED</code> – The acceptor ended the agreement before the defined end date.</p> </li> <li> <p> <code>EXPIRED</code> – The agreement ended on the defined end date.</p> </li> <li> <p> <code>RENEWED</code> – The agreement was renewed into a new agreement (for example, an auto-renewal).</p> </li> <li> <p> <code>REPLACED</code> – The agreement was replaced using an agreement replacement offer.</p> </li> <li> <p> <code>TERMINATED</code> – The agreement ended before the defined end date because of an AWS termination (for example, a payment failure).</p> </li> </ul>
   * @public
   */
  status?: AgreementStatus | undefined;
}

/**
 * @public
 */
export interface GetAgreementCancellationRequestInput {
  /**
   * <p>The unique identifier of the cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with the cancellation request.</p>
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementCancellationRequestOutput {
  /**
   * <p>The unique identifier of the cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this cancellation request. Use <code>DescribeAgreement</code> to retrieve full agreement details.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The reason code provided for the cancellation.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The detailed description of the cancellation reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the cancellation request.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>A message providing additional context about the cancellation request status.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The date and time when the cancellation request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the cancellation request was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAgreementEntitlementsInput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The maximum number of agreement entitlements to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementEntitlementsOutput {
  /**
   * <p>A list of agreement entitlements which are part of the latest agreement.</p>
   * @public
   */
  agreementEntitlements?: AgreementEntitlement[] | undefined;

  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementPaymentRequestInput {
  /**
   * <p>The identifier of the payment request.</p>
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with the payment request.</p>
   * @public
   */
  agreementId: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementPaymentRequestOutput {
  /**
   * <p>The unique identifier of the payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this payment request. Use <code>DescribeAgreement</code> to retrieve full agreement details.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The current status of the payment request. Possible values include:</p> <ul> <li> <p> <code>VALIDATING</code> – The payment request is being validated against agreement terms.</p> </li> <li> <p> <code>VALIDATION_FAILED</code> – The payment request failed validation.</p> </li> <li> <p> <code>PENDING_APPROVAL</code> – The payment request is awaiting buyer action.</p> </li> <li> <p> <code>APPROVED</code> – The buyer has approved the payment request.</p> </li> <li> <p> <code>REJECTED</code> – The buyer has rejected the payment request.</p> </li> <li> <p> <code>CANCELLED</code> – The seller has cancelled the payment request.</p> </li> </ul>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>An optional message providing additional context about the payment request status, such as a rejection reason or validation failure details.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The detailed description of the payment request, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests and follows the pattern <code>ch-[a-zA-Z0-9]+</code>.</p>
   * @public
   */
  chargeId?: string | undefined;

  /**
   * <p>The amount charged or to be charged to the buyer.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The date and time when the payment request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the payment request was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAgreementTermsInput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The maximum number of agreements to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAgreementTermsOutput {
  /**
   * <p>A subset of terms proposed by the proposer that have been accepted by the acceptor as part of the agreement creation.</p>
   * @public
   */
  acceptedTerms?: AcceptedTerm[] | undefined;

  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBillingAdjustmentRequestInput {
  /**
   * <p>The unique identifier of the agreement associated with the billing adjustment request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the billing adjustment request.</p>
   * @public
   */
  billingAdjustmentRequestId: string | undefined;
}

/**
 * @public
 */
export interface GetBillingAdjustmentRequestOutput {
  /**
   * <p>The unique identifier of the billing adjustment request.</p>
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this billing adjustment request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The reason code for the billing adjustment.</p>
   * @public
   */
  adjustmentReasonCode: BillingAdjustmentReasonCode | undefined;

  /**
   * <p>The detailed description of the billing adjustment reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier of the original invoice being adjusted.</p>
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * <p>The adjustment amount as a string representation of a decimal number.</p>
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * <p>The currency code for the adjustment amount (e.g., <code>USD</code>).</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The current status of the billing adjustment request.</p>
   * @public
   */
  status: BillingAdjustmentStatus | undefined;

  /**
   * <p>A message providing additional context about the billing adjustment request status. This field is populated only when the status is <code>VALIDATION_FAILED</code>.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The date and time when the billing adjustment request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the billing adjustment request was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementCancellationRequestsInput {
  /**
   * <p>The party type for the cancellation requests. Required parameter. Use <code>Proposer</code> to list cancellation requests where you are the seller, or <code>Acceptor</code> to list cancellation requests where you are the buyer.</p>
   * @public
   */
  partyType: string | undefined;

  /**
   * <p>An optional parameter to filter cancellation requests for a specific agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>An optional parameter to filter cancellation requests by status.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>An optional parameter to filter cancellation requests by agreement type (e.g., <code>PurchaseAgreement</code>).</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>An optional parameter to filter cancellation requests by catalog (e.g., <code>AWSMarketplace</code>).</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The maximum number of cancellation requests to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementCancellationRequestsOutput {
  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of <code>AgreementCancellationRequestSummary</code> objects containing summary information about each cancellation request.</p>
   * @public
   */
  items?: AgreementCancellationRequestSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAgreementChargesInput {
  /**
   * <p>The catalog in which the charges were created.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>Filter to retrieve charges of a specific agreement type (for example, <code>PurchaseAgreement</code>).</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>The maximum number of charges to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a charge associated with an agreement, including amount, timing, and purchase order details.</p>
 * @public
 */
export interface Charge {
  /**
   * <p>The unique identifier of the charge.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The revision number of the charge.</p>
   * @public
   */
  revision?: number | undefined;

  /**
   * <p>The unique identifier of the agreement that resulted in this charge.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The type of agreement that resulted in this charge (for example, <code>PurchaseAgreement</code>).</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>The purchase order reference associated with the charge, if any.</p>
   * @public
   */
  purchaseOrderReference?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The amount of the charge.</p>
   * @public
   */
  amount?: string | undefined;

  /**
   * <p>The date and time when the charge will be incurred. This is available only when the charge date is known.</p>
   * @public
   */
  time?: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementChargesOutput {
  /**
   * <p>A list of agreement charges.</p>
   * @public
   */
  items?: Charge[] | undefined;

  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementInvoiceLineItemsInput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>Specifies a grouping strategy for line items. Currently supports <code>INVOICE_ID</code>.</p>
   * @public
   */
  groupBy: LineItemGroupBy | undefined;

  /**
   * <p>An optional filter to retrieve invoice information for a specific invoice.</p>
   * @public
   */
  invoiceId?: string | undefined;

  /**
   * <p>An optional filter for the type of invoice. Valid values are <code>INVOICE</code> and <code>CREDIT_MEMO</code>.</p>
   * @public
   */
  invoiceType?: InvoiceType | undefined;

  /**
   * <p>An optional filter for the billing period associated with the invoice.</p>
   * @public
   */
  invoiceBillingPeriod?: InvoiceBillingPeriod | undefined;

  /**
   * <p>An optional filter for invoices issued before the specified timestamp.</p>
   * @public
   */
  beforeIssuedTime?: Date | undefined;

  /**
   * <p>An optional filter for invoices issued after the specified timestamp.</p>
   * @public
   */
  afterIssuedTime?: Date | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementInvoiceLineItemsOutput {
  /**
   * <p>A list of grouped billing data objects.</p>
   * @public
   */
  agreementInvoiceLineItemGroupSummaries?: AgreementInvoiceLineItemGroupSummary[] | undefined;

  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgreementPaymentRequestsInput {
  /**
   * <p>The party type for the payment requests. Required parameter. Use <code>Proposer</code> to list payment requests where you are the seller, or <code>Acceptor</code> to list payment requests where you are the buyer.</p>
   * @public
   */
  partyType: string | undefined;

  /**
   * <p>An optional parameter to list payment requests by agreement type (e.g., <code>PurchaseAgreement</code>).</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>An optional parameter to list payment requests by catalog (e.g., <code>AWSMarketplace</code>).</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>An optional parameter to list payment requests for a specific agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>An optional parameter to list payment requests by status. Valid values include <code>VALIDATING</code>, <code>VALIDATION_FAILED</code>, <code>PENDING_APPROVAL</code>, <code>APPROVED</code>, <code>REJECTED</code>, and <code>CANCELLED</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The maximum number of payment requests to return in a single response (1-50). Default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary view of a payment request.</p>
 * @public
 */
export interface PaymentRequestSummary {
  /**
   * <p>The unique identifier of the payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this payment request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The current status of the payment request. Possible values include <code>VALIDATING</code>, <code>VALIDATION_FAILED</code>, <code>PENDING_APPROVAL</code>, <code>APPROVED</code>, <code>REJECTED</code>, and <code>CANCELLED</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The unique identifier of the charge created after the payment request is approved. This field is only present for approved payment requests.</p>
   * @public
   */
  chargeId?: string | undefined;

  /**
   * <p>The amount charged or to be charged to the buyer.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The date and time when the payment request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the payment request was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAgreementPaymentRequestsOutput {
  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of <code>PaymentRequestSummary</code> objects containing summary information about each payment request.</p>
   * @public
   */
  items: PaymentRequestSummary[] | undefined;
}

/**
 * @public
 */
export interface ListBillingAdjustmentRequestsInput {
  /**
   * <p>The unique identifier of the agreement to list billing adjustment requests for.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>An optional filter to return billing adjustment requests with the specified status.</p>
   * @public
   */
  status?: BillingAdjustmentStatus | undefined;

  /**
   * <p>An optional filter to return billing adjustment requests created after the specified timestamp.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>An optional filter to return billing adjustment requests created before the specified timestamp.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>The maximum number of billing adjustment requests to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An optional filter to return billing adjustment requests by catalog (e.g., <code>AWSMarketplace</code>).</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>An optional filter to return billing adjustment requests by agreement type (e.g., <code>PurchaseAgreement</code>).</p>
   * @public
   */
  agreementType?: string | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary view of a billing adjustment request.</p>
 * @public
 */
export interface BillingAdjustmentSummary {
  /**
   * <p>The unique identifier of the billing adjustment request.</p>
   * @public
   */
  billingAdjustmentRequestId: string | undefined;

  /**
   * <p>The identifier of the original invoice being adjusted.</p>
   * @public
   */
  originalInvoiceId: string | undefined;

  /**
   * <p>The adjustment amount as a string representation of a decimal number.</p>
   * @public
   */
  adjustmentAmount: string | undefined;

  /**
   * <p>The currency code for the adjustment amount.</p>
   * @public
   */
  currencyCode: string | undefined;

  /**
   * <p>The current status of the billing adjustment request.</p>
   * @public
   */
  status: BillingAdjustmentStatus | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this billing adjustment request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The date and time when the billing adjustment request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the billing adjustment request was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The type of agreement.</p>
   * @public
   */
  agreementType: string | undefined;

  /**
   * <p>The catalog in which the agreement was created.</p>
   * @public
   */
  catalog: string | undefined;
}

/**
 * @public
 */
export interface ListBillingAdjustmentRequestsOutput {
  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of <code>BillingAdjustmentSummary</code> objects containing summary information about each billing adjustment request.</p>
   * @public
   */
  items: BillingAdjustmentSummary[] | undefined;
}

/**
 * @public
 */
export interface RejectAgreementCancellationRequestInput {
  /**
   * <p>The unique identifier of the agreement associated with the cancellation request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the cancellation request to reject.</p>
   * @public
   */
  agreementCancellationRequestId: string | undefined;

  /**
   * <p>The reason for rejecting the cancellation request (1-2000 characters). This message is visible to the seller.</p>
   * @public
   */
  rejectionReason: string | undefined;
}

/**
 * @public
 */
export interface RejectAgreementCancellationRequestOutput {
  /**
   * <p>The unique identifier of the agreement associated with this cancellation request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The unique identifier of the rejected cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The updated status of the cancellation request, which is <code>REJECTED</code>.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>The rejection reason provided by the buyer.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The original reason code provided when the cancellation request was created.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The detailed description of the cancellation reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time when the cancellation request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the cancellation request was rejected.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface RejectAgreementPaymentRequestInput {
  /**
   * <p>The unique identifier of the payment request to reject.</p>
   * @public
   */
  paymentRequestId: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with the payment request.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>An optional reason for rejecting the payment request (1-250 characters). This message is visible to the seller.</p>
   * @public
   */
  rejectionReason?: string | undefined;
}

/**
 * @public
 */
export interface RejectAgreementPaymentRequestOutput {
  /**
   * <p>The unique identifier of the rejected payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The unique identifier of the agreement associated with this payment request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The updated status of the payment request, which is <code>REJECTED</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The rejection reason provided by the buyer, if any.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The detailed description of the payment request, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The amount that was requested to be charged.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The date and time when the payment request was originally created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the payment request was rejected.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>The filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria, such as <code>offerId</code> or <code>productId</code>.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>An object that contains the <code>SortBy</code> and <code>SortOrder</code> attributes.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>The attribute on which the data is grouped, which can be by <code>StartTime</code> and <code>EndTime</code>. The default value is <code>EndTime</code>.</p>
   * @public
   */
  sortBy?: string | undefined;

  /**
   * <p>The sorting order, which can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchAgreementsInput {
  /**
   * <p>The catalog in which the agreement was created.</p>
   * @public
   */
  catalog?: string | undefined;

  /**
   * <p>The filter name and value pair used to return a specific list of results.</p> <p>The following filters are supported:</p> <ul> <li> <p> <code>ResourceIdentifier</code> – The unique identifier of the resource.</p> </li> <li> <p> <code>ResourceType</code> – Type of the resource, which is the product (<code>AmiProduct</code>, <code>ContainerProduct</code>, <code>SaaSProduct</code>, <code>ProfessionalServicesProduct</code>, or <code>MachineLearningProduct</code>).</p> </li> <li> <p> <code>PartyType</code> – The party type of the caller. Use <code>Proposer</code> or <code>Acceptor</code>.</p> </li> <li> <p> <code>AcceptorAccountId</code> – The AWS account ID of the party accepting the agreement terms.</p> </li> <li> <p> <code>OfferId</code> – The unique identifier of the offer in which the terms are registered in the agreement token.</p> </li> <li> <p> <code>Status</code> – The current status of the agreement. Values include <code>ACTIVE</code>, <code>ARCHIVED</code>, <code>CANCELLED</code>, <code>EXPIRED</code>, <code>RENEWED</code>, <code>REPLACED</code>, and <code>TERMINATED</code>.</p> </li> <li> <p> <code>BeforeEndTime</code> – A date used to filter agreements with a date before the <code>endTime</code> of an agreement.</p> </li> <li> <p> <code>AfterEndTime</code> – A date used to filter agreements with a date after the <code>endTime</code> of an agreement.</p> </li> <li> <p> <code>AgreementType</code> – The type of agreement. Supported value includes <code>PurchaseAgreement</code>.</p> </li> <li> <p> <code>OfferSetId</code> – A unique identifier for the offer set containing this offer. All agreements created from offers in this set include this identifier as context.</p> </li> </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>An object that contains the <code>SortBy</code> and <code>SortOrder</code> attributes. Only <code>EndTime</code> is supported for <code>SearchAgreements</code>. The default sort is <code>EndTime</code> descending.</p>
   * @public
   */
  sort?: Sort | undefined;

  /**
   * <p>The maximum number of agreements to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start pagination.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAgreementsOutput {
  /**
   * <p>A summary of the agreement, including top-level attributes (for example, the agreement ID, proposer, and acceptor).</p>
   * @public
   */
  agreementViewSummaries?: AgreementViewSummary[] | undefined;

  /**
   * <p>The token used for pagination. The field is <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementCancellationRequestInput {
  /**
   * <p>The unique identifier of the agreement for which the cancellation request is being submitted.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The reason code for the cancellation request.</p>
   * @public
   */
  reasonCode: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An optional detailed description of the cancellation reason (1-2000 characters).</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementCancellationRequestOutput {
  /**
   * <p>The unique identifier of the agreement.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The unique identifier for the created cancellation request.</p>
   * @public
   */
  agreementCancellationRequestId?: string | undefined;

  /**
   * <p>The current status of the cancellation request. The initial status is <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  status?: AgreementCancellationRequestStatus | undefined;

  /**
   * <p>The reason code provided for the cancellation.</p>
   * @public
   */
  reasonCode?: AgreementCancellationRequestReasonCode | undefined;

  /**
   * <p>The detailed description of the cancellation reason, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time when the cancellation request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time when the cancellation request was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SendAgreementPaymentRequestInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the agreement for which the payment request is being submitted. Use <code>GetAgreementTerms</code> to retrieve agreement term details.</p>
   * @public
   */
  agreementId: string | undefined;

  /**
   * <p>The unique identifier of the <code>VariablePaymentTerm</code> for the agreement that the payment request is being sent for.</p>
   * @public
   */
  termId: string | undefined;

  /**
   * <p>A descriptive name for the payment request (5-64 characters).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The amount requested to be charged to the buyer, positive decimal value in the currency of the accepted term.</p> <note> <p>A <code>ValidationException</code> is returned if the <code>chargeAmount</code> exceeds the available balance, if the agreement doesn't have an active <code>VariablePaymentTerm</code>, or if the <code>termId</code> is invalid.</p> </note>
   * @public
   */
  chargeAmount: string | undefined;

  /**
   * <p>An optional detailed description of the payment request (1-2000 characters).</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface SendAgreementPaymentRequestOutput {
  /**
   * <p>The unique identifier for the sent payment request.</p>
   * @public
   */
  paymentRequestId?: string | undefined;

  /**
   * <p>The agreement identifier for this payment request.</p>
   * @public
   */
  agreementId?: string | undefined;

  /**
   * <p>The current status of the payment request. The initial status is <code>PENDING_APPROVAL</code>.</p>
   * @public
   */
  status?: PaymentRequestStatus | undefined;

  /**
   * <p>The descriptive name of the payment request.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The detailed description of the payment request, if provided.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The amount being charged to the buyer.</p>
   * @public
   */
  chargeAmount?: string | undefined;

  /**
   * <p>The currency code for the charge amount (e.g., <code>USD</code>).</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The time when the payment request was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdatePurchaseOrdersInput {
  /**
   * <p>Contains information about purchase order associations.</p>
   * @public
   */
  purchaseOrders: PurchaseOrder[] | undefined;
}

/**
 * @public
 */
export interface UpdatePurchaseOrdersOutput {}
