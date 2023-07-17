// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddSourceIdentifierToSubscriptionCommand,
  AddSourceIdentifierToSubscriptionCommandInput,
  AddSourceIdentifierToSubscriptionCommandOutput,
} from "./commands/AddSourceIdentifierToSubscriptionCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
} from "./commands/CopyDBClusterParameterGroupCommand";
import {
  CopyDBClusterSnapshotCommand,
  CopyDBClusterSnapshotCommandInput,
  CopyDBClusterSnapshotCommandOutput,
} from "./commands/CopyDBClusterSnapshotCommand";
import {
  CreateDBClusterCommand,
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
} from "./commands/CreateDBClusterCommand";
import {
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
} from "./commands/CreateDBClusterParameterGroupCommand";
import {
  CreateDBClusterSnapshotCommand,
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
} from "./commands/CreateDBClusterSnapshotCommand";
import {
  CreateDBInstanceCommand,
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
} from "./commands/CreateDBInstanceCommand";
import {
  CreateDBSubnetGroupCommand,
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
} from "./commands/CreateDBSubnetGroupCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateGlobalClusterCommand,
  CreateGlobalClusterCommandInput,
  CreateGlobalClusterCommandOutput,
} from "./commands/CreateGlobalClusterCommand";
import {
  DeleteDBClusterCommand,
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
} from "./commands/DeleteDBClusterCommand";
import {
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterParameterGroupCommandInput,
  DeleteDBClusterParameterGroupCommandOutput,
} from "./commands/DeleteDBClusterParameterGroupCommand";
import {
  DeleteDBClusterSnapshotCommand,
  DeleteDBClusterSnapshotCommandInput,
  DeleteDBClusterSnapshotCommandOutput,
} from "./commands/DeleteDBClusterSnapshotCommand";
import {
  DeleteDBInstanceCommand,
  DeleteDBInstanceCommandInput,
  DeleteDBInstanceCommandOutput,
} from "./commands/DeleteDBInstanceCommand";
import {
  DeleteDBSubnetGroupCommand,
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
} from "./commands/DeleteDBSubnetGroupCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteGlobalClusterCommand,
  DeleteGlobalClusterCommandInput,
  DeleteGlobalClusterCommandOutput,
} from "./commands/DeleteGlobalClusterCommand";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "./commands/DescribeDBClusterParameterGroupsCommand";
import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "./commands/DescribeDBClusterParametersCommand";
import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "./commands/DescribeDBClustersCommand";
import {
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
} from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "./commands/DescribeDBClusterSnapshotsCommand";
import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "./commands/DescribeDBEngineVersionsCommand";
import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "./commands/DescribeDBInstancesCommand";
import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "./commands/DescribeDBSubnetGroupsCommand";
import {
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
} from "./commands/DescribeEngineDefaultClusterParametersCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput,
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "./commands/DescribeGlobalClustersCommand";
import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  FailoverDBClusterCommand,
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
} from "./commands/FailoverDBClusterCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyDBClusterCommand,
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput,
} from "./commands/ModifyDBClusterCommand";
import {
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterParameterGroupCommandInput,
  ModifyDBClusterParameterGroupCommandOutput,
} from "./commands/ModifyDBClusterParameterGroupCommand";
import {
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
} from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import {
  ModifyDBInstanceCommand,
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput,
} from "./commands/ModifyDBInstanceCommand";
import {
  ModifyDBSubnetGroupCommand,
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
} from "./commands/ModifyDBSubnetGroupCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput,
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyGlobalClusterCommand,
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
} from "./commands/ModifyGlobalClusterCommand";
import {
  RebootDBInstanceCommand,
  RebootDBInstanceCommandInput,
  RebootDBInstanceCommandOutput,
} from "./commands/RebootDBInstanceCommand";
import {
  RemoveFromGlobalClusterCommand,
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
} from "./commands/RemoveFromGlobalClusterCommand";
import {
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
} from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetDBClusterParameterGroupCommand,
  ResetDBClusterParameterGroupCommandInput,
  ResetDBClusterParameterGroupCommandOutput,
} from "./commands/ResetDBClusterParameterGroupCommand";
import {
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
} from "./commands/RestoreDBClusterFromSnapshotCommand";
import {
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
} from "./commands/RestoreDBClusterToPointInTimeCommand";
import {
  StartDBClusterCommand,
  StartDBClusterCommandInput,
  StartDBClusterCommandOutput,
} from "./commands/StartDBClusterCommand";
import {
  StopDBClusterCommand,
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput,
} from "./commands/StopDBClusterCommand";
import { DocDBClient, DocDBClientConfig } from "./DocDBClient";

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
  createDBCluster(args: CreateDBClusterCommandInput, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
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
  deleteDBCluster(args: DeleteDBClusterCommandInput, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
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
   * @see {@link DescribeEventSubscriptionsCommand}
   */
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
  modifyDBCluster(args: ModifyDBClusterCommandInput, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
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
  startDBCluster(args: StartDBClusterCommandInput, cb: (err: any, data?: StartDBClusterCommandOutput) => void): void;
  startDBCluster(
    args: StartDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDBClusterCommand}
   */
  stopDBCluster(args: StopDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<StopDBClusterCommandOutput>;
  stopDBCluster(args: StopDBClusterCommandInput, cb: (err: any, data?: StopDBClusterCommandOutput) => void): void;
  stopDBCluster(
    args: StopDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon DocumentDB is a fast, reliable, and fully managed database service.
 *          Amazon DocumentDB makes it easy to set up, operate, and scale MongoDB-compatible databases in the cloud.
 *          With Amazon DocumentDB, you can run the same application code and use the same drivers and tools that you use with MongoDB.</p>
 */
export class DocDB extends DocDBClient implements DocDB {}
createAggregatedClient(commands, DocDB);
