// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>A real-time video processing service based on Rekognition. This section documents the API
 *       operations for Rekognition Face Liveness.</p>
 *          <p>
 *             <b>Amazon Rekognition Face Liveness</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html">CreateFaceLivenessSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html">GetFaceLivenessSessionResults</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html">StartFaceLivenessSession</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./RekognitionStreamingClient";
export * from "./RekognitionStreaming";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { RekognitionStreamingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { RekognitionStreamingServiceException } from "./models/RekognitionStreamingServiceException";
