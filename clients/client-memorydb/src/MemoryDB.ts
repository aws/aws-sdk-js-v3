// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchUpdateClusterCommandInput,
  type BatchUpdateClusterCommandOutput,
  BatchUpdateClusterCommand,
} from "./commands/BatchUpdateClusterCommand";
import {
  type CopySnapshotCommandInput,
  type CopySnapshotCommandOutput,
  CopySnapshotCommand,
} from "./commands/CopySnapshotCommand";
import { type CreateACLCommandInput, type CreateACLCommandOutput, CreateACLCommand } from "./commands/CreateACLCommand";
import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import {
  type CreateMultiRegionClusterCommandInput,
  type CreateMultiRegionClusterCommandOutput,
  CreateMultiRegionClusterCommand,
} from "./commands/CreateMultiRegionClusterCommand";
import {
  type CreateParameterGroupCommandInput,
  type CreateParameterGroupCommandOutput,
  CreateParameterGroupCommand,
} from "./commands/CreateParameterGroupCommand";
import {
  type CreateSnapshotCommandInput,
  type CreateSnapshotCommandOutput,
  CreateSnapshotCommand,
} from "./commands/CreateSnapshotCommand";
import {
  type CreateSubnetGroupCommandInput,
  type CreateSubnetGroupCommandOutput,
  CreateSubnetGroupCommand,
} from "./commands/CreateSubnetGroupCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import { type DeleteACLCommandInput, type DeleteACLCommandOutput, DeleteACLCommand } from "./commands/DeleteACLCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import {
  type DeleteMultiRegionClusterCommandInput,
  type DeleteMultiRegionClusterCommandOutput,
  DeleteMultiRegionClusterCommand,
} from "./commands/DeleteMultiRegionClusterCommand";
import {
  type DeleteParameterGroupCommandInput,
  type DeleteParameterGroupCommandOutput,
  DeleteParameterGroupCommand,
} from "./commands/DeleteParameterGroupCommand";
import {
  type DeleteSnapshotCommandInput,
  type DeleteSnapshotCommandOutput,
  DeleteSnapshotCommand,
} from "./commands/DeleteSnapshotCommand";
import {
  type DeleteSubnetGroupCommandInput,
  type DeleteSubnetGroupCommandOutput,
  DeleteSubnetGroupCommand,
} from "./commands/DeleteSubnetGroupCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeACLsCommandInput,
  type DescribeACLsCommandOutput,
  DescribeACLsCommand,
} from "./commands/DescribeACLsCommand";
import {
  type DescribeClustersCommandInput,
  type DescribeClustersCommandOutput,
  DescribeClustersCommand,
} from "./commands/DescribeClustersCommand";
import {
  type DescribeEngineVersionsCommandInput,
  type DescribeEngineVersionsCommandOutput,
  DescribeEngineVersionsCommand,
} from "./commands/DescribeEngineVersionsCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeMultiRegionClustersCommandInput,
  type DescribeMultiRegionClustersCommandOutput,
  DescribeMultiRegionClustersCommand,
} from "./commands/DescribeMultiRegionClustersCommand";
import {
  type DescribeMultiRegionParameterGroupsCommandInput,
  type DescribeMultiRegionParameterGroupsCommandOutput,
  DescribeMultiRegionParameterGroupsCommand,
} from "./commands/DescribeMultiRegionParameterGroupsCommand";
import {
  type DescribeMultiRegionParametersCommandInput,
  type DescribeMultiRegionParametersCommandOutput,
  DescribeMultiRegionParametersCommand,
} from "./commands/DescribeMultiRegionParametersCommand";
import {
  type DescribeParameterGroupsCommandInput,
  type DescribeParameterGroupsCommandOutput,
  DescribeParameterGroupsCommand,
} from "./commands/DescribeParameterGroupsCommand";
import {
  type DescribeParametersCommandInput,
  type DescribeParametersCommandOutput,
  DescribeParametersCommand,
} from "./commands/DescribeParametersCommand";
import {
  type DescribeReservedNodesCommandInput,
  type DescribeReservedNodesCommandOutput,
  DescribeReservedNodesCommand,
} from "./commands/DescribeReservedNodesCommand";
import {
  type DescribeReservedNodesOfferingsCommandInput,
  type DescribeReservedNodesOfferingsCommandOutput,
  DescribeReservedNodesOfferingsCommand,
} from "./commands/DescribeReservedNodesOfferingsCommand";
import {
  type DescribeServiceUpdatesCommandInput,
  type DescribeServiceUpdatesCommandOutput,
  DescribeServiceUpdatesCommand,
} from "./commands/DescribeServiceUpdatesCommand";
import {
  type DescribeSnapshotsCommandInput,
  type DescribeSnapshotsCommandOutput,
  DescribeSnapshotsCommand,
} from "./commands/DescribeSnapshotsCommand";
import {
  type DescribeSubnetGroupsCommandInput,
  type DescribeSubnetGroupsCommandOutput,
  DescribeSubnetGroupsCommand,
} from "./commands/DescribeSubnetGroupsCommand";
import {
  type DescribeUsersCommandInput,
  type DescribeUsersCommandOutput,
  DescribeUsersCommand,
} from "./commands/DescribeUsersCommand";
import {
  type FailoverShardCommandInput,
  type FailoverShardCommandOutput,
  FailoverShardCommand,
} from "./commands/FailoverShardCommand";
import {
  type ListAllowedMultiRegionClusterUpdatesCommandInput,
  type ListAllowedMultiRegionClusterUpdatesCommandOutput,
  ListAllowedMultiRegionClusterUpdatesCommand,
} from "./commands/ListAllowedMultiRegionClusterUpdatesCommand";
import {
  type ListAllowedNodeTypeUpdatesCommandInput,
  type ListAllowedNodeTypeUpdatesCommandOutput,
  ListAllowedNodeTypeUpdatesCommand,
} from "./commands/ListAllowedNodeTypeUpdatesCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type PurchaseReservedNodesOfferingCommandInput,
  type PurchaseReservedNodesOfferingCommandOutput,
  PurchaseReservedNodesOfferingCommand,
} from "./commands/PurchaseReservedNodesOfferingCommand";
import {
  type ResetParameterGroupCommandInput,
  type ResetParameterGroupCommandOutput,
  ResetParameterGroupCommand,
} from "./commands/ResetParameterGroupCommand";
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
import { type UpdateACLCommandInput, type UpdateACLCommandOutput, UpdateACLCommand } from "./commands/UpdateACLCommand";
import {
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
  UpdateClusterCommand,
} from "./commands/UpdateClusterCommand";
import {
  type UpdateMultiRegionClusterCommandInput,
  type UpdateMultiRegionClusterCommandOutput,
  UpdateMultiRegionClusterCommand,
} from "./commands/UpdateMultiRegionClusterCommand";
import {
  type UpdateParameterGroupCommandInput,
  type UpdateParameterGroupCommandOutput,
  UpdateParameterGroupCommand,
} from "./commands/UpdateParameterGroupCommand";
import {
  type UpdateSubnetGroupCommandInput,
  type UpdateSubnetGroupCommandOutput,
  UpdateSubnetGroupCommand,
} from "./commands/UpdateSubnetGroupCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import { MemoryDBClient } from "./MemoryDBClient";
import { paginateDescribeACLs } from "./pagination/DescribeACLsPaginator";
import { paginateDescribeClusters } from "./pagination/DescribeClustersPaginator";
import { paginateDescribeEngineVersions } from "./pagination/DescribeEngineVersionsPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeMultiRegionClusters } from "./pagination/DescribeMultiRegionClustersPaginator";
import { paginateDescribeParameterGroups } from "./pagination/DescribeParameterGroupsPaginator";
import { paginateDescribeParameters } from "./pagination/DescribeParametersPaginator";
import { paginateDescribeReservedNodesOfferings } from "./pagination/DescribeReservedNodesOfferingsPaginator";
import { paginateDescribeReservedNodes } from "./pagination/DescribeReservedNodesPaginator";
import { paginateDescribeServiceUpdates } from "./pagination/DescribeServiceUpdatesPaginator";
import { paginateDescribeSnapshots } from "./pagination/DescribeSnapshotsPaginator";
import { paginateDescribeSubnetGroups } from "./pagination/DescribeSubnetGroupsPaginator";
import { paginateDescribeUsers } from "./pagination/DescribeUsersPaginator";

