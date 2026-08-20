// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Manages flat-rate pricing subscriptions for supported services. Use this API to create, approve, update, and cancel subscriptions; associate and disassociate resources; and retrieve subscription details. With a flat-rate pricing subscription, you pay a fixed recurring fee for eligible resources instead of usage-based pricing.</p>
 *
 * @packageDocumentation
 */
export * from "./PricingPlanManagerClient";
export * from "./PricingPlanManager";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PricingPlanManagerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PricingPlanManagerServiceException } from "./models/PricingPlanManagerServiceException";
