// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MarketplaceAgreementServiceException as __BaseException } from "./MarketplaceAgreementServiceException";

/**
 * @public
 * <p>Enables you and your customers to move your existing agreements to AWS Marketplace. The
 *          customer won't be charged for product usage in AWS Marketplace because they already paid
 *          for the product outside of AWS Marketplace.</p>
 */
export interface ByolPricingTerm {
  /**
   * @public
   * <p>Type of the term being updated.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>Defines the dimensions that the acceptor has purchased from the overall set of
 *          dimensions presented in the rate card.</p>
 */
export interface Dimension {
  /**
   * @public
   * <p>The name of key value of the dimension.</p>
   */
  dimensionKey: string | undefined;

  /**
   * @public
   * <p>The number of units of the dimension the acceptor has purchased.</p>
   *          <note>
   *             <p>For Agreements with <code>ConfigurableUpfrontPricingTerm</code>, the
   *                <code>RateCard</code> section will define the prices and dimensions defined by the
   *             seller (proposer), whereas the <code>Configuration</code> section will define the actual
   *             dimensions, prices, and units the buyer has chosen to accept.</p>
   *          </note>
   */
  dimensionValue: number | undefined;
}

/**
 * @public
 * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they
 *          want to purchase and the duration.</p>
 */
export interface ConfigurableUpfrontPricingTermConfiguration {
  /**
   * @public
   * <p>Defines the length of time for which the particular pricing/dimension is being purchased
   *          by the acceptor.</p>
   */
  selectorValue: string | undefined;

  /**
   * @public
   * <p>Defines the dimensions that the acceptor has purchased from the overall set of
   *          dimensions presented in the rate card.</p>
   */
  dimensions: Dimension[] | undefined;
}

/**
 * @public
 * <p>Defines limits on how the term can be configured by acceptors. </p>
 */
export interface Constraints {
  /**
   * @public
   * <p>Determines if buyers are allowed to select multiple dimensions in the rate card. The
   *          possible values are <code>Allowed</code> and <code>Disallowed</code>. The default value is
   *             <code>Allowed</code>.</p>
   */
  multipleDimensionSelection?: string;

  /**
   * @public
   * <p>Determines if acceptors are allowed to configure quantity for each dimension in rate
   *          card. The possible values are <code>Allowed</code> and <code>Disallowed</code>. The default
   *          value is <code>Allowed</code>.</p>
   */
  quantityConfiguration?: string;
}

/**
 * @public
 * <p>Defines the per unit rates for each individual product dimension.</p>
 */
export interface RateCardItem {
  /**
   * @public
   * <p>Dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.</p>
   */
  dimensionKey?: string;

  /**
   * @public
   * <p>Per unit price for the product dimension that’s used for calculating the amount to be charged.</p>
   */
  price?: string;
}

/**
 * @public
 * <p>Differentiates between the mutually exclusive rate cards in the same pricing term to be
 *          selected by the buyer.</p>
 */
export interface Selector {
  /**
   * @public
   * <p>Category of selector.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Contract duration. This field supports the ISO 8601 format. </p>
   */
  value?: string;
}

/**
 * @public
 * <p>Within the prepaid payment model defined under <code>ConfigurableUpfrontPricingTerm</code>, the <code>RateCardItem</code> defines all the various rate cards (including pricing and dimensions) that have been proposed.</p>
 */
export interface ConfigurableUpfrontRateCardItem {
  /**
   * @public
   * <p>Differentiates between the mutually exclusive rate cards in the same pricing term to be selected by the buyer.</p>
   */
  selector?: Selector;

  /**
   * @public
   * <p>Defines limits on how the term can be configured by acceptors.</p>
   */
  constraints?: Constraints;

  /**
   * @public
   * <p>Defines the per unit rates for product dimensions.</p>
   */
  rateCard?: RateCardItem[];
}

/**
 * @public
 * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they
 *          want to purchase and the duration.</p>
 */
export interface ConfigurableUpfrontPricingTerm {
  /**
   * @public
   * <p>Category of selector.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the currency for the prices mentioned in the term.</p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>A rate card defines the per unit rates for product dimensions.</p>
   */
  rateCards?: ConfigurableUpfrontRateCardItem[];

