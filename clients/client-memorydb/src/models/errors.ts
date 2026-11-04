// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { MemoryDBServiceException as __BaseException } from "./MemoryDBServiceException";

/**
 * An ACL with the specified name already exists.
 *
 * @public
 */
export class ACLAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ACLAlreadyExistsFault";
  readonly name = "ACLAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLAlreadyExistsFault, __BaseException>) {
    super({
      name: "ACLAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLAlreadyExistsFault.prototype);
  }
}

/**
 * The specified ACL does not exist.
 *
 * @public
 */
export class ACLNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ACLNotFoundFault";
  readonly name = "ACLNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLNotFoundFault, __BaseException>) {
    super({
      name: "ACLNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLNotFoundFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of ACLs allowed.
 *
 * @public
 */
export class ACLQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ACLQuotaExceededFault";
  readonly name = "ACLQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ACLQuotaExceededFault, __BaseException>) {
    super({
      name: "ACLQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ACLQuotaExceededFault.prototype);
  }
}

/**
 * The specified parameter value is not valid.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidParameterValueException";
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
 * The specified service update does not exist.
 *
 * @public
 */
export class ServiceUpdateNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ServiceUpdateNotFoundFault";
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
 * The specified parameter combination is not valid.
 *
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidParameterCombinationException";
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
 * The snapshot is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidSnapshotStateFault";
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
 * The required service-linked role was not found.
 *
 * @public
 */
export class ServiceLinkedRoleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ServiceLinkedRoleNotFoundFault";
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
 * A snapshot with the specified name already exists.
 *
 * @public
 */
export class SnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SnapshotAlreadyExistsFault";
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
 * The specified snapshot does not exist.
 *
 * @public
 */
export class SnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SnapshotNotFoundFault";
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
 * The request cannot be processed because it would exceed the maximum number of snapshots allowed.
 *
 * @public
 */
export class SnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SnapshotQuotaExceededFault";
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
 * The request cannot be processed because it would exceed the maximum number of tags allowed per resource.
 *
 * @public
 */
export class TagQuotaPerResourceExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#TagQuotaPerResourceExceeded";
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
 * A default user is required and must be specified.
 *
 * @public
 */
export class DefaultUserRequired extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#DefaultUserRequired";
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
 * A user with the specified name already exists.
 *
 * @public
 */
export class DuplicateUserNameFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#DuplicateUserNameFault";
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
 * The specified user does not exist.
 *
 * @public
 */
export class UserNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#UserNotFoundFault";
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
 * A cluster with the specified name already exists.
 *
 * @public
 */
export class ClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ClusterAlreadyExistsFault";
  readonly name = "ClusterAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterAlreadyExistsFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of clusters allowed for this customer.
 *
 * @public
 */
export class ClusterQuotaForCustomerExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ClusterQuotaForCustomerExceededFault";
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
 * The cluster does not have sufficient capacity to perform the requested operation.
 *
 * @public
 */
export class InsufficientClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InsufficientClusterCapacityFault";
  readonly name = "InsufficientClusterCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientClusterCapacityFault, __BaseException>) {
    super({
      name: "InsufficientClusterCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientClusterCapacityFault.prototype);
  }
}

/**
 * The ACL is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidACLStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidACLStateFault";
  readonly name = "InvalidACLStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidACLStateFault, __BaseException>) {
    super({
      name: "InvalidACLStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidACLStateFault.prototype);
  }
}

/**
 * The provided credentials are not valid.
 *
 * @public
 */
export class InvalidCredentialsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidCredentialsException";
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
 * The requested operation cannot be performed on the multi-Region cluster in its current state.
 *
 * @public
 */
export class InvalidMultiRegionClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidMultiRegionClusterStateFault";
  readonly name = "InvalidMultiRegionClusterStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMultiRegionClusterStateFault, __BaseException>) {
    super({
      name: "InvalidMultiRegionClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMultiRegionClusterStateFault.prototype);
  }
}

/**
 * The VPC network is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidVPCNetworkStateFault";
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
 * The specified multi-Region cluster does not exist.
 *
 * @public
 */
export class MultiRegionClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#MultiRegionClusterNotFoundFault";
  readonly name = "MultiRegionClusterNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultiRegionClusterNotFoundFault, __BaseException>) {
    super({
      name: "MultiRegionClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultiRegionClusterNotFoundFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of nodes allowed for this cluster.
 *
 * @public
 */
export class NodeQuotaForClusterExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#NodeQuotaForClusterExceededFault";
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
 * The request cannot be processed because it would exceed the maximum number of nodes allowed for this customer.
 *
 * @public
 */
export class NodeQuotaForCustomerExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#NodeQuotaForCustomerExceededFault";
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
 * The specified parameter group does not exist.
 *
 * @public
 */
export class ParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ParameterGroupNotFoundFault";
  readonly name = "ParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "ParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupNotFoundFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of shards allowed per cluster.
 *
 * @public
 */
export class ShardsPerClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ShardsPerClusterQuotaExceededFault";
  readonly name = "ShardsPerClusterQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShardsPerClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "ShardsPerClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShardsPerClusterQuotaExceededFault.prototype);
  }
}

/**
 * The specified subnet group does not exist.
 *
 * @public
 */
export class SubnetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetGroupNotFoundFault";
  readonly name = "SubnetGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "SubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupNotFoundFault.prototype);
  }
}

/**
 * A multi-Region cluster with the specified name already exists.
 *
 * @public
 */
