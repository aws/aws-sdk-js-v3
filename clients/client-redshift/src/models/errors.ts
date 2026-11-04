// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

/**
 * Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.
 *
 * @public
 */
export class DependentServiceUnavailableFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#DependentServiceUnavailableFault";
  readonly name = "DependentServiceUnavailableFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceUnavailableFault, __BaseException>) {
    super({
      name: "DependentServiceUnavailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceUnavailableFault.prototype);
  }
}

/**
 * Indicates that the Reserved Node being exchanged is not in an active state.
 *
 * @public
 */
export class InvalidReservedNodeStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidReservedNodeStateFault";
  readonly name = "InvalidReservedNodeStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReservedNodeStateFault, __BaseException>) {
    super({
      name: "InvalidReservedNodeStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReservedNodeStateFault.prototype);
  }
}

/**
 * User already has a reservation with the given identifier.
 *
 * @public
 */
export class ReservedNodeAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault";
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
 * Indicates that the reserved node has already been exchanged.
 *
 * @public
 */
export class ReservedNodeAlreadyMigratedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault";
  readonly name = "ReservedNodeAlreadyMigratedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeAlreadyMigratedFault, __BaseException>) {
    super({
      name: "ReservedNodeAlreadyMigratedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeAlreadyMigratedFault.prototype);
  }
}

/**
 * The specified reserved compute node not found.
 *
 * @public
 */
export class ReservedNodeNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeNotFoundFault";
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
 * Specified offering does not exist.
 *
 * @public
 */
export class ReservedNodeOfferingNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault";
  readonly name = "ReservedNodeOfferingNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeOfferingNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeOfferingNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeOfferingNotFoundFault.prototype);
  }
}

/**
 * The requested operation isn't supported.
 *
 * @public
 */
export class UnsupportedOperationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UnsupportedOperationFault";
  readonly name = "UnsupportedOperationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationFault, __BaseException>) {
    super({
      name: "UnsupportedOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationFault.prototype);
  }
}

/**
 * You are not authorized to access the cluster.
 *
 * @public
 */
export class AccessToClusterDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AccessToClusterDeniedFault";
  readonly name = "AccessToClusterDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessToClusterDeniedFault, __BaseException>) {
    super({
      name: "AccessToClusterDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessToClusterDeniedFault.prototype);
  }
}

/**
 * The owner of the specified snapshot has not authorized your account to access the snapshot.
 *
 * @public
 */
export class AccessToSnapshotDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AccessToSnapshotDeniedFault";
  readonly name = "AccessToSnapshotDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessToSnapshotDeniedFault, __BaseException>) {
    super({
      name: "AccessToSnapshotDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessToSnapshotDeniedFault.prototype);
  }
}

/**
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @public
 */
export class ClusterNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterNotFoundFault";
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
 * The name of the partner was not found.
 *
 * @public
 */
export class PartnerNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#PartnerNotFoundFault";
  readonly name = "PartnerNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PartnerNotFoundFault, __BaseException>) {
    super({
      name: "PartnerNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PartnerNotFoundFault.prototype);
  }
}

/**
 * The partner integration is not authorized.
 *
 * @public
 */
export class UnauthorizedPartnerIntegrationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault";
  readonly name = "UnauthorizedPartnerIntegrationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedPartnerIntegrationFault, __BaseException>) {
    super({
      name: "UnauthorizedPartnerIntegrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedPartnerIntegrationFault.prototype);
  }
}

/**
 * There is an error with the datashare.
 *
 * @public
 */
export class InvalidDataShareFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidDataShareFault";
  readonly name = "InvalidDataShareFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDataShareFault, __BaseException>) {
    super({
      name: "InvalidDataShareFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataShareFault.prototype);
  }
}

/**
 * The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.
 *
 * @public
 */
export class InvalidNamespaceFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidNamespaceFault";
  readonly name = "InvalidNamespaceFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNamespaceFault, __BaseException>) {
    super({
      name: "InvalidNamespaceFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNamespaceFault.prototype);
  }
}

/**
 * The authentication profile already exists.
 *
 * @public
 */
export class AuthenticationProfileAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthenticationProfileAlreadyExistsFault";
  readonly name = "AuthenticationProfileAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileAlreadyExistsFault, __BaseException>) {
    super({
      name: "AuthenticationProfileAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileAlreadyExistsFault.prototype);
  }
}

/**
 * The authentication profile can't be found.
 *
 * @public
 */
export class AuthenticationProfileNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthenticationProfileNotFoundFault";
  readonly name = "AuthenticationProfileNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileNotFoundFault, __BaseException>) {
    super({
      name: "AuthenticationProfileNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileNotFoundFault.prototype);
  }
}

/**
 * The size or number of authentication profiles has exceeded the quota. The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.
 *
 * @public
 */
export class AuthenticationProfileQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthenticationProfileQuotaExceededFault";
  readonly name = "AuthenticationProfileQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationProfileQuotaExceededFault, __BaseException>) {
    super({
      name: "AuthenticationProfileQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationProfileQuotaExceededFault.prototype);
  }
}

/**
 * The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.
 *
 * @public
 */
export class AuthorizationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthorizationAlreadyExistsFault";
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
 * The specified CIDR IP range or EC2 security group is not authorized for the specified cluster security group.
 *
 * @public
 */
