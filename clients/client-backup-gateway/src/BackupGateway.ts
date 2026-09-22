// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { BackupGatewayClient } from "./BackupGatewayClient";
import {
  type AssociateGatewayToServerCommandInput,
  type AssociateGatewayToServerCommandOutput,
  AssociateGatewayToServerCommand,
} from "./commands/AssociateGatewayToServerCommand";
import {
  type CreateGatewayCommandInput,
  type CreateGatewayCommandOutput,
  CreateGatewayCommand,
} from "./commands/CreateGatewayCommand";
import {
  type DeleteGatewayCommandInput,
  type DeleteGatewayCommandOutput,
  DeleteGatewayCommand,
} from "./commands/DeleteGatewayCommand";
import {
  type DeleteHypervisorCommandInput,
  type DeleteHypervisorCommandOutput,
  DeleteHypervisorCommand,
} from "./commands/DeleteHypervisorCommand";
import {
  type DisassociateGatewayFromServerCommandInput,
  type DisassociateGatewayFromServerCommandOutput,
  DisassociateGatewayFromServerCommand,
} from "./commands/DisassociateGatewayFromServerCommand";
import {
  type GetBandwidthRateLimitScheduleCommandInput,
  type GetBandwidthRateLimitScheduleCommandOutput,
  GetBandwidthRateLimitScheduleCommand,
} from "./commands/GetBandwidthRateLimitScheduleCommand";
import {
  type GetGatewayCommandInput,
  type GetGatewayCommandOutput,
  GetGatewayCommand,
} from "./commands/GetGatewayCommand";
import {
  type GetHypervisorCommandInput,
  type GetHypervisorCommandOutput,
  GetHypervisorCommand,
} from "./commands/GetHypervisorCommand";
import {
  type GetHypervisorPropertyMappingsCommandInput,
  type GetHypervisorPropertyMappingsCommandOutput,
  GetHypervisorPropertyMappingsCommand,
} from "./commands/GetHypervisorPropertyMappingsCommand";
import {
  type GetVirtualMachineCommandInput,
  type GetVirtualMachineCommandOutput,
  GetVirtualMachineCommand,
} from "./commands/GetVirtualMachineCommand";
import {
  type ImportHypervisorConfigurationCommandInput,
  type ImportHypervisorConfigurationCommandOutput,
  ImportHypervisorConfigurationCommand,
} from "./commands/ImportHypervisorConfigurationCommand";
import {
  type ListGatewaysCommandInput,
  type ListGatewaysCommandOutput,
  ListGatewaysCommand,
} from "./commands/ListGatewaysCommand";
import {
  type ListHypervisorsCommandInput,
  type ListHypervisorsCommandOutput,
  ListHypervisorsCommand,
} from "./commands/ListHypervisorsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVirtualMachinesCommandInput,
  type ListVirtualMachinesCommandOutput,
  ListVirtualMachinesCommand,
} from "./commands/ListVirtualMachinesCommand";
import {
  type PutBandwidthRateLimitScheduleCommandInput,
  type PutBandwidthRateLimitScheduleCommandOutput,
  PutBandwidthRateLimitScheduleCommand,
} from "./commands/PutBandwidthRateLimitScheduleCommand";
import {
  type PutHypervisorPropertyMappingsCommandInput,
  type PutHypervisorPropertyMappingsCommandOutput,
  PutHypervisorPropertyMappingsCommand,
} from "./commands/PutHypervisorPropertyMappingsCommand";
import {
  type PutMaintenanceStartTimeCommandInput,
  type PutMaintenanceStartTimeCommandOutput,
  PutMaintenanceStartTimeCommand,
} from "./commands/PutMaintenanceStartTimeCommand";
import {
  type StartVirtualMachinesMetadataSyncCommandInput,
  type StartVirtualMachinesMetadataSyncCommandOutput,
  StartVirtualMachinesMetadataSyncCommand,
} from "./commands/StartVirtualMachinesMetadataSyncCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestHypervisorConfigurationCommandInput,
  type TestHypervisorConfigurationCommandOutput,
  TestHypervisorConfigurationCommand,
} from "./commands/TestHypervisorConfigurationCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateGatewayInformationCommandInput,
  type UpdateGatewayInformationCommandOutput,
  UpdateGatewayInformationCommand,
} from "./commands/UpdateGatewayInformationCommand";
import {
  type UpdateGatewaySoftwareNowCommandInput,
  type UpdateGatewaySoftwareNowCommandOutput,
  UpdateGatewaySoftwareNowCommand,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  type UpdateHypervisorCommandInput,
  type UpdateHypervisorCommandOutput,
  UpdateHypervisorCommand,
} from "./commands/UpdateHypervisorCommand";
import { paginateListGateways } from "./pagination/ListGatewaysPaginator";
import { paginateListHypervisors } from "./pagination/ListHypervisorsPaginator";
import { paginateListVirtualMachines } from "./pagination/ListVirtualMachinesPaginator";

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
const paginators = {
  paginateListGateways,
  paginateListHypervisors,
  paginateListVirtualMachines,
};

