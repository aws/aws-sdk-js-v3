// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Connect Health is an AI-powered healthcare service built on Amazon Connect. It provides pre-built agents that automate patient engagement workflows and support clinical documentation at the point of care.</p> <p>You can use the Amazon Connect Health API to programmatically manage domains, configure patient engagement agents, run patient insights jobs, and stream ambient documentation sessions. This API reference describes the available API operations and data types for Amazon Connect Health.</p> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Amazon Connect Health.</p>
 *
 * @packageDocumentation
 */
export * from "./ConnectHealthClient";
export * from "./ConnectHealth";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectHealthExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ConnectHealthServiceException } from "./models/ConnectHealthServiceException";