export class MultiRegionClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#MultiRegionClusterAlreadyExistsFault";
  readonly name = "MultiRegionClusterAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultiRegionClusterAlreadyExistsFault, __BaseException>) {
    super({
      name: "MultiRegionClusterAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultiRegionClusterAlreadyExistsFault.prototype);
  }
}

/**
 * The specified multi-Region parameter group does not exist.
 *
 * @public
 */
export class MultiRegionParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#MultiRegionParameterGroupNotFoundFault";
  readonly name = "MultiRegionParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultiRegionParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "MultiRegionParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultiRegionParameterGroupNotFoundFault.prototype);
  }
}

/**
 * The parameter group is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidParameterGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidParameterGroupStateFault";
  readonly name = "InvalidParameterGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterGroupStateFault.prototype);
  }
}

/**
 * A parameter group with the specified name already exists.
 *
 * @public
 */
export class ParameterGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ParameterGroupAlreadyExistsFault";
  readonly name = "ParameterGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of parameter groups allowed.
 *
 * @public
 */
export class ParameterGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ParameterGroupQuotaExceededFault";
  readonly name = "ParameterGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * The specified cluster does not exist.
 *
 * @public
 */
export class ClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ClusterNotFoundFault";
  readonly name = "ClusterNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundFault, __BaseException>) {
    super({
      name: "ClusterNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundFault.prototype);
  }
}

/**
 * The cluster is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidClusterStateFault";
  readonly name = "InvalidClusterStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterStateFault, __BaseException>) {
    super({
      name: "InvalidClusterStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterStateFault.prototype);
  }
}

/**
 * The specified subnet is not valid.
 *
 * @public
 */
export class InvalidSubnet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidSubnet";
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
 * A subnet group with the specified name already exists.
 *
 * @public
 */
export class SubnetGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetGroupAlreadyExistsFault";
  readonly name = "SubnetGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "SubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the maximum number of subnet groups allowed.
 *
 * @public
 */
export class SubnetGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetGroupQuotaExceededFault";
  readonly name = "SubnetGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * The specified subnet is not allowed for this operation.
 *
 * @public
 */
export class SubnetNotAllowedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetNotAllowedFault";
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
 * The request cannot be processed because it would exceed the maximum number of subnets allowed.
 *
 * @public
 */
export class SubnetQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetQuotaExceededFault";
  readonly name = "SubnetQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "SubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetQuotaExceededFault.prototype);
  }
}

/**
 * A user with the specified name already exists.
 *
 * @public
 */
export class UserAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#UserAlreadyExistsFault";
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
 * The request cannot be processed because it would exceed the maximum number of users allowed.
 *
 * @public
 */
export class UserQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#UserQuotaExceededFault";
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
 * The subnet group is currently in use and cannot be deleted.
 *
 * @public
 */
export class SubnetGroupInUseFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetGroupInUseFault";
  readonly name = "SubnetGroupInUseFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetGroupInUseFault, __BaseException>) {
    super({
      name: "SubnetGroupInUseFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetGroupInUseFault.prototype);
  }
}

/**
 * The user is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidUserStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidUserStateFault";
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
 * The requested node does not exist.
 *
 * @public
 */
export class ReservedNodeNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ReservedNodeNotFoundFault";
  readonly name = "ReservedNodeNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeNotFoundFault.prototype);
  }
}

/**
 * The requested node offering does not exist.
 *
 * @public
 */
export class ReservedNodesOfferingNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ReservedNodesOfferingNotFoundFault";
  readonly name = "ReservedNodesOfferingNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodesOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodesOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodesOfferingNotFoundFault.prototype);
  }
}

/**
 * The customer has exceeded the maximum number of API requests allowed per time period.
 *
 * @public
 */
export class APICallRateForCustomerExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#APICallRateForCustomerExceededFault";
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
 * The specified KMS key is not valid or accessible.
 *
 * @public
 */
export class InvalidKMSKeyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidKMSKeyFault";
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
 * The specified shard does not exist.
 *
 * @public
 */
export class ShardNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ShardNotFoundFault";
  readonly name = "ShardNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShardNotFoundFault, __BaseException>) {
    super({
      name: "ShardNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShardNotFoundFault.prototype);
  }
}

/**
 * Test failover is not available for this cluster configuration.
 *
 * @public
 */
export class TestFailoverNotAvailableFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#TestFailoverNotAvailableFault";
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

/**
 * The specified Amazon Resource Name (ARN) is not valid.
 *
 * @public
 */
export class InvalidARNFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidARNFault";
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
 * You already have a reservation with the given identifier.
 *
 * @public
 */
export class ReservedNodeAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ReservedNodeAlreadyExistsFault";
  readonly name = "ReservedNodeAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeAlreadyExistsFault, __BaseException>) {
    super({
      name: "ReservedNodeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeAlreadyExistsFault.prototype);
  }
}

/**
 * The request cannot be processed because it would exceed the user's node quota.
 *
 * @public
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#ReservedNodeQuotaExceededFault";
  readonly name = "ReservedNodeQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeQuotaExceededFault.prototype);
  }
}

/**
 * The specified tag does not exist.
 *
 * @public
 */
export class TagNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#TagNotFoundFault";
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
 * The node is not in a valid state for the requested operation.
 *
 * @public
 */
export class InvalidNodeStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#InvalidNodeStateFault";
  readonly name = "InvalidNodeStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNodeStateFault, __BaseException>) {
    super({
      name: "InvalidNodeStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNodeStateFault.prototype);
  }
}

/**
 * The requested operation would result in no changes.
 *
 * @public
 */
export class NoOperationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#NoOperationFault";
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
 * The subnet is currently in use and cannot be deleted.
 *
 * @public
 */
export class SubnetInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.memorydb#SubnetInUse";
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
