// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon WorkSpaces Applications
 *
 * This is the *Amazon WorkSpaces Applications API Reference*. This documentation provides descriptions and syntax for each of the actions and data types in WorkSpaces Applications. WorkSpaces Applications is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. WorkSpaces Applications manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand.
 *
 * > **Note:** You can call the WorkSpaces Applications API operations by using an interface VPC endpoint (interface endpoint). For more information, see [Access WorkSpaces Applications API Operations and CLI Commands Through an Interface VPC Endpoint](https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html) in the *Amazon WorkSpaces Applications Administration Guide*.
 *
 * To learn more about WorkSpaces Applications, see the following resources:
 *
 * - [Amazon WorkSpaces Applications product page](http://aws.amazon.com/appstream2)
 * - [Amazon WorkSpaces Applications documentation](http://aws.amazon.com/documentation/appstream2)
 *
 * @packageDocumentation
 */
export * from "./AppStreamClient";
export * from "./AppStream";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AppStreamExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AppStreamServiceException } from "./models/AppStreamServiceException";
