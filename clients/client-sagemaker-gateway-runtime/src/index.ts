// smithy-typescript generated code
/* eslint-disable */
/**
 * Use the Amazon SageMaker Gateway Runtime API to run inference through a
 * Global Inference Gateway. A Global Inference Gateway routes each request to
 * an inference gateway that serves the model named in the request.
 *
 * The request body is an OpenAI-compatible JSON object, sent with
 * `Content-Type: application/json`, and the model is selected by the `model`
 * key in that body. The content of the body is passed to the model server
 * unchanged, except for the `stream` flag, which each operation sets.
 *
 * Requests are signed with Signature Version 4 under the `sagemaker` signing
 * name. IAM actions are in the `sagemaker` namespace, for example
 * `sagemaker:InvokeGlobalInferenceGateway`. The default regional endpoint is
 * `gateway-runtime.sagemaker.{region}.amazonaws.com`.
 *
 * @packageDocumentation
 */
export * from "./SageMakerGatewayRuntimeClient";
export * from "./SageMakerGatewayRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerGatewayRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SageMakerGatewayRuntimeServiceException } from "./models/SageMakerGatewayRuntimeServiceException";
