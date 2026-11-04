// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { RDSServiceException as __BaseException } from "./RDSServiceException";

/**
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @public
 */
export class DBClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterNotFoundFault";
  readonly name = "DBClusterNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterNotFoundFault.prototype);
  }
}

/**
 * The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.
 *
 * @public
 */
export class DBClusterRoleAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterRoleAlreadyExistsFault";
  readonly name = "DBClusterRoleAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterRoleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleAlreadyExistsFault.prototype);
  }
}

/**
 * You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.
 *
 * @public
 */
export class DBClusterRoleQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterRoleQuotaExceededFault";
  readonly name = "DBClusterRoleQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterRoleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleQuotaExceededFault.prototype);
  }
}

/**
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @public
 */
export class InvalidDBClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBClusterStateFault";
  readonly name = "InvalidDBClusterStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterStateFault.prototype);
  }
}

/**
 * `DBInstanceIdentifier` doesn't refer to an existing DB instance.
 *
 * @public
 */
export class DBInstanceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceNotFoundFault";
  readonly name = "DBInstanceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceNotFoundFault.prototype);
  }
}

/**
 * The specified `RoleArn` or `FeatureName` value is already associated with the DB instance.
 *
 * @public
 */
export class DBInstanceRoleAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceRoleAlreadyExistsFault";
  readonly name = "DBInstanceRoleAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBInstanceRoleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleAlreadyExistsFault.prototype);
  }
}

/**
 * You can't associate any more Amazon Web Services Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.
 *
 * @public
 */
export class DBInstanceRoleQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceRoleQuotaExceededFault";
  readonly name = "DBInstanceRoleQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleQuotaExceededFault, __BaseException>) {
    super({
      name: "DBInstanceRoleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleQuotaExceededFault.prototype);
  }
}

/**
 * The DB instance isn't in a valid state.
 *
 * @public
 */
export class InvalidDBInstanceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBInstanceStateFault";
  readonly name = "InvalidDBInstanceStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBInstanceStateFault, __BaseException>) {
    super({
      name: "InvalidDBInstanceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBInstanceStateFault.prototype);
  }
}

/**
 * The requested source could not be found.
 *
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SourceNotFoundFault";
  readonly name = "SourceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceNotFoundFault, __BaseException>) {
    super({
      name: "SourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceNotFoundFault.prototype);
  }
}

/**
 * The subscription name does not exist.
 *
 * @public
 */
export class SubscriptionNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SubscriptionNotFoundFault";
  readonly name = "SubscriptionNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionNotFoundFault.prototype);
  }
}

/**
 * `BlueGreenDeploymentIdentifier` doesn't refer to an existing blue/green deployment.
 *
 * @public
 */
export class BlueGreenDeploymentNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#BlueGreenDeploymentNotFoundFault";
  readonly name = "BlueGreenDeploymentNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlueGreenDeploymentNotFoundFault, __BaseException>) {
    super({
      name: "BlueGreenDeploymentNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlueGreenDeploymentNotFoundFault.prototype);
  }
}

/**
 * `DBCapacityReservationIdentifier` doesn't refer to an existing DB capacity reservation.
 *
 * @public
 */
export class DBCapacityReservationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBCapacityReservationNotFoundFault";
  readonly name = "DBCapacityReservationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBCapacityReservationNotFoundFault, __BaseException>) {
    super({
      name: "DBCapacityReservationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBCapacityReservationNotFoundFault.prototype);
  }
}

/**
 * The DB proxy endpoint doesn't exist.
 *
 * @public
 */
export class DBProxyEndpointNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyEndpointNotFoundFault";
  readonly name = "DBProxyEndpointNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyEndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointNotFoundFault.prototype);
  }
}

/**
 * The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyNotFoundFault";
  readonly name = "DBProxyNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyNotFoundFault.prototype);
  }
}

/**
 * The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyTargetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault";
  readonly name = "DBProxyTargetGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyTargetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetGroupNotFoundFault.prototype);
  }
}

/**
 * The specified DB shard group name wasn't found.
 *
 * @public
 */
export class DBShardGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBShardGroupNotFoundFault";
  readonly name = "DBShardGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBShardGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBShardGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBShardGroupNotFoundFault.prototype);
  }
}

/**
 * `DBSnapshotIdentifier` doesn't refer to an existing DB snapshot.
 *
 * @public
 */
export class DBSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSnapshotNotFoundFault";
  readonly name = "DBSnapshotNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "DBSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotNotFoundFault.prototype);
  }
}

/**
 * The specified snapshot tenant database wasn't found.
 *
 * @public
 */
export class DBSnapshotTenantDatabaseNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSnapshotTenantDatabaseNotFoundFault";
  readonly name = "DBSnapshotTenantDatabaseNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotTenantDatabaseNotFoundFault, __BaseException>) {
    super({
      name: "DBSnapshotTenantDatabaseNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotTenantDatabaseNotFoundFault.prototype);
  }
}

/**
 * The specified integration could not be found.
 *
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IntegrationNotFoundFault";
  readonly name = "IntegrationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationNotFoundFault.prototype);
  }
}

/**
 * The requested operation can't be performed on the endpoint while the endpoint is in this state.
 *
 * @public
 */
export class InvalidDBClusterEndpointStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBClusterEndpointStateFault";
  readonly name = "InvalidDBClusterEndpointStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterEndpointStateFault.prototype);
  }
}

/**
 * The specified tenant database wasn't found in the DB instance.
 *
 * @public
 */
export class TenantDatabaseNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#TenantDatabaseNotFoundFault";
  readonly name = "TenantDatabaseNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseNotFoundFault, __BaseException>) {
    super({
      name: "TenantDatabaseNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseNotFoundFault.prototype);
  }
}

