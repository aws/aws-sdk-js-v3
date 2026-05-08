// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateAccessPointCommandInput,
  type CreateAccessPointCommandOutput,
  CreateAccessPointCommand,
} from "./commands/CreateAccessPointCommand";
import {
  type CreateFileSystemCommandInput,
  type CreateFileSystemCommandOutput,
  CreateFileSystemCommand,
} from "./commands/CreateFileSystemCommand";
import {
  type CreateMountTargetCommandInput,
  type CreateMountTargetCommandOutput,
  CreateMountTargetCommand,
} from "./commands/CreateMountTargetCommand";
import {
  type DeleteAccessPointCommandInput,
  type DeleteAccessPointCommandOutput,
  DeleteAccessPointCommand,
} from "./commands/DeleteAccessPointCommand";
import {
  type DeleteFileSystemCommandInput,
  type DeleteFileSystemCommandOutput,
  DeleteFileSystemCommand,
} from "./commands/DeleteFileSystemCommand";
import {
  type DeleteFileSystemPolicyCommandInput,
  type DeleteFileSystemPolicyCommandOutput,
  DeleteFileSystemPolicyCommand,
} from "./commands/DeleteFileSystemPolicyCommand";
import {
  type DeleteMountTargetCommandInput,
  type DeleteMountTargetCommandOutput,
  DeleteMountTargetCommand,
} from "./commands/DeleteMountTargetCommand";
import {
  type GetAccessPointCommandInput,
  type GetAccessPointCommandOutput,
  GetAccessPointCommand,
} from "./commands/GetAccessPointCommand";
import {
  type GetFileSystemCommandInput,
  type GetFileSystemCommandOutput,
  GetFileSystemCommand,
} from "./commands/GetFileSystemCommand";
import {
  type GetFileSystemPolicyCommandInput,
  type GetFileSystemPolicyCommandOutput,
  GetFileSystemPolicyCommand,
} from "./commands/GetFileSystemPolicyCommand";
import {
  type GetMountTargetCommandInput,
  type GetMountTargetCommandOutput,
  GetMountTargetCommand,
} from "./commands/GetMountTargetCommand";
import {
  type GetSynchronizationConfigurationCommandInput,
  type GetSynchronizationConfigurationCommandOutput,
  GetSynchronizationConfigurationCommand,
} from "./commands/GetSynchronizationConfigurationCommand";
import {
  type ListAccessPointsCommandInput,
  type ListAccessPointsCommandOutput,
  ListAccessPointsCommand,
} from "./commands/ListAccessPointsCommand";
import {
  type ListFileSystemsCommandInput,
  type ListFileSystemsCommandOutput,
  ListFileSystemsCommand,
} from "./commands/ListFileSystemsCommand";
import {
  type ListMountTargetsCommandInput,
  type ListMountTargetsCommandOutput,
  ListMountTargetsCommand,
} from "./commands/ListMountTargetsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutFileSystemPolicyCommandInput,
  type PutFileSystemPolicyCommandOutput,
  PutFileSystemPolicyCommand,
} from "./commands/PutFileSystemPolicyCommand";
import {
  type PutSynchronizationConfigurationCommandInput,
  type PutSynchronizationConfigurationCommandOutput,
  PutSynchronizationConfigurationCommand,
} from "./commands/PutSynchronizationConfigurationCommand";
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
  type UpdateMountTargetCommandInput,
  type UpdateMountTargetCommandOutput,
  UpdateMountTargetCommand,
} from "./commands/UpdateMountTargetCommand";
import { paginateListAccessPoints } from "./pagination/ListAccessPointsPaginator";
import { paginateListFileSystems } from "./pagination/ListFileSystemsPaginator";
import { paginateListMountTargets } from "./pagination/ListMountTargetsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { S3FilesClient } from "./S3FilesClient";

const commands = {
  CreateAccessPointCommand,
  CreateFileSystemCommand,
  CreateMountTargetCommand,
  DeleteAccessPointCommand,
  DeleteFileSystemCommand,
  DeleteFileSystemPolicyCommand,
  DeleteMountTargetCommand,
  GetAccessPointCommand,
  GetFileSystemCommand,
  GetFileSystemPolicyCommand,
  GetMountTargetCommand,
  GetSynchronizationConfigurationCommand,
  ListAccessPointsCommand,
  ListFileSystemsCommand,
  ListMountTargetsCommand,
  ListTagsForResourceCommand,
  PutFileSystemPolicyCommand,
  PutSynchronizationConfigurationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMountTargetCommand,
};
const paginators = {
  paginateListAccessPoints,
  paginateListFileSystems,
  paginateListMountTargets,
  paginateListTagsForResource,
};

