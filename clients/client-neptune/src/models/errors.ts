// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { NeptuneServiceException as __BaseException } from "./NeptuneServiceException";

/**
 * <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 * @public
 */
export class DBClusterNotFoundFault extends __BaseException {
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
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 * @public
 */
export class DBClusterRoleAlreadyExistsFault extends __BaseException {
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
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 * @public
 */
export class DBClusterRoleQuotaExceededFault extends __BaseException {
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
 * <p>The DB cluster is not in a valid state.</p>
 * @public
 */
export class InvalidDBClusterStateFault extends __BaseException {
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
 * <p>The source could not be found.</p>
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
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
 * <p>The designated subscription could not be found.</p>
 * @public
 */
export class SubscriptionNotFoundFault extends __BaseException {
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
 * <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 * @public
 */
export class DBInstanceNotFoundFault extends __BaseException {
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
 * <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
 * @public
 */
export class DBSnapshotNotFoundFault extends __BaseException {
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
 * <p>The specified resource ID was not found.</p>
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
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
 * <p>A DB parameter group with the same name exists.</p>
 * @public
 */
export class DBParameterGroupAlreadyExistsFault extends __BaseException {
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
 * <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 * @public
 */
export class DBParameterGroupNotFoundFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
 * @public
 */
export class DBParameterGroupQuotaExceededFault extends __BaseException {
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
 * <p>User already has a DB cluster snapshot with the given identifier.</p>
 * @public
 */
export class DBClusterSnapshotAlreadyExistsFault extends __BaseException {
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
 * <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 * @public
 */
export class DBClusterSnapshotNotFoundFault extends __BaseException {
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
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
 * @public
 */
export class InvalidDBClusterSnapshotStateFault extends __BaseException {
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
 * <p>Error accessing KMS key.</p>
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
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
 * <p>User already has a DB cluster with the given identifier.</p>
 * @public
 */
export class DBClusterAlreadyExistsFault extends __BaseException {
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
 * <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
 * @public
 */
export class DBClusterParameterGroupNotFoundFault extends __BaseException {
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
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 * @public
 */
export class DBClusterQuotaExceededFault extends __BaseException {
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
 * <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
 * @public
 */
export class DBSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
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
 * <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 * @public
 */
export class DBSubnetGroupNotFoundFault extends __BaseException {
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
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 * @public
 */
export class GlobalClusterNotFoundFault extends __BaseException {
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
 * <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
 * @public
 */
export class InsufficientStorageClusterCapacityFault extends __BaseException {
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
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
 * @public
 */
export class InvalidDBInstanceStateFault extends __BaseException {
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
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
 * @public
 */
export class InvalidDBSubnetGroupStateFault extends __BaseException {
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
 * <p>The global cluster is in an invalid state and can't perform the requested operation. </p>
 * @public
 */
export class InvalidGlobalClusterStateFault extends __BaseException {
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
 * <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 * @public
 */
export class InvalidSubnet extends __BaseException {
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
 * <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
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
 * <p>The specified custom endpoint cannot be created because it already exists.</p>
 * @public
 */
export class DBClusterEndpointAlreadyExistsFault extends __BaseException {
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
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 * @public
 */
export class DBClusterEndpointQuotaExceededFault extends __BaseException {
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
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p>
 *          <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
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
 * <p>User already has a DB instance with the given identifier.</p>
 * @public
 */
export class DBInstanceAlreadyExistsFault extends __BaseException {
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
 * <p>
 *             <i>DBSecurityGroupName</i> does not refer
 *       to an existing DB security group.</p>
 * @public
 */
export class DBSecurityGroupNotFoundFault extends __BaseException {
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
 * <p>
 *             <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
 * @public
 */
export class DomainNotFoundFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed number of DB instances.</p>
 * @public
 */
export class InstanceQuotaExceededFault extends __BaseException {
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
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
 * @public
 */
export class InsufficientDBInstanceCapacityFault extends __BaseException {
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
 * <p>The designated option group could not be found.</p>
 * @public
 */
export class OptionGroupNotFoundFault extends __BaseException {
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
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 * @public
 */
export class ProvisionedIopsNotAvailableInAZFault extends __BaseException {
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
 * <p>
 *             <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
 * @public
 */
export class StorageTypeNotSupportedFault extends __BaseException {
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
 * <p>
 *             <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
 * @public
 */
export class DBSubnetGroupAlreadyExistsFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
 * @public
 */
export class DBSubnetGroupQuotaExceededFault extends __BaseException {
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
 * <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
 * @public
 */
export class DBSubnetQuotaExceededFault extends __BaseException {
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
 * <p>You have exceeded the number of events you can subscribe to.</p>
 * @public
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
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
 * <p>The SNS topic is invalid.</p>
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
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
 * <p>There is no SNS authorization.</p>
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
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
 * <p>The ARN of the SNS topic could not be found.</p>
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
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
 * <p>This subscription already exists.</p>
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
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
 * <p>The designated subscription category could not be found.</p>
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
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
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global database identifier (unique name) to create a new global database cluster.</p>
 * @public
 */
export class GlobalClusterAlreadyExistsFault extends __BaseException {
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
 * <p>The number of global database clusters for this account is already at the maximum allowed.</p>
 * @public
 */
export class GlobalClusterQuotaExceededFault extends __BaseException {
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
 * <p>The specified custom endpoint doesn't exist.</p>
 * @public
 */
export class DBClusterEndpointNotFoundFault extends __BaseException {
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
 * <p>The requested operation cannot be performed on the endpoint while the endpoint is in this state.</p>
 * @public
 */
export class InvalidDBClusterEndpointStateFault extends __BaseException {
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
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
 * @public
 */
export class InvalidDBParameterGroupStateFault extends __BaseException {
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
 * <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
 * @public
 */
export class DBSnapshotAlreadyExistsFault extends __BaseException {
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
 * <p>The DB subnet is not in the <i>available</i> state.</p>
 * @public
 */
export class InvalidDBSubnetStateFault extends __BaseException {
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
 * <p>The event subscription is in an invalid state.</p>
 * @public
 */
export class InvalidEventSubscriptionStateFault extends __BaseException {
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
 * <p>The state of the DB security group does not allow deletion.</p>
 * @public
 */
export class InvalidDBSecurityGroupStateFault extends __BaseException {
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
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 * @public
 */
export class SharedSnapshotQuotaExceededFault extends __BaseException {
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
 * <p>
 *             <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
 * @public
 */
export class CertificateNotFoundFault extends __BaseException {
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
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
 * @public
 */
export class DBUpgradeDependencyFailureFault extends __BaseException {
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
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 * @public
 */
export class SubnetAlreadyInUse extends __BaseException {
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
 * <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
 * @public
 */
export class DBClusterRoleNotFoundFault extends __BaseException {
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
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
 * @public
 */
export class InsufficientDBClusterCapacityFault extends __BaseException {
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
 * <p>The state of the DB snapshot does not allow deletion.</p>
 * @public
 */
export class InvalidDBSnapshotStateFault extends __BaseException {
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
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 * @public
 */
export class InvalidRestoreFault extends __BaseException {
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
