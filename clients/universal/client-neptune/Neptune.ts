import { NeptuneClient } from "./NeptuneClient";
import { AddRoleToDBClusterInput } from "./types/AddRoleToDBClusterInput";
import { AddRoleToDBClusterOutput } from "./types/AddRoleToDBClusterOutput";
import { AddSourceIdentifierToSubscriptionInput } from "./types/AddSourceIdentifierToSubscriptionInput";
import { AddSourceIdentifierToSubscriptionOutput } from "./types/AddSourceIdentifierToSubscriptionOutput";
import { AddTagsToResourceInput } from "./types/AddTagsToResourceInput";
import { AddTagsToResourceOutput } from "./types/AddTagsToResourceOutput";
import { ApplyPendingMaintenanceActionInput } from "./types/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "./types/ApplyPendingMaintenanceActionOutput";
import { AuthorizationNotFoundFault } from "./types/AuthorizationNotFoundFault";
import { CertificateNotFoundFault } from "./types/CertificateNotFoundFault";
import { CopyDBClusterParameterGroupInput } from "./types/CopyDBClusterParameterGroupInput";
import { CopyDBClusterParameterGroupOutput } from "./types/CopyDBClusterParameterGroupOutput";
import { CopyDBClusterSnapshotInput } from "./types/CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "./types/CopyDBClusterSnapshotOutput";
import { CopyDBParameterGroupInput } from "./types/CopyDBParameterGroupInput";
import { CopyDBParameterGroupOutput } from "./types/CopyDBParameterGroupOutput";
import { CreateDBClusterInput } from "./types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "./types/CreateDBClusterOutput";
import { CreateDBClusterParameterGroupInput } from "./types/CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "./types/CreateDBClusterParameterGroupOutput";
import { CreateDBClusterSnapshotInput } from "./types/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "./types/CreateDBClusterSnapshotOutput";
import { CreateDBInstanceInput } from "./types/CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "./types/CreateDBInstanceOutput";
import { CreateDBParameterGroupInput } from "./types/CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "./types/CreateDBParameterGroupOutput";
import { CreateDBSubnetGroupInput } from "./types/CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "./types/CreateDBSubnetGroupOutput";
import { CreateEventSubscriptionInput } from "./types/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./types/CreateEventSubscriptionOutput";
import { DBClusterAlreadyExistsFault } from "./types/DBClusterAlreadyExistsFault";
import { DBClusterNotFoundFault } from "./types/DBClusterNotFoundFault";
import { DBClusterParameterGroupNotFoundFault } from "./types/DBClusterParameterGroupNotFoundFault";
import { DBClusterQuotaExceededFault } from "./types/DBClusterQuotaExceededFault";
import { DBClusterRoleAlreadyExistsFault } from "./types/DBClusterRoleAlreadyExistsFault";
import { DBClusterRoleNotFoundFault } from "./types/DBClusterRoleNotFoundFault";
import { DBClusterRoleQuotaExceededFault } from "./types/DBClusterRoleQuotaExceededFault";
import { DBClusterSnapshotAlreadyExistsFault } from "./types/DBClusterSnapshotAlreadyExistsFault";
import { DBClusterSnapshotNotFoundFault } from "./types/DBClusterSnapshotNotFoundFault";
import { DBInstanceAlreadyExistsFault } from "./types/DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./types/DBInstanceNotFoundFault";
import { DBParameterGroupAlreadyExistsFault } from "./types/DBParameterGroupAlreadyExistsFault";
import { DBParameterGroupNotFoundFault } from "./types/DBParameterGroupNotFoundFault";
import { DBParameterGroupQuotaExceededFault } from "./types/DBParameterGroupQuotaExceededFault";
import { DBSecurityGroupNotFoundFault } from "./types/DBSecurityGroupNotFoundFault";
import { DBSnapshotAlreadyExistsFault } from "./types/DBSnapshotAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./types/DBSnapshotNotFoundFault";
import { DBSubnetGroupAlreadyExistsFault } from "./types/DBSubnetGroupAlreadyExistsFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./types/DBSubnetGroupDoesNotCoverEnoughAZs";
import { DBSubnetGroupNotFoundFault } from "./types/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupQuotaExceededFault } from "./types/DBSubnetGroupQuotaExceededFault";
import { DBSubnetQuotaExceededFault } from "./types/DBSubnetQuotaExceededFault";
import { DBUpgradeDependencyFailureFault } from "./types/DBUpgradeDependencyFailureFault";
import { DeleteDBClusterInput } from "./types/DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "./types/DeleteDBClusterOutput";
import { DeleteDBClusterParameterGroupInput } from "./types/DeleteDBClusterParameterGroupInput";
import { DeleteDBClusterParameterGroupOutput } from "./types/DeleteDBClusterParameterGroupOutput";
import { DeleteDBClusterSnapshotInput } from "./types/DeleteDBClusterSnapshotInput";
import { DeleteDBClusterSnapshotOutput } from "./types/DeleteDBClusterSnapshotOutput";
import { DeleteDBInstanceInput } from "./types/DeleteDBInstanceInput";
import { DeleteDBInstanceOutput } from "./types/DeleteDBInstanceOutput";
import { DeleteDBParameterGroupInput } from "./types/DeleteDBParameterGroupInput";
import { DeleteDBParameterGroupOutput } from "./types/DeleteDBParameterGroupOutput";
import { DeleteDBSubnetGroupInput } from "./types/DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "./types/DeleteDBSubnetGroupOutput";
import { DeleteEventSubscriptionInput } from "./types/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "./types/DeleteEventSubscriptionOutput";
import { DescribeDBClusterParameterGroupsInput } from "./types/DescribeDBClusterParameterGroupsInput";
import { DescribeDBClusterParameterGroupsOutput } from "./types/DescribeDBClusterParameterGroupsOutput";
import { DescribeDBClusterParametersInput } from "./types/DescribeDBClusterParametersInput";
import { DescribeDBClusterParametersOutput } from "./types/DescribeDBClusterParametersOutput";
import { DescribeDBClusterSnapshotAttributesInput } from "./types/DescribeDBClusterSnapshotAttributesInput";
import { DescribeDBClusterSnapshotAttributesOutput } from "./types/DescribeDBClusterSnapshotAttributesOutput";
import { DescribeDBClusterSnapshotsInput } from "./types/DescribeDBClusterSnapshotsInput";
import { DescribeDBClusterSnapshotsOutput } from "./types/DescribeDBClusterSnapshotsOutput";
import { DescribeDBClustersInput } from "./types/DescribeDBClustersInput";
import { DescribeDBClustersOutput } from "./types/DescribeDBClustersOutput";
import { DescribeDBEngineVersionsInput } from "./types/DescribeDBEngineVersionsInput";
import { DescribeDBEngineVersionsOutput } from "./types/DescribeDBEngineVersionsOutput";
import { DescribeDBInstancesInput } from "./types/DescribeDBInstancesInput";
import { DescribeDBInstancesOutput } from "./types/DescribeDBInstancesOutput";
import { DescribeDBParameterGroupsInput } from "./types/DescribeDBParameterGroupsInput";
import { DescribeDBParameterGroupsOutput } from "./types/DescribeDBParameterGroupsOutput";
import { DescribeDBParametersInput } from "./types/DescribeDBParametersInput";
import { DescribeDBParametersOutput } from "./types/DescribeDBParametersOutput";
import { DescribeDBSubnetGroupsInput } from "./types/DescribeDBSubnetGroupsInput";
import { DescribeDBSubnetGroupsOutput } from "./types/DescribeDBSubnetGroupsOutput";
import { DescribeEngineDefaultClusterParametersInput } from "./types/DescribeEngineDefaultClusterParametersInput";
import { DescribeEngineDefaultClusterParametersOutput } from "./types/DescribeEngineDefaultClusterParametersOutput";
import { DescribeEngineDefaultParametersInput } from "./types/DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "./types/DescribeEngineDefaultParametersOutput";
import { DescribeEventCategoriesInput } from "./types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "./types/DescribeEventCategoriesOutput";
import { DescribeEventSubscriptionsInput } from "./types/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "./types/DescribeEventSubscriptionsOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeOrderableDBInstanceOptionsInput } from "./types/DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "./types/DescribeOrderableDBInstanceOptionsOutput";
import { DescribePendingMaintenanceActionsInput } from "./types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "./types/DescribePendingMaintenanceActionsOutput";
import { DescribeValidDBInstanceModificationsInput } from "./types/DescribeValidDBInstanceModificationsInput";
import { DescribeValidDBInstanceModificationsOutput } from "./types/DescribeValidDBInstanceModificationsOutput";
import { DomainNotFoundFault } from "./types/DomainNotFoundFault";
import { EventSubscriptionQuotaExceededFault } from "./types/EventSubscriptionQuotaExceededFault";
import { FailoverDBClusterInput } from "./types/FailoverDBClusterInput";
import { FailoverDBClusterOutput } from "./types/FailoverDBClusterOutput";
import { InstanceQuotaExceededFault } from "./types/InstanceQuotaExceededFault";
import { InsufficientDBClusterCapacityFault } from "./types/InsufficientDBClusterCapacityFault";
import { InsufficientDBInstanceCapacityFault } from "./types/InsufficientDBInstanceCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "./types/InsufficientStorageClusterCapacityFault";
import { InvalidDBClusterSnapshotStateFault } from "./types/InvalidDBClusterSnapshotStateFault";
import { InvalidDBClusterStateFault } from "./types/InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./types/InvalidDBInstanceStateFault";
import { InvalidDBParameterGroupStateFault } from "./types/InvalidDBParameterGroupStateFault";
import { InvalidDBSecurityGroupStateFault } from "./types/InvalidDBSecurityGroupStateFault";
import { InvalidDBSnapshotStateFault } from "./types/InvalidDBSnapshotStateFault";
import { InvalidDBSubnetGroupStateFault } from "./types/InvalidDBSubnetGroupStateFault";
import { InvalidDBSubnetStateFault } from "./types/InvalidDBSubnetStateFault";
import { InvalidEventSubscriptionStateFault } from "./types/InvalidEventSubscriptionStateFault";
import { InvalidRestoreFault } from "./types/InvalidRestoreFault";
import { InvalidSubnet } from "./types/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./types/InvalidVPCNetworkStateFault";
import { KMSKeyNotAccessibleFault } from "./types/KMSKeyNotAccessibleFault";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ModifyDBClusterInput } from "./types/ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "./types/ModifyDBClusterOutput";
import { ModifyDBClusterParameterGroupInput } from "./types/ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "./types/ModifyDBClusterParameterGroupOutput";
import { ModifyDBClusterSnapshotAttributeInput } from "./types/ModifyDBClusterSnapshotAttributeInput";
import { ModifyDBClusterSnapshotAttributeOutput } from "./types/ModifyDBClusterSnapshotAttributeOutput";
import { ModifyDBInstanceInput } from "./types/ModifyDBInstanceInput";
import { ModifyDBInstanceOutput } from "./types/ModifyDBInstanceOutput";
import { ModifyDBParameterGroupInput } from "./types/ModifyDBParameterGroupInput";
import { ModifyDBParameterGroupOutput } from "./types/ModifyDBParameterGroupOutput";
import { ModifyDBSubnetGroupInput } from "./types/ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "./types/ModifyDBSubnetGroupOutput";
import { ModifyEventSubscriptionInput } from "./types/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./types/ModifyEventSubscriptionOutput";
import { OptionGroupNotFoundFault } from "./types/OptionGroupNotFoundFault";
import { PromoteReadReplicaDBClusterInput } from "./types/PromoteReadReplicaDBClusterInput";
import { PromoteReadReplicaDBClusterOutput } from "./types/PromoteReadReplicaDBClusterOutput";
import { ProvisionedIopsNotAvailableInAZFault } from "./types/ProvisionedIopsNotAvailableInAZFault";
import { RebootDBInstanceInput } from "./types/RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "./types/RebootDBInstanceOutput";
import { RemoveRoleFromDBClusterInput } from "./types/RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "./types/RemoveRoleFromDBClusterOutput";
import { RemoveSourceIdentifierFromSubscriptionInput } from "./types/RemoveSourceIdentifierFromSubscriptionInput";
import { RemoveSourceIdentifierFromSubscriptionOutput } from "./types/RemoveSourceIdentifierFromSubscriptionOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ResetDBClusterParameterGroupInput } from "./types/ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "./types/ResetDBClusterParameterGroupOutput";
import { ResetDBParameterGroupInput } from "./types/ResetDBParameterGroupInput";
import { ResetDBParameterGroupOutput } from "./types/ResetDBParameterGroupOutput";
import { ResourceNotFoundFault } from "./types/ResourceNotFoundFault";
import { RestoreDBClusterFromSnapshotInput } from "./types/RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "./types/RestoreDBClusterFromSnapshotOutput";
import { RestoreDBClusterToPointInTimeInput } from "./types/RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "./types/RestoreDBClusterToPointInTimeOutput";
import { SNSInvalidTopicFault } from "./types/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./types/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./types/SNSTopicArnNotFoundFault";
import { SharedSnapshotQuotaExceededFault } from "./types/SharedSnapshotQuotaExceededFault";
import { SnapshotQuotaExceededFault } from "./types/SnapshotQuotaExceededFault";
import { SourceNotFoundFault } from "./types/SourceNotFoundFault";
import { StorageQuotaExceededFault } from "./types/StorageQuotaExceededFault";
import { StorageTypeNotSupportedFault } from "./types/StorageTypeNotSupportedFault";
import { SubnetAlreadyInUse } from "./types/SubnetAlreadyInUse";
import { SubscriptionAlreadyExistFault } from "./types/SubscriptionAlreadyExistFault";
import { SubscriptionCategoryNotFoundFault } from "./types/SubscriptionCategoryNotFoundFault";
import { SubscriptionNotFoundFault } from "./types/SubscriptionNotFoundFault";
import { AddRoleToDBClusterCommand } from "./commands/AddRoleToDBClusterCommand";
import { AddSourceIdentifierToSubscriptionCommand } from "./commands/AddSourceIdentifierToSubscriptionCommand";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CopyDBClusterParameterGroupCommand } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommand } from "./commands/CopyDBClusterSnapshotCommand";
import { CopyDBParameterGroupCommand } from "./commands/CopyDBParameterGroupCommand";
import { CreateDBClusterCommand } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterParameterGroupCommand } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommand } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommand } from "./commands/CreateDBInstanceCommand";
import { CreateDBParameterGroupCommand } from "./commands/CreateDBParameterGroupCommand";
import { CreateDBSubnetGroupCommand } from "./commands/CreateDBSubnetGroupCommand";
import { CreateEventSubscriptionCommand } from "./commands/CreateEventSubscriptionCommand";
import { DeleteDBClusterCommand } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterParameterGroupCommand } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommand } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommand } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBParameterGroupCommand } from "./commands/DeleteDBParameterGroupCommand";
import { DeleteDBSubnetGroupCommand } from "./commands/DeleteDBSubnetGroupCommand";
import { DeleteEventSubscriptionCommand } from "./commands/DeleteEventSubscriptionCommand";
import { DescribeDBClusterParameterGroupsCommand } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommand } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommand } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommand } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommand } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommand } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommand } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBParameterGroupsCommand } from "./commands/DescribeDBParameterGroupsCommand";
import { DescribeDBParametersCommand } from "./commands/DescribeDBParametersCommand";
import { DescribeDBSubnetGroupsCommand } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommand } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEngineDefaultParametersCommand } from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventCategoriesCommand } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommand } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeOrderableDBInstanceOptionsCommand } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommand } from "./commands/DescribePendingMaintenanceActionsCommand";
import { DescribeValidDBInstanceModificationsCommand } from "./commands/DescribeValidDBInstanceModificationsCommand";
import { FailoverDBClusterCommand } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommand } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterParameterGroupCommand } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommand } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommand } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBParameterGroupCommand } from "./commands/ModifyDBParameterGroupCommand";
import { ModifyDBSubnetGroupCommand } from "./commands/ModifyDBSubnetGroupCommand";
import { ModifyEventSubscriptionCommand } from "./commands/ModifyEventSubscriptionCommand";
import { PromoteReadReplicaDBClusterCommand } from "./commands/PromoteReadReplicaDBClusterCommand";
import { RebootDBInstanceCommand } from "./commands/RebootDBInstanceCommand";
import { RemoveRoleFromDBClusterCommand } from "./commands/RemoveRoleFromDBClusterCommand";
import { RemoveSourceIdentifierFromSubscriptionCommand } from "./commands/RemoveSourceIdentifierFromSubscriptionCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommand } from "./commands/ResetDBClusterParameterGroupCommand";
import { ResetDBParameterGroupCommand } from "./commands/ResetDBParameterGroupCommand";
import { RestoreDBClusterFromSnapshotCommand } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommand } from "./commands/RestoreDBClusterToPointInTimeCommand";

