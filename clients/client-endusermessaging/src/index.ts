// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS End User Messaging provides a set of APIs to manage brand profiles, synchronize brand profile data with SMS and Rich Communication Services (RCS) registrations, and send and validate one-time passcodes across the SMS, voice, and WhatsApp channels.</p>
 *
 * @packageDocumentation
 */
export * from "./EndUserMessagingClient";
export * from "./EndUserMessaging";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { EndUserMessagingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { EndUserMessagingServiceException } from "./models/EndUserMessagingServiceException";
