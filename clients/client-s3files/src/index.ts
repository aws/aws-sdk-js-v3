// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>S3 Files makes S3 buckets accessible as high-performance file systems powered by EFS. This service enables file system interface access to S3 data with sub-millisecond latencies through mount targets, supporting AI/ML workloads, media processing, and hybrid storage workflows that require both file system and object storage access to the same data.</p>
 *
 * @packageDocumentation
 */
export * from "./S3FilesClient";
export * from "./S3Files";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { S3FilesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { S3FilesServiceException } from "./models/S3FilesServiceException";
