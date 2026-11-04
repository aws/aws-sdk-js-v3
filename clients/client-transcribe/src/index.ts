// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Transcribe offers three main types of batch transcription: **Standard**, **Medical**, and **Call Analytics**.
 *
 * - **Standard transcriptions** are the most common option. Refer to for details.
 * - **Medical transcriptions** are tailored to medical professionals and incorporate medical terms. A common use case for this service is transcribing doctor-patient dialogue into after-visit notes. Refer to for details.
 * - **Call Analytics transcriptions** are designed for use with call center audio on two different channels; if you're looking for insight into customer service calls, use this option. Refer to for details.
 *
 * @packageDocumentation
 */
export * from "./TranscribeClient";
export * from "./Transcribe";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TranscribeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TranscribeServiceException } from "./models/TranscribeServiceException";
