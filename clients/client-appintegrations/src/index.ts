// smithy-typescript generated code
/* eslint-disable */
/**
 * - [Amazon AppIntegrations actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_AppIntegrations_Service.html)
 * - [Amazon AppIntegrations data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_AppIntegrations_Service.html)
 *
 * The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.
 *
 * For information about how you can use external applications with Connect Customer, see the following topics in the *Connect Customer Administrator Guide*:
 *
 * - [Third-party applications (3p apps) in the agent workspace](https://docs.aws.amazon.com/connect/latest/adminguide/3p-apps.html)
 * - [Use Amazon Q in Connect for generative AI–powered agent assistance in real-time](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html)
 *
 * @packageDocumentation
 */
export * from "./AppIntegrationsClient";
export * from "./AppIntegrations";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AppIntegrationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AppIntegrationsServiceException } from "./models/AppIntegrationsServiceException";
