// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Web Services Billing Conductor is a fully managed service that you can use
 *       to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback
 *       your end customers. Amazon Web Services Billing Conductor doesn't change the way
 *       you're billed by Amazon Web Services each month by design. Instead, it provides you with a
 *       mechanism to configure, generate, and display rates to certain customers over a given billing
 *       period. You can also analyze the difference between the rates you apply to your accounting
 *       groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the
 *       custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per
 *       billing group.</p>
 *          <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its
 *       API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services
 *         Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./BillingconductorClient";
export * from "./Billingconductor";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { BillingconductorServiceException } from "./models/BillingconductorServiceException";
