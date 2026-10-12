// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>With AWS Lambda Web Functions, you can run web applications and APIs as HTTP servers on AWS Lambda (Lambda) without provisioning or managing servers. Use web functions to run REST APIs, server-rendered web applications, and other HTTP workloads while Lambda handles scaling and availability.</p> <p>A web function has one or more immutable revisions (code and configuration) and one or more endpoints that expose it over HTTPS.</p>
 *
 * @packageDocumentation
 */
export * from "./LambdaWebClient";
export * from "./LambdaWeb";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { LambdaWebExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { LambdaWebServiceException } from "./models/LambdaWebServiceException";
