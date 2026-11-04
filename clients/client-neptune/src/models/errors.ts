// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { NeptuneServiceException as __BaseException } from "./NeptuneServiceException";

/**
 * *DBClusterIdentifier* does not refer to an existing DB cluster.
 *
 * @public
 */
export class DBClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterNotFoundFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterRoleAlreadyExistsFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterRoleQuotaExceededFault";
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
 * The DB cluster is not in a valid state.
 *
 * @public
 */
export class InvalidDBClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBClusterStateFault";
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
 * The source could not be found.
 *
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SourceNotFoundFault";
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
 * The designated subscription could not be found.
 *
 * @public
 */
export class SubscriptionNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SubscriptionNotFoundFault";
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
 * *DBInstanceIdentifier* does not refer to an existing DB instance.
 *
 * @public
 */
export class DBInstanceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBInstanceNotFoundFault";
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
 * *DBSnapshotIdentifier* does not refer to an existing DB snapshot.
 *
 * @public
 */
export class DBSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSnapshotNotFoundFault";
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
 * The specified resource ID was not found.
 *
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#ResourceNotFoundFault";
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
 * A DB parameter group with the same name exists.
 *
 * @public
 */
export class DBParameterGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault";
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
 * *DBParameterGroupName* does not refer to an existing DB parameter group.
 *
 * @public
 */
export class DBParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBParameterGroupNotFoundFault";
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
 * Request would result in user exceeding the allowed number of DB parameter groups.
 *
 * @public
 */
export class DBParameterGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault";
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
 * User already has a DB cluster snapshot with the given identifier.
 *
 * @public
 */
export class DBClusterSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault";
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
 * *DBClusterSnapshotIdentifier* does not refer to an existing DB cluster snapshot.
 *
 * @public
 */
export class DBClusterSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault";
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
 * The supplied value is not a valid DB cluster snapshot state.
 *
 * @public
 */
export class InvalidDBClusterSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault";
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
 * Error accessing KMS key.
 *
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#KMSKeyNotAccessibleFault";
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
 * Request would result in user exceeding the allowed number of DB snapshots.
 *
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SnapshotQuotaExceededFault";
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
 * User already has a DB cluster with the given identifier.
 *
 * @public
 */
export class DBClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterAlreadyExistsFault";
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
 * *DBClusterParameterGroupName* does not refer to an existing DB Cluster parameter group.
 *
 * @public
 */
export class DBClusterParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault";
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
 * User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.
 *
 * @public
 */
export class DBClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterQuotaExceededFault";
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
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @public
 */
export class DBSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs";
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
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @public
 */
export class DBSubnetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSubnetGroupNotFoundFault";
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
 * The `GlobalClusterIdentifier` doesn't refer to an existing global database cluster.
 *
 * @public
 */
export class GlobalClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#GlobalClusterNotFoundFault";
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
 * There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @public
 */
export class InsufficientStorageClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault";
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
 * The specified DB instance is not in the *available* state.
 *
 * @public
 */
export class InvalidDBInstanceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBInstanceStateFault";
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
 * The DB subnet group cannot be deleted because it is in use.
 *
 * @public
 */
export class InvalidDBSubnetGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidGlobalClusterStateFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidSubnet";
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
 * DB subnet group does not cover all Availability Zones after it is created because users' change.
 *
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidVPCNetworkStateFault";
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
 * The specified *NetworkType* is not supported for the DB cluster, DB subnet group, or orderable DB instance option.
 *
 * @public
 */
export class NetworkTypeNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#NetworkTypeNotSupportedFault";
  readonly name = "NetworkTypeNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkTypeNotSupportedFault, __BaseException>) {
    super({
      name: "NetworkTypeNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkTypeNotSupportedFault.prototype);
  }
}

/**
 * Request would result in user exceeding the allowed amount of storage available across all DB instances.
 *
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#StorageQuotaExceededFault";
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
 * The specified custom endpoint cannot be created because it already exists.
 *
 * @public
 */
export class DBClusterEndpointAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterEndpointAlreadyExistsFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterEndpointQuotaExceededFault";
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
 * Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.
 *
 * Neptune may not also be authorized via IAM to perform necessary actions on your behalf.
 *
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#AuthorizationNotFoundFault";
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
 * User already has a DB instance with the given identifier.
 *
 * @public
 */
export class DBInstanceAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBInstanceAlreadyExistsFault";
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
 * *DBSecurityGroupName* does not refer to an existing DB security group.
 *
 * @public
 */
