// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreateKxChangesetCommandInput,
  type CreateKxChangesetCommandOutput,
  CreateKxChangesetCommand,
} from "./commands/CreateKxChangesetCommand";
import {
  type CreateKxClusterCommandInput,
  type CreateKxClusterCommandOutput,
  CreateKxClusterCommand,
} from "./commands/CreateKxClusterCommand";
import {
  type CreateKxDatabaseCommandInput,
  type CreateKxDatabaseCommandOutput,
  CreateKxDatabaseCommand,
} from "./commands/CreateKxDatabaseCommand";
import {
  type CreateKxDataviewCommandInput,
  type CreateKxDataviewCommandOutput,
  CreateKxDataviewCommand,
} from "./commands/CreateKxDataviewCommand";
import {
  type CreateKxEnvironmentCommandInput,
  type CreateKxEnvironmentCommandOutput,
  CreateKxEnvironmentCommand,
} from "./commands/CreateKxEnvironmentCommand";
import {
  type CreateKxScalingGroupCommandInput,
  type CreateKxScalingGroupCommandOutput,
  CreateKxScalingGroupCommand,
} from "./commands/CreateKxScalingGroupCommand";
import {
  type CreateKxUserCommandInput,
  type CreateKxUserCommandOutput,
  CreateKxUserCommand,
} from "./commands/CreateKxUserCommand";
import {
  type CreateKxVolumeCommandInput,
  type CreateKxVolumeCommandOutput,
  CreateKxVolumeCommand,
} from "./commands/CreateKxVolumeCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeleteKxClusterCommandInput,
  type DeleteKxClusterCommandOutput,
  DeleteKxClusterCommand,
} from "./commands/DeleteKxClusterCommand";
import {
  type DeleteKxClusterNodeCommandInput,
  type DeleteKxClusterNodeCommandOutput,
  DeleteKxClusterNodeCommand,
} from "./commands/DeleteKxClusterNodeCommand";
import {
  type DeleteKxDatabaseCommandInput,
  type DeleteKxDatabaseCommandOutput,
  DeleteKxDatabaseCommand,
} from "./commands/DeleteKxDatabaseCommand";
import {
  type DeleteKxDataviewCommandInput,
  type DeleteKxDataviewCommandOutput,
  DeleteKxDataviewCommand,
} from "./commands/DeleteKxDataviewCommand";
import {
  type DeleteKxEnvironmentCommandInput,
  type DeleteKxEnvironmentCommandOutput,
  DeleteKxEnvironmentCommand,
} from "./commands/DeleteKxEnvironmentCommand";
import {
  type DeleteKxScalingGroupCommandInput,
  type DeleteKxScalingGroupCommandOutput,
  DeleteKxScalingGroupCommand,
} from "./commands/DeleteKxScalingGroupCommand";
import {
  type DeleteKxUserCommandInput,
  type DeleteKxUserCommandOutput,
  DeleteKxUserCommand,
} from "./commands/DeleteKxUserCommand";
import {
  type DeleteKxVolumeCommandInput,
  type DeleteKxVolumeCommandOutput,
  DeleteKxVolumeCommand,
} from "./commands/DeleteKxVolumeCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetKxChangesetCommandInput,
  type GetKxChangesetCommandOutput,
  GetKxChangesetCommand,
} from "./commands/GetKxChangesetCommand";
import {
  type GetKxClusterCommandInput,
  type GetKxClusterCommandOutput,
  GetKxClusterCommand,
} from "./commands/GetKxClusterCommand";
import {
  type GetKxConnectionStringCommandInput,
  type GetKxConnectionStringCommandOutput,
  GetKxConnectionStringCommand,
} from "./commands/GetKxConnectionStringCommand";
import {
  type GetKxDatabaseCommandInput,
  type GetKxDatabaseCommandOutput,
  GetKxDatabaseCommand,
} from "./commands/GetKxDatabaseCommand";
import {
  type GetKxDataviewCommandInput,
  type GetKxDataviewCommandOutput,
  GetKxDataviewCommand,
} from "./commands/GetKxDataviewCommand";
import {
  type GetKxEnvironmentCommandInput,
  type GetKxEnvironmentCommandOutput,
  GetKxEnvironmentCommand,
} from "./commands/GetKxEnvironmentCommand";
import {
  type GetKxScalingGroupCommandInput,
  type GetKxScalingGroupCommandOutput,
  GetKxScalingGroupCommand,
} from "./commands/GetKxScalingGroupCommand";
import { type GetKxUserCommandInput, type GetKxUserCommandOutput, GetKxUserCommand } from "./commands/GetKxUserCommand";
import {
  type GetKxVolumeCommandInput,
  type GetKxVolumeCommandOutput,
  GetKxVolumeCommand,
} from "./commands/GetKxVolumeCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListKxChangesetsCommandInput,
  type ListKxChangesetsCommandOutput,
  ListKxChangesetsCommand,
} from "./commands/ListKxChangesetsCommand";
import {
  type ListKxClusterNodesCommandInput,
  type ListKxClusterNodesCommandOutput,
  ListKxClusterNodesCommand,
} from "./commands/ListKxClusterNodesCommand";
import {
  type ListKxClustersCommandInput,
  type ListKxClustersCommandOutput,
  ListKxClustersCommand,
} from "./commands/ListKxClustersCommand";
import {
  type ListKxDatabasesCommandInput,
  type ListKxDatabasesCommandOutput,
  ListKxDatabasesCommand,
} from "./commands/ListKxDatabasesCommand";
import {
  type ListKxDataviewsCommandInput,
  type ListKxDataviewsCommandOutput,
  ListKxDataviewsCommand,
} from "./commands/ListKxDataviewsCommand";
import {
  type ListKxEnvironmentsCommandInput,
  type ListKxEnvironmentsCommandOutput,
  ListKxEnvironmentsCommand,
} from "./commands/ListKxEnvironmentsCommand";
import {
  type ListKxScalingGroupsCommandInput,
  type ListKxScalingGroupsCommandOutput,
  ListKxScalingGroupsCommand,
} from "./commands/ListKxScalingGroupsCommand";
import {
  type ListKxUsersCommandInput,
  type ListKxUsersCommandOutput,
  ListKxUsersCommand,
} from "./commands/ListKxUsersCommand";
import {
  type ListKxVolumesCommandInput,
  type ListKxVolumesCommandOutput,
  ListKxVolumesCommand,
} from "./commands/ListKxVolumesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateKxClusterCodeConfigurationCommandInput,
  type UpdateKxClusterCodeConfigurationCommandOutput,
  UpdateKxClusterCodeConfigurationCommand,
} from "./commands/UpdateKxClusterCodeConfigurationCommand";
import {
  type UpdateKxClusterDatabasesCommandInput,
  type UpdateKxClusterDatabasesCommandOutput,
  UpdateKxClusterDatabasesCommand,
} from "./commands/UpdateKxClusterDatabasesCommand";
import {
  type UpdateKxDatabaseCommandInput,
  type UpdateKxDatabaseCommandOutput,
  UpdateKxDatabaseCommand,
} from "./commands/UpdateKxDatabaseCommand";
import {
  type UpdateKxDataviewCommandInput,
  type UpdateKxDataviewCommandOutput,
  UpdateKxDataviewCommand,
} from "./commands/UpdateKxDataviewCommand";
import {
  type UpdateKxEnvironmentCommandInput,
  type UpdateKxEnvironmentCommandOutput,
  UpdateKxEnvironmentCommand,
} from "./commands/UpdateKxEnvironmentCommand";
import {
  type UpdateKxEnvironmentNetworkCommandInput,
  type UpdateKxEnvironmentNetworkCommandOutput,
  UpdateKxEnvironmentNetworkCommand,
} from "./commands/UpdateKxEnvironmentNetworkCommand";
import {
  type UpdateKxUserCommandInput,
  type UpdateKxUserCommandOutput,
  UpdateKxUserCommand,
} from "./commands/UpdateKxUserCommand";
import {
  type UpdateKxVolumeCommandInput,
  type UpdateKxVolumeCommandOutput,
  UpdateKxVolumeCommand,
} from "./commands/UpdateKxVolumeCommand";
import { FinspaceClient } from "./FinspaceClient";
import { paginateListKxChangesets } from "./pagination/ListKxChangesetsPaginator";
import { paginateListKxClusterNodes } from "./pagination/ListKxClusterNodesPaginator";
import { paginateListKxDatabases } from "./pagination/ListKxDatabasesPaginator";
import { paginateListKxDataviews } from "./pagination/ListKxDataviewsPaginator";
import { paginateListKxEnvironments } from "./pagination/ListKxEnvironmentsPaginator";
import { paginateListKxScalingGroups } from "./pagination/ListKxScalingGroupsPaginator";