export class AuthorizationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthorizationNotFoundFault";
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
 * The authorization quota for the cluster security group has been reached.
 *
 * @public
 */
export class AuthorizationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#AuthorizationQuotaExceededFault";
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
 * The cluster security group name does not refer to an existing cluster security group.
 *
 * @public
 */
export class ClusterSecurityGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault";
  readonly name = "ClusterSecurityGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupNotFoundFault.prototype);
  }
}

/**
 * The state of the cluster security group is not `available`.
 *
 * @public
 */
export class InvalidClusterSecurityGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault";
  readonly name = "InvalidClusterSecurityGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSecurityGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSecurityGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSecurityGroupStateFault.prototype);
  }
}

/**
 * The authorization already exists for this endpoint.
 *
 * @public
 */
export class EndpointAuthorizationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointAuthorizationAlreadyExistsFault";
  readonly name = "EndpointAuthorizationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationAlreadyExistsFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationAlreadyExistsFault.prototype);
  }
}

/**
 * The number of endpoint authorizations per cluster has exceeded its limit.
 *
 * @public
 */
export class EndpointAuthorizationsPerClusterLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointAuthorizationsPerClusterLimitExceededFault";
  readonly name = "EndpointAuthorizationsPerClusterLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationsPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationsPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationsPerClusterLimitExceededFault.prototype);
  }
}

/**
 * The status of the authorization is not valid.
 *
 * @public
 */
export class InvalidAuthorizationStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidAuthorizationStateFault";
  readonly name = "InvalidAuthorizationStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthorizationStateFault, __BaseException>) {
    super({
      name: "InvalidAuthorizationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthorizationStateFault.prototype);
  }
}

/**
 * The specified cluster is not in the `available` state.
 *
 * @public
 */
export class InvalidClusterStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterStateFault";
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
 * The snapshot identifier does not refer to an existing cluster snapshot.
 *
 * @public
 */
export class ClusterSnapshotNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSnapshotNotFoundFault";
  readonly name = "ClusterSnapshotNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSnapshotNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotNotFoundFault.prototype);
  }
}

/**
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
 *
 * @public
 */
export class DependentServiceRequestThrottlingFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#DependentServiceRequestThrottlingFault";
  readonly name = "DependentServiceRequestThrottlingFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceRequestThrottlingFault, __BaseException>) {
    super({
      name: "DependentServiceRequestThrottlingFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceRequestThrottlingFault.prototype);
  }
}

/**
 * The specified cluster snapshot is not in the `available` state, or other accounts are authorized to access the snapshot.
 *
 * @public
 */
export class InvalidClusterSnapshotStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterSnapshotStateFault";
  readonly name = "InvalidClusterSnapshotStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSnapshotStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSnapshotStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSnapshotStateFault.prototype);
  }
}

/**
 * The encryption key has exceeded its grant limit in Amazon Web Services KMS.
 *
 * @public
 */
export class LimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#LimitExceededFault";
  readonly name = "LimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

/**
 * The maximum number for a batch delete of snapshots has been reached. The limit is 100.
 *
 * @public
 */
export class BatchDeleteRequestSizeExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#BatchDeleteRequestSizeExceededFault";
  readonly name = "BatchDeleteRequestSizeExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchDeleteRequestSizeExceededFault, __BaseException>) {
    super({
      name: "BatchDeleteRequestSizeExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchDeleteRequestSizeExceededFault.prototype);
  }
}

/**
 * The maximum number for snapshot identifiers has been reached. The limit is 100.
 *
 * @public
 */
export class BatchModifyClusterSnapshotsLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#BatchModifyClusterSnapshotsLimitExceededFault";
  readonly name = "BatchModifyClusterSnapshotsLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchModifyClusterSnapshotsLimitExceededFault, __BaseException>) {
    super({
      name: "BatchModifyClusterSnapshotsLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchModifyClusterSnapshotsLimitExceededFault.prototype);
  }
}

/**
 * The retention period specified is either in the past or is not a valid value.
 *
 * The value must be either -1 or an integer between 1 and 3,653.
 *
 * @public
 */
export class InvalidRetentionPeriodFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidRetentionPeriodFault";
  readonly name = "InvalidRetentionPeriodFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRetentionPeriodFault, __BaseException>) {
    super({
      name: "InvalidRetentionPeriodFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRetentionPeriodFault.prototype);
  }
}

/**
 * Could not find the specified S3 bucket.
 *
 * @public
 */
export class BucketNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#BucketNotFoundFault";
  readonly name = "BucketNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketNotFoundFault, __BaseException>) {
    super({
      name: "BucketNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketNotFoundFault.prototype);
  }
}

/**
 * A resize operation for the specified cluster is not found.
 *
 * @public
 */
export class ResizeNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ResizeNotFoundFault";
  readonly name = "ResizeNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResizeNotFoundFault, __BaseException>) {
    super({
      name: "ResizeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResizeNotFoundFault.prototype);
  }
}

/**
 * The account already has a cluster with the given identifier.
 *
 * @public
 */
export class ClusterAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterAlreadyExistsFault";
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
 * Cluster is already on the latest database revision.
 *
 * @public
 */
export class ClusterOnLatestRevisionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterOnLatestRevisionFault";
  readonly name = "ClusterOnLatestRevisionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterOnLatestRevisionFault, __BaseException>) {
    super({
      name: "ClusterOnLatestRevisionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterOnLatestRevisionFault.prototype);
  }
}