  /**
   * @public
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   */
  configuration?: ConfigurableUpfrontPricingTermConfiguration;
}

/**
 * @public
 * <p>Entitlements granted to the acceptor of fixed upfront as part of agreement execution.</p>
 */
export interface GrantItem {
  /**
   * @public
   * <p>Unique dimension key defined in the product document. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace. </p>
   */
  dimensionKey?: string;

  /**
   * @public
   * <p>Maximum amount of capacity that the buyer can be entitled to the given dimension of the product. If <code>MaxQuantity</code> is not provided, the buyer will be able to use an unlimited amount of the given dimension. </p>
   */
  maxQuantity?: number;
}

/**
 * @public
 * <p>Defines a prepaid pricing model where the customers are charged a fixed upfront
 *          amount.</p>
 */
export interface FixedUpfrontPricingTerm {
  /**
   * @public
   * <p>Category of the term being updated.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the currency for the prices mentioned in this term. </p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>Contract duration for the terms.</p>
   */
  duration?: string;

  /**
   * @public
   * <p>Fixed amount to be charged to the customer when this term is accepted.</p>
   */
  price?: string;

  /**
   * @public
   * <p>Entitlements granted to the acceptor of fixed upfront as part of agreement
   *          execution.</p>
   */
  grants?: GrantItem[];
}

/**
 * @public
 * <p>Defines a short-term free pricing model where the buyers aren’t charged anything within
 *          a specified limit.</p>
 */
export interface FreeTrialPricingTerm {
  /**
   * @public
   * <p>Category of the term.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Duration of the free trial period (5–31 days). </p>
   */
  duration?: string;

  /**
   * @public
   * <p>Entitlements granted to the acceptor of a free trial as part of an agreement
   *          execution.</p>
   */
  grants?: GrantItem[];
}

/**
 * @public
 * <p>Includes the list of references to legal resources proposed by the proposer to the acceptor. Each <code>DocumentItem</code> refers to an individual reference.</p>
 */
export interface DocumentItem {
  /**
   * @public
   * <p>Category of the document. Document types include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CustomEula</code> – A custom EULA provided by you as seller. A URL for a
   *                EULA stored in an accessible Amazon S3 bucket is required for this document
   *                type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CustomDsa</code> – A custom Data Subscription Agreement (DSA) provided by
   *                you as seller. A URL for a DSA stored in an accessible Amazon S3 bucket is required
   *                for this document type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StandardEula</code> – The Standard Contract for AWS Marketplace (SCMP). For
   *                more information about SCMP, see the AWS Marketplace Seller Guide. You don’t provide
   *                a URL for this type because it’s managed by AWS Marketplace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StandardDsa</code> – DSA for AWS Marketplace. For more information about the
   *                DSA, see the AWS Data Exchange User Guide. You don’t provide a URL for this type
   *                because it’s managed by AWS Marketplace.</p>
   *             </li>
   *          </ul>
   */
  type?: string;

  /**
   * @public
   * <p>A URL to the legal document for buyers to read. Required when <code>Type</code> is <code>CustomEula</code>.</p>
   */
  url?: string;

  /**
   * @public
   * <p>Version of standard contracts provided by AWS Marketplace. Required when Type is <code>StandardEula</code> or <code>StandardDsa</code>. </p>
   */
  version?: string;
}

/**
 * @public
 * <p>Defines the list of text agreements proposed to the acceptors. An example is the end
 *          user license agreement (EULA).</p>
 */
export interface LegalTerm {
  /**
   * @public
   * <p>Category of the term being updated.</p>
   */
  type?: string;

  /**
   * @public
   * <p>List of references to legal resources proposed to the buyers. An example is the
   *          EULA.</p>
   */
  documents?: DocumentItem[];
}

/**
 * @public
 * <p>An individual installment of the payment that includes the date and amount of the charge.</p>
 */
export interface ScheduleItem {
  /**
   * @public
   * <p>The date that the customer would pay the price defined in this payment schedule term. Invoices are generated on the date provided.</p>
   */
  chargeDate?: Date;

