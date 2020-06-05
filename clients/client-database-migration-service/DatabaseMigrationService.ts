import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "./commands/AddTagsToResourceCommand";
import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput
} from "./commands/CreateEndpointCommand";
import {
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput
} from "./commands/CreateEventSubscriptionCommand";
import {
  CreateReplicationInstanceCommand,
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput
} from "./commands/CreateReplicationInstanceCommand";
import {
  CreateReplicationSubnetGroupCommand,
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput
} from "./commands/CreateReplicationSubnetGroupCommand";
import {
  CreateReplicationTaskCommand,
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput
} from "./commands/CreateReplicationTaskCommand";
import {
  DeleteCertificateCommand,
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput
} from "./commands/DeleteCertificateCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput
} from "./commands/DeleteEventSubscriptionCommand";
import {
  DeleteReplicationInstanceCommand,
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput
} from "./commands/DeleteReplicationInstanceCommand";
import {
  DeleteReplicationSubnetGroupCommand,
  DeleteReplicationSubnetGroupCommandInput,
  DeleteReplicationSubnetGroupCommandOutput
} from "./commands/DeleteReplicationSubnetGroupCommand";
import {
  DeleteReplicationTaskCommand,
  DeleteReplicationTaskCommandInput,
  DeleteReplicationTaskCommandOutput
} from "./commands/DeleteReplicationTaskCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput
} from "./commands/DescribeCertificatesCommand";
import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput
} from "./commands/DescribeEndpointTypesCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesCommandInput,
  DescribeEventCategoriesCommandOutput
} from "./commands/DescribeEventCategoriesCommand";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
} from "./commands/DescribeEventSubscriptionsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "./commands/DescribeEventsCommand";
import {
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput
} from "./commands/DescribeOrderableReplicationInstancesCommand";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput
} from "./commands/DescribePendingMaintenanceActionsCommand";
import {
  DescribeRefreshSchemasStatusCommand,
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput
} from "./commands/DescribeRefreshSchemasStatusCommand";
import {
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput
} from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput
} from "./commands/DescribeReplicationInstancesCommand";
import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput
} from "./commands/DescribeReplicationSubnetGroupsCommand";
import {
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput
} from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput
} from "./commands/DescribeReplicationTasksCommand";
import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput
} from "./commands/DescribeSchemasCommand";
import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput
} from "./commands/DescribeTableStatisticsCommand";
import {
  ImportCertificateCommand,
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput
} from "./commands/ImportCertificateCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyEndpointCommand,
  ModifyEndpointCommandInput,
  ModifyEndpointCommandOutput
} from "./commands/ModifyEndpointCommand";
import {
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionCommandInput,
  ModifyEventSubscriptionCommandOutput
} from "./commands/ModifyEventSubscriptionCommand";
import {
  ModifyReplicationInstanceCommand,
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput
} from "./commands/ModifyReplicationInstanceCommand";
import {
  ModifyReplicationSubnetGroupCommand,
  ModifyReplicationSubnetGroupCommandInput,
  ModifyReplicationSubnetGroupCommandOutput
} from "./commands/ModifyReplicationSubnetGroupCommand";
import {
  ModifyReplicationTaskCommand,
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput
} from "./commands/ModifyReplicationTaskCommand";
import {
  RebootReplicationInstanceCommand,
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput
} from "./commands/RebootReplicationInstanceCommand";
import {
  RefreshSchemasCommand,
  RefreshSchemasCommandInput,
  RefreshSchemasCommandOutput
} from "./commands/RefreshSchemasCommand";
import {
  ReloadTablesCommand,
  ReloadTablesCommandInput,
  ReloadTablesCommandOutput
} from "./commands/ReloadTablesCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "./commands/RemoveTagsFromResourceCommand";
import {
  StartReplicationTaskAssessmentCommand,
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput
} from "./commands/StartReplicationTaskAssessmentCommand";
import {
  StartReplicationTaskCommand,
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput
} from "./commands/StartReplicationTaskCommand";
import {
  StopReplicationTaskCommand,
  StopReplicationTaskCommandInput,
  StopReplicationTaskCommandOutput
} from "./commands/StopReplicationTaskCommand";
import {
  TestConnectionCommand,
  TestConnectionCommandInput,
  TestConnectionCommandOutput
} from "./commands/TestConnectionCommand";
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
export class DatabaseMigrationService extends DatabaseMigrationServiceClient {
  /**
   * <p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint,
   *          security group, and migration task. These tags can also be used with cost allocation
   *          reporting to track cost associated with DMS resources, or used in a Condition statement in
   *          an IAM policy for DMS.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void),
    cb?: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> | void {
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an endpoint using the provided settings.</p>
   */
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointCommandOutput) => void
  ): Promise<CreateEndpointCommandOutput> | void {
    const command = new CreateEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateEventSubscriptionCommandOutput) => void
  ): Promise<CreateEventSubscriptionCommandOutput> | void {
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the replication instance using the specified parameters.</p>
   *          <p>AWS DMS requires that your account have certain roles with appropriate permissions
   *          before you can create a replication instance. For information on the required roles, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html">Creating the IAM Roles to Use With the AWS CLI and AWS DMS API</a>. For
   *          information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.IAMPermissions.html">IAM Permissions Needed to Use AWS DMS</a>.</p>
   */
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationInstanceCommandOutput>;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): void;
  public createReplicationInstance(
    args: CreateReplicationInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationInstanceCommandOutput) => void
  ): Promise<CreateReplicationInstanceCommandOutput> | void {
    const command = new CreateReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
   */
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationSubnetGroupCommandOutput>;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): void;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationSubnetGroupCommandOutput) => void
  ): Promise<CreateReplicationSubnetGroupCommandOutput> | void {
    const command = new CreateReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a replication task using the specified parameters.</p>
   */
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationTaskCommandOutput>;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): void;
  public createReplicationTask(
    args: CreateReplicationTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateReplicationTaskCommandOutput) => void
  ): Promise<CreateReplicationTaskCommandOutput> | void {
    const command = new CreateReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified certificate. </p>
   */
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCertificateCommandOutput>;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteCertificateCommandOutput) => void
  ): Promise<DeleteCertificateCommandOutput> | void {
    const command = new DeleteCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the connection between a replication instance and an endpoint.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified endpoint.</p>
   *          <note>
   *             <p>All tasks associated with the endpoint must be deleted before you can delete the
   *             endpoint.</p>
   *          </note>
   *          <p></p>
   */
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): Promise<DeleteEndpointCommandOutput> | void {
    const command = new DeleteEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes an AWS DMS event subscription. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void
  ): Promise<DeleteEventSubscriptionCommandOutput> | void {
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified replication instance.</p>
   *          <note>
   *             <p>You must delete any migration tasks that are associated with the replication instance
   *             before you can delete it.</p>
   *          </note>
   *          <p></p>
   */
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationInstanceCommandOutput>;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): void;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationInstanceCommandOutput) => void
  ): Promise<DeleteReplicationInstanceCommandOutput> | void {
    const command = new DeleteReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a subnet group.</p>
   */
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationSubnetGroupCommandOutput>;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): void;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationSubnetGroupCommandOutput) => void
  ): Promise<DeleteReplicationSubnetGroupCommandOutput> | void {
    const command = new DeleteReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified replication task.</p>
   */
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationTaskCommandOutput>;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): void;
  public deleteReplicationTask(
    args: DeleteReplicationTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteReplicationTaskCommandOutput) => void
  ): Promise<DeleteReplicationTaskCommandOutput> | void {
    const command = new DeleteReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
   *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
   *          quotas include a list of resource quotas supported by the account, such as the number of
   *          replication instances allowed. The description for each resource quota, includes the quota
   *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
   *          account identifier to name each artifact used by DMS in the given region.</p>
   *          <p>This command does not take any parameters.</p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a description of the certificate.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificatesCommandOutput) => void
  ): Promise<DescribeCertificatesCommandOutput> | void {
    const command = new DescribeCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the connections that have been made between the replication
   *          instance and an endpoint. Connections are created when you test an endpoint.</p>
   */
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionsCommandOutput>;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectionsCommandOutput) => void
  ): Promise<DescribeConnectionsCommandOutput> | void {
    const command = new DescribeConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the endpoints for your account in the current region.</p>
   */
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): Promise<DescribeEndpointsCommandOutput> | void {
    const command = new DescribeEndpointsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the type of endpoints available.</p>
   */
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointTypesCommandOutput>;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): void;
  public describeEndpointTypes(
    args: DescribeEndpointTypesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEndpointTypesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointTypesCommandOutput) => void
  ): Promise<DescribeEndpointTypesCommandOutput> | void {
    const command = new DescribeEndpointTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists categories for all event source types, or, if specified, for a specified source
   *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
   *             and Notifications</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventCategoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventCategoriesCommandOutput) => void
  ): Promise<DescribeEventCategoriesCommandOutput> | void {
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Lists events for a given source identifier and source type. You can also specify a
   *          start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *             Notifications</a> in the <i>AWS Database Migration User
   *          Guide.</i>
   *          </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the event subscriptions for a customer account. The description of a
   *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
   *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
   *             <code>CreationTime</code>, and <code>Status</code>. </p>
   *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
   *          subscription.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void
  ): Promise<DescribeEventSubscriptionsCommandOutput> | void {
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the replication instance types that can be created in the
   *          specified region.</p>
   */
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput>;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    cb: (
      err: any,
      data?: DescribeOrderableReplicationInstancesCommandOutput
    ) => void
  ): void;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeOrderableReplicationInstancesCommandOutput
    ) => void
  ): void;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeOrderableReplicationInstancesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeOrderableReplicationInstancesCommandOutput
    ) => void
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput> | void {
    const command = new DescribeOrderableReplicationInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>For internal use only</p>
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePendingMaintenanceActionsCommandOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    cb: (
      err: any,
      data?: DescribePendingMaintenanceActionsCommandOutput
    ) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribePendingMaintenanceActionsCommandOutput
    ) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribePendingMaintenanceActionsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribePendingMaintenanceActionsCommandOutput
    ) => void
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> | void {
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the status of the RefreshSchemas operation.</p>
   */
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRefreshSchemasStatusCommandOutput>;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): void;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeRefreshSchemasStatusCommandOutput) => void
  ): Promise<DescribeRefreshSchemasStatusCommandOutput> | void {
    const command = new DescribeRefreshSchemasStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about replication instances for your account in the current
   *          region.</p>
   */
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstancesCommandOutput>;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): void;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationInstancesCommandOutput) => void
  ): Promise<DescribeReplicationInstancesCommandOutput> | void {
    const command = new DescribeReplicationInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the task logs for the specified task.</p>
   */
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput>;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    cb: (
      err: any,
      data?: DescribeReplicationInstanceTaskLogsCommandOutput
    ) => void
  ): void;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeReplicationInstanceTaskLogsCommandOutput
    ) => void
  ): void;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeReplicationInstanceTaskLogsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeReplicationInstanceTaskLogsCommandOutput
    ) => void
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> | void {
    const command = new DescribeReplicationInstanceTaskLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the replication subnet groups.</p>
   */
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput>;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): void;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeReplicationSubnetGroupsCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribeReplicationSubnetGroupsCommandOutput) => void
  ): Promise<DescribeReplicationSubnetGroupsCommandOutput> | void {
    const command = new DescribeReplicationSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the task assessment results from Amazon S3. This action always returns the
   *          latest results.</p>
   */
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput>;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    cb: (
      err: any,
      data?: DescribeReplicationTaskAssessmentResultsCommandOutput
    ) => void
  ): void;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeReplicationTaskAssessmentResultsCommandOutput
    ) => void
  ): void;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeReplicationTaskAssessmentResultsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeReplicationTaskAssessmentResultsCommandOutput
    ) => void
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> | void {
    const command = new DescribeReplicationTaskAssessmentResultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about replication tasks for your account in the current
   *          region.</p>
   */
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationTasksCommandOutput>;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): void;
  public describeReplicationTasks(
    args: DescribeReplicationTasksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeReplicationTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeReplicationTasksCommandOutput) => void
  ): Promise<DescribeReplicationTasksCommandOutput> | void {
    const command = new DescribeReplicationTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the schema for the specified endpoint.</p>
   *
   *          <p></p>
   */
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemasCommandOutput>;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    cb: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): void;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): void;
  public describeSchemas(
    args: DescribeSchemasCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeSchemasCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchemasCommandOutput) => void
  ): Promise<DescribeSchemasCommandOutput> | void {
    const command = new DescribeSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns table statistics on the database migration task, including table name, rows
   *          inserted, rows updated, and rows deleted.</p>
   *          <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS
   *          last updated the table statistics record for a table. It does not indicate the time of the
   *          last update to the table.</p>
   */
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableStatisticsCommandOutput>;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): void;
  public describeTableStatistics(
    args: DescribeTableStatisticsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTableStatisticsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableStatisticsCommandOutput) => void
  ): Promise<DescribeTableStatisticsCommandOutput> | void {
    const command = new DescribeTableStatisticsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads the specified certificate.</p>
   */
  public importCertificate(
    args: ImportCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCertificateCommandOutput>;
  public importCertificate(
    args: ImportCertificateCommandInput,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCertificateCommandOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ImportCertificateCommandOutput) => void),
    cb?: (err: any, data?: ImportCertificateCommandOutput) => void
  ): Promise<ImportCertificateCommandOutput> | void {
    const command = new ImportCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags for an AWS DMS resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified endpoint.</p>
   */
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointCommandOutput>;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    cb: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): void;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): void;
  public modifyEndpoint(
    args: ModifyEndpointCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyEndpointCommandOutput) => void),
    cb?: (err: any, data?: ModifyEndpointCommandOutput) => void
  ): Promise<ModifyEndpointCommandOutput> | void {
    const command = new ModifyEndpointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies an existing AWS DMS event notification subscription. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyEventSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void
  ): Promise<ModifyEventSubscriptionCommandOutput> | void {
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the replication instance to apply new settings. You can change one or more
   *          parameters by specifying these parameters and the new values in the request.</p>
   *          <p>Some settings are applied during the maintenance window.</p>
   *
   *          <p></p>
   */
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationInstanceCommandOutput>;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): void;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationInstanceCommandOutput) => void
  ): Promise<ModifyReplicationInstanceCommandOutput> | void {
    const command = new ModifyReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the settings for the specified replication subnet group.</p>
   */
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationSubnetGroupCommandOutput>;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): void;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationSubnetGroupCommandOutput) => void
  ): Promise<ModifyReplicationSubnetGroupCommandOutput> | void {
    const command = new ModifyReplicationSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified replication task.</p>
   *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
   *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
   *             <i>AWS Database Migration Service User Guide</i>.</p>
   */
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyReplicationTaskCommandOutput>;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): void;
  public modifyReplicationTask(
    args: ModifyReplicationTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: ModifyReplicationTaskCommandOutput) => void
  ): Promise<ModifyReplicationTaskCommandOutput> | void {
    const command = new ModifyReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
   *          replication instance becomes available again.</p>
   */
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootReplicationInstanceCommandOutput>;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): void;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RebootReplicationInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootReplicationInstanceCommandOutput) => void
  ): Promise<RebootReplicationInstanceCommandOutput> | void {
    const command = new RebootReplicationInstanceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
   *          can take several minutes. You can check the status of this operation by calling the
   *          DescribeRefreshSchemasStatus operation.</p>
   */
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RefreshSchemasCommandOutput>;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    cb: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): void;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): void;
  public refreshSchemas(
    args: RefreshSchemasCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RefreshSchemasCommandOutput) => void),
    cb?: (err: any, data?: RefreshSchemasCommandOutput) => void
  ): Promise<RefreshSchemasCommandOutput> | void {
    const command = new RefreshSchemasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reloads the target database table with the source data. </p>
   */
  public reloadTables(
    args: ReloadTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReloadTablesCommandOutput>;
  public reloadTables(
    args: ReloadTablesCommandInput,
    cb: (err: any, data?: ReloadTablesCommandOutput) => void
  ): void;
  public reloadTables(
    args: ReloadTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReloadTablesCommandOutput) => void
  ): void;
  public reloadTables(
    args: ReloadTablesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ReloadTablesCommandOutput) => void),
    cb?: (err: any, data?: ReloadTablesCommandOutput) => void
  ): Promise<ReloadTablesCommandOutput> | void {
    const command = new ReloadTablesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes metadata tags from a DMS resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the replication task.</p>
   *          <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskCommandOutput>;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): void;
  public startReplicationTask(
    args: StartReplicationTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: StartReplicationTaskCommandOutput) => void
  ): Promise<StartReplicationTaskCommandOutput> | void {
    const command = new StartReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Starts the replication task assessment for unsupported data types in the source
   *          database. </p>
   */
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplicationTaskAssessmentCommandOutput>;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): void;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: StartReplicationTaskAssessmentCommandOutput
        ) => void),
    cb?: (err: any, data?: StartReplicationTaskAssessmentCommandOutput) => void
  ): Promise<StartReplicationTaskAssessmentCommandOutput> | void {
    const command = new StartReplicationTaskAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the replication task.</p>
   *
   *          <p></p>
   */
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationTaskCommandOutput>;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): void;
  public stopReplicationTask(
    args: StopReplicationTaskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopReplicationTaskCommandOutput) => void),
    cb?: (err: any, data?: StopReplicationTaskCommandOutput) => void
  ): Promise<StopReplicationTaskCommandOutput> | void {
    const command = new StopReplicationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tests the connection between the replication instance and the endpoint.</p>
   */
  public testConnection(
    args: TestConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionCommandOutput>;
  public testConnection(
    args: TestConnectionCommandInput,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  public testConnection(
    args: TestConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionCommandOutput) => void
  ): void;
  public testConnection(
    args: TestConnectionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TestConnectionCommandOutput) => void),
    cb?: (err: any, data?: TestConnectionCommandOutput) => void
  ): Promise<TestConnectionCommandOutput> | void {
    const command = new TestConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
