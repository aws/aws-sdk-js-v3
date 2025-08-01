// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Application Recovery Controller (ARC) Region switch helps you to quickly and reliably shift traffic away from an impaired Amazon Web Services Region to a healthy Region. With Region switch, you can create plans that define the steps to shift traffic for your application from one Amazon Web Services Region to another. You can test your plans in practice mode before using them in a real recovery scenario.</p> <p>Region switch provides a structured approach to multi-Region failover, helping you to meet your recovery time objectives (RTOs) and maintain business continuity during regional disruptions.</p>
 *
 * @packageDocumentation
 */
export * from "./ARCRegionSwitchClient";
export * from "./ARCRegionSwitch";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ARCRegionSwitchExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { ARCRegionSwitchServiceException } from "./models/ARCRegionSwitchServiceException";