/**
 * A cluster parameter group with the same name already exists.
 *
 * @public
 */
export class ClusterParameterGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterParameterGroupAlreadyExistsFault";
  readonly name = "ClusterParameterGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The parameter group name does not refer to an existing parameter group.
 *
 * @public
 */
export class ClusterParameterGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault";
  readonly name = "ClusterParameterGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupNotFoundFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of cluster parameter groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ClusterParameterGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault";
  readonly name = "ClusterParameterGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterParameterGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterParameterGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterParameterGroupQuotaExceededFault.prototype);
  }
}

/**
 * The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ClusterQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterQuotaExceededFault";
  readonly name = "ClusterQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterQuotaExceededFault.prototype);
  }
}

/**
 * A cluster security group with the same name already exists.
 *
 * @public
 */
export class ClusterSecurityGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSecurityGroupAlreadyExistsFault";
  readonly name = "ClusterSecurityGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of cluster security groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ClusterSecurityGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault";
  readonly name = "ClusterSecurityGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSecurityGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSecurityGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSecurityGroupQuotaExceededFault.prototype);
  }
}

/**
 * The value specified as a snapshot identifier is already used by an existing snapshot.
 *
 * @public
 */
export class ClusterSnapshotAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault";
  readonly name = "ClusterSnapshotAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSnapshotAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotAlreadyExistsFault.prototype);
  }
}

/**
 * The request would result in the user exceeding the allowed number of cluster snapshots.
 *
 * @public
 */
export class ClusterSnapshotQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault";
  readonly name = "ClusterSnapshotQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSnapshotQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSnapshotQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSnapshotQuotaExceededFault.prototype);
  }
}

/**
 * A *ClusterSubnetGroupName* is already used by an existing cluster subnet group.
 *
 * @public
 */
export class ClusterSubnetGroupAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSubnetGroupAlreadyExistsFault";
  readonly name = "ClusterSubnetGroupAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupAlreadyExistsFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupAlreadyExistsFault.prototype);
  }
}

/**
 * The cluster subnet group name does not refer to an existing cluster subnet group.
 *
 * @public
 */
export class ClusterSubnetGroupNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault";
  readonly name = "ClusterSubnetGroupNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupNotFoundFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupNotFoundFault.prototype);
  }
}

/**
 * The request would result in user exceeding the allowed number of cluster subnet groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ClusterSubnetGroupQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault";
  readonly name = "ClusterSubnetGroupQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetGroupQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSubnetGroupQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetGroupQuotaExceededFault.prototype);
  }
}

/**
 * The request would result in user exceeding the allowed number of subnets in a cluster subnet groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ClusterSubnetQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault";
  readonly name = "ClusterSubnetQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterSubnetQuotaExceededFault, __BaseException>) {
    super({
      name: "ClusterSubnetQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterSubnetQuotaExceededFault.prototype);
  }
}

/**
 * There is a conflict while updating the resource policy.
 *
 * @public
 */
export class ConflictPolicyUpdateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ConflictPolicyUpdateFault";
  readonly name = "ConflictPolicyUpdateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictPolicyUpdateFault, __BaseException>) {
    super({
      name: "ConflictPolicyUpdateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictPolicyUpdateFault.prototype);
  }
}

/**
 * Cross-region snapshot copy was temporarily disabled. Try your request again.
 *
 * @public
 */
export class CopyToRegionDisabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#CopyToRegionDisabledFault";
  readonly name = "CopyToRegionDisabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CopyToRegionDisabledFault, __BaseException>) {
    super({
      name: "CopyToRegionDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CopyToRegionDisabledFault.prototype);
  }
}

/**
 * The authentication profile request is not valid. The profile name can't be null or empty. The authentication profile API operation must be available in the Amazon Web Services Region.
 *
 * @public
 */
export class InvalidAuthenticationProfileRequestFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidAuthenticationProfileRequestFault";
  readonly name = "InvalidAuthenticationProfileRequestFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthenticationProfileRequestFault, __BaseException>) {
    super({
      name: "InvalidAuthenticationProfileRequestFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthenticationProfileRequestFault.prototype);
  }
}

/**
 * A dependent service denied access for the integration.
 *
 * @public
 */
export class DependentServiceAccessDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#DependentServiceAccessDeniedFault";
  readonly name = "DependentServiceAccessDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependentServiceAccessDeniedFault, __BaseException>) {
    super({
      name: "DependentServiceAccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependentServiceAccessDeniedFault.prototype);
  }
}

/**
 * There is no Amazon Redshift HSM client certificate with the specified identifier.
 *
 * @public
 */
export class HsmClientCertificateNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmClientCertificateNotFoundFault";
  readonly name = "HsmClientCertificateNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateNotFoundFault, __BaseException>) {
    super({
      name: "HsmClientCertificateNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateNotFoundFault.prototype);
  }
}

/**
 * There is no Amazon Redshift HSM configuration with the specified identifier.
 *
 * @public
 */
export class HsmConfigurationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmConfigurationNotFoundFault";
  readonly name = "HsmConfigurationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationNotFoundFault, __BaseException>) {
    super({
      name: "HsmConfigurationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationNotFoundFault.prototype);
  }
}

/**
 * The number of nodes specified exceeds the allotted capacity of the cluster.
 *
 * @public
 */
