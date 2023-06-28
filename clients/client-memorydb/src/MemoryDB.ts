// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchUpdateClusterCommand,
  BatchUpdateClusterCommandInput,
  BatchUpdateClusterCommandOutput,
} from "./commands/BatchUpdateClusterCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import { CreateACLCommand, CreateACLCommandInput, CreateACLCommandOutput } from "./commands/CreateACLCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateParameterGroupCommand,
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "./commands/CreateParameterGroupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSubnetGroupCommand,
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput,
} from "./commands/CreateSubnetGroupCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteACLCommand, DeleteACLCommandInput, DeleteACLCommandOutput } from "./commands/DeleteACLCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteParameterGroupCommand,
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "./commands/DeleteParameterGroupCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteSubnetGroupCommand,
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput,
} from "./commands/DeleteSubnetGroupCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeACLsCommand,
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput,
} from "./commands/DescribeACLsCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "./commands/DescribeParameterGroupsCommand";
import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "./commands/DescribeParametersCommand";
import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import {
  DescribeReservedNodesOfferingsCommand,
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedNodesOfferingsCommand";
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
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  FailoverShardCommand,
  FailoverShardCommandInput,
  FailoverShardCommandOutput,
} from "./commands/FailoverShardCommand";
import {
  ListAllowedNodeTypeUpdatesCommand,
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
} from "./commands/ListAllowedNodeTypeUpdatesCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PurchaseReservedNodesOfferingCommand,
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedNodesOfferingCommand";
import {
  ResetParameterGroupCommand,
  ResetParameterGroupCommandInput,
  ResetParameterGroupCommandOutput,
} from "./commands/ResetParameterGroupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateACLCommand, UpdateACLCommandInput, UpdateACLCommandOutput } from "./commands/UpdateACLCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import {
  UpdateParameterGroupCommand,
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "./commands/UpdateParameterGroupCommand";
import {
  UpdateSubnetGroupCommand,
  UpdateSubnetGroupCommandInput,
  UpdateSubnetGroupCommandOutput,
} from "./commands/UpdateSubnetGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { MemoryDBClient, MemoryDBClientConfig } from "./MemoryDBClient";

const commands = {
  BatchUpdateClusterCommand,
  CopySnapshotCommand,
  CreateACLCommand,
  CreateClusterCommand,
  CreateParameterGroupCommand,
  CreateSnapshotCommand,
  CreateSubnetGroupCommand,
  CreateUserCommand,
  DeleteACLCommand,
  DeleteClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSnapshotCommand,
  DeleteSubnetGroupCommand,
  DeleteUserCommand,
  DescribeACLsCommand,
  DescribeClustersCommand,
  DescribeEngineVersionsCommand,
  DescribeEventsCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeReservedNodesCommand,
  DescribeReservedNodesOfferingsCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeSubnetGroupsCommand,
  DescribeUsersCommand,
  FailoverShardCommand,
  ListAllowedNodeTypeUpdatesCommand,
  ListTagsCommand,
  PurchaseReservedNodesOfferingCommand,
  ResetParameterGroupCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateACLCommand,
  UpdateClusterCommand,
  UpdateParameterGroupCommand,
  UpdateSubnetGroupCommand,
  UpdateUserCommand,
};

export interface MemoryDB {
  /**
   * @see {@link BatchUpdateClusterCommand}
   */
  batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateClusterCommandOutput>;
  batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    cb: (err: any, data?: BatchUpdateClusterCommandOutput) => void
  ): void;
  batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateClusterCommandOutput) => void
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
   * @see {@link CreateACLCommand}
   */
  createACL(args: CreateACLCommandInput, options?: __HttpHandlerOptions): Promise<CreateACLCommandOutput>;
  createACL(args: CreateACLCommandInput, cb: (err: any, data?: CreateACLCommandOutput) => void): void;
  createACL(
    args: CreateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParameterGroupCommand}
   */
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParameterGroupCommandOutput>;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
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
   * @see {@link CreateSubnetGroupCommand}
   */
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubnetGroupCommandOutput>;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
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
   * @see {@link DeleteACLCommand}
   */
  deleteACL(args: DeleteACLCommandInput, options?: __HttpHandlerOptions): Promise<DeleteACLCommandOutput>;
  deleteACL(args: DeleteACLCommandInput, cb: (err: any, data?: DeleteACLCommandOutput) => void): void;
  deleteACL(
    args: DeleteACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParameterGroupCommand}
   */
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParameterGroupCommandOutput>;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
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
   * @see {@link DeleteSubnetGroupCommand}
   */
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubnetGroupCommandOutput>;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
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
   * @see {@link DescribeACLsCommand}
   */
  describeACLs(args: DescribeACLsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeACLsCommandOutput>;
  describeACLs(args: DescribeACLsCommandInput, cb: (err: any, data?: DescribeACLsCommandOutput) => void): void;
  describeACLs(
    args: DescribeACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeACLsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineVersionsCommand}
   */
  describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineVersionsCommandOutput>;
  describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeEngineVersionsCommandOutput) => void
  ): void;
  describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineVersionsCommandOutput) => void
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
   * @see {@link DescribeParameterGroupsCommand}
   */
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParameterGroupsCommandOutput>;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParametersCommandOutput>;
  describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  describeParameters(
    args: DescribeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodesCommand}
   */
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesCommandOutput>;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReservedNodesOfferingsCommand}
   */
  describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesOfferingsCommandOutput>;
  describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void
  ): void;
  describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void
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
   * @see {@link DescribeSubnetGroupsCommand}
   */
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubnetGroupsCommandOutput>;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
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
   * @see {@link FailoverShardCommand}
   */
  failoverShard(args: FailoverShardCommandInput, options?: __HttpHandlerOptions): Promise<FailoverShardCommandOutput>;
  failoverShard(args: FailoverShardCommandInput, cb: (err: any, data?: FailoverShardCommandOutput) => void): void;
  failoverShard(
    args: FailoverShardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverShardCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowedNodeTypeUpdatesCommand}
   */
  listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowedNodeTypeUpdatesCommandOutput>;
  listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    cb: (err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void
  ): void;
  listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseReservedNodesOfferingCommand}
   */
  purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedNodesOfferingCommandOutput>;
  purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void
  ): void;
  purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetParameterGroupCommand}
   */
  resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetParameterGroupCommandOutput>;
  resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    cb: (err: any, data?: ResetParameterGroupCommandOutput) => void
  ): void;
  resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetParameterGroupCommandOutput) => void
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
   * @see {@link UpdateACLCommand}
   */
  updateACL(args: UpdateACLCommandInput, options?: __HttpHandlerOptions): Promise<UpdateACLCommandOutput>;
  updateACL(args: UpdateACLCommandInput, cb: (err: any, data?: UpdateACLCommandOutput) => void): void;
  updateACL(
    args: UpdateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateACLCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParameterGroupCommand}
   */
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParameterGroupCommandOutput>;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubnetGroupCommand}
   */
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubnetGroupCommandOutput>;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.
 *
 *        MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.</p>
 */
export class MemoryDB extends MemoryDBClient implements MemoryDB {}
createAggregatedClient(commands, MemoryDB);
