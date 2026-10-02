// smithy-typescript generated code
/* eslint-disable */
/**
 * <note> <p>The AWS Lambda Web Functions APIs (<code>LambdaWeb</code> namespace) are experimental and for internal AWS use only. They are not yet available to external customers.</p> </note> <p>AWS Lambda Web Functions let you run web applications and APIs as HTTP servers on Lambda. A web function has one or more immutable revisions (code and configuration) and one or more endpoints that expose it over HTTPS.</p>
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
