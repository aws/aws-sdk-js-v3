import { NeptuneClient } from "./NeptuneClient";
import { AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput } from "./commands/AddRoleToDBClusterCommand";
import { AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput } from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput } from "./commands/CopyDBClusterSnapshotCommand";
import { CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput } from "./commands/CopyDBParameterGroupCommand";
import { CreateDBClusterCommandInput, CreateDBClusterCommandOutput } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput } from "./commands/CreateDBInstanceCommand";
import { CreateDBParameterGroupCommandInput, CreateDBParameterGroupCommandOutput } from "./commands/CreateDBParameterGroupCommand";
import { CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput } from "./commands/CreateDBSubnetGroupCommand";
import { CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput } from "./commands/CreateEventSubscriptionCommand";
import { DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommandInput, DeleteDBInstanceCommandOutput } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBParameterGroupCommandInput, DeleteDBParameterGroupCommandOutput } from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput } from "./commands/DeleteDBSubnetGroupCommand";
import { DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput } from "./commands/DeleteEventSubscriptionCommand";
import { DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommandInput, DescribeDBClusterParametersCommandOutput } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput } from "./commands/DescribeDBParameterGroupsCommand";
import { DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput } from "./commands/DescribeDBParametersCommand";
import { DescribeDBSubnetGroupsCommandInput, DescribeDBSubnetGroupsCommandOutput } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommandInput, DescribeEngineDefaultClusterParametersCommandOutput } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeOrderableDBInstanceOptionsCommandInput, DescribeOrderableDBInstanceOptionsCommandOutput } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput } from "./commands/DescribeValidDBInstanceModificationsCommand";
import { FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterParameterGroupCommandInput, ModifyDBClusterParameterGroupCommandOutput } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput } from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput } from "./commands/ModifyDBSubnetGroupCommand";
import { ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput } from "./commands/ModifyEventSubscriptionCommand";
import { PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput } from "./commands/PromoteReadReplicaDBClusterCommand";
import { RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput } from "./commands/RebootDBInstanceCommand";
import { RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput } from "./commands/RemoveRoleFromDBClusterCommand";
import { RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput } from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput } from "./commands/ResetDBClusterParameterGroupCommand";
import { ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput } from "./commands/ResetDBParameterGroupCommand";
import { RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class Neptune extends NeptuneClient {
    /**
     * <p>Associates an Identity and Access Management (IAM) role from an
     *       Neptune DB cluster.</p>
     */
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<AddRoleToDBClusterCommandOutput>;
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void): void;
    addRoleToDBCluster(args: AddRoleToDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddRoleToDBClusterCommandOutput) => void): void;
    /**
     * <p>Adds a source identifier to an existing event notification subscription.</p>
     */
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<AddSourceIdentifierToSubscriptionCommandOutput>;
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void): void;
    addSourceIdentifierToSubscription(args: AddSourceIdentifierToSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddSourceIdentifierToSubscriptionCommandOutput) => void): void;
    /**
     * <p>Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost
     *       allocation reporting to track cost associated with Amazon Neptune resources, or used in a
     *       Condition statement in an IAM policy for Amazon Neptune.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
     */
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyPendingMaintenanceActionCommandOutput>;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    /**
     * <p>Copies the specified DB cluster parameter group.</p>
     */
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterParameterGroupCommandOutput>;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    copyDBClusterParameterGroup(args: CopyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Copies a snapshot of a DB cluster.</p>
     *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot,
     *       <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the
     *       shared DB cluster snapshot.</p>
     *          <p>You can't copy from one AWS Region to another.</p>
     */
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBClusterSnapshotCommandOutput>;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    copyDBClusterSnapshot(args: CopyDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Copies the specified DB parameter group.</p>
     */
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CopyDBParameterGroupCommandOutput>;
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void): void;
    copyDBParameterGroup(args: CopyDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Neptune DB cluster.</p>
     *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
     *       cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
     */
    createDBCluster(args: CreateDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterCommandOutput>;
    createDBCluster(args: CreateDBClusterCommandInput, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
    createDBCluster(args: CreateDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterCommandOutput) => void): void;
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
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterParameterGroupCommandOutput>;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    createDBClusterParameterGroup(args: CreateDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a DB cluster.</p>
     */
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBClusterSnapshotCommandOutput>;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    createDBClusterSnapshot(args: CreateDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new DB instance.</p>
     */
    createDBInstance(args: CreateDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBInstanceCommandOutput>;
    createDBInstance(args: CreateDBInstanceCommandInput, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
    createDBInstance(args: CreateDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBInstanceCommandOutput) => void): void;
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
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBParameterGroupCommandOutput>;
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void): void;
    createDBParameterGroup(args: CreateDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at
     *       least two AZs in the AWS Region.</p>
     */
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDBSubnetGroupCommandOutput>;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
    createDBSubnetGroup(args: CreateDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDBSubnetGroupCommandOutput) => void): void;
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
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSubscriptionCommandOutput>;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a
     *       DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
     *       Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
     */
    deleteDBCluster(args: DeleteDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterCommandOutput>;
    deleteDBCluster(args: DeleteDBClusterCommandInput, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    deleteDBCluster(args: DeleteDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be
     *       deleted can't be associated with any DB clusters.</p>
     */
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterParameterGroupCommandOutput>;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    deleteDBClusterParameterGroup(args: DeleteDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is
     *       terminated.</p>
     *          <note>
     *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
     *         deleted.</p>
     *          </note>
     */
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBClusterSnapshotCommandOutput>;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
    deleteDBClusterSnapshot(args: DeleteDBClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBClusterSnapshotCommandOutput) => void): void;
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
     *          <p>You can't delete a DB instance if it is the only instance in the DB cluster.</p>
     */
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBInstanceCommandOutput>;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    deleteDBInstance(args: DeleteDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be
     *       associated with any DB instances.</p>
     */
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBParameterGroupCommandOutput>;
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void): void;
    deleteDBParameterGroup(args: DeleteDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a DB subnet group.</p>
     *          <note>
     *             <p>The specified database subnet group must not be associated with any DB instances.</p>
     *          </note>
     */
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDBSubnetGroupCommandOutput>;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    deleteDBSubnetGroup(args: DeleteDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an event notification subscription.</p>
     */
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSubscriptionCommandOutput>;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    /**
     * <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
     *       <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only
     *       the description of the specified DB cluster parameter group.</p>
     */
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParameterGroupsCommandOutput>;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    describeDBClusterParameterGroups(args: DescribeDBClusterParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
     */
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterParametersCommandOutput>;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    describeDBClusterParameters(args: DescribeDBClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
     *       snapshot.</p>
     *          <p>When sharing snapshots with other AWS accounts,
     *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
     *       and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB
     *       cluster snapshot. If <code>all</code> is included in the list of values for the
     *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
     *       copied or restored by all AWS accounts.</p>
     *          <p>To add or remove access for an AWS account to copy or restore a manual DB cluster
     *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
     */
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotAttributesCommandOutput>;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    describeDBClusterSnapshotAttributes(args: DescribeDBClusterSnapshotAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotAttributesCommandOutput) => void): void;
    /**
     * <p>Returns information about DB cluster snapshots. This API action supports
     *       pagination.</p>
     */
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClusterSnapshotsCommandOutput>;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    describeDBClusterSnapshots(args: DescribeDBClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned DB clusters. This API supports pagination.</p>
     */
    describeDBClusters(args: DescribeDBClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBClustersCommandOutput>;
    describeDBClusters(args: DescribeDBClustersCommandInput, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    describeDBClusters(args: DescribeDBClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available DB engines.</p>
     */
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBEngineVersionsCommandOutput>;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    describeDBEngineVersions(args: DescribeDBEngineVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBEngineVersionsCommandOutput) => void): void;
    /**
     * <p>Returns information about provisioned instances. This API supports pagination.</p>
     */
    describeDBInstances(args: DescribeDBInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBInstancesCommandOutput>;
    describeDBInstances(args: DescribeDBInstancesCommandInput, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    describeDBInstances(args: DescribeDBInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBInstancesCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a
     *       <code>DBParameterGroupName</code> is specified, the list will contain only the description of
     *       the specified DB parameter group.</p>
     */
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBParameterGroupsCommandOutput>;
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void): void;
    describeDBParameterGroups(args: DescribeDBParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
     */
    describeDBParameters(args: DescribeDBParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBParametersCommandOutput>;
    describeDBParameters(args: DescribeDBParametersCommandInput, cb: (err: any, data?: DescribeDBParametersCommandOutput) => void): void;
    describeDBParameters(args: DescribeDBParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBParametersCommandOutput) => void): void;
    /**
     * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the
     *       list will contain only the descriptions of the specified DBSubnetGroup.</p>
     *          <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
     */
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDBSubnetGroupsCommandOutput>;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    describeDBSubnetGroups(args: DescribeDBSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDBSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and system parameter information for the cluster database
     *       engine.</p>
     */
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultClusterParametersCommandOutput>;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    describeEngineDefaultClusterParameters(args: DescribeEngineDefaultClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns the default engine and system parameter information for the specified database
     *       engine.</p>
     */
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEngineDefaultParametersCommandOutput>;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    describeEngineDefaultParameters(args: DescribeEngineDefaultParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEngineDefaultParametersCommandOutput) => void): void;
    /**
     * <p>Displays a list of categories for all event source types, or, if specified, for a
     *       specified source type.</p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p>Lists all the subscription descriptions for a customer account. The description for a
     *       subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID,
     *       CreationTime, and Status.</p>
     *          <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
     */
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventSubscriptionsCommandOutput>;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter
     *       groups for the past 14 days. Events specific to a particular DB instance, DB security group,
     *       database snapshot, or DB parameter group can be obtained by providing the name as a parameter.
     *       By default, the past hour of events are returned.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of orderable DB instance options for the specified engine.</p>
     */
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableDBInstanceOptionsCommandOutput>;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    describeOrderableDBInstanceOptions(args: DescribeOrderableDBInstanceOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableDBInstanceOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of resources (for example, DB instances) that have at least one pending
     *       maintenance action.</p>
     */
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingMaintenanceActionsCommandOutput>;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    /**
     * <p>You can call <a>DescribeValidDBInstanceModifications</a>
     *       to learn what modifications you can make to your DB instance. You can use this
     *       information when you call <a>ModifyDBInstance</a>.</p>
     */
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeValidDBInstanceModificationsCommandOutput>;
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void): void;
    describeValidDBInstanceModifications(args: DescribeValidDBInstanceModificationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeValidDBInstanceModificationsCommandOutput) => void): void;
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
    failoverDBCluster(args: FailoverDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<FailoverDBClusterCommandOutput>;
    failoverDBCluster(args: FailoverDBClusterCommandInput, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    failoverDBCluster(args: FailoverDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FailoverDBClusterCommandOutput) => void): void;
    /**
     * <p>Lists all tags on an Amazon Neptune resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Modify a setting for a DB cluster. You can change one or more database configuration
     *       parameters by specifying these parameters and the new values in the request.</p>
     */
    modifyDBCluster(args: ModifyDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterCommandOutput>;
    modifyDBCluster(args: ModifyDBClusterCommandInput, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
    modifyDBCluster(args: ModifyDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterCommandOutput) => void): void;
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
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterParameterGroupCommandOutput>;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    modifyDBClusterParameterGroup(args: ModifyDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
     *       cluster snapshot.</p>
     *          <p>To share a manual DB cluster snapshot with other AWS accounts, specify
     *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
     *       parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual
     *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
     *       public, which means that it can be copied or restored by all AWS accounts. Do not add the
     *       <code>all</code> value for any manual DB cluster snapshots that contain private information
     *       that you don't want available to all AWS accounts. If a manual DB cluster snapshot is
     *       encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for
     *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
     *       parameter in this case.</p>
     *          <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or
     *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
     */
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBClusterSnapshotAttributeCommandOutput>;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    modifyDBClusterSnapshotAttribute(args: ModifyDBClusterSnapshotAttributeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBClusterSnapshotAttributeCommandOutput) => void): void;
    /**
     * <p>Modifies settings for a DB instance. You can change one or more database configuration
     *       parameters by specifying these parameters and the new values in the request. To learn what
     *       modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.</p>
     */
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBInstanceCommandOutput>;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
    modifyDBInstance(args: ModifyDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBInstanceCommandOutput) => void): void;
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
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBParameterGroupCommandOutput>;
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void): void;
    modifyDBParameterGroup(args: ModifyDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in
     *       at least two AZs in the AWS Region.</p>
     */
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDBSubnetGroupCommandOutput>;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    modifyDBSubnetGroup(args: ModifyDBSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDBSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing event notification subscription. Note that you can't modify the
     *       source identifiers using this call; to change source identifiers for a subscription, use the
     *       <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p>
     *          <p>You can see a list of the event categories for a given SourceType
     *       by using the <b>DescribeEventCategories</b> action.</p>
     */
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEventSubscriptionCommandOutput>;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Not supported.</p>
     */
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<PromoteReadReplicaDBClusterCommandOutput>;
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void): void;
    promoteReadReplicaDBCluster(args: PromoteReadReplicaDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PromoteReadReplicaDBClusterCommandOutput) => void): void;
    /**
     * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example,
     *       if you make certain modifications, or if you change the DB parameter group associated with the
     *       DB instance, you must reboot the instance for the changes to take effect.</p>
     *          <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance
     *       results in a momentary outage, during which the DB instance status is set to rebooting.</p>
     */
    rebootDBInstance(args: RebootDBInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootDBInstanceCommandOutput>;
    rebootDBInstance(args: RebootDBInstanceCommandInput, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    rebootDBInstance(args: RebootDBInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootDBInstanceCommandOutput) => void): void;
    /**
     * <p>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</p>
     */
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, options?: __HttpHandlerOptions): Promise<RemoveRoleFromDBClusterCommandOutput>;
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void): void;
    removeRoleFromDBCluster(args: RemoveRoleFromDBClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveRoleFromDBClusterCommandOutput) => void): void;
    /**
     * <p>Removes a source identifier from an existing event notification subscription.</p>
     */
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput>;
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void): void;
    removeSourceIdentifierFromSubscription(args: RemoveSourceIdentifierFromSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from an Amazon Neptune resource.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
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
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetDBClusterParameterGroupCommandOutput>;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    resetDBClusterParameterGroup(args: ResetDBClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDBClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To
     *       reset specific parameters, provide a list of the following: <code>ParameterName</code> and
     *       <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the
     *       <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When
     *       resetting the entire group, dynamic parameters are updated immediately and static parameters
     *       are set to <code>pending-reboot</code> to take effect on the next DB instance restart or
     *       <code>RebootDBInstance</code> request.</p>
     */
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetDBParameterGroupCommandOutput>;
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void): void;
    resetDBParameterGroup(args: ResetDBParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetDBParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
     *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
     *       snapshot with a default configuration and default security group.</p>
     *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
     *       cluster restore point with the same configuration as the original source DB cluster, except
     *       that the new DB cluster is created with the default security group.</p>
     */
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterFromSnapshotCommandOutput>;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
    restoreDBClusterFromSnapshot(args: RestoreDBClusterFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterFromSnapshotCommandOutput) => void): void;
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
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options?: __HttpHandlerOptions): Promise<RestoreDBClusterToPointInTimeCommandOutput>;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
    restoreDBClusterToPointInTime(args: RestoreDBClusterToPointInTimeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreDBClusterToPointInTimeCommandOutput) => void): void;
}
