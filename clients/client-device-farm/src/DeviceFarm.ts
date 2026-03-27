// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateDevicePoolCommandInput,
  type CreateDevicePoolCommandOutput,
  CreateDevicePoolCommand,
} from "./commands/CreateDevicePoolCommand";
import {
  type CreateInstanceProfileCommandInput,
  type CreateInstanceProfileCommandOutput,
  CreateInstanceProfileCommand,
} from "./commands/CreateInstanceProfileCommand";
import {
  type CreateNetworkProfileCommandInput,
  type CreateNetworkProfileCommandOutput,
  CreateNetworkProfileCommand,
} from "./commands/CreateNetworkProfileCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type CreateRemoteAccessSessionCommandInput,
  type CreateRemoteAccessSessionCommandOutput,
  CreateRemoteAccessSessionCommand,
} from "./commands/CreateRemoteAccessSessionCommand";
import {
  type CreateTestGridProjectCommandInput,
  type CreateTestGridProjectCommandOutput,
  CreateTestGridProjectCommand,
} from "./commands/CreateTestGridProjectCommand";
import {
  type CreateTestGridUrlCommandInput,
  type CreateTestGridUrlCommandOutput,
  CreateTestGridUrlCommand,
} from "./commands/CreateTestGridUrlCommand";
import {
  type CreateUploadCommandInput,
  type CreateUploadCommandOutput,
  CreateUploadCommand,
} from "./commands/CreateUploadCommand";
import {
  type CreateVPCEConfigurationCommandInput,
  type CreateVPCEConfigurationCommandOutput,
  CreateVPCEConfigurationCommand,
} from "./commands/CreateVPCEConfigurationCommand";
import {
  type DeleteDevicePoolCommandInput,
  type DeleteDevicePoolCommandOutput,
  DeleteDevicePoolCommand,
} from "./commands/DeleteDevicePoolCommand";
import {
  type DeleteInstanceProfileCommandInput,
  type DeleteInstanceProfileCommandOutput,
  DeleteInstanceProfileCommand,
} from "./commands/DeleteInstanceProfileCommand";
import {
  type DeleteNetworkProfileCommandInput,
  type DeleteNetworkProfileCommandOutput,
  DeleteNetworkProfileCommand,
} from "./commands/DeleteNetworkProfileCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteRemoteAccessSessionCommandInput,
  type DeleteRemoteAccessSessionCommandOutput,
  DeleteRemoteAccessSessionCommand,
} from "./commands/DeleteRemoteAccessSessionCommand";
import { type DeleteRunCommandInput, type DeleteRunCommandOutput, DeleteRunCommand } from "./commands/DeleteRunCommand";
import {
  type DeleteTestGridProjectCommandInput,
  type DeleteTestGridProjectCommandOutput,
  DeleteTestGridProjectCommand,
} from "./commands/DeleteTestGridProjectCommand";
import {
  type DeleteUploadCommandInput,
  type DeleteUploadCommandOutput,
  DeleteUploadCommand,
} from "./commands/DeleteUploadCommand";
import {
  type DeleteVPCEConfigurationCommandInput,
  type DeleteVPCEConfigurationCommandOutput,
  DeleteVPCEConfigurationCommand,
} from "./commands/DeleteVPCEConfigurationCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import { type GetDeviceCommandInput, type GetDeviceCommandOutput, GetDeviceCommand } from "./commands/GetDeviceCommand";
import {
  type GetDeviceInstanceCommandInput,
  type GetDeviceInstanceCommandOutput,
  GetDeviceInstanceCommand,
} from "./commands/GetDeviceInstanceCommand";
import {
  type GetDevicePoolCommandInput,
  type GetDevicePoolCommandOutput,
  GetDevicePoolCommand,
} from "./commands/GetDevicePoolCommand";
import {
  type GetDevicePoolCompatibilityCommandInput,
  type GetDevicePoolCompatibilityCommandOutput,
  GetDevicePoolCompatibilityCommand,
} from "./commands/GetDevicePoolCompatibilityCommand";
import {
  type GetInstanceProfileCommandInput,
  type GetInstanceProfileCommandOutput,
  GetInstanceProfileCommand,
} from "./commands/GetInstanceProfileCommand";
import { type GetJobCommandInput, type GetJobCommandOutput, GetJobCommand } from "./commands/GetJobCommand";
import {
  type GetNetworkProfileCommandInput,
  type GetNetworkProfileCommandOutput,
  GetNetworkProfileCommand,
} from "./commands/GetNetworkProfileCommand";
import {
  type GetOfferingStatusCommandInput,
  type GetOfferingStatusCommandOutput,
  GetOfferingStatusCommand,
} from "./commands/GetOfferingStatusCommand";
import {
  type GetProjectCommandInput,
  type GetProjectCommandOutput,
  GetProjectCommand,
} from "./commands/GetProjectCommand";
import {
  type GetRemoteAccessSessionCommandInput,
  type GetRemoteAccessSessionCommandOutput,
  GetRemoteAccessSessionCommand,
} from "./commands/GetRemoteAccessSessionCommand";
import { type GetRunCommandInput, type GetRunCommandOutput, GetRunCommand } from "./commands/GetRunCommand";
import { type GetSuiteCommandInput, type GetSuiteCommandOutput, GetSuiteCommand } from "./commands/GetSuiteCommand";
import { type GetTestCommandInput, type GetTestCommandOutput, GetTestCommand } from "./commands/GetTestCommand";
import {
  type GetTestGridProjectCommandInput,
  type GetTestGridProjectCommandOutput,
  GetTestGridProjectCommand,
} from "./commands/GetTestGridProjectCommand";
import {
  type GetTestGridSessionCommandInput,
  type GetTestGridSessionCommandOutput,
  GetTestGridSessionCommand,
} from "./commands/GetTestGridSessionCommand";
import { type GetUploadCommandInput, type GetUploadCommandOutput, GetUploadCommand } from "./commands/GetUploadCommand";
import {
  type GetVPCEConfigurationCommandInput,
  type GetVPCEConfigurationCommandOutput,
  GetVPCEConfigurationCommand,
} from "./commands/GetVPCEConfigurationCommand";
import {
  type InstallToRemoteAccessSessionCommandInput,
  type InstallToRemoteAccessSessionCommandOutput,
  InstallToRemoteAccessSessionCommand,
} from "./commands/InstallToRemoteAccessSessionCommand";
import {
  type ListArtifactsCommandInput,
  type ListArtifactsCommandOutput,
  ListArtifactsCommand,
} from "./commands/ListArtifactsCommand";
import {
  type ListDeviceInstancesCommandInput,
  type ListDeviceInstancesCommandOutput,
  ListDeviceInstancesCommand,
} from "./commands/ListDeviceInstancesCommand";
import {
  type ListDevicePoolsCommandInput,
  type ListDevicePoolsCommandOutput,
  ListDevicePoolsCommand,
} from "./commands/ListDevicePoolsCommand";
import {
  type ListDevicesCommandInput,
  type ListDevicesCommandOutput,
  ListDevicesCommand,
} from "./commands/ListDevicesCommand";
import {
  type ListInstanceProfilesCommandInput,
  type ListInstanceProfilesCommandOutput,
  ListInstanceProfilesCommand,
} from "./commands/ListInstanceProfilesCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListNetworkProfilesCommandInput,
  type ListNetworkProfilesCommandOutput,
  ListNetworkProfilesCommand,
} from "./commands/ListNetworkProfilesCommand";
import {
  type ListOfferingPromotionsCommandInput,
  type ListOfferingPromotionsCommandOutput,
  ListOfferingPromotionsCommand,
} from "./commands/ListOfferingPromotionsCommand";
import {
  type ListOfferingsCommandInput,
  type ListOfferingsCommandOutput,
  ListOfferingsCommand,
} from "./commands/ListOfferingsCommand";
import {
  type ListOfferingTransactionsCommandInput,
  type ListOfferingTransactionsCommandOutput,
  ListOfferingTransactionsCommand,
} from "./commands/ListOfferingTransactionsCommand";
import {
  type ListProjectsCommandInput,
  type ListProjectsCommandOutput,
  ListProjectsCommand,
} from "./commands/ListProjectsCommand";
import {
  type ListRemoteAccessSessionsCommandInput,
  type ListRemoteAccessSessionsCommandOutput,
  ListRemoteAccessSessionsCommand,
} from "./commands/ListRemoteAccessSessionsCommand";
import { type ListRunsCommandInput, type ListRunsCommandOutput, ListRunsCommand } from "./commands/ListRunsCommand";
import {
  type ListSamplesCommandInput,
  type ListSamplesCommandOutput,
  ListSamplesCommand,
} from "./commands/ListSamplesCommand";
import {
  type ListSuitesCommandInput,
  type ListSuitesCommandOutput,
  ListSuitesCommand,
} from "./commands/ListSuitesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTestGridProjectsCommandInput,
  type ListTestGridProjectsCommandOutput,
  ListTestGridProjectsCommand,
} from "./commands/ListTestGridProjectsCommand";
import {
  type ListTestGridSessionActionsCommandInput,
  type ListTestGridSessionActionsCommandOutput,
  ListTestGridSessionActionsCommand,
} from "./commands/ListTestGridSessionActionsCommand";
import {
  type ListTestGridSessionArtifactsCommandInput,
  type ListTestGridSessionArtifactsCommandOutput,
  ListTestGridSessionArtifactsCommand,
} from "./commands/ListTestGridSessionArtifactsCommand";
import {
  type ListTestGridSessionsCommandInput,
  type ListTestGridSessionsCommandOutput,
  ListTestGridSessionsCommand,
} from "./commands/ListTestGridSessionsCommand";
import { type ListTestsCommandInput, type ListTestsCommandOutput, ListTestsCommand } from "./commands/ListTestsCommand";
import {
  type ListUniqueProblemsCommandInput,
  type ListUniqueProblemsCommandOutput,
  ListUniqueProblemsCommand,
} from "./commands/ListUniqueProblemsCommand";
import {
  type ListUploadsCommandInput,
  type ListUploadsCommandOutput,
  ListUploadsCommand,
} from "./commands/ListUploadsCommand";
import {
  type ListVPCEConfigurationsCommandInput,
  type ListVPCEConfigurationsCommandOutput,
  ListVPCEConfigurationsCommand,
} from "./commands/ListVPCEConfigurationsCommand";
import {
  type PurchaseOfferingCommandInput,
  type PurchaseOfferingCommandOutput,
  PurchaseOfferingCommand,
} from "./commands/PurchaseOfferingCommand";
import {
  type RenewOfferingCommandInput,
  type RenewOfferingCommandOutput,
  RenewOfferingCommand,
} from "./commands/RenewOfferingCommand";
import {
  type ScheduleRunCommandInput,
  type ScheduleRunCommandOutput,
  ScheduleRunCommand,
} from "./commands/ScheduleRunCommand";
import { type StopJobCommandInput, type StopJobCommandOutput, StopJobCommand } from "./commands/StopJobCommand";
import {
  type StopRemoteAccessSessionCommandInput,
  type StopRemoteAccessSessionCommandOutput,
  StopRemoteAccessSessionCommand,
} from "./commands/StopRemoteAccessSessionCommand";
import { type StopRunCommandInput, type StopRunCommandOutput, StopRunCommand } from "./commands/StopRunCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDeviceInstanceCommandInput,
  type UpdateDeviceInstanceCommandOutput,
  UpdateDeviceInstanceCommand,
} from "./commands/UpdateDeviceInstanceCommand";
import {
  type UpdateDevicePoolCommandInput,
  type UpdateDevicePoolCommandOutput,
  UpdateDevicePoolCommand,
} from "./commands/UpdateDevicePoolCommand";
import {
  type UpdateInstanceProfileCommandInput,
  type UpdateInstanceProfileCommandOutput,
  UpdateInstanceProfileCommand,
} from "./commands/UpdateInstanceProfileCommand";
import {
  type UpdateNetworkProfileCommandInput,
  type UpdateNetworkProfileCommandOutput,
  UpdateNetworkProfileCommand,
} from "./commands/UpdateNetworkProfileCommand";
import {
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from "./commands/UpdateProjectCommand";
import {
  type UpdateTestGridProjectCommandInput,
  type UpdateTestGridProjectCommandOutput,
  UpdateTestGridProjectCommand,
} from "./commands/UpdateTestGridProjectCommand";
import {
  type UpdateUploadCommandInput,
  type UpdateUploadCommandOutput,
  UpdateUploadCommand,
} from "./commands/UpdateUploadCommand";
import {
  type UpdateVPCEConfigurationCommandInput,
  type UpdateVPCEConfigurationCommandOutput,
  UpdateVPCEConfigurationCommand,
} from "./commands/UpdateVPCEConfigurationCommand";
import { DeviceFarmClient } from "./DeviceFarmClient";
import { paginateGetOfferingStatus } from "./pagination/GetOfferingStatusPaginator";
import { paginateListArtifacts } from "./pagination/ListArtifactsPaginator";
import { paginateListDevicePools } from "./pagination/ListDevicePoolsPaginator";
import { paginateListDevices } from "./pagination/ListDevicesPaginator";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListOfferings } from "./pagination/ListOfferingsPaginator";
import { paginateListOfferingTransactions } from "./pagination/ListOfferingTransactionsPaginator";
import { paginateListProjects } from "./pagination/ListProjectsPaginator";
import { paginateListRuns } from "./pagination/ListRunsPaginator";
import { paginateListSamples } from "./pagination/ListSamplesPaginator";
import { paginateListSuites } from "./pagination/ListSuitesPaginator";
import { paginateListTestGridProjects } from "./pagination/ListTestGridProjectsPaginator";
import { paginateListTestGridSessionActions } from "./pagination/ListTestGridSessionActionsPaginator";
import { paginateListTestGridSessionArtifacts } from "./pagination/ListTestGridSessionArtifactsPaginator";
import { paginateListTestGridSessions } from "./pagination/ListTestGridSessionsPaginator";
import { paginateListTests } from "./pagination/ListTestsPaginator";
import { paginateListUniqueProblems } from "./pagination/ListUniqueProblemsPaginator";
import { paginateListUploads } from "./pagination/ListUploadsPaginator";