  /**
   * @public
   * <p>The price that the customer would pay on the scheduled date (chargeDate).</p>
   */
  chargeAmount?: string;
}

/**
 * @public
 * <p>Defines an installment-based pricing model where customers are charged a fixed price on
 *          different dates during the agreement validity period. This is used most commonly for
 *          flexible payment schedule pricing.</p>
 */
export interface PaymentScheduleTerm {
  /**
   * @public
   * <p>Type of the term.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the currency for the prices mentioned in the term. </p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>List of the payment schedule where each element defines one installment of payment. It
   *          contains the information necessary for calculating the price.</p>
   */
  schedule?: ScheduleItem[];
}

/**
 * @public
 * <p>Defines a pricing model where customers are charged a fixed recurring price at the end
 *          of each billing period.</p>
 */
export interface RecurringPaymentTerm {
  /**
   * @public
   * <p>Type of the term being updated.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the currency for the prices mentioned in this term. </p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>Defines the recurrence at which buyers are charged.</p>
   */
  billingPeriod?: string;

  /**
   * @public
   * <p>Amount charged to the buyer every billing period.</p>
   */
  price?: string;
}

/**
 * @public
 * <p>Additional parameters specified by the acceptor while accepting the term.</p>
 */
export interface RenewalTermConfiguration {
  /**
   * @public
   * <p>Defines whether the acceptor has chosen to auto-renew the agreement at the end of its
   *          lifecycle. Can be set to <code>True</code> or <code>False</code>.</p>
   */
  enableAutoRenew: boolean | undefined;
}

/**
 * @public
 * <p>Defines that on graceful expiration of the agreement (when the agreement ends on its
 *          pre-defined end date), a new agreement will be created using the accepted terms on the
 *          existing agreement. In other words, the agreement will be renewed. The presence of
 *             <code>RenewalTerm</code> in the offer document means that auto-renewal is allowed.
 *          Buyers will have the option to accept or decline auto-renewal at the offer
 *          acceptance/agreement creation. Buyers can also change this flag from <code>True</code> to
 *             <code>False</code> or <code>False</code> to <code>True</code> at anytime during the
 *          agreement's lifecycle.</p>
 */
export interface RenewalTerm {
  /**
   * @public
   * <p>Category of the term being updated. </p>
   */
  type?: string;

  /**
   * @public
   * <p>Additional parameters specified by the acceptor while accepting the term.</p>
   */
  configuration?: RenewalTermConfiguration;
}

/**
 * @public
 * <p>Defines the customer support available for the acceptors when they purchase the
 *          software.</p>
 */
export interface SupportTerm {
  /**
   * @public
   * <p>Category of the term being updated.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Free-text field about the refund policy description that will be shown to customers as
   *          is on the website and console.</p>
   */
  refundPolicy?: string;
}

/**
 * @public
 * <p>Within the pay-as-you-go model defined under <code>UsageBasedPricingTerm</code>, the <code>UsageBasedRateCardItem</code> defines an individual rate for a product dimension.</p>
 */
export interface UsageBasedRateCardItem {
  /**
   * @public
   * <p>Defines the per unit rates for product dimensions.</p>
   */
  rateCard?: RateCardItem[];
}

/**
 * @public
 * <p>Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the
 *          customers are charged based on product usage.</p>
 */
export interface UsageBasedPricingTerm {
  /**
   * @public
   * <p>Category of the term.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the currency for the prices mentioned in the term. </p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>List of rate cards.</p>
   */
  rateCards?: UsageBasedRateCardItem[];
}

/**
 * @public
 * <p>Defines the conditions that will keep an agreement created from this offer valid. </p>
 */
export interface ValidityTerm {
  /**
   * @public
   * <p>Category of the term being updated. </p>
   */
  type?: string;

