// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateKxChangesetCommand,
  CreateKxChangesetCommandInput,
  CreateKxChangesetCommandOutput,
} from "./commands/CreateKxChangesetCommand";
import {
  CreateKxClusterCommand,
  CreateKxClusterCommandInput,
  CreateKxClusterCommandOutput,
} from "./commands/CreateKxClusterCommand";
import {
  CreateKxDatabaseCommand,
  CreateKxDatabaseCommandInput,
  CreateKxDatabaseCommandOutput,
} from "./commands/CreateKxDatabaseCommand";
import {
  CreateKxDataviewCommand,
  CreateKxDataviewCommandInput,
  CreateKxDataviewCommandOutput,
} from "./commands/CreateKxDataviewCommand";
import {
  CreateKxEnvironmentCommand,
  CreateKxEnvironmentCommandInput,
  CreateKxEnvironmentCommandOutput,
} from "./commands/CreateKxEnvironmentCommand";
import {
  CreateKxScalingGroupCommand,
  CreateKxScalingGroupCommandInput,
  CreateKxScalingGroupCommandOutput,
} from "./commands/CreateKxScalingGroupCommand";
import {
  CreateKxUserCommand,
  CreateKxUserCommandInput,
  CreateKxUserCommandOutput,
} from "./commands/CreateKxUserCommand";
import {
  CreateKxVolumeCommand,
  CreateKxVolumeCommandInput,
  CreateKxVolumeCommandOutput,
} from "./commands/CreateKxVolumeCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteKxClusterCommand,
  DeleteKxClusterCommandInput,
  DeleteKxClusterCommandOutput,
} from "./commands/DeleteKxClusterCommand";
import {
  DeleteKxClusterNodeCommand,
  DeleteKxClusterNodeCommandInput,
  DeleteKxClusterNodeCommandOutput,
} from "./commands/DeleteKxClusterNodeCommand";
import {
  DeleteKxDatabaseCommand,
  DeleteKxDatabaseCommandInput,
  DeleteKxDatabaseCommandOutput,
} from "./commands/DeleteKxDatabaseCommand";
import {
  DeleteKxDataviewCommand,
  DeleteKxDataviewCommandInput,
  DeleteKxDataviewCommandOutput,
} from "./commands/DeleteKxDataviewCommand";
import {
  DeleteKxEnvironmentCommand,
  DeleteKxEnvironmentCommandInput,
  DeleteKxEnvironmentCommandOutput,
} from "./commands/DeleteKxEnvironmentCommand";
import {
  DeleteKxScalingGroupCommand,
  DeleteKxScalingGroupCommandInput,
  DeleteKxScalingGroupCommandOutput,
} from "./commands/DeleteKxScalingGroupCommand";
import {
  DeleteKxUserCommand,
  DeleteKxUserCommandInput,
  DeleteKxUserCommandOutput,
} from "./commands/DeleteKxUserCommand";
import {
  DeleteKxVolumeCommand,
  DeleteKxVolumeCommandInput,
  DeleteKxVolumeCommandOutput,
} from "./commands/DeleteKxVolumeCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetKxChangesetCommand,
  GetKxChangesetCommandInput,
  GetKxChangesetCommandOutput,
} from "./commands/GetKxChangesetCommand";
import {
  GetKxClusterCommand,
  GetKxClusterCommandInput,
  GetKxClusterCommandOutput,
} from "./commands/GetKxClusterCommand";
import {
  GetKxConnectionStringCommand,
  GetKxConnectionStringCommandInput,
  GetKxConnectionStringCommandOutput,
} from "./commands/GetKxConnectionStringCommand";
import {
  GetKxDatabaseCommand,
  GetKxDatabaseCommandInput,
  GetKxDatabaseCommandOutput,
} from "./commands/GetKxDatabaseCommand";
import {
  GetKxDataviewCommand,
  GetKxDataviewCommandInput,
  GetKxDataviewCommandOutput,
} from "./commands/GetKxDataviewCommand";
import {
  GetKxEnvironmentCommand,
  GetKxEnvironmentCommandInput,
  GetKxEnvironmentCommandOutput,
} from "./commands/GetKxEnvironmentCommand";
import {
  GetKxScalingGroupCommand,
  GetKxScalingGroupCommandInput,
  GetKxScalingGroupCommandOutput,
} from "./commands/GetKxScalingGroupCommand";
import { GetKxUserCommand, GetKxUserCommandInput, GetKxUserCommandOutput } from "./commands/GetKxUserCommand";
import { GetKxVolumeCommand, GetKxVolumeCommandInput, GetKxVolumeCommandOutput } from "./commands/GetKxVolumeCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListKxChangesetsCommand,
  ListKxChangesetsCommandInput,
  ListKxChangesetsCommandOutput,
} from "./commands/ListKxChangesetsCommand";
import {
  ListKxClusterNodesCommand,
  ListKxClusterNodesCommandInput,
  ListKxClusterNodesCommandOutput,
} from "./commands/ListKxClusterNodesCommand";
import {
  ListKxClustersCommand,
  ListKxClustersCommandInput,
  ListKxClustersCommandOutput,
} from "./commands/ListKxClustersCommand";
import {
  ListKxDatabasesCommand,
  ListKxDatabasesCommandInput,
  ListKxDatabasesCommandOutput,
} from "./commands/ListKxDatabasesCommand";
import {
  ListKxDataviewsCommand,
  ListKxDataviewsCommandInput,
  ListKxDataviewsCommandOutput,
} from "./commands/ListKxDataviewsCommand";
import {
  ListKxEnvironmentsCommand,
  ListKxEnvironmentsCommandInput,
  ListKxEnvironmentsCommandOutput,
} from "./commands/ListKxEnvironmentsCommand";
import {
  ListKxScalingGroupsCommand,
  ListKxScalingGroupsCommandInput,
  ListKxScalingGroupsCommandOutput,
} from "./commands/ListKxScalingGroupsCommand";
import { ListKxUsersCommand, ListKxUsersCommandInput, ListKxUsersCommandOutput } from "./commands/ListKxUsersCommand";
import {
  ListKxVolumesCommand,
  ListKxVolumesCommandInput,
  ListKxVolumesCommandOutput,
} from "./commands/ListKxVolumesCommand";
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
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateKxClusterCodeConfigurationCommand,
  UpdateKxClusterCodeConfigurationCommandInput,
  UpdateKxClusterCodeConfigurationCommandOutput,
} from "./commands/UpdateKxClusterCodeConfigurationCommand";
import {
  UpdateKxClusterDatabasesCommand,
  UpdateKxClusterDatabasesCommandInput,
  UpdateKxClusterDatabasesCommandOutput,
} from "./commands/UpdateKxClusterDatabasesCommand";
import {
  UpdateKxDatabaseCommand,
  UpdateKxDatabaseCommandInput,
  UpdateKxDatabaseCommandOutput,
} from "./commands/UpdateKxDatabaseCommand";
import {
  UpdateKxDataviewCommand,
  UpdateKxDataviewCommandInput,
  UpdateKxDataviewCommandOutput,
} from "./commands/UpdateKxDataviewCommand";
import {
  UpdateKxEnvironmentCommand,
  UpdateKxEnvironmentCommandInput,
  UpdateKxEnvironmentCommandOutput,
} from "./commands/UpdateKxEnvironmentCommand";
import {
  UpdateKxEnvironmentNetworkCommand,
  UpdateKxEnvironmentNetworkCommandInput,
  UpdateKxEnvironmentNetworkCommandOutput,
} from "./commands/UpdateKxEnvironmentNetworkCommand";
import {
  UpdateKxUserCommand,
  UpdateKxUserCommandInput,
  UpdateKxUserCommandOutput,
} from "./commands/UpdateKxUserCommand";
import {
  UpdateKxVolumeCommand,
  UpdateKxVolumeCommandInput,
  UpdateKxVolumeCommandOutput,
} from "./commands/UpdateKxVolumeCommand";
import { FinspaceClient } from "./FinspaceClient";

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

