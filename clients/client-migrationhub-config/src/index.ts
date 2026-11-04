// smithy-typescript generated code
/* eslint-disable */
/**
 * The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.
 *
 * - You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a `HomeRegionNotSetException` error is returned.
 * - API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.
 * - If you call a write API outside the home region, an `InvalidInputException` is returned.
 * - You can call `GetHomeRegion` action to obtain the account's Migration Hub home region.
 *
 * For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference.
 *
 * @packageDocumentation
 */
export * from "./MigrationHubConfigClient";
export * from "./MigrationHubConfig";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MigrationHubConfigExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MigrationHubConfigServiceException } from "./models/MigrationHubConfigServiceException";
