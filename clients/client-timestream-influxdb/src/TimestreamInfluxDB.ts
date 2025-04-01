// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateDbClusterCommand,
  CreateDbClusterCommandInput,
  CreateDbClusterCommandOutput,
} from "./commands/CreateDbClusterCommand";
import {
  CreateDbInstanceCommand,
  CreateDbInstanceCommandInput,
  CreateDbInstanceCommandOutput,
} from "./commands/CreateDbInstanceCommand";
import {
  CreateDbParameterGroupCommand,
  CreateDbParameterGroupCommandInput,
  CreateDbParameterGroupCommandOutput,
} from "./commands/CreateDbParameterGroupCommand";
import {
  DeleteDbClusterCommand,
  DeleteDbClusterCommandInput,
  DeleteDbClusterCommandOutput,
} from "./commands/DeleteDbClusterCommand";
import {
  DeleteDbInstanceCommand,
  DeleteDbInstanceCommandInput,
  DeleteDbInstanceCommandOutput,
} from "./commands/DeleteDbInstanceCommand";
import {
  GetDbClusterCommand,
  GetDbClusterCommandInput,
  GetDbClusterCommandOutput,
} from "./commands/GetDbClusterCommand";
import {
  GetDbInstanceCommand,
  GetDbInstanceCommandInput,
  GetDbInstanceCommandOutput,
} from "./commands/GetDbInstanceCommand";
import {
  GetDbParameterGroupCommand,
  GetDbParameterGroupCommandInput,
  GetDbParameterGroupCommandOutput,
} from "./commands/GetDbParameterGroupCommand";
import {
  ListDbClustersCommand,
  ListDbClustersCommandInput,
  ListDbClustersCommandOutput,
} from "./commands/ListDbClustersCommand";
import {
  ListDbInstancesCommand,
  ListDbInstancesCommandInput,
  ListDbInstancesCommandOutput,
} from "./commands/ListDbInstancesCommand";
import {
  ListDbInstancesForClusterCommand,
  ListDbInstancesForClusterCommandInput,
  ListDbInstancesForClusterCommandOutput,
} from "./commands/ListDbInstancesForClusterCommand";
import {
  ListDbParameterGroupsCommand,
  ListDbParameterGroupsCommandInput,
  ListDbParameterGroupsCommandOutput,
} from "./commands/ListDbParameterGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDbClusterCommand,
  UpdateDbClusterCommandInput,
  UpdateDbClusterCommandOutput,
} from "./commands/UpdateDbClusterCommand";
import {
  UpdateDbInstanceCommand,
  UpdateDbInstanceCommandInput,
  UpdateDbInstanceCommandOutput,
} from "./commands/UpdateDbInstanceCommand";
import { TimestreamInfluxDBClient, TimestreamInfluxDBClientConfig } from "./TimestreamInfluxDBClient";

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
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDbClusterCommand,
  UpdateDbInstanceCommand,
};

export interface TimestreamInfluxDB {
  /**
   * @see {@link CreateDbClusterCommand}
   */
  createDbCluster(
    args: CreateDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDbClusterCommandOutput>;
  createDbCluster(args: CreateDbClusterCommandInput, cb: (err: any, data?: CreateDbClusterCommandOutput) => void): void;
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
  deleteDbCluster(args: DeleteDbClusterCommandInput, cb: (err: any, data?: DeleteDbClusterCommandOutput) => void): void;
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
  getDbCluster(args: GetDbClusterCommandInput, options?: __HttpHandlerOptions): Promise<GetDbClusterCommandOutput>;
  getDbCluster(args: GetDbClusterCommandInput, cb: (err: any, data?: GetDbClusterCommandOutput) => void): void;
  getDbCluster(
    args: GetDbClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDbClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDbInstanceCommand}
   */
  getDbInstance(args: GetDbInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetDbInstanceCommandOutput>;
  getDbInstance(args: GetDbInstanceCommandInput, cb: (err: any, data?: GetDbInstanceCommandOutput) => void): void;
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
  listDbClusters(args: ListDbClustersCommandInput, cb: (err: any, data?: ListDbClustersCommandOutput) => void): void;
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
  listDbInstances(args: ListDbInstancesCommandInput, cb: (err: any, data?: ListDbInstancesCommandOutput) => void): void;
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
   * @see {@link UpdateDbClusterCommand}
   */
  updateDbCluster(
    args: UpdateDbClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDbClusterCommandOutput>;
  updateDbCluster(args: UpdateDbClusterCommandInput, cb: (err: any, data?: UpdateDbClusterCommandOutput) => void): void;
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
}

/**
 * <p>Amazon Timestream for InfluxDB is a managed time-series database engine that makes it
 *             easy for application developers and DevOps teams to run InfluxDB databases on Amazon Web Services for near real-time time-series applications using open-source APIs. With Amazon Timestream for InfluxDB, it is easy to set up, operate, and scale time-series workloads that can answer queries with single-digit millisecond query response time.</p>
 * @public
 */
export class TimestreamInfluxDB extends TimestreamInfluxDBClient implements TimestreamInfluxDB {}
createAggregatedClient(commands, TimestreamInfluxDB);