/**
 * The specified resource ID was not found.
 *
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ResourceNotFoundFault";
  readonly name = "ResourceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundFault, __BaseException>) {
    super({
      name: "ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundFault.prototype);
  }
}

/**
 * The specified CIDR IP range or Amazon EC2 security group is already authorized for the specified DB security group.
 *
 * @public
 */
export class AuthorizationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#AuthorizationAlreadyExistsFault";
  readonly name = "AuthorizationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationAlreadyExistsFault, __BaseException>) {
    super({
      name: "AuthorizationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationAlreadyExistsFault.prototype);
  }
}

/**
 * The DB security group authorization quota has been reached.
 *
 * @public
 */
export class AuthorizationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#AuthorizationQuotaExceededFault";
  readonly name = "AuthorizationQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationQuotaExceededFault, __BaseException>) {
    super({
      name: "AuthorizationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationQuotaExceededFault.prototype);
  }
}

/**
 * `DBSecurityGroupName` doesn't refer to an existing DB security group.
 *
 * @public
 */
export class DBSecurityGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSecurityGroupNotFoundFault";
  readonly name = "DBSecurityGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * The state of the DB security group doesn't allow deletion.
 *
 * @public
 */
export class InvalidDBSecurityGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBSecurityGroupStateFault";
  readonly name = "InvalidDBSecurityGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSecurityGroupStateFault.prototype);
  }
}

/**
 * The DB capacity reservation isn't in a valid state.
 *
 * @public
 */
export class InvalidDBCapacityReservationStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBCapacityReservationStateFault";
  readonly name = "InvalidDBCapacityReservationStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBCapacityReservationStateFault, __BaseException>) {
    super({
      name: "InvalidDBCapacityReservationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBCapacityReservationStateFault.prototype);
  }
}

/**
 * The export task doesn't exist.
 *
 * @public
 */
export class ExportTaskNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ExportTaskNotFoundFault";
  readonly name = "ExportTaskNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportTaskNotFoundFault, __BaseException>) {
    super({
      name: "ExportTaskNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportTaskNotFoundFault.prototype);
  }
}

/**
 * You can't cancel an export task that has completed.
 *
 * @public
 */
export class InvalidExportTaskStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidExportTaskStateFault";
  readonly name = "InvalidExportTaskStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportTaskStateFault, __BaseException>) {
    super({
      name: "InvalidExportTaskStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportTaskStateFault.prototype);
  }
}

/**
 * A DB parameter group with the same name exists.
 *
 * @public
 */
export class DBParameterGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault";
  readonly name = "DBParameterGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * `DBParameterGroupName` doesn't refer to an existing DB parameter group.
 *
 * @public
 */
export class DBParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBParameterGroupNotFoundFault";
  readonly name = "DBParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupNotFoundFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of DB parameter groups.
 *
 * @public
 */
export class DBParameterGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBParameterGroupQuotaExceededFault";
  readonly name = "DBParameterGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * The user already has a DB cluster snapshot with the given identifier.
 *
 * @public
 */
export class DBClusterSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault";
  readonly name = "DBClusterSnapshotAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing DB cluster snapshot.
 *
 * @public
 */
export class DBClusterSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterSnapshotNotFoundFault";
  readonly name = "DBClusterSnapshotNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterSnapshotNotFoundFault.prototype);
  }
}

/**
 * The supplied value isn't a valid DB cluster snapshot state.
 *
 * @public
 */
export class InvalidDBClusterSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault";
  readonly name = "InvalidDBClusterSnapshotStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterSnapshotStateFault.prototype);
  }
}

/**
 * An error occurred accessing an Amazon Web Services KMS key.
 *
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#KMSKeyNotAccessibleFault";
  readonly name = "KMSKeyNotAccessibleFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSKeyNotAccessibleFault, __BaseException>) {
    super({
      name: "KMSKeyNotAccessibleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSKeyNotAccessibleFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of DB snapshots.
 *
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SnapshotQuotaExceededFault";
  readonly name = "SnapshotQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotQuotaExceededFault.prototype);
  }
}

/**
 * `CustomAvailabilityZoneId` doesn't refer to an existing custom Availability Zone identifier.
 *
 * @public
 */
export class CustomAvailabilityZoneNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault";
  readonly name = "CustomAvailabilityZoneNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomAvailabilityZoneNotFoundFault, __BaseException>) {
    super({
      name: "CustomAvailabilityZoneNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomAvailabilityZoneNotFoundFault.prototype);
  }
}

/**
 * `DBSnapshotIdentifier` is already used by an existing snapshot.
 *
 * @public
 */
export class DBSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSnapshotAlreadyExistsFault";
  readonly name = "DBSnapshotAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * The state of the DB snapshot doesn't allow deletion.
 *
 * @public
 */
export class InvalidDBSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBSnapshotStateFault";
  readonly name = "InvalidDBSnapshotStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidDBSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSnapshotStateFault.prototype);
  }
}

/**
 * The option group you are trying to create already exists.
 *
 * @public
 */
export class OptionGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#OptionGroupAlreadyExistsFault";
  readonly name = "OptionGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "OptionGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The specified option group could not be found.
 *
 * @public
 */
export class OptionGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#OptionGroupNotFoundFault";
  readonly name = "OptionGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupNotFoundFault, __BaseException>) {
    super({
      name: "OptionGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupNotFoundFault.prototype);
  }
}

/**
 * The quota of 20 option groups was exceeded for this Amazon Web Services account.
 *
 * @public
 */
export class OptionGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#OptionGroupQuotaExceededFault";
  readonly name = "OptionGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptionGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "OptionGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptionGroupQuotaExceededFault.prototype);
  }
}

/**
 * A blue/green deployment with the specified name already exists.
 *
 * @public
 */
export class BlueGreenDeploymentAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#BlueGreenDeploymentAlreadyExistsFault";
  readonly name = "BlueGreenDeploymentAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlueGreenDeploymentAlreadyExistsFault, __BaseException>) {
    super({
      name: "BlueGreenDeploymentAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlueGreenDeploymentAlreadyExistsFault.prototype);
  }
}

