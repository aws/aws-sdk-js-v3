// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DAXServiceException as __BaseException } from "./DAXServiceException";

/**
 * <p>You already have a DAX cluster with the given identifier.</p>
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
 * <p>You have attempted to exceed the maximum number of DAX clusters for
 *             your Amazon Web Services account.</p>
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
 * <p>There are not enough system resources to create the cluster you requested (or to
 *             resize an already-existing cluster). </p>
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
 * <p>The requested DAX cluster is not in the
 *                 <i>available</i> state.</p>
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
 * <p>One or more parameters in a parameter group are in an invalid state.</p>
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
 * <p>You have attempted to exceed the maximum number of nodes for a DAX
 *             cluster.</p>
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
 * <p>You have attempted to exceed the maximum number of nodes for your Amazon Web Services account.</p>
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
 * <p>You have reached the maximum number of x509 certificates that can be created for
 *             encrypted clusters in a 30 day period. Contact Amazon Web Services customer support to
 *             discuss options for continuing to create encrypted clusters.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
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
 * <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
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
 * <p>The specified parameter group already exists.</p>
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
 * <p>You have attempted to exceed the maximum number of parameter groups.</p>
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
 * <p>The specified subnet group already exists.</p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
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
 * <p>The specified subnet can't be used for the requested network type. This error
 *             occurs when either there aren't enough subnets of the required network type to create
 *             the cluster, or when you try to use a subnet that doesn't support the requested network
 *             type (for example, trying to create a dual-stack cluster with a subnet that doesn't have
 *             IPv6 CIDR). </p>
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
 * <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
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
 * <p>The requested cluster ID does not refer to an existing DAX
 *             cluster.</p>
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
 * <p>None of the nodes in the cluster have the given node ID.</p>
 * @public
 */
export class NodeNotFoundFault extends __BaseException {
  readonly name = "NodeNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeNotFoundFault, __BaseException>) {
    super({
      name: "NodeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeNotFoundFault.prototype);
  }
}

/**
 * <p>The specified subnet group is currently in use.</p>
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
 * <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
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
 * <p>The tag does not exist.</p>
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
 * <p>The requested subnet is being used by another subnet group.</p>
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
