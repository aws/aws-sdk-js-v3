// smithy-typescript generated code
/* eslint-disable */
/**
 * - [Contact Lens actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Contact_Lens.html)
 * - [Contact Lens data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Contact_Lens.html)
 *
 * Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.
 *
 * Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent conversations. For more information, see [Analyze conversations using speech analytics](https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html) in the *Amazon Connect Administrator Guide*.
 *
 * @packageDocumentation
 */
export * from "./ConnectContactLensClient";
export * from "./ConnectContactLens";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectContactLensExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ConnectContactLensServiceException } from "./models/ConnectContactLensServiceException";
