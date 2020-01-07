"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseMigrationServiceClient_1 = require("./DatabaseMigrationServiceClient");
const AddTagsToResourceCommand_1 = require("./commands/AddTagsToResourceCommand");
const ApplyPendingMaintenanceActionCommand_1 = require("./commands/ApplyPendingMaintenanceActionCommand");
const CreateEndpointCommand_1 = require("./commands/CreateEndpointCommand");
const CreateEventSubscriptionCommand_1 = require("./commands/CreateEventSubscriptionCommand");
const CreateReplicationInstanceCommand_1 = require("./commands/CreateReplicationInstanceCommand");
const CreateReplicationSubnetGroupCommand_1 = require("./commands/CreateReplicationSubnetGroupCommand");
const CreateReplicationTaskCommand_1 = require("./commands/CreateReplicationTaskCommand");
const DeleteCertificateCommand_1 = require("./commands/DeleteCertificateCommand");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const DeleteEventSubscriptionCommand_1 = require("./commands/DeleteEventSubscriptionCommand");
const DeleteReplicationInstanceCommand_1 = require("./commands/DeleteReplicationInstanceCommand");
const DeleteReplicationSubnetGroupCommand_1 = require("./commands/DeleteReplicationSubnetGroupCommand");
const DeleteReplicationTaskCommand_1 = require("./commands/DeleteReplicationTaskCommand");
const DescribeAccountAttributesCommand_1 = require("./commands/DescribeAccountAttributesCommand");
const DescribeCertificatesCommand_1 = require("./commands/DescribeCertificatesCommand");
const DescribeConnectionsCommand_1 = require("./commands/DescribeConnectionsCommand");
const DescribeEndpointTypesCommand_1 = require("./commands/DescribeEndpointTypesCommand");
const DescribeEndpointsCommand_1 = require("./commands/DescribeEndpointsCommand");
const DescribeEventCategoriesCommand_1 = require("./commands/DescribeEventCategoriesCommand");
const DescribeEventSubscriptionsCommand_1 = require("./commands/DescribeEventSubscriptionsCommand");
const DescribeEventsCommand_1 = require("./commands/DescribeEventsCommand");
const DescribeOrderableReplicationInstancesCommand_1 = require("./commands/DescribeOrderableReplicationInstancesCommand");
const DescribePendingMaintenanceActionsCommand_1 = require("./commands/DescribePendingMaintenanceActionsCommand");
const DescribeRefreshSchemasStatusCommand_1 = require("./commands/DescribeRefreshSchemasStatusCommand");
const DescribeReplicationInstanceTaskLogsCommand_1 = require("./commands/DescribeReplicationInstanceTaskLogsCommand");
const DescribeReplicationInstancesCommand_1 = require("./commands/DescribeReplicationInstancesCommand");
const DescribeReplicationSubnetGroupsCommand_1 = require("./commands/DescribeReplicationSubnetGroupsCommand");
const DescribeReplicationTaskAssessmentResultsCommand_1 = require("./commands/DescribeReplicationTaskAssessmentResultsCommand");
const DescribeReplicationTasksCommand_1 = require("./commands/DescribeReplicationTasksCommand");
const DescribeSchemasCommand_1 = require("./commands/DescribeSchemasCommand");
const DescribeTableStatisticsCommand_1 = require("./commands/DescribeTableStatisticsCommand");
const ImportCertificateCommand_1 = require("./commands/ImportCertificateCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ModifyEndpointCommand_1 = require("./commands/ModifyEndpointCommand");
const ModifyEventSubscriptionCommand_1 = require("./commands/ModifyEventSubscriptionCommand");
const ModifyReplicationInstanceCommand_1 = require("./commands/ModifyReplicationInstanceCommand");
const ModifyReplicationSubnetGroupCommand_1 = require("./commands/ModifyReplicationSubnetGroupCommand");
const ModifyReplicationTaskCommand_1 = require("./commands/ModifyReplicationTaskCommand");
const RebootReplicationInstanceCommand_1 = require("./commands/RebootReplicationInstanceCommand");
const RefreshSchemasCommand_1 = require("./commands/RefreshSchemasCommand");
const ReloadTablesCommand_1 = require("./commands/ReloadTablesCommand");
const RemoveTagsFromResourceCommand_1 = require("./commands/RemoveTagsFromResourceCommand");
const StartReplicationTaskAssessmentCommand_1 = require("./commands/StartReplicationTaskAssessmentCommand");
const StartReplicationTaskCommand_1 = require("./commands/StartReplicationTaskCommand");
const StopReplicationTaskCommand_1 = require("./commands/StopReplicationTaskCommand");
const TestConnectionCommand_1 = require("./commands/TestConnectionCommand");
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
class DatabaseMigrationService extends DatabaseMigrationServiceClient_1.DatabaseMigrationServiceClient {
    addTagsToResource(args, optionsOrCb, cb) {
        const command = new AddTagsToResourceCommand_1.AddTagsToResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    applyPendingMaintenanceAction(args, optionsOrCb, cb) {
        const command = new ApplyPendingMaintenanceActionCommand_1.ApplyPendingMaintenanceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpoint(args, optionsOrCb, cb) {
        const command = new CreateEndpointCommand_1.CreateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEventSubscription(args, optionsOrCb, cb) {
        const command = new CreateEventSubscriptionCommand_1.CreateEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReplicationInstance(args, optionsOrCb, cb) {
        const command = new CreateReplicationInstanceCommand_1.CreateReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReplicationSubnetGroup(args, optionsOrCb, cb) {
        const command = new CreateReplicationSubnetGroupCommand_1.CreateReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReplicationTask(args, optionsOrCb, cb) {
        const command = new CreateReplicationTaskCommand_1.CreateReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCertificate(args, optionsOrCb, cb) {
        const command = new DeleteCertificateCommand_1.DeleteCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConnection(args, optionsOrCb, cb) {
        const command = new DeleteConnectionCommand_1.DeleteConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteEndpointCommand_1.DeleteEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEventSubscription(args, optionsOrCb, cb) {
        const command = new DeleteEventSubscriptionCommand_1.DeleteEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationInstance(args, optionsOrCb, cb) {
        const command = new DeleteReplicationInstanceCommand_1.DeleteReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationSubnetGroup(args, optionsOrCb, cb) {
        const command = new DeleteReplicationSubnetGroupCommand_1.DeleteReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationTask(args, optionsOrCb, cb) {
        const command = new DeleteReplicationTaskCommand_1.DeleteReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountAttributes(args, optionsOrCb, cb) {
        const command = new DescribeAccountAttributesCommand_1.DescribeAccountAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCertificates(args, optionsOrCb, cb) {
        const command = new DescribeCertificatesCommand_1.DescribeCertificatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeConnections(args, optionsOrCb, cb) {
        const command = new DescribeConnectionsCommand_1.DescribeConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpointTypes(args, optionsOrCb, cb) {
        const command = new DescribeEndpointTypesCommand_1.DescribeEndpointTypesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeEndpointsCommand_1.DescribeEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventCategories(args, optionsOrCb, cb) {
        const command = new DescribeEventCategoriesCommand_1.DescribeEventCategoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEventSubscriptions(args, optionsOrCb, cb) {
        const command = new DescribeEventSubscriptionsCommand_1.DescribeEventSubscriptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEvents(args, optionsOrCb, cb) {
        const command = new DescribeEventsCommand_1.DescribeEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeOrderableReplicationInstances(args, optionsOrCb, cb) {
        const command = new DescribeOrderableReplicationInstancesCommand_1.DescribeOrderableReplicationInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePendingMaintenanceActions(args, optionsOrCb, cb) {
        const command = new DescribePendingMaintenanceActionsCommand_1.DescribePendingMaintenanceActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRefreshSchemasStatus(args, optionsOrCb, cb) {
        const command = new DescribeRefreshSchemasStatusCommand_1.DescribeRefreshSchemasStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReplicationInstanceTaskLogs(args, optionsOrCb, cb) {
        const command = new DescribeReplicationInstanceTaskLogsCommand_1.DescribeReplicationInstanceTaskLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReplicationInstances(args, optionsOrCb, cb) {
        const command = new DescribeReplicationInstancesCommand_1.DescribeReplicationInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReplicationSubnetGroups(args, optionsOrCb, cb) {
        const command = new DescribeReplicationSubnetGroupsCommand_1.DescribeReplicationSubnetGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReplicationTaskAssessmentResults(args, optionsOrCb, cb) {
        const command = new DescribeReplicationTaskAssessmentResultsCommand_1.DescribeReplicationTaskAssessmentResultsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeReplicationTasks(args, optionsOrCb, cb) {
        const command = new DescribeReplicationTasksCommand_1.DescribeReplicationTasksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSchemas(args, optionsOrCb, cb) {
        const command = new DescribeSchemasCommand_1.DescribeSchemasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTableStatistics(args, optionsOrCb, cb) {
        const command = new DescribeTableStatisticsCommand_1.DescribeTableStatisticsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importCertificate(args, optionsOrCb, cb) {
        const command = new ImportCertificateCommand_1.ImportCertificateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyEndpoint(args, optionsOrCb, cb) {
        const command = new ModifyEndpointCommand_1.ModifyEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyEventSubscription(args, optionsOrCb, cb) {
        const command = new ModifyEventSubscriptionCommand_1.ModifyEventSubscriptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReplicationInstance(args, optionsOrCb, cb) {
        const command = new ModifyReplicationInstanceCommand_1.ModifyReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReplicationSubnetGroup(args, optionsOrCb, cb) {
        const command = new ModifyReplicationSubnetGroupCommand_1.ModifyReplicationSubnetGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyReplicationTask(args, optionsOrCb, cb) {
        const command = new ModifyReplicationTaskCommand_1.ModifyReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rebootReplicationInstance(args, optionsOrCb, cb) {
        const command = new RebootReplicationInstanceCommand_1.RebootReplicationInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    refreshSchemas(args, optionsOrCb, cb) {
        const command = new RefreshSchemasCommand_1.RefreshSchemasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    reloadTables(args, optionsOrCb, cb) {
        const command = new ReloadTablesCommand_1.ReloadTablesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTagsFromResource(args, optionsOrCb, cb) {
        const command = new RemoveTagsFromResourceCommand_1.RemoveTagsFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startReplicationTask(args, optionsOrCb, cb) {
        const command = new StartReplicationTaskCommand_1.StartReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startReplicationTaskAssessment(args, optionsOrCb, cb) {
        const command = new StartReplicationTaskAssessmentCommand_1.StartReplicationTaskAssessmentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopReplicationTask(args, optionsOrCb, cb) {
        const command = new StopReplicationTaskCommand_1.StopReplicationTaskCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    testConnection(args, optionsOrCb, cb) {
        const command = new TestConnectionCommand_1.TestConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.DatabaseMigrationService = DatabaseMigrationService;
//# sourceMappingURL=DatabaseMigrationService.js.map