// smithy-typescript generated code
/* eslint-disable */
/**
 * Backup gateway
 *
 * Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.
 *
 * Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.
 *
 * Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.
 *
 * To download the Amazon Web Services software to get started, navigate to the Backup console, choose **Gateways**, then choose **Create gateway**.
 *
 * @packageDocumentation
 */
export * from "./BackupGatewayClient";
export * from "./BackupGateway";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { BackupGatewayExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { BackupGatewayServiceException } from "./models/BackupGatewayServiceException";