export class InsufficientClusterCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InsufficientClusterCapacityFault";
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
 * The cluster subnet group cannot be deleted because it is in use.
 *
 * @public
 */
export class InvalidClusterSubnetGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault";
  readonly name = "InvalidClusterSubnetGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSubnetGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSubnetGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSubnetGroupStateFault.prototype);
  }
}

/**
 * The provided cluster track name is not valid.
 *
 * @public
 */
export class InvalidClusterTrackFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterTrackFault";
  readonly name = "InvalidClusterTrackFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterTrackFault, __BaseException>) {
    super({
      name: "InvalidClusterTrackFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterTrackFault.prototype);
  }
}

/**
 * The Elastic IP (EIP) is invalid or cannot be found.
 *
 * @public
 */
export class InvalidElasticIpFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidElasticIpFault";
  readonly name = "InvalidElasticIpFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidElasticIpFault, __BaseException>) {
    super({
      name: "InvalidElasticIpFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidElasticIpFault.prototype);
  }
}

/**
 * The requested subnet is not valid, or not all of the subnets are in the same VPC.
 *
 * @public
 */
export class InvalidSubnet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidSubnet";
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
 * The tag is invalid.
 *
 * @public
 */
export class InvalidTagFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidTagFault";
  readonly name = "InvalidTagFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagFault, __BaseException>) {
    super({
      name: "InvalidTagFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagFault.prototype);
  }
}

/**
 * The cluster subnet group does not cover all Availability Zones.
 *
 * @public
 */
export class InvalidVPCNetworkStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidVPCNetworkStateFault";
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
 * There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode, associate an IPv6 CIDR block with each subnet in your VPC.
 *
 * @public
 */
export class Ipv6CidrBlockNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#Ipv6CidrBlockNotFoundFault";
  readonly name = "Ipv6CidrBlockNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Ipv6CidrBlockNotFoundFault, __BaseException>) {
    super({
      name: "Ipv6CidrBlockNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Ipv6CidrBlockNotFoundFault.prototype);
  }
}

/**
 * The operation would exceed the number of nodes allowed for a cluster.
 *
 * @public
 */
export class NumberOfNodesPerClusterLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault";
  readonly name = "NumberOfNodesPerClusterLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfNodesPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "NumberOfNodesPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfNodesPerClusterLimitExceededFault.prototype);
  }
}

/**
 * The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class NumberOfNodesQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault";
  readonly name = "NumberOfNodesQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfNodesQuotaExceededFault, __BaseException>) {
    super({
      name: "NumberOfNodesQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfNodesQuotaExceededFault.prototype);
  }
}

/**
 * The application you attempted to find doesn't exist.
 *
 * @public
 */
export class RedshiftIdcApplicationNotExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#RedshiftIdcApplicationNotExistsFault";
  readonly name = "RedshiftIdcApplicationNotExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationNotExistsFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationNotExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationNotExistsFault.prototype);
  }
}

/**
 * We could not find the specified snapshot schedule.
 *
 * @public
 */
export class SnapshotScheduleNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotScheduleNotFoundFault";
  readonly name = "SnapshotScheduleNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotScheduleNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleNotFoundFault.prototype);
  }
}

/**
 * You have exceeded the number of tags allowed.
 *
 * @public
 */
export class TagLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#TagLimitExceededFault";
  readonly name = "TagLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededFault, __BaseException>) {
    super({
      name: "TagLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededFault.prototype);
  }
}

/**
 * Your account is not authorized to perform the requested operation.
 *
 * @public
 */
export class UnauthorizedOperation extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UnauthorizedOperation";
  readonly name = "UnauthorizedOperation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperation, __BaseException>) {
    super({
      name: "UnauthorizedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperation.prototype);
  }
}

/**
 * An error occurred when an attempt was made to change the custom domain association.
 *
 * @public
 */
export class CustomCnameAssociationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#CustomCnameAssociationFault";
  readonly name = "CustomCnameAssociationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomCnameAssociationFault, __BaseException>) {
    super({
      name: "CustomCnameAssociationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomCnameAssociationFault.prototype);
  }
}

/**
 * The account already has a Redshift-managed VPC endpoint with the given identifier.
 *
 * @public
 */
export class EndpointAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointAlreadyExistsFault";
  readonly name = "EndpointAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAlreadyExistsFault, __BaseException>) {
    super({
      name: "EndpointAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAlreadyExistsFault.prototype);
  }
}

/**
 * The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.
 *
 * @public
 */
export class EndpointsPerAuthorizationLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault";
  readonly name = "EndpointsPerAuthorizationLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointsPerAuthorizationLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointsPerAuthorizationLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointsPerAuthorizationLimitExceededFault.prototype);
  }
}

/**
 * The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.
 *
 * @public
 */
export class EndpointsPerClusterLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault";
  readonly name = "EndpointsPerClusterLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointsPerClusterLimitExceededFault, __BaseException>) {
    super({
      name: "EndpointsPerClusterLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointsPerClusterLimitExceededFault.prototype);
  }
}

/**
 * The request would exceed the allowed number of event subscriptions for this account. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class EventSubscriptionQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EventSubscriptionQuotaExceededFault";
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
 * Amazon SNS has responded that there is a problem with the specified Amazon SNS topic.
 *
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SNSInvalidTopicFault";
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
 * You do not have permission to publish to the specified Amazon SNS topic.
 *
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SNSNoAuthorizationFault";
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
 * An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not exist.
 *
 * @public
 */