/**
 * `DBClusterParameterGroupName` doesn't refer to an existing DB cluster parameter group.
 *
 * @public
 */
export class DBClusterParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault";
  readonly name = "DBClusterParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterParameterGroupNotFoundFault.prototype);
  }
}

/**
 * The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.
 *
 * @public
 */
export class DBClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterQuotaExceededFault";
  readonly name = "DBClusterQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterQuotaExceededFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of DB instances.
 *
 * @public
 */
export class InstanceQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InstanceQuotaExceededFault";
  readonly name = "InstanceQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceQuotaExceededFault, __BaseException>) {
    super({
      name: "InstanceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceQuotaExceededFault.prototype);
  }
}

/**
 * The source DB cluster isn't supported for a blue/green deployment.
 *
 * @public
 */
export class SourceClusterNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SourceClusterNotSupportedFault";
  readonly name = "SourceClusterNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceClusterNotSupportedFault, __BaseException>) {
    super({
      name: "SourceClusterNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceClusterNotSupportedFault.prototype);
  }
}

/**
 * The source DB instance isn't supported for a blue/green deployment.
 *
 * @public
 */
export class SourceDatabaseNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SourceDatabaseNotSupportedFault";
  readonly name = "SourceDatabaseNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceDatabaseNotSupportedFault, __BaseException>) {
    super({
      name: "SourceDatabaseNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceDatabaseNotSupportedFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed amount of storage available across all DB instances.
 *
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#StorageQuotaExceededFault";
  readonly name = "StorageQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageQuotaExceededFault, __BaseException>) {
    super({
      name: "StorageQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageQuotaExceededFault.prototype);
  }
}

/**
 * An error occurred while trying to create the CEV.
 *
 * @public
 */
export class CreateCustomDBEngineVersionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CreateCustomDBEngineVersionFault";
  readonly name = "CreateCustomDBEngineVersionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateCustomDBEngineVersionFault, __BaseException>) {
    super({
      name: "CreateCustomDBEngineVersionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateCustomDBEngineVersionFault.prototype);
  }
}

/**
 * A CEV with the specified name already exists.
 *
 * @public
 */
export class CustomDBEngineVersionAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CustomDBEngineVersionAlreadyExistsFault";
  readonly name = "CustomDBEngineVersionAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionAlreadyExistsFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionAlreadyExistsFault.prototype);
  }
}

/**
 * The specified CEV was not found.
 *
 * @public
 */
export class CustomDBEngineVersionNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CustomDBEngineVersionNotFoundFault";
  readonly name = "CustomDBEngineVersionNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionNotFoundFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionNotFoundFault.prototype);
  }
}

/**
 * You have exceeded your CEV quota.
 *
 * @public
 */
export class CustomDBEngineVersionQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CustomDBEngineVersionQuotaExceededFault";
  readonly name = "CustomDBEngineVersionQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDBEngineVersionQuotaExceededFault, __BaseException>) {
    super({
      name: "CustomDBEngineVersionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDBEngineVersionQuotaExceededFault.prototype);
  }
}

/**
 * The AMI configuration prerequisite has not been met.
 *
 * @public
 */
export class Ec2ImagePropertiesNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#Ec2ImagePropertiesNotSupportedFault";
  readonly name = "Ec2ImagePropertiesNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ec2ImagePropertiesNotSupportedFault, __BaseException>) {
    super({
      name: "Ec2ImagePropertiesNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ec2ImagePropertiesNotSupportedFault.prototype);
  }
}

/**
 * You can't delete the CEV.
 *
 * @public
 */
export class InvalidCustomDBEngineVersionStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidCustomDBEngineVersionStateFault";
  readonly name = "InvalidCustomDBEngineVersionStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomDBEngineVersionStateFault, __BaseException>) {
    super({
      name: "InvalidCustomDBEngineVersionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomDBEngineVersionStateFault.prototype);
  }
}

/**
 * You already have a DB capacity reservation with the given name. Choose a different name for the new reservation, or use the existing reservation.
 *
 * @public
 */
export class DBCapacityReservationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBCapacityReservationAlreadyExistsFault";
  readonly name = "DBCapacityReservationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBCapacityReservationAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBCapacityReservationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBCapacityReservationAlreadyExistsFault.prototype);
  }
}

/**
 * The specified configuration isn't supported for DB capacity reservations.
 *
 * @public
 */
export class DBCapacityReservationUnsupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBCapacityReservationUnsupportedFault";
  readonly name = "DBCapacityReservationUnsupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBCapacityReservationUnsupportedFault, __BaseException>) {
    super({
      name: "DBCapacityReservationUnsupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBCapacityReservationUnsupportedFault.prototype);
  }
}

/**
 * The specified DB instance class isn't available in the specified Availability Zone.
 *
 * @public
 */
export class InsufficientDBInstanceCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InsufficientDBInstanceCapacityFault";
  readonly name = "InsufficientDBInstanceCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDBInstanceCapacityFault, __BaseException>) {
    super({
      name: "InsufficientDBInstanceCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDBInstanceCapacityFault.prototype);
  }
}

/**
 * The user already has a DB cluster with the given identifier.
 *
 * @public
 */
export class DBClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterAlreadyExistsFault";
  readonly name = "DBClusterAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAlreadyExistsFault.prototype);
  }
}

/**
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @public
 */
