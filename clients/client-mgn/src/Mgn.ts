// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ArchiveApplicationCommand,
  ArchiveApplicationCommandInput,
  ArchiveApplicationCommandOutput,
} from "./commands/ArchiveApplicationCommand";
import { ArchiveWaveCommand, ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "./commands/ArchiveWaveCommand";
import {
  AssociateApplicationsCommand,
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "./commands/AssociateApplicationsCommand";
import {
  AssociateSourceServersCommand,
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "./commands/AssociateSourceServersCommand";
import {
  ChangeServerLifeCycleStateCommand,
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateConnectorCommand,
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
} from "./commands/CreateConnectorCommand";
import {
  CreateLaunchConfigurationTemplateCommand,
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { CreateWaveCommand, CreateWaveCommandInput, CreateWaveCommandOutput } from "./commands/CreateWaveCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteConnectorCommand,
  DeleteConnectorCommandInput,
  DeleteConnectorCommandOutput,
} from "./commands/DeleteConnectorCommand";
import { DeleteJobCommand, DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommand,
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteReplicationConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  DeleteSourceServerCommand,
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
} from "./commands/DeleteSourceServerCommand";
import {
  DeleteVcenterClientCommand,
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "./commands/DeleteVcenterClientCommand";
import { DeleteWaveCommand, DeleteWaveCommandInput, DeleteWaveCommandOutput } from "./commands/DeleteWaveCommand";
import {
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "./commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommand,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DescribeVcenterClientsCommand,
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "./commands/DescribeVcenterClientsCommand";
import {
  DisassociateApplicationsCommand,
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "./commands/DisassociateApplicationsCommand";
import {
  DisassociateSourceServersCommand,
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "./commands/DisassociateSourceServersCommand";
import {
  DisconnectFromServiceCommand,
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "./commands/DisconnectFromServiceCommand";
import {
  FinalizeCutoverCommand,
  FinalizeCutoverCommandInput,
  FinalizeCutoverCommandOutput,
} from "./commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommand,
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommand,
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import {
  InitializeServiceCommand,
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
} from "./commands/InitializeServiceCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import {
  ListExportErrorsCommand,
  ListExportErrorsCommandInput,
  ListExportErrorsCommandOutput,
} from "./commands/ListExportErrorsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import {
  ListImportErrorsCommand,
  ListImportErrorsCommandInput,
  ListImportErrorsCommandOutput,
} from "./commands/ListImportErrorsCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListManagedAccountsCommand,
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput,
} from "./commands/ListManagedAccountsCommand";
import {
  ListSourceServerActionsCommand,
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "./commands/ListSourceServerActionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateActionsCommand,
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "./commands/ListTemplateActionsCommand";
import { ListWavesCommand, ListWavesCommandInput, ListWavesCommandOutput } from "./commands/ListWavesCommand";
import {
  MarkAsArchivedCommand,
  MarkAsArchivedCommandInput,
  MarkAsArchivedCommandOutput,
} from "./commands/MarkAsArchivedCommand";
import {
  PauseReplicationCommand,
  PauseReplicationCommandInput,
  PauseReplicationCommandOutput,
} from "./commands/PauseReplicationCommand";
import {
  PutSourceServerActionCommand,
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "./commands/PutSourceServerActionCommand";
import {
  PutTemplateActionCommand,
  PutTemplateActionCommandInput,
  PutTemplateActionCommandOutput,
} from "./commands/PutTemplateActionCommand";
import {
  RemoveSourceServerActionCommand,
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "./commands/RemoveSourceServerActionCommand";
import {
  RemoveTemplateActionCommand,
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "./commands/RemoveTemplateActionCommand";
import {
  ResumeReplicationCommand,
  ResumeReplicationCommandInput,
  ResumeReplicationCommandOutput,
} from "./commands/ResumeReplicationCommand";
import {
  RetryDataReplicationCommand,
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import {
  StartCutoverCommand,
  StartCutoverCommandInput,
  StartCutoverCommandOutput,
} from "./commands/StartCutoverCommand";
import { StartExportCommand, StartExportCommandInput, StartExportCommandOutput } from "./commands/StartExportCommand";
import { StartImportCommand, StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StartReplicationCommand,
  StartReplicationCommandInput,
  StartReplicationCommandOutput,
} from "./commands/StartReplicationCommand";
import { StartTestCommand, StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import {
  StopReplicationCommand,
  StopReplicationCommandInput,
  StopReplicationCommandOutput,
} from "./commands/StopReplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommand,
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import {
  UnarchiveApplicationCommand,
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "./commands/UnarchiveApplicationCommand";
import {
  UnarchiveWaveCommand,
  UnarchiveWaveCommandInput,
  UnarchiveWaveCommandOutput,
} from "./commands/UnarchiveWaveCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateConnectorCommand,
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
} from "./commands/UpdateConnectorCommand";
import {
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommand,
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommand,
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import {
  UpdateSourceServerCommand,
  UpdateSourceServerCommandInput,
  UpdateSourceServerCommandOutput,
} from "./commands/UpdateSourceServerCommand";
import {
  UpdateSourceServerReplicationTypeCommand,
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import { UpdateWaveCommand, UpdateWaveCommandInput, UpdateWaveCommandOutput } from "./commands/UpdateWaveCommand";
import { MgnClient, MgnClientConfig } from "./MgnClient";

const commands = {
  ArchiveApplicationCommand,
  ArchiveWaveCommand,
  AssociateApplicationsCommand,
  AssociateSourceServersCommand,
  ChangeServerLifeCycleStateCommand,
  CreateApplicationCommand,
  CreateConnectorCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommand,
  CreateWaveCommand,
  DeleteApplicationCommand,
  DeleteConnectorCommand,
  DeleteJobCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteSourceServerCommand,
  DeleteVcenterClientCommand,
  DeleteWaveCommand,
  DescribeJobLogItemsCommand,
  DescribeJobsCommand,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeSourceServersCommand,
  DescribeVcenterClientsCommand,
  DisassociateApplicationsCommand,
  DisassociateSourceServersCommand,
  DisconnectFromServiceCommand,
  FinalizeCutoverCommand,
  GetLaunchConfigurationCommand,
  GetReplicationConfigurationCommand,
  InitializeServiceCommand,
  ListApplicationsCommand,
  ListConnectorsCommand,
  ListExportErrorsCommand,
  ListExportsCommand,
  ListImportErrorsCommand,
  ListImportsCommand,
  ListManagedAccountsCommand,
  ListSourceServerActionsCommand,
  ListTagsForResourceCommand,
  ListTemplateActionsCommand,
  ListWavesCommand,
  MarkAsArchivedCommand,
  PauseReplicationCommand,
  PutSourceServerActionCommand,
  PutTemplateActionCommand,
  RemoveSourceServerActionCommand,
  RemoveTemplateActionCommand,
  ResumeReplicationCommand,
  RetryDataReplicationCommand,
  StartCutoverCommand,
  StartExportCommand,
  StartImportCommand,
  StartReplicationCommand,
  StartTestCommand,
  StopReplicationCommand,
  TagResourceCommand,
  TerminateTargetInstancesCommand,
  UnarchiveApplicationCommand,
  UnarchiveWaveCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateConnectorCommand,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
  UpdateSourceServerCommand,
  UpdateSourceServerReplicationTypeCommand,
  UpdateWaveCommand,
};

export interface Mgn {
  /**
   * @see {@link ArchiveApplicationCommand}
   */
  archiveApplication(
    args: ArchiveApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ArchiveApplicationCommandOutput>;
  archiveApplication(
    args: ArchiveApplicationCommandInput,
    cb: (err: any, data?: ArchiveApplicationCommandOutput) => void
  ): void;
  archiveApplication(
    args: ArchiveApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ArchiveWaveCommand}
   */
  archiveWave(args: ArchiveWaveCommandInput, options?: __HttpHandlerOptions): Promise<ArchiveWaveCommandOutput>;
  archiveWave(args: ArchiveWaveCommandInput, cb: (err: any, data?: ArchiveWaveCommandOutput) => void): void;
  archiveWave(
    args: ArchiveWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveWaveCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationsCommand}
   */
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationsCommandOutput>;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;
  associateApplications(
    args: AssociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSourceServersCommand}
   */
  associateSourceServers(
    args: AssociateSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSourceServersCommandOutput>;
  associateSourceServers(
    args: AssociateSourceServersCommandInput,
    cb: (err: any, data?: AssociateSourceServersCommandOutput) => void
  ): void;
  associateSourceServers(
    args: AssociateSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangeServerLifeCycleStateCommand}
   */
  changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangeServerLifeCycleStateCommandOutput>;
  changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void
  ): void;
  changeServerLifeCycleState(
    args: ChangeServerLifeCycleStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangeServerLifeCycleStateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(args: CreateConnectorCommandInput, cb: (err: any, data?: CreateConnectorCommandOutput) => void): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationTemplateCommand}
   */
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  createLaunchConfigurationTemplate(
    args: CreateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationConfigurationTemplateCommand}
   */
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationConfigurationTemplateCommandOutput>;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  createReplicationConfigurationTemplate(
    args: CreateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWaveCommand}
   */
  createWave(args: CreateWaveCommandInput, options?: __HttpHandlerOptions): Promise<CreateWaveCommandOutput>;
  createWave(args: CreateWaveCommandInput, cb: (err: any, data?: CreateWaveCommandOutput) => void): void;
  createWave(
    args: CreateWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWaveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(args: DeleteConnectorCommandInput, cb: (err: any, data?: DeleteConnectorCommandOutput) => void): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchConfigurationTemplateCommand}
   */
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchConfigurationTemplateCommandOutput>;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  deleteLaunchConfigurationTemplate(
    args: DeleteLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationConfigurationTemplateCommand}
   */
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput>;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  deleteReplicationConfigurationTemplate(
    args: DeleteReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceServerCommand}
   */
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceServerCommandOutput>;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;
  deleteSourceServer(
    args: DeleteSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVcenterClientCommand}
   */
  deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVcenterClientCommandOutput>;
  deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    cb: (err: any, data?: DeleteVcenterClientCommandOutput) => void
  ): void;
  deleteVcenterClient(
    args: DeleteVcenterClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVcenterClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWaveCommand}
   */
  deleteWave(args: DeleteWaveCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWaveCommandOutput>;
  deleteWave(args: DeleteWaveCommandInput, cb: (err: any, data?: DeleteWaveCommandOutput) => void): void;
  deleteWave(
    args: DeleteWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWaveCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobLogItemsCommand}
   */
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobLogItemsCommandOutput>;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;
  describeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobLogItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobsCommand}
   */
  describeJobs(args: DescribeJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobsCommandOutput>;
  describeJobs(args: DescribeJobsCommandInput, cb: (err: any, data?: DescribeJobsCommandOutput) => void): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   */
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;
  describeLaunchConfigurationTemplates(
    args: DescribeLaunchConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationConfigurationTemplatesCommand}
   */
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;
  describeReplicationConfigurationTemplates(
    args: DescribeReplicationConfigurationTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationConfigurationTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceServersCommand}
   */
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceServersCommandOutput>;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;
  describeSourceServers(
    args: DescribeSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVcenterClientsCommand}
   */
  describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVcenterClientsCommandOutput>;
  describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    cb: (err: any, data?: DescribeVcenterClientsCommandOutput) => void
  ): void;
  describeVcenterClients(
    args: DescribeVcenterClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVcenterClientsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationsCommand}
   */
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationsCommandOutput>;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;
  disassociateApplications(
    args: DisassociateApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSourceServersCommand}
   */
  disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSourceServersCommandOutput>;
  disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    cb: (err: any, data?: DisassociateSourceServersCommandOutput) => void
  ): void;
  disassociateSourceServers(
    args: DisassociateSourceServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSourceServersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectFromServiceCommand}
   */
  disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectFromServiceCommandOutput>;
  disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void
  ): void;
  disconnectFromService(
    args: DisconnectFromServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectFromServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link FinalizeCutoverCommand}
   */
  finalizeCutover(
    args: FinalizeCutoverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FinalizeCutoverCommandOutput>;
  finalizeCutover(args: FinalizeCutoverCommandInput, cb: (err: any, data?: FinalizeCutoverCommandOutput) => void): void;
  finalizeCutover(
    args: FinalizeCutoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FinalizeCutoverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLaunchConfigurationCommand}
   */
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLaunchConfigurationCommandOutput>;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;
  getLaunchConfiguration(
    args: GetLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReplicationConfigurationCommand}
   */
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReplicationConfigurationCommandOutput>;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;
  getReplicationConfiguration(
    args: GetReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link InitializeServiceCommand}
   */
  initializeService(
    args: InitializeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeServiceCommandOutput>;
  initializeService(
    args: InitializeServiceCommandInput,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;
  initializeService(
    args: InitializeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeServiceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportErrorsCommand}
   */
  listExportErrors(
    args: ListExportErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportErrorsCommandOutput>;
  listExportErrors(
    args: ListExportErrorsCommandInput,
    cb: (err: any, data?: ListExportErrorsCommandOutput) => void
  ): void;
  listExportErrors(
    args: ListExportErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportsCommand}
   */
  listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportErrorsCommand}
   */
  listImportErrors(
    args: ListImportErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportErrorsCommandOutput>;
  listImportErrors(
    args: ListImportErrorsCommandInput,
    cb: (err: any, data?: ListImportErrorsCommandOutput) => void
  ): void;
  listImportErrors(
    args: ListImportErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedAccountsCommand}
   */
  listManagedAccounts(
    args: ListManagedAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedAccountsCommandOutput>;
  listManagedAccounts(
    args: ListManagedAccountsCommandInput,
    cb: (err: any, data?: ListManagedAccountsCommandOutput) => void
  ): void;
  listManagedAccounts(
    args: ListManagedAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceServerActionsCommand}
   */
  listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceServerActionsCommandOutput>;
  listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    cb: (err: any, data?: ListSourceServerActionsCommandOutput) => void
  ): void;
  listSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceServerActionsCommandOutput) => void
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
   * @see {@link ListTemplateActionsCommand}
   */
  listTemplateActions(
    args: ListTemplateActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateActionsCommandOutput>;
  listTemplateActions(
    args: ListTemplateActionsCommandInput,
    cb: (err: any, data?: ListTemplateActionsCommandOutput) => void
  ): void;
  listTemplateActions(
    args: ListTemplateActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWavesCommand}
   */
  listWaves(args: ListWavesCommandInput, options?: __HttpHandlerOptions): Promise<ListWavesCommandOutput>;
  listWaves(args: ListWavesCommandInput, cb: (err: any, data?: ListWavesCommandOutput) => void): void;
  listWaves(
    args: ListWavesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWavesCommandOutput) => void
  ): void;

  /**
   * @see {@link MarkAsArchivedCommand}
   */
  markAsArchived(
    args: MarkAsArchivedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MarkAsArchivedCommandOutput>;
  markAsArchived(args: MarkAsArchivedCommandInput, cb: (err: any, data?: MarkAsArchivedCommandOutput) => void): void;
  markAsArchived(
    args: MarkAsArchivedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkAsArchivedCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseReplicationCommand}
   */
  pauseReplication(
    args: PauseReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PauseReplicationCommandOutput>;
  pauseReplication(
    args: PauseReplicationCommandInput,
    cb: (err: any, data?: PauseReplicationCommandOutput) => void
  ): void;
  pauseReplication(
    args: PauseReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSourceServerActionCommand}
   */
  putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSourceServerActionCommandOutput>;
  putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    cb: (err: any, data?: PutSourceServerActionCommandOutput) => void
  ): void;
  putSourceServerAction(
    args: PutSourceServerActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSourceServerActionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutTemplateActionCommand}
   */
  putTemplateAction(
    args: PutTemplateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTemplateActionCommandOutput>;
  putTemplateAction(
    args: PutTemplateActionCommandInput,
    cb: (err: any, data?: PutTemplateActionCommandOutput) => void
  ): void;
  putTemplateAction(
    args: PutTemplateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTemplateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSourceServerActionCommand}
   */
  removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceServerActionCommandOutput>;
  removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    cb: (err: any, data?: RemoveSourceServerActionCommandOutput) => void
  ): void;
  removeSourceServerAction(
    args: RemoveSourceServerActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceServerActionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTemplateActionCommand}
   */
  removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTemplateActionCommandOutput>;
  removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    cb: (err: any, data?: RemoveTemplateActionCommandOutput) => void
  ): void;
  removeTemplateAction(
    args: RemoveTemplateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTemplateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeReplicationCommand}
   */
  resumeReplication(
    args: ResumeReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeReplicationCommandOutput>;
  resumeReplication(
    args: ResumeReplicationCommandInput,
    cb: (err: any, data?: ResumeReplicationCommandOutput) => void
  ): void;
  resumeReplication(
    args: ResumeReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryDataReplicationCommand}
   */
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryDataReplicationCommandOutput>;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;
  retryDataReplication(
    args: RetryDataReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryDataReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCutoverCommand}
   */
  startCutover(args: StartCutoverCommandInput, options?: __HttpHandlerOptions): Promise<StartCutoverCommandOutput>;
  startCutover(args: StartCutoverCommandInput, cb: (err: any, data?: StartCutoverCommandOutput) => void): void;
  startCutover(
    args: StartCutoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCutoverCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportCommand}
   */
  startExport(args: StartExportCommandInput, options?: __HttpHandlerOptions): Promise<StartExportCommandOutput>;
  startExport(args: StartExportCommandInput, cb: (err: any, data?: StartExportCommandOutput) => void): void;
  startExport(
    args: StartExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
  startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReplicationCommand}
   */
  startReplication(
    args: StartReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationCommandOutput>;
  startReplication(
    args: StartReplicationCommandInput,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;
  startReplication(
    args: StartReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTestCommand}
   */
  startTest(args: StartTestCommandInput, options?: __HttpHandlerOptions): Promise<StartTestCommandOutput>;
  startTest(args: StartTestCommandInput, cb: (err: any, data?: StartTestCommandOutput) => void): void;
  startTest(
    args: StartTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTestCommandOutput) => void
  ): void;

  /**
   * @see {@link StopReplicationCommand}
   */
  stopReplication(
    args: StopReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationCommandOutput>;
  stopReplication(args: StopReplicationCommandInput, cb: (err: any, data?: StopReplicationCommandOutput) => void): void;
  stopReplication(
    args: StopReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
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
   * @see {@link TerminateTargetInstancesCommand}
   */
  terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateTargetInstancesCommandOutput>;
  terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void
  ): void;
  terminateTargetInstances(
    args: TerminateTargetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateTargetInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link UnarchiveApplicationCommand}
   */
  unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveApplicationCommandOutput>;
  unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    cb: (err: any, data?: UnarchiveApplicationCommandOutput) => void
  ): void;
  unarchiveApplication(
    args: UnarchiveApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UnarchiveWaveCommand}
   */
  unarchiveWave(args: UnarchiveWaveCommandInput, options?: __HttpHandlerOptions): Promise<UnarchiveWaveCommandOutput>;
  unarchiveWave(args: UnarchiveWaveCommandInput, cb: (err: any, data?: UnarchiveWaveCommandOutput) => void): void;
  unarchiveWave(
    args: UnarchiveWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveWaveCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  updateConnector(args: UpdateConnectorCommandInput, cb: (err: any, data?: UpdateConnectorCommandOutput) => void): void;
  updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationCommand}
   */
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationCommandOutput>;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;
  updateLaunchConfiguration(
    args: UpdateLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLaunchConfigurationTemplateCommand}
   */
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLaunchConfigurationTemplateCommandOutput>;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;
  updateLaunchConfigurationTemplate(
    args: UpdateLaunchConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLaunchConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationCommand}
   */
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationCommandOutput>;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;
  updateReplicationConfiguration(
    args: UpdateReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReplicationConfigurationTemplateCommand}
   */
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReplicationConfigurationTemplateCommandOutput>;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;
  updateReplicationConfigurationTemplate(
    args: UpdateReplicationConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReplicationConfigurationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceServerCommand}
   */
  updateSourceServer(
    args: UpdateSourceServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceServerCommandOutput>;
  updateSourceServer(
    args: UpdateSourceServerCommandInput,
    cb: (err: any, data?: UpdateSourceServerCommandOutput) => void
  ): void;
  updateSourceServer(
    args: UpdateSourceServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceServerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceServerReplicationTypeCommand}
   */
  updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceServerReplicationTypeCommandOutput>;
  updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    cb: (err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void
  ): void;
  updateSourceServerReplicationType(
    args: UpdateSourceServerReplicationTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceServerReplicationTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWaveCommand}
   */
  updateWave(args: UpdateWaveCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWaveCommandOutput>;
  updateWave(args: UpdateWaveCommandInput, cb: (err: any, data?: UpdateWaveCommandOutput) => void): void;
  updateWave(
    args: UpdateWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWaveCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Application Migration Service service.</p>
 */
export class Mgn extends MgnClient implements Mgn {}
createAggregatedClient(commands, Mgn);
