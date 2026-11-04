// smithy-typescript generated code
/* eslint-disable */
/**
 * - [Cases actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Cases.html)
 * - [Cases data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Cases.html)
 *
 * With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see [Amazon Connect Cases](https://docs.aws.amazon.com/connect/latest/adminguide/cases.html) in the *Amazon Connect Administrator Guide*.
 *
 * @packageDocumentation
 */
export * from "./ConnectCasesClient";
export * from "./ConnectCases";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ConnectCasesExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ConnectCasesServiceException } from "./models/ConnectCasesServiceException";