export interface Finspace {
  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxChangesetCommand}
   */
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxChangesetCommandOutput>;
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    cb: (err: any, data?: CreateKxChangesetCommandOutput) => void
  ): void;
  createKxChangeset(
    args: CreateKxChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxClusterCommand}
   */
  createKxCluster(
    args: CreateKxClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxClusterCommandOutput>;
  createKxCluster(
    args: CreateKxClusterCommandInput,
    cb: (err: any, data?: CreateKxClusterCommandOutput) => void
  ): void;
  createKxCluster(
    args: CreateKxClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxDatabaseCommand}
   */
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxDatabaseCommandOutput>;
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    cb: (err: any, data?: CreateKxDatabaseCommandOutput) => void
  ): void;
  createKxDatabase(
    args: CreateKxDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxDataviewCommand}
   */
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxDataviewCommandOutput>;
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    cb: (err: any, data?: CreateKxDataviewCommandOutput) => void
  ): void;
  createKxDataview(
    args: CreateKxDataviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxEnvironmentCommand}
   */
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxEnvironmentCommandOutput>;
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    cb: (err: any, data?: CreateKxEnvironmentCommandOutput) => void
  ): void;
  createKxEnvironment(
    args: CreateKxEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxScalingGroupCommand}
   */
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxScalingGroupCommandOutput>;
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    cb: (err: any, data?: CreateKxScalingGroupCommandOutput) => void
  ): void;
  createKxScalingGroup(
    args: CreateKxScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxUserCommand}
   */
  createKxUser(
    args: CreateKxUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxUserCommandOutput>;
  createKxUser(
    args: CreateKxUserCommandInput,
    cb: (err: any, data?: CreateKxUserCommandOutput) => void
  ): void;
  createKxUser(
    args: CreateKxUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKxVolumeCommand}
   */
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKxVolumeCommandOutput>;
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    cb: (err: any, data?: CreateKxVolumeCommandOutput) => void
  ): void;
  createKxVolume(
    args: CreateKxVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxClusterCommand}
   */
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxClusterCommandOutput>;
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    cb: (err: any, data?: DeleteKxClusterCommandOutput) => void
  ): void;
  deleteKxCluster(
    args: DeleteKxClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxClusterNodeCommand}
   */
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxClusterNodeCommandOutput>;
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    cb: (err: any, data?: DeleteKxClusterNodeCommandOutput) => void
  ): void;
  deleteKxClusterNode(
    args: DeleteKxClusterNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxClusterNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxDatabaseCommand}
   */
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxDatabaseCommandOutput>;
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    cb: (err: any, data?: DeleteKxDatabaseCommandOutput) => void
  ): void;
  deleteKxDatabase(
    args: DeleteKxDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxDataviewCommand}
   */
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxDataviewCommandOutput>;
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    cb: (err: any, data?: DeleteKxDataviewCommandOutput) => void
  ): void;
  deleteKxDataview(
    args: DeleteKxDataviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxEnvironmentCommand}
   */
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxEnvironmentCommandOutput>;
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    cb: (err: any, data?: DeleteKxEnvironmentCommandOutput) => void
  ): void;
  deleteKxEnvironment(
    args: DeleteKxEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxScalingGroupCommand}
   */
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxScalingGroupCommandOutput>;
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    cb: (err: any, data?: DeleteKxScalingGroupCommandOutput) => void
  ): void;
  deleteKxScalingGroup(
    args: DeleteKxScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxUserCommand}
   */
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxUserCommandOutput>;
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    cb: (err: any, data?: DeleteKxUserCommandOutput) => void
  ): void;
  deleteKxUser(
    args: DeleteKxUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKxVolumeCommand}
   */
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKxVolumeCommandOutput>;
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    cb: (err: any, data?: DeleteKxVolumeCommandOutput) => void
  ): void;
  deleteKxVolume(
    args: DeleteKxVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxChangesetCommand}
   */
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxChangesetCommandOutput>;
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    cb: (err: any, data?: GetKxChangesetCommandOutput) => void
  ): void;
  getKxChangeset(
    args: GetKxChangesetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxChangesetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxClusterCommand}
   */
  getKxCluster(
    args: GetKxClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxClusterCommandOutput>;
  getKxCluster(
    args: GetKxClusterCommandInput,
    cb: (err: any, data?: GetKxClusterCommandOutput) => void
  ): void;
  getKxCluster(
    args: GetKxClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxConnectionStringCommand}
   */
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxConnectionStringCommandOutput>;
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    cb: (err: any, data?: GetKxConnectionStringCommandOutput) => void
  ): void;
  getKxConnectionString(
    args: GetKxConnectionStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxConnectionStringCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxDatabaseCommand}
   */
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxDatabaseCommandOutput>;
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    cb: (err: any, data?: GetKxDatabaseCommandOutput) => void
  ): void;
  getKxDatabase(
    args: GetKxDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxDataviewCommand}
   */
  getKxDataview(
    args: GetKxDataviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxDataviewCommandOutput>;
  getKxDataview(
    args: GetKxDataviewCommandInput,
    cb: (err: any, data?: GetKxDataviewCommandOutput) => void
  ): void;
  getKxDataview(
    args: GetKxDataviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxEnvironmentCommand}
   */
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxEnvironmentCommandOutput>;
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    cb: (err: any, data?: GetKxEnvironmentCommandOutput) => void
  ): void;
  getKxEnvironment(
    args: GetKxEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxScalingGroupCommand}
   */
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxScalingGroupCommandOutput>;
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    cb: (err: any, data?: GetKxScalingGroupCommandOutput) => void
  ): void;
  getKxScalingGroup(
    args: GetKxScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxUserCommand}
   */
  getKxUser(
    args: GetKxUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxUserCommandOutput>;
  getKxUser(
    args: GetKxUserCommandInput,
    cb: (err: any, data?: GetKxUserCommandOutput) => void
  ): void;
  getKxUser(
    args: GetKxUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKxVolumeCommand}
   */
  getKxVolume(
    args: GetKxVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKxVolumeCommandOutput>;
  getKxVolume(
    args: GetKxVolumeCommandInput,
    cb: (err: any, data?: GetKxVolumeCommandOutput) => void
  ): void;
  getKxVolume(
    args: GetKxVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKxVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxChangesetsCommand}
   */
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxChangesetsCommandOutput>;
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    cb: (err: any, data?: ListKxChangesetsCommandOutput) => void
  ): void;
  listKxChangesets(
    args: ListKxChangesetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxChangesetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxClusterNodesCommand}
   */
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxClusterNodesCommandOutput>;
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    cb: (err: any, data?: ListKxClusterNodesCommandOutput) => void
  ): void;
  listKxClusterNodes(
    args: ListKxClusterNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxClusterNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxClustersCommand}
   */
  listKxClusters(
    args: ListKxClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxClustersCommandOutput>;
  listKxClusters(
    args: ListKxClustersCommandInput,
    cb: (err: any, data?: ListKxClustersCommandOutput) => void
  ): void;
  listKxClusters(
    args: ListKxClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxDatabasesCommand}
   */
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxDatabasesCommandOutput>;
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    cb: (err: any, data?: ListKxDatabasesCommandOutput) => void
  ): void;
  listKxDatabases(
    args: ListKxDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxDataviewsCommand}
   */
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxDataviewsCommandOutput>;
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    cb: (err: any, data?: ListKxDataviewsCommandOutput) => void
  ): void;
  listKxDataviews(
    args: ListKxDataviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxDataviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxEnvironmentsCommand}
   */
  listKxEnvironments(): Promise<ListKxEnvironmentsCommandOutput>;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxEnvironmentsCommandOutput>;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    cb: (err: any, data?: ListKxEnvironmentsCommandOutput) => void
  ): void;
  listKxEnvironments(
    args: ListKxEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxScalingGroupsCommand}
   */
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxScalingGroupsCommandOutput>;
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    cb: (err: any, data?: ListKxScalingGroupsCommandOutput) => void
  ): void;
  listKxScalingGroups(
    args: ListKxScalingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxScalingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxUsersCommand}
   */
  listKxUsers(
    args: ListKxUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxUsersCommandOutput>;
  listKxUsers(
    args: ListKxUsersCommandInput,
    cb: (err: any, data?: ListKxUsersCommandOutput) => void
  ): void;
  listKxUsers(
    args: ListKxUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKxVolumesCommand}
   */
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKxVolumesCommandOutput>;
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    cb: (err: any, data?: ListKxVolumesCommandOutput) => void
  ): void;
  listKxVolumes(
    args: ListKxVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKxVolumesCommandOutput) => void
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
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxClusterCodeConfigurationCommand}
   */
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxClusterCodeConfigurationCommandOutput>;
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    cb: (err: any, data?: UpdateKxClusterCodeConfigurationCommandOutput) => void
  ): void;
  updateKxClusterCodeConfiguration(
    args: UpdateKxClusterCodeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxClusterCodeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxClusterDatabasesCommand}
   */
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxClusterDatabasesCommandOutput>;
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    cb: (err: any, data?: UpdateKxClusterDatabasesCommandOutput) => void
  ): void;
  updateKxClusterDatabases(
    args: UpdateKxClusterDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxClusterDatabasesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxDatabaseCommand}
   */
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxDatabaseCommandOutput>;
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    cb: (err: any, data?: UpdateKxDatabaseCommandOutput) => void
  ): void;
  updateKxDatabase(
    args: UpdateKxDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxDatabaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxDataviewCommand}
   */
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxDataviewCommandOutput>;
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    cb: (err: any, data?: UpdateKxDataviewCommandOutput) => void
  ): void;
  updateKxDataview(
    args: UpdateKxDataviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxDataviewCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxEnvironmentCommand}
   */
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxEnvironmentCommandOutput>;
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    cb: (err: any, data?: UpdateKxEnvironmentCommandOutput) => void
  ): void;
  updateKxEnvironment(
    args: UpdateKxEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxEnvironmentNetworkCommand}
   */
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxEnvironmentNetworkCommandOutput>;
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    cb: (err: any, data?: UpdateKxEnvironmentNetworkCommandOutput) => void
  ): void;
  updateKxEnvironmentNetwork(
    args: UpdateKxEnvironmentNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxEnvironmentNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxUserCommand}
   */
  updateKxUser(
    args: UpdateKxUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxUserCommandOutput>;
  updateKxUser(
    args: UpdateKxUserCommandInput,
    cb: (err: any, data?: UpdateKxUserCommandOutput) => void
  ): void;
  updateKxUser(
    args: UpdateKxUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKxVolumeCommand}
   */
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKxVolumeCommandOutput>;
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    cb: (err: any, data?: UpdateKxVolumeCommandOutput) => void
  ): void;
  updateKxVolume(
    args: UpdateKxVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKxVolumeCommandOutput) => void
  ): void;
}

/**
 * <p>The FinSpace management service provides the APIs for managing FinSpace environments.</p>
 * @public
 */
export class Finspace extends FinspaceClient implements Finspace {}
createAggregatedClient(commands, Finspace);
