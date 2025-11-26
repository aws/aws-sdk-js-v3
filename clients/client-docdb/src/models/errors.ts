// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocDBServiceException as __BaseException } from "./DocDBServiceException";

/**
 * <p>The requested source could not be found. </p>
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
 * <p>The subscription name does not exist. </p>
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
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
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
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
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
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing snapshot. </p>
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
 * <p>The cluster isn't in a valid state.</p>
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
 * <p> The specified instance isn't in the <i>available</i> state.
 *         </p>
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
 * <p>A parameter group with the same name already exists.</p>
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
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
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
 * <p>This request would cause you to exceed the allowed number of parameter groups.</p>
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
 * <p>You already have a cluster snapshot with the given identifier.</p>
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
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing cluster snapshot. </p>
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
 * <p>The provided value isn't a valid cluster snapshot state.</p>
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
 * <p>An error occurred when accessing an KMS key.</p>
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
 * <p>The request would cause you to exceed the allowed number of snapshots.</p>
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
 * <p>You already have a cluster with the given identifier.</p>
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
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing cluster parameter group. </p>
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
 * <p>The cluster can't be created because you have reached the maximum allowed quota of clusters.</p>
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
 * <p>Subnets in the subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
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
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing subnet group. </p>
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
 * <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
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
 * <p>There is not enough storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available. </p>
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
 * <p>The subnet group can't be deleted because it's in use.</p>
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
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
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
 * <p>The requested subnet is not valid, or multiple subnets were requested that are not all
 *             in a common virtual private cloud (VPC).</p>
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
 * <p>The subnet group doesn't cover all Availability Zones after it is created
 *             because of changes that were made.</p>
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
 * <p>The network type is not supported by either <code>DBSubnetGroup</code> or the DB engine version.</p>
 * @public
 */
export class NetworkTypeNotSupported extends __BaseException {
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
 * <p>The request would cause you to exceed the allowed amount of storage available across
 *             all instances.</p>
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
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified security group.</p>
 *          <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
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
 * <p>You already have a instance with the given identifier.</p>
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
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing security group. </p>
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
 * <p>The request would cause you to exceed the allowed number of instances.</p>
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
 * <p>The specified instance class isn't available in the specified Availability Zone.</p>
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
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB
 *             instance. </p>
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
 *             <code>DBSubnetGroupName</code> is already being used by an existing subnet group. </p>
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
 * <p>The request would cause you to exceed the allowed number of subnet groups.</p>
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
 * <p>The request would cause you to exceed the allowed number of subnets in a subnet group.</p>
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
 * <p>You have reached the maximum number of event subscriptions. </p>
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
 * <p>Amazon SNS has responded that there is a problem with the specified topic. </p>
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
 * <p>You do not have permission to publish to the SNS topic Amazon Resource Name (ARN). </p>
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
 * <p>The SNS topic Amazon Resource Name (ARN) does not exist. </p>
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
 * <p>The provided subscription name already exists. </p>
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
 * <p>The provided category does not exist. </p>
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
 * <p>The <code>GlobalClusterIdentifier</code> already exists. Choose a new global cluster identifier (unique name) to create a new global cluster. </p>
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
 * <p>The number of global  clusters for this account is already at the maximum allowed.</p>
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
 * <p>The parameter group is in use, or it is in a state that is not valid. If you are trying to delete the parameter group, you can't delete it when the parameter group is in this state.</p>
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
 *             <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
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
 * <p> The subnet isn't in the <i>available</i> state. </p>
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
 * <p>Someone else might be modifying a subscription. Wait a few seconds, and try
 *             again.</p>
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
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
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
 * <p>The state of the security group doesn't allow deletion.</p>
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
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB
 *             snapshot with. </p>
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
 * <p>The upgrade failed because a resource that the depends on can't be
 *             modified.</p>
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
 * <p>The subnet is already in use in the Availability Zone.</p>
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
 * <p>The cluster doesn't have enough capacity for the current operation.</p>
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
 * <p>The state of the snapshot doesn't allow deletion.</p>
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
 * <p>You cannot restore from a virtual private cloud (VPC) backup to a non-VPC DB
 *             instance.</p>
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
