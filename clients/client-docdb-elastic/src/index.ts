// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon DocumentDB elastic clusters
 *
 * Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity. Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances.
 *
 * Amazon DocumentDB elastic-clusters were created to:
 *
 * - provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.
 * - give customers higher connection limits, and to reduce downtime from patching.
 * - continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads.
 *
 * @packageDocumentation
 */
export * from "./DocDBElasticClient";
export * from "./DocDBElastic";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DocDBElasticExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { DocDBElasticServiceException } from "./models/DocDBElasticServiceException";