const commands = {
  BatchUpdateClusterCommand,
  CopySnapshotCommand,
  CreateACLCommand,
  CreateClusterCommand,
  CreateMultiRegionClusterCommand,
  CreateParameterGroupCommand,
  CreateSnapshotCommand,
  CreateSubnetGroupCommand,
  CreateUserCommand,
  DeleteACLCommand,
  DeleteClusterCommand,
  DeleteMultiRegionClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSnapshotCommand,
  DeleteSubnetGroupCommand,
  DeleteUserCommand,
  DescribeACLsCommand,
  DescribeClustersCommand,
  DescribeEngineVersionsCommand,
  DescribeEventsCommand,
  DescribeMultiRegionClustersCommand,
  DescribeMultiRegionParameterGroupsCommand,
  DescribeMultiRegionParametersCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeReservedNodesCommand,
  DescribeReservedNodesOfferingsCommand,
  DescribeServiceUpdatesCommand,
  DescribeSnapshotsCommand,
  DescribeSubnetGroupsCommand,
  DescribeUsersCommand,
  FailoverShardCommand,
  ListAllowedMultiRegionClusterUpdatesCommand,
  ListAllowedNodeTypeUpdatesCommand,
  ListTagsCommand,
  PurchaseReservedNodesOfferingCommand,
  ResetParameterGroupCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateACLCommand,
  UpdateClusterCommand,
  UpdateMultiRegionClusterCommand,
  UpdateParameterGroupCommand,
  UpdateSubnetGroupCommand,
  UpdateUserCommand,
};
const paginators = {
  paginateDescribeACLs,
  paginateDescribeClusters,
  paginateDescribeEngineVersions,
  paginateDescribeEvents,
  paginateDescribeMultiRegionClusters,
  paginateDescribeParameterGroups,
  paginateDescribeParameters,
  paginateDescribeReservedNodes,
  paginateDescribeReservedNodesOfferings,
  paginateDescribeServiceUpdates,
  paginateDescribeSnapshots,
  paginateDescribeSubnetGroups,
  paginateDescribeUsers,
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
  copySnapshot(
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotCommandOutput>;
  copySnapshot(
    args: CopySnapshotCommandInput,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateACLCommand}
   */
  createACL(
    args: CreateACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateACLCommandOutput>;
  createACL(
    args: CreateACLCommandInput,
    cb: (err: any, data?: CreateACLCommandOutput) => void
  ): void;
  createACL(
    args: CreateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultiRegionClusterCommand}
   */
  createMultiRegionCluster(
    args: CreateMultiRegionClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultiRegionClusterCommandOutput>;
  createMultiRegionCluster(
    args: CreateMultiRegionClusterCommandInput,
    cb: (err: any, data?: CreateMultiRegionClusterCommandOutput) => void
  ): void;
  createMultiRegionCluster(
    args: CreateMultiRegionClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultiRegionClusterCommandOutput) => void
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
  createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
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
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteACLCommand}
   */
  deleteACL(
    args: DeleteACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteACLCommandOutput>;
  deleteACL(
    args: DeleteACLCommandInput,
    cb: (err: any, data?: DeleteACLCommandOutput) => void
  ): void;
  deleteACL(
    args: DeleteACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMultiRegionClusterCommand}
   */
  deleteMultiRegionCluster(
    args: DeleteMultiRegionClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMultiRegionClusterCommandOutput>;
  deleteMultiRegionCluster(
    args: DeleteMultiRegionClusterCommandInput,
    cb: (err: any, data?: DeleteMultiRegionClusterCommandOutput) => void
  ): void;
  deleteMultiRegionCluster(
    args: DeleteMultiRegionClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMultiRegionClusterCommandOutput) => void
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
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
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
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeACLsCommand}
   */
  describeACLs(): Promise<DescribeACLsCommandOutput>;
  describeACLs(
    args: DescribeACLsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeACLsCommandOutput>;
  describeACLs(
    args: DescribeACLsCommandInput,
    cb: (err: any, data?: DescribeACLsCommandOutput) => void
  ): void;
  describeACLs(
    args: DescribeACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeACLsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
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
  describeEngineVersions(): Promise<DescribeEngineVersionsCommandOutput>;
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
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiRegionClustersCommand}
   */
  describeMultiRegionClusters(): Promise<DescribeMultiRegionClustersCommandOutput>;
  describeMultiRegionClusters(
    args: DescribeMultiRegionClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiRegionClustersCommandOutput>;
  describeMultiRegionClusters(
    args: DescribeMultiRegionClustersCommandInput,
    cb: (err: any, data?: DescribeMultiRegionClustersCommandOutput) => void
  ): void;
  describeMultiRegionClusters(
    args: DescribeMultiRegionClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiRegionClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiRegionParameterGroupsCommand}
   */
  describeMultiRegionParameterGroups(): Promise<DescribeMultiRegionParameterGroupsCommandOutput>;
  describeMultiRegionParameterGroups(
    args: DescribeMultiRegionParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiRegionParameterGroupsCommandOutput>;
  describeMultiRegionParameterGroups(
    args: DescribeMultiRegionParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeMultiRegionParameterGroupsCommandOutput) => void
  ): void;
  describeMultiRegionParameterGroups(
    args: DescribeMultiRegionParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiRegionParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMultiRegionParametersCommand}
   */
  describeMultiRegionParameters(
    args: DescribeMultiRegionParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMultiRegionParametersCommandOutput>;
  describeMultiRegionParameters(
    args: DescribeMultiRegionParametersCommandInput,
    cb: (err: any, data?: DescribeMultiRegionParametersCommandOutput) => void
  ): void;
  describeMultiRegionParameters(
    args: DescribeMultiRegionParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMultiRegionParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParameterGroupsCommand}
   */
  describeParameterGroups(): Promise<DescribeParameterGroupsCommandOutput>;
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
  describeReservedNodes(): Promise<DescribeReservedNodesCommandOutput>;
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
  describeReservedNodesOfferings(): Promise<DescribeReservedNodesOfferingsCommandOutput>;
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
  describeServiceUpdates(): Promise<DescribeServiceUpdatesCommandOutput>;
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
  describeSnapshots(): Promise<DescribeSnapshotsCommandOutput>;
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
  describeSubnetGroups(): Promise<DescribeSubnetGroupsCommandOutput>;
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
  describeUsers(): Promise<DescribeUsersCommandOutput>;
  describeUsers(
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsersCommandOutput>;
  describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverShardCommand}
   */
  failoverShard(
    args: FailoverShardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverShardCommandOutput>;
  failoverShard(
    args: FailoverShardCommandInput,
    cb: (err: any, data?: FailoverShardCommandOutput) => void
  ): void;
  failoverShard(
    args: FailoverShardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverShardCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowedMultiRegionClusterUpdatesCommand}
   */
  listAllowedMultiRegionClusterUpdates(
    args: ListAllowedMultiRegionClusterUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowedMultiRegionClusterUpdatesCommandOutput>;
  listAllowedMultiRegionClusterUpdates(
    args: ListAllowedMultiRegionClusterUpdatesCommandInput,
    cb: (err: any, data?: ListAllowedMultiRegionClusterUpdatesCommandOutput) => void
  ): void;
  listAllowedMultiRegionClusterUpdates(
    args: ListAllowedMultiRegionClusterUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowedMultiRegionClusterUpdatesCommandOutput) => void
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
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
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
   * @see {@link UpdateACLCommand}
   */
  updateACL(
    args: UpdateACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateACLCommandOutput>;
  updateACL(
    args: UpdateACLCommandInput,
    cb: (err: any, data?: UpdateACLCommandOutput) => void
  ): void;
  updateACL(
    args: UpdateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateACLCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMultiRegionClusterCommand}
   */
  updateMultiRegionCluster(
    args: UpdateMultiRegionClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMultiRegionClusterCommandOutput>;
  updateMultiRegionCluster(
    args: UpdateMultiRegionClusterCommandInput,
    cb: (err: any, data?: UpdateMultiRegionClusterCommandOutput) => void
  ): void;
  updateMultiRegionCluster(
    args: UpdateMultiRegionClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMultiRegionClusterCommandOutput) => void
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
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeACLsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeACLsCommandOutput}.
   */
  paginateDescribeACLs(
    args?: DescribeACLsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeACLsCommandOutput>;

  /**
   * @see {@link DescribeClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeClustersCommandOutput}.
   */
  paginateDescribeClusters(
    args?: DescribeClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeClustersCommandOutput>;

  /**
   * @see {@link DescribeEngineVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEngineVersionsCommandOutput}.
   */
  paginateDescribeEngineVersions(
    args?: DescribeEngineVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEngineVersionsCommandOutput>;

  /**
   * @see {@link DescribeEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventsCommandOutput}.
   */
  paginateDescribeEvents(
    args?: DescribeEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventsCommandOutput>;

  /**
   * @see {@link DescribeMultiRegionClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMultiRegionClustersCommandOutput}.
   */
  paginateDescribeMultiRegionClusters(
    args?: DescribeMultiRegionClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMultiRegionClustersCommandOutput>;

  /**
   * @see {@link DescribeParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeParameterGroupsCommandOutput}.
   */
  paginateDescribeParameterGroups(
    args?: DescribeParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeParametersCommandOutput}.
   */
  paginateDescribeParameters(
    args: DescribeParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeParametersCommandOutput>;

  /**
   * @see {@link DescribeReservedNodesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedNodesCommandOutput}.
   */
  paginateDescribeReservedNodes(
    args?: DescribeReservedNodesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedNodesCommandOutput>;

  /**
   * @see {@link DescribeReservedNodesOfferingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReservedNodesOfferingsCommandOutput}.
   */
  paginateDescribeReservedNodesOfferings(
    args?: DescribeReservedNodesOfferingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReservedNodesOfferingsCommandOutput>;

  /**
   * @see {@link DescribeServiceUpdatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeServiceUpdatesCommandOutput}.
   */
  paginateDescribeServiceUpdates(
    args?: DescribeServiceUpdatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeServiceUpdatesCommandOutput>;

  /**
   * @see {@link DescribeSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSnapshotsCommandOutput}.
   */
  paginateDescribeSnapshots(
    args?: DescribeSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeSubnetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSubnetGroupsCommandOutput}.
   */
  paginateDescribeSubnetGroups(
    args?: DescribeSubnetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSubnetGroupsCommandOutput>;

  /**
   * @see {@link DescribeUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeUsersCommandOutput}.
   */
  paginateDescribeUsers(
    args?: DescribeUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeUsersCommandOutput>;
}

/**
 * <p>MemoryDB is a fully managed, Redis OSS-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.
 *
 *        MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis OSS, a popular open source data store, enabling you to leverage Redis OSS’ flexible and friendly data structures, APIs, and commands.</p>
 * @public
 */
export class MemoryDB extends MemoryDBClient implements MemoryDB {}
createAggregatedClient(commands, MemoryDB, { paginators });
