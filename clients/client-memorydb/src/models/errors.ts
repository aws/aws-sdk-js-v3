// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MemoryDBServiceException as __BaseException } from "./MemoryDBServiceException";

/**
 * <p>An ACL with the specified name already exists.</p>
 * @public
 */
export class ACLAlreadyExistsFault extends __BaseException {
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
 * <p>The specified ACL does not exist.</p>
 * @public
 */
export class ACLNotFoundFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of ACLs allowed.</p>
 * @public
 */
export class ACLQuotaExceededFault extends __BaseException {
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
 * <p>The specified parameter value is not valid.</p>
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
 * <p>The specified service update does not exist.</p>
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
 * <p>The specified parameter combination is not valid.</p>
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
 * <p>The snapshot is not in a valid state for the requested operation.</p>
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
 * <p>The required service-linked role was not found.</p>
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
 * <p>A snapshot with the specified name already exists.</p>
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
 * <p>The specified snapshot does not exist.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of snapshots allowed.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of tags allowed per resource.</p>
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
 * <p>A default user is required and must be specified.</p>
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
 * <p>A user with the specified name already exists.</p>
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
 * <p>The specified user does not exist.</p>
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
 * <p>A cluster with the specified name already exists.</p>
 * @public
 */
export class ClusterAlreadyExistsFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of clusters allowed for this customer.</p>
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
 * <p>The cluster does not have sufficient capacity to perform the requested operation.</p>
 * @public
 */
export class InsufficientClusterCapacityFault extends __BaseException {
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
 * <p>The ACL is not in a valid state for the requested operation.</p>
 * @public
 */
export class InvalidACLStateFault extends __BaseException {
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
 * <p>The provided credentials are not valid.</p>
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
 * <p>The requested operation cannot be performed on the multi-Region cluster in its current state.</p>
 * @public
 */
export class InvalidMultiRegionClusterStateFault extends __BaseException {
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
 * <p>The VPC network is not in a valid state for the requested operation.</p>
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
 * <p>The specified multi-Region cluster does not exist.</p>
 * @public
 */
export class MultiRegionClusterNotFoundFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of nodes allowed for this cluster.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of nodes allowed for this customer.</p>
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
 * <p>The specified parameter group does not exist.</p>
 * @public
 */
export class ParameterGroupNotFoundFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of shards allowed per cluster.</p>
 * @public
 */
export class ShardsPerClusterQuotaExceededFault extends __BaseException {
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
 * <p>The specified subnet group does not exist.</p>
 * @public
 */
export class SubnetGroupNotFoundFault extends __BaseException {
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
 * <p>A multi-Region cluster with the specified name already exists.</p>
 * @public
 */
export class MultiRegionClusterAlreadyExistsFault extends __BaseException {
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
 * <p>The specified multi-Region parameter group does not exist.</p>
 * @public
 */
export class MultiRegionParameterGroupNotFoundFault extends __BaseException {
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
 * <p>The parameter group is not in a valid state for the requested operation.</p>
 * @public
 */
export class InvalidParameterGroupStateFault extends __BaseException {
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
 * <p>A parameter group with the specified name already exists.</p>
 * @public
 */
export class ParameterGroupAlreadyExistsFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of parameter groups allowed.</p>
 * @public
 */
export class ParameterGroupQuotaExceededFault extends __BaseException {
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
 * <p>The specified cluster does not exist.</p>
 * @public
 */
export class ClusterNotFoundFault extends __BaseException {
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
 * <p>The cluster is not in a valid state for the requested operation.</p>
 * @public
 */
export class InvalidClusterStateFault extends __BaseException {
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
 * <p>The specified subnet is not valid.</p>
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
 * <p>A subnet group with the specified name already exists.</p>
 * @public
 */
export class SubnetGroupAlreadyExistsFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the maximum number of subnet groups allowed.</p>
 * @public
 */
export class SubnetGroupQuotaExceededFault extends __BaseException {
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
 * <p>The specified subnet is not allowed for this operation.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of subnets allowed.</p>
 * @public
 */
export class SubnetQuotaExceededFault extends __BaseException {
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
 * <p>A user with the specified name already exists.</p>
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
 * <p>The request cannot be processed because it would exceed the maximum number of users allowed.</p>
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
 * <p>The subnet group is currently in use and cannot be deleted.</p>
 * @public
 */
export class SubnetGroupInUseFault extends __BaseException {
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
 * <p>The user is not in a valid state for the requested operation.</p>
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
 * <p>The requested node does not exist.</p>
 * @public
 */
export class ReservedNodeNotFoundFault extends __BaseException {
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
 * <p>The requested node offering does not exist.
 *
 *       </p>
 * @public
 */
export class ReservedNodesOfferingNotFoundFault extends __BaseException {
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
 * <p>The customer has exceeded the maximum number of API requests allowed per time period.</p>
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
 * <p>The specified KMS key is not valid or accessible.</p>
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
 * <p>The specified shard does not exist.</p>
 * @public
 */
export class ShardNotFoundFault extends __BaseException {
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
 * <p>Test failover is not available for this cluster configuration.</p>
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

/**
 * <p>The specified Amazon Resource Name (ARN) is not valid.</p>
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
 * <p>You already have a reservation with the given identifier.</p>
 * @public
 */
export class ReservedNodeAlreadyExistsFault extends __BaseException {
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
 * <p>The request cannot be processed because it would exceed the user's node quota.</p>
 * @public
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
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
 * <p>The specified tag does not exist.</p>
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
 * <p>The node is not in a valid state for the requested operation.</p>
 * @public
 */
export class InvalidNodeStateFault extends __BaseException {
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
 * <p>The requested operation would result in no changes.</p>
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
 * <p>The subnet is currently in use and cannot be deleted.</p>
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
