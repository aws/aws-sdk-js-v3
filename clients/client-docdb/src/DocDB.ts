// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

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
  type CreateDBClusterCommandInput,
  type CreateDBClusterCommandOutput,
  CreateDBClusterCommand,
} from "./commands/CreateDBClusterCommand";
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
  type DescribeCertificatesCommandInput,
  type DescribeCertificatesCommandOutput,
  DescribeCertificatesCommand,
} from "./commands/DescribeCertificatesCommand";
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
import { DocDBClient } from "./DocDBClient";
import { paginateDescribeCertificates } from "./pagination/DescribeCertificatesPaginator";
import { paginateDescribeDBClusterParameterGroups } from "./pagination/DescribeDBClusterParameterGroupsPaginator";
import { paginateDescribeDBClusterParameters } from "./pagination/DescribeDBClusterParametersPaginator";
import { paginateDescribeDBClusterSnapshots } from "./pagination/DescribeDBClusterSnapshotsPaginator";
import { paginateDescribeDBClusters } from "./pagination/DescribeDBClustersPaginator";
import { paginateDescribeDBEngineVersions } from "./pagination/DescribeDBEngineVersionsPaginator";
import { paginateDescribeDBInstances } from "./pagination/DescribeDBInstancesPaginator";
import { paginateDescribeDBSubnetGroups } from "./pagination/DescribeDBSubnetGroupsPaginator";
import { paginateDescribeEvents } from "./pagination/DescribeEventsPaginator";
import { paginateDescribeEventSubscriptions } from "./pagination/DescribeEventSubscriptionsPaginator";
import { paginateDescribeGlobalClusters } from "./pagination/DescribeGlobalClustersPaginator";
import { paginateDescribeOrderableDBInstanceOptions } from "./pagination/DescribeOrderableDBInstanceOptionsPaginator";
import { paginateDescribePendingMaintenanceActions } from "./pagination/DescribePendingMaintenanceActionsPaginator";
import { waitUntilDBInstanceAvailable } from "./waiters/waitForDBInstanceAvailable";
import { waitUntilDBInstanceDeleted } from "./waiters/waitForDBInstanceDeleted";