export class DBSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs";
  readonly name = "DBSubnetGroupDoesNotCoverEnoughAZs" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupDoesNotCoverEnoughAZs, __BaseException>) {
    super({
      name: "DBSubnetGroupDoesNotCoverEnoughAZs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupDoesNotCoverEnoughAZs.prototype);
  }
}

/**
 * `DBSubnetGroupName` doesn't refer to an existing DB subnet group.
 *
 * @public
 */
export class DBSubnetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetGroupNotFoundFault";
  readonly name = "DBSubnetGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "DBSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * `Domain` doesn't refer to an existing Active Directory domain.
 *
 * @public
 */
export class DomainNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DomainNotFoundFault";
  readonly name = "DomainNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainNotFoundFault, __BaseException>) {
    super({
      name: "DomainNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainNotFoundFault.prototype);
  }
}

/**
 * The `GlobalClusterIdentifier` doesn't refer to an existing global database cluster.
 *
 * @public
 */
export class GlobalClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#GlobalClusterNotFoundFault";
  readonly name = "GlobalClusterNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterNotFoundFault, __BaseException>) {
    super({
      name: "GlobalClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterNotFoundFault.prototype);
  }
}

/**
 * There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @public
 */
export class InsufficientStorageClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InsufficientStorageClusterCapacityFault";
  readonly name = "InsufficientStorageClusterCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientStorageClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientStorageClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientStorageClusterCapacityFault.prototype);
  }
}

/**
 * The DBSubnetGroup doesn't belong to the same VPC as that of an existing cross-region read replica of the same source instance.
 *
 * @public
 */
export class InvalidDBSubnetGroupFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBSubnetGroupFault";
  readonly name = "InvalidDBSubnetGroupFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetGroupFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetGroupFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetGroupFault.prototype);
  }
}

/**
 * The DB subnet group cannot be deleted because it's in use.
 *
 * @public
 */
export class InvalidDBSubnetGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBSubnetGroupStateFault";
  readonly name = "InvalidDBSubnetGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetGroupStateFault.prototype);
  }
}

/**
 * The global cluster is in an invalid state and can't perform the requested operation.
 *
 * @public
 */
export class InvalidGlobalClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidGlobalClusterStateFault";
  readonly name = "InvalidGlobalClusterStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGlobalClusterStateFault, __BaseException>) {
    super({
      name: "InvalidGlobalClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGlobalClusterStateFault.prototype);
  }
}

/**
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @public
 */
export class InvalidSubnet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidSubnet";
  readonly name = "InvalidSubnet" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.
 *
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidVPCNetworkStateFault";
  readonly name = "InvalidVPCNetworkStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVPCNetworkStateFault, __BaseException>) {
    super({
      name: "InvalidVPCNetworkStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVPCNetworkStateFault.prototype);
  }
}

/**
 * The network type is invalid for the DB instance. Valid nework type values are `IPV4` and `DUAL`.
 *
 * @public
 */
export class NetworkTypeNotSupported extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#NetworkTypeNotSupported";
  readonly name = "NetworkTypeNotSupported" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkTypeNotSupported, __BaseException>) {
    super({
      name: "NetworkTypeNotSupported",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkTypeNotSupported.prototype);
  }
}

/**
 * The specified `StorageType` can't be associated with the DB instance.
 *
 * @public
 */
export class StorageTypeNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#StorageTypeNotSupportedFault";
  readonly name = "StorageTypeNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageTypeNotSupportedFault, __BaseException>) {
    super({
      name: "StorageTypeNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageTypeNotSupportedFault.prototype);
  }
}

/**
 * The operation violates VPC encryption control settings. Make sure that your DB instance type supports the Nitro encryption-in-transit capability, or modify your VPC's encryption controls to not enforce encryption-in-transit.
 *
 * @public
 */
export class VpcEncryptionControlViolationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#VpcEncryptionControlViolationException";
  readonly name = "VpcEncryptionControlViolationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VpcEncryptionControlViolationException, __BaseException>) {
    super({
      name: "VpcEncryptionControlViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VpcEncryptionControlViolationException.prototype);
  }
}

/**
 * The specified custom endpoint can't be created because it already exists.
 *
 * @public
 */
export class DBClusterEndpointAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterEndpointAlreadyExistsFault";
  readonly name = "DBClusterEndpointAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBClusterEndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointAlreadyExistsFault.prototype);
  }
}

/**
 * The cluster already has the maximum number of custom endpoints.
 *
 * @public
 */
export class DBClusterEndpointQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterEndpointQuotaExceededFault";
  readonly name = "DBClusterEndpointQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterEndpointQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointQuotaExceededFault.prototype);
  }
}

/**
 * The specified CIDR IP range or Amazon EC2 security group might not be authorized for the specified DB security group.
 *
 * Or, RDS might not be authorized to perform necessary actions using IAM on your behalf.
 *
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#AuthorizationNotFoundFault";
  readonly name = "AuthorizationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "AuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationNotFoundFault.prototype);
  }
}

/**
 * @deprecated Please avoid using this fault. @public
 */
export class BackupPolicyNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#BackupPolicyNotFoundFault";
  readonly name = "BackupPolicyNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackupPolicyNotFoundFault, __BaseException>) {
    super({
      name: "BackupPolicyNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackupPolicyNotFoundFault.prototype);
  }
}

/**
 * `CertificateIdentifier` doesn't refer to an existing certificate.
 *
 * @public
 */
export class CertificateNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#CertificateNotFoundFault";
  readonly name = "CertificateNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateNotFoundFault, __BaseException>) {
    super({
      name: "CertificateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateNotFoundFault.prototype);
  }
}

/**
 * The user already has a DB instance with the given identifier.
 *
 * @public
 */
export class DBInstanceAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceAlreadyExistsFault";
  readonly name = "DBInstanceAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBInstanceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAlreadyExistsFault.prototype);
  }
}

/**
 * Provisioned IOPS not available in the specified Availability Zone.
 *
 * @public
 */
export class ProvisionedIopsNotAvailableInAZFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault";
  readonly name = "ProvisionedIopsNotAvailableInAZFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedIopsNotAvailableInAZFault, __BaseException>) {
    super({
      name: "ProvisionedIopsNotAvailableInAZFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedIopsNotAvailableInAZFault.prototype);
  }
}

