// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon SageMaker Training Session Runtime provides APIs for executing training operations and sampling operations against a running training session. Use these APIs to submit asynchronous training steps (such as forward-backward passes, optimizer steps, and checkpoint saves) and to generate text samples from the model being trained.</p>
 *
 * @packageDocumentation
 */
export * from "./SageMakerTrainingSessionRuntimeClient";
export * from "./SageMakerTrainingSessionRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerTrainingSessionRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SageMakerTrainingSessionRuntimeServiceException } from "./models/SageMakerTrainingSessionRuntimeServiceException";