const commands = {
  CreateDevicePoolCommand,
  CreateInstanceProfileCommand,
  CreateNetworkProfileCommand,
  CreateProjectCommand,
  CreateRemoteAccessSessionCommand,
  CreateTestGridProjectCommand,
  CreateTestGridUrlCommand,
  CreateUploadCommand,
  CreateVPCEConfigurationCommand,
  DeleteDevicePoolCommand,
  DeleteInstanceProfileCommand,
  DeleteNetworkProfileCommand,
  DeleteProjectCommand,
  DeleteRemoteAccessSessionCommand,
  DeleteRunCommand,
  DeleteTestGridProjectCommand,
  DeleteUploadCommand,
  DeleteVPCEConfigurationCommand,
  GetAccountSettingsCommand,
  GetDeviceCommand,
  GetDeviceInstanceCommand,
  GetDevicePoolCommand,
  GetDevicePoolCompatibilityCommand,
  GetInstanceProfileCommand,
  GetJobCommand,
  GetNetworkProfileCommand,
  GetOfferingStatusCommand,
  GetProjectCommand,
  GetRemoteAccessSessionCommand,
  GetRunCommand,
  GetSuiteCommand,
  GetTestCommand,
  GetTestGridProjectCommand,
  GetTestGridSessionCommand,
  GetUploadCommand,
  GetVPCEConfigurationCommand,
  InstallToRemoteAccessSessionCommand,
  ListArtifactsCommand,
  ListDeviceInstancesCommand,
  ListDevicePoolsCommand,
  ListDevicesCommand,
  ListInstanceProfilesCommand,
  ListJobsCommand,
  ListNetworkProfilesCommand,
  ListOfferingPromotionsCommand,
  ListOfferingsCommand,
  ListOfferingTransactionsCommand,
  ListProjectsCommand,
  ListRemoteAccessSessionsCommand,
  ListRunsCommand,
  ListSamplesCommand,
  ListSuitesCommand,
  ListTagsForResourceCommand,
  ListTestGridProjectsCommand,
  ListTestGridSessionActionsCommand,
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionsCommand,
  ListTestsCommand,
  ListUniqueProblemsCommand,
  ListUploadsCommand,
  ListVPCEConfigurationsCommand,
  PurchaseOfferingCommand,
  RenewOfferingCommand,
  ScheduleRunCommand,
  StopJobCommand,
  StopRemoteAccessSessionCommand,
  StopRunCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeviceInstanceCommand,
  UpdateDevicePoolCommand,
  UpdateInstanceProfileCommand,
  UpdateNetworkProfileCommand,
  UpdateProjectCommand,
  UpdateTestGridProjectCommand,
  UpdateUploadCommand,
  UpdateVPCEConfigurationCommand,
};
const paginators = {
  paginateGetOfferingStatus,
  paginateListArtifacts,
  paginateListDevicePools,
  paginateListDevices,
  paginateListJobs,
  paginateListOfferings,
  paginateListOfferingTransactions,
  paginateListProjects,
  paginateListRuns,
  paginateListSamples,
  paginateListSuites,
  paginateListTestGridProjects,
  paginateListTestGridSessionActions,
  paginateListTestGridSessionArtifacts,
  paginateListTestGridSessions,
  paginateListTests,
  paginateListUniqueProblems,
  paginateListUploads,
};

