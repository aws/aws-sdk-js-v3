// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Use CloudWatch Application Signals for comprehensive observability of your cloud-based applications. It enables real-time service health dashboards and helps you track long-term performance trends against your business goals. The application-centric view provides you with unified visibility across your applications, services, and dependencies, so you can proactively monitor and efficiently triage any issues that may arise, ensuring optimal customer experience.</p> <p>Application Signals provides the following benefits:</p> <ul> <li> <p>Automatically collect metrics and traces from your applications, and display key metrics such as call volume, availability, latency, faults, and errors. </p> </li> <li> <p>Create and monitor service level objectives (SLOs). </p> </li> <li> <p>See a map of your application topology that Application Signals automatically discovers, that gives you a visual representation of your applications, dependencies, and their connectivity.</p> </li> </ul> <p>Application Signals works with CloudWatch RUM, CloudWatch Synthetics canaries, and Amazon Web Services Service Catalog AppRegistry, to display your client pages, Synthetics canaries, and application names within dashboards and maps.</p>
 *
 * @packageDocumentation
 */
export * from "./ApplicationSignalsClient";
export * from "./ApplicationSignals";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ApplicationSignalsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ApplicationSignalsServiceException } from "./models/ApplicationSignalsServiceException";
