// smithy-typescript generated code
/* eslint-disable */
/**
 * This is the *Firewall Manager API Reference*. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the [Firewall Manager Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html).
 *
 * Some API actions require explicit resource permissions. For information, see the developer guide topic [Service roles for Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service).
 *
 * @packageDocumentation
 */
export * from "./FMSClient";
export * from "./FMS";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { FMSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { FMSServiceException } from "./models/FMSServiceException";
