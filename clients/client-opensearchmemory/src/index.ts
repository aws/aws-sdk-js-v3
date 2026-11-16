// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon OpenSearch Memory lets your AI agents and applications recall facts and summaries across sessions. Your agents send events, such as conversation turns, and search the memories derived from them.</p> <p>A space groups related events and memories, and holds the memory strategies that you configure for them. Use the space operations to create, get, list, update, and delete spaces. Use the event and memory operations to write, read, list, search, update, and delete a space's events and memories.</p>
 *
 * @packageDocumentation
 */
export * from "./OpenSearchMemoryClient";
export * from "./OpenSearchMemory";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OpenSearchMemoryExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { OpenSearchMemoryServiceException } from "./models/OpenSearchMemoryServiceException";
