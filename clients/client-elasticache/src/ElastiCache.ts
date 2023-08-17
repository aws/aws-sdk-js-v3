// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommand,
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommand,
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
} from "./commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommand,
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
} from "./commands/BatchStopUpdateActionCommand";
import {
  CompleteMigrationCommand,
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput,
} from "./commands/CompleteMigrationCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import {
  CreateCacheClusterCommand,
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput,
} from "./commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommand,
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
} from "./commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommand,
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
} from "./commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommand,
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
} from "./commands/CreateCacheSubnetGroupCommand";
import {
  CreateGlobalReplicationGroupCommand,
  CreateGlobalReplicationGroupCommandInput,
  CreateGlobalReplicationGroupCommandOutput,
} from "./commands/CreateGlobalReplicationGroupCommand";
import {
  CreateReplicationGroupCommand,
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
} from "./commands/CreateReplicationGroupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateUserGroupCommand,
  CreateUserGroupCommandInput,
  CreateUserGroupCommandOutput,
} from "./commands/CreateUserGroupCommand";
import {
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "./commands/DecreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  DecreaseReplicaCountCommand,
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
} from "./commands/DecreaseReplicaCountCommand";
import {
  DeleteCacheClusterCommand,
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput,
} from "./commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommand,
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput,
} from "./commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
} from "./commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommand,
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput,
} from "./commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteGlobalReplicationGroupCommand,
  DeleteGlobalReplicationGroupCommandInput,
  DeleteGlobalReplicationGroupCommandOutput,
} from "./commands/DeleteGlobalReplicationGroupCommand";
import {
  DeleteReplicationGroupCommand,
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput,
} from "./commands/DeleteReplicationGroupCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserGroupCommand,
  DeleteUserGroupCommandInput,
  DeleteUserGroupCommandOutput,
} from "./commands/DeleteUserGroupCommand";
import {
  DescribeCacheClustersCommand,
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "./commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommand,
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "./commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "./commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommand,
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "./commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "./commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommand,
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "./commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeGlobalReplicationGroupsCommand,
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
} from "./commands/DescribeGlobalReplicationGroupsCommand";
import {
  DescribeReplicationGroupsCommand,
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
} from "./commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "./commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommand,
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "./commands/DescribeUpdateActionsCommand";
import {
  DescribeUserGroupsCommand,
  DescribeUserGroupsCommandInput,
  DescribeUserGroupsCommandOutput,
} from "./commands/DescribeUserGroupsCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  DisassociateGlobalReplicationGroupCommand,
  DisassociateGlobalReplicationGroupCommandInput,
  DisassociateGlobalReplicationGroupCommandOutput,
} from "./commands/DisassociateGlobalReplicationGroupCommand";
import {
  FailoverGlobalReplicationGroupCommand,
  FailoverGlobalReplicationGroupCommandInput,
  FailoverGlobalReplicationGroupCommandOutput,
} from "./commands/FailoverGlobalReplicationGroupCommand";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "./commands/IncreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  IncreaseReplicaCountCommand,
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
} from "./commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommand,
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
} from "./commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyCacheClusterCommand,
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput,
} from "./commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommand,
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput,
} from "./commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommand,
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
} from "./commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyGlobalReplicationGroupCommand,
  ModifyGlobalReplicationGroupCommandInput,
  ModifyGlobalReplicationGroupCommandOutput,
} from "./commands/ModifyGlobalReplicationGroupCommand";
import {
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
} from "./commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
} from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import { ModifyUserCommand, ModifyUserCommandInput, ModifyUserCommandOutput } from "./commands/ModifyUserCommand";
import {
  ModifyUserGroupCommand,
  ModifyUserGroupCommandInput,
  ModifyUserGroupCommandOutput,
} from "./commands/ModifyUserGroupCommand";
import {
  PurchaseReservedCacheNodesOfferingCommand,
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebalanceSlotsInGlobalReplicationGroupCommand,
  RebalanceSlotsInGlobalReplicationGroupCommandInput,
  RebalanceSlotsInGlobalReplicationGroupCommandOutput,
} from "./commands/RebalanceSlotsInGlobalReplicationGroupCommand";
import {
  RebootCacheClusterCommand,
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput,
} from "./commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommand,
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput,
} from "./commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommand,
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
} from "./commands/RevokeCacheSecurityGroupIngressCommand";
import {
  StartMigrationCommand,
  StartMigrationCommandInput,
  StartMigrationCommandOutput,
} from "./commands/StartMigrationCommand";
import {
  TestFailoverCommand,
  TestFailoverCommandInput,
  TestFailoverCommandOutput,
} from "./commands/TestFailoverCommand";
import {
  TestMigrationCommand,
  TestMigrationCommandInput,
  TestMigrationCommandOutput,
} from "./commands/TestMigrationCommand";
import { ElastiCacheClient, ElastiCacheClientConfig } from "./ElastiCacheClient";

