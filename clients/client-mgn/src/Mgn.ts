// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type ArchiveApplicationCommandInput,
  type ArchiveApplicationCommandOutput,
  ArchiveApplicationCommand,
} from "./commands/ArchiveApplicationCommand";
import {
  type ArchiveWaveCommandInput,
  type ArchiveWaveCommandOutput,
  ArchiveWaveCommand,
} from "./commands/ArchiveWaveCommand";
import {
  type AssociateApplicationsCommandInput,
  type AssociateApplicationsCommandOutput,
  AssociateApplicationsCommand,
} from "./commands/AssociateApplicationsCommand";
import {
  type AssociateSourceServersCommandInput,
  type AssociateSourceServersCommandOutput,
  AssociateSourceServersCommand,
} from "./commands/AssociateSourceServersCommand";
import {
  type ChangeServerLifeCycleStateCommandInput,
  type ChangeServerLifeCycleStateCommandOutput,
  ChangeServerLifeCycleStateCommand,
} from "./commands/ChangeServerLifeCycleStateCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateConnectorCommandInput,
  type CreateConnectorCommandOutput,
  CreateConnectorCommand,
} from "./commands/CreateConnectorCommand";
import {
  type CreateLaunchConfigurationTemplateCommandInput,
  type CreateLaunchConfigurationTemplateCommandOutput,
  CreateLaunchConfigurationTemplateCommand,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  type CreateNetworkMigrationDefinitionCommandInput,
  type CreateNetworkMigrationDefinitionCommandOutput,
  CreateNetworkMigrationDefinitionCommand,
} from "./commands/CreateNetworkMigrationDefinitionCommand";
import {
  type CreateReplicationConfigurationTemplateCommandInput,
  type CreateReplicationConfigurationTemplateCommandOutput,
  CreateReplicationConfigurationTemplateCommand,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import {
  type CreateWaveCommandInput,
  type CreateWaveCommandOutput,
  CreateWaveCommand,
} from "./commands/CreateWaveCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteConnectorCommandInput,
  type DeleteConnectorCommandOutput,
  DeleteConnectorCommand,
} from "./commands/DeleteConnectorCommand";
import { type DeleteJobCommandInput, type DeleteJobCommandOutput, DeleteJobCommand } from "./commands/DeleteJobCommand";
import {
  type DeleteLaunchConfigurationTemplateCommandInput,
  type DeleteLaunchConfigurationTemplateCommandOutput,
  DeleteLaunchConfigurationTemplateCommand,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  type DeleteNetworkMigrationDefinitionCommandInput,
  type DeleteNetworkMigrationDefinitionCommandOutput,
  DeleteNetworkMigrationDefinitionCommand,
} from "./commands/DeleteNetworkMigrationDefinitionCommand";
import {
  type DeleteReplicationConfigurationTemplateCommandInput,
  type DeleteReplicationConfigurationTemplateCommandOutput,
  DeleteReplicationConfigurationTemplateCommand,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  type DeleteSourceServerCommandInput,
  type DeleteSourceServerCommandOutput,
  DeleteSourceServerCommand,
} from "./commands/DeleteSourceServerCommand";
import {
  type DeleteVcenterClientCommandInput,
  type DeleteVcenterClientCommandOutput,
  DeleteVcenterClientCommand,
} from "./commands/DeleteVcenterClientCommand";
import {
  type DeleteWaveCommandInput,
  type DeleteWaveCommandOutput,
  DeleteWaveCommand,
} from "./commands/DeleteWaveCommand";
import {
  type DescribeJobLogItemsCommandInput,
  type DescribeJobLogItemsCommandOutput,
  DescribeJobLogItemsCommand,
} from "./commands/DescribeJobLogItemsCommand";
import {
  type DescribeJobsCommandInput,
  type DescribeJobsCommandOutput,
  DescribeJobsCommand,
} from "./commands/DescribeJobsCommand";
import {
  type DescribeLaunchConfigurationTemplatesCommandInput,
  type DescribeLaunchConfigurationTemplatesCommandOutput,
  DescribeLaunchConfigurationTemplatesCommand,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  type DescribeReplicationConfigurationTemplatesCommandInput,
  type DescribeReplicationConfigurationTemplatesCommandOutput,
  DescribeReplicationConfigurationTemplatesCommand,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  type DescribeSourceServersCommandInput,
  type DescribeSourceServersCommandOutput,
  DescribeSourceServersCommand,
} from "./commands/DescribeSourceServersCommand";
import {
  type DescribeVcenterClientsCommandInput,
  type DescribeVcenterClientsCommandOutput,
  DescribeVcenterClientsCommand,
} from "./commands/DescribeVcenterClientsCommand";
import {
  type DisassociateApplicationsCommandInput,
  type DisassociateApplicationsCommandOutput,
  DisassociateApplicationsCommand,
} from "./commands/DisassociateApplicationsCommand";
import {
  type DisassociateSourceServersCommandInput,
  type DisassociateSourceServersCommandOutput,
  DisassociateSourceServersCommand,
} from "./commands/DisassociateSourceServersCommand";
import {
  type DisconnectFromServiceCommandInput,
  type DisconnectFromServiceCommandOutput,
  DisconnectFromServiceCommand,
} from "./commands/DisconnectFromServiceCommand";
import {
  type FinalizeCutoverCommandInput,
  type FinalizeCutoverCommandOutput,
  FinalizeCutoverCommand,
} from "./commands/FinalizeCutoverCommand";
import {
  type GetLaunchConfigurationCommandInput,
  type GetLaunchConfigurationCommandOutput,
  GetLaunchConfigurationCommand,
} from "./commands/GetLaunchConfigurationCommand";
import {
  type GetNetworkMigrationDefinitionCommandInput,
  type GetNetworkMigrationDefinitionCommandOutput,
  GetNetworkMigrationDefinitionCommand,
} from "./commands/GetNetworkMigrationDefinitionCommand";
import {
  type GetNetworkMigrationMapperSegmentConstructCommandInput,
  type GetNetworkMigrationMapperSegmentConstructCommandOutput,
  GetNetworkMigrationMapperSegmentConstructCommand,
} from "./commands/GetNetworkMigrationMapperSegmentConstructCommand";
import {
  type GetReplicationConfigurationCommandInput,
  type GetReplicationConfigurationCommandOutput,
  GetReplicationConfigurationCommand,
} from "./commands/GetReplicationConfigurationCommand";
import {
  type InitializeServiceCommandInput,
  type InitializeServiceCommandOutput,
  InitializeServiceCommand,
} from "./commands/InitializeServiceCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListConnectorsCommandInput,
  type ListConnectorsCommandOutput,
  ListConnectorsCommand,
} from "./commands/ListConnectorsCommand";
import {
  type ListExportErrorsCommandInput,
  type ListExportErrorsCommandOutput,
  ListExportErrorsCommand,
} from "./commands/ListExportErrorsCommand";
import {
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  ListExportsCommand,
} from "./commands/ListExportsCommand";
import {
  type ListImportErrorsCommandInput,
  type ListImportErrorsCommandOutput,
  ListImportErrorsCommand,
} from "./commands/ListImportErrorsCommand";
import {
  type ListImportFileEnrichmentsCommandInput,
  type ListImportFileEnrichmentsCommandOutput,
  ListImportFileEnrichmentsCommand,
} from "./commands/ListImportFileEnrichmentsCommand";
import {
  type ListImportsCommandInput,
  type ListImportsCommandOutput,
  ListImportsCommand,
} from "./commands/ListImportsCommand";
import {
  type ListManagedAccountsCommandInput,
  type ListManagedAccountsCommandOutput,
  ListManagedAccountsCommand,
} from "./commands/ListManagedAccountsCommand";
import {
  type ListNetworkMigrationAnalysesCommandInput,
  type ListNetworkMigrationAnalysesCommandOutput,
  ListNetworkMigrationAnalysesCommand,
} from "./commands/ListNetworkMigrationAnalysesCommand";
import {
  type ListNetworkMigrationAnalysisResultsCommandInput,
  type ListNetworkMigrationAnalysisResultsCommandOutput,
  ListNetworkMigrationAnalysisResultsCommand,
} from "./commands/ListNetworkMigrationAnalysisResultsCommand";
import {
  type ListNetworkMigrationCodeGenerationsCommandInput,
  type ListNetworkMigrationCodeGenerationsCommandOutput,
  ListNetworkMigrationCodeGenerationsCommand,
} from "./commands/ListNetworkMigrationCodeGenerationsCommand";
import {
  type ListNetworkMigrationCodeGenerationSegmentsCommandInput,
  type ListNetworkMigrationCodeGenerationSegmentsCommandOutput,
  ListNetworkMigrationCodeGenerationSegmentsCommand,
} from "./commands/ListNetworkMigrationCodeGenerationSegmentsCommand";
import {
  type ListNetworkMigrationDefinitionsCommandInput,
  type ListNetworkMigrationDefinitionsCommandOutput,
  ListNetworkMigrationDefinitionsCommand,
} from "./commands/ListNetworkMigrationDefinitionsCommand";
import {
  type ListNetworkMigrationDeployedStacksCommandInput,
  type ListNetworkMigrationDeployedStacksCommandOutput,
  ListNetworkMigrationDeployedStacksCommand,
} from "./commands/ListNetworkMigrationDeployedStacksCommand";
import {
  type ListNetworkMigrationDeploymentsCommandInput,
  type ListNetworkMigrationDeploymentsCommandOutput,
  ListNetworkMigrationDeploymentsCommand,
} from "./commands/ListNetworkMigrationDeploymentsCommand";
import {
  type ListNetworkMigrationExecutionsCommandInput,
  type ListNetworkMigrationExecutionsCommandOutput,
  ListNetworkMigrationExecutionsCommand,
} from "./commands/ListNetworkMigrationExecutionsCommand";
import {
  type ListNetworkMigrationMapperSegmentConstructsCommandInput,
  type ListNetworkMigrationMapperSegmentConstructsCommandOutput,
  ListNetworkMigrationMapperSegmentConstructsCommand,
} from "./commands/ListNetworkMigrationMapperSegmentConstructsCommand";
import {
  type ListNetworkMigrationMapperSegmentsCommandInput,
  type ListNetworkMigrationMapperSegmentsCommandOutput,
  ListNetworkMigrationMapperSegmentsCommand,
} from "./commands/ListNetworkMigrationMapperSegmentsCommand";
import {
  type ListNetworkMigrationMappingsCommandInput,
  type ListNetworkMigrationMappingsCommandOutput,
  ListNetworkMigrationMappingsCommand,
} from "./commands/ListNetworkMigrationMappingsCommand";
import {
  type ListNetworkMigrationMappingUpdatesCommandInput,
  type ListNetworkMigrationMappingUpdatesCommandOutput,
  ListNetworkMigrationMappingUpdatesCommand,
} from "./commands/ListNetworkMigrationMappingUpdatesCommand";
import {
  type ListSourceServerActionsCommandInput,
  type ListSourceServerActionsCommandOutput,
  ListSourceServerActionsCommand,
} from "./commands/ListSourceServerActionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplateActionsCommandInput,
  type ListTemplateActionsCommandOutput,
  ListTemplateActionsCommand,
} from "./commands/ListTemplateActionsCommand";
import { type ListWavesCommandInput, type ListWavesCommandOutput, ListWavesCommand } from "./commands/ListWavesCommand";
import {
  type MarkAsArchivedCommandInput,
  type MarkAsArchivedCommandOutput,
  MarkAsArchivedCommand,
} from "./commands/MarkAsArchivedCommand";
import {
  type PauseReplicationCommandInput,
  type PauseReplicationCommandOutput,
  PauseReplicationCommand,
} from "./commands/PauseReplicationCommand";
import {
  type PutSourceServerActionCommandInput,
  type PutSourceServerActionCommandOutput,
  PutSourceServerActionCommand,
} from "./commands/PutSourceServerActionCommand";
import {
  type PutTemplateActionCommandInput,
  type PutTemplateActionCommandOutput,
  PutTemplateActionCommand,
} from "./commands/PutTemplateActionCommand";
import {
  type RemoveSourceServerActionCommandInput,
  type RemoveSourceServerActionCommandOutput,
  RemoveSourceServerActionCommand,
} from "./commands/RemoveSourceServerActionCommand";
import {
  type RemoveTemplateActionCommandInput,
  type RemoveTemplateActionCommandOutput,
  RemoveTemplateActionCommand,
} from "./commands/RemoveTemplateActionCommand";
import {
  type ResumeReplicationCommandInput,
  type ResumeReplicationCommandOutput,
  ResumeReplicationCommand,
} from "./commands/ResumeReplicationCommand";
import {
  type RetryDataReplicationCommandInput,
  type RetryDataReplicationCommandOutput,
  RetryDataReplicationCommand,
} from "./commands/RetryDataReplicationCommand";
import {
  type StartCutoverCommandInput,
  type StartCutoverCommandOutput,
  StartCutoverCommand,
} from "./commands/StartCutoverCommand";
import {
  type StartExportCommandInput,
  type StartExportCommandOutput,
  StartExportCommand,
} from "./commands/StartExportCommand";
import {
  type StartImportCommandInput,
  type StartImportCommandOutput,
  StartImportCommand,
} from "./commands/StartImportCommand";
import {
  type StartImportFileEnrichmentCommandInput,
  type StartImportFileEnrichmentCommandOutput,
  StartImportFileEnrichmentCommand,
} from "./commands/StartImportFileEnrichmentCommand";
import {
  type StartNetworkMigrationAnalysisCommandInput,
  type StartNetworkMigrationAnalysisCommandOutput,
  StartNetworkMigrationAnalysisCommand,
} from "./commands/StartNetworkMigrationAnalysisCommand";
import {
  type StartNetworkMigrationCodeGenerationCommandInput,
  type StartNetworkMigrationCodeGenerationCommandOutput,
  StartNetworkMigrationCodeGenerationCommand,
} from "./commands/StartNetworkMigrationCodeGenerationCommand";
import {
  type StartNetworkMigrationDeploymentCommandInput,
  type StartNetworkMigrationDeploymentCommandOutput,
  StartNetworkMigrationDeploymentCommand,
} from "./commands/StartNetworkMigrationDeploymentCommand";
import {
  type StartNetworkMigrationMappingCommandInput,
  type StartNetworkMigrationMappingCommandOutput,
  StartNetworkMigrationMappingCommand,
} from "./commands/StartNetworkMigrationMappingCommand";
import {
  type StartNetworkMigrationMappingUpdateCommandInput,
  type StartNetworkMigrationMappingUpdateCommandOutput,
  StartNetworkMigrationMappingUpdateCommand,
} from "./commands/StartNetworkMigrationMappingUpdateCommand";
import {
  type StartReplicationCommandInput,
  type StartReplicationCommandOutput,
  StartReplicationCommand,
} from "./commands/StartReplicationCommand";
import { type StartTestCommandInput, type StartTestCommandOutput, StartTestCommand } from "./commands/StartTestCommand";
import {
  type StopReplicationCommandInput,
  type StopReplicationCommandOutput,
  StopReplicationCommand,
} from "./commands/StopReplicationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateTargetInstancesCommandInput,
  type TerminateTargetInstancesCommandOutput,
  TerminateTargetInstancesCommand,
} from "./commands/TerminateTargetInstancesCommand";
import {
  type UnarchiveApplicationCommandInput,
  type UnarchiveApplicationCommandOutput,
  UnarchiveApplicationCommand,
} from "./commands/UnarchiveApplicationCommand";
import {
  type UnarchiveWaveCommandInput,
  type UnarchiveWaveCommandOutput,
  UnarchiveWaveCommand,
} from "./commands/UnarchiveWaveCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateConnectorCommandInput,
  type UpdateConnectorCommandOutput,
  UpdateConnectorCommand,
} from "./commands/UpdateConnectorCommand";
import {
  type UpdateLaunchConfigurationCommandInput,
  type UpdateLaunchConfigurationCommandOutput,
  UpdateLaunchConfigurationCommand,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  type UpdateLaunchConfigurationTemplateCommandInput,
  type UpdateLaunchConfigurationTemplateCommandOutput,
  UpdateLaunchConfigurationTemplateCommand,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  type UpdateNetworkMigrationDefinitionCommandInput,
  type UpdateNetworkMigrationDefinitionCommandOutput,
  UpdateNetworkMigrationDefinitionCommand,
} from "./commands/UpdateNetworkMigrationDefinitionCommand";
import {
  type UpdateNetworkMigrationMapperSegmentCommandInput,
  type UpdateNetworkMigrationMapperSegmentCommandOutput,
  UpdateNetworkMigrationMapperSegmentCommand,
} from "./commands/UpdateNetworkMigrationMapperSegmentCommand";
import {
  type UpdateReplicationConfigurationCommandInput,
  type UpdateReplicationConfigurationCommandOutput,
  UpdateReplicationConfigurationCommand,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  type UpdateReplicationConfigurationTemplateCommandInput,
  type UpdateReplicationConfigurationTemplateCommandOutput,
  UpdateReplicationConfigurationTemplateCommand,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import {
  type UpdateSourceServerCommandInput,
  type UpdateSourceServerCommandOutput,
  UpdateSourceServerCommand,
} from "./commands/UpdateSourceServerCommand";
import {
  type UpdateSourceServerReplicationTypeCommandInput,
  type UpdateSourceServerReplicationTypeCommandOutput,
  UpdateSourceServerReplicationTypeCommand,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import {
  type UpdateWaveCommandInput,
  type UpdateWaveCommandOutput,
  UpdateWaveCommand,
} from "./commands/UpdateWaveCommand";
import { MgnClient } from "./MgnClient";
import { paginateDescribeJobLogItems } from "./pagination/DescribeJobLogItemsPaginator";
import { paginateDescribeJobs } from "./pagination/DescribeJobsPaginator";
import {
  paginateDescribeLaunchConfigurationTemplates,
} from "./pagination/DescribeLaunchConfigurationTemplatesPaginator";
import {
  paginateDescribeReplicationConfigurationTemplates,
} from "./pagination/DescribeReplicationConfigurationTemplatesPaginator";
import { paginateDescribeSourceServers } from "./pagination/DescribeSourceServersPaginator";
import { paginateDescribeVcenterClients } from "./pagination/DescribeVcenterClientsPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListConnectors } from "./pagination/ListConnectorsPaginator";
import { paginateListExportErrors } from "./pagination/ListExportErrorsPaginator";
import { paginateListExports } from "./pagination/ListExportsPaginator";
import { paginateListImportErrors } from "./pagination/ListImportErrorsPaginator";
import { paginateListImportFileEnrichments } from "./pagination/ListImportFileEnrichmentsPaginator";
import { paginateListImports } from "./pagination/ListImportsPaginator";
import { paginateListManagedAccounts } from "./pagination/ListManagedAccountsPaginator";
import { paginateListNetworkMigrationAnalyses } from "./pagination/ListNetworkMigrationAnalysesPaginator";
import { paginateListNetworkMigrationAnalysisResults } from "./pagination/ListNetworkMigrationAnalysisResultsPaginator";
import {
  paginateListNetworkMigrationCodeGenerationSegments,
} from "./pagination/ListNetworkMigrationCodeGenerationSegmentsPaginator";
import { paginateListNetworkMigrationCodeGenerations } from "./pagination/ListNetworkMigrationCodeGenerationsPaginator";
import { paginateListNetworkMigrationDefinitions } from "./pagination/ListNetworkMigrationDefinitionsPaginator";
import { paginateListNetworkMigrationDeployedStacks } from "./pagination/ListNetworkMigrationDeployedStacksPaginator";
import { paginateListNetworkMigrationDeployments } from "./pagination/ListNetworkMigrationDeploymentsPaginator";
import { paginateListNetworkMigrationExecutions } from "./pagination/ListNetworkMigrationExecutionsPaginator";
import {
  paginateListNetworkMigrationMapperSegmentConstructs,
} from "./pagination/ListNetworkMigrationMapperSegmentConstructsPaginator";
import { paginateListNetworkMigrationMapperSegments } from "./pagination/ListNetworkMigrationMapperSegmentsPaginator";
import { paginateListNetworkMigrationMappings } from "./pagination/ListNetworkMigrationMappingsPaginator";
import { paginateListNetworkMigrationMappingUpdates } from "./pagination/ListNetworkMigrationMappingUpdatesPaginator";
import { paginateListSourceServerActions } from "./pagination/ListSourceServerActionsPaginator";
import { paginateListTemplateActions } from "./pagination/ListTemplateActionsPaginator";
import { paginateListWaves } from "./pagination/ListWavesPaginator";

const commands = {
  ArchiveApplicationCommand,
  ArchiveWaveCommand,
  AssociateApplicationsCommand,
  AssociateSourceServersCommand,
  ChangeServerLifeCycleStateCommand,
  CreateApplicationCommand,
  CreateConnectorCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateNetworkMigrationDefinitionCommand,
  CreateReplicationConfigurationTemplateCommand,
  CreateWaveCommand,
  DeleteApplicationCommand,
  DeleteConnectorCommand,
  DeleteJobCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteNetworkMigrationDefinitionCommand,
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
  GetNetworkMigrationDefinitionCommand,
  GetNetworkMigrationMapperSegmentConstructCommand,
  GetReplicationConfigurationCommand,
  InitializeServiceCommand,
  ListApplicationsCommand,
  ListConnectorsCommand,
  ListExportErrorsCommand,
  ListExportsCommand,
  ListImportErrorsCommand,
  ListImportFileEnrichmentsCommand,
  ListImportsCommand,
  ListManagedAccountsCommand,
  ListNetworkMigrationAnalysesCommand,
  ListNetworkMigrationAnalysisResultsCommand,
  ListNetworkMigrationCodeGenerationsCommand,
  ListNetworkMigrationCodeGenerationSegmentsCommand,
  ListNetworkMigrationDefinitionsCommand,
  ListNetworkMigrationDeployedStacksCommand,
  ListNetworkMigrationDeploymentsCommand,
  ListNetworkMigrationExecutionsCommand,
  ListNetworkMigrationMapperSegmentConstructsCommand,
  ListNetworkMigrationMapperSegmentsCommand,
  ListNetworkMigrationMappingsCommand,
  ListNetworkMigrationMappingUpdatesCommand,
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
  StartImportFileEnrichmentCommand,
  StartNetworkMigrationAnalysisCommand,
  StartNetworkMigrationCodeGenerationCommand,
  StartNetworkMigrationDeploymentCommand,
  StartNetworkMigrationMappingCommand,
  StartNetworkMigrationMappingUpdateCommand,
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
  UpdateNetworkMigrationDefinitionCommand,
  UpdateNetworkMigrationMapperSegmentCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
  UpdateSourceServerCommand,
  UpdateSourceServerReplicationTypeCommand,
  UpdateWaveCommand,
};
const paginators = {
  paginateDescribeJobLogItems,
  paginateDescribeJobs,
  paginateDescribeLaunchConfigurationTemplates,
  paginateDescribeReplicationConfigurationTemplates,
  paginateDescribeSourceServers,
  paginateDescribeVcenterClients,
  paginateListApplications,
  paginateListConnectors,
  paginateListExportErrors,
  paginateListExports,
  paginateListImportErrors,
  paginateListImportFileEnrichments,
  paginateListImports,
  paginateListManagedAccounts,
  paginateListNetworkMigrationAnalyses,
  paginateListNetworkMigrationAnalysisResults,
  paginateListNetworkMigrationCodeGenerations,
  paginateListNetworkMigrationCodeGenerationSegments,
  paginateListNetworkMigrationDefinitions,
  paginateListNetworkMigrationDeployedStacks,
  paginateListNetworkMigrationDeployments,
  paginateListNetworkMigrationExecutions,
  paginateListNetworkMigrationMapperSegmentConstructs,
  paginateListNetworkMigrationMapperSegments,
  paginateListNetworkMigrationMappings,
  paginateListNetworkMigrationMappingUpdates,
  paginateListSourceServerActions,
  paginateListTemplateActions,
  paginateListWaves,
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
  archiveWave(
    args: ArchiveWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ArchiveWaveCommandOutput>;
  archiveWave(
    args: ArchiveWaveCommandInput,
    cb: (err: any, data?: ArchiveWaveCommandOutput) => void
  ): void;
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
  createConnector(
    args: CreateConnectorCommandInput,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationTemplateCommand}
   */
  createLaunchConfigurationTemplate(): Promise<CreateLaunchConfigurationTemplateCommandOutput>;
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
   * @see {@link CreateNetworkMigrationDefinitionCommand}
   */
  createNetworkMigrationDefinition(
    args: CreateNetworkMigrationDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkMigrationDefinitionCommandOutput>;
  createNetworkMigrationDefinition(
    args: CreateNetworkMigrationDefinitionCommandInput,
    cb: (err: any, data?: CreateNetworkMigrationDefinitionCommandOutput) => void
  ): void;
  createNetworkMigrationDefinition(
    args: CreateNetworkMigrationDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkMigrationDefinitionCommandOutput) => void
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
  createWave(
    args: CreateWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWaveCommandOutput>;
  createWave(
    args: CreateWaveCommandInput,
    cb: (err: any, data?: CreateWaveCommandOutput) => void
  ): void;
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
  deleteConnector(
    args: DeleteConnectorCommandInput,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobCommandOutput>;
  deleteJob(
    args: DeleteJobCommandInput,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
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
   * @see {@link DeleteNetworkMigrationDefinitionCommand}
   */
  deleteNetworkMigrationDefinition(
    args: DeleteNetworkMigrationDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkMigrationDefinitionCommandOutput>;
  deleteNetworkMigrationDefinition(
    args: DeleteNetworkMigrationDefinitionCommandInput,
    cb: (err: any, data?: DeleteNetworkMigrationDefinitionCommandOutput) => void
  ): void;
  deleteNetworkMigrationDefinition(
    args: DeleteNetworkMigrationDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkMigrationDefinitionCommandOutput) => void
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
  deleteWave(
    args: DeleteWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWaveCommandOutput>;
  deleteWave(
    args: DeleteWaveCommandInput,
    cb: (err: any, data?: DeleteWaveCommandOutput) => void
  ): void;
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
  describeJobs(): Promise<DescribeJobsCommandOutput>;
  describeJobs(
    args: DescribeJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJobsCommandOutput>;
  describeJobs(
    args: DescribeJobsCommandInput,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;
  describeJobs(
    args: DescribeJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   */
  describeLaunchConfigurationTemplates(): Promise<DescribeLaunchConfigurationTemplatesCommandOutput>;
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
  describeReplicationConfigurationTemplates(): Promise<DescribeReplicationConfigurationTemplatesCommandOutput>;
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
  describeSourceServers(): Promise<DescribeSourceServersCommandOutput>;
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
  describeVcenterClients(): Promise<DescribeVcenterClientsCommandOutput>;
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
  finalizeCutover(
    args: FinalizeCutoverCommandInput,
    cb: (err: any, data?: FinalizeCutoverCommandOutput) => void
  ): void;
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
   * @see {@link GetNetworkMigrationDefinitionCommand}
   */
  getNetworkMigrationDefinition(
    args: GetNetworkMigrationDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkMigrationDefinitionCommandOutput>;
  getNetworkMigrationDefinition(
    args: GetNetworkMigrationDefinitionCommandInput,
    cb: (err: any, data?: GetNetworkMigrationDefinitionCommandOutput) => void
  ): void;
  getNetworkMigrationDefinition(
    args: GetNetworkMigrationDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkMigrationDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkMigrationMapperSegmentConstructCommand}
   */
  getNetworkMigrationMapperSegmentConstruct(
    args: GetNetworkMigrationMapperSegmentConstructCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkMigrationMapperSegmentConstructCommandOutput>;
  getNetworkMigrationMapperSegmentConstruct(
    args: GetNetworkMigrationMapperSegmentConstructCommandInput,
    cb: (err: any, data?: GetNetworkMigrationMapperSegmentConstructCommandOutput) => void
  ): void;
  getNetworkMigrationMapperSegmentConstruct(
    args: GetNetworkMigrationMapperSegmentConstructCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkMigrationMapperSegmentConstructCommandOutput) => void
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
  initializeService(): Promise<InitializeServiceCommandOutput>;
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
  listApplications(): Promise<ListApplicationsCommandOutput>;
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
  listConnectors(): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
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
  listExports(): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportsCommandOutput>;
  listExports(
    args: ListExportsCommandInput,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
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
   * @see {@link ListImportFileEnrichmentsCommand}
   */
  listImportFileEnrichments(): Promise<ListImportFileEnrichmentsCommandOutput>;
  listImportFileEnrichments(
    args: ListImportFileEnrichmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportFileEnrichmentsCommandOutput>;
  listImportFileEnrichments(
    args: ListImportFileEnrichmentsCommandInput,
    cb: (err: any, data?: ListImportFileEnrichmentsCommandOutput) => void
  ): void;
  listImportFileEnrichments(
    args: ListImportFileEnrichmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportFileEnrichmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportsCommand}
   */
  listImports(): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportsCommandOutput>;
  listImports(
    args: ListImportsCommandInput,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedAccountsCommand}
   */
  listManagedAccounts(): Promise<ListManagedAccountsCommandOutput>;
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
   * @see {@link ListNetworkMigrationAnalysesCommand}
   */
  listNetworkMigrationAnalyses(
    args: ListNetworkMigrationAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationAnalysesCommandOutput>;
  listNetworkMigrationAnalyses(
    args: ListNetworkMigrationAnalysesCommandInput,
    cb: (err: any, data?: ListNetworkMigrationAnalysesCommandOutput) => void
  ): void;
  listNetworkMigrationAnalyses(
    args: ListNetworkMigrationAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationAnalysisResultsCommand}
   */
  listNetworkMigrationAnalysisResults(
    args: ListNetworkMigrationAnalysisResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationAnalysisResultsCommandOutput>;
  listNetworkMigrationAnalysisResults(
    args: ListNetworkMigrationAnalysisResultsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationAnalysisResultsCommandOutput) => void
  ): void;
  listNetworkMigrationAnalysisResults(
    args: ListNetworkMigrationAnalysisResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationAnalysisResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationCodeGenerationsCommand}
   */
  listNetworkMigrationCodeGenerations(
    args: ListNetworkMigrationCodeGenerationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationCodeGenerationsCommandOutput>;
  listNetworkMigrationCodeGenerations(
    args: ListNetworkMigrationCodeGenerationsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationCodeGenerationsCommandOutput) => void
  ): void;
  listNetworkMigrationCodeGenerations(
    args: ListNetworkMigrationCodeGenerationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationCodeGenerationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationCodeGenerationSegmentsCommand}
   */
  listNetworkMigrationCodeGenerationSegments(
    args: ListNetworkMigrationCodeGenerationSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationCodeGenerationSegmentsCommandOutput>;
  listNetworkMigrationCodeGenerationSegments(
    args: ListNetworkMigrationCodeGenerationSegmentsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationCodeGenerationSegmentsCommandOutput) => void
  ): void;
  listNetworkMigrationCodeGenerationSegments(
    args: ListNetworkMigrationCodeGenerationSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationCodeGenerationSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationDefinitionsCommand}
   */
  listNetworkMigrationDefinitions(): Promise<ListNetworkMigrationDefinitionsCommandOutput>;
  listNetworkMigrationDefinitions(
    args: ListNetworkMigrationDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationDefinitionsCommandOutput>;
  listNetworkMigrationDefinitions(
    args: ListNetworkMigrationDefinitionsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationDefinitionsCommandOutput) => void
  ): void;
  listNetworkMigrationDefinitions(
    args: ListNetworkMigrationDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationDeployedStacksCommand}
   */
  listNetworkMigrationDeployedStacks(
    args: ListNetworkMigrationDeployedStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationDeployedStacksCommandOutput>;
  listNetworkMigrationDeployedStacks(
    args: ListNetworkMigrationDeployedStacksCommandInput,
    cb: (err: any, data?: ListNetworkMigrationDeployedStacksCommandOutput) => void
  ): void;
  listNetworkMigrationDeployedStacks(
    args: ListNetworkMigrationDeployedStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationDeployedStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationDeploymentsCommand}
   */
  listNetworkMigrationDeployments(
    args: ListNetworkMigrationDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationDeploymentsCommandOutput>;
  listNetworkMigrationDeployments(
    args: ListNetworkMigrationDeploymentsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationDeploymentsCommandOutput) => void
  ): void;
  listNetworkMigrationDeployments(
    args: ListNetworkMigrationDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationExecutionsCommand}
   */
  listNetworkMigrationExecutions(
    args: ListNetworkMigrationExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationExecutionsCommandOutput>;
  listNetworkMigrationExecutions(
    args: ListNetworkMigrationExecutionsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationExecutionsCommandOutput) => void
  ): void;
  listNetworkMigrationExecutions(
    args: ListNetworkMigrationExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationMapperSegmentConstructsCommand}
   */
  listNetworkMigrationMapperSegmentConstructs(
    args: ListNetworkMigrationMapperSegmentConstructsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationMapperSegmentConstructsCommandOutput>;
  listNetworkMigrationMapperSegmentConstructs(
    args: ListNetworkMigrationMapperSegmentConstructsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationMapperSegmentConstructsCommandOutput) => void
  ): void;
  listNetworkMigrationMapperSegmentConstructs(
    args: ListNetworkMigrationMapperSegmentConstructsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationMapperSegmentConstructsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationMapperSegmentsCommand}
   */
  listNetworkMigrationMapperSegments(
    args: ListNetworkMigrationMapperSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationMapperSegmentsCommandOutput>;
  listNetworkMigrationMapperSegments(
    args: ListNetworkMigrationMapperSegmentsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationMapperSegmentsCommandOutput) => void
  ): void;
  listNetworkMigrationMapperSegments(
    args: ListNetworkMigrationMapperSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationMapperSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationMappingsCommand}
   */
  listNetworkMigrationMappings(
    args: ListNetworkMigrationMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationMappingsCommandOutput>;
  listNetworkMigrationMappings(
    args: ListNetworkMigrationMappingsCommandInput,
    cb: (err: any, data?: ListNetworkMigrationMappingsCommandOutput) => void
  ): void;
  listNetworkMigrationMappings(
    args: ListNetworkMigrationMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkMigrationMappingUpdatesCommand}
   */
  listNetworkMigrationMappingUpdates(
    args: ListNetworkMigrationMappingUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkMigrationMappingUpdatesCommandOutput>;
  listNetworkMigrationMappingUpdates(
    args: ListNetworkMigrationMappingUpdatesCommandInput,
    cb: (err: any, data?: ListNetworkMigrationMappingUpdatesCommandOutput) => void
  ): void;
  listNetworkMigrationMappingUpdates(
    args: ListNetworkMigrationMappingUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkMigrationMappingUpdatesCommandOutput) => void
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
  listWaves(): Promise<ListWavesCommandOutput>;
  listWaves(
    args: ListWavesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWavesCommandOutput>;
  listWaves(
    args: ListWavesCommandInput,
    cb: (err: any, data?: ListWavesCommandOutput) => void
  ): void;
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
  markAsArchived(
    args: MarkAsArchivedCommandInput,
    cb: (err: any, data?: MarkAsArchivedCommandOutput) => void
  ): void;
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
  startCutover(
    args: StartCutoverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCutoverCommandOutput>;
  startCutover(
    args: StartCutoverCommandInput,
    cb: (err: any, data?: StartCutoverCommandOutput) => void
  ): void;
  startCutover(
    args: StartCutoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCutoverCommandOutput) => void
  ): void;

  /**
   * @see {@link StartExportCommand}
   */
  startExport(
    args: StartExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExportCommandOutput>;
  startExport(
    args: StartExportCommandInput,
    cb: (err: any, data?: StartExportCommandOutput) => void
  ): void;
  startExport(
    args: StartExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(
    args: StartImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportCommandOutput>;
  startImport(
    args: StartImportCommandInput,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportFileEnrichmentCommand}
   */
  startImportFileEnrichment(
    args: StartImportFileEnrichmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportFileEnrichmentCommandOutput>;
  startImportFileEnrichment(
    args: StartImportFileEnrichmentCommandInput,
    cb: (err: any, data?: StartImportFileEnrichmentCommandOutput) => void
  ): void;
  startImportFileEnrichment(
    args: StartImportFileEnrichmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportFileEnrichmentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkMigrationAnalysisCommand}
   */
  startNetworkMigrationAnalysis(
    args: StartNetworkMigrationAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkMigrationAnalysisCommandOutput>;
  startNetworkMigrationAnalysis(
    args: StartNetworkMigrationAnalysisCommandInput,
    cb: (err: any, data?: StartNetworkMigrationAnalysisCommandOutput) => void
  ): void;
  startNetworkMigrationAnalysis(
    args: StartNetworkMigrationAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkMigrationAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkMigrationCodeGenerationCommand}
   */
  startNetworkMigrationCodeGeneration(
    args: StartNetworkMigrationCodeGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkMigrationCodeGenerationCommandOutput>;
  startNetworkMigrationCodeGeneration(
    args: StartNetworkMigrationCodeGenerationCommandInput,
    cb: (err: any, data?: StartNetworkMigrationCodeGenerationCommandOutput) => void
  ): void;
  startNetworkMigrationCodeGeneration(
    args: StartNetworkMigrationCodeGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkMigrationCodeGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkMigrationDeploymentCommand}
   */
  startNetworkMigrationDeployment(
    args: StartNetworkMigrationDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkMigrationDeploymentCommandOutput>;
  startNetworkMigrationDeployment(
    args: StartNetworkMigrationDeploymentCommandInput,
    cb: (err: any, data?: StartNetworkMigrationDeploymentCommandOutput) => void
  ): void;
  startNetworkMigrationDeployment(
    args: StartNetworkMigrationDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkMigrationDeploymentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkMigrationMappingCommand}
   */
  startNetworkMigrationMapping(
    args: StartNetworkMigrationMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkMigrationMappingCommandOutput>;
  startNetworkMigrationMapping(
    args: StartNetworkMigrationMappingCommandInput,
    cb: (err: any, data?: StartNetworkMigrationMappingCommandOutput) => void
  ): void;
  startNetworkMigrationMapping(
    args: StartNetworkMigrationMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkMigrationMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNetworkMigrationMappingUpdateCommand}
   */
  startNetworkMigrationMappingUpdate(
    args: StartNetworkMigrationMappingUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkMigrationMappingUpdateCommandOutput>;
  startNetworkMigrationMappingUpdate(
    args: StartNetworkMigrationMappingUpdateCommandInput,
    cb: (err: any, data?: StartNetworkMigrationMappingUpdateCommandOutput) => void
  ): void;
  startNetworkMigrationMappingUpdate(
    args: StartNetworkMigrationMappingUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkMigrationMappingUpdateCommandOutput) => void
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
  startTest(
    args: StartTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTestCommandOutput>;
  startTest(
    args: StartTestCommandInput,
    cb: (err: any, data?: StartTestCommandOutput) => void
  ): void;
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
  stopReplication(
    args: StopReplicationCommandInput,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;
  stopReplication(
    args: StopReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
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
  unarchiveWave(
    args: UnarchiveWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveWaveCommandOutput>;
  unarchiveWave(
    args: UnarchiveWaveCommandInput,
    cb: (err: any, data?: UnarchiveWaveCommandOutput) => void
  ): void;
  unarchiveWave(
    args: UnarchiveWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveWaveCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateConnector(
    args: UpdateConnectorCommandInput,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
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
   * @see {@link UpdateNetworkMigrationDefinitionCommand}
   */
  updateNetworkMigrationDefinition(
    args: UpdateNetworkMigrationDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkMigrationDefinitionCommandOutput>;
  updateNetworkMigrationDefinition(
    args: UpdateNetworkMigrationDefinitionCommandInput,
    cb: (err: any, data?: UpdateNetworkMigrationDefinitionCommandOutput) => void
  ): void;
  updateNetworkMigrationDefinition(
    args: UpdateNetworkMigrationDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkMigrationDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkMigrationMapperSegmentCommand}
   */
  updateNetworkMigrationMapperSegment(
    args: UpdateNetworkMigrationMapperSegmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkMigrationMapperSegmentCommandOutput>;
  updateNetworkMigrationMapperSegment(
    args: UpdateNetworkMigrationMapperSegmentCommandInput,
    cb: (err: any, data?: UpdateNetworkMigrationMapperSegmentCommandOutput) => void
  ): void;
  updateNetworkMigrationMapperSegment(
    args: UpdateNetworkMigrationMapperSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkMigrationMapperSegmentCommandOutput) => void
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
  updateWave(
    args: UpdateWaveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWaveCommandOutput>;
  updateWave(
    args: UpdateWaveCommandInput,
    cb: (err: any, data?: UpdateWaveCommandOutput) => void
  ): void;
  updateWave(
    args: UpdateWaveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWaveCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobLogItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobLogItemsCommandOutput}.
   */
  paginateDescribeJobLogItems(
    args: DescribeJobLogItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobLogItemsCommandOutput>;

  /**
   * @see {@link DescribeJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeJobsCommandOutput}.
   */
  paginateDescribeJobs(
    args?: DescribeJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeJobsCommandOutput>;

  /**
   * @see {@link DescribeLaunchConfigurationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLaunchConfigurationTemplatesCommandOutput}.
   */
  paginateDescribeLaunchConfigurationTemplates(
    args?: DescribeLaunchConfigurationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLaunchConfigurationTemplatesCommandOutput>;

  /**
   * @see {@link DescribeReplicationConfigurationTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReplicationConfigurationTemplatesCommandOutput}.
   */
  paginateDescribeReplicationConfigurationTemplates(
    args?: DescribeReplicationConfigurationTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReplicationConfigurationTemplatesCommandOutput>;

  /**
   * @see {@link DescribeSourceServersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSourceServersCommandOutput}.
   */
  paginateDescribeSourceServers(
    args?: DescribeSourceServersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSourceServersCommandOutput>;

  /**
   * @see {@link DescribeVcenterClientsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeVcenterClientsCommandOutput}.
   */
  paginateDescribeVcenterClients(
    args?: DescribeVcenterClientsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeVcenterClientsCommandOutput>;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectorsCommandOutput}.
   */
  paginateListConnectors(
    args?: ListConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectorsCommandOutput>;

  /**
   * @see {@link ListExportErrorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportErrorsCommandOutput}.
   */
  paginateListExportErrors(
    args: ListExportErrorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportErrorsCommandOutput>;

  /**
   * @see {@link ListExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExportsCommandOutput}.
   */
  paginateListExports(
    args?: ListExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExportsCommandOutput>;

  /**
   * @see {@link ListImportErrorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportErrorsCommandOutput}.
   */
  paginateListImportErrors(
    args: ListImportErrorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportErrorsCommandOutput>;

  /**
   * @see {@link ListImportFileEnrichmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportFileEnrichmentsCommandOutput}.
   */
  paginateListImportFileEnrichments(
    args?: ListImportFileEnrichmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportFileEnrichmentsCommandOutput>;

  /**
   * @see {@link ListImportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportsCommandOutput}.
   */
  paginateListImports(
    args?: ListImportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportsCommandOutput>;

  /**
   * @see {@link ListManagedAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedAccountsCommandOutput}.
   */
  paginateListManagedAccounts(
    args?: ListManagedAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedAccountsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationAnalysesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationAnalysesCommandOutput}.
   */
  paginateListNetworkMigrationAnalyses(
    args: ListNetworkMigrationAnalysesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationAnalysesCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationAnalysisResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationAnalysisResultsCommandOutput}.
   */
  paginateListNetworkMigrationAnalysisResults(
    args: ListNetworkMigrationAnalysisResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationAnalysisResultsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationCodeGenerationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationCodeGenerationsCommandOutput}.
   */
  paginateListNetworkMigrationCodeGenerations(
    args: ListNetworkMigrationCodeGenerationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationCodeGenerationsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationCodeGenerationSegmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationCodeGenerationSegmentsCommandOutput}.
   */
  paginateListNetworkMigrationCodeGenerationSegments(
    args: ListNetworkMigrationCodeGenerationSegmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationCodeGenerationSegmentsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationDefinitionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationDefinitionsCommandOutput}.
   */
  paginateListNetworkMigrationDefinitions(
    args?: ListNetworkMigrationDefinitionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationDefinitionsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationDeployedStacksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationDeployedStacksCommandOutput}.
   */
  paginateListNetworkMigrationDeployedStacks(
    args: ListNetworkMigrationDeployedStacksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationDeployedStacksCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationDeploymentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationDeploymentsCommandOutput}.
   */
  paginateListNetworkMigrationDeployments(
    args: ListNetworkMigrationDeploymentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationDeploymentsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationExecutionsCommandOutput}.
   */
  paginateListNetworkMigrationExecutions(
    args: ListNetworkMigrationExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationExecutionsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationMapperSegmentConstructsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationMapperSegmentConstructsCommandOutput}.
   */
  paginateListNetworkMigrationMapperSegmentConstructs(
    args: ListNetworkMigrationMapperSegmentConstructsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationMapperSegmentConstructsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationMapperSegmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationMapperSegmentsCommandOutput}.
   */
  paginateListNetworkMigrationMapperSegments(
    args: ListNetworkMigrationMapperSegmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationMapperSegmentsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationMappingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationMappingsCommandOutput}.
   */
  paginateListNetworkMigrationMappings(
    args: ListNetworkMigrationMappingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationMappingsCommandOutput>;

  /**
   * @see {@link ListNetworkMigrationMappingUpdatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkMigrationMappingUpdatesCommandOutput}.
   */
  paginateListNetworkMigrationMappingUpdates(
    args: ListNetworkMigrationMappingUpdatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkMigrationMappingUpdatesCommandOutput>;

  /**
   * @see {@link ListSourceServerActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceServerActionsCommandOutput}.
   */
  paginateListSourceServerActions(
    args: ListSourceServerActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceServerActionsCommandOutput>;

  /**
   * @see {@link ListTemplateActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplateActionsCommandOutput}.
   */
  paginateListTemplateActions(
    args: ListTemplateActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplateActionsCommandOutput>;

  /**
   * @see {@link ListWavesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWavesCommandOutput}.
   */
  paginateListWaves(
    args?: ListWavesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWavesCommandOutput>;
}

/**
 * <p>The Application Migration Service service.</p>
 * @public
 */
export class Mgn extends MgnClient implements Mgn {}
createAggregatedClient(commands, Mgn, { paginators });
