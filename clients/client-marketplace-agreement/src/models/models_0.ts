// smithy-typescript generated code
import { AgreementStatus, PaymentRequestApprovalStrategy, SortOrder } from "./enums";

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
   * <p>Type of the resource, which is the product. Values include <code>SaaSProduct</code> or <code>AmiProduct</code>.</p>
   * @public
   */
  type?: string | undefined;
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
   * <p>The type of agreement. Value is <code>PurchaseAgreement</code>.</p>
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
   * <p>A token to specify where to start pagination</p>
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
   * <p>A token to specify where to start pagination</p>
   * @public
   */
  nextToken?: string | undefined;
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
   * <p>The filter name and value pair used to return a specific list of results.</p> <p>The following filters are supported:</p> <ul> <li> <p> <code>ResourceIdentifier</code> – The unique identifier of the resource.</p> </li> <li> <p> <code>ResourceType</code> – Type of the resource, which is the product (<code>AmiProduct</code>, <code>ContainerProduct</code>, <code>SaaSProduct</code>, <code>ProfessionalServicesProduct</code>, or <code>MachineLearningProduct</code>).</p> </li> <li> <p> <code>PartyType</code> – The party type of the caller. For agreements where the caller is the proposer, use the <code>Proposer</code> filter.</p> </li> <li> <p> <code>AcceptorAccountId</code> – The AWS account ID of the party accepting the agreement terms.</p> </li> <li> <p> <code>OfferId</code> – The unique identifier of the offer in which the terms are registered in the agreement token.</p> </li> <li> <p> <code>Status</code> – The current status of the agreement. Values include <code>ACTIVE</code>, <code>ARCHIVED</code>, <code>CANCELLED</code>, <code>EXPIRED</code>, <code>RENEWED</code>, <code>REPLACED</code>, and <code>TERMINATED</code>.</p> </li> <li> <p> <code>BeforeEndTime</code> – A date used to filter agreements with a date before the <code>endTime</code> of an agreement.</p> </li> <li> <p> <code>AfterEndTime</code> – A date used to filter agreements with a date after the <code>endTime</code> of an agreement.</p> </li> <li> <p> <code>AgreementType</code> – The type of agreement. Supported value includes <code>PurchaseAgreement</code>.</p> </li> <li> <p> <code>OfferSetId</code> – A unique identifier for the offer set containing this offer. All agreements created from offers in this set include this identifier as context.</p> </li> </ul>
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
