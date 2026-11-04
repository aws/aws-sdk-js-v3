// smithy-typescript generated code
/* eslint-disable */
/**
 * > **Note:** Amazon Connect now refers to a portfolio of agentic solutions for business functions. The legacy product is now called Amazon Connect Customer, or simply Customer. The legacy name is used interchangeably in this documentation.
 *
 * - [Connect Customer Customer actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Service.html)
 * - [Connect Customer Customer data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Service.html)
 *
 * Connect Customer Customer engages customers at every touchpoint and creates deeper relationships with AI powered capabilities.
 *
 * Build and manage customer communication experiences. Connect customers to agents, enable intelligent routing, and track performance in real-time.
 *
 * There are limits to the number of Connect Customer resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see [Connect Customer Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Connect Customer Administrator Guide*.
 *
 * You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Connect Customer endpoints, see [Connect Customer Endpoints](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @packageDocumentation
 */
export * from "./ConnectClient";
export * from "./Connect";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";
export * from "./models/models_3";
export * from "./models/models_4";

export { ConnectServiceException } from "./models/ConnectServiceException";