const commands = {
  AddTagsToResourceCommand,
  AuthorizeCacheSecurityGroupIngressCommand,
  BatchApplyUpdateActionCommand,
  BatchStopUpdateActionCommand,
  CompleteMigrationCommand,
  CopySnapshotCommand,
  CreateCacheClusterCommand,
  CreateCacheParameterGroupCommand,
  CreateCacheSecurityGroupCommand,
  CreateCacheSubnetGroupCommand,
  CreateGlobalReplicationGroupCommand,
  CreateReplicationGroupCommand,
  CreateSnapshotCommand,
  CreateUserCommand,
  CreateUserGroupCommand,
  DecreaseNodeGroupsInGlobalReplicationGroupCommand,
  DecreaseReplicaCountCommand,
  DeleteCacheClusterCommand,
  DeleteCacheParameterGroupCommand,
  DeleteCacheSecurityGroupCommand,
  DeleteCacheSubnetGroupCommand,
  DeleteGlobalReplicationGroupCommand,
  DeleteReplicationGroupCommand,
  DeleteSnapshotCommand,
  DeleteUserCommand,
  DeleteUserGroupCommand,
  DescribeCacheClustersCommand,
  DescribeCacheEngineVersionsCommand,
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParametersCommand,
  DescribeCacheSecurityGroupsCommand,
  DescribeCacheSubnetGroupsCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventsCommand,
  DescribeGlobalReplicationGroupsCommand,
  DescribeReplicationGroupsCommand,
  DescribeReservedCacheNodesCommand,
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeUpdateActionsCommand,
  DescribeUserGroupsCommand,
  DescribeUsersCommand,
  DisassociateGlobalReplicationGroupCommand,
  FailoverGlobalReplicationGroupCommand,
  IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  IncreaseReplicaCountCommand,
  ListAllowedNodeTypeModificationsCommand,
  ListTagsForResourceCommand,
  ModifyCacheClusterCommand,
  ModifyCacheParameterGroupCommand,
  ModifyCacheSubnetGroupCommand,
  ModifyGlobalReplicationGroupCommand,
  ModifyReplicationGroupCommand,
  ModifyReplicationGroupShardConfigurationCommand,
  ModifyUserCommand,
  ModifyUserGroupCommand,
  PurchaseReservedCacheNodesOfferingCommand,
  RebalanceSlotsInGlobalReplicationGroupCommand,
  RebootCacheClusterCommand,
  RemoveTagsFromResourceCommand,
  ResetCacheParameterGroupCommand,
  RevokeCacheSecurityGroupIngressCommand,
  StartMigrationCommand,
  TestFailoverCommand,
  TestMigrationCommand,
};

