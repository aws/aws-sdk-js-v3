// smithy-typescript generated code
/* eslint-disable */
/**
 * Connect Customer Customer Profiles
 *
 * - [Customer Profiles actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html)
 * - [Customer Profiles data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html)
 *
 * Connect Customer Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Connect Customer contact center.
 *
 * For more information about the Connect Customer Customer Profiles feature, see [Use Customer Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html) in the *Connect Customer Administrator's Guide*.
 *
 * @packageDocumentation
 */
export * from "./CustomerProfilesClient";
export * from "./CustomerProfiles";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CustomerProfilesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { CustomerProfilesServiceException } from "./models/CustomerProfilesServiceException";
