// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddRoleToDBClusterCommand,
  AddRoleToDBClusterCommandInput,
  AddRoleToDBClusterCommandOutput,
} from "./commands/AddRoleToDBClusterCommand";
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
  CopyDBParameterGroupCommand,
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
} from "./commands/CopyDBParameterGroupCommand";
import {
  CreateDBClusterCommand,
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
} from "./commands/CreateDBClusterCommand";
import {
  CreateDBClusterEndpointCommand,
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
} from "./commands/CreateDBClusterEndpointCommand";
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
  CreateDBParameterGroupCommand,
  CreateDBParameterGroupCommandInput,
  CreateDBParameterGroupCommandOutput,
} from "./commands/CreateDBParameterGroupCommand";
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
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterEndpointCommandInput,
  DeleteDBClusterEndpointCommandOutput,
} from "./commands/DeleteDBClusterEndpointCommand";
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
  DeleteDBParameterGroupCommand,
  DeleteDBParameterGroupCommandInput,
  DeleteDBParameterGroupCommandOutput,
} from "./commands/DeleteDBParameterGroupCommand";
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
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "./commands/DescribeDBClusterEndpointsCommand";
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
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "./commands/DescribeDBParameterGroupsCommand";
import {
  DescribeDBParametersCommand,
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
} from "./commands/DescribeDBParametersCommand";
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
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
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
  DescribeValidDBInstanceModificationsCommand,
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
} from "./commands/DescribeValidDBInstanceModificationsCommand";
import {
  FailoverDBClusterCommand,
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
} from "./commands/FailoverDBClusterCommand";
import {
  FailoverGlobalClusterCommand,
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
} from "./commands/FailoverGlobalClusterCommand";
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
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
} from "./commands/ModifyDBClusterEndpointCommand";
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
  ModifyDBParameterGroupCommand,
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
} from "./commands/ModifyDBParameterGroupCommand";
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
  PromoteReadReplicaDBClusterCommand,
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
} from "./commands/PromoteReadReplicaDBClusterCommand";
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
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
} from "./commands/RemoveRoleFromDBClusterCommand";
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
  ResetDBParameterGroupCommand,
  ResetDBParameterGroupCommandInput,
  ResetDBParameterGroupCommandOutput,
} from "./commands/ResetDBParameterGroupCommand";
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
import { NeptuneClient } from "./NeptuneClient";

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
 *
 *          <p>This interface reference for Amazon Neptune contains documentation for a programming or
 *       command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
 *       asynchronous, which means that some interfaces might require techniques such as polling or
 *       callback functions to determine when a command has been applied. In this reference, the
 *       parameter descriptions indicate whether a command is applied immediately, on the next instance
 *       reboot, or during the maintenance window. The reference structure is as follows, and we list
 *       following some related topics from the user guide.</p>
 */