export class Neptune extends NeptuneClient {
  /**
   * <p>Associates an Identity and Access Management (IAM) role from an Neptune DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {DBClusterRoleAlreadyExistsFault} <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {DBClusterRoleQuotaExceededFault} <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput
  ): Promise<AddRoleToDBClusterOutput>;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput,
    cb: (err: any, data?: AddRoleToDBClusterOutput) => void
  ): void;
  public addRoleToDBCluster(
    args: AddRoleToDBClusterInput,
    cb?: (err: any, data?: AddRoleToDBClusterOutput) => void
  ): Promise<AddRoleToDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddRoleToDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a source identifier to an existing event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The designated subscription could not be found.</p>
   *   - {SourceNotFoundFault} <p>The source could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput
  ): Promise<AddSourceIdentifierToSubscriptionOutput>;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput,
    cb: (err: any, data?: AddSourceIdentifierToSubscriptionOutput) => void
  ): void;
  public addSourceIdentifierToSubscription(
    args: AddSourceIdentifierToSubscriptionInput,
    cb?: (err: any, data?: AddSourceIdentifierToSubscriptionOutput) => void
  ): Promise<AddSourceIdentifierToSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddSourceIdentifierToSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
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
   * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
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
   * <p>Copies the specified DB cluster parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {DBParameterGroupQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput
  ): Promise<CopyDBClusterParameterGroupOutput>;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput,
    cb: (err: any, data?: CopyDBClusterParameterGroupOutput) => void
  ): void;
  public copyDBClusterParameterGroup(
    args: CopyDBClusterParameterGroupInput,
    cb?: (err: any, data?: CopyDBClusterParameterGroupOutput) => void
  ): Promise<CopyDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>You can't copy from one AWS Region to another.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>User already has a DB cluster snapshot with the given identifier.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {SnapshotQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
   *   - {KMSKeyNotAccessibleFault} <p>Error accessing KMS key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput
  ): Promise<CopyDBClusterSnapshotOutput>;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput,
    cb: (err: any, data?: CopyDBClusterSnapshotOutput) => void
  ): void;
  public copyDBClusterSnapshot(
    args: CopyDBClusterSnapshotInput,
    cb?: (err: any, data?: CopyDBClusterSnapshotOutput) => void
  ): Promise<CopyDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies the specified DB parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {DBParameterGroupQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput
  ): Promise<CopyDBParameterGroupOutput>;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput,
    cb: (err: any, data?: CopyDBParameterGroupOutput) => void
  ): void;
  public copyDBParameterGroup(
    args: CopyDBParameterGroupInput,
    cb?: (err: any, data?: CopyDBParameterGroupOutput) => void
  ): Promise<CopyDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>User already has a DB cluster with the given identifier.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {DBClusterQuotaExceededFault} <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group.</p>
   *   - {KMSKeyNotAccessibleFault} <p>Error accessing KMS key.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBCluster(
    args: CreateDBClusterInput
  ): Promise<CreateDBClusterOutput>;
  public createDBCluster(
    args: CreateDBClusterInput,
    cb: (err: any, data?: CreateDBClusterOutput) => void
  ): void;
  public createDBCluster(
    args: CreateDBClusterInput,
    cb?: (err: any, data?: CreateDBClusterOutput) => void
  ): Promise<CreateDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput
  ): Promise<CreateDBClusterParameterGroupOutput>;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput,
    cb: (err: any, data?: CreateDBClusterParameterGroupOutput) => void
  ): void;
  public createDBClusterParameterGroup(
    args: CreateDBClusterParameterGroupInput,
    cb?: (err: any, data?: CreateDBClusterParameterGroupOutput) => void
  ): Promise<CreateDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of a DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>User already has a DB cluster snapshot with the given identifier.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {SnapshotQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput
  ): Promise<CreateDBClusterSnapshotOutput>;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput,
    cb: (err: any, data?: CreateDBClusterSnapshotOutput) => void
  ): void;
  public createDBClusterSnapshot(
    args: CreateDBClusterSnapshotInput,
    cb?: (err: any, data?: CreateDBClusterSnapshotOutput) => void
  ): Promise<CreateDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceAlreadyExistsFault} <p>User already has a DB instance with the given identifier.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>Specified DB instance class is not available in the specified Availability Zone.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> does not refer to an existing DB security group.</p>
   *   - {InstanceQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB instances.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The designated option group could not be found.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {StorageTypeNotSupportedFault} <p> <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
   *   - {AuthorizationNotFoundFault} <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
   *   - {KMSKeyNotAccessibleFault} <p>Error accessing KMS key.</p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBInstance(
    args: CreateDBInstanceInput
  ): Promise<CreateDBInstanceOutput>;
  public createDBInstance(
    args: CreateDBInstanceInput,
    cb: (err: any, data?: CreateDBInstanceOutput) => void
  ): void;
  public createDBInstance(
    args: CreateDBInstanceInput,
    cb?: (err: any, data?: CreateDBInstanceOutput) => void
  ): Promise<CreateDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput
  ): Promise<CreateDBParameterGroupOutput>;
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput,
    cb: (err: any, data?: CreateDBParameterGroupOutput) => void
  ): void;
  public createDBParameterGroup(
    args: CreateDBParameterGroupInput,
    cb?: (err: any, data?: CreateDBParameterGroupOutput) => void
  ): Promise<CreateDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupAlreadyExistsFault} <p> <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
   *   - {DBSubnetGroupQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
   *   - {DBSubnetQuotaExceededFault} <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput
  ): Promise<CreateDBSubnetGroupOutput>;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput,
    cb: (err: any, data?: CreateDBSubnetGroupOutput) => void
  ): void;
  public createDBSubnetGroup(
    args: CreateDBSubnetGroupInput,
    cb?: (err: any, data?: CreateDBSubnetGroupOutput) => void
  ): Promise<CreateDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EventSubscriptionQuotaExceededFault} <p>You have exceeded the number of events you can subscribe to.</p>
   *   - {SubscriptionAlreadyExistFault} <p>This subscription already exists.</p>
   *   - {SNSInvalidTopicFault} <p>The SNS topic is invalid.</p>
   *   - {SNSNoAuthorizationFault} <p>There is no SNS authorization.</p>
   *   - {SNSTopicArnNotFoundFault} <p>The ARN of the SNS topic could not be found.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The designated subscription category could not be found.</p>
   *   - {SourceNotFoundFault} <p>The source could not be found.</p>
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
   * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>User already has a DB cluster snapshot with the given identifier.</p>
   *   - {SnapshotQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBCluster(
    args: DeleteDBClusterInput
  ): Promise<DeleteDBClusterOutput>;
  public deleteDBCluster(
    args: DeleteDBClusterInput,
    cb: (err: any, data?: DeleteDBClusterOutput) => void
  ): void;
  public deleteDBCluster(
    args: DeleteDBClusterInput,
    cb?: (err: any, data?: DeleteDBClusterOutput) => void
  ): Promise<DeleteDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput
  ): Promise<DeleteDBClusterParameterGroupOutput>;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput,
    cb: (err: any, data?: DeleteDBClusterParameterGroupOutput) => void
  ): void;
  public deleteDBClusterParameterGroup(
    args: DeleteDBClusterParameterGroupInput,
    cb?: (err: any, data?: DeleteDBClusterParameterGroupOutput) => void
  ): Promise<DeleteDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput
  ): Promise<DeleteDBClusterSnapshotOutput>;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput,
    cb: (err: any, data?: DeleteDBClusterSnapshotOutput) => void
  ): void;
  public deleteDBClusterSnapshot(
    args: DeleteDBClusterSnapshotInput,
    cb?: (err: any, data?: DeleteDBClusterSnapshotOutput) => void
  ): Promise<DeleteDBClusterSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBClusterSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {DBSnapshotAlreadyExistsFault} <p> <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
   *   - {SnapshotQuotaExceededFault} <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBInstance(
    args: DeleteDBInstanceInput
  ): Promise<DeleteDBInstanceOutput>;
  public deleteDBInstance(
    args: DeleteDBInstanceInput,
    cb: (err: any, data?: DeleteDBInstanceOutput) => void
  ): void;
  public deleteDBInstance(
    args: DeleteDBInstanceInput,
    cb?: (err: any, data?: DeleteDBInstanceOutput) => void
  ): Promise<DeleteDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput
  ): Promise<DeleteDBParameterGroupOutput>;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput,
    cb: (err: any, data?: DeleteDBParameterGroupOutput) => void
  ): void;
  public deleteDBParameterGroup(
    args: DeleteDBParameterGroupInput,
    cb?: (err: any, data?: DeleteDBParameterGroupOutput) => void
  ): Promise<DeleteDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidDBSubnetStateFault} <p>The DB subnet is not in the <i>available</i> state.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput
  ): Promise<DeleteDBSubnetGroupOutput>;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput,
    cb: (err: any, data?: DeleteDBSubnetGroupOutput) => void
  ): void;
  public deleteDBSubnetGroup(
    args: DeleteDBSubnetGroupInput,
    cb?: (err: any, data?: DeleteDBSubnetGroupOutput) => void
  ): Promise<DeleteDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The designated subscription could not be found.</p>
   *   - {InvalidEventSubscriptionStateFault} <p>The event subscription is in an invalid state.</p>
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
   * <p> Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput
  ): Promise<DescribeDBClusterParameterGroupsOutput>;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput,
    cb: (err: any, data?: DescribeDBClusterParameterGroupsOutput) => void
  ): void;
  public describeDBClusterParameterGroups(
    args: DescribeDBClusterParameterGroupsInput,
    cb?: (err: any, data?: DescribeDBClusterParameterGroupsOutput) => void
  ): Promise<DescribeDBClusterParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput
  ): Promise<DescribeDBClusterParametersOutput>;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput,
    cb: (err: any, data?: DescribeDBClusterParametersOutput) => void
  ): void;
  public describeDBClusterParameters(
    args: DescribeDBClusterParametersInput,
    cb?: (err: any, data?: DescribeDBClusterParametersOutput) => void
  ): Promise<DescribeDBClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput
  ): Promise<DescribeDBClusterSnapshotAttributesOutput>;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotAttributesOutput) => void
  ): void;
  public describeDBClusterSnapshotAttributes(
    args: DescribeDBClusterSnapshotAttributesInput,
    cb?: (err: any, data?: DescribeDBClusterSnapshotAttributesOutput) => void
  ): Promise<DescribeDBClusterSnapshotAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterSnapshotAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput
  ): Promise<DescribeDBClusterSnapshotsOutput>;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput,
    cb: (err: any, data?: DescribeDBClusterSnapshotsOutput) => void
  ): void;
  public describeDBClusterSnapshots(
    args: DescribeDBClusterSnapshotsInput,
    cb?: (err: any, data?: DescribeDBClusterSnapshotsOutput) => void
  ): Promise<DescribeDBClusterSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClusterSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about provisioned DB clusters. This API supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBClusters(
    args: DescribeDBClustersInput
  ): Promise<DescribeDBClustersOutput>;
  public describeDBClusters(
    args: DescribeDBClustersInput,
    cb: (err: any, data?: DescribeDBClustersOutput) => void
  ): void;
  public describeDBClusters(
    args: DescribeDBClustersInput,
    cb?: (err: any, data?: DescribeDBClustersOutput) => void
  ): Promise<DescribeDBClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the available DB engines.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput
  ): Promise<DescribeDBEngineVersionsOutput>;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput,
    cb: (err: any, data?: DescribeDBEngineVersionsOutput) => void
  ): void;
  public describeDBEngineVersions(
    args: DescribeDBEngineVersionsInput,
    cb?: (err: any, data?: DescribeDBEngineVersionsOutput) => void
  ): Promise<DescribeDBEngineVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBEngineVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about provisioned instances. This API supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBInstances(
    args: DescribeDBInstancesInput
  ): Promise<DescribeDBInstancesOutput>;
  public describeDBInstances(
    args: DescribeDBInstancesInput,
    cb: (err: any, data?: DescribeDBInstancesOutput) => void
  ): void;
  public describeDBInstances(
    args: DescribeDBInstancesInput,
    cb?: (err: any, data?: DescribeDBInstancesOutput) => void
  ): Promise<DescribeDBInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput
  ): Promise<DescribeDBParameterGroupsOutput>;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput,
    cb: (err: any, data?: DescribeDBParameterGroupsOutput) => void
  ): void;
  public describeDBParameterGroups(
    args: DescribeDBParameterGroupsInput,
    cb?: (err: any, data?: DescribeDBParameterGroupsOutput) => void
  ): Promise<DescribeDBParameterGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBParameterGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBParameters(
    args: DescribeDBParametersInput
  ): Promise<DescribeDBParametersOutput>;
  public describeDBParameters(
    args: DescribeDBParametersInput,
    cb: (err: any, data?: DescribeDBParametersOutput) => void
  ): void;
  public describeDBParameters(
    args: DescribeDBParametersInput,
    cb?: (err: any, data?: DescribeDBParametersOutput) => void
  ): Promise<DescribeDBParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput
  ): Promise<DescribeDBSubnetGroupsOutput>;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput,
    cb: (err: any, data?: DescribeDBSubnetGroupsOutput) => void
  ): void;
  public describeDBSubnetGroups(
    args: DescribeDBSubnetGroupsInput,
    cb?: (err: any, data?: DescribeDBSubnetGroupsOutput) => void
  ): Promise<DescribeDBSubnetGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDBSubnetGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the cluster database engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput
  ): Promise<DescribeEngineDefaultClusterParametersOutput>;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput,
    cb: (err: any, data?: DescribeEngineDefaultClusterParametersOutput) => void
  ): void;
  public describeEngineDefaultClusterParameters(
    args: DescribeEngineDefaultClusterParametersInput,
    cb?: (err: any, data?: DescribeEngineDefaultClusterParametersOutput) => void
  ): Promise<DescribeEngineDefaultClusterParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEngineDefaultClusterParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the default engine and system parameter information for the specified database engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput
  ): Promise<DescribeEngineDefaultParametersOutput>;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): void;
  public describeEngineDefaultParameters(
    args: DescribeEngineDefaultParametersInput,
    cb?: (err: any, data?: DescribeEngineDefaultParametersOutput) => void
  ): Promise<DescribeEngineDefaultParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEngineDefaultParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type.</p>
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
   * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The designated subscription could not be found.</p>
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
   * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.</p>
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
   * <p>Returns a list of orderable DB instance options for the specified engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput
  ): Promise<DescribeOrderableDBInstanceOptionsOutput>;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput,
    cb: (err: any, data?: DescribeOrderableDBInstanceOptionsOutput) => void
  ): void;
  public describeOrderableDBInstanceOptions(
    args: DescribeOrderableDBInstanceOptionsInput,
    cb?: (err: any, data?: DescribeOrderableDBInstanceOptionsOutput) => void
  ): Promise<DescribeOrderableDBInstanceOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrderableDBInstanceOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundFault} <p>The specified resource ID was not found.</p>
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
   * <p>You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput
  ): Promise<DescribeValidDBInstanceModificationsOutput>;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput,
    cb: (err: any, data?: DescribeValidDBInstanceModificationsOutput) => void
  ): void;
  public describeValidDBInstanceModifications(
    args: DescribeValidDBInstanceModificationsInput,
    cb?: (err: any, data?: DescribeValidDBInstanceModificationsOutput) => void
  ): Promise<DescribeValidDBInstanceModificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeValidDBInstanceModificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public failoverDBCluster(
    args: FailoverDBClusterInput
  ): Promise<FailoverDBClusterOutput>;
  public failoverDBCluster(
    args: FailoverDBClusterInput,
    cb: (err: any, data?: FailoverDBClusterOutput) => void
  ): void;
  public failoverDBCluster(
    args: FailoverDBClusterInput,
    cb?: (err: any, data?: FailoverDBClusterOutput) => void
  ): Promise<FailoverDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FailoverDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags on an Amazon Neptune resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
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
   * <p>Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group cannot be deleted because it is in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group.</p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group does not allow deletion.</p>
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {DBClusterAlreadyExistsFault} <p>User already has a DB cluster with the given identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBCluster(
    args: ModifyDBClusterInput
  ): Promise<ModifyDBClusterOutput>;
  public modifyDBCluster(
    args: ModifyDBClusterInput,
    cb: (err: any, data?: ModifyDBClusterOutput) => void
  ): void;
  public modifyDBCluster(
    args: ModifyDBClusterInput,
    cb?: (err: any, data?: ModifyDBClusterOutput) => void
  ): Promise<ModifyDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput
  ): Promise<ModifyDBClusterParameterGroupOutput>;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput,
    cb: (err: any, data?: ModifyDBClusterParameterGroupOutput) => void
  ): void;
  public modifyDBClusterParameterGroup(
    args: ModifyDBClusterParameterGroupInput,
    cb?: (err: any, data?: ModifyDBClusterParameterGroupOutput) => void
  ): Promise<ModifyDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {SharedSnapshotQuotaExceededFault} <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput
  ): Promise<ModifyDBClusterSnapshotAttributeOutput>;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput,
    cb: (err: any, data?: ModifyDBClusterSnapshotAttributeOutput) => void
  ): void;
  public modifyDBClusterSnapshotAttribute(
    args: ModifyDBClusterSnapshotAttributeInput,
    cb?: (err: any, data?: ModifyDBClusterSnapshotAttributeOutput) => void
  ): Promise<ModifyDBClusterSnapshotAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBClusterSnapshotAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group does not allow deletion.</p>
   *   - {DBInstanceAlreadyExistsFault} <p>User already has a DB instance with the given identifier.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {DBSecurityGroupNotFoundFault} <p> <i>DBSecurityGroupName</i> does not refer to an existing DB security group.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>Specified DB instance class is not available in the specified Availability Zone.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {ProvisionedIopsNotAvailableInAZFault} <p>Provisioned IOPS not available in the specified Availability Zone.</p>
   *   - {OptionGroupNotFoundFault} <p>The designated option group could not be found.</p>
   *   - {DBUpgradeDependencyFailureFault} <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
   *   - {StorageTypeNotSupportedFault} <p> <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
   *   - {AuthorizationNotFoundFault} <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
   *   - {CertificateNotFoundFault} <p> <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
   *   - {DomainNotFoundFault} <p> <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBInstance(
    args: ModifyDBInstanceInput
  ): Promise<ModifyDBInstanceOutput>;
  public modifyDBInstance(
    args: ModifyDBInstanceInput,
    cb: (err: any, data?: ModifyDBInstanceOutput) => void
  ): void;
  public modifyDBInstance(
    args: ModifyDBInstanceInput,
    cb?: (err: any, data?: ModifyDBInstanceOutput) => void
  ): Promise<ModifyDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput
  ): Promise<ModifyDBParameterGroupOutput>;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput,
    cb: (err: any, data?: ModifyDBParameterGroupOutput) => void
  ): void;
  public modifyDBParameterGroup(
    args: ModifyDBParameterGroupInput,
    cb?: (err: any, data?: ModifyDBParameterGroupOutput) => void
  ): Promise<ModifyDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {DBSubnetQuotaExceededFault} <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
   *   - {SubnetAlreadyInUse} <p>The DB subnet is already in use in the Availability Zone.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput
  ): Promise<ModifyDBSubnetGroupOutput>;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput,
    cb: (err: any, data?: ModifyDBSubnetGroupOutput) => void
  ): void;
  public modifyDBSubnetGroup(
    args: ModifyDBSubnetGroupInput,
    cb?: (err: any, data?: ModifyDBSubnetGroupOutput) => void
  ): Promise<ModifyDBSubnetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ModifyDBSubnetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EventSubscriptionQuotaExceededFault} <p>You have exceeded the number of events you can subscribe to.</p>
   *   - {SubscriptionNotFoundFault} <p>The designated subscription could not be found.</p>
   *   - {SNSInvalidTopicFault} <p>The SNS topic is invalid.</p>
   *   - {SNSNoAuthorizationFault} <p>There is no SNS authorization.</p>
   *   - {SNSTopicArnNotFoundFault} <p>The ARN of the SNS topic could not be found.</p>
   *   - {SubscriptionCategoryNotFoundFault} <p>The designated subscription category could not be found.</p>
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
   * <p>Not supported.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput
  ): Promise<PromoteReadReplicaDBClusterOutput>;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput,
    cb: (err: any, data?: PromoteReadReplicaDBClusterOutput) => void
  ): void;
  public promoteReadReplicaDBCluster(
    args: PromoteReadReplicaDBClusterInput,
    cb?: (err: any, data?: PromoteReadReplicaDBClusterOutput) => void
  ): Promise<PromoteReadReplicaDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PromoteReadReplicaDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p>The specified DB instance is not in the <i>available</i> state.</p>
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootDBInstance(
    args: RebootDBInstanceInput
  ): Promise<RebootDBInstanceOutput>;
  public rebootDBInstance(
    args: RebootDBInstanceInput,
    cb: (err: any, data?: RebootDBInstanceOutput) => void
  ): void;
  public rebootDBInstance(
    args: RebootDBInstanceInput,
    cb?: (err: any, data?: RebootDBInstanceOutput) => void
  ): Promise<RebootDBInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootDBInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {DBClusterRoleNotFoundFault} <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput
  ): Promise<RemoveRoleFromDBClusterOutput>;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput,
    cb: (err: any, data?: RemoveRoleFromDBClusterOutput) => void
  ): void;
  public removeRoleFromDBCluster(
    args: RemoveRoleFromDBClusterInput,
    cb?: (err: any, data?: RemoveRoleFromDBClusterOutput) => void
  ): Promise<RemoveRoleFromDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveRoleFromDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a source identifier from an existing event notification subscription.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {SubscriptionNotFoundFault} <p>The designated subscription could not be found.</p>
   *   - {SourceNotFoundFault} <p>The source could not be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput
  ): Promise<RemoveSourceIdentifierFromSubscriptionOutput>;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput,
    cb: (err: any, data?: RemoveSourceIdentifierFromSubscriptionOutput) => void
  ): void;
  public removeSourceIdentifierFromSubscription(
    args: RemoveSourceIdentifierFromSubscriptionInput,
    cb?: (err: any, data?: RemoveSourceIdentifierFromSubscriptionOutput) => void
  ): Promise<RemoveSourceIdentifierFromSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveSourceIdentifierFromSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes metadata tags from an Amazon Neptune resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
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
   * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput
  ): Promise<ResetDBClusterParameterGroupOutput>;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput,
    cb: (err: any, data?: ResetDBClusterParameterGroupOutput) => void
  ): void;
  public resetDBClusterParameterGroup(
    args: ResetDBClusterParameterGroupInput,
    cb?: (err: any, data?: ResetDBClusterParameterGroupOutput) => void
  ): Promise<ResetDBClusterParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetDBClusterParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <i>DBParameterGroupName</i> does not refer to an existing DB parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput
  ): Promise<ResetDBParameterGroupOutput>;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput,
    cb: (err: any, data?: ResetDBParameterGroupOutput) => void
  ): void;
  public resetDBParameterGroup(
    args: ResetDBParameterGroupInput,
    cb?: (err: any, data?: ResetDBParameterGroupOutput) => void
  ): Promise<ResetDBParameterGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetDBParameterGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>User already has a DB cluster with the given identifier.</p>
   *   - {DBClusterQuotaExceededFault} <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {DBSnapshotNotFoundFault} <p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster does not have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot does not allow deletion.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {OptionGroupNotFoundFault} <p>The designated option group could not be found.</p>
   *   - {KMSKeyNotAccessibleFault} <p>Error accessing KMS key.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput
  ): Promise<RestoreDBClusterFromSnapshotOutput>;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput,
    cb: (err: any, data?: RestoreDBClusterFromSnapshotOutput) => void
  ): void;
  public restoreDBClusterFromSnapshot(
    args: RestoreDBClusterFromSnapshotInput,
    cb?: (err: any, data?: RestoreDBClusterFromSnapshotOutput) => void
  ): Promise<RestoreDBClusterFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBClusterFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>User already has a DB cluster with the given identifier.</p>
   *   - {DBClusterNotFoundFault} <p> <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
   *   - {DBClusterQuotaExceededFault} <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <i>DBClusterSnapshotIdentifier</i> does not refer to an existing DB cluster snapshot.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <i>DBSubnetGroupName</i> does not refer to an existing DB subnet group.</p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster does not have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The supplied value is not a valid DB cluster snapshot state.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster is not in a valid state.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot does not allow deletion.</p>
   *   - {InvalidRestoreFault} <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
   *   - {InvalidSubnet} <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
   *   - {InvalidVPCNetworkStateFault} <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
   *   - {KMSKeyNotAccessibleFault} <p>Error accessing KMS key.</p>
   *   - {OptionGroupNotFoundFault} <p>The designated option group could not be found.</p>
   *   - {StorageQuotaExceededFault} <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput
  ): Promise<RestoreDBClusterToPointInTimeOutput>;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput,
    cb: (err: any, data?: RestoreDBClusterToPointInTimeOutput) => void
  ): void;
  public restoreDBClusterToPointInTime(
    args: RestoreDBClusterToPointInTimeInput,
    cb?: (err: any, data?: RestoreDBClusterToPointInTimeOutput) => void
  ): Promise<RestoreDBClusterToPointInTimeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDBClusterToPointInTimeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