export interface S3Files {
  /**
   * @see {@link CreateAccessPointCommand}
   */
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFileSystemCommand}
   */
  createFileSystem(
    args: CreateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemCommandOutput>;
  createFileSystem(
    args: CreateFileSystemCommandInput,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  createFileSystem(
    args: CreateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMountTargetCommand}
   */
  createMountTarget(
    args: CreateMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMountTargetCommandOutput>;
  createMountTarget(
    args: CreateMountTargetCommandInput,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;
  createMountTarget(
    args: CreateMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointCommand}
   */
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileSystemCommand}
   */
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemCommandOutput>;
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileSystemPolicyCommand}
   */
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemPolicyCommandOutput>;
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMountTargetCommand}
   */
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMountTargetCommandOutput>;
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPointCommand}
   */
  getAccessPoint(
    args: GetAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointCommandOutput>;
  getAccessPoint(
    args: GetAccessPointCommandInput,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  getAccessPoint(
    args: GetAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFileSystemCommand}
   */
  getFileSystem(
    args: GetFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFileSystemCommandOutput>;
  getFileSystem(
    args: GetFileSystemCommandInput,
    cb: (err: any, data?: GetFileSystemCommandOutput) => void
  ): void;
  getFileSystem(
    args: GetFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFileSystemPolicyCommand}
   */
  getFileSystemPolicy(
    args: GetFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFileSystemPolicyCommandOutput>;
  getFileSystemPolicy(
    args: GetFileSystemPolicyCommandInput,
    cb: (err: any, data?: GetFileSystemPolicyCommandOutput) => void
  ): void;
  getFileSystemPolicy(
    args: GetFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMountTargetCommand}
   */
  getMountTarget(
    args: GetMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMountTargetCommandOutput>;
  getMountTarget(
    args: GetMountTargetCommandInput,
    cb: (err: any, data?: GetMountTargetCommandOutput) => void
  ): void;
  getMountTarget(
    args: GetMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSynchronizationConfigurationCommand}
   */
  getSynchronizationConfiguration(
    args: GetSynchronizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSynchronizationConfigurationCommandOutput>;
  getSynchronizationConfiguration(
    args: GetSynchronizationConfigurationCommandInput,
    cb: (err: any, data?: GetSynchronizationConfigurationCommandOutput) => void
  ): void;
  getSynchronizationConfiguration(
    args: GetSynchronizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSynchronizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPointsCommand}
   */
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsCommandOutput>;
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  listAccessPoints(
    args: ListAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFileSystemsCommand}
   */
  listFileSystems(): Promise<ListFileSystemsCommandOutput>;
  listFileSystems(
    args: ListFileSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFileSystemsCommandOutput>;
  listFileSystems(
    args: ListFileSystemsCommandInput,
    cb: (err: any, data?: ListFileSystemsCommandOutput) => void
  ): void;
  listFileSystems(
    args: ListFileSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFileSystemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMountTargetsCommand}
   */
  listMountTargets(): Promise<ListMountTargetsCommandOutput>;
  listMountTargets(
    args: ListMountTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMountTargetsCommandOutput>;
  listMountTargets(
    args: ListMountTargetsCommandInput,
    cb: (err: any, data?: ListMountTargetsCommandOutput) => void
  ): void;
  listMountTargets(
    args: ListMountTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMountTargetsCommandOutput) => void
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
   * @see {@link PutFileSystemPolicyCommand}
   */
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFileSystemPolicyCommandOutput>;
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSynchronizationConfigurationCommand}
   */
  putSynchronizationConfiguration(
    args: PutSynchronizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSynchronizationConfigurationCommandOutput>;
  putSynchronizationConfiguration(
    args: PutSynchronizationConfigurationCommandInput,
    cb: (err: any, data?: PutSynchronizationConfigurationCommandOutput) => void
  ): void;
  putSynchronizationConfiguration(
    args: PutSynchronizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSynchronizationConfigurationCommandOutput) => void
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
   * @see {@link UpdateMountTargetCommand}
   */
  updateMountTarget(
    args: UpdateMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMountTargetCommandOutput>;
  updateMountTarget(
    args: UpdateMountTargetCommandInput,
    cb: (err: any, data?: UpdateMountTargetCommandOutput) => void
  ): void;
  updateMountTarget(
    args: UpdateMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPointsCommandOutput}.
   */
  paginateListAccessPoints(
    args: ListAccessPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPointsCommandOutput>;

  /**
   * @see {@link ListFileSystemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFileSystemsCommandOutput}.
   */
  paginateListFileSystems(
    args?: ListFileSystemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFileSystemsCommandOutput>;

  /**
   * @see {@link ListMountTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMountTargetsCommandOutput}.
   */
  paginateListMountTargets(
    args?: ListMountTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMountTargetsCommandOutput>;

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
}

/**
 * <p>S3 Files makes S3 buckets accessible as high-performance file systems powered by EFS. This service enables file system interface access to S3 data with sub-millisecond latencies through mount targets, supporting AI/ML workloads, media processing, and hybrid storage workflows that require both file system and object storage access to the same data.</p>
 * @public
 */
export class S3Files extends S3FilesClient implements S3Files {}
createAggregatedClient(commands, S3Files, { paginators });