/**
 * You attempted to create more tenant databases than are permitted in your Amazon Web Services account.
 *
 * @public
 */
export class TenantDatabaseQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#TenantDatabaseQuotaExceededFault";
  readonly name = "TenantDatabaseQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseQuotaExceededFault, __BaseException>) {
    super({
      name: "TenantDatabaseQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseQuotaExceededFault.prototype);
  }
}

/**
 * The DBSubnetGroup shouldn't be specified while creating read replicas that lie in the same region as the source instance.
 *
 * @public
 */
export class DBSubnetGroupNotAllowedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetGroupNotAllowedFault";
  readonly name = "DBSubnetGroupNotAllowedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupNotAllowedFault, __BaseException>) {
    super({
      name: "DBSubnetGroupNotAllowedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupNotAllowedFault.prototype);
  }
}

/**
 * The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyAlreadyExistsFault";
  readonly name = "DBProxyAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBProxyAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyAlreadyExistsFault.prototype);
  }
}

/**
 * Your Amazon Web Services account already has the maximum number of proxies in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyQuotaExceededFault";
  readonly name = "DBProxyQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyQuotaExceededFault, __BaseException>) {
    super({
      name: "DBProxyQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyQuotaExceededFault.prototype);
  }
}

/**
 * The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyEndpointAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault";
  readonly name = "DBProxyEndpointAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBProxyEndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointAlreadyExistsFault.prototype);
  }
}

/**
 * The DB proxy already has the maximum number of endpoints.
 *
 * @public
 */
export class DBProxyEndpointQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyEndpointQuotaExceededFault";
  readonly name = "DBProxyEndpointQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyEndpointQuotaExceededFault, __BaseException>) {
    super({
      name: "DBProxyEndpointQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyEndpointQuotaExceededFault.prototype);
  }
}

/**
 * The requested operation can't be performed while the proxy is in this state.
 *
 * @public
 */
export class InvalidDBProxyStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBProxyStateFault";
  readonly name = "InvalidDBProxyStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBProxyStateFault, __BaseException>) {
    super({
      name: "InvalidDBProxyStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBProxyStateFault.prototype);
  }
}

/**
 * A DB security group with the name specified in `DBSecurityGroupName` already exists.
 *
 * @public
 */
export class DBSecurityGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSecurityGroupAlreadyExistsFault";
  readonly name = "DBSecurityGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupAlreadyExistsFault.prototype);
  }
}

/**
 * A DB security group isn't allowed for this action.
 *
 * @public
 */
export class DBSecurityGroupNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSecurityGroupNotSupportedFault";
  readonly name = "DBSecurityGroupNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupNotSupportedFault, __BaseException>) {
    super({
      name: "DBSecurityGroupNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupNotSupportedFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of DB security groups.
 *
 * @public
 */
export class DBSecurityGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSecurityGroupQuotaExceededFault";
  readonly name = "DBSecurityGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSecurityGroupQuotaExceededFault.prototype);
  }
}

/**
 * The specified DB shard group name must be unique in your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBShardGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBShardGroupAlreadyExistsFault";
  readonly name = "DBShardGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBShardGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBShardGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBShardGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The maximum number of DB shard groups for your Amazon Web Services account in the specified Amazon Web Services Region has been reached.
 *
 * @public
 */
export class MaxDBShardGroupLimitReached extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#MaxDBShardGroupLimitReached";
  readonly name = "MaxDBShardGroupLimitReached" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxDBShardGroupLimitReached, __BaseException>) {
    super({
      name: "MaxDBShardGroupLimitReached",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxDBShardGroupLimitReached.prototype);
  }
}

/**
 * The specified DB engine version isn't supported for Aurora Limitless Database.
 *
 * @public
 */
export class UnsupportedDBEngineVersionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#UnsupportedDBEngineVersionFault";
  readonly name = "UnsupportedDBEngineVersionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDBEngineVersionFault, __BaseException>) {
    super({
      name: "UnsupportedDBEngineVersionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDBEngineVersionFault.prototype);
  }
}

/**
 * `DBSubnetGroupName` is already used by an existing DB subnet group.
 *
 * @public
 */
export class DBSubnetGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetGroupAlreadyExistsFault";
  readonly name = "DBSubnetGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "DBSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of DB subnet groups.
 *
 * @public
 */
export class DBSubnetGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetGroupQuotaExceededFault";
  readonly name = "DBSubnetGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of subnets in a DB subnet groups.
 *
 * @public
 */
export class DBSubnetQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBSubnetQuotaExceededFault";
  readonly name = "DBSubnetQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "DBSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBSubnetQuotaExceededFault.prototype);
  }
}

/**
 * You have reached the maximum number of event subscriptions.
 *
 * @public
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#EventSubscriptionQuotaExceededFault";
  readonly name = "EventSubscriptionQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventSubscriptionQuotaExceededFault, __BaseException>) {
    super({
      name: "EventSubscriptionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventSubscriptionQuotaExceededFault.prototype);
  }
}

/**
 * SNS has responded that there is a problem with the SNS topic specified.
 *
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SNSInvalidTopicFault";
  readonly name = "SNSInvalidTopicFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSInvalidTopicFault, __BaseException>) {
    super({
      name: "SNSInvalidTopicFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSInvalidTopicFault.prototype);
  }
}

/**
 * You do not have permission to publish to the SNS topic ARN.
 *
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SNSNoAuthorizationFault";
  readonly name = "SNSNoAuthorizationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSNoAuthorizationFault, __BaseException>) {
    super({
      name: "SNSNoAuthorizationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSNoAuthorizationFault.prototype);
  }
}

/**
 * The SNS topic ARN does not exist.
 *
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SNSTopicArnNotFoundFault";
  readonly name = "SNSTopicArnNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSTopicArnNotFoundFault, __BaseException>) {
    super({
      name: "SNSTopicArnNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSTopicArnNotFoundFault.prototype);
  }
}

/**
 * The supplied subscription name already exists.
 *
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SubscriptionAlreadyExistFault";
  readonly name = "SubscriptionAlreadyExistFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionAlreadyExistFault, __BaseException>) {
    super({
      name: "SubscriptionAlreadyExistFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionAlreadyExistFault.prototype);
  }
}

/**
 * The supplied category does not exist.
 *
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SubscriptionCategoryNotFoundFault";
  readonly name = "SubscriptionCategoryNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionCategoryNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionCategoryNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionCategoryNotFoundFault.prototype);
  }
}

/**
 * The `GlobalClusterIdentifier` already exists. Specify a new global database identifier (unique name) to create a new global database cluster or to rename an existing one.
 *
 * @public
 */
