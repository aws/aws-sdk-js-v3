// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateDevicePoolCommand,
  CreateDevicePoolCommandInput,
  CreateDevicePoolCommandOutput,
} from "./commands/CreateDevicePoolCommand";
import {
  CreateInstanceProfileCommand,
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateNetworkProfileCommand,
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateRemoteAccessSessionCommand,
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
} from "./commands/CreateRemoteAccessSessionCommand";
import {
  CreateTestGridProjectCommand,
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
} from "./commands/CreateTestGridProjectCommand";
import {
  CreateTestGridUrlCommand,
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput,
} from "./commands/CreateTestGridUrlCommand";
import {
  CreateUploadCommand,
  CreateUploadCommandInput,
  CreateUploadCommandOutput,
} from "./commands/CreateUploadCommand";
import {
  CreateVPCEConfigurationCommand,
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
} from "./commands/CreateVPCEConfigurationCommand";
import {
  DeleteDevicePoolCommand,
  DeleteDevicePoolCommandInput,
  DeleteDevicePoolCommandOutput,
} from "./commands/DeleteDevicePoolCommand";
import {
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteNetworkProfileCommand,
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteRemoteAccessSessionCommand,
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
} from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommand, DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteTestGridProjectCommand,
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
} from "./commands/DeleteTestGridProjectCommand";
import {
  DeleteUploadCommand,
  DeleteUploadCommandInput,
  DeleteUploadCommandOutput,
} from "./commands/DeleteUploadCommand";
import {
  DeleteVPCEConfigurationCommand,
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
} from "./commands/DeleteVPCEConfigurationCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import {
  GetDeviceInstanceCommand,
  GetDeviceInstanceCommandInput,
  GetDeviceInstanceCommandOutput,
} from "./commands/GetDeviceInstanceCommand";
import {
  GetDevicePoolCommand,
  GetDevicePoolCommandInput,
  GetDevicePoolCommandOutput,
} from "./commands/GetDevicePoolCommand";
import {
  GetDevicePoolCompatibilityCommand,
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
} from "./commands/GetDevicePoolCompatibilityCommand";
import {
  GetInstanceProfileCommand,
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import { GetJobCommand, GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetNetworkProfileCommand,
  GetNetworkProfileCommandInput,
  GetNetworkProfileCommandOutput,
} from "./commands/GetNetworkProfileCommand";
import {
  GetOfferingStatusCommand,
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
} from "./commands/GetOfferingStatusCommand";
import { GetProjectCommand, GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetRemoteAccessSessionCommand,
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
} from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommand, GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetSuiteCommand, GetSuiteCommandInput, GetSuiteCommandOutput } from "./commands/GetSuiteCommand";
import { GetTestCommand, GetTestCommandInput, GetTestCommandOutput } from "./commands/GetTestCommand";
import {
  GetTestGridProjectCommand,
  GetTestGridProjectCommandInput,
  GetTestGridProjectCommandOutput,
} from "./commands/GetTestGridProjectCommand";
import {
  GetTestGridSessionCommand,
  GetTestGridSessionCommandInput,
  GetTestGridSessionCommandOutput,
} from "./commands/GetTestGridSessionCommand";
import { GetUploadCommand, GetUploadCommandInput, GetUploadCommandOutput } from "./commands/GetUploadCommand";
import {
  GetVPCEConfigurationCommand,
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
} from "./commands/GetVPCEConfigurationCommand";
import {
  InstallToRemoteAccessSessionCommand,
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
} from "./commands/InstallToRemoteAccessSessionCommand";
import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "./commands/ListArtifactsCommand";
import {
  ListDeviceInstancesCommand,
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
} from "./commands/ListDeviceInstancesCommand";
import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListNetworkProfilesCommand,
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput,
} from "./commands/ListNetworkProfilesCommand";
import {
  ListOfferingPromotionsCommand,
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
} from "./commands/ListOfferingPromotionsCommand";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "./commands/ListOfferingsCommand";
import {
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "./commands/ListOfferingTransactionsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListRemoteAccessSessionsCommand,
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
} from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListSamplesCommand, ListSamplesCommandInput, ListSamplesCommandOutput } from "./commands/ListSamplesCommand";
import { ListSuitesCommand, ListSuitesCommandInput, ListSuitesCommandOutput } from "./commands/ListSuitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestGridProjectsCommand,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "./commands/ListTestGridProjectsCommand";
import {
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "./commands/ListTestGridSessionActionsCommand";
import {
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "./commands/ListTestGridSessionArtifactsCommand";
import {
  ListTestGridSessionsCommand,
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "./commands/ListTestGridSessionsCommand";
import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "./commands/ListTestsCommand";
import {
  ListUniqueProblemsCommand,
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
} from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommand, ListUploadsCommandInput, ListUploadsCommandOutput } from "./commands/ListUploadsCommand";
import {
  ListVPCEConfigurationsCommand,
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
} from "./commands/ListVPCEConfigurationsCommand";
import {
  PurchaseOfferingCommand,
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
} from "./commands/PurchaseOfferingCommand";
import {
  RenewOfferingCommand,
  RenewOfferingCommandInput,
  RenewOfferingCommandOutput,
} from "./commands/RenewOfferingCommand";
import { ScheduleRunCommand, ScheduleRunCommandInput, ScheduleRunCommandOutput } from "./commands/ScheduleRunCommand";
import { StopJobCommand, StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import {
  StopRemoteAccessSessionCommand,
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
} from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommand, StopRunCommandInput, StopRunCommandOutput } from "./commands/StopRunCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDeviceInstanceCommand,
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
} from "./commands/UpdateDeviceInstanceCommand";
import {
  UpdateDevicePoolCommand,
  UpdateDevicePoolCommandInput,
  UpdateDevicePoolCommandOutput,
} from "./commands/UpdateDevicePoolCommand";
import {
  UpdateInstanceProfileCommand,
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
} from "./commands/UpdateInstanceProfileCommand";
import {
  UpdateNetworkProfileCommand,
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateTestGridProjectCommand,
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput,
} from "./commands/UpdateTestGridProjectCommand";
import {
  UpdateUploadCommand,
  UpdateUploadCommandInput,
  UpdateUploadCommandOutput,
} from "./commands/UpdateUploadCommand";
import {
  UpdateVPCEConfigurationCommand,
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
} from "./commands/UpdateVPCEConfigurationCommand";
import { DeviceFarmClient, DeviceFarmClientConfig } from "./DeviceFarmClient";

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
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
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
  createUpload(args: CreateUploadCommandInput, options?: __HttpHandlerOptions): Promise<CreateUploadCommandOutput>;
  createUpload(args: CreateUploadCommandInput, cb: (err: any, data?: CreateUploadCommandOutput) => void): void;
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
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
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
  deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
  deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
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
  deleteUpload(args: DeleteUploadCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUploadCommandOutput>;
  deleteUpload(args: DeleteUploadCommandInput, cb: (err: any, data?: DeleteUploadCommandOutput) => void): void;
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
  getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
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
  getDevicePool(args: GetDevicePoolCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicePoolCommandOutput>;
  getDevicePool(args: GetDevicePoolCommandInput, cb: (err: any, data?: GetDevicePoolCommandOutput) => void): void;
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
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
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
  getProject(args: GetProjectCommandInput, options?: __HttpHandlerOptions): Promise<GetProjectCommandOutput>;
  getProject(args: GetProjectCommandInput, cb: (err: any, data?: GetProjectCommandOutput) => void): void;
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
  getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
  getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
  getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSuiteCommand}
   */
  getSuite(args: GetSuiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteCommandOutput>;
  getSuite(args: GetSuiteCommandInput, cb: (err: any, data?: GetSuiteCommandOutput) => void): void;
  getSuite(
    args: GetSuiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSuiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTestCommand}
   */
  getTest(args: GetTestCommandInput, options?: __HttpHandlerOptions): Promise<GetTestCommandOutput>;
  getTest(args: GetTestCommandInput, cb: (err: any, data?: GetTestCommandOutput) => void): void;
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
  getUpload(args: GetUploadCommandInput, options?: __HttpHandlerOptions): Promise<GetUploadCommandOutput>;
  getUpload(args: GetUploadCommandInput, cb: (err: any, data?: GetUploadCommandOutput) => void): void;
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
  listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
  listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceInstancesCommand}
   */
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
  listDevicePools(args: ListDevicePoolsCommandInput, cb: (err: any, data?: ListDevicePoolsCommandOutput) => void): void;
  listDevicePools(
    args: ListDevicePoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicePoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
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
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
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
  listOfferings(args: ListOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<ListOfferingsCommandOutput>;
  listOfferings(args: ListOfferingsCommandInput, cb: (err: any, data?: ListOfferingsCommandOutput) => void): void;
  listOfferings(
    args: ListOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOfferingTransactionsCommand}
   */
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
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
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
  listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
  listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
  listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSamplesCommand}
   */
  listSamples(args: ListSamplesCommandInput, options?: __HttpHandlerOptions): Promise<ListSamplesCommandOutput>;
  listSamples(args: ListSamplesCommandInput, cb: (err: any, data?: ListSamplesCommandOutput) => void): void;
  listSamples(
    args: ListSamplesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSamplesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSuitesCommand}
   */
  listSuites(args: ListSuitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSuitesCommandOutput>;
  listSuites(args: ListSuitesCommandInput, cb: (err: any, data?: ListSuitesCommandOutput) => void): void;
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
  listTests(args: ListTestsCommandInput, options?: __HttpHandlerOptions): Promise<ListTestsCommandOutput>;
  listTests(args: ListTestsCommandInput, cb: (err: any, data?: ListTestsCommandOutput) => void): void;
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
  listUploads(args: ListUploadsCommandInput, options?: __HttpHandlerOptions): Promise<ListUploadsCommandOutput>;
  listUploads(args: ListUploadsCommandInput, cb: (err: any, data?: ListUploadsCommandOutput) => void): void;
  listUploads(
    args: ListUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVPCEConfigurationsCommand}
   */
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
  renewOffering(args: RenewOfferingCommandInput, options?: __HttpHandlerOptions): Promise<RenewOfferingCommandOutput>;
  renewOffering(args: RenewOfferingCommandInput, cb: (err: any, data?: RenewOfferingCommandOutput) => void): void;
  renewOffering(
    args: RenewOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenewOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link ScheduleRunCommand}
   */
  scheduleRun(args: ScheduleRunCommandInput, options?: __HttpHandlerOptions): Promise<ScheduleRunCommandOutput>;
  scheduleRun(args: ScheduleRunCommandInput, cb: (err: any, data?: ScheduleRunCommandOutput) => void): void;
  scheduleRun(
    args: ScheduleRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScheduleRunCommandOutput) => void
  ): void;

  /**
   * @see {@link StopJobCommand}
   */
  stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
  stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
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
  stopRun(args: StopRunCommandInput, options?: __HttpHandlerOptions): Promise<StopRunCommandOutput>;
  stopRun(args: StopRunCommandInput, cb: (err: any, data?: StopRunCommandOutput) => void): void;
  stopRun(
    args: StopRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRunCommandOutput) => void
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
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
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
  updateUpload(args: UpdateUploadCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUploadCommandOutput>;
  updateUpload(args: UpdateUploadCommandInput, cb: (err: any, data?: UpdateUploadCommandOutput) => void): void;
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
}

/**
 * @public
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class DeviceFarm extends DeviceFarmClient implements DeviceFarm {}
createAggregatedClient(commands, DeviceFarm);
