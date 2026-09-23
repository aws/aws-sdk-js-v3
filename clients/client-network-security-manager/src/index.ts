// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Network Security Manager helps you centrally configure and deploy network security protections across your organization. Supported protections include AWS WAF and AWS Shield Advanced. This centralized approach reduces the overhead of managing protections individually across accounts and ensures consistent security at scale.</p> <p>You define reusable <i>rules</i> and <i>templates</i>, then combine them into <i>policies</i>. Next, you select the accounts and resources to protect with <i>scopes</i> and roll the protections out with <i>deployments</i>. For example, you can define a set of AWS WAF rules and group them into a policy. Then deploy that policy across all accounts in your organization with a single deployment.</p> <p>This API reference describes the operations and data types for AWS Network Security Manager.</p> <p>For conceptual information, tutorials, and guidance on writing rule configurations, see the <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html">AWS Network Security Manager Developer Guide</a>. For the default quotas that apply to your account, see <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/quotas.html">Quotas</a>. For the service endpoints available in each Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/network-security-manager.html">AWS Network Security Manager endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./NetworkSecurityManagerClient";
export * from "./NetworkSecurityManager";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { NetworkSecurityManagerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { NetworkSecurityManagerServiceException } from "./models/NetworkSecurityManagerServiceException";
