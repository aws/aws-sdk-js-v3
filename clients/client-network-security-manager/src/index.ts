// smithy-typescript generated code
/* eslint-disable */
/**
 * AWS Network Security Manager helps you centrally configure and deploy network security protections across your organization. Supported protections include AWS WAF and AWS Shield Advanced. This centralized approach reduces the overhead of managing protections individually across accounts and ensures consistent security at scale.
 *
 * You define reusable *rules* and *templates*, then combine them into *policies*. Next, you select the accounts and resources to protect with *scopes* and roll the protections out with *deployments*. For example, you can define a set of AWS WAF rules and group them into a policy. Then deploy that policy across all accounts in your organization with a single deployment.
 *
 * This API reference describes the operations and data types for AWS Network Security Manager.
 *
 * For conceptual information, tutorials, and guidance on writing rule configurations, see the [AWS Network Security Manager Developer Guide](https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html). For the default quotas that apply to your account, see [Quotas](https://docs.aws.amazon.com/network-security-manager/latest/devguide/quotas.html). For the service endpoints available in each Region, see [AWS Network Security Manager endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/network-security-manager.html) in the *AWS General Reference*.
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
