// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>AWS Systems Manager GUI Connect</fullname>
 *          <p>Systems Manager GUI Connect, a component of Fleet Manager, lets you connect to your Window
 *          Server-type Amazon Elastic Compute Cloud (Amazon EC2) instances using the Remote Desktop Protocol (RDP). GUI
 *          Connect, which is powered by <a href="https://docs.aws.amazon.com/dcv/latest/adminguide/what-is-dcv.html">Amazon DCV</a>, provides you
 *          with secure connectivity to your Windows Server instances directly from the Systems Manager console.
 *          You can have up to four simultaneous connections in a single browser window. In the
 *          console, GUI Connect is also referred to as Fleet Manager Remote Desktop.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">
 *                <i>Amazon Web Services Systems Manager User
 *             Guide</i>
 *             </a>. To get started, see the following user guide topics:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
 *                      Amazon Web Services Systems Manager</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html">Connect to a Windows Server managed instance using Remote Desktop</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./SSMGuiConnectClient";
export * from "./SSMGuiConnect";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SSMGuiConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";

export * from "./models/errors";
export type * from "./models/models_0";

export { SSMGuiConnectServiceException } from "./models/SSMGuiConnectServiceException";
