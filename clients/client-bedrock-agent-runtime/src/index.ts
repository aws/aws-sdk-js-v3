// smithy-typescript generated code
/* eslint-disable */
/**
 * > **Note:** Amazon Bedrock Agents (now Amazon Bedrock Agents Classic) is no longer open to new customers. For capabilities similar to Bedrock Agents Classic, explore Amazon Bedrock AgentCore. Existing customers can continue to use the service as normal. For more information, see [Amazon Bedrock Agents Classic availability change](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-classic-maintenance-mode.html).
 *
 * Contains APIs related to model invocation and querying of knowledge bases.
 *
 * @packageDocumentation
 */
export * from "./BedrockAgentRuntimeClient";
export * from "./BedrockAgentRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { BedrockAgentRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { BedrockAgentRuntimeServiceException } from "./models/BedrockAgentRuntimeServiceException";
