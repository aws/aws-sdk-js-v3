// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You can use the tax setting API to programmatically set, modify, and delete the tax
 *       registration number (TRN), associated business legal name, and address (Collectively referred
 *       to as "TRN information"). You can also programmatically view TRN information and tax addresses
 *       ("Tax profiles"). </p>
 *          <p>You can use this API to automate your TRN information settings instead of manually using
 *       the console.</p>
 *          <p>Service Endpoint</p>
 *          <ul>
 *             <li>
 *                <p>https://tax.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./TaxSettingsClient";
export * from "./TaxSettings";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TaxSettingsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { TaxSettingsServiceException } from "./models/TaxSettingsServiceException";
