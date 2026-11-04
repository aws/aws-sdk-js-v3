// smithy-typescript generated code
/* eslint-disable */
/**
 * Lambda
 *
 * **Overview**
 *
 * AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda compute resources to access resources in your Amazon Virtual Private Cloud (Amazon VPC).
 *
 * Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda compute resources at run time.
 *
 * The *Lambda Core API Reference* provides information about each of the API methods, including details about the parameters in each API request and response.
 *
 * You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see [Tools for Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * For a list of Region-specific endpoints that Lambda supports, see [Lambda endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html) in the *Amazon Web Services General Reference.*
 *
 * When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) in the *Amazon Web Services General Reference.*
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
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { LambdaCoreServiceException } from "./models/LambdaCoreServiceException";
