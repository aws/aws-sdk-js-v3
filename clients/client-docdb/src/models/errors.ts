// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DocDBServiceException as __BaseException } from "./DocDBServiceException";

/**
 * The requested source could not be found.
 *
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SourceNotFoundFault";
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
  public static readonly shapeId: string = "com.amazonaws.docdb#SubscriptionNotFoundFault";
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
 * `DBClusterIdentifier` doesn't refer to an existing cluster.
 *
 * @public
 */
export class DBClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterNotFoundFault";
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
 * `DBInstanceIdentifier` doesn't refer to an existing instance.
 *
 * @public
 */
export class DBInstanceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBInstanceNotFoundFault";
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
 * `DBSnapshotIdentifier` doesn't refer to an existing snapshot.
 *
 * @public
 */
export class DBSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSnapshotNotFoundFault";
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
 * The cluster isn't in a valid state.
 *
 * @public
 */
export class InvalidDBClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBClusterStateFault";
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
 * The specified instance isn't in the *available* state.
 *
 * @public
 */
export class InvalidDBInstanceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBInstanceStateFault";
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
 * The specified resource ID was not found.
 *
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#ResourceNotFoundFault";
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
 * A parameter group with the same name already exists.
 *
 * @public
 */
export class DBParameterGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBParameterGroupAlreadyExistsFault";
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
 * `DBParameterGroupName` doesn't refer to an existing parameter group.
 *
 * @public
 */
export class DBParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBParameterGroupNotFoundFault";
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
 * This request would cause you to exceed the allowed number of parameter groups.
 *
 * @public
 */
export class DBParameterGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBParameterGroupQuotaExceededFault";
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
 * You already have a cluster snapshot with the given identifier.
 *
 * @public
 */
export class DBClusterSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterSnapshotAlreadyExistsFault";
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
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing cluster snapshot.
 *
 * @public
 */
export class DBClusterSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterSnapshotNotFoundFault";
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
 * The provided value isn't a valid cluster snapshot state.
 *
 * @public
 */
export class InvalidDBClusterSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBClusterSnapshotStateFault";
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
 * An error occurred when accessing an KMS key.
 *
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#KMSKeyNotAccessibleFault";
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
 * The request would cause you to exceed the allowed number of snapshots.
 *
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SnapshotQuotaExceededFault";
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
 * You already have a cluster with the given identifier.
 *
 * @public
 */
export class DBClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterAlreadyExistsFault";
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
 * `DBClusterParameterGroupName` doesn't refer to an existing cluster parameter group.
 *
 * @public
 */
export class DBClusterParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterParameterGroupNotFoundFault";
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
 * The cluster can't be created because you have reached the maximum allowed quota of clusters.
 *
 * @public
 */
export class DBClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBClusterQuotaExceededFault";
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
 * Subnets in the subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @public
 */
export class DBSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSubnetGroupDoesNotCoverEnoughAZs";
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
 * `DBSubnetGroupName` doesn't refer to an existing subnet group.
 *
 * @public
 */
export class DBSubnetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSubnetGroupNotFoundFault";
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
 * The `GlobalClusterIdentifier` doesn't refer to an existing global cluster.
 *
 * @public
 */
export class GlobalClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#GlobalClusterNotFoundFault";
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
 * There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @public
 */
export class InsufficientStorageClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InsufficientStorageClusterCapacityFault";
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
 * The subnet group can't be deleted because it's in use.
 *
 * @public
 */
export class InvalidDBSubnetGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBSubnetGroupStateFault";
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
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @public
 */
export class InvalidGlobalClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidGlobalClusterStateFault";
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
 * The requested subnet is not valid, or multiple subnets were requested that are not all in a common virtual private cloud (VPC).
 *
 * @public
 */
export class InvalidSubnet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidSubnet";
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
 * The subnet group doesn't cover all Availability Zones after it is created because of changes that were made.
 *
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidVPCNetworkStateFault";
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
 * The network type is not supported by either `DBSubnetGroup` or the DB engine version.
 *
 * @public
 */
export class NetworkTypeNotSupported extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#NetworkTypeNotSupported";
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
 * The request would cause you to exceed the allowed amount of storage available across all instances.
 *
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#StorageQuotaExceededFault";
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
 * The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified security group.
 *
 * Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.
 *
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#AuthorizationNotFoundFault";
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
 * You already have a instance with the given identifier.
 *
 * @public
 */
