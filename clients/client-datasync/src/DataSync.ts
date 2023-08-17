// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddStorageSystemCommand,
  AddStorageSystemCommandInput,
  AddStorageSystemCommandOutput,
} from "./commands/AddStorageSystemCommand";
import {
  CancelTaskExecutionCommand,
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "./commands/CancelTaskExecutionCommand";
import { CreateAgentCommand, CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import {
  CreateLocationAzureBlobCommand,
  CreateLocationAzureBlobCommandInput,
  CreateLocationAzureBlobCommandOutput,
} from "./commands/CreateLocationAzureBlobCommand";
import {
  CreateLocationEfsCommand,
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput,
} from "./commands/CreateLocationEfsCommand";
import {
  CreateLocationFsxLustreCommand,
  CreateLocationFsxLustreCommandInput,
  CreateLocationFsxLustreCommandOutput,
} from "./commands/CreateLocationFsxLustreCommand";
import {
  CreateLocationFsxOntapCommand,
  CreateLocationFsxOntapCommandInput,
  CreateLocationFsxOntapCommandOutput,
} from "./commands/CreateLocationFsxOntapCommand";
import {
  CreateLocationFsxOpenZfsCommand,
  CreateLocationFsxOpenZfsCommandInput,
  CreateLocationFsxOpenZfsCommandOutput,
} from "./commands/CreateLocationFsxOpenZfsCommand";
import {
  CreateLocationFsxWindowsCommand,
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
} from "./commands/CreateLocationFsxWindowsCommand";
import {
  CreateLocationHdfsCommand,
  CreateLocationHdfsCommandInput,
  CreateLocationHdfsCommandOutput,
} from "./commands/CreateLocationHdfsCommand";
import {
  CreateLocationNfsCommand,
  CreateLocationNfsCommandInput,
  CreateLocationNfsCommandOutput,
} from "./commands/CreateLocationNfsCommand";
import {
  CreateLocationObjectStorageCommand,
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
} from "./commands/CreateLocationObjectStorageCommand";
import {
  CreateLocationS3Command,
  CreateLocationS3CommandInput,
  CreateLocationS3CommandOutput,
} from "./commands/CreateLocationS3Command";
import {
  CreateLocationSmbCommand,
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput,
} from "./commands/CreateLocationSmbCommand";
import { CreateTaskCommand, CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import { DeleteAgentCommand, DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import {
  DeleteLocationCommand,
  DeleteLocationCommandInput,
  DeleteLocationCommandOutput,
} from "./commands/DeleteLocationCommand";
import { DeleteTaskCommand, DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand";
import {
  DescribeAgentCommand,
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput,
} from "./commands/DescribeAgentCommand";
import {
  DescribeDiscoveryJobCommand,
  DescribeDiscoveryJobCommandInput,
  DescribeDiscoveryJobCommandOutput,
} from "./commands/DescribeDiscoveryJobCommand";
import {
  DescribeLocationAzureBlobCommand,
  DescribeLocationAzureBlobCommandInput,
  DescribeLocationAzureBlobCommandOutput,
} from "./commands/DescribeLocationAzureBlobCommand";
import {
  DescribeLocationEfsCommand,
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
} from "./commands/DescribeLocationEfsCommand";
import {
  DescribeLocationFsxLustreCommand,
  DescribeLocationFsxLustreCommandInput,
  DescribeLocationFsxLustreCommandOutput,
} from "./commands/DescribeLocationFsxLustreCommand";
import {
  DescribeLocationFsxOntapCommand,
  DescribeLocationFsxOntapCommandInput,
  DescribeLocationFsxOntapCommandOutput,
} from "./commands/DescribeLocationFsxOntapCommand";
import {
  DescribeLocationFsxOpenZfsCommand,
  DescribeLocationFsxOpenZfsCommandInput,
  DescribeLocationFsxOpenZfsCommandOutput,
} from "./commands/DescribeLocationFsxOpenZfsCommand";
import {
  DescribeLocationFsxWindowsCommand,
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
} from "./commands/DescribeLocationFsxWindowsCommand";
import {
  DescribeLocationHdfsCommand,
  DescribeLocationHdfsCommandInput,
  DescribeLocationHdfsCommandOutput,
} from "./commands/DescribeLocationHdfsCommand";
import {
  DescribeLocationNfsCommand,
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
} from "./commands/DescribeLocationNfsCommand";
import {
  DescribeLocationObjectStorageCommand,
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
} from "./commands/DescribeLocationObjectStorageCommand";
import {
  DescribeLocationS3Command,
  DescribeLocationS3CommandInput,
  DescribeLocationS3CommandOutput,
} from "./commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommand,
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput,
} from "./commands/DescribeLocationSmbCommand";
import {
  DescribeStorageSystemCommand,
  DescribeStorageSystemCommandInput,
  DescribeStorageSystemCommandOutput,
} from "./commands/DescribeStorageSystemCommand";
import {
  DescribeStorageSystemResourceMetricsCommand,
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput,
} from "./commands/DescribeStorageSystemResourceMetricsCommand";
import {
  DescribeStorageSystemResourcesCommand,
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
} from "./commands/DescribeStorageSystemResourcesCommand";
import {
  DescribeTaskCommand,
  DescribeTaskCommandInput,
  DescribeTaskCommandOutput,
} from "./commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommand,
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "./commands/DescribeTaskExecutionCommand";
import {
  GenerateRecommendationsCommand,
  GenerateRecommendationsCommandInput,
  GenerateRecommendationsCommandOutput,
} from "./commands/GenerateRecommendationsCommand";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import {
  ListDiscoveryJobsCommand,
  ListDiscoveryJobsCommandInput,
  ListDiscoveryJobsCommandOutput,
} from "./commands/ListDiscoveryJobsCommand";
import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "./commands/ListLocationsCommand";
import {
  ListStorageSystemsCommand,
  ListStorageSystemsCommandInput,
  ListStorageSystemsCommandOutput,
} from "./commands/ListStorageSystemsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskExecutionsCommand,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
} from "./commands/ListTaskExecutionsCommand";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import {
  RemoveStorageSystemCommand,
  RemoveStorageSystemCommandInput,
  RemoveStorageSystemCommandOutput,
} from "./commands/RemoveStorageSystemCommand";
import {
  StartDiscoveryJobCommand,
  StartDiscoveryJobCommandInput,
  StartDiscoveryJobCommandOutput,
} from "./commands/StartDiscoveryJobCommand";
import {
  StartTaskExecutionCommand,
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput,
} from "./commands/StartTaskExecutionCommand";
import {
  StopDiscoveryJobCommand,
  StopDiscoveryJobCommandInput,
  StopDiscoveryJobCommandOutput,
} from "./commands/StopDiscoveryJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAgentCommand, UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import {
  UpdateDiscoveryJobCommand,
  UpdateDiscoveryJobCommandInput,
  UpdateDiscoveryJobCommandOutput,
} from "./commands/UpdateDiscoveryJobCommand";
import {
  UpdateLocationAzureBlobCommand,
  UpdateLocationAzureBlobCommandInput,
  UpdateLocationAzureBlobCommandOutput,
} from "./commands/UpdateLocationAzureBlobCommand";
import {
  UpdateLocationHdfsCommand,
  UpdateLocationHdfsCommandInput,
  UpdateLocationHdfsCommandOutput,
} from "./commands/UpdateLocationHdfsCommand";
import {
  UpdateLocationNfsCommand,
  UpdateLocationNfsCommandInput,
  UpdateLocationNfsCommandOutput,
} from "./commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommand,
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "./commands/UpdateLocationObjectStorageCommand";
import {
  UpdateLocationSmbCommand,
  UpdateLocationSmbCommandInput,
  UpdateLocationSmbCommandOutput,
} from "./commands/UpdateLocationSmbCommand";
import {
  UpdateStorageSystemCommand,
  UpdateStorageSystemCommandInput,
  UpdateStorageSystemCommandOutput,
} from "./commands/UpdateStorageSystemCommand";
import { UpdateTaskCommand, UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommand,
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "./commands/UpdateTaskExecutionCommand";
import { DataSyncClient, DataSyncClientConfig } from "./DataSyncClient";

const commands = {
  AddStorageSystemCommand,
  CancelTaskExecutionCommand,
  CreateAgentCommand,
  CreateLocationAzureBlobCommand,
  CreateLocationEfsCommand,
  CreateLocationFsxLustreCommand,
  CreateLocationFsxOntapCommand,
  CreateLocationFsxOpenZfsCommand,
  CreateLocationFsxWindowsCommand,
  CreateLocationHdfsCommand,
  CreateLocationNfsCommand,
  CreateLocationObjectStorageCommand,
  CreateLocationS3Command,
  CreateLocationSmbCommand,
  CreateTaskCommand,
  DeleteAgentCommand,
  DeleteLocationCommand,
  DeleteTaskCommand,
  DescribeAgentCommand,
  DescribeDiscoveryJobCommand,
  DescribeLocationAzureBlobCommand,
  DescribeLocationEfsCommand,
  DescribeLocationFsxLustreCommand,
  DescribeLocationFsxOntapCommand,
  DescribeLocationFsxOpenZfsCommand,
  DescribeLocationFsxWindowsCommand,
  DescribeLocationHdfsCommand,
  DescribeLocationNfsCommand,
  DescribeLocationObjectStorageCommand,
  DescribeLocationS3Command,
  DescribeLocationSmbCommand,
  DescribeStorageSystemCommand,
  DescribeStorageSystemResourceMetricsCommand,
  DescribeStorageSystemResourcesCommand,
  DescribeTaskCommand,
  DescribeTaskExecutionCommand,
  GenerateRecommendationsCommand,
  ListAgentsCommand,
  ListDiscoveryJobsCommand,
  ListLocationsCommand,
  ListStorageSystemsCommand,
  ListTagsForResourceCommand,
  ListTaskExecutionsCommand,
  ListTasksCommand,
  RemoveStorageSystemCommand,
  StartDiscoveryJobCommand,
  StartTaskExecutionCommand,
  StopDiscoveryJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateDiscoveryJobCommand,
  UpdateLocationAzureBlobCommand,
  UpdateLocationHdfsCommand,
  UpdateLocationNfsCommand,
  UpdateLocationObjectStorageCommand,
  UpdateLocationSmbCommand,
  UpdateStorageSystemCommand,
  UpdateTaskCommand,
  UpdateTaskExecutionCommand,
};

export interface DataSync {
  /**
   * @see {@link AddStorageSystemCommand}
   */
  addStorageSystem(
    args: AddStorageSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddStorageSystemCommandOutput>;
  addStorageSystem(
    args: AddStorageSystemCommandInput,
    cb: (err: any, data?: AddStorageSystemCommandOutput) => void
  ): void;
  addStorageSystem(
    args: AddStorageSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddStorageSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTaskExecutionCommand}
   */
  cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTaskExecutionCommandOutput>;
  cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): void;
  cancelTaskExecution(
    args: CancelTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTaskExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentCommand}
   */
  createAgent(args: CreateAgentCommandInput, options?: __HttpHandlerOptions): Promise<CreateAgentCommandOutput>;
  createAgent(args: CreateAgentCommandInput, cb: (err: any, data?: CreateAgentCommandOutput) => void): void;
  createAgent(
    args: CreateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationAzureBlobCommand}
   */
  createLocationAzureBlob(
    args: CreateLocationAzureBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationAzureBlobCommandOutput>;
  createLocationAzureBlob(
    args: CreateLocationAzureBlobCommandInput,
    cb: (err: any, data?: CreateLocationAzureBlobCommandOutput) => void
  ): void;
  createLocationAzureBlob(
    args: CreateLocationAzureBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationAzureBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationEfsCommand}
   */
  createLocationEfs(
    args: CreateLocationEfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationEfsCommandOutput>;
  createLocationEfs(
    args: CreateLocationEfsCommandInput,
    cb: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): void;
  createLocationEfs(
    args: CreateLocationEfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationEfsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationFsxLustreCommand}
   */
  createLocationFsxLustre(
    args: CreateLocationFsxLustreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationFsxLustreCommandOutput>;
  createLocationFsxLustre(
    args: CreateLocationFsxLustreCommandInput,
    cb: (err: any, data?: CreateLocationFsxLustreCommandOutput) => void
  ): void;
  createLocationFsxLustre(
    args: CreateLocationFsxLustreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationFsxLustreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationFsxOntapCommand}
   */
  createLocationFsxOntap(
    args: CreateLocationFsxOntapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationFsxOntapCommandOutput>;
  createLocationFsxOntap(
    args: CreateLocationFsxOntapCommandInput,
    cb: (err: any, data?: CreateLocationFsxOntapCommandOutput) => void
  ): void;
  createLocationFsxOntap(
    args: CreateLocationFsxOntapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationFsxOntapCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationFsxOpenZfsCommand}
   */
  createLocationFsxOpenZfs(
    args: CreateLocationFsxOpenZfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationFsxOpenZfsCommandOutput>;
  createLocationFsxOpenZfs(
    args: CreateLocationFsxOpenZfsCommandInput,
    cb: (err: any, data?: CreateLocationFsxOpenZfsCommandOutput) => void
  ): void;
  createLocationFsxOpenZfs(
    args: CreateLocationFsxOpenZfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationFsxOpenZfsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationFsxWindowsCommand}
   */
  createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationFsxWindowsCommandOutput>;
  createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void
  ): void;
  createLocationFsxWindows(
    args: CreateLocationFsxWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationFsxWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationHdfsCommand}
   */
  createLocationHdfs(
    args: CreateLocationHdfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationHdfsCommandOutput>;
  createLocationHdfs(
    args: CreateLocationHdfsCommandInput,
    cb: (err: any, data?: CreateLocationHdfsCommandOutput) => void
  ): void;
  createLocationHdfs(
    args: CreateLocationHdfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationHdfsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationNfsCommand}
   */
  createLocationNfs(
    args: CreateLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationNfsCommandOutput>;
  createLocationNfs(
    args: CreateLocationNfsCommandInput,
    cb: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): void;
  createLocationNfs(
    args: CreateLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationNfsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationObjectStorageCommand}
   */
  createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationObjectStorageCommandOutput>;
  createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void
  ): void;
  createLocationObjectStorage(
    args: CreateLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationObjectStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationS3Command}
   */
  createLocationS3(
    args: CreateLocationS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationS3CommandOutput>;
  createLocationS3(
    args: CreateLocationS3CommandInput,
    cb: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): void;
  createLocationS3(
    args: CreateLocationS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationS3CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLocationSmbCommand}
   */
  createLocationSmb(
    args: CreateLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLocationSmbCommandOutput>;
  createLocationSmb(
    args: CreateLocationSmbCommandInput,
    cb: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): void;
  createLocationSmb(
    args: CreateLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLocationSmbCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTaskCommand}
   */
  createTask(args: CreateTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateTaskCommandOutput>;
  createTask(args: CreateTaskCommandInput, cb: (err: any, data?: CreateTaskCommandOutput) => void): void;
  createTask(
    args: CreateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentCommand}
   */
  deleteAgent(args: DeleteAgentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAgentCommandOutput>;
  deleteAgent(args: DeleteAgentCommandInput, cb: (err: any, data?: DeleteAgentCommandOutput) => void): void;
  deleteAgent(
    args: DeleteAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLocationCommand}
   */
  deleteLocation(
    args: DeleteLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLocationCommandOutput>;
  deleteLocation(args: DeleteLocationCommandInput, cb: (err: any, data?: DeleteLocationCommandOutput) => void): void;
  deleteLocation(
    args: DeleteLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaskCommand}
   */
  deleteTask(args: DeleteTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTaskCommandOutput>;
  deleteTask(args: DeleteTaskCommandInput, cb: (err: any, data?: DeleteTaskCommandOutput) => void): void;
  deleteTask(
    args: DeleteTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentCommand}
   */
  describeAgent(args: DescribeAgentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAgentCommandOutput>;
  describeAgent(args: DescribeAgentCommandInput, cb: (err: any, data?: DescribeAgentCommandOutput) => void): void;
  describeAgent(
    args: DescribeAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDiscoveryJobCommand}
   */
  describeDiscoveryJob(
    args: DescribeDiscoveryJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDiscoveryJobCommandOutput>;
  describeDiscoveryJob(
    args: DescribeDiscoveryJobCommandInput,
    cb: (err: any, data?: DescribeDiscoveryJobCommandOutput) => void
  ): void;
  describeDiscoveryJob(
    args: DescribeDiscoveryJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDiscoveryJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationAzureBlobCommand}
   */
  describeLocationAzureBlob(
    args: DescribeLocationAzureBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationAzureBlobCommandOutput>;
  describeLocationAzureBlob(
    args: DescribeLocationAzureBlobCommandInput,
    cb: (err: any, data?: DescribeLocationAzureBlobCommandOutput) => void
  ): void;
  describeLocationAzureBlob(
    args: DescribeLocationAzureBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationAzureBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationEfsCommand}
   */
  describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationEfsCommandOutput>;
  describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): void;
  describeLocationEfs(
    args: DescribeLocationEfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationEfsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationFsxLustreCommand}
   */
  describeLocationFsxLustre(
    args: DescribeLocationFsxLustreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationFsxLustreCommandOutput>;
  describeLocationFsxLustre(
    args: DescribeLocationFsxLustreCommandInput,
    cb: (err: any, data?: DescribeLocationFsxLustreCommandOutput) => void
  ): void;
  describeLocationFsxLustre(
    args: DescribeLocationFsxLustreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationFsxLustreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationFsxOntapCommand}
   */
  describeLocationFsxOntap(
    args: DescribeLocationFsxOntapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationFsxOntapCommandOutput>;
  describeLocationFsxOntap(
    args: DescribeLocationFsxOntapCommandInput,
    cb: (err: any, data?: DescribeLocationFsxOntapCommandOutput) => void
  ): void;
  describeLocationFsxOntap(
    args: DescribeLocationFsxOntapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationFsxOntapCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationFsxOpenZfsCommand}
   */
  describeLocationFsxOpenZfs(
    args: DescribeLocationFsxOpenZfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationFsxOpenZfsCommandOutput>;
  describeLocationFsxOpenZfs(
    args: DescribeLocationFsxOpenZfsCommandInput,
    cb: (err: any, data?: DescribeLocationFsxOpenZfsCommandOutput) => void
  ): void;
  describeLocationFsxOpenZfs(
    args: DescribeLocationFsxOpenZfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationFsxOpenZfsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationFsxWindowsCommand}
   */
  describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationFsxWindowsCommandOutput>;
  describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void
  ): void;
  describeLocationFsxWindows(
    args: DescribeLocationFsxWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationFsxWindowsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationHdfsCommand}
   */
  describeLocationHdfs(
    args: DescribeLocationHdfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationHdfsCommandOutput>;
  describeLocationHdfs(
    args: DescribeLocationHdfsCommandInput,
    cb: (err: any, data?: DescribeLocationHdfsCommandOutput) => void
  ): void;
  describeLocationHdfs(
    args: DescribeLocationHdfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationHdfsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationNfsCommand}
   */
  describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationNfsCommandOutput>;
  describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): void;
  describeLocationNfs(
    args: DescribeLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationNfsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationObjectStorageCommand}
   */
  describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationObjectStorageCommandOutput>;
  describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void
  ): void;
  describeLocationObjectStorage(
    args: DescribeLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationObjectStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationS3Command}
   */
  describeLocationS3(
    args: DescribeLocationS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationS3CommandOutput>;
  describeLocationS3(
    args: DescribeLocationS3CommandInput,
    cb: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): void;
  describeLocationS3(
    args: DescribeLocationS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationS3CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLocationSmbCommand}
   */
  describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLocationSmbCommandOutput>;
  describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): void;
  describeLocationSmb(
    args: DescribeLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLocationSmbCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageSystemCommand}
   */
  describeStorageSystem(
    args: DescribeStorageSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageSystemCommandOutput>;
  describeStorageSystem(
    args: DescribeStorageSystemCommandInput,
    cb: (err: any, data?: DescribeStorageSystemCommandOutput) => void
  ): void;
  describeStorageSystem(
    args: DescribeStorageSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageSystemResourceMetricsCommand}
   */
  describeStorageSystemResourceMetrics(
    args: DescribeStorageSystemResourceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageSystemResourceMetricsCommandOutput>;
  describeStorageSystemResourceMetrics(
    args: DescribeStorageSystemResourceMetricsCommandInput,
    cb: (err: any, data?: DescribeStorageSystemResourceMetricsCommandOutput) => void
  ): void;
  describeStorageSystemResourceMetrics(
    args: DescribeStorageSystemResourceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageSystemResourceMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageSystemResourcesCommand}
   */
  describeStorageSystemResources(
    args: DescribeStorageSystemResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageSystemResourcesCommandOutput>;
  describeStorageSystemResources(
    args: DescribeStorageSystemResourcesCommandInput,
    cb: (err: any, data?: DescribeStorageSystemResourcesCommandOutput) => void
  ): void;
  describeStorageSystemResources(
    args: DescribeStorageSystemResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageSystemResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTaskCommand}
   */
  describeTask(args: DescribeTaskCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTaskCommandOutput>;
  describeTask(args: DescribeTaskCommandInput, cb: (err: any, data?: DescribeTaskCommandOutput) => void): void;
  describeTask(
    args: DescribeTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTaskExecutionCommand}
   */
  describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskExecutionCommandOutput>;
  describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): void;
  describeTaskExecution(
    args: DescribeTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTaskExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateRecommendationsCommand}
   */
  generateRecommendations(
    args: GenerateRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateRecommendationsCommandOutput>;
  generateRecommendations(
    args: GenerateRecommendationsCommandInput,
    cb: (err: any, data?: GenerateRecommendationsCommandOutput) => void
  ): void;
  generateRecommendations(
    args: GenerateRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentsCommand}
   */
  listAgents(args: ListAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAgentsCommandOutput>;
  listAgents(args: ListAgentsCommandInput, cb: (err: any, data?: ListAgentsCommandOutput) => void): void;
  listAgents(
    args: ListAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveryJobsCommand}
   */
  listDiscoveryJobs(
    args: ListDiscoveryJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveryJobsCommandOutput>;
  listDiscoveryJobs(
    args: ListDiscoveryJobsCommandInput,
    cb: (err: any, data?: ListDiscoveryJobsCommandOutput) => void
  ): void;
  listDiscoveryJobs(
    args: ListDiscoveryJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveryJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLocationsCommand}
   */
  listLocations(args: ListLocationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLocationsCommandOutput>;
  listLocations(args: ListLocationsCommandInput, cb: (err: any, data?: ListLocationsCommandOutput) => void): void;
  listLocations(
    args: ListLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageSystemsCommand}
   */
  listStorageSystems(
    args: ListStorageSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageSystemsCommandOutput>;
  listStorageSystems(
    args: ListStorageSystemsCommandInput,
    cb: (err: any, data?: ListStorageSystemsCommandOutput) => void
  ): void;
  listStorageSystems(
    args: ListStorageSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageSystemsCommandOutput) => void
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
   * @see {@link ListTaskExecutionsCommand}
   */
  listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTaskExecutionsCommandOutput>;
  listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): void;
  listTaskExecutions(
    args: ListTaskExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTaskExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTasksCommand}
   */
  listTasks(args: ListTasksCommandInput, options?: __HttpHandlerOptions): Promise<ListTasksCommandOutput>;
  listTasks(args: ListTasksCommandInput, cb: (err: any, data?: ListTasksCommandOutput) => void): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveStorageSystemCommand}
   */
  removeStorageSystem(
    args: RemoveStorageSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveStorageSystemCommandOutput>;
  removeStorageSystem(
    args: RemoveStorageSystemCommandInput,
    cb: (err: any, data?: RemoveStorageSystemCommandOutput) => void
  ): void;
  removeStorageSystem(
    args: RemoveStorageSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveStorageSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDiscoveryJobCommand}
   */
  startDiscoveryJob(
    args: StartDiscoveryJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDiscoveryJobCommandOutput>;
  startDiscoveryJob(
    args: StartDiscoveryJobCommandInput,
    cb: (err: any, data?: StartDiscoveryJobCommandOutput) => void
  ): void;
  startDiscoveryJob(
    args: StartDiscoveryJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDiscoveryJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTaskExecutionCommand}
   */
  startTaskExecution(
    args: StartTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTaskExecutionCommandOutput>;
  startTaskExecution(
    args: StartTaskExecutionCommandInput,
    cb: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): void;
  startTaskExecution(
    args: StartTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTaskExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDiscoveryJobCommand}
   */
  stopDiscoveryJob(
    args: StopDiscoveryJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDiscoveryJobCommandOutput>;
  stopDiscoveryJob(
    args: StopDiscoveryJobCommandInput,
    cb: (err: any, data?: StopDiscoveryJobCommandOutput) => void
  ): void;
  stopDiscoveryJob(
    args: StopDiscoveryJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDiscoveryJobCommandOutput) => void
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
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(args: UpdateAgentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAgentCommandOutput>;
  updateAgent(args: UpdateAgentCommandInput, cb: (err: any, data?: UpdateAgentCommandOutput) => void): void;
  updateAgent(
    args: UpdateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDiscoveryJobCommand}
   */
  updateDiscoveryJob(
    args: UpdateDiscoveryJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDiscoveryJobCommandOutput>;
  updateDiscoveryJob(
    args: UpdateDiscoveryJobCommandInput,
    cb: (err: any, data?: UpdateDiscoveryJobCommandOutput) => void
  ): void;
  updateDiscoveryJob(
    args: UpdateDiscoveryJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDiscoveryJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationAzureBlobCommand}
   */
  updateLocationAzureBlob(
    args: UpdateLocationAzureBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationAzureBlobCommandOutput>;
  updateLocationAzureBlob(
    args: UpdateLocationAzureBlobCommandInput,
    cb: (err: any, data?: UpdateLocationAzureBlobCommandOutput) => void
  ): void;
  updateLocationAzureBlob(
    args: UpdateLocationAzureBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationAzureBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationHdfsCommand}
   */
  updateLocationHdfs(
    args: UpdateLocationHdfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationHdfsCommandOutput>;
  updateLocationHdfs(
    args: UpdateLocationHdfsCommandInput,
    cb: (err: any, data?: UpdateLocationHdfsCommandOutput) => void
  ): void;
  updateLocationHdfs(
    args: UpdateLocationHdfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationHdfsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationNfsCommand}
   */
  updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationNfsCommandOutput>;
  updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void
  ): void;
  updateLocationNfs(
    args: UpdateLocationNfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationNfsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationObjectStorageCommand}
   */
  updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationObjectStorageCommandOutput>;
  updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void
  ): void;
  updateLocationObjectStorage(
    args: UpdateLocationObjectStorageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationObjectStorageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationSmbCommand}
   */
  updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationSmbCommandOutput>;
  updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void
  ): void;
  updateLocationSmb(
    args: UpdateLocationSmbCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationSmbCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageSystemCommand}
   */
  updateStorageSystem(
    args: UpdateStorageSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageSystemCommandOutput>;
  updateStorageSystem(
    args: UpdateStorageSystemCommandInput,
    cb: (err: any, data?: UpdateStorageSystemCommandOutput) => void
  ): void;
  updateStorageSystem(
    args: UpdateStorageSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskCommand}
   */
  updateTask(args: UpdateTaskCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTaskCommandOutput>;
  updateTask(args: UpdateTaskCommandInput, cb: (err: any, data?: UpdateTaskCommandOutput) => void): void;
  updateTask(
    args: UpdateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTaskExecutionCommand}
   */
  updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskExecutionCommandOutput>;
  updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void
  ): void;
  updateTaskExecution(
    args: UpdateTaskExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTaskExecutionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>DataSync</fullname>
 *          <p>DataSync is an online data movement and discovery service that simplifies data migration
 *       and helps you quickly, easily, and securely transfer your file or object data to, from, and
 *       between Amazon Web Services storage services.</p>
 *          <p>This API interface reference includes documentation for using DataSync
 *       programmatically. For complete information, see the <i>
 *                <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User
 *           Guide</a>
 *             </i>.</p>
 */
export class DataSync extends DataSyncClient implements DataSync {}
createAggregatedClient(commands, DataSync);
