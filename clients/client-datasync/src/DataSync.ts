// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CancelTaskExecutionCommandInput,
  type CancelTaskExecutionCommandOutput,
  CancelTaskExecutionCommand,
} from "./commands/CancelTaskExecutionCommand";
import {
  type CreateAgentCommandInput,
  type CreateAgentCommandOutput,
  CreateAgentCommand,
} from "./commands/CreateAgentCommand";
import {
  type CreateLocationAzureBlobCommandInput,
  type CreateLocationAzureBlobCommandOutput,
  CreateLocationAzureBlobCommand,
} from "./commands/CreateLocationAzureBlobCommand";
import {
  type CreateLocationEfsCommandInput,
  type CreateLocationEfsCommandOutput,
  CreateLocationEfsCommand,
} from "./commands/CreateLocationEfsCommand";
import {
  type CreateLocationFsxLustreCommandInput,
  type CreateLocationFsxLustreCommandOutput,
  CreateLocationFsxLustreCommand,
} from "./commands/CreateLocationFsxLustreCommand";
import {
  type CreateLocationFsxOntapCommandInput,
  type CreateLocationFsxOntapCommandOutput,
  CreateLocationFsxOntapCommand,
} from "./commands/CreateLocationFsxOntapCommand";
import {
  type CreateLocationFsxOpenZfsCommandInput,
  type CreateLocationFsxOpenZfsCommandOutput,
  CreateLocationFsxOpenZfsCommand,
} from "./commands/CreateLocationFsxOpenZfsCommand";
import {
  type CreateLocationFsxWindowsCommandInput,
  type CreateLocationFsxWindowsCommandOutput,
  CreateLocationFsxWindowsCommand,
} from "./commands/CreateLocationFsxWindowsCommand";
import {
  type CreateLocationHdfsCommandInput,
  type CreateLocationHdfsCommandOutput,
  CreateLocationHdfsCommand,
} from "./commands/CreateLocationHdfsCommand";
import {
  type CreateLocationNfsCommandInput,
  type CreateLocationNfsCommandOutput,
  CreateLocationNfsCommand,
} from "./commands/CreateLocationNfsCommand";
import {
  type CreateLocationObjectStorageCommandInput,
  type CreateLocationObjectStorageCommandOutput,
  CreateLocationObjectStorageCommand,
} from "./commands/CreateLocationObjectStorageCommand";
import {
  type CreateLocationS3CommandInput,
  type CreateLocationS3CommandOutput,
  CreateLocationS3Command,
} from "./commands/CreateLocationS3Command";
import {
  type CreateLocationSmbCommandInput,
  type CreateLocationSmbCommandOutput,
  CreateLocationSmbCommand,
} from "./commands/CreateLocationSmbCommand";
import {
  type CreateTaskCommandInput,
  type CreateTaskCommandOutput,
  CreateTaskCommand,
} from "./commands/CreateTaskCommand";
import {
  type DeleteAgentCommandInput,
  type DeleteAgentCommandOutput,
  DeleteAgentCommand,
} from "./commands/DeleteAgentCommand";
import {
  type DeleteLocationCommandInput,
  type DeleteLocationCommandOutput,
  DeleteLocationCommand,
} from "./commands/DeleteLocationCommand";
import {
  type DeleteTaskCommandInput,
  type DeleteTaskCommandOutput,
  DeleteTaskCommand,
} from "./commands/DeleteTaskCommand";
import {
  type DescribeAgentCommandInput,
  type DescribeAgentCommandOutput,
  DescribeAgentCommand,
} from "./commands/DescribeAgentCommand";
import {
  type DescribeLocationAzureBlobCommandInput,
  type DescribeLocationAzureBlobCommandOutput,
  DescribeLocationAzureBlobCommand,
} from "./commands/DescribeLocationAzureBlobCommand";
import {
  type DescribeLocationEfsCommandInput,
  type DescribeLocationEfsCommandOutput,
  DescribeLocationEfsCommand,
} from "./commands/DescribeLocationEfsCommand";
import {
  type DescribeLocationFsxLustreCommandInput,
  type DescribeLocationFsxLustreCommandOutput,
  DescribeLocationFsxLustreCommand,
} from "./commands/DescribeLocationFsxLustreCommand";
import {
  type DescribeLocationFsxOntapCommandInput,
  type DescribeLocationFsxOntapCommandOutput,
  DescribeLocationFsxOntapCommand,
} from "./commands/DescribeLocationFsxOntapCommand";
import {
  type DescribeLocationFsxOpenZfsCommandInput,
  type DescribeLocationFsxOpenZfsCommandOutput,
  DescribeLocationFsxOpenZfsCommand,
} from "./commands/DescribeLocationFsxOpenZfsCommand";
import {
  type DescribeLocationFsxWindowsCommandInput,
  type DescribeLocationFsxWindowsCommandOutput,
  DescribeLocationFsxWindowsCommand,
} from "./commands/DescribeLocationFsxWindowsCommand";
import {
  type DescribeLocationHdfsCommandInput,
  type DescribeLocationHdfsCommandOutput,
  DescribeLocationHdfsCommand,
} from "./commands/DescribeLocationHdfsCommand";
import {
  type DescribeLocationNfsCommandInput,
  type DescribeLocationNfsCommandOutput,
  DescribeLocationNfsCommand,
} from "./commands/DescribeLocationNfsCommand";
import {
  type DescribeLocationObjectStorageCommandInput,
  type DescribeLocationObjectStorageCommandOutput,
  DescribeLocationObjectStorageCommand,
} from "./commands/DescribeLocationObjectStorageCommand";
import {
  type DescribeLocationS3CommandInput,
  type DescribeLocationS3CommandOutput,
  DescribeLocationS3Command,
} from "./commands/DescribeLocationS3Command";
import {
  type DescribeLocationSmbCommandInput,
  type DescribeLocationSmbCommandOutput,
  DescribeLocationSmbCommand,
} from "./commands/DescribeLocationSmbCommand";
import {
  type DescribeTaskCommandInput,
  type DescribeTaskCommandOutput,
  DescribeTaskCommand,
} from "./commands/DescribeTaskCommand";
import {
  type DescribeTaskExecutionCommandInput,
  type DescribeTaskExecutionCommandOutput,
  DescribeTaskExecutionCommand,
} from "./commands/DescribeTaskExecutionCommand";
import {
  type ListAgentsCommandInput,
  type ListAgentsCommandOutput,
  ListAgentsCommand,
} from "./commands/ListAgentsCommand";
import {
  type ListLocationsCommandInput,
  type ListLocationsCommandOutput,
  ListLocationsCommand,
} from "./commands/ListLocationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTaskExecutionsCommandInput,
  type ListTaskExecutionsCommandOutput,
  ListTaskExecutionsCommand,
} from "./commands/ListTaskExecutionsCommand";
import { type ListTasksCommandInput, type ListTasksCommandOutput, ListTasksCommand } from "./commands/ListTasksCommand";
import {
  type StartTaskExecutionCommandInput,
  type StartTaskExecutionCommandOutput,
  StartTaskExecutionCommand,
} from "./commands/StartTaskExecutionCommand";
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
  type UpdateAgentCommandInput,
  type UpdateAgentCommandOutput,
  UpdateAgentCommand,
} from "./commands/UpdateAgentCommand";
import {
  type UpdateLocationAzureBlobCommandInput,
  type UpdateLocationAzureBlobCommandOutput,
  UpdateLocationAzureBlobCommand,
} from "./commands/UpdateLocationAzureBlobCommand";
import {
  type UpdateLocationEfsCommandInput,
  type UpdateLocationEfsCommandOutput,
  UpdateLocationEfsCommand,
} from "./commands/UpdateLocationEfsCommand";
import {
  type UpdateLocationFsxLustreCommandInput,
  type UpdateLocationFsxLustreCommandOutput,
  UpdateLocationFsxLustreCommand,
} from "./commands/UpdateLocationFsxLustreCommand";
import {
  type UpdateLocationFsxOntapCommandInput,
  type UpdateLocationFsxOntapCommandOutput,
  UpdateLocationFsxOntapCommand,
} from "./commands/UpdateLocationFsxOntapCommand";
import {
  type UpdateLocationFsxOpenZfsCommandInput,
  type UpdateLocationFsxOpenZfsCommandOutput,
  UpdateLocationFsxOpenZfsCommand,
} from "./commands/UpdateLocationFsxOpenZfsCommand";
import {
  type UpdateLocationFsxWindowsCommandInput,
  type UpdateLocationFsxWindowsCommandOutput,
  UpdateLocationFsxWindowsCommand,
} from "./commands/UpdateLocationFsxWindowsCommand";
import {
  type UpdateLocationHdfsCommandInput,
  type UpdateLocationHdfsCommandOutput,
  UpdateLocationHdfsCommand,
} from "./commands/UpdateLocationHdfsCommand";
import {
  type UpdateLocationNfsCommandInput,
  type UpdateLocationNfsCommandOutput,
  UpdateLocationNfsCommand,
} from "./commands/UpdateLocationNfsCommand";
import {
  type UpdateLocationObjectStorageCommandInput,
  type UpdateLocationObjectStorageCommandOutput,
  UpdateLocationObjectStorageCommand,
} from "./commands/UpdateLocationObjectStorageCommand";
import {
  type UpdateLocationS3CommandInput,
  type UpdateLocationS3CommandOutput,
  UpdateLocationS3Command,
} from "./commands/UpdateLocationS3Command";
import {
  type UpdateLocationSmbCommandInput,
  type UpdateLocationSmbCommandOutput,
  UpdateLocationSmbCommand,
} from "./commands/UpdateLocationSmbCommand";
import {
  type UpdateTaskCommandInput,
  type UpdateTaskCommandOutput,
  UpdateTaskCommand,
} from "./commands/UpdateTaskCommand";
import {
  type UpdateTaskExecutionCommandInput,
  type UpdateTaskExecutionCommandOutput,
  UpdateTaskExecutionCommand,
} from "./commands/UpdateTaskExecutionCommand";
import { DataSyncClient } from "./DataSyncClient";
import { paginateListAgents } from "./pagination/ListAgentsPaginator";
import { paginateListLocations } from "./pagination/ListLocationsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListTaskExecutions } from "./pagination/ListTaskExecutionsPaginator";
import { paginateListTasks } from "./pagination/ListTasksPaginator";