export class SNSTopicArnNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SNSTopicArnNotFoundFault";
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
 * The specified Amazon Redshift event source could not be found.
 *
 * @public
 */
export class SourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SourceNotFoundFault";
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
 * There is already an existing event notification subscription with the specified name.
 *
 * @public
 */
export class SubscriptionAlreadyExistFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubscriptionAlreadyExistFault";
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
 * The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.
 *
 * @public
 */
export class SubscriptionCategoryNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault";
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
 * An Amazon Redshift event with the specified event ID does not exist.
 *
 * @public
 */
export class SubscriptionEventIdNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault";
  readonly name = "SubscriptionEventIdNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionEventIdNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionEventIdNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionEventIdNotFoundFault.prototype);
  }
}

/**
 * The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.
 *
 * @public
 */
export class SubscriptionSeverityNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault";
  readonly name = "SubscriptionSeverityNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionSeverityNotFoundFault, __BaseException>) {
    super({
      name: "SubscriptionSeverityNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionSeverityNotFoundFault.prototype);
  }
}

/**
 * There is already an existing Amazon Redshift HSM client certificate with the specified identifier.
 *
 * @public
 */
export class HsmClientCertificateAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmClientCertificateAlreadyExistsFault";
  readonly name = "HsmClientCertificateAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateAlreadyExistsFault, __BaseException>) {
    super({
      name: "HsmClientCertificateAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateAlreadyExistsFault.prototype);
  }
}

/**
 * The quota for HSM client certificates has been reached. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class HsmClientCertificateQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault";
  readonly name = "HsmClientCertificateQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmClientCertificateQuotaExceededFault, __BaseException>) {
    super({
      name: "HsmClientCertificateQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmClientCertificateQuotaExceededFault.prototype);
  }
}

/**
 * There is already an existing Amazon Redshift HSM configuration with the specified identifier.
 *
 * @public
 */
export class HsmConfigurationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmConfigurationAlreadyExistsFault";
  readonly name = "HsmConfigurationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationAlreadyExistsFault, __BaseException>) {
    super({
      name: "HsmConfigurationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationAlreadyExistsFault.prototype);
  }
}

/**
 * The quota for HSM configurations has been reached. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class HsmConfigurationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault";
  readonly name = "HsmConfigurationQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HsmConfigurationQuotaExceededFault, __BaseException>) {
    super({
      name: "HsmConfigurationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HsmConfigurationQuotaExceededFault.prototype);
  }
}

/**
 * The integration you are trying to create already exists.
 *
 * @public
 */
export class IntegrationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationAlreadyExistsFault";
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
 * A conflicting conditional operation is currently in progress against this resource. This typically occurs when there are multiple requests being made to the same resource at the same time, and these requests conflict with each other.
 *
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationConflictOperationFault";
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
 * You can't create any more zero-ETL or S3 event integrations because the quota has been reached.
 *
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationQuotaExceededFault";
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
 * The specified integration source can't be found.
 *
 * @public
 */
export class IntegrationSourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationSourceNotFoundFault";
  readonly name = "IntegrationSourceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationSourceNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationSourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationSourceNotFoundFault.prototype);
  }
}

/**
 * The specified integration target can't be found.
 *
 * @public
 */
export class IntegrationTargetNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationTargetNotFoundFault";
  readonly name = "IntegrationTargetNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationTargetNotFoundFault, __BaseException>) {
    super({
      name: "IntegrationTargetNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationTargetNotFoundFault.prototype);
  }
}

/**
 * The Amazon Redshift Query Editor (QEV2) IAM Identity Center application already exists. Use a different application name or describe existing applications to find the ARN.
 *
 * @public
 */
export class Qev2IdcApplicationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#Qev2IdcApplicationAlreadyExistsFault";
  readonly name = "Qev2IdcApplicationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Qev2IdcApplicationAlreadyExistsFault, __BaseException>) {
    super({
      name: "Qev2IdcApplicationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Qev2IdcApplicationAlreadyExistsFault.prototype);
  }
}

/**
 * The application you attempted to add already exists.
 *
 * @public
 */
export class RedshiftIdcApplicationAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#RedshiftIdcApplicationAlreadyExistsFault";
  readonly name = "RedshiftIdcApplicationAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationAlreadyExistsFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationAlreadyExistsFault.prototype);
  }
}

/**
 * The maximum number of Redshift IAM Identity Center applications was exceeded.
 *
 * @public
 */
export class RedshiftIdcApplicationQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#RedshiftIdcApplicationQuotaExceededFault";
  readonly name = "RedshiftIdcApplicationQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftIdcApplicationQuotaExceededFault, __BaseException>) {
    super({
      name: "RedshiftIdcApplicationQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftIdcApplicationQuotaExceededFault.prototype);
  }
}

/**
 * The scheduled action is not valid.
 *
 * @public
 */
export class InvalidScheduledActionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidScheduledActionFault";
  readonly name = "InvalidScheduledActionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScheduledActionFault, __BaseException>) {
    super({
      name: "InvalidScheduledActionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScheduledActionFault.prototype);
  }
}

/**
 * The schedule you submitted isn't valid.
 *
 * @public
 */
