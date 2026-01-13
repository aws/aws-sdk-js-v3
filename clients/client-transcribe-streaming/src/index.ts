// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Transcribe streaming offers four main types of real-time transcription:
 *       <b>Standard</b>, <b>Medical</b>,
 *       <b>Call Analytics</b>,
 *       and <b>Health Scribe</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common option. Refer
 *       to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to medical professionals
 *       and incorporate medical terms. A common use case for this service is transcribing doctor-patient
 *       dialogue in real time, so doctors can focus on their patient instead of taking notes. Refer to
 *        for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed for use with call
 *           center audio on two different channels; if you're looking for insight into customer service calls, use this
 *           option. Refer to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>HealthScribe transcriptions</b> are designed to
 *           automatically create clinical notes from patient-clinician conversations using generative AI.
 *           Refer to [here] for details.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./TranscribeStreamingClient";
export * from "./TranscribeStreaming";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { TranscribeStreamingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { TranscribeStreamingServiceException } from "./models/TranscribeStreamingServiceException";