const commands = {
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
  DescribeTaskCommand,
  DescribeTaskExecutionCommand,
  ListAgentsCommand,
  ListLocationsCommand,
  ListTagsForResourceCommand,
  ListTaskExecutionsCommand,
  ListTasksCommand,
  StartTaskExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateLocationAzureBlobCommand,
  UpdateLocationEfsCommand,
  UpdateLocationFsxLustreCommand,
  UpdateLocationFsxOntapCommand,
  UpdateLocationFsxOpenZfsCommand,
  UpdateLocationFsxWindowsCommand,
  UpdateLocationHdfsCommand,
  UpdateLocationNfsCommand,
  UpdateLocationObjectStorageCommand,
  UpdateLocationS3Command,
  UpdateLocationSmbCommand,
  UpdateTaskCommand,
  UpdateTaskExecutionCommand,
};
const paginators = {
  paginateListAgents,
  paginateListLocations,
  paginateListTagsForResource,
  paginateListTaskExecutions,
  paginateListTasks,
};

export interface DataSync {
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
  createAgent(
    args: CreateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentCommandOutput>;
  createAgent(
    args: CreateAgentCommandInput,
    cb: (err: any, data?: CreateAgentCommandOutput) => void
  ): void;
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
  createTask(
    args: CreateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTaskCommandOutput>;
  createTask(
    args: CreateTaskCommandInput,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;
  createTask(
    args: CreateTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentCommand}
   */
  deleteAgent(
    args: DeleteAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentCommandOutput>;
  deleteAgent(
    args: DeleteAgentCommandInput,
    cb: (err: any, data?: DeleteAgentCommandOutput) => void
  ): void;
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
  deleteLocation(
    args: DeleteLocationCommandInput,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;
  deleteLocation(
    args: DeleteLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTaskCommand}
   */
  deleteTask(
    args: DeleteTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTaskCommandOutput>;
  deleteTask(
    args: DeleteTaskCommandInput,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;
  deleteTask(
    args: DeleteTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAgentCommand}
   */
  describeAgent(
    args: DescribeAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAgentCommandOutput>;
  describeAgent(
    args: DescribeAgentCommandInput,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
  ): void;
  describeAgent(
    args: DescribeAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAgentCommandOutput) => void
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
   * @see {@link DescribeTaskCommand}
   */
  describeTask(
    args: DescribeTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTaskCommandOutput>;
  describeTask(
    args: DescribeTaskCommandInput,
    cb: (err: any, data?: DescribeTaskCommandOutput) => void
  ): void;
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
   * @see {@link ListAgentsCommand}
   */
  listAgents(): Promise<ListAgentsCommandOutput>;
  listAgents(
    args: ListAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentsCommandOutput>;
  listAgents(
    args: ListAgentsCommandInput,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;
  listAgents(
    args: ListAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLocationsCommand}
   */
  listLocations(): Promise<ListLocationsCommandOutput>;
  listLocations(
    args: ListLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLocationsCommandOutput>;
  listLocations(
    args: ListLocationsCommandInput,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
  ): void;
  listLocations(
    args: ListLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLocationsCommandOutput) => void
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
  listTaskExecutions(): Promise<ListTaskExecutionsCommandOutput>;
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
  listTasks(): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTasksCommandOutput>;
  listTasks(
    args: ListTasksCommandInput,
    cb: (err: any, data?: ListTasksCommandOutput) => void
  ): void;
  listTasks(
    args: ListTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTasksCommandOutput) => void
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
   * @see {@link UpdateAgentCommand}
   */
  updateAgent(
    args: UpdateAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentCommandOutput>;
  updateAgent(
    args: UpdateAgentCommandInput,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
  ): void;
  updateAgent(
    args: UpdateAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentCommandOutput) => void
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
   * @see {@link UpdateLocationEfsCommand}
   */
  updateLocationEfs(
    args: UpdateLocationEfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationEfsCommandOutput>;
  updateLocationEfs(
    args: UpdateLocationEfsCommandInput,
    cb: (err: any, data?: UpdateLocationEfsCommandOutput) => void
  ): void;
  updateLocationEfs(
    args: UpdateLocationEfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationEfsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationFsxLustreCommand}
   */
  updateLocationFsxLustre(
    args: UpdateLocationFsxLustreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationFsxLustreCommandOutput>;
  updateLocationFsxLustre(
    args: UpdateLocationFsxLustreCommandInput,
    cb: (err: any, data?: UpdateLocationFsxLustreCommandOutput) => void
  ): void;
  updateLocationFsxLustre(
    args: UpdateLocationFsxLustreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationFsxLustreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationFsxOntapCommand}
   */
  updateLocationFsxOntap(
    args: UpdateLocationFsxOntapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationFsxOntapCommandOutput>;
  updateLocationFsxOntap(
    args: UpdateLocationFsxOntapCommandInput,
    cb: (err: any, data?: UpdateLocationFsxOntapCommandOutput) => void
  ): void;
  updateLocationFsxOntap(
    args: UpdateLocationFsxOntapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationFsxOntapCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationFsxOpenZfsCommand}
   */
  updateLocationFsxOpenZfs(
    args: UpdateLocationFsxOpenZfsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationFsxOpenZfsCommandOutput>;
  updateLocationFsxOpenZfs(
    args: UpdateLocationFsxOpenZfsCommandInput,
    cb: (err: any, data?: UpdateLocationFsxOpenZfsCommandOutput) => void
  ): void;
  updateLocationFsxOpenZfs(
    args: UpdateLocationFsxOpenZfsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationFsxOpenZfsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLocationFsxWindowsCommand}
   */
  updateLocationFsxWindows(
    args: UpdateLocationFsxWindowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationFsxWindowsCommandOutput>;
  updateLocationFsxWindows(
    args: UpdateLocationFsxWindowsCommandInput,
    cb: (err: any, data?: UpdateLocationFsxWindowsCommandOutput) => void
  ): void;
  updateLocationFsxWindows(
    args: UpdateLocationFsxWindowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationFsxWindowsCommandOutput) => void
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
   * @see {@link UpdateLocationS3Command}
   */
  updateLocationS3(
    args: UpdateLocationS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLocationS3CommandOutput>;
  updateLocationS3(
    args: UpdateLocationS3CommandInput,
    cb: (err: any, data?: UpdateLocationS3CommandOutput) => void
  ): void;
  updateLocationS3(
    args: UpdateLocationS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLocationS3CommandOutput) => void
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
   * @see {@link UpdateTaskCommand}
   */
  updateTask(
    args: UpdateTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTaskCommandOutput>;
  updateTask(
    args: UpdateTaskCommandInput,
    cb: (err: any, data?: UpdateTaskCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListAgentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentsCommandOutput}.
   */
  paginateListAgents(
    args?: ListAgentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentsCommandOutput>;

  /**
   * @see {@link ListLocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLocationsCommandOutput}.
   */
  paginateListLocations(
    args?: ListLocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLocationsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTaskExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTaskExecutionsCommandOutput}.
   */
  paginateListTaskExecutions(
    args?: ListTaskExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTaskExecutionsCommandOutput>;

  /**
   * @see {@link ListTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTasksCommandOutput}.
   */
  paginateListTasks(
    args?: ListTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTasksCommandOutput>;
}

/**
 * <fullname>DataSync</fullname>
 *          <p>DataSync is an online data movement service that simplifies data
 *       migration and helps you quickly, easily, and securely transfer your file or object data to,
 *       from, and between Amazon Web Services storage services.</p>
 *          <p>This API interface reference includes documentation for using DataSync
 *       programmatically. For complete information, see the <i>
 *                <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User
 *           Guide</a>
 *             </i>.</p>
 * @public
 */
export class DataSync extends DataSyncClient implements DataSync {}
createAggregatedClient(commands, DataSync, { paginators });
