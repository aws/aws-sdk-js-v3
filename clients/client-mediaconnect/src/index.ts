// smithy-typescript generated code
/* eslint-disable */
/**
 * Welcome to the Elemental MediaConnect API reference.
 *
 * MediaConnect is a service that lets you ingest live video content into the cloud and distribute it to destinations all over the world, both inside and outside the Amazon Web Services cloud. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by MediaConnect.
 *
 * Use the following links to get started with the MediaConnect API:
 *
 * - [Actions](https://docs.aws.amazon.com/mediaconnect/latest/api/API_Operations.html): An alphabetical list of all MediaConnect API operations.
 * - [Data types](https://docs.aws.amazon.com/mediaconnect/latest/api/API_Types.html): An alphabetical list of all MediaConnect data types.
 * - [Common parameters](https://docs.aws.amazon.com/mediaconnect/latest/api/CommonParameters.html): Parameters that all operations can use.
 * - [Common errors](https://docs.aws.amazon.com/mediaconnect/latest/api/CommonErrors.html): Client and server errors that all operations can return.
 *
 * @packageDocumentation
 */
export * from "./MediaConnectClient";
export * from "./MediaConnect";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MediaConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { MediaConnectServiceException } from "./models/MediaConnectServiceException";
