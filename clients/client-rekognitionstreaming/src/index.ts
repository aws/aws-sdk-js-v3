// smithy-typescript generated code
/* eslint-disable */
/**
 * A real-time video processing service based on Rekognition. This section documents the API operations for Rekognition Face Liveness.
 *
 * **Amazon Rekognition Face Liveness**
 *
 * - [CreateFaceLivenessSession](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html)
 * - [GetFaceLivenessSessionResults](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html)
 * - [StartFaceLivenessSession](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html)
 *
 * @packageDocumentation
 */
export * from "./RekognitionStreamingClient";
export * from "./RekognitionStreaming";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RekognitionStreamingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { RekognitionStreamingServiceException } from "./models/RekognitionStreamingServiceException";
