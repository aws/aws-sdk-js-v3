// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Web Services Migration Hub Refactor Spaces
 *
 * This API reference provides descriptions, syntax, and other details about each of the actions and data types for Amazon Web Services Migration Hub Refactor Spaces (Refactor Spaces). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see [Amazon Web Services SDKs](https://aws.amazon.com/tools/#SDKs).
 *
 * To share Refactor Spaces environments with other Amazon Web Services accounts or with Organizations and their OUs, use Resource Access Manager's `CreateResourceShare` API. See [CreateResourceShare](https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) in the *Amazon Web Services RAM API Reference*.
 *
 * @packageDocumentation
 */
export * from "./MigrationHubRefactorSpacesClient";
export * from "./MigrationHubRefactorSpaces";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MigrationHubRefactorSpacesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MigrationHubRefactorSpacesServiceException } from "./models/MigrationHubRefactorSpacesServiceException";
