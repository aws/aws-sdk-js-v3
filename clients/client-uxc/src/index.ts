// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the Amazon Web Services User Experience Customization (UXC) API Reference. Amazon Web Services User Experience Customization (UXC) is a utility that provides programmatic access to enable account administrators to customize the visual appearance of the Amazon Web Services Management Console and manage these settings at the account level.</p> <note> <p>The <code>visibleServices</code> and <code>visibleRegions</code> settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</p> </note> <p>For more information about UXC features and console procedures, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started-uxc.html">Getting started with Amazon Web Services User Experience Customization</a>. For information about required permissions, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/security_iam.html">Identity and access management for Amazon Web Services Management Console</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./UxcClient";
export * from "./Uxc";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { UxcExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { UxcServiceException } from "./models/UxcServiceException";
