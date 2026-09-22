// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AddRoleToDBClusterCommandInput,
  type AddRoleToDBClusterCommandOutput,
  AddRoleToDBClusterCommand,
} from "./commands/AddRoleToDBClusterCommand";
import {
  type AddSourceIdentifierToSubscriptionCommandInput,
  type AddSourceIdentifierToSubscriptionCommandOutput,
  AddSourceIdentifierToSubscriptionCommand,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import {
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AddTagsToResourceCommand,
} from "./commands/AddTagsToResourceCommand";
import {
  type ApplyPendingMaintenanceActionCommandInput,
  type ApplyPendingMaintenanceActionCommandOutput,
  ApplyPendingMaintenanceActionCommand,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  type CopyDBClusterParameterGroupCommandInput,
  type CopyDBClusterParameterGroupCommandOutput,
  CopyDBClusterParameterGroupCommand,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  type CopyDBClusterSnapshotCommandInput,
  type CopyDBClusterSnapshotCommandOutput,
  CopyDBClusterSnapshotCommand,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  type CopyDBParameterGroupCommandInput,
  type CopyDBParameterGroupCommandOutput,
  CopyDBParameterGroupCommand,
} from "./commands/CopyDBParameterGroupCommand";
import {
  type CreateDBClusterCommandInput,
  type CreateDBClusterCommandOutput,
  CreateDBClusterCommand,
} from "./commands/CreateDBClusterCommand";
import {
  type CreateDBClusterEndpointCommandInput,
  type CreateDBClusterEndpointCommandOutput,
  CreateDBClusterEndpointCommand,
} from "./commands/CreateDBClusterEndpointCommand";
import {
  type CreateDBClusterParameterGroupCommandInput,
  type CreateDBClusterParameterGroupCommandOutput,
  CreateDBClusterParameterGroupCommand,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  type CreateDBClusterSnapshotCommandInput,
  type CreateDBClusterSnapshotCommandOutput,
  CreateDBClusterSnapshotCommand,
} from "./commands/CreateDBClusterSnapshotCommand";
import {
  type CreateDBInstanceCommandInput,
  type CreateDBInstanceCommandOutput,
  CreateDBInstanceCommand,
} from "./commands/CreateDBInstanceCommand";
import {
  type CreateDBParameterGroupCommandInput,
  type CreateDBParameterGroupCommandOutput,
  CreateDBParameterGroupCommand,
} from "./commands/CreateDBParameterGroupCommand";
import {
  type CreateDBSubnetGroupCommandInput,
  type CreateDBSubnetGroupCommandOutput,
  CreateDBSubnetGroupCommand,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  type CreateEventSubscriptionCommandInput,
  type CreateEventSubscriptionCommandOutput,
  CreateEventSubscriptionCommand,
} from "./commands/CreateEventSubscriptionCommand";
import {
  type CreateGlobalClusterCommandInput,
  type CreateGlobalClusterCommandOutput,
  CreateGlobalClusterCommand,
} from "./commands/CreateGlobalClusterCommand";
import {
  type DeleteDBClusterCommandInput,
  type DeleteDBClusterCommandOutput,
  DeleteDBClusterCommand,
} from "./commands/DeleteDBClusterCommand";
import {
  type DeleteDBClusterEndpointCommandInput,
  type DeleteDBClusterEndpointCommandOutput,
  DeleteDBClusterEndpointCommand,
} from "./commands/DeleteDBClusterEndpointCommand";
import {
  type DeleteDBClusterParameterGroupCommandInput,
  type DeleteDBClusterParameterGroupCommandOutput,
  DeleteDBClusterParameterGroupCommand,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  type DeleteDBClusterSnapshotCommandInput,
  type DeleteDBClusterSnapshotCommandOutput,
  DeleteDBClusterSnapshotCommand,
} from "./commands/DeleteDBClusterSnapshotCommand";
import {
  type DeleteDBInstanceCommandInput,
  type DeleteDBInstanceCommandOutput,
  DeleteDBInstanceCommand,
} from "./commands/DeleteDBInstanceCommand";
import {
  type DeleteDBParameterGroupCommandInput,
  type DeleteDBParameterGroupCommandOutput,
  DeleteDBParameterGroupCommand,
} from "./commands/DeleteDBParameterGroupCommand";
import {
  type DeleteDBSubnetGroupCommandInput,
  type DeleteDBSubnetGroupCommandOutput,
  DeleteDBSubnetGroupCommand,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  type DeleteEventSubscriptionCommandInput,
  type DeleteEventSubscriptionCommandOutput,
  DeleteEventSubscriptionCommand,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  type DeleteGlobalClusterCommandInput,
  type DeleteGlobalClusterCommandOutput,
  DeleteGlobalClusterCommand,
} from "./commands/DeleteGlobalClusterCommand";
import {
  type DescribeDBClusterEndpointsCommandInput,
  type DescribeDBClusterEndpointsCommandOutput,
  DescribeDBClusterEndpointsCommand,
} from "./commands/DescribeDBClusterEndpointsCommand";
import {
  type DescribeDBClusterParameterGroupsCommandInput,
  type DescribeDBClusterParameterGroupsCommandOutput,
  DescribeDBClusterParameterGroupsCommand,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  type DescribeDBClusterParametersCommandInput,
  type DescribeDBClusterParametersCommandOutput,
  DescribeDBClusterParametersCommand,
} from "./commands/DescribeDBClusterParametersCommand";
import {
  type DescribeDBClustersCommandInput,
  type DescribeDBClustersCommandOutput,
  DescribeDBClustersCommand,
} from "./commands/DescribeDBClustersCommand";
import {
  type DescribeDBClusterSnapshotAttributesCommandInput,
  type DescribeDBClusterSnapshotAttributesCommandOutput,
  DescribeDBClusterSnapshotAttributesCommand,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  type DescribeDBClusterSnapshotsCommandInput,
  type DescribeDBClusterSnapshotsCommandOutput,
  DescribeDBClusterSnapshotsCommand,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  type DescribeDBEngineVersionsCommandInput,
  type DescribeDBEngineVersionsCommandOutput,
  DescribeDBEngineVersionsCommand,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  type DescribeDBInstancesCommandInput,
  type DescribeDBInstancesCommandOutput,
  DescribeDBInstancesCommand,
} from "./commands/DescribeDBInstancesCommand";
import {
  type DescribeDBParameterGroupsCommandInput,
  type DescribeDBParameterGroupsCommandOutput,
  DescribeDBParameterGroupsCommand,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  type DescribeDBParametersCommandInput,
  type DescribeDBParametersCommandOutput,
  DescribeDBParametersCommand,
} from "./commands/DescribeDBParametersCommand";
import {
  type DescribeDBSubnetGroupsCommandInput,
  type DescribeDBSubnetGroupsCommandOutput,
  DescribeDBSubnetGroupsCommand,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  type DescribeEngineDefaultClusterParametersCommandInput,
  type DescribeEngineDefaultClusterParametersCommandOutput,
  DescribeEngineDefaultClusterParametersCommand,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  type DescribeEngineDefaultParametersCommandInput,
  type DescribeEngineDefaultParametersCommandOutput,
  DescribeEngineDefaultParametersCommand,
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  type DescribeEventCategoriesCommandInput,
  type DescribeEventCategoriesCommandOutput,
  DescribeEventCategoriesCommand,
} from "./commands/DescribeEventCategoriesCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeEventSubscriptionsCommandInput,
  type DescribeEventSubscriptionsCommandOutput,
  DescribeEventSubscriptionsCommand,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  type DescribeGlobalClustersCommandInput,
  type DescribeGlobalClustersCommandOutput,
  DescribeGlobalClustersCommand,
} from "./commands/DescribeGlobalClustersCommand";
import {
  type DescribeOrderableDBInstanceOptionsCommandInput,
  type DescribeOrderableDBInstanceOptionsCommandOutput,
  DescribeOrderableDBInstanceOptionsCommand,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  type DescribePendingMaintenanceActionsCommandInput,
  type DescribePendingMaintenanceActionsCommandOutput,
  DescribePendingMaintenanceActionsCommand,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  type DescribeValidDBInstanceModificationsCommandInput,
  type DescribeValidDBInstanceModificationsCommandOutput,
  DescribeValidDBInstanceModificationsCommand,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  type FailoverDBClusterCommandInput,
  type FailoverDBClusterCommandOutput,
  FailoverDBClusterCommand,
} from "./commands/FailoverDBClusterCommand";
import {
  type FailoverGlobalClusterCommandInput,
  type FailoverGlobalClusterCommandOutput,
  FailoverGlobalClusterCommand,
} from "./commands/FailoverGlobalClusterCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ModifyDBClusterCommandInput,
  type ModifyDBClusterCommandOutput,
  ModifyDBClusterCommand,
} from "./commands/ModifyDBClusterCommand";
import {
  type ModifyDBClusterEndpointCommandInput,
  type ModifyDBClusterEndpointCommandOutput,
  ModifyDBClusterEndpointCommand,
} from "./commands/ModifyDBClusterEndpointCommand";
import {
  type ModifyDBClusterParameterGroupCommandInput,
  type ModifyDBClusterParameterGroupCommandOutput,
  ModifyDBClusterParameterGroupCommand,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  type ModifyDBClusterSnapshotAttributeCommandInput,
  type ModifyDBClusterSnapshotAttributeCommandOutput,
  ModifyDBClusterSnapshotAttributeCommand,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import {
  type ModifyDBInstanceCommandInput,
  type ModifyDBInstanceCommandOutput,
  ModifyDBInstanceCommand,
} from "./commands/ModifyDBInstanceCommand";
import {
  type ModifyDBParameterGroupCommandInput,
  type ModifyDBParameterGroupCommandOutput,
  ModifyDBParameterGroupCommand,
} from "./commands/ModifyDBParameterGroupCommand";
import {
  type ModifyDBSubnetGroupCommandInput,
  type ModifyDBSubnetGroupCommandOutput,
  ModifyDBSubnetGroupCommand,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  type ModifyEventSubscriptionCommandInput,
  type ModifyEventSubscriptionCommandOutput,
  ModifyEventSubscriptionCommand,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  type ModifyGlobalClusterCommandInput,
  type ModifyGlobalClusterCommandOutput,
  ModifyGlobalClusterCommand,
} from "./commands/ModifyGlobalClusterCommand";
import {
  type PromoteReadReplicaDBClusterCommandInput,
  type PromoteReadReplicaDBClusterCommandOutput,
  PromoteReadReplicaDBClusterCommand,
} from "./commands/PromoteReadReplicaDBClusterCommand";
import {
  type RebootDBInstanceCommandInput,
  type RebootDBInstanceCommandOutput,
  RebootDBInstanceCommand,
} from "./commands/RebootDBInstanceCommand";
import {
  type RemoveFromGlobalClusterCommandInput,
  type RemoveFromGlobalClusterCommandOutput,
  RemoveFromGlobalClusterCommand,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  type RemoveRoleFromDBClusterCommandInput,
  type RemoveRoleFromDBClusterCommandOutput,
  RemoveRoleFromDBClusterCommand,
} from "./commands/RemoveRoleFromDBClusterCommand";
import {
  type RemoveSourceIdentifierFromSubscriptionCommandInput,
  type RemoveSourceIdentifierFromSubscriptionCommandOutput,
  RemoveSourceIdentifierFromSubscriptionCommand,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  RemoveTagsFromResourceCommand,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  type ResetDBClusterParameterGroupCommandInput,
  type ResetDBClusterParameterGroupCommandOutput,
  ResetDBClusterParameterGroupCommand,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  type ResetDBParameterGroupCommandInput,
  type ResetDBParameterGroupCommandOutput,
  ResetDBParameterGroupCommand,
} from "./commands/ResetDBParameterGroupCommand";
import {
  type RestoreDBClusterFromSnapshotCommandInput,
  type RestoreDBClusterFromSnapshotCommandOutput,
  RestoreDBClusterFromSnapshotCommand,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  type RestoreDBClusterToPointInTimeCommandInput,
  type RestoreDBClusterToPointInTimeCommandOutput,
  RestoreDBClusterToPointInTimeCommand,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import {
  type StartDBClusterCommandInput,
  type StartDBClusterCommandOutput,
  StartDBClusterCommand,
} from "./commands/StartDBClusterCommand";
import {
  type StopDBClusterCommandInput,
  type StopDBClusterCommandOutput,
  StopDBClusterCommand,
} from "./commands/StopDBClusterCommand";
import {
  type SwitchoverGlobalClusterCommandInput,
  type SwitchoverGlobalClusterCommandOutput,
  SwitchoverGlobalClusterCommand,
} from "./commands/SwitchoverGlobalClusterCommand";
import type { DBInstanceNotFoundFault } from "./models/errors";
import type { NeptuneServiceException } from "./models/NeptuneServiceException";
import { NeptuneClient } from "./NeptuneClient";
import { paginateDescribeDBClusterEndpoints } from "./pagination/DescribeDBClusterEndpointsPaginator";
import { paginateDescribeDBClusterParameterGroups } from "./pagination/DescribeDBClusterParameterGroupsPaginator";
import { paginateDescribeDBClusterParameters } from "./pagination/DescribeDBClusterParametersPaginator";
import { paginateDescribeDBClusterSnapshots } from "./pagination/DescribeDBClusterSnapshotsPaginator";
import { paginateDescribeDBClusters } from "./pagination/DescribeDBClustersPaginator";
import { paginateDescribeDBEngineVersions } from "./pagination/DescribeDBEngineVersionsPaginator";
import { paginateDescribeDBInstances } from "./pagination/DescribeDBInstancesPaginator";
import { paginateDescribeDBParameterGroups } from "./pagination/DescribeDBParameterGroupsPaginator";
import { paginateDescribeDBParameters } from "./pagination/DescribeDBParametersPaginator";
import { paginateDescribeDBSubnetGroups } from "./pagination/DescribeDBSubnetGroupsPaginator";
import { paginateDescribeEngineDefaultParameters } from "./pagination/DescribeEngineDefaultParametersPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeEventSubscriptions } from "./pagination/DescribeEventSubscriptionsPaginator";
import { paginateDescribeGlobalClusters } from "./pagination/DescribeGlobalClustersPaginator";
import { paginateDescribeOrderableDBInstanceOptions } from "./pagination/DescribeOrderableDBInstanceOptionsPaginator";
import { paginateDescribePendingMaintenanceActions } from "./pagination/DescribePendingMaintenanceActionsPaginator";
import { waitUntilDBInstanceAvailable } from "./waiters/waitForDBInstanceAvailable";
import { waitUntilDBInstanceDeleted } from "./waiters/waitForDBInstanceDeleted";

const commands = {
  AddRoleToDBClusterCommand,
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CopyDBParameterGroupCommand,
  CreateDBClusterCommand,
  CreateDBClusterEndpointCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBParameterGroupCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBParameterGroupCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClustersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstancesCommand,
  DescribeDBParameterGroupsCommand,
  DescribeDBParametersCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeGlobalClustersCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  DescribeValidDBInstanceModificationsCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBParameterGroupCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  PromoteReadReplicaDBClusterCommand,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveRoleFromDBClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  ResetDBParameterGroupCommand,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  StartDBClusterCommand,
  StopDBClusterCommand,
  SwitchoverGlobalClusterCommand,
};
const paginators = {
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBParameterGroups,
  paginateDescribeDBParameters,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
  paginateDescribeGlobalClusters,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
};
const waiters = {
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
};

/**
 * @public
 */
export interface NeptuneRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Neptune {
  /**
   * @see {@link AddRoleToDBClusterCommand}
   */
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<AddRoleToDBClusterCommandOutput>;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBParameterGroupCommand}
   */
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CopyDBParameterGroupCommandOutput>;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBClusterCommandOutput>;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterEndpointCommand}
   */
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBClusterEndpointCommandOutput>;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBParameterGroupCommand}
   */
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBParameterGroupCommandOutput>;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterEndpointCommand}
   */
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBClusterEndpointCommandOutput>;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBParameterGroupCommand}
   */
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBParameterGroupCommandOutput>;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   */
  describeDBClusterEndpoints(): Promise<DescribeDBClusterEndpointsCommandOutput>;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClusterEndpointsCommandOutput>;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   */
  describeDBParameterGroups(): Promise<DescribeDBParameterGroupsCommandOutput>;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBParameterGroupsCommandOutput>;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBParametersCommand}
   */
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBParametersCommandOutput>;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   */
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeValidDBInstanceModificationsCommand}
   */
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterEndpointCommand}
   */
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBClusterEndpointCommandOutput>;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBParameterGroupCommand}
   */
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBParameterGroupCommandOutput>;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link PromoteReadReplicaDBClusterCommand}
   */
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<PromoteReadReplicaDBClusterCommandOutput>;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromDBClusterCommand}
   */
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RemoveRoleFromDBClusterCommandOutput>;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetDBParameterGroupCommand}
   */
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<ResetDBParameterGroupCommandOutput>;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<StartDBClusterCommandOutput>;
  startDBCluster(
    args: StartDBClusterCommandInput,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  startDBCluster(
    args: StartDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<StopDBClusterCommandOutput>;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options?: NeptuneRequestOptions
  ): Promise<SwitchoverGlobalClusterCommandOutput>;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options: NeptuneRequestOptions,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterEndpointsCommandOutput}.
   */
  paginateDescribeDBClusterEndpoints(
    args?: DescribeDBClusterEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterEndpointsCommandOutput>;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterParameterGroupsCommandOutput}.
   */
  paginateDescribeDBClusterParameterGroups(
    args?: DescribeDBClusterParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterParametersCommandOutput}.
   */
  paginateDescribeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterParametersCommandOutput>;

  /**
   * @see {@link DescribeDBClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClustersCommandOutput}.
   */
  paginateDescribeDBClusters(
    args?: DescribeDBClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClustersCommandOutput>;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBClusterSnapshotsCommandOutput}.
   */
  paginateDescribeDBClusterSnapshots(
    args?: DescribeDBClusterSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBClusterSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBEngineVersionsCommandOutput}.
   */
  paginateDescribeDBEngineVersions(
    args?: DescribeDBEngineVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBEngineVersionsCommandOutput>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBInstancesCommandOutput}.
   */
  paginateDescribeDBInstances(
    args?: DescribeDBInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBInstancesCommandOutput>;

  /**
   * @see {@link DescribeDBParameterGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBParameterGroupsCommandOutput}.
   */
  paginateDescribeDBParameterGroups(
    args?: DescribeDBParameterGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBParameterGroupsCommandOutput>;

  /**
   * @see {@link DescribeDBParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBParametersCommandOutput}.
   */
  paginateDescribeDBParameters(
    args: DescribeDBParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBParametersCommandOutput>;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDBSubnetGroupsCommandOutput}.
   */
  paginateDescribeDBSubnetGroups(
    args?: DescribeDBSubnetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDBSubnetGroupsCommandOutput>;

  /**
   * @see {@link DescribeEngineDefaultParametersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEngineDefaultParametersCommandOutput}.
   */
  paginateDescribeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEngineDefaultParametersCommandOutput>;

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
   * @see {@link DescribeEventSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeEventSubscriptionsCommandOutput}.
   */
  paginateDescribeEventSubscriptions(
    args?: DescribeEventSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeEventSubscriptionsCommandOutput>;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeGlobalClustersCommandOutput}.
   */
  paginateDescribeGlobalClusters(
    args?: DescribeGlobalClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeGlobalClustersCommandOutput>;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrderableDBInstanceOptionsCommandOutput}.
   */
  paginateDescribeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput>;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePendingMaintenanceActionsCommandOutput}.
   */
  paginateDescribePendingMaintenanceActions(
    args?: DescribePendingMaintenanceActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePendingMaintenanceActionsCommandOutput>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBInstanceAvailable(
    args: DescribeDBInstancesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Neptune>, "client">
  ): Promise<WaiterResult<DescribeDBInstancesCommandOutput>>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBInstanceDeleted(
    args: DescribeDBInstancesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Neptune>, "client">
  ): Promise<WaiterResult<DescribeDBInstancesCommandOutput | DBInstanceNotFoundFault>>;
}

/**
 * <fullname>Amazon Neptune</fullname>
 *          <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it
 *       easy to build and run applications that work with highly connected datasets. The core of
 *       Amazon Neptune is a purpose-built, high-performance graph database engine optimized for
 *       storing billions of relationships and querying the graph with milliseconds latency. Amazon
 *       Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query
 *       languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that
 *       efficiently navigate highly connected datasets. Neptune powers graph use cases such as
 *       recommendation engines, fraud detection, knowledge graphs, drug discovery, and network
 *       security.</p>
 *          <p>This interface reference for Amazon Neptune contains documentation for a programming or
 *       command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
 *       asynchronous, which means that some interfaces might require techniques such as polling or
 *       callback functions to determine when a command has been applied. In this reference, the
 *       parameter descriptions indicate whether a command is applied immediately, on the next instance
 *       reboot, or during the maintenance window. The reference structure is as follows, and we list
 *       following some related topics from the user guide.</p>
 * @public
 */
export class Neptune extends NeptuneClient implements Neptune {}
createAggregatedClient(commands, Neptune, { paginators, waiters });
