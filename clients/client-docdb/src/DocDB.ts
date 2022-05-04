// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DocDBClient } from "./DocDBClient";

/**
 * <p>Amazon DocumentDB API documentation</p>
 */
export class DocDB extends DocDBClient {
  /**
   * <p>Adds a source identifier to an existing event notification
   *             subscription.</p>
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
   * <p>Adds metadata tags to an Amazon DocumentDB resource. You can use these tags
   *             with cost allocation reporting to track costs that are associated
   *             with Amazon DocumentDB resources or in a <code>Condition</code> statement in
   *             an Identity and Access Management (IAM) policy for Amazon DocumentDB.</p>
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
   * <p>Applies a pending maintenance action to a resource (for example,
   *             to an Amazon DocumentDB instance).</p>
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
   * <p>Copies the specified cluster parameter group.</p>
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
   * <p>Copies a snapshot of a cluster.</p>
   *
   *         <p>To copy a cluster snapshot from a shared manual cluster snapshot,
   *             <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon
   *             Resource Name (ARN) of the shared cluster snapshot. You can only
   *             copy a shared DB cluster snapshot, whether encrypted or not, in the
   *             same Amazon Web Services Region.</p>
   *
   *         <p>To cancel the copy operation after it is in progress, delete the
   *             target cluster snapshot identified by
   *             <code>TargetDBClusterSnapshotIdentifier</code> while that cluster
   *             snapshot is in the <i>copying</i> status.</p>
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
   * <p>Creates a new Amazon DocumentDB cluster.</p>
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
   * <p>Creates a new cluster parameter group.</p>
   *         <p>Parameters in a cluster parameter group apply to all of the
   *             instances in a cluster.</p>
   *         <p>A cluster parameter group is initially created with the default
   *             parameters for the database engine used by instances in the cluster.
   *             In Amazon DocumentDB, you cannot make modifications directly to the
   *             <code>default.docdb3.6</code> cluster parameter group. If your
   *             Amazon DocumentDB cluster is using the default cluster parameter group and you
   *             want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html">
   *                 create a new parameter group</a>
   *             or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html">
   *                 copy an existing parameter group</a>,
   *             modify it, and then apply the modified parameter group to your
   *             cluster. For the new cluster parameter group and associated settings
   *             to take effect, you must then reboot the instances in the cluster
   *             without failover. For more information,
   *             see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html">
   *                 Modifying Amazon DocumentDB Cluster Parameter Groups</a>.
   *             </p>
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
   * <p>Creates a snapshot of a cluster. </p>
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
   * <p>Creates a new instance.</p>
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
   * <p>Creates a new subnet group. subnet groups must contain at least one subnet in at
   *             least two Availability Zones in the Amazon Web Services Region.</p>
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
   * <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p>
   *         <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p>
   *         <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
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
   * <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p>
   *         <p></p>
   *         <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p>
   *         <note>
   *             <p>This action only applies to Amazon DocumentDB clusters.</p>
   *         </note>
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
   * <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p>
   *         <p></p>
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
   * <p>Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.</p>
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
   * <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
   *         <note>
   *             <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p>
   *         </note>
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
   * <p>Deletes a previously provisioned instance.</p>
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
   * <p>Deletes a subnet group.</p>
   *         <note>
   *             <p>The specified database subnet group must not be associated with any DB
   *                 instances.</p>
   *         </note>
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
   * <p>Deletes an Amazon DocumentDB event notification subscription.</p>
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
   * <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p>
   *         <note>
   *             <p>This action only applies to Amazon DocumentDB clusters.</p>
   *         </note>
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
   * <p>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.</p>
   */
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificatesCommandOutput>;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): Promise<DescribeCertificatesCommandOutput> | void {
    const command = new DescribeCertificatesCommand(args);
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
   * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. </p>
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
   * <p>Returns the detailed parameter list for a particular cluster parameter
   *             group.</p>
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
   * <p>Returns information about provisioned Amazon DocumentDB clusters. This API
   *             operation supports pagination. For certain management features
   *             such as cluster and instance lifecycle management, Amazon DocumentDB leverages
   *             operational technology that is shared with Amazon RDS and Amazon
   *             Neptune. Use the <code>filterName=engine,Values=docdb</code> filter
   *             parameter to return only Amazon DocumentDB clusters.</p>
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
   * <p>Returns a list of cluster snapshot attribute names and values for a manual DB
   *             cluster snapshot.</p>
   *         <p>When you share snapshots with other Amazon Web Services accounts,
   *                 <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.</p>
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
   * <p>Returns information about cluster snapshots. This API operation supports pagination.</p>
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
   * <p>Returns a list of the available engines.</p>
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
   * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.</p>
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
   * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a
   *                 <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.</p>
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
   *             engine.</p>
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
   * <p>Displays a list of categories for all event source types, or, if specified, for a
   *             specified source type. </p>
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
   * <p>Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.</p>
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
   * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p>
   *         <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
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
   * <p>Returns information about Amazon DocumentDB global  clusters. This API supports pagination.</p>
   *         <note>
   *             <p>This action only applies to Amazon DocumentDB clusters.</p>
   *         </note>
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
   * <p>Returns a list of orderable instance options for the specified engine.</p>
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
   * <p>Returns a list of resources (for example, instances) that have at least one pending
   *             maintenance action.</p>
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
   * <p>Forces a failover for a cluster.</p>
   *         <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p>
   *         <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
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
   * <p>Lists all tags on an Amazon DocumentDB resource.</p>
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
   * <p>Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
   *             configuration parameters by specifying these parameters and the new values in the
   *             request. </p>
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
   * <p> Modifies the parameters of a cluster parameter group. To modify more than one
   *             parameter, submit a list of the following: <code>ParameterName</code>,
   *                 <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20
   *             parameters can be modified in a single request. </p>
   *         <note>
   *             <p>Changes to dynamic parameters are applied immediately. Changes to static
   *                 parameters require a reboot or maintenance window
   *
   *                 before the change can take effect.</p>
   *         </note>
   *         <important>
   *             <p>After you create a cluster parameter group, you should wait at least 5 minutes
   *                 before creating your first cluster that uses that cluster parameter group as
   *                 the default parameter group. This allows Amazon DocumentDB to fully complete the create action
   *                 before the parameter group is used as the default for a new cluster. This step is
   *                 especially important for parameters that are critical when creating the default
   *                 database for a cluster, such as the character set for the default database
   *                 defined by the <code>character_set_database</code> parameter.</p>
   *         </important>
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
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p>
   *         <p>To share a manual cluster snapshot with other Amazon Web Services accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
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
   * <p>Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</p>
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
   * <p>Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.</p>
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
   * <p>Modifies an existing Amazon DocumentDB event notification subscription.</p>
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
   * <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p>
   *         <note>
   *             <p>This action only applies to Amazon DocumentDB clusters.</p>
   *         </note>
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
   * <p>You might need to reboot your instance, usually for maintenance reasons. For
   *             example, if you make certain changes, or if you change the cluster parameter group
   *             that is associated with the instance, you must reboot the instance for the changes to
   *             take effect. </p>
   *         <p>Rebooting an instance restarts the database engine service. Rebooting an instance
   *             results in a momentary outage, during which the instance status is set to
   *                 <i>rebooting</i>. </p>
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
   * <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p>
   *         <note>
   *             <p>This action only applies to Amazon DocumentDB clusters.</p>
   *         </note>
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
   * <p>Removes a source identifier from an existing Amazon DocumentDB event notification
   *             subscription.</p>
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
   * <p>Removes metadata tags from an Amazon DocumentDB resource.</p>
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
   * <p> Modifies the parameters of a cluster parameter group to the default value. To
   *             reset specific parameters, submit a list of the following: <code>ParameterName</code>
   *             and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify
   *             the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code>
   *             parameters. </p>
   *         <p> When you reset the entire group, dynamic parameters are updated immediately and
   *             static parameters are set to <code>pending-reboot</code> to take effect on the next DB
   *             instance reboot.</p>
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
   * <p>Creates a new cluster from a snapshot or cluster snapshot.</p>
   *         <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p>
   *         <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
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
   * <p>Restores a cluster to an arbitrary point in time. Users can restore to any point in
   *             time before <code>LatestRestorableTime</code> for up to
   *                 <code>BackupRetentionPeriod</code> days. The target cluster is created from the
   *             source cluster with the same configuration as the original cluster, except that
   *             the new cluster is created with the default security group. </p>
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
   * <p>Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
   *                 Starting an Amazon DocumentDB Cluster</a>.</p>
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
   * <p>Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The
   *             cluster must be in the <i>available</i> state. For more information, see
   *                 <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and
   *                 Starting an Amazon DocumentDB Cluster</a>.</p>
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
