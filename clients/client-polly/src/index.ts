// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Polly is a web service that makes it easy to synthesize speech from
 *       text.</p>
 *          <p>The Amazon Polly service provides API operations for synthesizing
 *       high-quality speech from plain text and Speech Synthesis Markup Language
 *       (SSML), along with managing pronunciations lexicons that enable you to get
 *       the best results for your application domain.</p>
 *
 * @packageDocumentation
 */
export * from "./PollyClient";
export * from "./Polly";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { PollyExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

import "@aws-sdk/util-endpoints";

export { PollyServiceException } from "./models/PollyServiceException";