const commands = {
  CreateEnvironmentCommand,
  CreateKxChangesetCommand,
  CreateKxClusterCommand,
  CreateKxDatabaseCommand,
  CreateKxDataviewCommand,
  CreateKxEnvironmentCommand,
  CreateKxScalingGroupCommand,
  CreateKxUserCommand,
  CreateKxVolumeCommand,
  DeleteEnvironmentCommand,
  DeleteKxClusterCommand,
  DeleteKxClusterNodeCommand,
  DeleteKxDatabaseCommand,
  DeleteKxDataviewCommand,
  DeleteKxEnvironmentCommand,
  DeleteKxScalingGroupCommand,
  DeleteKxUserCommand,
  DeleteKxVolumeCommand,
  GetEnvironmentCommand,
  GetKxChangesetCommand,
  GetKxClusterCommand,
  GetKxConnectionStringCommand,
  GetKxDatabaseCommand,
  GetKxDataviewCommand,
  GetKxEnvironmentCommand,
  GetKxScalingGroupCommand,
  GetKxUserCommand,
  GetKxVolumeCommand,
  ListEnvironmentsCommand,
  ListKxChangesetsCommand,
  ListKxClusterNodesCommand,
  ListKxClustersCommand,
  ListKxDatabasesCommand,
  ListKxDataviewsCommand,
  ListKxEnvironmentsCommand,
  ListKxScalingGroupsCommand,
  ListKxUsersCommand,
  ListKxVolumesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnvironmentCommand,
  UpdateKxClusterCodeConfigurationCommand,
  UpdateKxClusterDatabasesCommand,
  UpdateKxDatabaseCommand,
  UpdateKxDataviewCommand,
  UpdateKxEnvironmentCommand,
  UpdateKxEnvironmentNetworkCommand,
  UpdateKxUserCommand,
  UpdateKxVolumeCommand,
};
const paginators = {
  paginateListKxChangesets,
  paginateListKxClusterNodes,
  paginateListKxDatabases,
  paginateListKxDataviews,
  paginateListKxEnvironments,
  paginateListKxScalingGroups,
};