  /**
   * @public
   * <p>Defines the duration that the agreement remains active. If
   *             <code>AgreementStartDate</code> isn’t provided, the agreement duration is relative to
   *          the agreement signature time. The duration is represented in the ISO_8601 format.</p>
   */
  agreementDuration?: string;

  /**
   * @public
   * <p>Defines the date when agreement starts. The agreement starts at 00:00:00.000 UTC on the
   *          date provided. If <code>AgreementStartDate</code> isn’t provided, the agreement start date
   *          is determined based on agreement signature time.</p>
   */
  agreementStartDate?: Date;

  /**
   * @public
   * <p>Defines the date when the agreement ends. The agreement ends at 23:59:59.999 UTC on the
   *          date provided. If <code>AgreementEndDate</code> isn’t provided, the agreement end date is
   *          determined by the validity of individual terms.</p>
   */
  agreementEndDate?: Date;
}

/**
 * @public
 * <p>A subset of terms proposed by the proposer, which have been accepted by the acceptor as part of agreement creation.</p>
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
  | AcceptedTerm.$UnknownMember;

/**
 * @public
 */
export namespace AcceptedTerm {
  /**
   * @public
   * <p>Defines the list of text agreements proposed to the acceptors. An example is the end user license agreement (EULA).</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines the customer support available for the acceptors when they purchase the software.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines that on graceful expiration of the agreement (when the agreement ends on its pre-defined end date), a new agreement will be created using the accepted terms on the existing agreement. In other words, the agreement will be renewed. Presence of <code>RenewalTerm</code> in the offer document means that auto-renewal is allowed. Buyers will have the option to accept or decline auto-renewal at the offer acceptance/agreement creation. Buyers can also change this flag from <code>True</code> to <code>False</code> or <code>False</code> to <code>True</code> at anytime during the agreement's lifecycle.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines a usage-based pricing model (typically, pay-as-you-go pricing), where the customers are charged based on product usage.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines a prepaid payment model that allows buyers to configure the entitlements they want to purchase and the duration.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Enables you and your customers to move your existing agreements to AWS Marketplace. The customer won't be charged for product usage in AWS Marketplace because they already paid for the product outside of AWS Marketplace.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines a pricing model where customers are charged a fixed recurring price at the end of each billing period.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines the conditions that will keep an agreement created from this offer valid.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines an installment-based pricing model where customers are charged a fixed price on different dates during the agreement validity period. This is used most commonly for flexible payment schedule pricing.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines a short-term free pricing model where the buyers aren’t charged anything within a specified limit.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>Defines a pre-paid pricing model where the customers are charged a fixed upfront amount.</p>
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
    $unknown: [string, any];
  }

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
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AcceptedTerm, visitor: Visitor<T>): T => {
    if (value.legalTerm !== undefined) return visitor.legalTerm(value.legalTerm);
    if (value.supportTerm !== undefined) return visitor.supportTerm(value.supportTerm);
    if (value.renewalTerm !== undefined) return visitor.renewalTerm(value.renewalTerm);
    if (value.usageBasedPricingTerm !== undefined) return visitor.usageBasedPricingTerm(value.usageBasedPricingTerm);
    if (value.configurableUpfrontPricingTerm !== undefined)
      return visitor.configurableUpfrontPricingTerm(value.configurableUpfrontPricingTerm);
    if (value.byolPricingTerm !== undefined) return visitor.byolPricingTerm(value.byolPricingTerm);
    if (value.recurringPaymentTerm !== undefined) return visitor.recurringPaymentTerm(value.recurringPaymentTerm);
    if (value.validityTerm !== undefined) return visitor.validityTerm(value.validityTerm);
    if (value.paymentScheduleTerm !== undefined) return visitor.paymentScheduleTerm(value.paymentScheduleTerm);
    if (value.freeTrialPricingTerm !== undefined) return visitor.freeTrialPricingTerm(value.freeTrialPricingTerm);
    if (value.fixedUpfrontPricingTerm !== undefined)
      return visitor.fixedUpfrontPricingTerm(value.fixedUpfrontPricingTerm);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The details of the party accepting the agreement terms. This is commonly the buyer for
 *             <code>PurchaseAgreement</code>.</p>
 */
export interface Acceptor {
  /**
   * @public
   * <p>The AWS account ID of the acceptor.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>User does not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier for the error.</p>
   */
  requestId?: string;

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
    this.requestId = opts.requestId;
  }
}

/**
 * @public
 * @enum
 */
export const AgreementStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
  RENEWED: "RENEWED",
  REPLACED: "REPLACED",
  ROLLED_BACK: "ROLLED_BACK",
  SUPERSEDED: "SUPERSEDED",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus];