const commands = {
  AddSourceIdentifierToSubscriptionCommand,
  AddTagsToResourceCommand,
  ApplyPendingMaintenanceActionCommand,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterSnapshotCommand,
  CreateDBClusterCommand,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterSnapshotCommand,
  CreateDBInstanceCommand,
  CreateDBSubnetGroupCommand,
  CreateEventSubscriptionCommand,
  CreateGlobalClusterCommand,
  DeleteDBClusterCommand,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterSnapshotCommand,
  DeleteDBInstanceCommand,
  DeleteDBSubnetGroupCommand,
  DeleteEventSubscriptionCommand,
  DeleteGlobalClusterCommand,
  DescribeCertificatesCommand,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParametersCommand,
  DescribeDBClustersCommand,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBEngineVersionsCommand,
  DescribeDBInstancesCommand,
  DescribeDBSubnetGroupsCommand,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEventCategoriesCommand,
  DescribeEventsCommand,
  DescribeEventSubscriptionsCommand,
  DescribeGlobalClustersCommand,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribePendingMaintenanceActionsCommand,
  FailoverDBClusterCommand,
  FailoverGlobalClusterCommand,
  ListTagsForResourceCommand,
  ModifyDBClusterCommand,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBInstanceCommand,
  ModifyDBSubnetGroupCommand,
  ModifyEventSubscriptionCommand,
  ModifyGlobalClusterCommand,
  RebootDBInstanceCommand,
  RemoveFromGlobalClusterCommand,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveTagsFromResourceCommand,
  ResetDBClusterParameterGroupCommand,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterToPointInTimeCommand,
  StartDBClusterCommand,
  StopDBClusterCommand,
  SwitchoverGlobalClusterCommand,
};
const paginators = {
  paginateDescribeCertificates,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBSubnetGroups,
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

export interface DocDB {
  /**
   * @see {@link AddSourceIdentifierToSubscriptionCommand}
   */
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;

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
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterParameterGroupCommand}
   */
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDBClusterSnapshotCommand}
   */
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterCommand}
   */
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterCommandOutput>;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  createDBCluster(
    args: CreateDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterParameterGroupCommand}
   */
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBClusterSnapshotCommand}
   */
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBInstanceCommand}
   */
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDBSubnetGroupCommand}
   */
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventSubscriptionCommand}
   */
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalClusterCommand}
   */
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterCommand}
   */
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterParameterGroupCommand}
   */
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBClusterSnapshotCommand}
   */
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBInstanceCommand}
   */
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDBSubnetGroupCommand}
   */
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventSubscriptionCommand}
   */
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalClusterCommand}
   */
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificatesCommand}
   */
  describeCertificates(): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParameterGroupsCommand}
   */
  describeDBClusterParameterGroups(): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterParametersCommand}
   */
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClustersCommand}
   */
  describeDBClusters(): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotAttributesCommand}
   */
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBClusterSnapshotsCommand}
   */
  describeDBClusterSnapshots(): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBEngineVersionsCommand}
   */
  describeDBEngineVersions(): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBInstancesCommand}
   */
  describeDBInstances(): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDBSubnetGroupsCommand}
   */
  describeDBSubnetGroups(): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEngineDefaultClusterParametersCommand}
   */
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventCategoriesCommand}
   */
  describeEventCategories(): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
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
   * @see {@link DescribeEventSubscriptionsCommand}
   */
  describeEventSubscriptions(): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalClustersCommand}
   */
  describeGlobalClusters(): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrderableDBInstanceOptionsCommand}
   */
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePendingMaintenanceActionsCommand}
   */
  describePendingMaintenanceActions(): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverDBClusterCommand}
   */
  failoverDBCluster(): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link FailoverGlobalClusterCommand}
   */
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
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
   * @see {@link ModifyDBClusterCommand}
   */
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterParameterGroupCommand}
   */
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBClusterSnapshotAttributeCommand}
   */
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBInstanceCommand}
   */
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyDBSubnetGroupCommand}
   */
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEventSubscriptionCommand}
   */
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyGlobalClusterCommand}
   */
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootDBInstanceCommand}
   */
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveFromGlobalClusterCommand}
   */
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveSourceIdentifierFromSubscriptionCommand}
   */
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
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
   * @see {@link ResetDBClusterParameterGroupCommand}
   */
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterFromSnapshotCommand}
   */
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDBClusterToPointInTimeCommand}
   */
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDBClusterCommand}
   */
  startDBCluster(
    args: StartDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBClusterCommandOutput>;
  startDBCluster(
    args: StartDBClusterCommandInput,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  startDBCluster(
    args: StartDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBClusterCommandOutput>;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link SwitchoverGlobalClusterCommand}
   */
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwitchoverGlobalClusterCommandOutput>;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;
  switchoverGlobalCluster(
    args: SwitchoverGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwitchoverGlobalClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeCertificatesCommandOutput}.
   */
  paginateDescribeCertificates(
    args?: DescribeCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeCertificatesCommandOutput>;

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
    waiterConfig: number | Omit<WaiterConfiguration<DocDB>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeDBInstancesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDBInstanceDeleted(
    args: DescribeDBInstancesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<DocDB>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Amazon DocumentDB is a fast, reliable, and fully managed database service.
 *          Amazon DocumentDB makes it easy to set up, operate, and scale MongoDB-compatible databases in the cloud.
 *          With Amazon DocumentDB, you can run the same application code and use the same drivers and tools that you use with MongoDB.</p>
 * @public
 */
export class DocDB extends DocDBClient implements DocDB {}
createAggregatedClient(commands, DocDB, { paginators, waiters });
