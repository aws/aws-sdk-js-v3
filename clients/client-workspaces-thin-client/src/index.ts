// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon WorkSpaces Thin Client is an affordable device built to work with Amazon Web Services End User Computing (EUC) virtual desktops to provide users with a complete cloud desktop solution. WorkSpaces Thin Client is a compact device designed to connect up to two monitors and USB devices like a keyboard, mouse, headset, and webcam. To maximize endpoint security, WorkSpaces Thin Client devices do not allow local data storage or installation of unapproved applications. The WorkSpaces Thin Client device ships preloaded with device management software.</p> <p>You can use these APIs to complete WorkSpaces Thin Client tasks, such as creating environments or viewing devices. For more information about WorkSpaces Thin Client, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/workspaces-thin-client/latest/ag/">Amazon WorkSpaces Thin Client Administrator Guide</a>. For more information about using the Command Line Interface (CLI) to manage your WorkSpaces Thin Client resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces-thin-client/index.html">WorkSpaces Thin Client section of the CLI Reference</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./WorkSpacesThinClientClient";
export * from "./WorkSpacesThinClient";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { WorkSpacesThinClientExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { WorkSpacesThinClientServiceException } from "./models/WorkSpacesThinClientServiceException";

import { WorkSpacesThinClient } from "./WorkSpacesThinClient";

/**
 * @deprecated use {WorkSpacesThinClient} (renamed) instead.
 * The aggregated client is called WorkSpacesThinClient,
 * and the barebones client is called WorkSpacesThinClientClient.
 *
 * Due to some code generation issues with the word "Client" in the service name,
 * we are maintaining a few backwards compatible aliases here.
 */
export const WorkSpacesThin = WorkSpacesThinClient;

export type { WorkSpacesThinClientPaginationConfiguration as WorkSpacesThinPaginationConfiguration } from "./pagination/Interfaces";
