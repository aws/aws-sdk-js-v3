// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon CloudSearch Configuration Service
 *
 * You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.
 *
 * The endpoint for configuration service requests is region-specific: cloudsearch.*region*.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see [Regions and Endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region).
 *
 * @packageDocumentation
 */
export * from "./CloudSearchClient";
export * from "./CloudSearch";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudSearchExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CloudSearchServiceException } from "./models/CloudSearchServiceException";
