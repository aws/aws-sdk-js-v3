// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda compute resources to access resources in your Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda compute resources at run time.</p> <p>The <i>Lambda Core API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response.</p> <p/> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html">Lambda endpoints and quotas</a> in the <i>Amazon Web Services General Reference.</i> </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i> </p>
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