export interface ElastiCache {
  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeCacheSecurityGroupIngressCommand}
   */
  authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput>;
  authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  authorizeCacheSecurityGroupIngress(
    args: AuthorizeCacheSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeCacheSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchApplyUpdateActionCommand}
   */
  batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchApplyUpdateActionCommandOutput>;
  batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void
  ): void;
  batchApplyUpdateAction(
    args: BatchApplyUpdateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchApplyUpdateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchStopUpdateActionCommand}
   */
  batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchStopUpdateActionCommandOutput>;
  batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void
  ): void;
  batchStopUpdateAction(
    args: BatchStopUpdateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchStopUpdateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMigrationCommand}
   */
  completeMigration(
    args: CompleteMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMigrationCommandOutput>;
  completeMigration(
    args: CompleteMigrationCommandInput,
    cb: (err: any, data?: CompleteMigrationCommandOutput) => void
  ): void;
  completeMigration(
    args: CompleteMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMigrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CopySnapshotCommand}
   */
  copySnapshot(args: CopySnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopySnapshotCommandOutput>;
  copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCacheClusterCommand}
   */
  createCacheCluster(
    args: CreateCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheClusterCommandOutput>;
  createCacheCluster(
    args: CreateCacheClusterCommandInput,
    cb: (err: any, data?: CreateCacheClusterCommandOutput) => void
  ): void;
  createCacheCluster(
    args: CreateCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCacheParameterGroupCommand}
   */
  createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheParameterGroupCommandOutput>;
  createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void
  ): void;
  createCacheParameterGroup(
    args: CreateCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCacheSecurityGroupCommand}
   */
  createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheSecurityGroupCommandOutput>;
  createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void
  ): void;
  createCacheSecurityGroup(
    args: CreateCacheSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCacheSubnetGroupCommand}
   */
  createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCacheSubnetGroupCommandOutput>;
  createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void
  ): void;
  createCacheSubnetGroup(
    args: CreateCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCacheSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalReplicationGroupCommand}
   */
  createGlobalReplicationGroup(
    args: CreateGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalReplicationGroupCommandOutput>;
  createGlobalReplicationGroup(
    args: CreateGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: CreateGlobalReplicationGroupCommandOutput) => void
  ): void;
  createGlobalReplicationGroup(
    args: CreateGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationGroupCommand}
   */
  createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationGroupCommandOutput>;
  createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void
  ): void;
  createReplicationGroup(
    args: CreateReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserGroupCommand}
   */
  createUserGroup(
    args: CreateUserGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserGroupCommandOutput>;
  createUserGroup(args: CreateUserGroupCommandInput, cb: (err: any, data?: CreateUserGroupCommandOutput) => void): void;
  createUserGroup(
    args: CreateUserGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  decreaseNodeGroupsInGlobalReplicationGroup(
    args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
  decreaseNodeGroupsInGlobalReplicationGroup(
    args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void
  ): void;
  decreaseNodeGroupsInGlobalReplicationGroup(
    args: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DecreaseReplicaCountCommand}
   */
  decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseReplicaCountCommandOutput>;
  decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void
  ): void;
  decreaseReplicaCount(
    args: DecreaseReplicaCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseReplicaCountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCacheClusterCommand}
   */
  deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheClusterCommandOutput>;
  deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void
  ): void;
  deleteCacheCluster(
    args: DeleteCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCacheParameterGroupCommand}
   */
  deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheParameterGroupCommandOutput>;
  deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void
  ): void;
  deleteCacheParameterGroup(
    args: DeleteCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCacheSecurityGroupCommand}
   */
  deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheSecurityGroupCommandOutput>;
  deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void
  ): void;
  deleteCacheSecurityGroup(
    args: DeleteCacheSecurityGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheSecurityGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCacheSubnetGroupCommand}
   */
  deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCacheSubnetGroupCommandOutput>;
  deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void
  ): void;
  deleteCacheSubnetGroup(
    args: DeleteCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCacheSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalReplicationGroupCommand}
   */
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalReplicationGroupCommandOutput>;
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: DeleteGlobalReplicationGroupCommandOutput) => void
  ): void;
  deleteGlobalReplicationGroup(
    args: DeleteGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationGroupCommand}
   */
  deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationGroupCommandOutput>;
  deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void
  ): void;
  deleteReplicationGroup(
    args: DeleteReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserGroupCommand}
   */
  deleteUserGroup(
    args: DeleteUserGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserGroupCommandOutput>;
  deleteUserGroup(args: DeleteUserGroupCommandInput, cb: (err: any, data?: DeleteUserGroupCommandOutput) => void): void;
  deleteUserGroup(
    args: DeleteUserGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheClustersCommand}
   */
  describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheClustersCommandOutput>;
  describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void
  ): void;
  describeCacheClusters(
    args: DescribeCacheClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheEngineVersionsCommand}
   */
  describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheEngineVersionsCommandOutput>;
  describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void
  ): void;
  describeCacheEngineVersions(
    args: DescribeCacheEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheParameterGroupsCommand}
   */
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheParameterGroupsCommandOutput>;
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void
  ): void;
  describeCacheParameterGroups(
    args: DescribeCacheParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheParametersCommand}
   */
  describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheParametersCommandOutput>;
  describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void
  ): void;
  describeCacheParameters(
    args: DescribeCacheParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheSecurityGroupsCommand}
   */
  describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheSecurityGroupsCommandOutput>;
  describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void
  ): void;
  describeCacheSecurityGroups(
    args: DescribeCacheSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCacheSubnetGroupsCommand}
   */
  describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCacheSubnetGroupsCommandOutput>;
  describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void
  ): void;
  describeCacheSubnetGroups(
    args: DescribeCacheSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCacheSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalReplicationGroupsCommand}
   */
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalReplicationGroupsCommandOutput>;
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsCommandInput,
    cb: (err: any, data?: DescribeGlobalReplicationGroupsCommandOutput) => void
  ): void;
  describeGlobalReplicationGroups(
    args: DescribeGlobalReplicationGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalReplicationGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationGroupsCommand}
   */
  describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationGroupsCommandOutput>;
  describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void
  ): void;
  describeReplicationGroups(
    args: DescribeReplicationGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedCacheNodesCommand}
   */
  describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedCacheNodesCommandOutput>;
  describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void
  ): void;
  describeReservedCacheNodes(
    args: DescribeReservedCacheNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedCacheNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedCacheNodesOfferingsCommand}
   */
  describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput>;
  describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void
  ): void;
  describeReservedCacheNodesOfferings(
    args: DescribeReservedCacheNodesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedCacheNodesOfferingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   */
  describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceUpdatesCommandOutput>;
  describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;
  describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUpdateActionsCommand}
   */
  describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateActionsCommandOutput>;
  describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void
  ): void;
  describeUpdateActions(
    args: DescribeUpdateActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserGroupsCommand}
   */
  describeUserGroups(
    args: DescribeUserGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserGroupsCommandOutput>;
  describeUserGroups(
    args: DescribeUserGroupsCommandInput,
    cb: (err: any, data?: DescribeUserGroupsCommandOutput) => void
  ): void;
  describeUserGroups(
    args: DescribeUserGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
  describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
  describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateGlobalReplicationGroupCommand}
   */
  disassociateGlobalReplicationGroup(
    args: DisassociateGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateGlobalReplicationGroupCommandOutput>;
  disassociateGlobalReplicationGroup(
    args: DisassociateGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: DisassociateGlobalReplicationGroupCommandOutput) => void
  ): void;
  disassociateGlobalReplicationGroup(
    args: DisassociateGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverGlobalReplicationGroupCommand}
   */
  failoverGlobalReplicationGroup(
    args: FailoverGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverGlobalReplicationGroupCommandOutput>;
  failoverGlobalReplicationGroup(
    args: FailoverGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: FailoverGlobalReplicationGroupCommandOutput) => void
  ): void;
  failoverGlobalReplicationGroup(
    args: FailoverGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}
   */
  increaseNodeGroupsInGlobalReplicationGroup(
    args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput>;
  increaseNodeGroupsInGlobalReplicationGroup(
    args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void
  ): void;
  increaseNodeGroupsInGlobalReplicationGroup(
    args: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link IncreaseReplicaCountCommand}
   */
  increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseReplicaCountCommandOutput>;
  increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void
  ): void;
  increaseReplicaCount(
    args: IncreaseReplicaCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseReplicaCountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowedNodeTypeModificationsCommand}
   */
  listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowedNodeTypeModificationsCommandOutput>;
  listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void
  ): void;
  listAllowedNodeTypeModifications(
    args: ListAllowedNodeTypeModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowedNodeTypeModificationsCommandOutput) => void
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
   * @see {@link ModifyCacheClusterCommand}
   */
  modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheClusterCommandOutput>;
  modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void
  ): void;
  modifyCacheCluster(
    args: ModifyCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCacheParameterGroupCommand}
   */
  modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheParameterGroupCommandOutput>;
  modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void
  ): void;
  modifyCacheParameterGroup(
    args: ModifyCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCacheSubnetGroupCommand}
   */
  modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCacheSubnetGroupCommandOutput>;
  modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void
  ): void;
  modifyCacheSubnetGroup(
    args: ModifyCacheSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCacheSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyGlobalReplicationGroupCommand}
   */
  modifyGlobalReplicationGroup(
    args: ModifyGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyGlobalReplicationGroupCommandOutput>;
  modifyGlobalReplicationGroup(
    args: ModifyGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: ModifyGlobalReplicationGroupCommandOutput) => void
  ): void;
  modifyGlobalReplicationGroup(
    args: ModifyGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationGroupCommand}
   */
  modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationGroupCommandOutput>;
  modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void
  ): void;
  modifyReplicationGroup(
    args: ModifyReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyReplicationGroupShardConfigurationCommand}
   */
  modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationGroupShardConfigurationCommandOutput>;
  modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void
  ): void;
  modifyReplicationGroupShardConfiguration(
    args: ModifyReplicationGroupShardConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationGroupShardConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyUserCommand}
   */
  modifyUser(args: ModifyUserCommandInput, options?: __HttpHandlerOptions): Promise<ModifyUserCommandOutput>;
  modifyUser(args: ModifyUserCommandInput, cb: (err: any, data?: ModifyUserCommandOutput) => void): void;
  modifyUser(
    args: ModifyUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyUserGroupCommand}
   */
  modifyUserGroup(
    args: ModifyUserGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyUserGroupCommandOutput>;
  modifyUserGroup(args: ModifyUserGroupCommandInput, cb: (err: any, data?: ModifyUserGroupCommandOutput) => void): void;
  modifyUserGroup(
    args: ModifyUserGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyUserGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedCacheNodesOfferingCommand}
   */
  purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedCacheNodesOfferingCommandOutput>;
  purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void
  ): void;
  purchaseReservedCacheNodesOffering(
    args: PurchaseReservedCacheNodesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedCacheNodesOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link RebalanceSlotsInGlobalReplicationGroupCommand}
   */
  rebalanceSlotsInGlobalReplicationGroup(
    args: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput>;
  rebalanceSlotsInGlobalReplicationGroup(
    args: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    cb: (err: any, data?: RebalanceSlotsInGlobalReplicationGroupCommandOutput) => void
  ): void;
  rebalanceSlotsInGlobalReplicationGroup(
    args: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebalanceSlotsInGlobalReplicationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootCacheClusterCommand}
   */
  rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootCacheClusterCommandOutput>;
  rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    cb: (err: any, data?: RebootCacheClusterCommandOutput) => void
  ): void;
  rebootCacheCluster(
    args: RebootCacheClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootCacheClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetCacheParameterGroupCommand}
   */
  resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetCacheParameterGroupCommandOutput>;
  resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void
  ): void;
  resetCacheParameterGroup(
    args: ResetCacheParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetCacheParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeCacheSecurityGroupIngressCommand}
   */
  revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeCacheSecurityGroupIngressCommandOutput>;
  revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void
  ): void;
  revokeCacheSecurityGroupIngress(
    args: RevokeCacheSecurityGroupIngressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeCacheSecurityGroupIngressCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMigrationCommand}
   */
  startMigration(
    args: StartMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMigrationCommandOutput>;
  startMigration(args: StartMigrationCommandInput, cb: (err: any, data?: StartMigrationCommandOutput) => void): void;
  startMigration(
    args: StartMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;

  /**
   * @see {@link TestFailoverCommand}
   */
  testFailover(args: TestFailoverCommandInput, options?: __HttpHandlerOptions): Promise<TestFailoverCommandOutput>;
  testFailover(args: TestFailoverCommandInput, cb: (err: any, data?: TestFailoverCommandOutput) => void): void;
  testFailover(
    args: TestFailoverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestFailoverCommandOutput) => void
  ): void;

  /**
   * @see {@link TestMigrationCommand}
   */
  testMigration(args: TestMigrationCommandInput, options?: __HttpHandlerOptions): Promise<TestMigrationCommandOutput>;
  testMigration(args: TestMigrationCommandInput, cb: (err: any, data?: TestMigrationCommandOutput) => void): void;
  testMigration(
    args: TestMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestMigrationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon ElastiCache</fullname>
 *          <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale
 *             a distributed cache in the cloud.</p>
 *          <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory
 *             cache with less of the administrative burden involved in launching and managing a
 *             distributed cache. The service makes setup, scaling, and cluster failure handling much
 *             simpler than in a self-managed cache deployment.</p>
 *          <p>In addition, through integration with Amazon CloudWatch, customers get enhanced
 *             visibility into the key performance statistics associated with their cache and can
 *             receive alarms if a part of their cache runs hot.</p>
 */
export class ElastiCache extends ElastiCacheClient implements ElastiCache {}
createAggregatedClient(commands, ElastiCache);
