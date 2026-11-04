// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure end-to-end management solution for hybrid cloud environments that enables safe and secure operations at scale.
 *
 * This reference is intended to be used with the [Amazon Web Services Systems Manager User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/). To get started, see [Setting up Amazon Web Services Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-console.html).
 *
 * **Related resources**
 *
 * - For information about each of the tools that comprise Systems Manager, see [Using Systems Manager tools](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-tools.html) in the *Amazon Web Services Systems Manager User Guide*.
 * - For details about predefined runbooks for Automation, a tool in Amazon Web Services Systems Manager, see the *[Systems Manager Automation Runbook Reference](https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html)* .
 * - For information about AppConfig, a tool in Systems Manager, see the *[AppConfig User Guide](https://docs.aws.amazon.com/appconfig/latest/userguide/)* and the *[AppConfig API Reference](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/)* .
 * - For information about Incident Manager, a tool in Systems Manager, see the *[Systems Manager Incident Manager User Guide](https://docs.aws.amazon.com/incident-manager/latest/userguide/)* and the *[Systems Manager Incident Manager API Reference](https://docs.aws.amazon.com/incident-manager/latest/APIReference/)* .
 *
 * @packageDocumentation
 */
export * from "./SSMClient";
export * from "./SSM";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SSMExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { SSMServiceException } from "./models/SSMServiceException";