/**
 * @public
 */
export interface FinspaceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Finspace {
  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxChangesetCommand}
   */
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxChangesetCommandOutput>;
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    cb: (err: any, data?: CreateKxChangesetCommandOutput) => void
  ): void;
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxClusterCommand}
   */
  createKxCluster(
    args: CreateKxClusterCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxClusterCommandOutput>;
  createKxCluster(
    args: CreateKxClusterCommandInput,
    cb: (err: any, data?: CreateKxClusterCommandOutput) => void
  ): void;
  createKxCluster(
    args: CreateKxClusterCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxDatabaseCommand}
   */
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxDatabaseCommandOutput>;
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    cb: (err: any, data?: CreateKxDatabaseCommandOutput) => void
  ): void;
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxDataviewCommand}
   */
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxDataviewCommandOutput>;
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    cb: (err: any, data?: CreateKxDataviewCommandOutput) => void
  ): void;
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxEnvironmentCommand}
   */
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxEnvironmentCommandOutput>;
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    cb: (err: any, data?: CreateKxEnvironmentCommandOutput) => void
  ): void;
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxScalingGroupCommand}
   */
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxScalingGroupCommandOutput>;
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    cb: (err: any, data?: CreateKxScalingGroupCommandOutput) => void
  ): void;
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxUserCommand}
   */
  createKxUser(
    args: CreateKxUserCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxUserCommandOutput>;
  createKxUser(
    args: CreateKxUserCommandInput,
    cb: (err: any, data?: CreateKxUserCommandOutput) => void
  ): void;
  createKxUser(
    args: CreateKxUserCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxVolumeCommand}
   */
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<CreateKxVolumeCommandOutput>;
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    cb: (err: any, data?: CreateKxVolumeCommandOutput) => void
  ): void;
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: CreateKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxClusterCommand}
   */
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxClusterCommandOutput>;
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    cb: (err: any, data?: DeleteKxClusterCommandOutput) => void
  ): void;
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxClusterNodeCommand}
   */
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxClusterNodeCommandOutput>;
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    cb: (err: any, data?: DeleteKxClusterNodeCommandOutput) => void
  ): void;
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxClusterNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxDatabaseCommand}
   */
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxDatabaseCommandOutput>;
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    cb: (err: any, data?: DeleteKxDatabaseCommandOutput) => void
  ): void;
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxDataviewCommand}
   */
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxDataviewCommandOutput>;
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    cb: (err: any, data?: DeleteKxDataviewCommandOutput) => void
  ): void;
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxEnvironmentCommand}
   */
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxEnvironmentCommandOutput>;
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    cb: (err: any, data?: DeleteKxEnvironmentCommandOutput) => void
  ): void;
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxScalingGroupCommand}
   */
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxScalingGroupCommandOutput>;
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    cb: (err: any, data?: DeleteKxScalingGroupCommandOutput) => void
  ): void;
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxUserCommand}
   */
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxUserCommandOutput>;
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    cb: (err: any, data?: DeleteKxUserCommandOutput) => void
  ): void;
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxVolumeCommand}
   */
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<DeleteKxVolumeCommandOutput>;
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    cb: (err: any, data?: DeleteKxVolumeCommandOutput) => void
  ): void;
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: DeleteKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxChangesetCommand}
   */
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxChangesetCommandOutput>;
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    cb: (err: any, data?: GetKxChangesetCommandOutput) => void
  ): void;
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxClusterCommand}
   */
  getKxCluster(
    args: GetKxClusterCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxClusterCommandOutput>;
  getKxCluster(
    args: GetKxClusterCommandInput,
    cb: (err: any, data?: GetKxClusterCommandOutput) => void
  ): void;
  getKxCluster(
    args: GetKxClusterCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxConnectionStringCommand}
   */
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxConnectionStringCommandOutput>;
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    cb: (err: any, data?: GetKxConnectionStringCommandOutput) => void
  ): void;
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxConnectionStringCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxDatabaseCommand}
   */
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxDatabaseCommandOutput>;
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    cb: (err: any, data?: GetKxDatabaseCommandOutput) => void
  ): void;
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxDataviewCommand}
   */
  getKxDataview(
    args: GetKxDataviewCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxDataviewCommandOutput>;
  getKxDataview(
    args: GetKxDataviewCommandInput,
    cb: (err: any, data?: GetKxDataviewCommandOutput) => void
  ): void;
  getKxDataview(
    args: GetKxDataviewCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxEnvironmentCommand}
   */
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxEnvironmentCommandOutput>;
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    cb: (err: any, data?: GetKxEnvironmentCommandOutput) => void
  ): void;
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxScalingGroupCommand}
   */
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxScalingGroupCommandOutput>;
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    cb: (err: any, data?: GetKxScalingGroupCommandOutput) => void
  ): void;
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxUserCommand}
   */
  getKxUser(
    args: GetKxUserCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxUserCommandOutput>;
  getKxUser(
    args: GetKxUserCommandInput,
    cb: (err: any, data?: GetKxUserCommandOutput) => void
  ): void;
  getKxUser(
    args: GetKxUserCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxVolumeCommand}
   */
  getKxVolume(
    args: GetKxVolumeCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<GetKxVolumeCommandOutput>;
  getKxVolume(
    args: GetKxVolumeCommandInput,
    cb: (err: any, data?: GetKxVolumeCommandOutput) => void
  ): void;
  getKxVolume(
    args: GetKxVolumeCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: GetKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxChangesetsCommand}
   */
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxChangesetsCommandOutput>;
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    cb: (err: any, data?: ListKxChangesetsCommandOutput) => void
  ): void;
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxChangesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxClusterNodesCommand}
   */
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxClusterNodesCommandOutput>;
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    cb: (err: any, data?: ListKxClusterNodesCommandOutput) => void
  ): void;
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxClusterNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxClustersCommand}
   */
  listKxClusters(
    args: ListKxClustersCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxClustersCommandOutput>;
  listKxClusters(
    args: ListKxClustersCommandInput,
    cb: (err: any, data?: ListKxClustersCommandOutput) => void
  ): void;
  listKxClusters(
    args: ListKxClustersCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxDatabasesCommand}
   */
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxDatabasesCommandOutput>;
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    cb: (err: any, data?: ListKxDatabasesCommandOutput) => void
  ): void;
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxDataviewsCommand}
   */
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxDataviewsCommandOutput>;
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    cb: (err: any, data?: ListKxDataviewsCommandOutput) => void
  ): void;
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxDataviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxEnvironmentsCommand}
   */
  listKxEnvironments(): Promise<ListKxEnvironmentsCommandOutput>;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxEnvironmentsCommandOutput>;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    cb: (err: any, data?: ListKxEnvironmentsCommandOutput) => void
  ): void;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxScalingGroupsCommand}
   */
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxScalingGroupsCommandOutput>;
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    cb: (err: any, data?: ListKxScalingGroupsCommandOutput) => void
  ): void;
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxScalingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxUsersCommand}
   */
  listKxUsers(
    args: ListKxUsersCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxUsersCommandOutput>;
  listKxUsers(
    args: ListKxUsersCommandInput,
    cb: (err: any, data?: ListKxUsersCommandOutput) => void
  ): void;
  listKxUsers(
    args: ListKxUsersCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxVolumesCommand}
   */
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListKxVolumesCommandOutput>;
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    cb: (err: any, data?: ListKxVolumesCommandOutput) => void
  ): void;
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListKxVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxClusterCodeConfigurationCommand}
   */
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxClusterCodeConfigurationCommandOutput>;
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    cb: (err: any, data?: UpdateKxClusterCodeConfigurationCommandOutput) => void
  ): void;
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxClusterCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxClusterDatabasesCommand}
   */
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxClusterDatabasesCommandOutput>;
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    cb: (err: any, data?: UpdateKxClusterDatabasesCommandOutput) => void
  ): void;
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxClusterDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxDatabaseCommand}
   */
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxDatabaseCommandOutput>;
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    cb: (err: any, data?: UpdateKxDatabaseCommandOutput) => void
  ): void;
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxDataviewCommand}
   */
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxDataviewCommandOutput>;
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    cb: (err: any, data?: UpdateKxDataviewCommandOutput) => void
  ): void;
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxEnvironmentCommand}
   */
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxEnvironmentCommandOutput>;
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    cb: (err: any, data?: UpdateKxEnvironmentCommandOutput) => void
  ): void;
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxEnvironmentNetworkCommand}
   */
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxEnvironmentNetworkCommandOutput>;
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    cb: (err: any, data?: UpdateKxEnvironmentNetworkCommandOutput) => void
  ): void;
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxEnvironmentNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxUserCommand}
   */
  updateKxUser(
    args: UpdateKxUserCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxUserCommandOutput>;
  updateKxUser(
    args: UpdateKxUserCommandInput,
    cb: (err: any, data?: UpdateKxUserCommandOutput) => void
  ): void;
  updateKxUser(
    args: UpdateKxUserCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxVolumeCommand}
   */
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    options?: FinspaceRequestOptions
  ): Promise<UpdateKxVolumeCommandOutput>;
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    cb: (err: any, data?: UpdateKxVolumeCommandOutput) => void
  ): void;
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    options: FinspaceRequestOptions,
    cb: (err: any, data?: UpdateKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxChangesetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxChangesetsCommandOutput}.
   */
  paginateListKxChangesets(
    args: ListKxChangesetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxChangesetsCommandOutput>;

  /**
   * @see {@link ListKxClusterNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxClusterNodesCommandOutput}.
   */
  paginateListKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxClusterNodesCommandOutput>;

  /**
   * @see {@link ListKxDatabasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxDatabasesCommandOutput}.
   */
  paginateListKxDatabases(
    args: ListKxDatabasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxDatabasesCommandOutput>;

  /**
   * @see {@link ListKxDataviewsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxDataviewsCommandOutput}.
   */
  paginateListKxDataviews(
    args: ListKxDataviewsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxDataviewsCommandOutput>;

  /**
   * @see {@link ListKxEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxEnvironmentsCommandOutput}.
   */
  paginateListKxEnvironments(
    args?: ListKxEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxEnvironmentsCommandOutput>;

  /**
   * @see {@link ListKxScalingGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKxScalingGroupsCommandOutput}.
   */
  paginateListKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKxScalingGroupsCommandOutput>;
}

/**
 * <p>The FinSpace management service provides the APIs for managing FinSpace environments.</p>
 * @public
 */
export class Finspace extends FinspaceClient implements Finspace {}
createAggregatedClient(commands, Finspace, { paginators });