export class InvalidScheduleFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidScheduleFault";
  readonly name = "InvalidScheduleFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScheduleFault, __BaseException>) {
    super({
      name: "InvalidScheduleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScheduleFault.prototype);
  }
}

/**
 * The scheduled action already exists.
 *
 * @public
 */
export class ScheduledActionAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ScheduledActionAlreadyExistsFault";
  readonly name = "ScheduledActionAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionAlreadyExistsFault, __BaseException>) {
    super({
      name: "ScheduledActionAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionAlreadyExistsFault.prototype);
  }
}

/**
 * The quota for scheduled actions exceeded.
 *
 * @public
 */
export class ScheduledActionQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ScheduledActionQuotaExceededFault";
  readonly name = "ScheduledActionQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionQuotaExceededFault, __BaseException>) {
    super({
      name: "ScheduledActionQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionQuotaExceededFault.prototype);
  }
}

/**
 * The action type specified for a scheduled action is not supported.
 *
 * @public
 */
export class ScheduledActionTypeUnsupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault";
  readonly name = "ScheduledActionTypeUnsupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionTypeUnsupportedFault, __BaseException>) {
    super({
      name: "ScheduledActionTypeUnsupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionTypeUnsupportedFault.prototype);
  }
}

/**
 * The snapshot copy grant can't be created because a grant with the same name already exists.
 *
 * @public
 */
export class SnapshotCopyGrantAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault";
  readonly name = "SnapshotCopyGrantAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantAlreadyExistsFault.prototype);
  }
}

/**
 * The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this region.
 *
 * @public
 */
export class SnapshotCopyGrantQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault";
  readonly name = "SnapshotCopyGrantQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantQuotaExceededFault.prototype);
  }
}

/**
 * The definition you submitted is not supported.
 *
 * @public
 */
export class ScheduleDefinitionTypeUnsupportedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault";
  readonly name = "ScheduleDefinitionTypeUnsupportedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduleDefinitionTypeUnsupportedFault, __BaseException>) {
    super({
      name: "ScheduleDefinitionTypeUnsupportedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduleDefinitionTypeUnsupportedFault.prototype);
  }
}

/**
 * The specified snapshot schedule already exists.
 *
 * @public
 */
export class SnapshotScheduleAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault";
  readonly name = "SnapshotScheduleAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleAlreadyExistsFault, __BaseException>) {
    super({
      name: "SnapshotScheduleAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleAlreadyExistsFault.prototype);
  }
}

/**
 * You have exceeded the quota of snapshot schedules.
 *
 * @public
 */
export class SnapshotScheduleQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault";
  readonly name = "SnapshotScheduleQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleQuotaExceededFault, __BaseException>) {
    super({
      name: "SnapshotScheduleQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleQuotaExceededFault.prototype);
  }
}

/**
 * The resource could not be found.
 *
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ResourceNotFoundFault";
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
 * The usage limit is not valid.
 *
 * @public
 */
export class InvalidUsageLimitFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidUsageLimitFault";
  readonly name = "InvalidUsageLimitFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageLimitFault, __BaseException>) {
    super({
      name: "InvalidUsageLimitFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageLimitFault.prototype);
  }
}

/**
 * The usage limit already exists.
 *
 * @public
 */
export class UsageLimitAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UsageLimitAlreadyExistsFault";
  readonly name = "UsageLimitAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsageLimitAlreadyExistsFault, __BaseException>) {
    super({
      name: "UsageLimitAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsageLimitAlreadyExistsFault.prototype);
  }
}

/**
 * An error occurred. The custom domain name couldn't be found.
 *
 * @public
 */
export class CustomDomainAssociationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#CustomDomainAssociationNotFoundFault";
  readonly name = "CustomDomainAssociationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomDomainAssociationNotFoundFault, __BaseException>) {
    super({
      name: "CustomDomainAssociationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomDomainAssociationNotFoundFault.prototype);
  }
}

/**
 * The cluster parameter group action can not be completed because another task is in progress that involves the parameter group. Wait a few moments and try the operation again.
 *
 * @public
 */
export class InvalidClusterParameterGroupStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault";
  readonly name = "InvalidClusterParameterGroupStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterParameterGroupStateFault, __BaseException>) {
    super({
      name: "InvalidClusterParameterGroupStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterParameterGroupStateFault.prototype);
  }
}

/**
 * The state of the subnet is invalid.
 *
 * @public
 */
export class InvalidClusterSubnetStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterSubnetStateFault";
  readonly name = "InvalidClusterSubnetStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSubnetStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSubnetStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSubnetStateFault.prototype);
  }
}

/**
 * The endpoint name doesn't refer to an existing endpoint.
 *
 * @public
 */
export class EndpointNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointNotFoundFault";
  readonly name = "EndpointNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointNotFoundFault, __BaseException>) {
    super({
      name: "EndpointNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointNotFoundFault.prototype);
  }
}

/**
 * The status of the endpoint is not valid.
 *
 * @public
 */
export class InvalidEndpointStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidEndpointStateFault";
  readonly name = "InvalidEndpointStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointStateFault, __BaseException>) {
    super({
      name: "InvalidEndpointStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointStateFault.prototype);
  }
}

/**
 * The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.
 *
 * @public
 */
export class InvalidSubscriptionStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidSubscriptionStateFault";
  readonly name = "InvalidSubscriptionStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubscriptionStateFault, __BaseException>) {
    super({
      name: "InvalidSubscriptionStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubscriptionStateFault.prototype);
  }
}