export interface DeviceFarm {
  /**
   * @see {@link CreateDevicePoolCommand}
   */
  createDevicePool(
    args: CreateDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDevicePoolCommandOutput>;
  createDevicePool(
    args: CreateDevicePoolCommandInput,
    cb: (err: any, data?: CreateDevicePoolCommandOutput) => void
  ): void;
  createDevicePool(
    args: CreateDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDevicePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceProfileCommandOutput>;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkProfileCommand}
   */
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkProfileCommandOutput>;
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRemoteAccessSessionCommand}
   */
  createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRemoteAccessSessionCommandOutput>;
  createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void
  ): void;
  createRemoteAccessSession(
    args: CreateRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRemoteAccessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestGridProjectCommand}
   */
  createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestGridProjectCommandOutput>;
  createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void
  ): void;
  createTestGridProject(
    args: CreateTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestGridProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTestGridUrlCommand}
   */
  createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTestGridUrlCommandOutput>;
  createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void
  ): void;
  createTestGridUrl(
    args: CreateTestGridUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTestGridUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUploadCommand}
   */
  createUpload(
    args: CreateUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadCommandOutput>;
  createUpload(
    args: CreateUploadCommandInput,
    cb: (err: any, data?: CreateUploadCommandOutput) => void
  ): void;
  createUpload(
    args: CreateUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVPCEConfigurationCommand}
   */
  createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVPCEConfigurationCommandOutput>;
  createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void
  ): void;
  createVPCEConfiguration(
    args: CreateVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVPCEConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDevicePoolCommand}
   */
  deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDevicePoolCommandOutput>;
  deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void
  ): void;
  deleteDevicePool(
    args: DeleteDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDevicePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceProfileCommandOutput>;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkProfileCommand}
   */
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkProfileCommandOutput>;
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRemoteAccessSessionCommand}
   */
  deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRemoteAccessSessionCommandOutput>;
  deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void
  ): void;
  deleteRemoteAccessSession(
    args: DeleteRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRemoteAccessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRunCommand}
   */
  deleteRun(
    args: DeleteRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRunCommandOutput>;
  deleteRun(
    args: DeleteRunCommandInput,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;
  deleteRun(
    args: DeleteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTestGridProjectCommand}
   */
  deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTestGridProjectCommandOutput>;
  deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void
  ): void;
  deleteTestGridProject(
    args: DeleteTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTestGridProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUploadCommand}
   */
  deleteUpload(
    args: DeleteUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUploadCommandOutput>;
  deleteUpload(
    args: DeleteUploadCommandInput,
    cb: (err: any, data?: DeleteUploadCommandOutput) => void
  ): void;
  deleteUpload(
    args: DeleteUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVPCEConfigurationCommand}
   */
  deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVPCEConfigurationCommandOutput>;
  deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void
  ): void;
  deleteVPCEConfiguration(
    args: DeleteVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVPCEConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceCommandOutput>;
  getDevice(
    args: GetDeviceCommandInput,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceInstanceCommand}
   */
  getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceInstanceCommandOutput>;
  getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void
  ): void;
  getDeviceInstance(
    args: GetDeviceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicePoolCommand}
   */
  getDevicePool(
    args: GetDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePoolCommandOutput>;
  getDevicePool(
    args: GetDevicePoolCommandInput,
    cb: (err: any, data?: GetDevicePoolCommandOutput) => void
  ): void;
  getDevicePool(
    args: GetDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicePoolCompatibilityCommand}
   */
  getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicePoolCompatibilityCommandOutput>;
  getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void
  ): void;
  getDevicePoolCompatibility(
    args: GetDevicePoolCompatibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicePoolCompatibilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceProfileCommandOutput>;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobCommandOutput>;
  getJob(
    args: GetJobCommandInput,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkProfileCommand}
   */
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkProfileCommandOutput>;
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferingStatusCommand}
   */
  getOfferingStatus(): Promise<GetOfferingStatusCommandOutput>;
  getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOfferingStatusCommandOutput>;
  getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    cb: (err: any, data?: GetOfferingStatusCommandOutput) => void
  ): void;
  getOfferingStatus(
    args: GetOfferingStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOfferingStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProjectCommand}
   */
  getProject(
    args: GetProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProjectCommandOutput>;
  getProject(
    args: GetProjectCommandInput,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;
  getProject(
    args: GetProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRemoteAccessSessionCommand}
   */
  getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRemoteAccessSessionCommandOutput>;
  getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void
  ): void;
  getRemoteAccessSession(
    args: GetRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRemoteAccessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRunCommand}
   */
  getRun(
    args: GetRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRunCommandOutput>;
  getRun(
    args: GetRunCommandInput,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;
  getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuiteCommand}
   */
  getSuite(
    args: GetSuiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSuiteCommandOutput>;
  getSuite(
    args: GetSuiteCommandInput,
    cb: (err: any, data?: GetSuiteCommandOutput) => void
  ): void;
  getSuite(
    args: GetSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestCommand}
   */
  getTest(
    args: GetTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestCommandOutput>;
  getTest(
    args: GetTestCommandInput,
    cb: (err: any, data?: GetTestCommandOutput) => void
  ): void;
  getTest(
    args: GetTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestGridProjectCommand}
   */
  getTestGridProject(
    args: GetTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestGridProjectCommandOutput>;
  getTestGridProject(
    args: GetTestGridProjectCommandInput,
    cb: (err: any, data?: GetTestGridProjectCommandOutput) => void
  ): void;
  getTestGridProject(
    args: GetTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestGridProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestGridSessionCommand}
   */
  getTestGridSession(): Promise<GetTestGridSessionCommandOutput>;
  getTestGridSession(
    args: GetTestGridSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTestGridSessionCommandOutput>;
  getTestGridSession(
    args: GetTestGridSessionCommandInput,
    cb: (err: any, data?: GetTestGridSessionCommandOutput) => void
  ): void;
  getTestGridSession(
    args: GetTestGridSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTestGridSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUploadCommand}
   */
  getUpload(
    args: GetUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUploadCommandOutput>;
  getUpload(
    args: GetUploadCommandInput,
    cb: (err: any, data?: GetUploadCommandOutput) => void
  ): void;
  getUpload(
    args: GetUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVPCEConfigurationCommand}
   */
  getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVPCEConfigurationCommandOutput>;
  getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void
  ): void;
  getVPCEConfiguration(
    args: GetVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVPCEConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link InstallToRemoteAccessSessionCommand}
   */
  installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InstallToRemoteAccessSessionCommandOutput>;
  installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void
  ): void;
  installToRemoteAccessSession(
    args: InstallToRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InstallToRemoteAccessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(
    args: ListArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArtifactsCommandOutput>;
  listArtifacts(
    args: ListArtifactsCommandInput,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceInstancesCommand}
   */
  listDeviceInstances(): Promise<ListDeviceInstancesCommandOutput>;
  listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceInstancesCommandOutput>;
  listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void
  ): void;
  listDeviceInstances(
    args: ListDeviceInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicePoolsCommand}
   */
  listDevicePools(
    args: ListDevicePoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicePoolsCommandOutput>;
  listDevicePools(
    args: ListDevicePoolsCommandInput,
    cb: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): void;
  listDevicePools(
    args: ListDevicePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  listInstanceProfiles(): Promise<ListInstanceProfilesCommandOutput>;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesCommandOutput>;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkProfilesCommand}
   */
  listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkProfilesCommandOutput>;
  listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void
  ): void;
  listNetworkProfiles(
    args: ListNetworkProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingPromotionsCommand}
   */
  listOfferingPromotions(): Promise<ListOfferingPromotionsCommandOutput>;
  listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingPromotionsCommandOutput>;
  listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void
  ): void;
  listOfferingPromotions(
    args: ListOfferingPromotionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingPromotionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingsCommand}
   */
  listOfferings(): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingsCommandOutput>;
  listOfferings(
    args: ListOfferingsCommandInput,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingTransactionsCommand}
   */
  listOfferingTransactions(): Promise<ListOfferingTransactionsCommandOutput>;
  listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOfferingTransactionsCommandOutput>;
  listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void
  ): void;
  listOfferingTransactions(
    args: ListOfferingTransactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingTransactionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRemoteAccessSessionsCommand}
   */
  listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRemoteAccessSessionsCommandOutput>;
  listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void
  ): void;
  listRemoteAccessSessions(
    args: ListRemoteAccessSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRemoteAccessSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRunsCommand}
   */
  listRuns(
    args: ListRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRunsCommandOutput>;
  listRuns(
    args: ListRunsCommandInput,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;
  listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSamplesCommand}
   */
  listSamples(
    args: ListSamplesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSamplesCommandOutput>;
  listSamples(
    args: ListSamplesCommandInput,
    cb: (err: any, data?: ListSamplesCommandOutput) => void
  ): void;
  listSamples(
    args: ListSamplesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSamplesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuitesCommand}
   */
  listSuites(
    args: ListSuitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSuitesCommandOutput>;
  listSuites(
    args: ListSuitesCommandInput,
    cb: (err: any, data?: ListSuitesCommandOutput) => void
  ): void;
  listSuites(
    args: ListSuitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSuitesCommandOutput) => void
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
   * @see {@link ListTestGridProjectsCommand}
   */
  listTestGridProjects(): Promise<ListTestGridProjectsCommandOutput>;
  listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridProjectsCommandOutput>;
  listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void
  ): void;
  listTestGridProjects(
    args: ListTestGridProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestGridSessionActionsCommand}
   */
  listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionActionsCommandOutput>;
  listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void
  ): void;
  listTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestGridSessionArtifactsCommand}
   */
  listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionArtifactsCommandOutput>;
  listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void
  ): void;
  listTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestGridSessionsCommand}
   */
  listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestGridSessionsCommandOutput>;
  listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void
  ): void;
  listTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestGridSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTestsCommand}
   */
  listTests(
    args: ListTestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTestsCommandOutput>;
  listTests(
    args: ListTestsCommandInput,
    cb: (err: any, data?: ListTestsCommandOutput) => void
  ): void;
  listTests(
    args: ListTestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUniqueProblemsCommand}
   */
  listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUniqueProblemsCommandOutput>;
  listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void
  ): void;
  listUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUniqueProblemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUploadsCommand}
   */
  listUploads(
    args: ListUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUploadsCommandOutput>;
  listUploads(
    args: ListUploadsCommandInput,
    cb: (err: any, data?: ListUploadsCommandOutput) => void
  ): void;
  listUploads(
    args: ListUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVPCEConfigurationsCommand}
   */
  listVPCEConfigurations(): Promise<ListVPCEConfigurationsCommandOutput>;
  listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVPCEConfigurationsCommandOutput>;
  listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void
  ): void;
  listVPCEConfigurations(
    args: ListVPCEConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVPCEConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseOfferingCommand}
   */
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseOfferingCommandOutput>;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;
  purchaseOffering(
    args: PurchaseOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RenewOfferingCommand}
   */
  renewOffering(
    args: RenewOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenewOfferingCommandOutput>;
  renewOffering(
    args: RenewOfferingCommandInput,
    cb: (err: any, data?: RenewOfferingCommandOutput) => void
  ): void;
  renewOffering(
    args: RenewOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link ScheduleRunCommand}
   */
  scheduleRun(
    args: ScheduleRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScheduleRunCommandOutput>;
  scheduleRun(
    args: ScheduleRunCommandInput,
    cb: (err: any, data?: ScheduleRunCommandOutput) => void
  ): void;
  scheduleRun(
    args: ScheduleRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScheduleRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopJobCommand}
   */
  stopJob(
    args: StopJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopJobCommandOutput>;
  stopJob(
    args: StopJobCommandInput,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;
  stopJob(
    args: StopJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRemoteAccessSessionCommand}
   */
  stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRemoteAccessSessionCommandOutput>;
  stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void
  ): void;
  stopRemoteAccessSession(
    args: StopRemoteAccessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRemoteAccessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRunCommand}
   */
  stopRun(
    args: StopRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRunCommandOutput>;
  stopRun(
    args: StopRunCommandInput,
    cb: (err: any, data?: StopRunCommandOutput) => void
  ): void;
  stopRun(
    args: StopRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRunCommandOutput) => void
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
   * @see {@link UpdateDeviceInstanceCommand}
   */
  updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceInstanceCommandOutput>;
  updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void
  ): void;
  updateDeviceInstance(
    args: UpdateDeviceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevicePoolCommand}
   */
  updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevicePoolCommandOutput>;
  updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void
  ): void;
  updateDevicePool(
    args: UpdateDevicePoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevicePoolCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceProfileCommand}
   */
  updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceProfileCommandOutput>;
  updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void
  ): void;
  updateInstanceProfile(
    args: UpdateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkProfileCommand}
   */
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkProfileCommandOutput>;
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTestGridProjectCommand}
   */
  updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTestGridProjectCommandOutput>;
  updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void
  ): void;
  updateTestGridProject(
    args: UpdateTestGridProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTestGridProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUploadCommand}
   */
  updateUpload(
    args: UpdateUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUploadCommandOutput>;
  updateUpload(
    args: UpdateUploadCommandInput,
    cb: (err: any, data?: UpdateUploadCommandOutput) => void
  ): void;
  updateUpload(
    args: UpdateUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVPCEConfigurationCommand}
   */
  updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVPCEConfigurationCommandOutput>;
  updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void
  ): void;
  updateVPCEConfiguration(
    args: UpdateVPCEConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVPCEConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferingStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOfferingStatusCommandOutput}.
   */
  paginateGetOfferingStatus(
    args?: GetOfferingStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOfferingStatusCommandOutput>;

  /**
   * @see {@link ListArtifactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListArtifactsCommandOutput}.
   */
  paginateListArtifacts(
    args: ListArtifactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListArtifactsCommandOutput>;

  /**
   * @see {@link ListDevicePoolsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevicePoolsCommandOutput}.
   */
  paginateListDevicePools(
    args: ListDevicePoolsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevicePoolsCommandOutput>;

  /**
   * @see {@link ListDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevicesCommandOutput}.
   */
  paginateListDevices(
    args?: ListDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevicesCommandOutput>;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOfferingsCommandOutput}.
   */
  paginateListOfferings(
    args?: ListOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOfferingsCommandOutput>;

  /**
   * @see {@link ListOfferingTransactionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOfferingTransactionsCommandOutput}.
   */
  paginateListOfferingTransactions(
    args?: ListOfferingTransactionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOfferingTransactionsCommandOutput>;

  /**
   * @see {@link ListProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectsCommandOutput}.
   */
  paginateListProjects(
    args?: ListProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectsCommandOutput>;

  /**
   * @see {@link ListRunsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRunsCommandOutput}.
   */
  paginateListRuns(
    args: ListRunsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRunsCommandOutput>;

  /**
   * @see {@link ListSamplesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSamplesCommandOutput}.
   */
  paginateListSamples(
    args: ListSamplesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSamplesCommandOutput>;

  /**
   * @see {@link ListSuitesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSuitesCommandOutput}.
   */
  paginateListSuites(
    args: ListSuitesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSuitesCommandOutput>;

  /**
   * @see {@link ListTestGridProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestGridProjectsCommandOutput}.
   */
  paginateListTestGridProjects(
    args?: ListTestGridProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestGridProjectsCommandOutput>;

  /**
   * @see {@link ListTestGridSessionActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestGridSessionActionsCommandOutput}.
   */
  paginateListTestGridSessionActions(
    args: ListTestGridSessionActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestGridSessionActionsCommandOutput>;

  /**
   * @see {@link ListTestGridSessionArtifactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestGridSessionArtifactsCommandOutput}.
   */
  paginateListTestGridSessionArtifacts(
    args: ListTestGridSessionArtifactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestGridSessionArtifactsCommandOutput>;

  /**
   * @see {@link ListTestGridSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestGridSessionsCommandOutput}.
   */
  paginateListTestGridSessions(
    args: ListTestGridSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestGridSessionsCommandOutput>;

  /**
   * @see {@link ListTestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTestsCommandOutput}.
   */
  paginateListTests(
    args: ListTestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTestsCommandOutput>;

  /**
   * @see {@link ListUniqueProblemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUniqueProblemsCommandOutput}.
   */
  paginateListUniqueProblems(
    args: ListUniqueProblemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUniqueProblemsCommandOutput>;

  /**
   * @see {@link ListUploadsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUploadsCommandOutput}.
   */
  paginateListUploads(
    args: ListUploadsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUploadsCommandOutput>;
}

/**
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *          <ul>
 *             <li>
 *                <p>Testing on desktop browsers</p>
 *                <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                <p>Testing on real mobile devices</p>
 *                <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class DeviceFarm extends DeviceFarmClient implements DeviceFarm {}
createAggregatedClient(commands, DeviceFarm, { paginators });