/**
 * @public
 * <p>The list of resources involved in the agreement.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The unique identifier of the resource.</p>
   *          <note>
   *             <p>We mention the term resource, which is most commonly a product, so a
   *                <code>resourceId</code> is also a <code>productId</code>.</p>
   *          </note>
   */
  id?: string;

  /**
   * @public
   * <p>Type of the resource, which is the product. Values include <code>SaaSProduct</code> or
   *             <code>AmiProduct</code>.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>A summary of the proposal received from the proposer.</p>
 */
export interface ProposalSummary {
  /**
   * @public
   * <p>The list of resources involved in the agreement.</p>
   */
  resources?: Resource[];

  /**
   * @public
   * <p>The unique identifier of the offer in AWS Marketplace.</p>
   */
  offerId?: string;
}

/**
 * @public
 * <p>Details of the party proposing the agreement terms,. This is commonly the seller for
 *             <code>PurchaseAgreement</code>. </p>
 */
export interface Proposer {
  /**
   * @public
   * <p>The AWS account ID of the proposer.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>A summary of the agreement, including top-level attributes (for example, the agreement
 *          ID, version, proposer, and acceptor).</p>
 */
export interface AgreementViewSummary {
  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId?: string;

  /**
   * @public
   * <p>The date and time that the agreement was accepted.</p>
   */
  acceptanceTime?: Date;

  /**
   * @public
   * <p>The date and time when the agreement starts.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The date and time when the agreement ends. The field is <code>null</code> for
   *          pay-as-you-go agreements, which don’t have end dates.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The type of agreement. Values are <code>PurchaseAgreement</code> or
   *             <code>VendorInsightsAgreement</code>.</p>
   */
  agreementType?: string;

  /**
   * @public
   * <p>Details of the party accepting the agreement terms. This is commonly the buyer for
   *             <code>PurchaseAgreement.</code>
   *          </p>
   */
  acceptor?: Acceptor;

  /**
   * @public
   * <p>Details of the party proposing the agreement terms, most commonly the seller for
   *             <code>PurchaseAgreement</code>.</p>
   */
  proposer?: Proposer;

  /**
   * @public
   * <p>A summary of the proposal</p>
   */
  proposalSummary?: ProposalSummary;

  /**
   * @public
   * <p>The current status of the agreement. </p>
   */
  status?: AgreementStatus;
}

/**
 * @public
 */
export interface DescribeAgreementInput {
  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId: string | undefined;
}

/**
 * @public
 * <p>Estimated cost of the agreement.</p>
 */
export interface EstimatedCharges {
  /**
   * @public
   * <p>Defines the currency code for the charge.</p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>The total known amount customer has to pay across the lifecycle of the agreement.</p>
   *          <note>
   *             <p>This is the total contract value if accepted terms contain
   *                <code>ConfigurableUpfrontPricingTerm</code> or <code>FixedUpfrontPricingTerm</code>.
   *             In the case of pure contract pricing, this will be the total value of the contract. In
   *             the case of contracts with consumption pricing, this will only include the committed
   *             value and not include any overages that occur.</p>
   *             <p>If the accepted terms contain <code>PaymentScheduleTerm</code>, it will be the total
   *             payment schedule amount. This occurs when flexible payment schedule is used, and is the
   *             sum of all invoice charges in the payment schedule.</p>
   *             <p>In case a customer has amended an agreement, by purchasing more units of any
   *             dimension, this will include both the original cost as well as the added cost incurred
   *             due to addition of new units. </p>
   *             <p>This is <code>0</code> if the accepted terms contain
   *                <code>UsageBasedPricingTerm</code> without
   *                <code>ConfigurableUpfrontPricingTerm</code> or <code>RecurringPaymentTerm</code>.
   *             This occurs for usage-based pricing (such as SaaS metered or AMI/container hourly or
   *             monthly), because the exact usage is not known upfront.</p>
   *          </note>
   */
  agreementValue?: string;
}

/**
 * @public
 */
export interface DescribeAgreementOutput {
  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId?: string;

