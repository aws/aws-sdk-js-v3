// smithy-typescript generated code
/* eslint-disable */
/**
 * Provides APIs for creating and managing SageMaker resources.
 *
 * Other Resources:
 *
 * - [SageMaker Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user)
 * - [Amazon Augmented AI Runtime API Reference](https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html)
 *
 * @packageDocumentation
 */
export * from "./SageMakerClient";
export * from "./SageMaker";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";
export * from "./models/models_3";
export * from "./models/models_4";
export * from "./models/models_5";

export { SageMakerServiceException } from "./models/SageMakerServiceException";
