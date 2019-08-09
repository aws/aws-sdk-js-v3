import { DocDBClient } from "./DocDBClient";
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
import { CreateDBClusterInput } from "./types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "./types/CreateDBClusterOutput";
import { CreateDBClusterParameterGroupInput } from "./types/CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "./types/CreateDBClusterParameterGroupOutput";
import { CreateDBClusterSnapshotInput } from "./types/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "./types/CreateDBClusterSnapshotOutput";
import { CreateDBInstanceInput } from "./types/CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "./types/CreateDBInstanceOutput";
import { CreateDBSubnetGroupInput } from "./types/CreateDBSubnetGroupInput";
import { CreateDBSubnetGroupOutput } from "./types/CreateDBSubnetGroupOutput";
import { DBClusterAlreadyExistsFault } from "./types/DBClusterAlreadyExistsFault";
import { DBClusterNotFoundFault } from "./types/DBClusterNotFoundFault";
import { DBClusterParameterGroupNotFoundFault } from "./types/DBClusterParameterGroupNotFoundFault";
import { DBClusterQuotaExceededFault } from "./types/DBClusterQuotaExceededFault";
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
import { DeleteDBSubnetGroupInput } from "./types/DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "./types/DeleteDBSubnetGroupOutput";
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
import { DescribeDBSubnetGroupsInput } from "./types/DescribeDBSubnetGroupsInput";
import { DescribeDBSubnetGroupsOutput } from "./types/DescribeDBSubnetGroupsOutput";
import { DescribeEngineDefaultClusterParametersInput } from "./types/DescribeEngineDefaultClusterParametersInput";
import { DescribeEngineDefaultClusterParametersOutput } from "./types/DescribeEngineDefaultClusterParametersOutput";
import { DescribeEventCategoriesInput } from "./types/DescribeEventCategoriesInput";
import { DescribeEventCategoriesOutput } from "./types/DescribeEventCategoriesOutput";
import { DescribeEventsInput } from "./types/DescribeEventsInput";
import { DescribeEventsOutput } from "./types/DescribeEventsOutput";
import { DescribeOrderableDBInstanceOptionsInput } from "./types/DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "./types/DescribeOrderableDBInstanceOptionsOutput";
import { DescribePendingMaintenanceActionsInput } from "./types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "./types/DescribePendingMaintenanceActionsOutput";
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
import { ModifyDBSubnetGroupInput } from "./types/ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "./types/ModifyDBSubnetGroupOutput";
import { RebootDBInstanceInput } from "./types/RebootDBInstanceInput";
import { RebootDBInstanceOutput } from "./types/RebootDBInstanceOutput";
import { RemoveTagsFromResourceInput } from "./types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./types/RemoveTagsFromResourceOutput";
import { ResetDBClusterParameterGroupInput } from "./types/ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "./types/ResetDBClusterParameterGroupOutput";
import { ResourceNotFoundFault } from "./types/ResourceNotFoundFault";
import { RestoreDBClusterFromSnapshotInput } from "./types/RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "./types/RestoreDBClusterFromSnapshotOutput";
import { RestoreDBClusterToPointInTimeInput } from "./types/RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "./types/RestoreDBClusterToPointInTimeOutput";
import { SharedSnapshotQuotaExceededFault } from "./types/SharedSnapshotQuotaExceededFault";
import { SnapshotQuotaExceededFault } from "./types/SnapshotQuotaExceededFault";
import { StartDBClusterInput } from "./types/StartDBClusterInput";
import { StartDBClusterOutput } from "./types/StartDBClusterOutput";
import { StopDBClusterInput } from "./types/StopDBClusterInput";
import { StopDBClusterOutput } from "./types/StopDBClusterOutput";
import { StorageQuotaExceededFault } from "./types/StorageQuotaExceededFault";
import { StorageTypeNotSupportedFault } from "./types/StorageTypeNotSupportedFault";
import { SubnetAlreadyInUse } from "./types/SubnetAlreadyInUse";
import { AddTagsToResourceCommand } from "./commands/AddTagsToResourceCommand";
import { ApplyPendingMaintenanceActionCommand } from "./commands/ApplyPendingMaintenanceActionCommand";
import { CopyDBClusterParameterGroupCommand } from "./commands/CopyDBClusterParameterGroupCommand";
import { CopyDBClusterSnapshotCommand } from "./commands/CopyDBClusterSnapshotCommand";
import { CreateDBClusterCommand } from "./commands/CreateDBClusterCommand";
import { CreateDBClusterParameterGroupCommand } from "./commands/CreateDBClusterParameterGroupCommand";
import { CreateDBClusterSnapshotCommand } from "./commands/CreateDBClusterSnapshotCommand";
import { CreateDBInstanceCommand } from "./commands/CreateDBInstanceCommand";
import { CreateDBSubnetGroupCommand } from "./commands/CreateDBSubnetGroupCommand";
import { DeleteDBClusterCommand } from "./commands/DeleteDBClusterCommand";
import { DeleteDBClusterParameterGroupCommand } from "./commands/DeleteDBClusterParameterGroupCommand";
import { DeleteDBClusterSnapshotCommand } from "./commands/DeleteDBClusterSnapshotCommand";
import { DeleteDBInstanceCommand } from "./commands/DeleteDBInstanceCommand";
import { DeleteDBSubnetGroupCommand } from "./commands/DeleteDBSubnetGroupCommand";
import { DescribeDBClusterParameterGroupsCommand } from "./commands/DescribeDBClusterParameterGroupsCommand";
import { DescribeDBClusterParametersCommand } from "./commands/DescribeDBClusterParametersCommand";
import { DescribeDBClusterSnapshotAttributesCommand } from "./commands/DescribeDBClusterSnapshotAttributesCommand";
import { DescribeDBClusterSnapshotsCommand } from "./commands/DescribeDBClusterSnapshotsCommand";
import { DescribeDBClustersCommand } from "./commands/DescribeDBClustersCommand";
import { DescribeDBEngineVersionsCommand } from "./commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommand } from "./commands/DescribeDBInstancesCommand";
import { DescribeDBSubnetGroupsCommand } from "./commands/DescribeDBSubnetGroupsCommand";
import { DescribeEngineDefaultClusterParametersCommand } from "./commands/DescribeEngineDefaultClusterParametersCommand";
import { DescribeEventCategoriesCommand } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventsCommand } from "./commands/DescribeEventsCommand";
import { DescribeOrderableDBInstanceOptionsCommand } from "./commands/DescribeOrderableDBInstanceOptionsCommand";
import { DescribePendingMaintenanceActionsCommand } from "./commands/DescribePendingMaintenanceActionsCommand";
import { FailoverDBClusterCommand } from "./commands/FailoverDBClusterCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ModifyDBClusterCommand } from "./commands/ModifyDBClusterCommand";
import { ModifyDBClusterParameterGroupCommand } from "./commands/ModifyDBClusterParameterGroupCommand";
import { ModifyDBClusterSnapshotAttributeCommand } from "./commands/ModifyDBClusterSnapshotAttributeCommand";
import { ModifyDBInstanceCommand } from "./commands/ModifyDBInstanceCommand";
import { ModifyDBSubnetGroupCommand } from "./commands/ModifyDBSubnetGroupCommand";
import { RebootDBInstanceCommand } from "./commands/RebootDBInstanceCommand";
import { RemoveTagsFromResourceCommand } from "./commands/RemoveTagsFromResourceCommand";
import { ResetDBClusterParameterGroupCommand } from "./commands/ResetDBClusterParameterGroupCommand";
import { RestoreDBClusterFromSnapshotCommand } from "./commands/RestoreDBClusterFromSnapshotCommand";
import { RestoreDBClusterToPointInTimeCommand } from "./commands/RestoreDBClusterToPointInTimeCommand";
import { StartDBClusterCommand } from "./commands/StartDBClusterCommand";
import { StopDBClusterCommand } from "./commands/StopDBClusterCommand";