/**
 * An Amazon Redshift event notification subscription with the specified name does not exist.
 *
 * @public
 */
export class SubscriptionNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubscriptionNotFoundFault";
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
 * The specified HSM client certificate is not in the `available` state, or it is still in use by one or more Amazon Redshift clusters.
 *
 * @public
 */
export class InvalidHsmClientCertificateStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault";
  readonly name = "InvalidHsmClientCertificateStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmClientCertificateStateFault, __BaseException>) {
    super({
      name: "InvalidHsmClientCertificateStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmClientCertificateStateFault.prototype);
  }
}

/**
 * The specified HSM configuration is not in the `available` state, or it is still in use by one or more Amazon Redshift clusters.
 *
 * @public
 */
export class InvalidHsmConfigurationStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidHsmConfigurationStateFault";
  readonly name = "InvalidHsmConfigurationStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHsmConfigurationStateFault, __BaseException>) {
    super({
      name: "InvalidHsmConfigurationStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHsmConfigurationStateFault.prototype);
  }
}

/**
 * The integration is in an invalid state and can't perform the requested operation.
 *
 * @public
 */
export class IntegrationConflictStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationConflictStateFault";
  readonly name = "IntegrationConflictStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IntegrationConflictStateFault, __BaseException>) {
    super({
      name: "IntegrationConflictStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IntegrationConflictStateFault.prototype);
  }
}

/**
 * The integration can't be found.
 *
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IntegrationNotFoundFault";
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
 * The specified Amazon Redshift Query Editor (QEV2) IAM Identity Center application doesn't exist. Verify that the application ARN is correct and that the application exists in this Region.
 *
 * @public
 */
export class Qev2IdcApplicationNotExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#Qev2IdcApplicationNotExistsFault";
  readonly name = "Qev2IdcApplicationNotExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<Qev2IdcApplicationNotExistsFault, __BaseException>) {
    super({
      name: "Qev2IdcApplicationNotExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, Qev2IdcApplicationNotExistsFault.prototype);
  }
}

/**
 * The scheduled action cannot be found.
 *
 * @public
 */
export class ScheduledActionNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ScheduledActionNotFoundFault";
  readonly name = "ScheduledActionNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScheduledActionNotFoundFault, __BaseException>) {
    super({
      name: "ScheduledActionNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScheduledActionNotFoundFault.prototype);
  }
}

/**
 * The snapshot copy grant can't be deleted because it is used by one or more clusters.
 *
 * @public
 */
export class InvalidSnapshotCopyGrantStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidSnapshotCopyGrantStateFault";
  readonly name = "InvalidSnapshotCopyGrantStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnapshotCopyGrantStateFault, __BaseException>) {
    super({
      name: "InvalidSnapshotCopyGrantStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnapshotCopyGrantStateFault.prototype);
  }
}

/**
 * The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.
 *
 * @public
 */
export class SnapshotCopyGrantNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault";
  readonly name = "SnapshotCopyGrantNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyGrantNotFoundFault, __BaseException>) {
    super({
      name: "SnapshotCopyGrantNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyGrantNotFoundFault.prototype);
  }
}

/**
 * The cluster snapshot schedule state is not valid.
 *
 * @public
 */
export class InvalidClusterSnapshotScheduleStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault";
  readonly name = "InvalidClusterSnapshotScheduleStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClusterSnapshotScheduleStateFault, __BaseException>) {
    super({
      name: "InvalidClusterSnapshotScheduleStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClusterSnapshotScheduleStateFault.prototype);
  }
}

/**
 * The usage limit identifier can't be found.
 *
 * @public
 */
export class UsageLimitNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UsageLimitNotFoundFault";
  readonly name = "UsageLimitNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsageLimitNotFoundFault, __BaseException>) {
    super({
      name: "UsageLimitNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsageLimitNotFoundFault.prototype);
  }
}

/**
 * The reserved-node exchange status wasn't found.
 *
 * @public
 */
export class ReservedNodeExchangeNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeExchangeNotFoundFault";
  readonly name = "ReservedNodeExchangeNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeExchangeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeExchangeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeExchangeNotFoundFault.prototype);
  }
}

/**
 * The specified `TableRestoreRequestId` value was not found.
 *
 * @public
 */
export class TableRestoreNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#TableRestoreNotFoundFault";
  readonly name = "TableRestoreNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableRestoreNotFoundFault, __BaseException>) {
    super({
      name: "TableRestoreNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableRestoreNotFoundFault.prototype);
  }
}

/**
 * The cluster already has cross-region snapshot copy disabled.
 *
 * @public
 */
export class SnapshotCopyAlreadyDisabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault";
  readonly name = "SnapshotCopyAlreadyDisabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyDisabledFault.prototype);
  }
}

/**
 * The cluster does not have read bucket or put object permissions on the S3 bucket specified when enabling logging.
 *
 * @public
 */
export class InsufficientS3BucketPolicyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InsufficientS3BucketPolicyFault";
  readonly name = "InsufficientS3BucketPolicyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientS3BucketPolicyFault, __BaseException>) {
    super({
      name: "InsufficientS3BucketPolicyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientS3BucketPolicyFault.prototype);
  }
}

