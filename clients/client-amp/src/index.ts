// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics that makes it easier to securely monitor container environments at scale. With Amazon Managed Service for Prometheus, you can use the same open-source Prometheus data model and query language that you use today to monitor the performance of your containerized workloads, and also enjoy improved scalability, availability, and security without having to manage the underlying infrastructure.</p> <p>For more information about Amazon Managed Service for Prometheus, see the <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html">Amazon Managed Service for Prometheus</a> User Guide.</p> <p>Amazon Managed Service for Prometheus includes two APIs.</p> <ul> <li> <p>Use the Amazon Web Services API described in this guide to manage Amazon Managed Service for Prometheus resources, such as workspaces, rule groups, and alert managers.</p> </li> <li> <p>Use the <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-Prometheus-Compatible-Apis">Prometheus-compatible API</a> to work within your Prometheus workspace.</p> </li> </ul>
 *
 * @packageDocumentation
 */
export * from "./AmpClient";
export * from "./Amp";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AmpExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { AmpServiceException } from "./models/AmpServiceException";
