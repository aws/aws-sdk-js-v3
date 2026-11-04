// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Application Recovery Controller (ARC) Region switch helps you to quickly and reliably shift traffic away from an impaired Amazon Web Services Region to a healthy Region. With Region switch, you can create plans that define the steps to shift traffic for your application from one Amazon Web Services Region to another.
 *
 * Region switch provides a structured approach to multi-Region failover, helping you to meet your recovery time objectives (RTOs) and maintain business continuity during regional disruptions.
 *
 * For more information, see [Region switch in ARC](https://docs.aws.amazon.com/r53recovery/latest/dg/region-switch.html) in the *Amazon Application Recovery Controller User Guide*.
 *
 * @packageDocumentation
 */
export * from "./ARCRegionSwitchClient";
export * from "./ARCRegionSwitch";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ARCRegionSwitchExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ARCRegionSwitchServiceException } from "./models/ARCRegionSwitchServiceException";