/**
 * The S3 bucket name is invalid. For more information about naming rules, go to [Bucket Restrictions and Limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html) in the Amazon Simple Storage Service (S3) Developer Guide.
 *
 * @public
 */
export class InvalidS3BucketNameFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidS3BucketNameFault";
  readonly name = "InvalidS3BucketNameFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketNameFault, __BaseException>) {
    super({
      name: "InvalidS3BucketNameFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketNameFault.prototype);
  }
}

/**
 * The string specified for the logging S3 key prefix does not comply with the documented constraints.
 *
 * @public
 */
export class InvalidS3KeyPrefixFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidS3KeyPrefixFault";
  readonly name = "InvalidS3KeyPrefixFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyPrefixFault, __BaseException>) {
    super({
      name: "InvalidS3KeyPrefixFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyPrefixFault.prototype);
  }
}

/**
 * The specified options are incompatible.
 *
 * @public
 */
export class IncompatibleOrderableOptions extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#IncompatibleOrderableOptions";
  readonly name = "IncompatibleOrderableOptions" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleOrderableOptions, __BaseException>) {
    super({
      name: "IncompatibleOrderableOptions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleOrderableOptions.prototype);
  }
}

/**
 * The cluster already has cross-region snapshot copy enabled.
 *
 * @public
 */
export class SnapshotCopyAlreadyEnabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault";
  readonly name = "SnapshotCopyAlreadyEnabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyEnabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyEnabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyEnabledFault.prototype);
  }
}

/**
 * The specified region is incorrect or does not exist.
 *
 * @public
 */
export class UnknownSnapshotCopyRegionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault";
  readonly name = "UnknownSnapshotCopyRegionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownSnapshotCopyRegionFault, __BaseException>) {
    super({
      name: "UnknownSnapshotCopyRegionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownSnapshotCopyRegionFault.prototype);
  }
}

/**
 * The authorization for this endpoint can't be found.
 *
 * @public
 */
export class EndpointAuthorizationNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault";
  readonly name = "EndpointAuthorizationNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationNotFoundFault.prototype);
  }
}

/**
 * The request contains one or more invalid parameters. This error occurs when required parameters are missing, parameter values are outside acceptable ranges, or parameter formats are incorrect.
 *
 * @public
 */
export class RedshiftInvalidParameterFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#RedshiftInvalidParameterFault";
  readonly name = "RedshiftInvalidParameterFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedshiftInvalidParameterFault, __BaseException>) {
    super({
      name: "RedshiftInvalidParameterFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedshiftInvalidParameterFault.prototype);
  }
}

/**
 * The resource policy isn't valid.
 *
 * @public
 */
export class InvalidPolicyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidPolicyFault";
  readonly name = "InvalidPolicyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyFault, __BaseException>) {
    super({
      name: "InvalidPolicyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyFault.prototype);
  }
}

/**
 * You have exceeded the allowed number of table restore requests. Wait for your current table restore requests to complete before making a new request.
 *
 * @public
 */
export class InProgressTableRestoreQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault";
  readonly name = "InProgressTableRestoreQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InProgressTableRestoreQuotaExceededFault, __BaseException>) {
    super({
      name: "InProgressTableRestoreQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InProgressTableRestoreQuotaExceededFault.prototype);
  }
}

/**
 * The restore is invalid.
 *
 * @public
 */
export class InvalidRestoreFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidRestoreFault";
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
 * The value specified for the `sourceDatabaseName`, `sourceSchemaName`, or `sourceTableName` parameter, or a combination of these, doesn't exist in the snapshot.
 *
 * @public
 */
export class InvalidTableRestoreArgumentFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#InvalidTableRestoreArgumentFault";
  readonly name = "InvalidTableRestoreArgumentFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTableRestoreArgumentFault, __BaseException>) {
    super({
      name: "InvalidTableRestoreArgumentFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTableRestoreArgumentFault.prototype);
  }
}

/**
 * The number of tables in the cluster exceeds the limit for the requested new cluster node type.
 *
 * @public
 */
export class TableLimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#TableLimitExceededFault";
  readonly name = "TableLimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableLimitExceededFault, __BaseException>) {
    super({
      name: "TableLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableLimitExceededFault.prototype);
  }
}

/**
 * A request option was specified that is not supported.
 *
 * @public
 */
export class UnsupportedOptionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#UnsupportedOptionFault";
  readonly name = "UnsupportedOptionFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOptionFault, __BaseException>) {
    super({
      name: "UnsupportedOptionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOptionFault.prototype);
  }
}

/**
 * A specified subnet is already in use by another cluster.
 *
 * @public
 */
export class SubnetAlreadyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SubnetAlreadyInUse";
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
 * Cross-region snapshot copy was temporarily disabled. Try your request again.
 *
 * @public
 */
export class SnapshotCopyDisabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotCopyDisabledFault";
  readonly name = "SnapshotCopyDisabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyDisabledFault.prototype);
  }
}

/**
 * The specified snapshot schedule is already being updated.
 *
 * @public
 */
export class SnapshotScheduleUpdateInProgressFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault";
  readonly name = "SnapshotScheduleUpdateInProgressFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleUpdateInProgressFault, __BaseException>) {
    super({
      name: "SnapshotScheduleUpdateInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleUpdateInProgressFault.prototype);
  }
}

/**
 * Request would exceed the user's compute node quota. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @public
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.redshift#ReservedNodeQuotaExceededFault";
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
