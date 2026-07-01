// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The AWS Sustainability service provides programmatic access to estimated carbon emissions data for your Amazon Web Services usage. Use the AWS Sustainability service to retrieve, analyze, and track the carbon footprint of your cloud infrastructure over time. </p> <p>With the AWS Sustainability service, you can:</p> <ul> <li> <p>Retrieve estimated carbon emissions for your Amazon Web Services usage across different time periods </p> </li> <li> <p>Group emissions data by dimensions such as account, region, and service</p> </li> <li> <p>Filter emissions data to focus on specific accounts, regions, or services</p> </li> <li> <p>Access multiple emissions calculation methodologies including Location-based Method (LBM) and Market-based Method (MBM) </p> </li> <li> <p>Aggregate emissions data at various time granularities including monthly, quarterly, and yearly periods </p> </li> </ul> <p> The API supports pagination for efficient data retrieval and provides dimension values to help you understand the available grouping and filtering options for your account. </p> <p> All emissions values are calculated using methodologies aligned with the Greenhouse Gas (GHG) Protocol and are provided in metric tons of carbon dioxide-equivalent (MTCO2e). </p>
 *
 * @packageDocumentation
 */
export * from "./SustainabilityClient";
export * from "./Sustainability";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SustainabilityExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SustainabilityServiceException } from "./models/SustainabilityServiceException";
