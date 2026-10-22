// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Polly is a web service that makes it easy to synthesize speech from
 *       text.</p>
 *          <p>The Amazon Polly service provides API operations for synthesizing
 *       high-quality speech from plain text and Speech Synthesis Markup Language
 *       (SSML), along with managing pronunciations lexicons that enable you to get
 *       the best results for your application domain.</p>
 *          <p>Authenticated API calls must be signed using the Signature Version 4 Signing Process. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Signing Amazon Web Services API Requests</a> in the <i>IAM User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./PollyClient";
export * from "./Polly";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PollyExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PollyServiceException } from "./models/PollyServiceException";