  /**
   * @public
   * <p>The details of the party accepting the agreement terms. This is commonly the buyer for
   *             <code>PurchaseAgreement</code>.</p>
   */
  acceptor?: Acceptor;

  /**
   * @public
   * <p>The details of the party proposing the agreement terms. This is commonly the seller for
   *             <code>PurchaseAgreement</code>.</p>
   */
  proposer?: Proposer;

  /**
   * @public
   * <p>The date and time when the agreement starts.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The date and time when the agreement ends. The field is <code>null</code> for
   *          pay-as-you-go agreements, which don’t have end dates.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The date and time the offer was accepted or the agreement was created.</p>
   *          <note>
   *             <p>
   *                <code>AcceptanceTime</code> and <code>StartTime</code> can differ for future dated
   *             agreements (FDAs).</p>
   *          </note>
   */
  acceptanceTime?: Date;

  /**
   * @public
   * <p>The type of agreement. Values are <code>PurchaseAgreement</code> or
   *             <code>VendorInsightsAgreement</code>.</p>
   */
  agreementType?: string;

  /**
   * @public
   * <p>The estimated cost of the agreement.</p>
   */
  estimatedCharges?: EstimatedCharges;

  /**
   * @public
   * <p>A summary of the proposal received from the proposer.</p>
   */
  proposalSummary?: ProposalSummary;

  /**
   * @public
   * <p>The current status of the agreement.</p>
   *          <p>Statuses include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> – The terms of the agreement are active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code> – The agreement ended without a specified reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The acceptor ended the agreement before the defined end
   *                date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPIRED</code> – The agreement ended on the defined end date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RENEWED</code> – The agreement was renewed into a new agreement (for
   *                example, an auto-renewal).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPLACED</code> – The agreement was replaced using an agreement replacement
   *                offer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLED_BACK</code> (Only applicable to inactive agreement revisions) – The
   *                agreement revision has been rolled back because of an error. An earlier revision is
   *                now active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPERCEDED</code> (Only applicable to inactive agreement revisions) – The
   *                agreement revision is no longer active and another agreement revision is now
   *                active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code> – The agreement ended before the defined end date because
   *                of an AWS termination (for example, a payment failure).</p>
   *             </li>
   *          </ul>
   */
  status?: AgreementStatus;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The unique identifier for the error.</p>
   */
  requestId?: string;

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
    this.requestId = opts.requestId;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AGREEMENT: "Agreement",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier for the error.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The unique identifier for the resource.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType;

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
    this.requestId = opts.requestId;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier for the error.</p>
   */
  requestId?: string;

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
    this.requestId = opts.requestId;
  }
}

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field associated with the error.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>See applicable actions.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  INVALID_AGREEMENT_ID: "INVALID_AGREEMENT_ID",
  INVALID_CATALOG: "INVALID_CATALOG",
  INVALID_FILTER_NAME: "INVALID_FILTER_NAME",
  INVALID_FILTER_VALUES: "INVALID_FILTER_VALUES",
  INVALID_MAX_RESULTS: "INVALID_MAX_RESULTS",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_SORT_BY: "INVALID_SORT_BY",
  INVALID_SORT_ORDER: "INVALID_SORT_ORDER",
  MISSING_AGREEMENT_ID: "MISSING_AGREEMENT_ID",
  OTHER: "OTHER",
  UNSUPPORTED_FILTERS: "UNSUPPORTED_FILTERS",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The unique identifier associated with the error.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The reason associated with the error.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>The fields associated with the error.</p>
   */
  fields?: ValidationExceptionField[];

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
    this.requestId = opts.requestId;
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * @public
 */
