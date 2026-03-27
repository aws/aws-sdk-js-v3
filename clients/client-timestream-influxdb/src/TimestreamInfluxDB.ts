// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

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
import { paginateListDbClusters } from "./pagination/ListDbClustersPaginator";
import { paginateListDbInstancesForCluster } from "./pagination/ListDbInstancesForClusterPaginator";
import { paginateListDbInstances } from "./pagination/ListDbInstancesPaginator";
import { paginateListDbParameterGroups } from "./pagination/ListDbParameterGroupsPaginator";
import { TimestreamInfluxDBClient } from "./TimestreamInfluxDBClient";

const commands = {
  CreateDbClusterCommand,
  CreateDbInstanceCommand,
  CreateDbParameterGroupCommand,
  DeleteDbClusterCommand,
  DeleteDbInstanceCommand,
  GetDbClusterCommand,
  GetDbInstanceCommand,
  GetDbParameterGroupCommand,
  ListDbClustersCommand,
  ListDbInstancesCommand,
  ListDbInstancesForClusterCommand,
  ListDbParameterGroupsCommand,
  ListTagsForResourceCommand,
  RebootDbClusterCommand,
  RebootDbInstanceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
};
const paginators = {
  paginateListDbClusters,
  paginateListDbInstances,
  paginateListDbInstancesForCluster,
  paginateListDbParameterGroups,
};

export interface TimestreamInfluxDB {
  /**
   * @see {@link CreateDbClusterCommand}
   */
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDbClusterCommandOutput>;
  createDbCluster(
    args: CreateDbClusterCommandInput,
    cb: (err: any, data?: CreateDbClusterCommandOutput) => void
  ): void;
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDbInstanceCommand}
   */
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDbInstanceCommandOutput>;
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    cb: (err: any, data?: CreateDbInstanceCommandOutput) => void
  ): void;
  createDbInstance(
    args: CreateDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDbParameterGroupCommand}
   */
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDbParameterGroupCommandOutput>;
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    cb: (err: any, data?: CreateDbParameterGroupCommandOutput) => void
  ): void;
  createDbParameterGroup(
    args: CreateDbParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDbParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDbClusterCommand}
   */
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDbClusterCommandOutput>;
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    cb: (err: any, data?: DeleteDbClusterCommandOutput) => void
  ): void;
  deleteDbCluster(
    args: DeleteDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDbInstanceCommand}
   */
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDbInstanceCommandOutput>;
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    cb: (err: any, data?: DeleteDbInstanceCommandOutput) => void
  ): void;
  deleteDbInstance(
    args: DeleteDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbClusterCommand}
   */
  getDbCluster(
    args: GetDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDbClusterCommandOutput>;
  getDbCluster(
    args: GetDbClusterCommandInput,
    cb: (err: any, data?: GetDbClusterCommandOutput) => void
  ): void;
  getDbCluster(
    args: GetDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbInstanceCommand}
   */
  getDbInstance(
    args: GetDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDbInstanceCommandOutput>;
  getDbInstance(
    args: GetDbInstanceCommandInput,
    cb: (err: any, data?: GetDbInstanceCommandOutput) => void
  ): void;
  getDbInstance(
    args: GetDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbParameterGroupCommand}
   */
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDbParameterGroupCommandOutput>;
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    cb: (err: any, data?: GetDbParameterGroupCommandOutput) => void
  ): void;
  getDbParameterGroup(
    args: GetDbParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbClustersCommand}
   */
  listDbClusters(): Promise<ListDbClustersCommandOutput>;
  listDbClusters(
    args: ListDbClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbClustersCommandOutput>;
  listDbClusters(
    args: ListDbClustersCommandInput,
    cb: (err: any, data?: ListDbClustersCommandOutput) => void
  ): void;
  listDbClusters(
    args: ListDbClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbInstancesCommand}
   */
  listDbInstances(): Promise<ListDbInstancesCommandOutput>;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbInstancesCommandOutput>;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    cb: (err: any, data?: ListDbInstancesCommandOutput) => void
  ): void;
  listDbInstances(
    args: ListDbInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbInstancesForClusterCommand}
   */
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbInstancesForClusterCommandOutput>;
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    cb: (err: any, data?: ListDbInstancesForClusterCommandOutput) => void
  ): void;
  listDbInstancesForCluster(
    args: ListDbInstancesForClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbInstancesForClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDbParameterGroupsCommand}
   */
  listDbParameterGroups(): Promise<ListDbParameterGroupsCommandOutput>;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDbParameterGroupsCommandOutput>;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    cb: (err: any, data?: ListDbParameterGroupsCommandOutput) => void
  ): void;
  listDbParameterGroups(
    args: ListDbParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDbParameterGroupsCommandOutput) => void
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
   * @see {@link RebootDbClusterCommand}
   */
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDbClusterCommandOutput>;
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    cb: (err: any, data?: RebootDbClusterCommandOutput) => void
  ): void;
  rebootDbCluster(
    args: RebootDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDbInstanceCommand}
   */
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDbInstanceCommandOutput>;
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    cb: (err: any, data?: RebootDbInstanceCommandOutput) => void
  ): void;
  rebootDbInstance(
    args: RebootDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDbInstanceCommandOutput) => void
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
   * @see {@link UpdateDbClusterCommand}
   */
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDbClusterCommandOutput>;
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    cb: (err: any, data?: UpdateDbClusterCommandOutput) => void
  ): void;
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDbInstanceCommand}
   */
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDbInstanceCommandOutput>;
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    cb: (err: any, data?: UpdateDbInstanceCommandOutput) => void
  ): void;
  updateDbInstance(
    args: UpdateDbInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDbInstanceCommandOutput) => void
  ): void;

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
