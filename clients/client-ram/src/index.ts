// smithy-typescript generated code
/* eslint-disable */
/**
 * This is the *Resource Access Manager API Reference*. This documentation provides descriptions and syntax for each of the actions and data types in RAM. RAM is a service that helps you securely share your Amazon Web Services resources to other Amazon Web Services accounts. If you use Organizations to manage your accounts, then you can share your resources with your entire organization or to organizational units (OUs). For supported resource types, you can also share resources with individual Identity and Access Management (IAM) roles and users.
 *
 * To learn more about RAM, see the following resources:
 *
 * - [Resource Access Manager product page](http://aws.amazon.com/ram)
 * - [Resource Access Manager User Guide](https://docs.aws.amazon.com/ram/latest/userguide/)
 *
 * @packageDocumentation
 */
export * from "./RAMClient";
export * from "./RAM";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RAMExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { RAMServiceException } from "./models/RAMServiceException";