export interface GetAgreementTermsInput {
  /**
   * @public
   * <p>The unique identifier of the agreement.</p>
   */
  agreementId: string | undefined;

  /**
   * @public
   * <p>The maximum number of agreements to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start pagination</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetAgreementTermsOutput {
  /**
   * @public
   * <p>A subset of terms proposed by the proposer that have been accepted by the acceptor as
   *          part of the agreement creation.</p>
   */
  acceptedTerms?: AcceptedTerm[];

  /**
   * @public
   * <p>A token to specify where to start pagination</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The filter name and value pair that is used to return a more specific list of results.
 *          Filters can be used to match a set of resources by various criteria, such as
 *             <code>offerId</code> or <code>productId</code>.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The filter value.</p>
   */
  values?: string[];
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>An object that contains the <code>SortBy</code> and <code>SortOrder</code>
 *          attributes.</p>
 */
export interface Sort {
  /**
   * @public
   * <p>The attribute on which the data is grouped, which can be by <code>StartTime</code> and
   *             <code>EndTime</code>. The default value is <code>EndTime</code>.</p>
   */
  sortBy?: string;

  /**
   * @public
   * <p>The sorting order, which can be <code>ASCENDING</code> or <code>DESCENDING</code>. The
   *          default value is <code>DESCENDING</code>.</p>
   */
  sortOrder?: SortOrder;
}

/**
 * @public
 */
export interface SearchAgreementsInput {
  /**
   * @public
   * <p>The catalog in which the agreement was created.</p>
   */
  catalog?: string;

  /**
   * @public
   * <p>The filter name and value pair used to return a specific list of results.</p>
   *          <p>The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceIdentifier</code> – The unique identifier of the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType</code> – Type of the resource, which is the product
   *                   (<code>AmiProduct</code>, <code>ContainerProduct</code>, or
   *                   <code>SaaSProduct</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PartyType</code> – The party type (either <code>Acceptor</code> or
   *                   <code>Proposer</code>) of the caller. For agreements where the caller is the
   *                proposer, use the <code>Proposer</code> filter. For agreements where the caller is
   *                the acceptor, use the <code>Acceptor</code> filter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AcceptorAccountId</code> – The AWS account ID of the party accepting the
   *                agreement terms.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OfferId</code> – The unique identifier of the offer in which the terms are
   *                registered in the agreement token.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> – The current status of the agreement. Values include
   *                   <code>ACTIVE</code>, <code>ARCHIVED</code>, <code>CANCELLED</code>,
   *                   <code>EXPIRED</code>, <code>RENEWED</code>, <code>REPLACED</code>, and
   *                   <code>TERMINATED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BeforeEndTime</code> – A date used to filter agreements with a date before
   *                the <code>endTime</code> of an agreement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AfterEndTime</code> – A date used to filter agreements with a date after the
   *                   <code>endTime</code> of an agreement.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AgreementType</code> – The type of agreement. Values include
   *                   <code>PurchaseAgreement</code> or <code>VendorInsightsAgreement</code>.</p>
   *             </li>
   *          </ul>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>An object that contains the <code>SortBy</code> and <code>SortOrder</code>
   *          attributes.</p>
   */
  sort?: Sort;

  /**
   * @public
   * <p>The maximum number of agreements to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to specify where to start pagination.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface SearchAgreementsOutput {
  /**
   * @public
   * <p>A summary of the agreement, including top-level attributes (for example, the agreement
   *          ID, version, proposer, and acceptor).</p>
   */
  agreementViewSummaries?: AgreementViewSummary[];

  /**
   * @public
   * <p>The token used for pagination. The field is <code>null</code> if there are no more
   *          results.</p>
   */
  nextToken?: string;
}