export class DocDB extends DocDBClient {
  /**
   * <p>Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources. or in a <code>Condition</code> statement in an AWS Identity and Access Management (IAM) policy for Amazon DocumentDB.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
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
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
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
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
   *   - {DBParameterGroupQuotaExceededFault} <p>This request would cause you to exceed the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name already exists.</p>
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
   * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p> <p>To cancel the copy operation after it is in progress, delete the target DB cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in the <i>copying</i> status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>You already have a DB cluster snapshot with the given identifier.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred when accessing an AWS KMS key.</p>
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
   * <p>Creates a new Amazon DocumentDB DB cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>You already have a DB cluster with the given identifier.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
   *   - {DBClusterQuotaExceededFault} <p>The DB cluster can't be created because you have reached the maximum allowed quota of DB clusters.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group can't be deleted because it's in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred when accessing an AWS KMS key.</p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
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
   * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p>A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after you create it. After you create a DB cluster parameter group, you must associate it with your DB cluster. For the new DB cluster parameter group and associated settings to take effect, you must then reboot the DB instances in the DB cluster without failover.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupQuotaExceededFault} <p>This request would cause you to exceed the allowed number of DB parameter groups.</p>
   *   - {DBParameterGroupAlreadyExistsFault} <p>A DB parameter group with the same name already exists.</p>
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
   * <p>Creates a snapshot of a DB cluster. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>You already have a DB cluster snapshot with the given identifier.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
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
   *   - {DBInstanceAlreadyExistsFault} <p>You already have a DB instance with the given identifier.</p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group. </p>
   *   - {InstanceQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB instances.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the specified <code>StorageType</code> can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred when accessing an AWS KMS key.</p>
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
   * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupAlreadyExistsFault} <p> <code>DBSubnetGroupName</code> is already being used by an existing DB subnet group. </p>
   *   - {DBSubnetGroupQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB subnet groups.</p>
   *   - {DBSubnetQuotaExceededFault} <p>The request would cause you to exceed the allowed number of subnets in a DB subnet group.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
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
   * <p>Deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p/>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {DBClusterSnapshotAlreadyExistsFault} <p>You already have a DB cluster snapshot with the given identifier.</p>
   *   - {SnapshotQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
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
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
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
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
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
   * <p>Deletes a previously provisioned DB instance. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {DBSnapshotAlreadyExistsFault} <p> <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
   *   - {SnapshotQuotaExceededFault} <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
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
   * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group can't be deleted because it's in use.</p>
   *   - {InvalidDBSubnetStateFault} <p> The DB subnet isn't in the <i>available</i> state. </p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
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
   * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified DB cluster parameter group. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
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
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
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
   * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
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
   * <p>Returns information about DB cluster snapshots. This API operation supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
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
   * <p>Returns information about provisioned Amazon DocumentDB DB clusters. This API operation supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
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
   * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
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
   * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
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
   * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type. </p>
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
   * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, DB security group, DB snapshot, or DB parameter group by providing the name as a parameter. By default, the events of the past hour are returned.</p>
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
   * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
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
   * <p>Lists all tags on an Amazon DocumentDB resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
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
   * <p>Modifies a setting for an Amazon DocumentDB DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {InvalidDBSubnetGroupStateFault} <p>The DB subnet group can't be deleted because it's in use.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
   *   - {DBClusterParameterGroupNotFoundFault} <p> <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB cluster parameter group. </p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {DBClusterAlreadyExistsFault} <p>You already have a DB cluster with the given identifier.</p>
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
   * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new DB cluster. This step is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
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
   * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
   *   - {SharedSnapshotQuotaExceededFault} <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with. </p>
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
   * <p>Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {InvalidDBSecurityGroupStateFault} <p>The state of the DB security group doesn't allow deletion.</p>
   *   - {DBInstanceAlreadyExistsFault} <p>You already have a DB instance with the given identifier.</p>
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
   *   - {DBSecurityGroupNotFoundFault} <p> <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group. </p>
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
   *   - {InsufficientDBInstanceCapacityFault} <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {DBUpgradeDependencyFailureFault} <p>The DB upgrade failed because a resource that the DB depends on can't be modified.</p>
   *   - {StorageTypeNotSupportedFault} <p>Storage of the specified <code>StorageType</code> can't be associated with the DB instance. </p>
   *   - {AuthorizationNotFoundFault} <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
   *   - {CertificateNotFoundFault} <p> <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
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
   * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two Availability Zones in the AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSubnetQuotaExceededFault} <p>The request would cause you to exceed the allowed number of subnets in a DB subnet group.</p>
   *   - {SubnetAlreadyInUse} <p>The DB subnet is already in use in the Availability Zone.</p>
   *   - {DBSubnetGroupDoesNotCoverEnoughAZs} <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
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
   * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the DB cluster parameter group that is associated with the DB instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to <i>rebooting</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
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
   * <p>Removes metadata tags from an Amazon DocumentDB resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBInstanceNotFoundFault} <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
   *   - {DBSnapshotNotFoundFault} <p> <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
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
   * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidDBParameterGroupStateFault} <p>The DB parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
   *   - {DBParameterGroupNotFoundFault} <p> <code>DBParameterGroupName</code> doesn't refer to an existing DB parameter group. </p>
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
   * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>You already have a DB cluster with the given identifier.</p>
   *   - {DBClusterQuotaExceededFault} <p>The DB cluster can't be created because you have reached the maximum allowed quota of DB clusters.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {DBSnapshotNotFoundFault} <p> <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster doesn't have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {InvalidRestoreFault} <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB instance.</p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred when accessing an AWS KMS key.</p>
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
   * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterAlreadyExistsFault} <p>You already have a DB cluster with the given identifier.</p>
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {DBClusterQuotaExceededFault} <p>The DB cluster can't be created because you have reached the maximum allowed quota of DB clusters.</p>
   *   - {DBClusterSnapshotNotFoundFault} <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
   *   - {DBSubnetGroupNotFoundFault} <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
   *   - {InsufficientDBClusterCapacityFault} <p>The DB cluster doesn't have enough capacity for the current operation.</p>
   *   - {InsufficientStorageClusterCapacityFault} <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
   *   - {InvalidDBClusterSnapshotStateFault} <p>The provided value isn't a valid DB cluster snapshot state.</p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBSnapshotStateFault} <p>The state of the DB snapshot doesn't allow deletion.</p>
   *   - {InvalidRestoreFault} <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB instance.</p>
   *   - {InvalidSubnet} <p>The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).</p>
   *   - {InvalidVPCNetworkStateFault} <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
   *   - {KMSKeyNotAccessibleFault} <p>An error occurred when accessing an AWS KMS key.</p>
   *   - {StorageQuotaExceededFault} <p>The request would cause you to exceed the allowed amount of storage available across all DB instances.</p>
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

  /**
   * <p>Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDBCluster(
    args: StartDBClusterInput
  ): Promise<StartDBClusterOutput>;
  public startDBCluster(
    args: StartDBClusterInput,
    cb: (err: any, data?: StartDBClusterOutput) => void
  ): void;
  public startDBCluster(
    args: StartDBClusterInput,
    cb?: (err: any, data?: StartDBClusterOutput) => void
  ): Promise<StartDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DBClusterNotFoundFault} <p> <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster. </p>
   *   - {InvalidDBClusterStateFault} <p>The DB cluster isn't in a valid state.</p>
   *   - {InvalidDBInstanceStateFault} <p> The specified DB instance isn't in the <i>available</i> state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDBCluster(args: StopDBClusterInput): Promise<StopDBClusterOutput>;
  public stopDBCluster(
    args: StopDBClusterInput,
    cb: (err: any, data?: StopDBClusterOutput) => void
  ): void;
  public stopDBCluster(
    args: StopDBClusterInput,
    cb?: (err: any, data?: StopDBClusterOutput) => void
  ): Promise<StopDBClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDBClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
