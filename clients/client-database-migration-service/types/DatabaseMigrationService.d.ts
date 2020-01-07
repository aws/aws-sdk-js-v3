import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput } from "./commands/CreateEventSubscriptionCommand";
import { CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput } from "./commands/CreateReplicationInstanceCommand";
import { CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput } from "./commands/CreateReplicationSubnetGroupCommand";
import { CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput } from "./commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "./commands/DeleteCertificateCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput } from "./commands/DeleteReplicationInstanceCommand";
import { DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput } from "./commands/DeleteReplicationSubnetGroupCommand";
import { DeleteReplicationTaskCommandInput, DeleteReplicationTaskCommandOutput } from "./commands/DeleteReplicationTaskCommand";
import { DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput } from "./commands/DescribeAccountAttributesCommand";
import { DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput } from "./commands/DescribeCertificatesCommand";
import { DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput } from "./commands/DescribeConnectionsCommand";
import { DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput } from "./commands/DescribeEndpointTypesCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "./commands/DescribeEndpointsCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput } from "./commands/DescribeOrderableReplicationInstancesCommand";
import { DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeRefreshSchemasStatusCommandInput, DescribeRefreshSchemasStatusCommandOutput } from "./commands/DescribeRefreshSchemasStatusCommand";
import { DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput } from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import { DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput } from "./commands/DescribeReplicationInstancesCommand";
import { DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput } from "./commands/DescribeReplicationSubnetGroupsCommand";
import { DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput } from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput } from "./commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommandInput, DescribeSchemasCommandOutput } from "./commands/DescribeSchemasCommand";
import { DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput } from "./commands/DescribeTableStatisticsCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "./commands/ImportCertificateCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyEndpointCommandInput, ModifyEndpointCommandOutput } from "./commands/ModifyEndpointCommand";
import { ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyReplicationInstanceCommandInput, ModifyReplicationInstanceCommandOutput } from "./commands/ModifyReplicationInstanceCommand";
import { ModifyReplicationSubnetGroupCommandInput, ModifyReplicationSubnetGroupCommandOutput } from "./commands/ModifyReplicationSubnetGroupCommand";
import { ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput } from "./commands/ModifyReplicationTaskCommand";
import { RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput } from "./commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommandInput, RefreshSchemasCommandOutput } from "./commands/RefreshSchemasCommand";
import { ReloadTablesCommandInput, ReloadTablesCommandOutput } from "./commands/ReloadTablesCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput } from "./commands/StartReplicationTaskAssessmentCommand";
import { StartReplicationTaskCommandInput, StartReplicationTaskCommandOutput } from "./commands/StartReplicationTaskCommand";
import { StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput } from "./commands/StopReplicationTaskCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "./commands/TestConnectionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Database Migration Service</fullname>
 *          <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most
 *          widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL
 *          Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise
 *          (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as
 *          heterogeneous migrations between different database platforms, such as Oracle to MySQL or
 *          SQL Server to PostgreSQL.</p>
 *          <p>For more information about AWS DMS, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html">What Is AWS Database Migration Service?</a>
 *          in the <i>AWS Database Migration User Guide.</i>
 *          </p>
 */
export declare class DatabaseMigrationService extends DatabaseMigrationServiceClient {
    /**
     * <p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint,
     *          security group, and migration task. These tags can also be used with cost allocation
     *          reporting to track cost associated with DMS resources, or used in a Condition statement in
     *          an IAM policy for DMS.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
     */
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options?: __HttpHandlerOptions): Promise<ApplyPendingMaintenanceActionCommandOutput>;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    applyPendingMaintenanceAction(args: ApplyPendingMaintenanceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint using the provided settings.</p>
     */
    createEndpoint(args: CreateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointCommandOutput>;
    createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    createEndpoint(args: CreateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    /**
     * <p> Creates an AWS DMS event notification subscription. </p>
     *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
     *          provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and
     *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
     *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
     *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
     *             my-replinstance</code>, you will be notified of all the replication instance events for
     *          the specified source. If you specify a <code>SourceType</code> but don't specify a
     *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
     *          all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor
     *             <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS
     *          sources belonging to your customer account.</p>
     *          <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
     *             Notifications</a> in the <i>AWS Database Migration Service User
     *             Guide.</i>
     *          </p>
     */
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSubscriptionCommandOutput>;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates the replication instance using the specified parameters.</p>
     *          <p>AWS DMS requires that your account have certain roles with appropriate permissions
     *          before you can create a replication instance. For information on the required roles, see
     *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For
     *          information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.IAMPermissions.html">IAM Permissions Needed to Use AWS DMS</a>.</p>
     */
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationInstanceCommandOutput>;
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void): void;
    createReplicationInstance(args: CreateReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
     */
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationSubnetGroupCommandOutput>;
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void): void;
    createReplicationSubnetGroup(args: CreateReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Creates a replication task using the specified parameters.</p>
     */
    createReplicationTask(args: CreateReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationTaskCommandOutput>;
    createReplicationTask(args: CreateReplicationTaskCommandInput, cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void): void;
    createReplicationTask(args: CreateReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Deletes the specified certificate. </p>
     */
    deleteCertificate(args: DeleteCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCertificateCommandOutput>;
    deleteCertificate(args: DeleteCertificateCommandInput, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    deleteCertificate(args: DeleteCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes the connection between a replication instance and an endpoint.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified endpoint.</p>
     *          <note>
     *             <p>All tasks associated with the endpoint must be deleted before you can delete the
     *             endpoint.</p>
     *          </note>
     *          <p></p>
     */
    deleteEndpoint(args: DeleteEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointCommandOutput>;
    deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    deleteEndpoint(args: DeleteEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    /**
     * <p> Deletes an AWS DMS event subscription. </p>
     */
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSubscriptionCommandOutput>;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified replication instance.</p>
     *          <note>
     *             <p>You must delete any migration tasks that are associated with the replication instance
     *             before you can delete it.</p>
     *          </note>
     *          <p></p>
     */
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationInstanceCommandOutput>;
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void): void;
    deleteReplicationInstance(args: DeleteReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a subnet group.</p>
     */
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationSubnetGroupCommandOutput>;
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void): void;
    deleteReplicationSubnetGroup(args: DeleteReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified replication task.</p>
     */
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationTaskCommandOutput>;
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void): void;
    deleteReplicationTask(args: DeleteReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
     *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
     *          quotas include a list of resource quotas supported by the account, such as the number of
     *          replication instances allowed. The description for each resource quota, includes the quota
     *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
     *          account identifier to name each artifact used by DMS in the given region.</p>
     *          <p>This command does not take any parameters.</p>
     */
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAttributesCommandOutput>;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    /**
     * <p>Provides a description of the certificate.</p>
     */
    describeCertificates(args: DescribeCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificatesCommandOutput>;
    describeCertificates(args: DescribeCertificatesCommandInput, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    describeCertificates(args: DescribeCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificatesCommandOutput) => void): void;
    /**
     * <p>Describes the status of the connections that have been made between the replication
     *          instance and an endpoint. Connections are created when you test an endpoint.</p>
     */
    describeConnections(args: DescribeConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConnectionsCommandOutput>;
    describeConnections(args: DescribeConnectionsCommandInput, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    describeConnections(args: DescribeConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConnectionsCommandOutput) => void): void;
    /**
     * <p>Returns information about the type of endpoints available.</p>
     */
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointTypesCommandOutput>;
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void): void;
    describeEndpointTypes(args: DescribeEndpointTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void): void;
    /**
     * <p>Returns information about the endpoints for your account in the current region.</p>
     */
    describeEndpoints(args: DescribeEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointsCommandOutput>;
    describeEndpoints(args: DescribeEndpointsCommandInput, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    describeEndpoints(args: DescribeEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists categories for all event source types, or, if specified, for a specified source
     *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
     *             and Notifications</a> in the <i>AWS Database Migration Service User
     *             Guide.</i>
     *          </p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p>Lists all the event subscriptions for a customer account. The description of a
     *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
     *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
     *             <code>CreationTime</code>, and <code>Status</code>. </p>
     *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
     *          subscription.</p>
     */
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventSubscriptionsCommandOutput>;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p> Lists events for a given source identifier and source type. You can also specify a
     *          start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
     *             Notifications</a> in the <i>AWS Database Migration User
     *          Guide.</i>
     *          </p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns information about the replication instance types that can be created in the
     *          specified region.</p>
     */
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableReplicationInstancesCommandOutput>;
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void): void;
    describeOrderableReplicationInstances(args: DescribeOrderableReplicationInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableReplicationInstancesCommandOutput) => void): void;
    /**
     * <p>For internal use only</p>
     */
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePendingMaintenanceActionsCommandOutput>;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    describePendingMaintenanceActions(args: DescribePendingMaintenanceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePendingMaintenanceActionsCommandOutput) => void): void;
    /**
     * <p>Returns the status of the RefreshSchemas operation.</p>
     */
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRefreshSchemasStatusCommandOutput>;
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void): void;
    describeRefreshSchemasStatus(args: DescribeRefreshSchemasStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void): void;
    /**
     * <p>Returns information about the task logs for the specified task.</p>
     */
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationInstanceTaskLogsCommandOutput>;
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void): void;
    describeReplicationInstanceTaskLogs(args: DescribeReplicationInstanceTaskLogsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationInstanceTaskLogsCommandOutput) => void): void;
    /**
     * <p>Returns information about replication instances for your account in the current
     *          region.</p>
     */
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationInstancesCommandOutput>;
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void): void;
    describeReplicationInstances(args: DescribeReplicationInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void): void;
    /**
     * <p>Returns information about the replication subnet groups.</p>
     */
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationSubnetGroupsCommandOutput>;
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void): void;
    describeReplicationSubnetGroups(args: DescribeReplicationSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the task assessment results from Amazon S3. This action always returns the
     *          latest results.</p>
     */
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput>;
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void): void;
    describeReplicationTaskAssessmentResults(args: DescribeReplicationTaskAssessmentResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTaskAssessmentResultsCommandOutput) => void): void;
    /**
     * <p>Returns information about replication tasks for your account in the current
     *          region.</p>
     */
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReplicationTasksCommandOutput>;
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void): void;
    describeReplicationTasks(args: DescribeReplicationTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void): void;
    /**
     * <p>Returns information about the schema for the specified endpoint.</p>
     *
     *          <p></p>
     */
    describeSchemas(args: DescribeSchemasCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSchemasCommandOutput>;
    describeSchemas(args: DescribeSchemasCommandInput, cb: (err: any, data?: DescribeSchemasCommandOutput) => void): void;
    describeSchemas(args: DescribeSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSchemasCommandOutput) => void): void;
    /**
     * <p>Returns table statistics on the database migration task, including table name, rows
     *          inserted, rows updated, and rows deleted.</p>
     *          <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS
     *          last updated the table statistics record for a table. It does not indicate the time of the
     *          last update to the table.</p>
     */
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableStatisticsCommandOutput>;
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void): void;
    describeTableStatistics(args: DescribeTableStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void): void;
    /**
     * <p>Uploads the specified certificate.</p>
     */
    importCertificate(args: ImportCertificateCommandInput, options?: __HttpHandlerOptions): Promise<ImportCertificateCommandOutput>;
    importCertificate(args: ImportCertificateCommandInput, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    importCertificate(args: ImportCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportCertificateCommandOutput) => void): void;
    /**
     * <p>Lists all tags for an AWS DMS resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the specified endpoint.</p>
     */
    modifyEndpoint(args: ModifyEndpointCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEndpointCommandOutput>;
    modifyEndpoint(args: ModifyEndpointCommandInput, cb: (err: any, data?: ModifyEndpointCommandOutput) => void): void;
    modifyEndpoint(args: ModifyEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEndpointCommandOutput) => void): void;
    /**
     * <p>Modifies an existing AWS DMS event notification subscription. </p>
     */
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEventSubscriptionCommandOutput>;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Modifies the replication instance to apply new settings. You can change one or more
     *          parameters by specifying these parameters and the new values in the request.</p>
     *          <p>Some settings are applied during the maintenance window.</p>
     *
     *          <p></p>
     */
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationInstanceCommandOutput>;
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void): void;
    modifyReplicationInstance(args: ModifyReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for the specified replication subnet group.</p>
     */
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationSubnetGroupCommandOutput>;
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void): void;
    modifyReplicationSubnetGroup(args: ModifyReplicationSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the specified replication task.</p>
     *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
     *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
     *             <i>AWS Database Migration Service User Guide</i>.</p>
     */
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReplicationTaskCommandOutput>;
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void): void;
    modifyReplicationTask(args: ModifyReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
     *          replication instance becomes available again.</p>
     */
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, options?: __HttpHandlerOptions): Promise<RebootReplicationInstanceCommandOutput>;
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void): void;
    rebootReplicationInstance(args: RebootReplicationInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void): void;
    /**
     * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
     *          can take several minutes. You can check the status of this operation by calling the
     *          DescribeRefreshSchemasStatus operation.</p>
     */
    refreshSchemas(args: RefreshSchemasCommandInput, options?: __HttpHandlerOptions): Promise<RefreshSchemasCommandOutput>;
    refreshSchemas(args: RefreshSchemasCommandInput, cb: (err: any, data?: RefreshSchemasCommandOutput) => void): void;
    refreshSchemas(args: RefreshSchemasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RefreshSchemasCommandOutput) => void): void;
    /**
     * <p>Reloads the target database table with the source data. </p>
     */
    reloadTables(args: ReloadTablesCommandInput, options?: __HttpHandlerOptions): Promise<ReloadTablesCommandOutput>;
    reloadTables(args: ReloadTablesCommandInput, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
    reloadTables(args: ReloadTablesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReloadTablesCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from a DMS resource.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Starts the replication task.</p>
     *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
     *             <i>AWS Database Migration Service User Guide.</i>
     *          </p>
     */
    startReplicationTask(args: StartReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StartReplicationTaskCommandOutput>;
    startReplicationTask(args: StartReplicationTaskCommandInput, cb: (err: any, data?: StartReplicationTaskCommandOutput) => void): void;
    startReplicationTask(args: StartReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReplicationTaskCommandOutput) => void): void;
    /**
     * <p> Starts the replication task assessment for unsupported data types in the source
     *          database. </p>
     */
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, options?: __HttpHandlerOptions): Promise<StartReplicationTaskAssessmentCommandOutput>;
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void): void;
    startReplicationTaskAssessment(args: StartReplicationTaskAssessmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void): void;
    /**
     * <p>Stops the replication task.</p>
     *
     *          <p></p>
     */
    stopReplicationTask(args: StopReplicationTaskCommandInput, options?: __HttpHandlerOptions): Promise<StopReplicationTaskCommandOutput>;
    stopReplicationTask(args: StopReplicationTaskCommandInput, cb: (err: any, data?: StopReplicationTaskCommandOutput) => void): void;
    stopReplicationTask(args: StopReplicationTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopReplicationTaskCommandOutput) => void): void;
    /**
     * <p>Tests the connection between the replication instance and the endpoint.</p>
     */
    testConnection(args: TestConnectionCommandInput, options?: __HttpHandlerOptions): Promise<TestConnectionCommandOutput>;
    testConnection(args: TestConnectionCommandInput, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
    testConnection(args: TestConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestConnectionCommandOutput) => void): void;
}