export class GlobalClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#GlobalClusterAlreadyExistsFault";
  readonly name = "GlobalClusterAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "GlobalClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterAlreadyExistsFault.prototype);
  }
}

/**
 * The number of global database clusters for this account is already at the maximum allowed.
 *
 * @public
 */
export class GlobalClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#GlobalClusterQuotaExceededFault";
  readonly name = "GlobalClusterQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "GlobalClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalClusterQuotaExceededFault.prototype);
  }
}

/**
 * The DB shard group must be in the available state.
 *
 * @public
 */
export class InvalidDBShardGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBShardGroupStateFault";
  readonly name = "InvalidDBShardGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBShardGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBShardGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBShardGroupStateFault.prototype);
  }
}

/**
 * The integration you are trying to create already exists.
 *
 * @public
 */
export class IntegrationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IntegrationAlreadyExistsFault";
  readonly name = "IntegrationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationAlreadyExistsFault, __BaseException>) {
    super({
      name: "IntegrationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationAlreadyExistsFault.prototype);
  }
}

/**
 * A conflicting conditional operation is currently in progress against this resource. Typically occurs when there are multiple requests being made to the same resource at the same time, and these requests conflict with each other.
 *
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IntegrationConflictOperationFault";
  readonly name = "IntegrationConflictOperationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictOperationFault, __BaseException>) {
    super({
      name: "IntegrationConflictOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictOperationFault.prototype);
  }
}

/**
 * You can't crate any more zero-ETL integrations because the quota has been reached.
 *
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IntegrationQuotaExceededFault";
  readonly name = "IntegrationQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationQuotaExceededFault, __BaseException>) {
    super({
      name: "IntegrationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationQuotaExceededFault.prototype);
  }
}

/**
 * You attempted to either create a tenant database that already exists or modify a tenant database to use the name of an existing tenant database.
 *
 * @public
 */
export class TenantDatabaseAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#TenantDatabaseAlreadyExistsFault";
  readonly name = "TenantDatabaseAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TenantDatabaseAlreadyExistsFault, __BaseException>) {
    super({
      name: "TenantDatabaseAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TenantDatabaseAlreadyExistsFault.prototype);
  }
}

/**
 * The blue/green deployment can't be switched over or deleted because there is an invalid configuration in the green environment.
 *
 * @public
 */
export class InvalidBlueGreenDeploymentStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidBlueGreenDeploymentStateFault";
  readonly name = "InvalidBlueGreenDeploymentStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlueGreenDeploymentStateFault, __BaseException>) {
    super({
      name: "InvalidBlueGreenDeploymentStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlueGreenDeploymentStateFault.prototype);
  }
}

/**
 * The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated backups. The retained automated backups quota is the same as your DB cluster quota.
 *
 * @public
 */
export class DBClusterAutomatedBackupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterAutomatedBackupQuotaExceededFault";
  readonly name = "DBClusterAutomatedBackupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAutomatedBackupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBClusterAutomatedBackupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAutomatedBackupQuotaExceededFault.prototype);
  }
}

/**
 * No automated backup for this DB cluster was found.
 *
 * @public
 */
export class DBClusterAutomatedBackupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterAutomatedBackupNotFoundFault";
  readonly name = "DBClusterAutomatedBackupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterAutomatedBackupNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterAutomatedBackupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterAutomatedBackupNotFoundFault.prototype);
  }
}

/**
 * The automated backup is in an invalid state. For example, this automated backup is associated with an active cluster.
 *
 * @public
 */
export class InvalidDBClusterAutomatedBackupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBClusterAutomatedBackupStateFault";
  readonly name = "InvalidDBClusterAutomatedBackupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterAutomatedBackupStateFault, __BaseException>) {
    super({
      name: "InvalidDBClusterAutomatedBackupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterAutomatedBackupStateFault.prototype);
  }
}

/**
 * The specified custom endpoint doesn't exist.
 *
 * @public
 */
export class DBClusterEndpointNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterEndpointNotFoundFault";
  readonly name = "DBClusterEndpointNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterEndpointNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterEndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterEndpointNotFoundFault.prototype);
  }
}

/**
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.
 *
 * @public
 */
export class InvalidDBParameterGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBParameterGroupStateFault";
  readonly name = "InvalidDBParameterGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidDBParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBParameterGroupStateFault.prototype);
  }
}

/**
 * The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated backups. The retained automated backups quota is the same as your DB instance quota.
 *
 * @public
 */
export class DBInstanceAutomatedBackupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault";
  readonly name = "DBInstanceAutomatedBackupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAutomatedBackupQuotaExceededFault, __BaseException>) {
    super({
      name: "DBInstanceAutomatedBackupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAutomatedBackupQuotaExceededFault.prototype);
  }
}

/**
 * No automated backup for this DB instance was found.
 *
 * @public
 */
export class DBInstanceAutomatedBackupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault";
  readonly name = "DBInstanceAutomatedBackupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceAutomatedBackupNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceAutomatedBackupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceAutomatedBackupNotFoundFault.prototype);
  }
}

/**
 * The automated backup is in an invalid state. For example, this automated backup is associated with an active instance.
 *
 * @public
 */
export class InvalidDBInstanceAutomatedBackupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBInstanceAutomatedBackupStateFault";
  readonly name = "InvalidDBInstanceAutomatedBackupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBInstanceAutomatedBackupStateFault, __BaseException>) {
    super({
      name: "InvalidDBInstanceAutomatedBackupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBInstanceAutomatedBackupStateFault.prototype);
  }
}

/**
 * You can't perform this operation while the DB proxy endpoint is in a particular state.
 *
 * @public
 */
export class InvalidDBProxyEndpointStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBProxyEndpointStateFault";
  readonly name = "InvalidDBProxyEndpointStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBProxyEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidDBProxyEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBProxyEndpointStateFault.prototype);
  }
}

/**
 * The DB subnet isn't in the *available* state.
 *
 * @public
 */
export class InvalidDBSubnetStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBSubnetStateFault";
  readonly name = "InvalidDBSubnetStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBSubnetStateFault, __BaseException>) {
    super({
      name: "InvalidDBSubnetStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBSubnetStateFault.prototype);
  }
}

/**
 * This error can occur if someone else is modifying a subscription. You should retry the action.
 *
 * @public
 */
export class InvalidEventSubscriptionStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidEventSubscriptionStateFault";
  readonly name = "InvalidEventSubscriptionStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventSubscriptionStateFault, __BaseException>) {
    super({
      name: "InvalidEventSubscriptionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventSubscriptionStateFault.prototype);
  }
}

/**
 * The integration is in an invalid state and can't perform the requested operation.
 *
 * @public
 */
export class InvalidIntegrationStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidIntegrationStateFault";
  readonly name = "InvalidIntegrationStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidIntegrationStateFault, __BaseException>) {
    super({
      name: "InvalidIntegrationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidIntegrationStateFault.prototype);
  }
}

/**
 * The option group isn't in the *available* state.
 *
 * @public
 */
export class InvalidOptionGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidOptionGroupStateFault";
  readonly name = "InvalidOptionGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOptionGroupStateFault, __BaseException>) {
    super({
      name: "InvalidOptionGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOptionGroupStateFault.prototype);
  }
}

/**
 * The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.
 *
 * @public
 */
export class DBProxyTargetNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyTargetNotFoundFault";
  readonly name = "DBProxyTargetNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetNotFoundFault, __BaseException>) {
    super({
      name: "DBProxyTargetNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetNotFoundFault.prototype);
  }
}

/**
 * `BacktrackIdentifier` doesn't refer to an existing backtrack.
 *
 * @public
 */
export class DBClusterBacktrackNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterBacktrackNotFoundFault";
  readonly name = "DBClusterBacktrackNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterBacktrackNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterBacktrackNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterBacktrackNotFoundFault.prototype);
  }
}

/**
 * An attempt to download or examine log files didn't succeed because an Aurora Serverless v2 instance was paused.
 *
 * @public
 */
export class DBInstanceNotReadyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceNotReadyFault";
  readonly name = "DBInstanceNotReadyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceNotReadyFault, __BaseException>) {
    super({
      name: "DBInstanceNotReadyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceNotReadyFault.prototype);
  }
}

/**
 * The specified reserved DB Instance not found.
 *
 * @public
 */
export class ReservedDBInstanceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ReservedDBInstanceNotFoundFault";
  readonly name = "ReservedDBInstanceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceNotFoundFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceNotFoundFault.prototype);
  }
}

/**
 * Specified offering does not exist.
 *
 * @public
 */
export class ReservedDBInstancesOfferingNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault";
  readonly name = "ReservedDBInstancesOfferingNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstancesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedDBInstancesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstancesOfferingNotFoundFault.prototype);
  }
}

/**
 * The operation can't be performed because another operation is in progress.
 *
 * @public
 */
export class InvalidResourceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidResourceStateFault";
  readonly name = "InvalidResourceStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateFault, __BaseException>) {
    super({
      name: "InvalidResourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateFault.prototype);
  }
}

/**
 * `LogFileName` doesn't refer to an existing DB log file.
 *
 * @public
 */
export class DBLogFileNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBLogFileNotFoundFault";
  readonly name = "DBLogFileNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBLogFileNotFoundFault, __BaseException>) {
    super({
      name: "DBLogFileNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBLogFileNotFoundFault.prototype);
  }
}

/**
 * `Capacity` isn't a valid Aurora Serverless DB cluster capacity. Valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
 *
 * @public
 */
export class InvalidDBClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidDBClusterCapacityFault";
  readonly name = "InvalidDBClusterCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDBClusterCapacityFault, __BaseException>) {
    super({
      name: "InvalidDBClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDBClusterCapacityFault.prototype);
  }
}

/**
 * The `aurora-iopt1` storage type isn't available, because you modified the DB cluster to use this storage type less than one month ago.
 *
 * @public
 */
export class StorageTypeNotAvailableFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#StorageTypeNotAvailableFault";
  readonly name = "StorageTypeNotAvailableFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageTypeNotAvailableFault, __BaseException>) {
    super({
      name: "StorageTypeNotAvailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageTypeNotAvailableFault.prototype);
  }
}

/**
 * You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.
 *
 * @public
 */
export class SharedSnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SharedSnapshotQuotaExceededFault";
  readonly name = "SharedSnapshotQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SharedSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "SharedSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SharedSnapshotQuotaExceededFault.prototype);
  }
}

/**
 * The DB upgrade failed because a resource the DB depends on can't be modified.
 *
 * @public
 */
export class DBUpgradeDependencyFailureFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBUpgradeDependencyFailureFault";
  readonly name = "DBUpgradeDependencyFailureFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBUpgradeDependencyFailureFault, __BaseException>) {
    super({
      name: "DBUpgradeDependencyFailureFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBUpgradeDependencyFailureFault.prototype);
  }
}