export class DBSecurityGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSecurityGroupNotFoundFault";
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
 * *Domain* does not refer to an existing Active Directory Domain.
 *
 * @public
 */
export class DomainNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DomainNotFoundFault";
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
 * Request would result in user exceeding the allowed number of DB instances.
 *
 * @public
 */
export class InstanceQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InstanceQuotaExceededFault";
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
 * Specified DB instance class is not available in the specified Availability Zone.
 *
 * @public
 */
export class InsufficientDBInstanceCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault";
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
 * The designated option group could not be found.
 *
 * @public
 */
export class OptionGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#OptionGroupNotFoundFault";
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
 * Provisioned IOPS not available in the specified Availability Zone.
 *
 * @public
 */
export class ProvisionedIopsNotAvailableInAZFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault";
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
 * *StorageType* specified cannot be associated with the DB Instance.
 *
 * @public
 */
export class StorageTypeNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#StorageTypeNotSupportedFault";
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
 * *DBSubnetGroupName* is already used by an existing DB subnet group.
 *
 * @public
 */
export class DBSubnetGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSubnetGroupAlreadyExistsFault";
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
 * Request would result in user exceeding the allowed number of DB subnet groups.
 *
 * @public
 */
export class DBSubnetGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSubnetGroupQuotaExceededFault";
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
 * Request would result in user exceeding the allowed number of subnets in a DB subnet groups.
 *
 * @public
 */
export class DBSubnetQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSubnetQuotaExceededFault";
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
 * You have exceeded the number of events you can subscribe to.
 *
 * @public
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault";
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
 * The SNS topic is invalid.
 *
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SNSInvalidTopicFault";
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
 * There is no SNS authorization.
 *
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SNSNoAuthorizationFault";
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
 * The ARN of the SNS topic could not be found.
 *
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SNSTopicArnNotFoundFault";
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
 * This subscription already exists.
 *
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SubscriptionAlreadyExistFault";
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
 * The designated subscription category could not be found.
 *
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault";
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
 * The `GlobalClusterIdentifier` already exists. Choose a new global database identifier (unique name) to create a new global database cluster.
 *
 * @public
 */
export class GlobalClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#GlobalClusterAlreadyExistsFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#GlobalClusterQuotaExceededFault";
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
 * The specified custom endpoint doesn't exist.
 *
 * @public
 */
export class DBClusterEndpointNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterEndpointNotFoundFault";
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
 * The requested operation cannot be performed on the endpoint while the endpoint is in this state.
 *
 * @public
 */
export class InvalidDBClusterEndpointStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault";
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
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.
 *
 * @public
 */
export class InvalidDBParameterGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBParameterGroupStateFault";
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
 * *DBSnapshotIdentifier* is already used by an existing snapshot.
 *
 * @public
 */
export class DBSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBSnapshotAlreadyExistsFault";
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
 * The DB subnet is not in the *available* state.
 *
 * @public
 */
export class InvalidDBSubnetStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBSubnetStateFault";
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
 * The event subscription is in an invalid state.
 *
 * @public
 */
export class InvalidEventSubscriptionStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidEventSubscriptionStateFault";
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
 * The state of the DB security group does not allow deletion.
 *
 * @public
 */
export class InvalidDBSecurityGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault";
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
 * You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.
 *
 * @public
 */
export class SharedSnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#SharedSnapshotQuotaExceededFault";
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
 * *CertificateIdentifier* does not refer to an existing certificate.
 *
 * @public
 */
export class CertificateNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#CertificateNotFoundFault";
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
 * The DB upgrade failed because a resource the DB depends on could not be modified.
 *
 * @public
 */
export class DBUpgradeDependencyFailureFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBUpgradeDependencyFailureFault";
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
  public static readonly shapeId: string = "com.amazonaws.neptune#SubnetAlreadyInUse";
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
 * The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.
 *
 * @public
 */
export class DBClusterRoleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#DBClusterRoleNotFoundFault";
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
 * The DB cluster does not have enough capacity for the current operation.
 *
 * @public
 */
export class InsufficientDBClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InsufficientDBClusterCapacityFault";
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
 * The state of the DB snapshot does not allow deletion.
 *
 * @public
 */
export class InvalidDBSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidDBSnapshotStateFault";
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
 * Cannot restore from vpc backup to non-vpc DB instance.
 *
 * @public
 */
export class InvalidRestoreFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.neptune#InvalidRestoreFault";
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
