// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by AWS Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda MicroVMs to access resources in your Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda MicroVMs at run time.</p>
 *
 * @packageDocumentation
 */
export * from "./LambdaCoreClient";
export * from "./LambdaCore";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { LambdaCoreExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { LambdaCoreServiceException } from "./models/LambdaCoreServiceException";
