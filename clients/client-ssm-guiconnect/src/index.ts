// smithy-typescript generated code
/* eslint-disable */
/**
 * AWS Systems Manager GUI Connect
 *
 * Systems Manager GUI Connect, a component of Fleet Manager, lets you connect to your Window Server-type Amazon Elastic Compute Cloud (Amazon EC2) instances using the Remote Desktop Protocol (RDP). GUI Connect, which is powered by [Amazon DCV](https://docs.aws.amazon.com/dcv/latest/adminguide/what-is-dcv.html), provides you with secure connectivity to your Windows Server instances directly from the Systems Manager console. You can have up to four simultaneous connections in a single browser window. In the console, GUI Connect is also referred to as Fleet Manager Remote Desktop.
 *
 * This reference is intended to be used with the [*Amazon Web Services Systems Manager User Guide*](https://docs.aws.amazon.com/systems-manager/latest/userguide/). To get started, see the following user guide topics:
 *
 * - [Setting up Amazon Web Services Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html)
 * - [Connect to a Windows Server managed instance using Remote Desktop](https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html)
 *
 * @packageDocumentation
 */
export * from "./SSMGuiConnectClient";
export * from "./SSMGuiConnect";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SSMGuiConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/errors";
export * from "./models/models_0";

export { SSMGuiConnectServiceException } from "./models/SSMGuiConnectServiceException";
