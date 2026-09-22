// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateDbBackupCommandInput,
  type CreateDbBackupCommandOutput,
  CreateDbBackupCommand,
} from "./commands/CreateDbBackupCommand";
import {
  type CreateDbClusterCommandInput,
  type CreateDbClusterCommandOutput,
  CreateDbClusterCommand,
} from "./commands/CreateDbClusterCommand";
import {
  type CreateDbInstanceCommandInput,
  type CreateDbInstanceCommandOutput,
  CreateDbInstanceCommand,
} from "./commands/CreateDbInstanceCommand";
import {
  type CreateDbParameterGroupCommandInput,
  type CreateDbParameterGroupCommandOutput,
  CreateDbParameterGroupCommand,
} from "./commands/CreateDbParameterGroupCommand";
import {
  type DeleteDbBackupCommandInput,
  type DeleteDbBackupCommandOutput,
  DeleteDbBackupCommand,
} from "./commands/DeleteDbBackupCommand";
import {
  type DeleteDbClusterCommandInput,
  type DeleteDbClusterCommandOutput,
  DeleteDbClusterCommand,
} from "./commands/DeleteDbClusterCommand";
import {
  type DeleteDbInstanceCommandInput,
  type DeleteDbInstanceCommandOutput,
  DeleteDbInstanceCommand,
} from "./commands/DeleteDbInstanceCommand";
import {
  type GetDbBackupCommandInput,
  type GetDbBackupCommandOutput,
  GetDbBackupCommand,
} from "./commands/GetDbBackupCommand";
import {
  type GetDbClusterCommandInput,
  type GetDbClusterCommandOutput,
  GetDbClusterCommand,
} from "./commands/GetDbClusterCommand";
import {
  type GetDbInstanceCommandInput,
  type GetDbInstanceCommandOutput,
  GetDbInstanceCommand,
} from "./commands/GetDbInstanceCommand";
import {
  type GetDbParameterGroupCommandInput,
  type GetDbParameterGroupCommandOutput,
  GetDbParameterGroupCommand,
} from "./commands/GetDbParameterGroupCommand";
import {
  type ListDbBackupsCommandInput,
  type ListDbBackupsCommandOutput,
  ListDbBackupsCommand,
} from "./commands/ListDbBackupsCommand";
import {
  type ListDbClustersCommandInput,
  type ListDbClustersCommandOutput,
  ListDbClustersCommand,
} from "./commands/ListDbClustersCommand";
import {
  type ListDbInstancesCommandInput,
  type ListDbInstancesCommandOutput,
  ListDbInstancesCommand,
} from "./commands/ListDbInstancesCommand";
import {
  type ListDbInstancesForClusterCommandInput,
  type ListDbInstancesForClusterCommandOutput,
  ListDbInstancesForClusterCommand,
} from "./commands/ListDbInstancesForClusterCommand";
import {
  type ListDbParameterGroupsCommandInput,
  type ListDbParameterGroupsCommandOutput,
  ListDbParameterGroupsCommand,
} from "./commands/ListDbParameterGroupsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RebootDbClusterCommandInput,
  type RebootDbClusterCommandOutput,
  RebootDbClusterCommand,
} from "./commands/RebootDbClusterCommand";
import {
  type RebootDbInstanceCommandInput,
  type RebootDbInstanceCommandOutput,
  RebootDbInstanceCommand,
} from "./commands/RebootDbInstanceCommand";
import {
  type RestoreFromDbBackupCommandInput,
  type RestoreFromDbBackupCommandOutput,
  RestoreFromDbBackupCommand,
} from "./commands/RestoreFromDbBackupCommand";
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
  type UpdateDbClusterCommandInput,
  type UpdateDbClusterCommandOutput,
  UpdateDbClusterCommand,
} from "./commands/UpdateDbClusterCommand";
import {
  type UpdateDbInstanceCommandInput,
  type UpdateDbInstanceCommandOutput,
  UpdateDbInstanceCommand,
} from "./commands/UpdateDbInstanceCommand";
import { paginateListDbBackups } from "./pagination/ListDbBackupsPaginator";
import { paginateListDbClusters } from "./pagination/ListDbClustersPaginator";
import { paginateListDbInstancesForCluster } from "./pagination/ListDbInstancesForClusterPaginator";
import { paginateListDbInstances } from "./pagination/ListDbInstancesPaginator";
import { paginateListDbParameterGroups } from "./pagination/ListDbParameterGroupsPaginator";
import { TimestreamInfluxDBClient } from "./TimestreamInfluxDBClient";

