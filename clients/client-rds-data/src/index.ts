// smithy-typescript generated code
/* eslint-disable */
/**
 * RDS Data API
 *
 * Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora DB cluster. To run these statements, you use the RDS Data API (Data API).
 *
 * Data API is available with the following types of Aurora databases:
 *
 * - Aurora PostgreSQL - Serverless and provisioned
 * - Aurora MySQL - Serverless and provisioned
 *
 * For more information about the Data API, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
 *
 * @packageDocumentation
 */
export * from "./RDSDataClient";
export * from "./RDSData";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RDSDataExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { RDSDataServiceException } from "./models/RDSDataServiceException";
