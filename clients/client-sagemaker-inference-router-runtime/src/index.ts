// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon SageMaker Inference Router Runtime is the runtime API for Amazon SageMaker AI inference routers. An inference router sends each request that you make to one of the destinations of a routing target. A destination is a SageMaker AI endpoint or inference component, in your account or in another account, in the router's Amazon Web Services Region or in another Region in the same Amazon Web Services partition. The router chooses a healthy destination with capacity, and prefers destinations in its own Region.</p> <p>Use <code>InvokeInferenceRouter</code> to get an inference in real time. Use <code>InvokeInferenceRouterAsync</code> to submit a request whose input and response are stored in Amazon S3.</p> <p>The inference router runtime endpoint supports HTTP/1.1 only. HTTP/2 isn't supported. If you use the Amazon Web Services SDKs or the Amazon Web Services CLI, you don't need to change anything.</p>
 *
 * @packageDocumentation
 */
export * from "./SageMakerInferenceRouterRuntimeClient";
export * from "./SageMakerInferenceRouterRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerInferenceRouterRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/errors";
export * from "./models/models_0";

export { SageMakerInferenceRouterRuntimeServiceException } from "./models/SageMakerInferenceRouterRuntimeServiceException";
