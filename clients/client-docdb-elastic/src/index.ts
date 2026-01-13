// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon DocumentDB elastic clusters</fullname>
 *          <p>Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity.
 *       Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances.</p>
 *          <p>Amazon DocumentDB elastic-clusters were created to:</p>
 *          <ul>
 *             <li>
 *                <p>provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.</p>
 *             </li>
 *             <li>
 *                <p>give customers higher connection limits, and to reduce downtime from patching.</p>
 *             </li>
 *             <li>
 *                <p>continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./DocDBElasticClient";
export * from "./DocDBElastic";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DocDBElasticExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { DocDBElasticServiceException } from "./models/DocDBElasticServiceException";
