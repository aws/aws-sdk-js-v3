// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Use the Account Access Runtime API to list the roles that you can access and retrieve temporary Amazon Web Services credentials for those roles. You authenticate with a bearer token from IAM Identity Center. Each request is scoped to a tenant.</p>
 *
 * @packageDocumentation
 */
export * from "./AccountAccessRuntimeClient";
export * from "./AccountAccessRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AccountAccessRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AccountAccessRuntimeServiceException } from "./models/AccountAccessRuntimeServiceException";