const commands = {
  CreateDbBackupCommand,
  CreateDbClusterCommand,
  CreateDbInstanceCommand,
  CreateDbParameterGroupCommand,
  DeleteDbBackupCommand,
  DeleteDbClusterCommand,
  DeleteDbInstanceCommand,
  GetDbBackupCommand,
  GetDbClusterCommand,
  GetDbInstanceCommand,
  GetDbParameterGroupCommand,
  ListDbBackupsCommand,
  ListDbClustersCommand,
  ListDbInstancesCommand,
  ListDbInstancesForClusterCommand,
  ListDbParameterGroupsCommand,
  ListTagsForResourceCommand,
  RebootDbClusterCommand,
  RebootDbInstanceCommand,
  RestoreFromDbBackupCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
};
const paginators = {
  paginateListDbBackups,
  paginateListDbClusters,
  paginateListDbInstances,
  paginateListDbInstancesForCluster,
  paginateListDbParameterGroups,
};

/**
 * @public
 */
export interface TimestreamInfluxDBRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface TimestreamInfluxDB {
  /**
   * @see {@link CreateDbBackupCommand}
   */
  createDbBackup(
    args: CreateDbBackupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<CreateDbBackupCommandOutput>;
  createDbBackup(
    args: CreateDbBackupCommandInput,
    cb: (err: any, data?: CreateDbBackupCommandOutput) => void
  ): void;
  createDbBackup(
    args: CreateDbBackupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: CreateDbBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDbClusterCommand}
   */
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<CreateDbClusterCommandOutput>;
  createDbCluster(
    args: CreateDbClusterCommandInput,
    cb: (err: any, data?: CreateDbClusterCommandOutput) => void
  ): void;
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: CreateDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDbInstanceCommand}
   */
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<CreateDbInstanceCommandOutput>;
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    cb: (err: any, data?: CreateDbInstanceCommandOutput) => void
  ): void;
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: CreateDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDbParameterGroupCommand}
   */
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<CreateDbParameterGroupCommandOutput>;
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    cb: (err: any, data?: CreateDbParameterGroupCommandOutput) => void
  ): void;
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: CreateDbParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDbBackupCommand}
   */
  deleteDbBackup(
    args: DeleteDbBackupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<DeleteDbBackupCommandOutput>;
  deleteDbBackup(
    args: DeleteDbBackupCommandInput,
    cb: (err: any, data?: DeleteDbBackupCommandOutput) => void
  ): void;
  deleteDbBackup(
    args: DeleteDbBackupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: DeleteDbBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDbClusterCommand}
   */
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<DeleteDbClusterCommandOutput>;
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    cb: (err: any, data?: DeleteDbClusterCommandOutput) => void
  ): void;
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: DeleteDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDbInstanceCommand}
   */
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<DeleteDbInstanceCommandOutput>;
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    cb: (err: any, data?: DeleteDbInstanceCommandOutput) => void
  ): void;
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: DeleteDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbBackupCommand}
   */
  getDbBackup(
    args: GetDbBackupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<GetDbBackupCommandOutput>;
  getDbBackup(
    args: GetDbBackupCommandInput,
    cb: (err: any, data?: GetDbBackupCommandOutput) => void
  ): void;
  getDbBackup(
    args: GetDbBackupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: GetDbBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbClusterCommand}
   */
  getDbCluster(
    args: GetDbClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<GetDbClusterCommandOutput>;
  getDbCluster(
    args: GetDbClusterCommandInput,
    cb: (err: any, data?: GetDbClusterCommandOutput) => void
  ): void;
  getDbCluster(
    args: GetDbClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: GetDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbInstanceCommand}
   */
  getDbInstance(
    args: GetDbInstanceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<GetDbInstanceCommandOutput>;
  getDbInstance(
    args: GetDbInstanceCommandInput,
    cb: (err: any, data?: GetDbInstanceCommandOutput) => void
  ): void;
  getDbInstance(
    args: GetDbInstanceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: GetDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbParameterGroupCommand}
   */
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<GetDbParameterGroupCommandOutput>;
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    cb: (err: any, data?: GetDbParameterGroupCommandOutput) => void
  ): void;
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: GetDbParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbBackupsCommand}
   */
  listDbBackups(): Promise<ListDbBackupsCommandOutput>;
  listDbBackups(
    args: ListDbBackupsCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListDbBackupsCommandOutput>;
  listDbBackups(
    args: ListDbBackupsCommandInput,
    cb: (err: any, data?: ListDbBackupsCommandOutput) => void
  ): void;
  listDbBackups(
    args: ListDbBackupsCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListDbBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbClustersCommand}
   */
  listDbClusters(): Promise<ListDbClustersCommandOutput>;
  listDbClusters(
    args: ListDbClustersCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListDbClustersCommandOutput>;
  listDbClusters(
    args: ListDbClustersCommandInput,
    cb: (err: any, data?: ListDbClustersCommandOutput) => void
  ): void;
  listDbClusters(
    args: ListDbClustersCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListDbClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbInstancesCommand}
   */
  listDbInstances(): Promise<ListDbInstancesCommandOutput>;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListDbInstancesCommandOutput>;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    cb: (err: any, data?: ListDbInstancesCommandOutput) => void
  ): void;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListDbInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbInstancesForClusterCommand}
   */
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListDbInstancesForClusterCommandOutput>;
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    cb: (err: any, data?: ListDbInstancesForClusterCommandOutput) => void
  ): void;
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListDbInstancesForClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbParameterGroupsCommand}
   */
  listDbParameterGroups(): Promise<ListDbParameterGroupsCommandOutput>;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListDbParameterGroupsCommandOutput>;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    cb: (err: any, data?: ListDbParameterGroupsCommandOutput) => void
  ): void;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListDbParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDbClusterCommand}
   */
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<RebootDbClusterCommandOutput>;
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    cb: (err: any, data?: RebootDbClusterCommandOutput) => void
  ): void;
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: RebootDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDbInstanceCommand}
   */
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<RebootDbInstanceCommandOutput>;
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    cb: (err: any, data?: RebootDbInstanceCommandOutput) => void
  ): void;
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: RebootDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFromDbBackupCommand}
   */
  restoreFromDbBackup(
    args: RestoreFromDbBackupCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<RestoreFromDbBackupCommandOutput>;
  restoreFromDbBackup(
    args: RestoreFromDbBackupCommandInput,
    cb: (err: any, data?: RestoreFromDbBackupCommandOutput) => void
  ): void;
  restoreFromDbBackup(
    args: RestoreFromDbBackupCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: RestoreFromDbBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDbClusterCommand}
   */
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<UpdateDbClusterCommandOutput>;
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    cb: (err: any, data?: UpdateDbClusterCommandOutput) => void
  ): void;
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: UpdateDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDbInstanceCommand}
   */
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    options?: TimestreamInfluxDBRequestOptions
  ): Promise<UpdateDbInstanceCommandOutput>;
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    cb: (err: any, data?: UpdateDbInstanceCommandOutput) => void
  ): void;
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    options: TimestreamInfluxDBRequestOptions,
    cb: (err: any, data?: UpdateDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbBackupsCommandOutput}.
   */
  paginateListDbBackups(
    args?: ListDbBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbBackupsCommandOutput>;

  /**
   * @see {@link ListDbClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbClustersCommandOutput}.
   */
  paginateListDbClusters(
    args?: ListDbClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbClustersCommandOutput>;

  /**
   * @see {@link ListDbInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbInstancesCommandOutput}.
   */
  paginateListDbInstances(
    args?: ListDbInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbInstancesCommandOutput>;

  /**
   * @see {@link ListDbInstancesForClusterCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbInstancesForClusterCommandOutput}.
   */
  paginateListDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbInstancesForClusterCommandOutput>;

  /**
   * @see {@link ListDbParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDbParameterGroupsCommandOutput}.
   */
  paginateListDbParameterGroups(
    args?: ListDbParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDbParameterGroupsCommandOutput>;
}

/**
 * <p>Amazon Timestream for InfluxDB is a managed time-series database engine that makes it
 *             easy for application developers and DevOps teams to run InfluxDB databases on Amazon Web Services for near real-time time-series applications using open-source APIs. With Amazon Timestream for InfluxDB, it is easy to set up, operate, and scale time-series workloads that can answer queries with single-digit millisecond query response time.</p>
 * @public
 */
export class TimestreamInfluxDB extends TimestreamInfluxDBClient implements TimestreamInfluxDB {}
createAggregatedClient(commands, TimestreamInfluxDB, { paginators });
