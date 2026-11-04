// smithy-typescript generated code
/* eslint-disable */
/**
 * You can use the tax setting API to programmatically set, modify, and delete the tax registration number (TRN), associated business legal name, and address (Collectively referred to as "TRN information"). You can also programmatically view TRN information and tax addresses ("Tax profiles").
 *
 * You can use this API to automate your TRN information settings instead of manually using the console.
 *
 * Service Endpoint
 *
 * - https://tax.us-east-1.amazonaws.com
 *
 * @packageDocumentation
 */
export * from "./TaxSettingsClient";
export * from "./TaxSettings";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TaxSettingsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TaxSettingsServiceException } from "./models/TaxSettingsServiceException";
