import { DatabaseMigrationServiceClient } from "./DatabaseMigrationServiceClient";
import { AccessDeniedFault } from "./types/AccessDeniedFault";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { ApplyPendingMaintenanceActionInput } from "./types/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "./types/ApplyPendingMaintenanceActionOutput";
import { CreateEndpointInput } from "./types/CreateEndpointInput";
import { CreateEndpointOutput } from "./types/CreateEndpointOutput";
import { CreateEventSubscriptionInput } from "./types/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./types/CreateEventSubscriptionOutput";
import { CreateReplicationInstanceInput } from "./types/CreateReplicationInstanceInput";
import { CreateReplicationInstanceOutput } from "./types/CreateReplicationInstanceOutput";
import { CreateReplicationSubnetGroupInput } from "./types/CreateReplicationSubnetGroupInput";
import { CreateReplicationSubnetGroupOutput } from "./types/CreateReplicationSubnetGroupOutput";
import { CreateReplicationTaskInput } from "./types/CreateReplicationTaskInput";
import { CreateReplicationTaskOutput } from "./types/CreateReplicationTaskOutput";
import { DeleteCertificateInput } from "./types/DeleteCertificateInput";
import { DeleteCertificateOutput } from "./types/DeleteCertificateOutput";
import { DeleteEndpointInput } from "./types/DeleteEndpointInput";
import { DeleteEndpointOutput } from "./types/DeleteEndpointOutput";
import { DeleteEventSubscriptionInput } from "./types/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "./types/DeleteEventSubscriptionOutput";
import { DeleteReplicationInstanceInput } from "./types/DeleteReplicationInstanceInput";
import { DeleteReplicationInstanceOutput } from "./types/DeleteReplicationInstanceOutput";
import { DeleteReplicationSubnetGroupInput } from "./types/DeleteReplicationSubnetGroupInput";
import { DeleteReplicationSubnetGroupOutput } from "./types/DeleteReplicationSubnetGroupOutput";
import { DeleteReplicationTaskInput } from "./types/DeleteReplicationTaskInput";
import { DeleteReplicationTaskOutput } from "./types/DeleteReplicationTaskOutput";
import { DescribeAccountAttributesInput } from "./types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "./types/DescribeAccountAttributesOutput";
import { DescribeCertificatesInput } from "./types/DescribeCertificatesInput";
import { DescribeCertificatesOutput } from "./types/DescribeCertificatesOutput";
import { DescribeConnectionsInput } from "./types/DescribeConnectionsInput";
import { DescribeConnectionsOutput } from "./types/DescribeConnectionsOutput";
import { DescribeEndpointTypesInput } from "./types/DescribeEndpointTypesInput";
import { DescribeEndpointTypesOutput } from "./types/DescribeEndpointTypesOutput";
import { DescribeEndpointsInput } from "./types/DescribeEndpointsInput";
import { DescribeEndpointsOutput } from "./types/DescribeEndpointsOutput";
import { DescribeEventCategoriesInput } from "./types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "./types/DescribeEventCategoriesOutput";
import { DescribeEventSubscriptionsInput } from "./types/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "./types/DescribeEventSubscriptionsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeOrderableReplicationInstancesInput } from "./types/DescribeOrderableReplicationInstancesInput";
import { DescribeOrderableReplicationInstancesOutput } from "./types/DescribeOrderableReplicationInstancesOutput";
import { DescribePendingMaintenanceActionsInput } from "./types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "./types/DescribePendingMaintenanceActionsOutput";
import { DescribeRefreshSchemasStatusInput } from "./types/DescribeRefreshSchemasStatusInput";
import { DescribeRefreshSchemasStatusOutput } from "./types/DescribeRefreshSchemasStatusOutput";
import { DescribeReplicationInstanceTaskLogsInput } from "./types/DescribeReplicationInstanceTaskLogsInput";
import { DescribeReplicationInstanceTaskLogsOutput } from "./types/DescribeReplicationInstanceTaskLogsOutput";
import { DescribeReplicationInstancesInput } from "./types/DescribeReplicationInstancesInput";
import { DescribeReplicationInstancesOutput } from "./types/DescribeReplicationInstancesOutput";
import { DescribeReplicationSubnetGroupsInput } from "./types/DescribeReplicationSubnetGroupsInput";
import { DescribeReplicationSubnetGroupsOutput } from "./types/DescribeReplicationSubnetGroupsOutput";
import { DescribeReplicationTaskAssessmentResultsInput } from "./types/DescribeReplicationTaskAssessmentResultsInput";
import { DescribeReplicationTaskAssessmentResultsOutput } from "./types/DescribeReplicationTaskAssessmentResultsOutput";
import { DescribeReplicationTasksInput } from "./types/DescribeReplicationTasksInput";
import { DescribeReplicationTasksOutput } from "./types/DescribeReplicationTasksOutput";
import { DescribeSchemasInput } from "./types/DescribeSchemasInput";
import { DescribeSchemasOutput } from "./types/DescribeSchemasOutput";
import { DescribeTableStatisticsInput } from "./types/DescribeTableStatisticsInput";
import { DescribeTableStatisticsOutput } from "./types/DescribeTableStatisticsOutput";
import { ImportCertificateInput } from "./types/ImportCertificateInput";
import { ImportCertificateOutput } from "./types/ImportCertificateOutput";
import { InsufficientResourceCapacityFault } from "./types/InsufficientResourceCapacityFault";
import { InvalidCertificateFault } from "./types/InvalidCertificateFault";
import { InvalidResourceStateFault } from "./types/InvalidResourceStateFault";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { KMSAccessDeniedFault } from "./types/KMSAccessDeniedFault";
import { KMSDisabledFault } from "./types/KMSDisabledFault";
import { KMSInvalidStateFault } from "./types/KMSInvalidStateFault";
import { KMSKeyNotAccessibleFault } from "./types/KMSKeyNotAccessibleFault";
import { KMSNotFoundFault } from "./types/KMSNotFoundFault";
import { KMSThrottlingFault } from "./types/KMSThrottlingFault";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ModifyEndpointInput } from "./types/ModifyEndpointInput";
import { ModifyEndpointOutput } from "./types/ModifyEndpointOutput";
import { ModifyEventSubscriptionInput } from "./types/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./types/ModifyEventSubscriptionOutput";
import { ModifyReplicationInstanceInput } from "./types/ModifyReplicationInstanceInput";
import { ModifyReplicationInstanceOutput } from "./types/ModifyReplicationInstanceOutput";
import { ModifyReplicationSubnetGroupInput } from "./types/ModifyReplicationSubnetGroupInput";
import { ModifyReplicationSubnetGroupOutput } from "./types/ModifyReplicationSubnetGroupOutput";
import { ModifyReplicationTaskInput } from "./types/ModifyReplicationTaskInput";
import { ModifyReplicationTaskOutput } from "./types/ModifyReplicationTaskOutput";
import { RebootReplicationInstanceInput } from "./types/RebootReplicationInstanceInput";
import { RebootReplicationInstanceOutput } from "./types/RebootReplicationInstanceOutput";
import { RefreshSchemasInput } from "./types/RefreshSchemasInput";
import { RefreshSchemasOutput } from "./types/RefreshSchemasOutput";
import { ReloadTablesInput } from "./types/ReloadTablesInput";
import { ReloadTablesOutput } from "./types/ReloadTablesOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ReplicationSubnetGroupDoesNotCoverEnoughAZs } from "./types/ReplicationSubnetGroupDoesNotCoverEnoughAZs";
import { ResourceAlreadyExistsFault } from "./types/ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./types/ResourceNotFoundFault";
import { ResourceQuotaExceededFault } from "./types/ResourceQuotaExceededFault";
import { SNSInvalidTopicFault } from "./types/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./types/SNSNoAuthorizationFault";
import { StartReplicationTaskAssessmentInput } from "./types/StartReplicationTaskAssessmentInput";
import { StartReplicationTaskAssessmentOutput } from "./types/StartReplicationTaskAssessmentOutput";
import { StartReplicationTaskInput } from "./types/StartReplicationTaskInput";
import { StartReplicationTaskOutput } from "./types/StartReplicationTaskOutput";
import { StopReplicationTaskInput } from "./types/StopReplicationTaskInput";
import { StopReplicationTaskOutput } from "./types/StopReplicationTaskOutput";
import { StorageQuotaExceededFault } from "./types/StorageQuotaExceededFault";
import { SubnetAlreadyInUse } from "./types/SubnetAlreadyInUse";
import { TestConnectionInput } from "./types/TestConnectionInput";
import { TestConnectionOutput } from "./types/TestConnectionOutput";
import { UpgradeDependencyFailureFault } from "./types/UpgradeDependencyFailureFault";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CreateEndpointCommand } from "./commands/CreateEndpointCommand";
import { CreateEventSubscriptionCommand } from "./commands/CreateEventSubscriptionCommand";
import { CreateReplicationInstanceCommand } from "./commands/CreateReplicationInstanceCommand";
import { CreateReplicationSubnetGroupCommand } from "./commands/CreateReplicationSubnetGroupCommand";
import { CreateReplicationTaskCommand } from "./commands/CreateReplicationTaskCommand";
import { DeleteCertificateCommand } from "./commands/DeleteCertificateCommand";
import { DeleteEndpointCommand } from "./commands/DeleteEndpointCommand";
import { DeleteEventSubscriptionCommand } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteReplicationInstanceCommand } from "./commands/DeleteReplicationInstanceCommand";
import { DeleteReplicationSubnetGroupCommand } from "./commands/DeleteReplicationSubnetGroupCommand";
import { DeleteReplicationTaskCommand } from "./commands/DeleteReplicationTaskCommand";
import { DescribeAccountAttributesCommand } from "./commands/DescribeAccountAttributesCommand";
import { DescribeCertificatesCommand } from "./commands/DescribeCertificatesCommand";
import { DescribeConnectionsCommand } from "./commands/DescribeConnectionsCommand";
import { DescribeEndpointTypesCommand } from "./commands/DescribeEndpointTypesCommand";
import { DescribeEndpointsCommand } from "./commands/DescribeEndpointsCommand";
import { DescribeEventCategoriesCommand } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeOrderableReplicationInstancesCommand } from "./commands/DescribeOrderableReplicationInstancesCommand";
import { DescribePendingMaintenanceActionsCommand } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeRefreshSchemasStatusCommand } from "./commands/DescribeRefreshSchemasStatusCommand";
import { DescribeReplicationInstanceTaskLogsCommand } from "./commands/DescribeReplicationInstanceTaskLogsCommand";
import { DescribeReplicationInstancesCommand } from "./commands/DescribeReplicationInstancesCommand";
import { DescribeReplicationSubnetGroupsCommand } from "./commands/DescribeReplicationSubnetGroupsCommand";
import { DescribeReplicationTaskAssessmentResultsCommand } from "./commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DescribeReplicationTasksCommand } from "./commands/DescribeReplicationTasksCommand";
import { DescribeSchemasCommand } from "./commands/DescribeSchemasCommand";
import { DescribeTableStatisticsCommand } from "./commands/DescribeTableStatisticsCommand";
import { ImportCertificateCommand } from "./commands/ImportCertificateCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyEndpointCommand } from "./commands/ModifyEndpointCommand";
import { ModifyEventSubscriptionCommand } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyReplicationInstanceCommand } from "./commands/ModifyReplicationInstanceCommand";
import { ModifyReplicationSubnetGroupCommand } from "./commands/ModifyReplicationSubnetGroupCommand";
import { ModifyReplicationTaskCommand } from "./commands/ModifyReplicationTaskCommand";
import { RebootReplicationInstanceCommand } from "./commands/RebootReplicationInstanceCommand";
import { RefreshSchemasCommand } from "./commands/RefreshSchemasCommand";
import { ReloadTablesCommand } from "./commands/ReloadTablesCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { StartReplicationTaskAssessmentCommand } from "./commands/StartReplicationTaskAssessmentCommand";
import { StartReplicationTaskCommand } from "./commands/StartReplicationTaskCommand";
import { StopReplicationTaskCommand } from "./commands/StopReplicationTaskCommand";
import { TestConnectionCommand } from "./commands/TestConnectionCommand";