export class Neptune extends NeptuneClient {
  /**
   * <p>Associates an Identity and Access Management (IAM) role with an
   *       Neptune DB cluster.</p>
   */
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToDBClusterCommandOutput>;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddRoleToDBClusterCommandOutput) => void),
    cb?: (err: any, data?: AddRoleToDBClusterCommandOutput) => void
  ): Promise<AddRoleToDBClusterCommandOutput> | void {
    const command = new AddRoleToDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a source identifier to an existing event notification subscription.</p>
   */
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void
  ): Promise<AddSourceIdentifierToSubscriptionCommandOutput> | void {
    const command = new AddSourceIdentifierToSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost
   *       allocation reporting to track cost associated with Amazon Neptune resources, or used in a
   *       Condition statement in an IAM policy for Amazon Neptune.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
   */
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void),
    cb?: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> | void {
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified DB cluster parameter group.</p>
   */
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterParameterGroupCommandOutput>;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void
  ): Promise<CopyDBClusterParameterGroupCommandOutput> | void {
    const command = new CopyDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies a snapshot of a DB cluster.</p>
   *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot,
   *       <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the
   *       shared DB cluster snapshot.</p>
   */
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBClusterSnapshotCommandOutput>;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void
  ): Promise<CopyDBClusterSnapshotCommandOutput> | void {
    const command = new CopyDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified DB parameter group.</p>
   */
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDBParameterGroupCommandOutput>;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CopyDBParameterGroupCommandOutput) => void
  ): Promise<CopyDBParameterGroupCommandOutput> | void {
    const command = new CopyDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Neptune DB cluster.</p>
   *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
   *       cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
   *          <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly,
   *       deletion protection is disabled by default (when you create a new production cluster in
   *       the console, deletion protection is enabled by default). You can only delete a DB
   *       cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
   */
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterCommandOutput>;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterCommandOutput) => void
  ): Promise<CreateDBClusterCommandOutput> | void {
    const command = new CreateDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.</p>
   */
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterEndpointCommandOutput>;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): void;
  public createDBClusterEndpoint(
    args: CreateDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterEndpointCommandOutput) => void
  ): Promise<CreateDBClusterEndpointCommandOutput> | void {
    const command = new CreateDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB cluster parameter group.</p>
   *          <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB
   *       cluster.</p>
   *          <p> A DB cluster parameter group is initially created with the default
   *       parameters for the database engine used by instances in the DB cluster.
   *       To provide custom values for any of the parameters, you must modify the
   *       group after creating it using <a>ModifyDBClusterParameterGroup</a>.
   *       Once you've created a DB cluster parameter group, you need to associate it
   *       with your DB cluster using <a>ModifyDBCluster</a>.
   *       When you associate a new DB cluster parameter group with a running DB cluster,
   *       you need to reboot the DB instances in the DB cluster without failover for the
   *       new DB cluster parameter group and associated settings to take effect.</p>
   *          <important>
   *             <p>After you create a DB cluster parameter group, you should wait at least
   *         5 minutes before creating your first DB cluster that uses that DB cluster
   *         parameter group as the default parameter group. This allows Amazon Neptune
   *         to fully complete the create action before the DB cluster parameter group
   *         is used as the default for a new DB cluster. This is especially important for
   *         parameters that are critical when creating the default database for a DB
   *         cluster, such as the character set for the default database defined by the
   *         <code>character_set_database</code> parameter. You can use the <i>Parameter
   *         Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune
   *         console</a> or the <a>DescribeDBClusterParameters</a>
   *         command to verify that your DB cluster parameter group has been created or modified.</p>
   *          </important>
   */
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterParameterGroupCommandOutput>;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void
  ): Promise<CreateDBClusterParameterGroupCommandOutput> | void {
    const command = new CreateDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a snapshot of a DB cluster.</p>
   */
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBClusterSnapshotCommandOutput>;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void
  ): Promise<CreateDBClusterSnapshotCommandOutput> | void {
    const command = new CreateDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB instance.</p>
   */
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBInstanceCommandOutput>;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateDBInstanceCommandOutput) => void
  ): Promise<CreateDBInstanceCommandOutput> | void {
    const command = new CreateDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB parameter group.</p>
   *
   *          <p>A DB parameter group is initially created with the default parameters for the database
   *       engine used by the DB instance. To provide custom values for any of the parameters, you must
   *       modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once
   *       you've created a DB parameter group, you need to associate it with your DB instance using
   *       <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a
   *       running DB instance, you need to reboot the DB instance without failover for the new DB
   *       parameter group and associated settings to take effect.</p>
   *
   *          <important>
   *             <p>After you create a DB parameter group, you should wait at least 5 minutes before
   *         creating your first DB instance that uses that DB parameter group as the default parameter
   *         group. This allows Amazon Neptune to fully complete the create action before the parameter
   *         group is used as the default for a new DB instance. This is especially important for
   *         parameters that are critical when creating the default database for a DB instance, such as
   *         the character set for the default database defined by the
   *         <code>character_set_database</code> parameter. You can use the <i>Parameter
   *         Groups</i> option of the Amazon Neptune console or the
   *         <i>DescribeDBParameters</i> command to verify that your DB parameter group has
   *         been created or modified.</p>
   *          </important>
   */
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBParameterGroupCommandOutput>;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBParameterGroupCommandOutput) => void
  ): Promise<CreateDBParameterGroupCommandOutput> | void {
    const command = new CreateDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at
   *       least two AZs in the Amazon Region.</p>
   */
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDBSubnetGroupCommandOutput>;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void
  ): Promise<CreateDBSubnetGroupCommandOutput> | void {
    const command = new CreateDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon
   *       Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To
   *       obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The
   *       ARN is displayed in the SNS console.</p>
   *          <p>You can specify the type of source (SourceType) you want to be notified of, provide a list
   *       of Neptune sources (SourceIds) that triggers the events, and provide a list of event
   *       categories (EventCategories) for events you want to be notified of. For example, you can
   *       specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories
   *       = Availability, Backup.</p>
   *          <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and
   *       SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the
   *       specified source. If you specify a SourceType but do not specify a SourceIdentifier, you
   *       receive notice of the events for that source type for all your Neptune sources. If you do not
   *       specify either the SourceType nor the SourceIdentifier, you are notified of events generated
   *       from all Neptune sources belonging to your customer account.</p>
   */
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventSubscriptionCommandOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): Promise<CreateEventSubscriptionCommandOutput> | void {
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a Neptune global database spread across multiple Amazon Regions.
   *       The global database contains a single primary cluster with read-write
   *       capability, and read-only secondary clusters that receive data from the
   *       primary cluster through high-speed replication performed by the Neptune
   *       storage subsystem.</p>
   *
   *          <p>You can create a global database that is initially empty, and then
   *       add a primary cluster and secondary clusters to it, or you can specify
   *       an existing Neptune cluster during the create operation to become the
   *       primary cluster of the global database.</p>
   */
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalClusterCommandOutput>;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): void;
  public createGlobalCluster(
    args: CreateGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateGlobalClusterCommandOutput) => void
  ): Promise<CreateGlobalClusterCommandOutput> | void {
    const command = new CreateGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a
   *       DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
   *       Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
   *
   *          <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled.  To
   *       delete it, you must first set its <code>DeletionProtection</code> field to
   *       <code>False</code>.</p>
   */
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterCommandOutput>;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterCommandOutput) => void
  ): Promise<DeleteDBClusterCommandOutput> | void {
    const command = new DeleteDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.</p>
   */
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterEndpointCommandOutput>;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): void;
  public deleteDBClusterEndpoint(
    args: DeleteDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterEndpointCommandOutput) => void
  ): Promise<DeleteDBClusterEndpointCommandOutput> | void {
    const command = new DeleteDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be
   *       deleted can't be associated with any DB clusters.</p>
   */
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterParameterGroupCommandOutput>;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void
  ): Promise<DeleteDBClusterParameterGroupCommandOutput> | void {
    const command = new DeleteDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is
   *       terminated.</p>
   *          <note>
   *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
   *         deleted.</p>
   *          </note>
   */
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBClusterSnapshotCommandOutput>;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void
  ): Promise<DeleteDBClusterSnapshotCommandOutput> | void {
    const command = new DeleteDBClusterSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete
   *       a DB instance, all automated backups for that instance are deleted and can't be recovered.
   *       Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not
   *       deleted.</p>
   *          <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is
   *       <code>deleting</code> until the DB snapshot is created. The API action
   *       <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action
   *       can't be canceled or reverted once submitted.</p>
   *          <p>Note that when a DB instance is in a failure state and has a status of
   *       <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>,
   *       you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to
   *       <code>true</code>.</p>
   *          <p>You can't delete a DB instance if it is the only instance in the DB cluster, or
   *       if it has deletion protection enabled.</p>
   */
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBInstanceCommandOutput>;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBInstanceCommandOutput) => void
  ): Promise<DeleteDBInstanceCommandOutput> | void {
    const command = new DeleteDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be
   *       associated with any DB instances.</p>
   */
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBParameterGroupCommandOutput>;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void
  ): Promise<DeleteDBParameterGroupCommandOutput> | void {
    const command = new DeleteDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a DB subnet group.</p>
   *          <note>
   *             <p>The specified database subnet group must not be associated with any DB instances.</p>
   *          </note>
   */
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDBSubnetGroupCommandOutput>;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void
  ): Promise<DeleteDBSubnetGroupCommandOutput> | void {
    const command = new DeleteDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an event notification subscription.</p>
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventSubscriptionCommandOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): Promise<DeleteEventSubscriptionCommandOutput> | void {
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a global database. The primary and all secondary clusters must
   *       already be detached or deleted first.</p>
   */
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalClusterCommandOutput>;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): void;
  public deleteGlobalCluster(
    args: DeleteGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteGlobalClusterCommandOutput) => void
  ): Promise<DeleteGlobalClusterCommandOutput> | void {
    const command = new DeleteGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about endpoints for an Amazon Neptune DB cluster.</p>
   *          <note>
   *             <p>This operation can also return information for Amazon RDS clusters
   *         and Amazon DocDB clusters.</p>
   *          </note>
   */
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterEndpointsCommandOutput>;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): void;
  public describeDBClusterEndpoints(
    args: DescribeDBClusterEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterEndpointsCommandOutput) => void
  ): Promise<DescribeDBClusterEndpointsCommandOutput> | void {
    const command = new DescribeDBClusterEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
   *       <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only
   *       the description of the specified DB cluster parameter group.</p>
   */
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput> | void {
    const command = new DescribeDBClusterParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
   */
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterParametersCommandOutput>;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void
  ): Promise<DescribeDBClusterParametersCommandOutput> | void {
    const command = new DescribeDBClusterParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about provisioned DB clusters, and supports
   *       pagination.</p>
   *
   *          <note>
   *             <p>This operation can also return information for Amazon RDS clusters
   *     and Amazon DocDB clusters.</p>
   *          </note>
   */
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClustersCommandOutput>;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClustersCommandOutput) => void
  ): Promise<DescribeDBClustersCommandOutput> | void {
    const command = new DescribeDBClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
   *       snapshot.</p>
   *          <p>When sharing snapshots with other Amazon accounts,
   *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
   *       and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB
   *       cluster snapshot. If <code>all</code> is included in the list of values for the
   *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
   *       copied or restored by all Amazon accounts.</p>
   *          <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster
   *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> | void {
    const command = new DescribeDBClusterSnapshotAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about DB cluster snapshots. This API action supports
   *       pagination.</p>
   */
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBClusterSnapshotsCommandOutput>;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void
  ): Promise<DescribeDBClusterSnapshotsCommandOutput> | void {
    const command = new DescribeDBClusterSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the available DB engines.</p>
   */
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBEngineVersionsCommandOutput>;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void
  ): Promise<DescribeDBEngineVersionsCommandOutput> | void {
    const command = new DescribeDBEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about provisioned instances, and supports pagination.</p>
   *
   *          <note>
   *             <p>This operation can also return information for Amazon RDS instances
   *     and Amazon DocDB instances.</p>
   *          </note>
   */
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBInstancesCommandOutput>;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBInstancesCommandOutput) => void
  ): Promise<DescribeDBInstancesCommandOutput> | void {
    const command = new DescribeDBInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a
   *       <code>DBParameterGroupName</code> is specified, the list will contain only the description of
   *       the specified DB parameter group.</p>
   */
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParameterGroupsCommandOutput>;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void
  ): Promise<DescribeDBParameterGroupsCommandOutput> | void {
    const command = new DescribeDBParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
   */
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBParametersCommandOutput>;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBParametersCommandOutput) => void
  ): Promise<DescribeDBParametersCommandOutput> | void {
    const command = new DescribeDBParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the
   *       list will contain only the descriptions of the specified DBSubnetGroup.</p>
   *          <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
   */
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDBSubnetGroupsCommandOutput>;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void
  ): Promise<DescribeDBSubnetGroupsCommandOutput> | void {
    const command = new DescribeDBSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the cluster database
   *       engine.</p>
   */
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput> | void {
    const command = new DescribeEngineDefaultClusterParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the specified database
   *       engine.</p>
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineDefaultParametersCommandOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void
  ): Promise<DescribeEngineDefaultParametersCommandOutput> | void {
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Displays a list of categories for all event source types, or, if specified, for a
   *       specified source type.</p>
   */
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventCategoriesCommandOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventCategoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): Promise<DescribeEventCategoriesCommandOutput> | void {
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter
   *       groups for the past 14 days. Events specific to a particular DB instance, DB security group,
   *       database snapshot, or DB parameter group can be obtained by providing the name as a parameter.
   *       By default, the past hour of events are returned.</p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the subscription descriptions for a customer account. The description for a
   *       subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID,
   *       CreationTime, and Status.</p>
   *          <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSubscriptionsCommandOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): Promise<DescribeEventSubscriptionsCommandOutput> | void {
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about Neptune global database clusters. This API
   *       supports pagination.</p>
   */
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalClustersCommandOutput>;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): void;
  public describeGlobalClusters(
    args: DescribeGlobalClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalClustersCommandOutput) => void
  ): Promise<DescribeGlobalClustersCommandOutput> | void {
    const command = new DescribeGlobalClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of orderable DB instance options for the specified engine.</p>
   */
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void
  ): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> | void {
    const command = new DescribeOrderableDBInstanceOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of resources (for example, DB instances) that have at least one pending
   *       maintenance action.</p>
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> | void {
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You can call <a>DescribeValidDBInstanceModifications</a>
   *       to learn what modifications you can make to your DB instance. You can use this
   *       information when you call <a>ModifyDBInstance</a>.</p>
   */
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput> | void {
    const command = new DescribeValidDBInstanceModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Forces a failover for a DB cluster.</p>
   *          <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the
   *       DB cluster to be the primary instance (the cluster writer).</p>
   *          <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the
   *       primary instance fails. You can force a failover when you want to simulate a failure of a
   *       primary instance for testing. Because each instance in a DB cluster has its own endpoint
   *       address, you will need to clean up and re-establish any existing connections that use those
   *       endpoint addresses when the failover is complete.</p>
   */
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverDBClusterCommandOutput>;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FailoverDBClusterCommandOutput) => void),
    cb?: (err: any, data?: FailoverDBClusterCommandOutput) => void
  ): Promise<FailoverDBClusterCommandOutput> | void {
    const command = new FailoverDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the failover process for a Neptune global database.</p>
   *          <p>A failover for a Neptune global database promotes one of secondary
   *       read-only DB clusters to be the primary DB cluster and demotes the
   *       primary DB cluster to being a secondary (read-only) DB cluster. In other
   *       words, the role of the current primary DB cluster and the selected
   *       target secondary DB cluster are switched. The selected secondary DB cluster
   *       assumes full read/write capabilities for the Neptune global database.</p>
   *
   *          <note>
   *             <p>This action applies <b>only</b> to
   *       Neptune global databases. This action is only intended for use on healthy
   *       Neptune global databases with healthy Neptune DB clusters and no region-wide
   *       outages, to test disaster recovery scenarios or to reconfigure the global
   *       database topology.</p>
   *          </note>
   */
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverGlobalClusterCommandOutput>;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): void;
  public failoverGlobalCluster(
    args: FailoverGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FailoverGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: FailoverGlobalClusterCommandOutput) => void
  ): Promise<FailoverGlobalClusterCommandOutput> | void {
    const command = new FailoverGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags on an Amazon Neptune resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify a setting for a DB cluster. You can change one or more database configuration
   *       parameters by specifying these parameters and the new values in the request.</p>
   */
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterCommandOutput>;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterCommandOutput) => void
  ): Promise<ModifyDBClusterCommandOutput> | void {
    const command = new ModifyDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the properties of an endpoint in an Amazon Neptune DB cluster.</p>
   */
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterEndpointCommandOutput>;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): void;
  public modifyDBClusterEndpoint(
    args: ModifyDBClusterEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterEndpointCommandOutput) => void
  ): Promise<ModifyDBClusterEndpointCommandOutput> | void {
    const command = new ModifyDBClusterEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one
   *       parameter, submit a list of the following: <code>ParameterName</code>,
   *       <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be
   *       modified in a single request.</p>
   *
   *          <note>
   *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters
   *         require a reboot without failover to the DB cluster associated with the parameter group
   *         before the change can take effect.</p>
   *          </note>
   *          <important>
   *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before
   *         creating your first DB cluster that uses that DB cluster parameter group as the default
   *         parameter group. This allows Amazon Neptune to fully complete the create action before the
   *         parameter group is used as the default for a new DB cluster. This is especially important
   *         for parameters that are critical when creating the default database for a DB cluster, such
   *         as the character set for the default database defined by the
   *         <code>character_set_database</code> parameter. You can use the <i>Parameter
   *         Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter
   *         group has been created or modified.</p>
   *          </important>
   */
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterParameterGroupCommandOutput>;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void
  ): Promise<ModifyDBClusterParameterGroupCommandOutput> | void {
    const command = new ModifyDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
   *       cluster snapshot.</p>
   *          <p>To share a manual DB cluster snapshot with other Amazon accounts, specify
   *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
   *       parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual
   *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
   *       public, which means that it can be copied or restored by all Amazon accounts. Do not add the
   *       <code>all</code> value for any manual DB cluster snapshots that contain private information
   *       that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is
   *       encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for
   *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
   *       parameter in this case.</p>
   *          <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or
   *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   */
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> | void {
    const command = new ModifyDBClusterSnapshotAttributeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies settings for a DB instance. You can change one or more database configuration
   *       parameters by specifying these parameters and the new values in the request. To learn what
   *       modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.</p>
   */
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBInstanceCommandOutput>;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBInstanceCommandOutput) => void
  ): Promise<ModifyDBInstanceCommandOutput> | void {
    const command = new ModifyDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter,
   *       submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
   *       <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p>
   *          <note>
   *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters
   *         require a reboot without failover to the DB instance associated with the parameter group
   *         before the change can take effect.</p>
   *          </note>
   *          <important>
   *             <p>After you modify a DB parameter group, you should wait at least 5 minutes before
   *         creating your first DB instance that uses that DB parameter group as the default parameter
   *         group. This allows Amazon Neptune to fully complete the modify action before the parameter
   *         group is used as the default for a new DB instance. This is especially important for
   *         parameters that are critical when creating the default database for a DB instance, such as
   *         the character set for the default database defined by the
   *         <code>character_set_database</code> parameter. You can use the <i>Parameter
   *         Groups</i> option of the Amazon Neptune console or the
   *         <i>DescribeDBParameters</i> command to verify that your DB parameter group has
   *         been created or modified.</p>
   *          </important>
   */
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBParameterGroupCommandOutput>;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void
  ): Promise<ModifyDBParameterGroupCommandOutput> | void {
    const command = new ModifyDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in
   *       at least two AZs in the Amazon Region.</p>
   */
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyDBSubnetGroupCommandOutput>;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyDBSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void
  ): Promise<ModifyDBSubnetGroupCommandOutput> | void {
    const command = new ModifyDBSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing event notification subscription. Note that you can't modify the
   *       source identifiers using this call; to change source identifiers for a subscription, use the
   *       <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p>
   *          <p>You can see a list of the event categories for a given SourceType
   *       by using the <b>DescribeEventCategories</b> action.</p>
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEventSubscriptionCommandOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): Promise<ModifyEventSubscriptionCommandOutput> | void {
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify a setting for an Amazon Neptune global cluster. You can change one
   *       or more database configuration parameters by specifying these parameters
   *       and their new values in the request.</p>
   */
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyGlobalClusterCommandOutput>;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): void;
  public modifyGlobalCluster(
    args: ModifyGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyGlobalClusterCommandOutput) => void
  ): Promise<ModifyGlobalClusterCommandOutput> | void {
    const command = new ModifyGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Not supported.</p>
   */
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteReadReplicaDBClusterCommandOutput>;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void),
    cb?: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void
  ): Promise<PromoteReadReplicaDBClusterCommandOutput> | void {
    const command = new PromoteReadReplicaDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example,
   *       if you make certain modifications, or if you change the DB parameter group associated with the
   *       DB instance, you must reboot the instance for the changes to take effect.</p>
   *          <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance
   *       results in a momentary outage, during which the DB instance status is set to rebooting.</p>
   */
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootDBInstanceCommandOutput>;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootDBInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootDBInstanceCommandOutput) => void
  ): Promise<RebootDBInstanceCommandOutput> | void {
    const command = new RebootDBInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a Neptune DB cluster from a Neptune global database. A secondary
   *       cluster becomes a normal standalone cluster with read-write capability
   *       instead of being read-only, and no longer receives data from a the
   *       primary cluster.</p>
   */
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFromGlobalClusterCommandOutput>;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): void;
  public removeFromGlobalCluster(
    args: RemoveFromGlobalClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFromGlobalClusterCommandOutput) => void),
    cb?: (err: any, data?: RemoveFromGlobalClusterCommandOutput) => void
  ): Promise<RemoveFromGlobalClusterCommandOutput> | void {
    const command = new RemoveFromGlobalClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</p>
   */
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromDBClusterCommandOutput>;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void),
    cb?: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void
  ): Promise<RemoveRoleFromDBClusterCommandOutput> | void {
    const command = new RemoveRoleFromDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a source identifier from an existing event notification subscription.</p>
   */
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> | void {
    const command = new RemoveSourceIdentifierFromSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes metadata tags from an Amazon Neptune resource.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset
   *       specific parameters submit a list of the following: <code>ParameterName</code> and
   *       <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the
   *       <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p>
   *          <p> When resetting the entire group, dynamic parameters are updated immediately and static
   *       parameters are set to <code>pending-reboot</code> to take effect on the next DB instance
   *       restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster
   *       that you want the updated static parameter to apply to.</p>
   */
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBClusterParameterGroupCommandOutput>;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void
  ): Promise<ResetDBClusterParameterGroupCommandOutput> | void {
    const command = new ResetDBClusterParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To
   *       reset specific parameters, provide a list of the following: <code>ParameterName</code> and
   *       <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the
   *       <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When
   *       resetting the entire group, dynamic parameters are updated immediately and static parameters
   *       are set to <code>pending-reboot</code> to take effect on the next DB instance restart or
   *       <code>RebootDBInstance</code> request.</p>
   */
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetDBParameterGroupCommandOutput>;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetDBParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetDBParameterGroupCommandOutput) => void
  ): Promise<ResetDBParameterGroupCommandOutput> | void {
    const command = new ResetDBParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
   *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
   *       snapshot with a default configuration and default security group.</p>
   *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
   *       cluster restore point with the same configuration as the original source DB cluster, except
   *       that the new DB cluster is created with the default security group.</p>
   */
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> | void {
    const command = new RestoreDBClusterFromSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
   *       time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code>
   *       days. The target DB cluster is created from the source DB cluster with the same configuration
   *       as the original DB cluster, except that the new DB cluster is created with the default DB
   *       security group.</p>
   *          <note>
   *             <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You
   *         must invoke the <a>CreateDBInstance</a> action to create DB instances for the
   *         restored DB cluster, specifying the identifier of the restored DB cluster in
   *         <code>DBClusterIdentifier</code>. You can create DB instances only after the
   *         <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is
   *         available.</p>
   *          </note>
   */
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void),
    cb?: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> | void {
    const command = new RestoreDBClusterToPointInTimeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an Amazon Neptune  DB cluster that was stopped using the Amazon
   *       console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.</p>
   */
  public startDBCluster(
    args: StartDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDBClusterCommandOutput>;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDBClusterCommandOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDBClusterCommandOutput) => void),
    cb?: (err: any, data?: StartDBClusterCommandOutput) => void
  ): Promise<StartDBClusterCommandOutput> | void {
    const command = new StartDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune
   *       retains the DB cluster's metadata, including its endpoints and DB parameter
   *       groups.</p>
   *
   *          <p>Neptune also retains the transaction logs so you can do a point-in-time
   *       restore if necessary.</p>
   */
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDBClusterCommandOutput>;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDBClusterCommandOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDBClusterCommandOutput) => void),
    cb?: (err: any, data?: StopDBClusterCommandOutput) => void
  ): Promise<StopDBClusterCommandOutput> | void {
    const command = new StopDBClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
