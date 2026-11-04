// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Data Firehose
 *
 * > **Note:** Amazon Data Firehose was previously known as Amazon Kinesis Data Firehose.
 *
 * Amazon Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supported destinations.
 *
 * @packageDocumentation
 */
export * from "./FirehoseClient";
export * from "./Firehose";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { FirehoseExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { FirehoseServiceException } from "./models/FirehoseServiceException";