export class DatabaseMigrationService extends DatabaseMigrationServiceClient {
  /**
   * <p>Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTagsToResource(
    args: AddTagsToResourceInput
  ): Promise<AddTagsToResourceOutput>;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb: (err: any, data?: AddTagsToResourceOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceInput,
    cb?: (err: any, data?: AddTagsToResourceOutput) => void
  ): Promise<AddTagsToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a pending maintenance action to a resource (for example, to a replication instance).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput
  ): Promise<ApplyPendingMaintenanceActionOutput>;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionOutput) => void
  ): void;
  public applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionInput,
    cb?: (err: any, data?: ApplyPendingMaintenanceActionOutput) => void
  ): Promise<ApplyPendingMaintenanceActionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApplyPendingMaintenanceActionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an endpoint using the provided settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEndpoint(
    args: CreateEndpointInput
  ): Promise<CreateEndpointOutput>;
  public createEndpoint(
    args: CreateEndpointInput,
    cb: (err: any, data?: CreateEndpointOutput) => void
  ): void;
  public createEndpoint(
    args: CreateEndpointInput,
    cb?: (err: any, data?: CreateEndpointOutput) => void
  ): Promise<CreateEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates an AWS DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS sources belonging to your customer account.</p> <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {SNSInvalidTopicFault} <p>The SNS topic is invalid.</p>
   *   - {SNSNoAuthorizationFault} <p>You are not authorized for the SNS subscription.</p>
   *   - {KMSAccessDeniedFault} <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
   *   - {KMSDisabledFault} <p>The specified master key (CMK) isn't enabled.</p>
   *   - {KMSInvalidStateFault} <p>The state of the specified AWS KMS resource isn't valid for this request.</p>
   *   - {KMSNotFoundFault} <p>The specified AWS KMS entity or resource can't be found.</p>
   *   - {KMSThrottlingFault} <p>This request triggered AWS KMS request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEventSubscription(
    args: CreateEventSubscriptionInput
  ): Promise<CreateEventSubscriptionOutput>;
  public createEventSubscription(
    args: CreateEventSubscriptionInput,
    cb: (err: any, data?: CreateEventSubscriptionOutput) => void
  ): void;
  public createEventSubscription(
    args: CreateEventSubscriptionInput,
    cb?: (err: any, data?: CreateEventSubscriptionOutput) => void
  ): Promise<CreateEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates the replication instance using the specified parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {InsufficientResourceCapacityFault} <p>There are not enough resources allocated to the database migration.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {StorageQuotaExceededFault} <p>The storage quota has been exceeded.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ReplicationSubnetGroupDoesNotCoverEnoughAZs} <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {InvalidSubnet} <p>The subnet provided is invalid.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReplicationInstance(
    args: CreateReplicationInstanceInput
  ): Promise<CreateReplicationInstanceOutput>;
  public createReplicationInstance(
    args: CreateReplicationInstanceInput,
    cb: (err: any, data?: CreateReplicationInstanceOutput) => void
  ): void;
  public createReplicationInstance(
    args: CreateReplicationInstanceInput,
    cb?: (err: any, data?: CreateReplicationInstanceOutput) => void
  ): Promise<CreateReplicationInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReplicationInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {ReplicationSubnetGroupDoesNotCoverEnoughAZs} <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
   *   - {InvalidSubnet} <p>The subnet provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupInput
  ): Promise<CreateReplicationSubnetGroupOutput>;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupInput,
    cb: (err: any, data?: CreateReplicationSubnetGroupOutput) => void
  ): void;
  public createReplicationSubnetGroup(
    args: CreateReplicationSubnetGroupInput,
    cb?: (err: any, data?: CreateReplicationSubnetGroupOutput) => void
  ): Promise<CreateReplicationSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReplicationSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a replication task using the specified parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReplicationTask(
    args: CreateReplicationTaskInput
  ): Promise<CreateReplicationTaskOutput>;
  public createReplicationTask(
    args: CreateReplicationTaskInput,
    cb: (err: any, data?: CreateReplicationTaskOutput) => void
  ): void;
  public createReplicationTask(
    args: CreateReplicationTaskInput,
    cb?: (err: any, data?: CreateReplicationTaskOutput) => void
  ): Promise<CreateReplicationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReplicationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified certificate. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCertificate(
    args: DeleteCertificateInput
  ): Promise<DeleteCertificateOutput>;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb: (err: any, data?: DeleteCertificateOutput) => void
  ): void;
  public deleteCertificate(
    args: DeleteCertificateInput,
    cb?: (err: any, data?: DeleteCertificateOutput) => void
  ): Promise<DeleteCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpoint(
    args: DeleteEndpointInput
  ): Promise<DeleteEndpointOutput>;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb: (err: any, data?: DeleteEndpointOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb?: (err: any, data?: DeleteEndpointOutput) => void
  ): Promise<DeleteEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes an AWS DMS event subscription. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput
  ): Promise<DeleteEventSubscriptionOutput>;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput,
    cb: (err: any, data?: DeleteEventSubscriptionOutput) => void
  ): void;
  public deleteEventSubscription(
    args: DeleteEventSubscriptionInput,
    cb?: (err: any, data?: DeleteEventSubscriptionOutput) => void
  ): Promise<DeleteEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceInput
  ): Promise<DeleteReplicationInstanceOutput>;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceInput,
    cb: (err: any, data?: DeleteReplicationInstanceOutput) => void
  ): void;
  public deleteReplicationInstance(
    args: DeleteReplicationInstanceInput,
    cb?: (err: any, data?: DeleteReplicationInstanceOutput) => void
  ): Promise<DeleteReplicationInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReplicationInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupInput
  ): Promise<DeleteReplicationSubnetGroupOutput>;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupInput,
    cb: (err: any, data?: DeleteReplicationSubnetGroupOutput) => void
  ): void;
  public deleteReplicationSubnetGroup(
    args: DeleteReplicationSubnetGroupInput,
    cb?: (err: any, data?: DeleteReplicationSubnetGroupOutput) => void
  ): Promise<DeleteReplicationSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReplicationSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified replication task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReplicationTask(
    args: DeleteReplicationTaskInput
  ): Promise<DeleteReplicationTaskOutput>;
  public deleteReplicationTask(
    args: DeleteReplicationTaskInput,
    cb: (err: any, data?: DeleteReplicationTaskOutput) => void
  ): void;
  public deleteReplicationTask(
    args: DeleteReplicationTaskInput,
    cb?: (err: any, data?: DeleteReplicationTaskOutput) => void
  ): Promise<DeleteReplicationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReplicationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput
  ): Promise<DescribeAccountAttributesOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesInput,
    cb?: (err: any, data?: DescribeAccountAttributesOutput) => void
  ): Promise<DescribeAccountAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a description of the certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCertificates(
    args: DescribeCertificatesInput
  ): Promise<DescribeCertificatesOutput>;
  public describeCertificates(
    args: DescribeCertificatesInput,
    cb: (err: any, data?: DescribeCertificatesOutput) => void
  ): void;
  public describeCertificates(
    args: DescribeCertificatesInput,
    cb?: (err: any, data?: DescribeCertificatesOutput) => void
  ): Promise<DescribeCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConnections(
    args: DescribeConnectionsInput
  ): Promise<DescribeConnectionsOutput>;
  public describeConnections(
    args: DescribeConnectionsInput,
    cb: (err: any, data?: DescribeConnectionsOutput) => void
  ): void;
  public describeConnections(
    args: DescribeConnectionsInput,
    cb?: (err: any, data?: DescribeConnectionsOutput) => void
  ): Promise<DescribeConnectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConnectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the type of endpoints available.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpointTypes(
    args: DescribeEndpointTypesInput
  ): Promise<DescribeEndpointTypesOutput>;
  public describeEndpointTypes(
    args: DescribeEndpointTypesInput,
    cb: (err: any, data?: DescribeEndpointTypesOutput) => void
  ): void;
  public describeEndpointTypes(
    args: DescribeEndpointTypesInput,
    cb?: (err: any, data?: DescribeEndpointTypesOutput) => void
  ): Promise<DescribeEndpointTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the endpoints for your account in the current region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEndpoints(
    args: DescribeEndpointsInput
  ): Promise<DescribeEndpointsOutput>;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb: (err: any, data?: DescribeEndpointsOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsInput,
    cb?: (err: any, data?: DescribeEndpointsOutput) => void
  ): Promise<DescribeEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventCategories(
    args: DescribeEventCategoriesInput
  ): Promise<DescribeEventCategoriesOutput>;
  public describeEventCategories(
    args: DescribeEventCategoriesInput,
    cb: (err: any, data?: DescribeEventCategoriesOutput) => void
  ): void;
  public describeEventCategories(
    args: DescribeEventCategoriesInput,
    cb?: (err: any, data?: DescribeEventCategoriesOutput) => void
  ): Promise<DescribeEventCategoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventCategoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput
  ): Promise<DescribeEventSubscriptionsOutput>;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput,
    cb: (err: any, data?: DescribeEventSubscriptionsOutput) => void
  ): void;
  public describeEventSubscriptions(
    args: DescribeEventSubscriptionsInput,
    cb?: (err: any, data?: DescribeEventSubscriptionsOutput) => void
  ): Promise<DescribeEventSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>AWS Database Migration User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEvents(
    args: DescribeEventsInput
  ): Promise<DescribeEventsOutput>;
  public describeEvents(
    args: DescribeEventsInput,
    cb: (err: any, data?: DescribeEventsOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsInput,
    cb?: (err: any, data?: DescribeEventsOutput) => void
  ): Promise<DescribeEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the replication instance types that can be created in the specified region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesInput
  ): Promise<DescribeOrderableReplicationInstancesOutput>;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesInput,
    cb: (err: any, data?: DescribeOrderableReplicationInstancesOutput) => void
  ): void;
  public describeOrderableReplicationInstances(
    args: DescribeOrderableReplicationInstancesInput,
    cb?: (err: any, data?: DescribeOrderableReplicationInstancesOutput) => void
  ): Promise<DescribeOrderableReplicationInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrderableReplicationInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For internal use only</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput
  ): Promise<DescribePendingMaintenanceActionsOutput>;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput,
    cb: (err: any, data?: DescribePendingMaintenanceActionsOutput) => void
  ): void;
  public describePendingMaintenanceActions(
    args: DescribePendingMaintenanceActionsInput,
    cb?: (err: any, data?: DescribePendingMaintenanceActionsOutput) => void
  ): Promise<DescribePendingMaintenanceActionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribePendingMaintenanceActionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the status of the RefreshSchemas operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusInput
  ): Promise<DescribeRefreshSchemasStatusOutput>;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusInput,
    cb: (err: any, data?: DescribeRefreshSchemasStatusOutput) => void
  ): void;
  public describeRefreshSchemasStatus(
    args: DescribeRefreshSchemasStatusInput,
    cb?: (err: any, data?: DescribeRefreshSchemasStatusOutput) => void
  ): Promise<DescribeRefreshSchemasStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRefreshSchemasStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the task logs for the specified task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsInput
  ): Promise<DescribeReplicationInstanceTaskLogsOutput>;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsInput,
    cb: (err: any, data?: DescribeReplicationInstanceTaskLogsOutput) => void
  ): void;
  public describeReplicationInstanceTaskLogs(
    args: DescribeReplicationInstanceTaskLogsInput,
    cb?: (err: any, data?: DescribeReplicationInstanceTaskLogsOutput) => void
  ): Promise<DescribeReplicationInstanceTaskLogsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationInstanceTaskLogsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about replication instances for your account in the current region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationInstances(
    args: DescribeReplicationInstancesInput
  ): Promise<DescribeReplicationInstancesOutput>;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesInput,
    cb: (err: any, data?: DescribeReplicationInstancesOutput) => void
  ): void;
  public describeReplicationInstances(
    args: DescribeReplicationInstancesInput,
    cb?: (err: any, data?: DescribeReplicationInstancesOutput) => void
  ): Promise<DescribeReplicationInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the replication subnet groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsInput
  ): Promise<DescribeReplicationSubnetGroupsOutput>;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsInput,
    cb: (err: any, data?: DescribeReplicationSubnetGroupsOutput) => void
  ): void;
  public describeReplicationSubnetGroups(
    args: DescribeReplicationSubnetGroupsInput,
    cb?: (err: any, data?: DescribeReplicationSubnetGroupsOutput) => void
  ): Promise<DescribeReplicationSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the task assessment results from Amazon S3. This action always returns the latest results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsInput
  ): Promise<DescribeReplicationTaskAssessmentResultsOutput>;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsInput,
    cb: (
      err: any,
      data?: DescribeReplicationTaskAssessmentResultsOutput
    ) => void
  ): void;
  public describeReplicationTaskAssessmentResults(
    args: DescribeReplicationTaskAssessmentResultsInput,
    cb?: (
      err: any,
      data?: DescribeReplicationTaskAssessmentResultsOutput
    ) => void
  ): Promise<DescribeReplicationTaskAssessmentResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationTaskAssessmentResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about replication tasks for your account in the current region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReplicationTasks(
    args: DescribeReplicationTasksInput
  ): Promise<DescribeReplicationTasksOutput>;
  public describeReplicationTasks(
    args: DescribeReplicationTasksInput,
    cb: (err: any, data?: DescribeReplicationTasksOutput) => void
  ): void;
  public describeReplicationTasks(
    args: DescribeReplicationTasksInput,
    cb?: (err: any, data?: DescribeReplicationTasksOutput) => void
  ): Promise<DescribeReplicationTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReplicationTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the schema for the specified endpoint.</p> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSchemas(
    args: DescribeSchemasInput
  ): Promise<DescribeSchemasOutput>;
  public describeSchemas(
    args: DescribeSchemasInput,
    cb: (err: any, data?: DescribeSchemasOutput) => void
  ): void;
  public describeSchemas(
    args: DescribeSchemasInput,
    cb?: (err: any, data?: DescribeSchemasOutput) => void
  ): Promise<DescribeSchemasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSchemasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTableStatistics(
    args: DescribeTableStatisticsInput
  ): Promise<DescribeTableStatisticsOutput>;
  public describeTableStatistics(
    args: DescribeTableStatisticsInput,
    cb: (err: any, data?: DescribeTableStatisticsOutput) => void
  ): void;
  public describeTableStatistics(
    args: DescribeTableStatisticsInput,
    cb?: (err: any, data?: DescribeTableStatisticsOutput) => void
  ): Promise<DescribeTableStatisticsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTableStatisticsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads the specified certificate.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {InvalidCertificateFault} <p>The certificate was not valid.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importCertificate(
    args: ImportCertificateInput
  ): Promise<ImportCertificateOutput>;
  public importCertificate(
    args: ImportCertificateInput,
    cb: (err: any, data?: ImportCertificateOutput) => void
  ): void;
  public importCertificate(
    args: ImportCertificateInput,
    cb?: (err: any, data?: ImportCertificateOutput) => void
  ): Promise<ImportCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags for an AWS DMS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyEndpoint(
    args: ModifyEndpointInput
  ): Promise<ModifyEndpointOutput>;
  public modifyEndpoint(
    args: ModifyEndpointInput,
    cb: (err: any, data?: ModifyEndpointOutput) => void
  ): void;
  public modifyEndpoint(
    args: ModifyEndpointInput,
    cb?: (err: any, data?: ModifyEndpointOutput) => void
  ): Promise<ModifyEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing AWS DMS event notification subscription. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {SNSInvalidTopicFault} <p>The SNS topic is invalid.</p>
   *   - {SNSNoAuthorizationFault} <p>You are not authorized for the SNS subscription.</p>
   *   - {KMSAccessDeniedFault} <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
   *   - {KMSDisabledFault} <p>The specified master key (CMK) isn't enabled.</p>
   *   - {KMSInvalidStateFault} <p>The state of the specified AWS KMS resource isn't valid for this request.</p>
   *   - {KMSNotFoundFault} <p>The specified AWS KMS entity or resource can't be found.</p>
   *   - {KMSThrottlingFault} <p>This request triggered AWS KMS request throttling.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput
  ): Promise<ModifyEventSubscriptionOutput>;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput,
    cb: (err: any, data?: ModifyEventSubscriptionOutput) => void
  ): void;
  public modifyEventSubscription(
    args: ModifyEventSubscriptionInput,
    cb?: (err: any, data?: ModifyEventSubscriptionOutput) => void
  ): Promise<ModifyEventSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyEventSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InsufficientResourceCapacityFault} <p>There are not enough resources allocated to the database migration.</p>
   *   - {StorageQuotaExceededFault} <p>The storage quota has been exceeded.</p>
   *   - {UpgradeDependencyFailureFault} <p>An upgrade dependency is preventing the database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceInput
  ): Promise<ModifyReplicationInstanceOutput>;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceInput,
    cb: (err: any, data?: ModifyReplicationInstanceOutput) => void
  ): void;
  public modifyReplicationInstance(
    args: ModifyReplicationInstanceInput,
    cb?: (err: any, data?: ModifyReplicationInstanceOutput) => void
  ): Promise<ModifyReplicationInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReplicationInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the settings for the specified replication subnet group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {SubnetAlreadyInUse} <p>The specified subnet is already in use.</p>
   *   - {ReplicationSubnetGroupDoesNotCoverEnoughAZs} <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
   *   - {InvalidSubnet} <p>The subnet provided is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupInput
  ): Promise<ModifyReplicationSubnetGroupOutput>;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupInput,
    cb: (err: any, data?: ModifyReplicationSubnetGroupOutput) => void
  ): void;
  public modifyReplicationSubnetGroup(
    args: ModifyReplicationSubnetGroupInput,
    cb?: (err: any, data?: ModifyReplicationSubnetGroupOutput) => void
  ): Promise<ModifyReplicationSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReplicationSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>AWS Database Migration Service User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {ResourceAlreadyExistsFault} <p>The resource you are attempting to create already exists.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyReplicationTask(
    args: ModifyReplicationTaskInput
  ): Promise<ModifyReplicationTaskOutput>;
  public modifyReplicationTask(
    args: ModifyReplicationTaskInput,
    cb: (err: any, data?: ModifyReplicationTaskOutput) => void
  ): void;
  public modifyReplicationTask(
    args: ModifyReplicationTaskInput,
    cb?: (err: any, data?: ModifyReplicationTaskOutput) => void
  ): Promise<ModifyReplicationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyReplicationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootReplicationInstance(
    args: RebootReplicationInstanceInput
  ): Promise<RebootReplicationInstanceOutput>;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceInput,
    cb: (err: any, data?: RebootReplicationInstanceOutput) => void
  ): void;
  public rebootReplicationInstance(
    args: RebootReplicationInstanceInput,
    cb?: (err: any, data?: RebootReplicationInstanceOutput) => void
  ): Promise<RebootReplicationInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootReplicationInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public refreshSchemas(
    args: RefreshSchemasInput
  ): Promise<RefreshSchemasOutput>;
  public refreshSchemas(
    args: RefreshSchemasInput,
    cb: (err: any, data?: RefreshSchemasOutput) => void
  ): void;
  public refreshSchemas(
    args: RefreshSchemasInput,
    cb?: (err: any, data?: RefreshSchemasOutput) => void
  ): Promise<RefreshSchemasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RefreshSchemasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reloads the target database table with the source data. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reloadTables(args: ReloadTablesInput): Promise<ReloadTablesOutput>;
  public reloadTables(
    args: ReloadTablesInput,
    cb: (err: any, data?: ReloadTablesOutput) => void
  ): void;
  public reloadTables(
    args: ReloadTablesInput,
    cb?: (err: any, data?: ReloadTablesOutput) => void
  ): Promise<ReloadTablesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReloadTablesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes metadata tags from a DMS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput
  ): Promise<RemoveTagsFromResourceOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceInput,
    cb?: (err: any, data?: RemoveTagsFromResourceOutput) => void
  ): Promise<RemoveTagsFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the replication task.</p> <p>For more information about AWS DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {AccessDeniedFault} <p>AWS DMS was denied access to the endpoint. Check that the role is correctly configured.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startReplicationTask(
    args: StartReplicationTaskInput
  ): Promise<StartReplicationTaskOutput>;
  public startReplicationTask(
    args: StartReplicationTaskInput,
    cb: (err: any, data?: StartReplicationTaskOutput) => void
  ): void;
  public startReplicationTask(
    args: StartReplicationTaskInput,
    cb?: (err: any, data?: StartReplicationTaskOutput) => void
  ): Promise<StartReplicationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartReplicationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Starts the replication task assessment for unsupported data types in the source database. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentInput
  ): Promise<StartReplicationTaskAssessmentOutput>;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentInput,
    cb: (err: any, data?: StartReplicationTaskAssessmentOutput) => void
  ): void;
  public startReplicationTaskAssessment(
    args: StartReplicationTaskAssessmentInput,
    cb?: (err: any, data?: StartReplicationTaskAssessmentOutput) => void
  ): Promise<StartReplicationTaskAssessmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartReplicationTaskAssessmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the replication task.</p> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopReplicationTask(
    args: StopReplicationTaskInput
  ): Promise<StopReplicationTaskOutput>;
  public stopReplicationTask(
    args: StopReplicationTaskInput,
    cb: (err: any, data?: StopReplicationTaskOutput) => void
  ): void;
  public stopReplicationTask(
    args: StopReplicationTaskInput,
    cb?: (err: any, data?: StopReplicationTaskOutput) => void
  ): Promise<StopReplicationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopReplicationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tests the connection between the replication instance and the endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The resource could not be found.</p>
   *   - {InvalidResourceStateFault} <p>The resource is in a state that prevents it from being used for database migration.</p>
   *   - {KMSKeyNotAccessibleFault} <p>AWS DMS cannot access the AWS KMS key.</p>
   *   - {ResourceQuotaExceededFault} <p>The quota for this resource quota has been exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testConnection(
    args: TestConnectionInput
  ): Promise<TestConnectionOutput>;
  public testConnection(
    args: TestConnectionInput,
    cb: (err: any, data?: TestConnectionOutput) => void
  ): void;
  public testConnection(
    args: TestConnectionInput,
    cb?: (err: any, data?: TestConnectionOutput) => void
  ): Promise<TestConnectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestConnectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
