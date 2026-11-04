// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Transcribe streaming offers four main types of real-time transcription: **Standard**, **Medical**, **Call Analytics**, and **Health Scribe**.
 *
 * - **Standard transcriptions** are the most common option. Refer to for details.
 * - **Medical transcriptions** are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue in real time, so doctors can focus on their patient instead of taking notes. Refer to for details.
 * - **Call Analytics transcriptions** are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details.
 * - **HealthScribe transcriptions** are designed to automatically create clinical notes from patient-clinician conversations using generative AI. Refer to [here] for details.
 *
 * @packageDocumentation
 */
export * from "./TranscribeStreamingClient";
export * from "./TranscribeStreaming";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TranscribeStreamingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TranscribeStreamingServiceException } from "./models/TranscribeStreamingServiceException";
