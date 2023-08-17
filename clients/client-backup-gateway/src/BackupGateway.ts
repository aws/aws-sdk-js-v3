// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BackupGatewayClient, BackupGatewayClientConfig } from "./BackupGatewayClient";
import {
  AssociateGatewayToServerCommand,
  AssociateGatewayToServerCommandInput,
  AssociateGatewayToServerCommandOutput,
} from "./commands/AssociateGatewayToServerCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteHypervisorCommand,
  DeleteHypervisorCommandInput,
  DeleteHypervisorCommandOutput,
} from "./commands/DeleteHypervisorCommand";
import {
  DisassociateGatewayFromServerCommand,
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
} from "./commands/DisassociateGatewayFromServerCommand";
import {
  GetBandwidthRateLimitScheduleCommand,
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
} from "./commands/GetBandwidthRateLimitScheduleCommand";
import { GetGatewayCommand, GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import {
  GetHypervisorCommand,
  GetHypervisorCommandInput,
  GetHypervisorCommandOutput,
} from "./commands/GetHypervisorCommand";
import {
  GetHypervisorPropertyMappingsCommand,
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
} from "./commands/GetHypervisorPropertyMappingsCommand";
import {
  GetVirtualMachineCommand,
  GetVirtualMachineCommandInput,
  GetVirtualMachineCommandOutput,
} from "./commands/GetVirtualMachineCommand";
import {
  ImportHypervisorConfigurationCommand,
  ImportHypervisorConfigurationCommandInput,
  ImportHypervisorConfigurationCommandOutput,
} from "./commands/ImportHypervisorConfigurationCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListHypervisorsCommand,
  ListHypervisorsCommandInput,
  ListHypervisorsCommandOutput,
} from "./commands/ListHypervisorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualMachinesCommand,
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "./commands/ListVirtualMachinesCommand";
import {
  PutBandwidthRateLimitScheduleCommand,
  PutBandwidthRateLimitScheduleCommandInput,
  PutBandwidthRateLimitScheduleCommandOutput,
} from "./commands/PutBandwidthRateLimitScheduleCommand";
import {
  PutHypervisorPropertyMappingsCommand,
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
} from "./commands/PutHypervisorPropertyMappingsCommand";
import {
  PutMaintenanceStartTimeCommand,
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
} from "./commands/PutMaintenanceStartTimeCommand";
import {
  StartVirtualMachinesMetadataSyncCommand,
  StartVirtualMachinesMetadataSyncCommandInput,
  StartVirtualMachinesMetadataSyncCommandOutput,
} from "./commands/StartVirtualMachinesMetadataSyncCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestHypervisorConfigurationCommand,
  TestHypervisorConfigurationCommandInput,
  TestHypervisorConfigurationCommandOutput,
} from "./commands/TestHypervisorConfigurationCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateHypervisorCommand,
  UpdateHypervisorCommandInput,
  UpdateHypervisorCommandOutput,
} from "./commands/UpdateHypervisorCommand";

const commands = {
  AssociateGatewayToServerCommand,
  CreateGatewayCommand,
  DeleteGatewayCommand,
  DeleteHypervisorCommand,
  DisassociateGatewayFromServerCommand,
  GetBandwidthRateLimitScheduleCommand,
  GetGatewayCommand,
  GetHypervisorCommand,
  GetHypervisorPropertyMappingsCommand,
  GetVirtualMachineCommand,
  ImportHypervisorConfigurationCommand,
  ListGatewaysCommand,
  ListHypervisorsCommand,
  ListTagsForResourceCommand,
  ListVirtualMachinesCommand,
  PutBandwidthRateLimitScheduleCommand,
  PutHypervisorPropertyMappingsCommand,
  PutMaintenanceStartTimeCommand,
  StartVirtualMachinesMetadataSyncCommand,
  TagResourceCommand,
  TestHypervisorConfigurationCommand,
  UntagResourceCommand,
  UpdateGatewayInformationCommand,
  UpdateGatewaySoftwareNowCommand,
  UpdateHypervisorCommand,
};

export interface BackupGateway {
  /**
   * @see {@link AssociateGatewayToServerCommand}
   */
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateGatewayToServerCommandOutput>;
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(args: CreateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayCommandOutput>;
  createGateway(args: CreateGatewayCommandInput, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHypervisorCommand}
   */
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHypervisorCommandOutput>;
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateGatewayFromServerCommand}
   */
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateGatewayFromServerCommandOutput>;
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBandwidthRateLimitScheduleCommand}
   */
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput>;
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
  getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
  getGateway(
    args: GetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHypervisorCommand}
   */
  getHypervisor(args: GetHypervisorCommandInput, options?: __HttpHandlerOptions): Promise<GetHypervisorCommandOutput>;
  getHypervisor(args: GetHypervisorCommandInput, cb: (err: any, data?: GetHypervisorCommandOutput) => void): void;
  getHypervisor(
    args: GetHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHypervisorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHypervisorPropertyMappingsCommand}
   */
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHypervisorPropertyMappingsCommandOutput>;
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVirtualMachineCommand}
   */
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVirtualMachineCommandOutput>;
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportHypervisorConfigurationCommand}
   */
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportHypervisorConfigurationCommandOutput>;
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHypervisorsCommand}
   */
  listHypervisors(
    args: ListHypervisorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHypervisorsCommandOutput>;
  listHypervisors(args: ListHypervisorsCommandInput, cb: (err: any, data?: ListHypervisorsCommandOutput) => void): void;
  listHypervisors(
    args: ListHypervisorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualMachinesCommand}
   */
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualMachinesCommandOutput>;
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBandwidthRateLimitScheduleCommand}
   */
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBandwidthRateLimitScheduleCommandOutput>;
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutHypervisorPropertyMappingsCommand}
   */
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutHypervisorPropertyMappingsCommandOutput>;
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMaintenanceStartTimeCommand}
   */
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMaintenanceStartTimeCommandOutput>;
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVirtualMachinesMetadataSyncCommand}
   */
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVirtualMachinesMetadataSyncCommandOutput>;
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestHypervisorConfigurationCommand}
   */
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestHypervisorConfigurationCommandOutput>;
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayInformationCommand}
   */
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInformationCommandOutput>;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewaySoftwareNowCommand}
   */
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewaySoftwareNowCommandOutput>;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHypervisorCommand}
   */
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHypervisorCommandOutput>;
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Backup gateway</fullname>
 *          <p>Backup gateway connects Backup to your hypervisor, so you can
 *       create, store, and restore backups of your virtual machines (VMs) anywhere, whether
 *       on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p>
 *          <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p>
 *          <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run
 *       on-demand backups. Once you have backed up your resources, you can view them and restore them
 *       like any resource supported by Backup.</p>
 *          <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p>
 */
export class BackupGateway extends BackupGatewayClient implements BackupGateway {}
createAggregatedClient(commands, BackupGateway);