/**
 * The DB subnet is already in use in the Availability Zone.
 *
 * @public
 */
export class SubnetAlreadyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#SubnetAlreadyInUse";
  readonly name = "SubnetAlreadyInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

/**
 * User already has a reservation with the given identifier.
 *
 * @public
 */
export class ReservedDBInstanceAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ReservedDBInstanceAlreadyExistsFault";
  readonly name = "ReservedDBInstanceAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceAlreadyExistsFault.prototype);
  }
}

/**
 * Request would exceed the user's DB Instance quota.
 *
 * @public
 */
export class ReservedDBInstanceQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ReservedDBInstanceQuotaExceededFault";
  readonly name = "ReservedDBInstanceQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedDBInstanceQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedDBInstanceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedDBInstanceQuotaExceededFault.prototype);
  }
}

/**
 * The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.
 *
 * @public
 */
export class DBProxyTargetAlreadyRegisteredFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBProxyTargetAlreadyRegisteredFault";
  readonly name = "DBProxyTargetAlreadyRegisteredFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBProxyTargetAlreadyRegisteredFault, __BaseException>) {
    super({
      name: "DBProxyTargetAlreadyRegisteredFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBProxyTargetAlreadyRegisteredFault.prototype);
  }
}

/**
 * The requested operation can't be performed because there aren't enough available IP addresses in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required from the subnets.
 *
 * @public
 */
export class InsufficientAvailableIPsInSubnetFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InsufficientAvailableIPsInSubnetFault";
  readonly name = "InsufficientAvailableIPsInSubnetFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientAvailableIPsInSubnetFault, __BaseException>) {
    super({
      name: "InsufficientAvailableIPsInSubnetFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientAvailableIPsInSubnetFault.prototype);
  }
}

/**
 * The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.
 *
 * @public
 */
export class DBClusterRoleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBClusterRoleNotFoundFault";
  readonly name = "DBClusterRoleNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBClusterRoleNotFoundFault, __BaseException>) {
    super({
      name: "DBClusterRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBClusterRoleNotFoundFault.prototype);
  }
}

/**
 * The specified `RoleArn` value doesn't match the specified feature for the DB instance.
 *
 * @public
 */
export class DBInstanceRoleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#DBInstanceRoleNotFoundFault";
  readonly name = "DBInstanceRoleNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DBInstanceRoleNotFoundFault, __BaseException>) {
    super({
      name: "DBInstanceRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DBInstanceRoleNotFoundFault.prototype);
  }
}

/**
 * The specified Amazon S3 bucket name can't be found or Amazon RDS isn't authorized to access the specified Amazon S3 bucket. Verify the **SourceS3BucketName** and **S3IngestionRoleArn** values and try again.
 *
 * @public
 */
export class InvalidS3BucketFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidS3BucketFault";
  readonly name = "InvalidS3BucketFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketFault, __BaseException>) {
    super({
      name: "InvalidS3BucketFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketFault.prototype);
  }
}

/**
 * The DB cluster doesn't have enough capacity for the current operation.
 *
 * @public
 */
export class InsufficientDBClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InsufficientDBClusterCapacityFault";
  readonly name = "InsufficientDBClusterCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDBClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientDBClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDBClusterCapacityFault.prototype);
  }
}

/**
 * Cannot restore from VPC backup to non-VPC DB instance.
 *
 * @public
 */
export class InvalidRestoreFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidRestoreFault";
  readonly name = "InvalidRestoreFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRestoreFault, __BaseException>) {
    super({
      name: "InvalidRestoreFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRestoreFault.prototype);
  }
}

/**
 * `SourceDBInstanceIdentifier` refers to a DB instance with `BackupRetentionPeriod` equal to 0.
 *
 * @public
 */
export class PointInTimeRestoreNotEnabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#PointInTimeRestoreNotEnabledFault";
  readonly name = "PointInTimeRestoreNotEnabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PointInTimeRestoreNotEnabledFault, __BaseException>) {
    super({
      name: "PointInTimeRestoreNotEnabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PointInTimeRestoreNotEnabledFault.prototype);
  }
}

/**
 * You can't start an export task that's already running.
 *
 * @public
 */
export class ExportTaskAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#ExportTaskAlreadyExistsFault";
  readonly name = "ExportTaskAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExportTaskAlreadyExistsFault, __BaseException>) {
    super({
      name: "ExportTaskAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExportTaskAlreadyExistsFault.prototype);
  }
}

/**
 * The IAM role requires additional permissions to export to an Amazon S3 bucket.
 *
 * @public
 */
export class IamRoleMissingPermissionsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IamRoleMissingPermissionsFault";
  readonly name = "IamRoleMissingPermissionsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamRoleMissingPermissionsFault, __BaseException>) {
    super({
      name: "IamRoleMissingPermissionsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamRoleMissingPermissionsFault.prototype);
  }
}

/**
 * The IAM role is missing for exporting to an Amazon S3 bucket.
 *
 * @public
 */
export class IamRoleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#IamRoleNotFoundFault";
  readonly name = "IamRoleNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IamRoleNotFoundFault, __BaseException>) {
    super({
      name: "IamRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IamRoleNotFoundFault.prototype);
  }
}

/**
 * The export is invalid for exporting to an Amazon S3 bucket.
 *
 * @public
 */
export class InvalidExportOnlyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidExportOnlyFault";
  readonly name = "InvalidExportOnlyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportOnlyFault, __BaseException>) {
    super({
      name: "InvalidExportOnlyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportOnlyFault.prototype);
  }
}

/**
 * The state of the export snapshot is invalid for exporting to an Amazon S3 bucket.
 *
 * @public
 */
export class InvalidExportSourceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.rds#InvalidExportSourceStateFault";
  readonly name = "InvalidExportSourceStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidExportSourceStateFault, __BaseException>) {
    super({
      name: "InvalidExportSourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidExportSourceStateFault.prototype);
  }
}