/**
 * @public
 */
export interface BackupGatewayRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface BackupGateway {
  /**
   * @see {@link AssociateGatewayToServerCommand}
   */
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<AssociateGatewayToServerCommandOutput>;
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;
  associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(
    args: CreateGatewayCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<CreateGatewayCommandOutput>;
  createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHypervisorCommand}
   */
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<DeleteHypervisorCommandOutput>;
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;
  deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateGatewayFromServerCommand}
   */
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<DisassociateGatewayFromServerCommandOutput>;
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;
  disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBandwidthRateLimitScheduleCommand}
   */
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput>;
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(
    args: GetGatewayCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<GetGatewayCommandOutput>;
  getGateway(
    args: GetGatewayCommandInput,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;
  getGateway(
    args: GetGatewayCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHypervisorCommand}
   */
  getHypervisor(
    args: GetHypervisorCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<GetHypervisorCommandOutput>;
  getHypervisor(
    args: GetHypervisorCommandInput,
    cb: (err: any, data?: GetHypervisorCommandOutput) => void
  ): void;
  getHypervisor(
    args: GetHypervisorCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: GetHypervisorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHypervisorPropertyMappingsCommand}
   */
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<GetHypervisorPropertyMappingsCommandOutput>;
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVirtualMachineCommand}
   */
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<GetVirtualMachineCommandOutput>;
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;
  getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportHypervisorConfigurationCommand}
   */
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<ImportHypervisorConfigurationCommandOutput>;
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;
  importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHypervisorsCommand}
   */
  listHypervisors(): Promise<ListHypervisorsCommandOutput>;
  listHypervisors(
    args: ListHypervisorsCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<ListHypervisorsCommandOutput>;
  listHypervisors(
    args: ListHypervisorsCommandInput,
    cb: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): void;
  listHypervisors(
    args: ListHypervisorsCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualMachinesCommand}
   */
  listVirtualMachines(): Promise<ListVirtualMachinesCommandOutput>;
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<ListVirtualMachinesCommandOutput>;
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;
  listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBandwidthRateLimitScheduleCommand}
   */
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<PutBandwidthRateLimitScheduleCommandOutput>;
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutHypervisorPropertyMappingsCommand}
   */
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<PutHypervisorPropertyMappingsCommandOutput>;
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMaintenanceStartTimeCommand}
   */
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<PutMaintenanceStartTimeCommandOutput>;
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;
  putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVirtualMachinesMetadataSyncCommand}
   */
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<StartVirtualMachinesMetadataSyncCommandOutput>;
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;
  startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestHypervisorConfigurationCommand}
   */
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<TestHypervisorConfigurationCommandOutput>;
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;
  testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayInformationCommand}
   */
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<UpdateGatewayInformationCommandOutput>;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewaySoftwareNowCommand}
   */
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<UpdateGatewaySoftwareNowCommandOutput>;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHypervisorCommand}
   */
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options?: BackupGatewayRequestOptions
  ): Promise<UpdateHypervisorCommandOutput>;
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;
  updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options: BackupGatewayRequestOptions,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewaysCommandOutput}.
   */
  paginateListGateways(
    args?: ListGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewaysCommandOutput>;

  /**
   * @see {@link ListHypervisorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHypervisorsCommandOutput}.
   */
  paginateListHypervisors(
    args?: ListHypervisorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHypervisorsCommandOutput>;

  /**
   * @see {@link ListVirtualMachinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVirtualMachinesCommandOutput}.
   */
  paginateListVirtualMachines(
    args?: ListVirtualMachinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVirtualMachinesCommandOutput>;
}

/**
 * <fullname>Backup gateway</fullname> <p>Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p> <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p> <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.</p> <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p>
 * @public
 */
export class BackupGateway extends BackupGatewayClient implements BackupGateway {}
createAggregatedClient(commands, BackupGateway, { paginators });
