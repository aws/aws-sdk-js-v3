// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElastiCacheServiceException as __BaseException } from "./ElastiCacheServiceException";

/**
 * <p>The requested cluster ID does not refer to an existing cluster.</p>
 * @public
 */
export class CacheClusterNotFoundFault extends __BaseException {
  readonly name = "CacheClusterNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheClusterNotFoundFault, __BaseException>) {
    super({
      name: "CacheClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheClusterNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache parameter group name does not refer to an existing cache parameter
 *             group.</p>
 * @public
 */
export class CacheParameterGroupNotFoundFault extends __BaseException {
  readonly name = "CacheParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 * @public
 */
export class CacheSecurityGroupNotFoundFault extends __BaseException {
  readonly name = "CacheSecurityGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 * @public
 */
export class CacheSubnetGroupNotFoundFault extends __BaseException {
  readonly name = "CacheSubnetGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 *             resource.</p>
 * @public
 */
export class InvalidARNFault extends __BaseException {
  readonly name = "InvalidARNFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidARNFault, __BaseException>) {
    super({
      name: "InvalidARNFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidARNFault.prototype);
  }
}

/**
 * <p>The requested replication group is not in the <code>available</code> state.</p>
 * @public
 */
export class InvalidReplicationGroupStateFault extends __BaseException {
  readonly name = "InvalidReplicationGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReplicationGroupStateFault, __BaseException>) {
    super({
      name: "InvalidReplicationGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReplicationGroupStateFault.prototype);
  }
}

/**
 * <p>The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class InvalidServerlessCacheSnapshotStateFault extends __BaseException {
  readonly name = "InvalidServerlessCacheSnapshotStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServerlessCacheSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidServerlessCacheSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServerlessCacheSnapshotStateFault.prototype);
  }
}

/**
 * <p>The account for these credentials is not currently active.</p>
 * @public
 */
export class InvalidServerlessCacheStateFault extends __BaseException {
  readonly name = "InvalidServerlessCacheStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServerlessCacheStateFault, __BaseException>) {
    super({
      name: "InvalidServerlessCacheStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServerlessCacheStateFault.prototype);
  }
}

/**
 * <p>The specified replication group does not exist.</p>
 * @public
 */
export class ReplicationGroupNotFoundFault extends __BaseException {
  readonly name = "ReplicationGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupNotFoundFault, __BaseException>) {
    super({
      name: "ReplicationGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested reserved cache node was not found.</p>
 * @public
 */
export class ReservedCacheNodeNotFoundFault extends __BaseException {
  readonly name = "ReservedCacheNodeNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeNotFoundFault.prototype);
  }
}

/**
 * <p>The serverless cache was not found or does not exist.</p>
 * @public
 */
export class ServerlessCacheNotFoundFault extends __BaseException {
  readonly name = "ServerlessCacheNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheNotFoundFault, __BaseException>) {
    super({
      name: "ServerlessCacheNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheNotFoundFault.prototype);
  }
}

/**
 * <p>This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotNotFoundFault extends __BaseException {
  readonly name = "ServerlessCacheSnapshotNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>The requested snapshot name does not refer to an existing snapshot.</p>
 * @public
 */
export class SnapshotNotFoundFault extends __BaseException {
  readonly name = "SnapshotNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotNotFoundFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 * @public
 */
export class TagQuotaPerResourceExceeded extends __BaseException {
  readonly name = "TagQuotaPerResourceExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagQuotaPerResourceExceeded, __BaseException>) {
    super({
      name: "TagQuotaPerResourceExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagQuotaPerResourceExceeded.prototype);
  }
}

/**
 * <p>The user group was not found or does not exist</p>
 * @public
 */
export class UserGroupNotFoundFault extends __BaseException {
  readonly name = "UserGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupNotFoundFault, __BaseException>) {
    super({
      name: "UserGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The user does not exist or could not be found.</p>
 * @public
 */
export class UserNotFoundFault extends __BaseException {
  readonly name = "UserNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundFault, __BaseException>) {
    super({
      name: "UserNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundFault.prototype);
  }
}

/**
 * <p>The specified Amazon EC2 security group is already authorized for the specified cache
 *             security group.</p>
 * @public
 */
export class AuthorizationAlreadyExistsFault extends __BaseException {
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
 * <p>The current state of the cache security group does not allow deletion.</p>
 * @public
 */
export class InvalidCacheSecurityGroupStateFault extends __BaseException {
  readonly name = "InvalidCacheSecurityGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidCacheSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheSecurityGroupStateFault.prototype);
  }
}

/**
 * <p>Two or more incompatible parameters were specified.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * <p>The value for a parameter is invalid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The service update doesn't exist</p>
 * @public
 */
export class ServiceUpdateNotFoundFault extends __BaseException {
  readonly name = "ServiceUpdateNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUpdateNotFoundFault, __BaseException>) {
    super({
      name: "ServiceUpdateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUpdateNotFoundFault.prototype);
  }
}

/**
 * <p>The designated replication group is not available for data migration.</p>
 * @public
 */
export class ReplicationGroupNotUnderMigrationFault extends __BaseException {
  readonly name = "ReplicationGroupNotUnderMigrationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupNotUnderMigrationFault, __BaseException>) {
    super({
      name: "ReplicationGroupNotUnderMigrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupNotUnderMigrationFault.prototype);
  }
}

/**
 * <p>A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotAlreadyExistsFault extends __BaseException {
  readonly name = "ServerlessCacheSnapshotAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @public
 */
export class ServerlessCacheSnapshotQuotaExceededFault extends __BaseException {
  readonly name = "ServerlessCacheSnapshotQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "ServerlessCacheSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheSnapshotQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 * @public
 */
export class ServiceLinkedRoleNotFoundFault extends __BaseException {
  readonly name = "ServiceLinkedRoleNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleNotFoundFault, __BaseException>) {
    super({
      name: "ServiceLinkedRoleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleNotFoundFault.prototype);
  }
}

/**
 * <p>The current state of the snapshot does not allow the requested operation to
 *             occur.</p>
 * @public
 */
export class InvalidSnapshotStateFault extends __BaseException {
  readonly name = "InvalidSnapshotStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnapshotStateFault.prototype);
  }
}

/**
 * <p>You already have a snapshot with the given name.</p>
 * @public
 */
export class SnapshotAlreadyExistsFault extends __BaseException {
  readonly name = "SnapshotAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of
 *             snapshots.</p>
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
export class CacheClusterAlreadyExistsFault extends __BaseException {
  readonly name = "CacheClusterAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheClusterAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of clusters
 *             per customer.</p>
 * @public
 */
export class ClusterQuotaForCustomerExceededFault extends __BaseException {
  readonly name = "ClusterQuotaForCustomerExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "ClusterQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * <p>The requested cache node type is not available in the specified Availability Zone. For
 *             more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY">InsufficientCacheClusterCapacity</a> in the ElastiCache User Guide.</p>
 * @public
 */
export class InsufficientCacheClusterCapacityFault extends __BaseException {
  readonly name = "InsufficientCacheClusterCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCacheClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientCacheClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCacheClusterCapacityFault.prototype);
  }
}

/**
 * <p>The VPC network is in an invalid state.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes in a single cluster.</p>
 * @public
 */
export class NodeQuotaForClusterExceededFault extends __BaseException {
  readonly name = "NodeQuotaForClusterExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForClusterExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForClusterExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForClusterExceededFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             nodes per customer.</p>
 * @public
 */
export class NodeQuotaForCustomerExceededFault extends __BaseException {
  readonly name = "NodeQuotaForCustomerExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "NodeQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * <p>A cache parameter group with the requested name already exists.</p>
 * @public
 */
export class CacheParameterGroupAlreadyExistsFault extends __BaseException {
  readonly name = "CacheParameterGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum number of cache
 *             security groups.</p>
 * @public
 */
export class CacheParameterGroupQuotaExceededFault extends __BaseException {
  readonly name = "CacheParameterGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The current state of the cache parameter group does not allow the requested operation
 *             to occur.</p>
 * @public
 */
export class InvalidCacheParameterGroupStateFault extends __BaseException {
  readonly name = "InvalidCacheParameterGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidCacheParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheParameterGroupStateFault.prototype);
  }
}

/**
 * <p>A cache security group with the specified name already exists.</p>
 * @public
 */
export class CacheSecurityGroupAlreadyExistsFault extends __BaseException {
  readonly name = "CacheSecurityGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             security groups.</p>
 * @public
 */
export class CacheSecurityGroupQuotaExceededFault extends __BaseException {
  readonly name = "CacheSecurityGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSecurityGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The requested cache subnet group name is already in use by an existing cache subnet
 *             group.</p>
 * @public
 */
export class CacheSubnetGroupAlreadyExistsFault extends __BaseException {
  readonly name = "CacheSubnetGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache
 *             subnet groups.</p>
 * @public
 */
export class CacheSubnetGroupQuotaExceededFault extends __BaseException {
  readonly name = "CacheSubnetGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the allowed number of subnets
 *             in a cache subnet group.</p>
 * @public
 */
export class CacheSubnetQuotaExceededFault extends __BaseException {
  readonly name = "CacheSubnetQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "CacheSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetQuotaExceededFault.prototype);
  }
}

/**
 * <p>An invalid subnet identifier was specified.</p>
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
 * <p>At least one subnet ID does not match the other subnet IDs. This mismatch typically
 *             occurs when a user sets one subnet ID to a regional Availability Zone and a different
 *             one to an outpost. Or when a user sets the subnet ID to an Outpost when not subscribed
 *             on this service.</p>
 * @public
 */
export class SubnetNotAllowedFault extends __BaseException {
  readonly name = "SubnetNotAllowedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotAllowedFault, __BaseException>) {
    super({
      name: "SubnetNotAllowedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotAllowedFault.prototype);
  }
}

/**
 * <p>The Global datastore name already exists.</p>
 * @public
 */
export class GlobalReplicationGroupAlreadyExistsFault extends __BaseException {
  readonly name = "GlobalReplicationGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalReplicationGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "GlobalReplicationGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalReplicationGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The Global datastore does not exist</p>
 * @public
 */
export class GlobalReplicationGroupNotFoundFault extends __BaseException {
  readonly name = "GlobalReplicationGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlobalReplicationGroupNotFoundFault, __BaseException>) {
    super({
      name: "GlobalReplicationGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlobalReplicationGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The requested cluster is not in the <code>available</code> state.</p>
 * @public
 */
export class InvalidCacheClusterStateFault extends __BaseException {
  readonly name = "InvalidCacheClusterStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCacheClusterStateFault, __BaseException>) {
    super({
      name: "InvalidCacheClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCacheClusterStateFault.prototype);
  }
}

/**
 * <p>The Global datastore is not available or in primary-only state.</p>
 * @public
 */
export class InvalidGlobalReplicationGroupStateFault extends __BaseException {
  readonly name = "InvalidGlobalReplicationGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGlobalReplicationGroupStateFault, __BaseException>) {
    super({
      name: "InvalidGlobalReplicationGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGlobalReplicationGroupStateFault.prototype);
  }
}

/**
 * <p>The user group is not in an active state.</p>
 * @public
 */
export class InvalidUserGroupStateFault extends __BaseException {
  readonly name = "InvalidUserGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserGroupStateFault, __BaseException>) {
    super({
      name: "InvalidUserGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserGroupStateFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the maximum allowed number of
 *             node groups (shards) in a single replication group. The default maximum is 90</p>
 * @public
 */
export class NodeGroupsPerReplicationGroupQuotaExceededFault extends __BaseException {
  readonly name = "NodeGroupsPerReplicationGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeGroupsPerReplicationGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "NodeGroupsPerReplicationGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeGroupsPerReplicationGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The specified replication group already exists.</p>
 * @public
 */
export class ReplicationGroupAlreadyExistsFault extends __BaseException {
  readonly name = "ReplicationGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReplicationGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You must enter valid credentials.</p>
 * @public
 */
export class InvalidCredentialsException extends __BaseException {
  readonly name = "InvalidCredentialsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCredentialsException, __BaseException>) {
    super({
      name: "InvalidCredentialsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCredentialsException.prototype);
  }
}

/**
 * <p>A serverless cache with this name already exists.</p>
 * @public
 */
export class ServerlessCacheAlreadyExistsFault extends __BaseException {
  readonly name = "ServerlessCacheAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheAlreadyExistsFault, __BaseException>) {
    super({
      name: "ServerlessCacheAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of serverless caches exceeds the customer quota.</p>
 * @public
 */
export class ServerlessCacheQuotaForCustomerExceededFault extends __BaseException {
  readonly name = "ServerlessCacheQuotaForCustomerExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerlessCacheQuotaForCustomerExceededFault, __BaseException>) {
    super({
      name: "ServerlessCacheQuotaForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerlessCacheQuotaForCustomerExceededFault.prototype);
  }
}

/**
 * <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Valkey or Redis OSS cluster running on a
 *                         <code>cache.t1.micro</code> cache node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than
 *                     Valkey or Redis OSS.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
 * @public
 */
export class SnapshotFeatureNotSupportedFault extends __BaseException {
  readonly name = "SnapshotFeatureNotSupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotFeatureNotSupportedFault, __BaseException>) {
    super({
      name: "SnapshotFeatureNotSupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotFeatureNotSupportedFault.prototype);
  }
}

/**
 * <p>A user with this username already exists.</p>
 * @public
 */
export class DuplicateUserNameFault extends __BaseException {
  readonly name = "DuplicateUserNameFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateUserNameFault, __BaseException>) {
    super({
      name: "DuplicateUserNameFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateUserNameFault.prototype);
  }
}

/**
 * <p>A user with this ID already exists.</p>
 * @public
 */
export class UserAlreadyExistsFault extends __BaseException {
  readonly name = "UserAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserAlreadyExistsFault, __BaseException>) {
    super({
      name: "UserAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The quota of users has been exceeded.</p>
 * @public
 */
export class UserQuotaExceededFault extends __BaseException {
  readonly name = "UserQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserQuotaExceededFault, __BaseException>) {
    super({
      name: "UserQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserQuotaExceededFault.prototype);
  }
}

/**
 * <p>You must add default user to a user group.</p>
 * @public
 */
export class DefaultUserRequired extends __BaseException {
  readonly name = "DefaultUserRequired" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUserRequired, __BaseException>) {
    super({
      name: "DefaultUserRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUserRequired.prototype);
  }
}

/**
 * <p>The user group with this ID already exists.</p>
 * @public
 */
export class UserGroupAlreadyExistsFault extends __BaseException {
  readonly name = "UserGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "UserGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The number of users exceeds the user group limit.</p>
 * @public
 */
export class UserGroupQuotaExceededFault extends __BaseException {
  readonly name = "UserGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "UserGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserGroupQuotaExceededFault.prototype);
  }
}

/**
 * <p>The operation was not performed because no changes were required.</p>
 * @public
 */
export class NoOperationFault extends __BaseException {
  readonly name = "NoOperationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoOperationFault, __BaseException>) {
    super({
      name: "NoOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoOperationFault.prototype);
  }
}

/**
 * <p>The requested cache subnet group is currently in use.</p>
 * @public
 */
export class CacheSubnetGroupInUse extends __BaseException {
  readonly name = "CacheSubnetGroupInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CacheSubnetGroupInUse, __BaseException>) {
    super({
      name: "CacheSubnetGroupInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CacheSubnetGroupInUse.prototype);
  }
}

/**
 * <p>The default user assigned to the user group.</p>
 * @public
 */
export class DefaultUserAssociatedToUserGroupFault extends __BaseException {
  readonly name = "DefaultUserAssociatedToUserGroupFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUserAssociatedToUserGroupFault, __BaseException>) {
    super({
      name: "DefaultUserAssociatedToUserGroupFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUserAssociatedToUserGroupFault.prototype);
  }
}

/**
 * <p>The user is not in active state.</p>
 * @public
 */
export class InvalidUserStateFault extends __BaseException {
  readonly name = "InvalidUserStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserStateFault, __BaseException>) {
    super({
      name: "InvalidUserStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserStateFault.prototype);
  }
}

/**
 * <p>The requested cache node offering does not exist.</p>
 * @public
 */
export class ReservedCacheNodesOfferingNotFoundFault extends __BaseException {
  readonly name = "ReservedCacheNodesOfferingNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedCacheNodesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodesOfferingNotFoundFault.prototype);
  }
}

/**
 * <p>The KMS key supplied is not valid.</p>
 * @public
 */
export class InvalidKMSKeyFault extends __BaseException {
  readonly name = "InvalidKMSKeyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKMSKeyFault, __BaseException>) {
    super({
      name: "InvalidKMSKeyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKMSKeyFault.prototype);
  }
}

/**
 * <p>The requested subnet is being used by another cache subnet group.</p>
 * @public
 */
export class SubnetInUse extends __BaseException {
  readonly name = "SubnetInUse" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetInUse, __BaseException>) {
    super({
      name: "SubnetInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetInUse.prototype);
  }
}

/**
 * <p>You already have a reservation with the given identifier.</p>
 * @public
 */
export class ReservedCacheNodeAlreadyExistsFault extends __BaseException {
  readonly name = "ReservedCacheNodeAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeAlreadyExistsFault.prototype);
  }
}

/**
 * <p>The request cannot be processed because it would exceed the user's cache node
 *             quota.</p>
 * @public
 */
export class ReservedCacheNodeQuotaExceededFault extends __BaseException {
  readonly name = "ReservedCacheNodeQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedCacheNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedCacheNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedCacheNodeQuotaExceededFault.prototype);
  }
}

/**
 * <p>The requested tag was not found on this resource.</p>
 * @public
 */
export class TagNotFoundFault extends __BaseException {
  readonly name = "TagNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagNotFoundFault, __BaseException>) {
    super({
      name: "TagNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagNotFoundFault.prototype);
  }
}

/**
 * <p>The specified Amazon EC2 security group is not authorized for the specified cache
 *             security group.</p>
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
 * <p>The targeted replication group is not available. </p>
 * @public
 */
export class ReplicationGroupAlreadyUnderMigrationFault extends __BaseException {
  readonly name = "ReplicationGroupAlreadyUnderMigrationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupAlreadyUnderMigrationFault, __BaseException>) {
    super({
      name: "ReplicationGroupAlreadyUnderMigrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupAlreadyUnderMigrationFault.prototype);
  }
}

/**
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 * @public
 */
export class APICallRateForCustomerExceededFault extends __BaseException {
  readonly name = "APICallRateForCustomerExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<APICallRateForCustomerExceededFault, __BaseException>) {
    super({
      name: "APICallRateForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, APICallRateForCustomerExceededFault.prototype);
  }
}

/**
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the
 *                 <code>NodeGroupId</code> value correctly.</p>
 * @public
 */
export class NodeGroupNotFoundFault extends __BaseException {
  readonly name = "NodeGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeGroupNotFoundFault, __BaseException>) {
    super({
      name: "NodeGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeGroupNotFoundFault.prototype);
  }
}

/**
 * <p>The <code>TestFailover</code> action is not available.</p>
 * @public
 */
export class TestFailoverNotAvailableFault extends __BaseException {
  readonly name = "TestFailoverNotAvailableFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TestFailoverNotAvailableFault, __BaseException>) {
    super({
      name: "TestFailoverNotAvailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TestFailoverNotAvailableFault.prototype);
  }
}
