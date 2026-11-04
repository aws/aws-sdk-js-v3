// smithy-typescript generated code
/* eslint-disable */
/**
 * Billing Conductor is a fully managed service that you can use to customize a [pro forma](https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions) version of your billing data each month, to accurately show or chargeback your end customers. Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the [Billing console](https://console.aws.amazon.com/billing), or configure a cost and usage report per billing group.
 *
 * This documentation shows how you can configure Billing Conductor by using its API. For more information about using the [Billing Conductor](https://console.aws.amazon.com/billingconductor/) user interface, see the [Billing Conductor User Guide](https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html).
 *
 * @packageDocumentation
 */
export * from "./BillingconductorClient";
export * from "./Billingconductor";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { BillingconductorExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { BillingconductorServiceException } from "./models/BillingconductorServiceException";