export class DBInstanceAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBInstanceAlreadyExistsFault";
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
 * `DBSecurityGroupName` doesn't refer to an existing security group.
 *
 * @public
 */
export class DBSecurityGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSecurityGroupNotFoundFault";
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
 * The request would cause you to exceed the allowed number of instances.
 *
 * @public
 */
export class InstanceQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InstanceQuotaExceededFault";
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
 * The specified instance class isn't available in the specified Availability Zone.
 *
 * @public
 */
export class InsufficientDBInstanceCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InsufficientDBInstanceCapacityFault";
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
 * Storage of the specified `StorageType` can't be associated with the DB instance.
 *
 * @public
 */
export class StorageTypeNotSupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#StorageTypeNotSupportedFault";
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
 * `DBSubnetGroupName` is already being used by an existing subnet group.
 *
 * @public
 */
export class DBSubnetGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSubnetGroupAlreadyExistsFault";
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
 * The request would cause you to exceed the allowed number of subnet groups.
 *
 * @public
 */
export class DBSubnetGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSubnetGroupQuotaExceededFault";
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
 * The request would cause you to exceed the allowed number of subnets in a subnet group.
 *
 * @public
 */
export class DBSubnetQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSubnetQuotaExceededFault";
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
  public static readonly shapeId: string = "com.amazonaws.docdb#EventSubscriptionQuotaExceededFault";
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
 * Amazon SNS has responded that there is a problem with the specified topic.
 *
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SNSInvalidTopicFault";
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
 * You do not have permission to publish to the SNS topic Amazon Resource Name (ARN).
 *
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SNSNoAuthorizationFault";
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
 * The SNS topic Amazon Resource Name (ARN) does not exist.
 *
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SNSTopicArnNotFoundFault";
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
 * The provided subscription name already exists.
 *
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SubscriptionAlreadyExistFault";
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
 * The provided category does not exist.
 *
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SubscriptionCategoryNotFoundFault";
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
 * The `GlobalClusterIdentifier` already exists. Choose a new global cluster identifier (unique name) to create a new global cluster.
 *
 * @public
 */
export class GlobalClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#GlobalClusterAlreadyExistsFault";
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
 * The number of global clusters for this account is already at the maximum allowed.
 *
 * @public
 */
export class GlobalClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#GlobalClusterQuotaExceededFault";
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
 * The parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.
 *
 * @public
 */
export class InvalidDBParameterGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBParameterGroupStateFault";
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
 * `DBSnapshotIdentifier` is already being used by an existing snapshot.
 *
 * @public
 */
export class DBSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBSnapshotAlreadyExistsFault";
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
 * The subnet isn't in the *available* state.
 *
 * @public
 */
export class InvalidDBSubnetStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBSubnetStateFault";
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
 * Someone else might be modifying a subscription. Wait a few seconds, and try again.
 *
 * @public
 */
export class InvalidEventSubscriptionStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidEventSubscriptionStateFault";
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
 * `CertificateIdentifier` doesn't refer to an existing certificate.
 *
 * @public
 */
export class CertificateNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#CertificateNotFoundFault";
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
 * The state of the security group doesn't allow deletion.
 *
 * @public
 */
export class InvalidDBSecurityGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBSecurityGroupStateFault";
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
  public static readonly shapeId: string = "com.amazonaws.docdb#SharedSnapshotQuotaExceededFault";
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
 * The upgrade failed because a resource that the depends on can't be modified.
 *
 * @public
 */
export class DBUpgradeDependencyFailureFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#DBUpgradeDependencyFailureFault";
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
 * The subnet is already in use in the Availability Zone.
 *
 * @public
 */
export class SubnetAlreadyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#SubnetAlreadyInUse";
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
 * The cluster doesn't have enough capacity for the current operation.
 *
 * @public
 */
export class InsufficientDBClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InsufficientDBClusterCapacityFault";
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
 * The state of the snapshot doesn't allow deletion.
 *
 * @public
 */
export class InvalidDBSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidDBSnapshotStateFault";
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
 * You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB instance.
 *
 * @public
 */
export class InvalidRestoreFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.docdb#InvalidRestoreFault";
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
