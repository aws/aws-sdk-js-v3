// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Web Services RTB Fabric provides secure, low-latency infrastructure for connecting real-time bidding (RTB) applications. Rather than hosting applications directly, RTB Fabric acts as the connecting fabric that enables your applications to communicate efficiently over private networks instead of the public internet. You maintain complete control over your applications, data, and bidding decisions, while RTB Fabric provides the underlying infrastructure for secure, reliable connectivity.</p> <p>You can use these APIs to complete RTB Fabric tasks, such as setting up audit log ingestions or viewing user access. For more information about RTB Fabric, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/rtb-fabric/latest/userguide/">Amazon Web Services RTB Fabric User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./RTBFabricClient";
export * from "./RTBFabric";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RTBFabricExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { RTBFabricServiceException } from "./models/RTBFabricServiceException";
