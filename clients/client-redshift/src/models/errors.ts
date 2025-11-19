// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

/**
 * <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 * @public
 */
export class DependentServiceUnavailableFault extends __BaseException {
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
 * <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 * @public
 */
export class InvalidReservedNodeStateFault extends __BaseException {
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
 * <p>User already has a reservation with the given identifier.</p>
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
 * <p>Indicates that the reserved node has already been exchanged.</p>
 * @public
 */
export class ReservedNodeAlreadyMigratedFault extends __BaseException {
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
 * <p>The specified reserved compute node not found.</p>
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
 * <p>Specified offering does not exist.</p>
 * @public
 */
export class ReservedNodeOfferingNotFoundFault extends __BaseException {
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
 * <p>The requested operation isn't supported.</p>
 * @public
 */
export class UnsupportedOperationFault extends __BaseException {
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
 * <p>You are not authorized to access the cluster.</p>
 * @public
 */
export class AccessToClusterDeniedFault extends __BaseException {
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
 * <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 * @public
 */
export class AccessToSnapshotDeniedFault extends __BaseException {
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
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
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
 * <p>The name of the partner was not found.</p>
 * @public
 */
export class PartnerNotFoundFault extends __BaseException {
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
 * <p>The partner integration is not authorized.</p>
 * @public
 */
export class UnauthorizedPartnerIntegrationFault extends __BaseException {
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
 * <p>There is an error with the datashare.</p>
 * @public
 */
export class InvalidDataShareFault extends __BaseException {
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
 * <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 * @public
 */
export class InvalidNamespaceFault extends __BaseException {
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
 * <p>The authentication profile already exists.</p>
 * @public
 */
export class AuthenticationProfileAlreadyExistsFault extends __BaseException {
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
 * <p>The authentication profile can't be found.</p>
 * @public
 */
export class AuthenticationProfileNotFoundFault extends __BaseException {
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
 * <p>The size or number of authentication profiles has exceeded the quota.
 *             The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.</p>
 * @public
 */
export class AuthenticationProfileQuotaExceededFault extends __BaseException {
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
 * <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
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
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
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
 * <p>The authorization quota for the cluster security group has been reached.</p>
 * @public
 */
export class AuthorizationQuotaExceededFault extends __BaseException {
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
 * <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 * @public
 */
export class ClusterSecurityGroupNotFoundFault extends __BaseException {
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
 * <p>The state of the cluster security group is not <code>available</code>. </p>
 * @public
 */
export class InvalidClusterSecurityGroupStateFault extends __BaseException {
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
 * <p>The authorization already exists for this endpoint.</p>
 * @public
 */
export class EndpointAuthorizationAlreadyExistsFault extends __BaseException {
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
 * <p>The number of endpoint authorizations per cluster has exceeded its limit.</p>
 * @public
 */
export class EndpointAuthorizationsPerClusterLimitExceededFault extends __BaseException {
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
 * <p>The status of the authorization is not valid.</p>
 * @public
 */
export class InvalidAuthorizationStateFault extends __BaseException {
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
 * <p>The specified cluster is not in the <code>available</code> state. </p>
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
 * <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 * @public
 */
export class ClusterSnapshotNotFoundFault extends __BaseException {
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
 * <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 * @public
 */
export class DependentServiceRequestThrottlingFault extends __BaseException {
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
 * <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 * @public
 */
export class InvalidClusterSnapshotStateFault extends __BaseException {
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
 * <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 * @public
 */
export class LimitExceededFault extends __BaseException {
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
 * <p>The maximum number for a batch delete of snapshots has been reached. The limit is
 *             100. </p>
 * @public
 */
export class BatchDeleteRequestSizeExceededFault extends __BaseException {
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
 * <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 * @public
 */
export class BatchModifyClusterSnapshotsLimitExceededFault extends __BaseException {
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
 * <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 * @public
 */
export class InvalidRetentionPeriodFault extends __BaseException {
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
 * <p>Could not find the specified S3 bucket.</p>
 * @public
 */
export class BucketNotFoundFault extends __BaseException {
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
 * <p>A resize operation for the specified cluster is not found.</p>
 * @public
 */
export class ResizeNotFoundFault extends __BaseException {
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
 * <p>The account already has a cluster with the given identifier.</p>
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
 * <p>Cluster is already on the latest database revision.</p>
 * @public
 */
export class ClusterOnLatestRevisionFault extends __BaseException {
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
 * <p>A cluster parameter group with the same name already exists.</p>
 * @public
 */
export class ClusterParameterGroupAlreadyExistsFault extends __BaseException {
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
 * <p>The parameter group name does not refer to an existing parameter group.</p>
 * @public
 */
export class ClusterParameterGroupNotFoundFault extends __BaseException {
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
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             parameter groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterParameterGroupQuotaExceededFault extends __BaseException {
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
 * <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterQuotaExceededFault extends __BaseException {
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
 * <p>A cluster security group with the same name already exists.</p>
 * @public
 */
export class ClusterSecurityGroupAlreadyExistsFault extends __BaseException {
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
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             security groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSecurityGroupQuotaExceededFault extends __BaseException {
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
 * <p>The value specified as a snapshot identifier is already used by an existing
 *             snapshot.</p>
 * @public
 */
export class ClusterSnapshotAlreadyExistsFault extends __BaseException {
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
 * <p>The request would result in the user exceeding the allowed number of cluster
 *             snapshots.</p>
 * @public
 */
export class ClusterSnapshotQuotaExceededFault extends __BaseException {
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
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
 * @public
 */
export class ClusterSubnetGroupAlreadyExistsFault extends __BaseException {
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
 * <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 * @public
 */
export class ClusterSubnetGroupNotFoundFault extends __BaseException {
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
 * <p>The request would result in user exceeding the allowed number of cluster subnet
 *             groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSubnetGroupQuotaExceededFault extends __BaseException {
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
 * <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class ClusterSubnetQuotaExceededFault extends __BaseException {
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
 * <p>There is a conflict while updating the resource policy.</p>
 * @public
 */
export class ConflictPolicyUpdateFault extends __BaseException {
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
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 * @public
 */
export class CopyToRegionDisabledFault extends __BaseException {
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
 * <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 * @public
 */
export class InvalidAuthenticationProfileRequestFault extends __BaseException {
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
 * <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 * @public
 */
export class HsmClientCertificateNotFoundFault extends __BaseException {
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
 * <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 * @public
 */
export class HsmConfigurationNotFoundFault extends __BaseException {
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
 * <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
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
 * <p>The cluster subnet group cannot be deleted because it is in use.</p>
 * @public
 */
export class InvalidClusterSubnetGroupStateFault extends __BaseException {
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
 * <p>The provided cluster track name is not valid.</p>
 * @public
 */
export class InvalidClusterTrackFault extends __BaseException {
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
 * <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 * @public
 */
export class InvalidElasticIpFault extends __BaseException {
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
 * <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
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
 * <p>The tag is invalid.</p>
 * @public
 */
export class InvalidTagFault extends __BaseException {
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
 * <p>The cluster subnet group does not cover all Availability Zones.</p>
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
 * <p>There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode,
 *             associate an IPv6 CIDR block with each subnet in your VPC.</p>
 * @public
 */
export class Ipv6CidrBlockNotFoundFault extends __BaseException {
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
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 * @public
 */
export class NumberOfNodesPerClusterLimitExceededFault extends __BaseException {
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
 * <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class NumberOfNodesQuotaExceededFault extends __BaseException {
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
 * <p>The application you attempted to find doesn't exist.</p>
 * @public
 */
export class RedshiftIdcApplicationNotExistsFault extends __BaseException {
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
 * <p>We could not find the specified snapshot schedule. </p>
 * @public
 */
export class SnapshotScheduleNotFoundFault extends __BaseException {
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
 * <p>You have exceeded the number of tags allowed.</p>
 * @public
 */
export class TagLimitExceededFault extends __BaseException {
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
 * <p>Your account is not authorized to perform the requested operation.</p>
 * @public
 */
export class UnauthorizedOperation extends __BaseException {
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
 * <p>An error occurred when an attempt was made to change the custom domain association.</p>
 * @public
 */
export class CustomCnameAssociationFault extends __BaseException {
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
 * <p>The account already has a Redshift-managed VPC endpoint with the given identifier.</p>
 * @public
 */
export class EndpointAlreadyExistsFault extends __BaseException {
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
 * <p>The number of Redshift-managed VPC endpoints per authorization has exceeded its limit.</p>
 * @public
 */
export class EndpointsPerAuthorizationLimitExceededFault extends __BaseException {
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
 * <p>The number of Redshift-managed VPC endpoints per cluster has exceeded its limit.</p>
 * @public
 */
export class EndpointsPerClusterLimitExceededFault extends __BaseException {
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
 * <p>The request would exceed the allowed number of event subscriptions for this
 *             account.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
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
 * <p>Amazon SNS has responded that there is a problem with the specified Amazon SNS
 *             topic.</p>
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
 * <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
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
 * <p>An Amazon SNS topic with the specified Amazon Resource Name (ARN) does not
 *             exist.</p>
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
 * <p>The specified Amazon Redshift event source could not be found.</p>
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
 * <p>There is already an existing event notification subscription with the specified
 *             name.</p>
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
 * <p>The value specified for the event category was not one of the allowed values, or it
 *             specified a category that does not apply to the specified source type. The allowed
 *             values are Configuration, Management, Monitoring, and Security.</p>
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
 * <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 * @public
 */
export class SubscriptionEventIdNotFoundFault extends __BaseException {
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
 * <p>The value specified for the event severity was not one of the allowed values, or it
 *             specified a severity that does not apply to the specified source type. The allowed
 *             values are ERROR and INFO.</p>
 * @public
 */
export class SubscriptionSeverityNotFoundFault extends __BaseException {
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
 * <p>There is already an existing Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 * @public
 */
export class HsmClientCertificateAlreadyExistsFault extends __BaseException {
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
 * <p>The quota for HSM client certificates has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class HsmClientCertificateQuotaExceededFault extends __BaseException {
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
 * <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 * @public
 */
export class HsmConfigurationAlreadyExistsFault extends __BaseException {
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
 * <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
 */
export class HsmConfigurationQuotaExceededFault extends __BaseException {
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
 * <p>The integration you are trying to create already exists.</p>
 * @public
 */
export class IntegrationAlreadyExistsFault extends __BaseException {
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
 * <p>A conflicting conditional operation is currently in progress against this resource.
 *             This typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 * @public
 */
export class IntegrationConflictOperationFault extends __BaseException {
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
 * <p>You can't create any more zero-ETL or S3 event integrations because the quota has been reached.</p>
 * @public
 */
export class IntegrationQuotaExceededFault extends __BaseException {
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
 * <p>The specified integration source can't be found.</p>
 * @public
 */
export class IntegrationSourceNotFoundFault extends __BaseException {
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
 * <p>The specified integration target can't be found.</p>
 * @public
 */
export class IntegrationTargetNotFoundFault extends __BaseException {
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
 * <p>A dependent service denied access for the integration.</p>
 * @public
 */
export class DependentServiceAccessDeniedFault extends __BaseException {
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
 * <p>The application you attempted to add already exists.</p>
 * @public
 */
export class RedshiftIdcApplicationAlreadyExistsFault extends __BaseException {
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
 * <p>The maximum number of Redshift IAM Identity Center applications was exceeded.</p>
 * @public
 */
export class RedshiftIdcApplicationQuotaExceededFault extends __BaseException {
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
 * <p>The scheduled action is not valid. </p>
 * @public
 */
export class InvalidScheduledActionFault extends __BaseException {
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
 * <p>The schedule you submitted isn't valid.</p>
 * @public
 */
export class InvalidScheduleFault extends __BaseException {
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
 * <p>The scheduled action already exists. </p>
 * @public
 */
export class ScheduledActionAlreadyExistsFault extends __BaseException {
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
 * <p>The quota for scheduled actions exceeded. </p>
 * @public
 */
export class ScheduledActionQuotaExceededFault extends __BaseException {
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
 * <p>The action type specified for a scheduled action is not supported. </p>
 * @public
 */
export class ScheduledActionTypeUnsupportedFault extends __BaseException {
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
 * <p>The snapshot copy grant can't be created because a grant with the same name already
 *             exists.</p>
 * @public
 */
export class SnapshotCopyGrantAlreadyExistsFault extends __BaseException {
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
 * <p>The Amazon Web Services account has exceeded the maximum number of snapshot copy grants in this
 *             region.</p>
 * @public
 */
export class SnapshotCopyGrantQuotaExceededFault extends __BaseException {
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
 * <p>The definition you submitted is not supported.</p>
 * @public
 */
export class ScheduleDefinitionTypeUnsupportedFault extends __BaseException {
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
 * <p>The specified snapshot schedule already exists. </p>
 * @public
 */
export class SnapshotScheduleAlreadyExistsFault extends __BaseException {
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
 * <p>You have exceeded the quota of snapshot schedules. </p>
 * @public
 */
export class SnapshotScheduleQuotaExceededFault extends __BaseException {
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
 * <p>The resource could not be found.</p>
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
 * <p>The usage limit is not valid.</p>
 * @public
 */
export class InvalidUsageLimitFault extends __BaseException {
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
 * <p>The usage limit already exists. </p>
 * @public
 */
export class UsageLimitAlreadyExistsFault extends __BaseException {
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
 * <p>An error occurred. The custom domain name couldn't be found.</p>
 * @public
 */
export class CustomDomainAssociationNotFoundFault extends __BaseException {
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
 * <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 * @public
 */
export class InvalidClusterParameterGroupStateFault extends __BaseException {
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
 * <p>The state of the subnet is invalid.</p>
 * @public
 */
export class InvalidClusterSubnetStateFault extends __BaseException {
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
 * <p>The endpoint name doesn't refer to an existing endpoint.</p>
 * @public
 */
export class EndpointNotFoundFault extends __BaseException {
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
 * <p>The status of the endpoint is not valid.</p>
 * @public
 */
export class InvalidEndpointStateFault extends __BaseException {
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
 * <p>The subscription request is invalid because it is a duplicate request. This
 *             subscription request is already in progress.</p>
 * @public
 */
export class InvalidSubscriptionStateFault extends __BaseException {
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
 * <p>An Amazon Redshift event notification subscription with the specified name does not
 *             exist.</p>
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
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 * @public
 */
export class InvalidHsmClientCertificateStateFault extends __BaseException {
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
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it
 *             is still in use by one or more Amazon Redshift clusters.</p>
 * @public
 */
export class InvalidHsmConfigurationStateFault extends __BaseException {
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
 * <p>The integration is in an invalid state and can't perform the requested operation.</p>
 * @public
 */
export class IntegrationConflictStateFault extends __BaseException {
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
 * <p>The integration can't be found.</p>
 * @public
 */
export class IntegrationNotFoundFault extends __BaseException {
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
 * <p>The scheduled action cannot be found. </p>
 * @public
 */
export class ScheduledActionNotFoundFault extends __BaseException {
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
 * <p>The snapshot copy grant can't be deleted because it is used by one or more
 *             clusters.</p>
 * @public
 */
export class InvalidSnapshotCopyGrantStateFault extends __BaseException {
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
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 * @public
 */
export class SnapshotCopyGrantNotFoundFault extends __BaseException {
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
 * <p>The cluster snapshot schedule state is not valid.</p>
 * @public
 */
export class InvalidClusterSnapshotScheduleStateFault extends __BaseException {
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
 * <p>The usage limit identifier can't be found.</p>
 * @public
 */
export class UsageLimitNotFoundFault extends __BaseException {
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
 * <p>The reserved-node exchange status wasn't found.</p>
 * @public
 */
export class ReservedNodeExchangeNotFoundFault extends __BaseException {
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
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 * @public
 */
export class TableRestoreNotFoundFault extends __BaseException {
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
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 * @public
 */
export class SnapshotCopyAlreadyDisabledFault extends __BaseException {
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
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 * @public
 */
export class InsufficientS3BucketPolicyFault extends __BaseException {
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
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 * @public
 */
export class InvalidS3BucketNameFault extends __BaseException {
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
 * <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 * @public
 */
export class InvalidS3KeyPrefixFault extends __BaseException {
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
 * <p>The specified options are incompatible.</p>
 * @public
 */
export class IncompatibleOrderableOptions extends __BaseException {
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
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 * @public
 */
export class SnapshotCopyAlreadyEnabledFault extends __BaseException {
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
 * <p>The specified region is incorrect or does not exist.</p>
 * @public
 */
export class UnknownSnapshotCopyRegionFault extends __BaseException {
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
 * <p>The authorization for this endpoint can't be found.</p>
 * @public
 */
export class EndpointAuthorizationNotFoundFault extends __BaseException {
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
 * <p>The request contains one or more invalid parameters.
 *             This error occurs when required parameters are missing,
 *             parameter values are outside acceptable ranges,
 *             or parameter formats are incorrect.</p>
 * @public
 */
export class RedshiftInvalidParameterFault extends __BaseException {
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
 * <p>The resource policy isn't valid.</p>
 * @public
 */
export class InvalidPolicyFault extends __BaseException {
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
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 * @public
 */
export class InProgressTableRestoreQuotaExceededFault extends __BaseException {
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
 * <p>The restore is invalid.</p>
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

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 * @public
 */
export class InvalidTableRestoreArgumentFault extends __BaseException {
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
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 * @public
 */
export class TableLimitExceededFault extends __BaseException {
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
 * <p>A request option was specified that is not supported.</p>
 * @public
 */
export class UnsupportedOptionFault extends __BaseException {
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
 * <p>A specified subnet is already in use by another cluster.</p>
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
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 * @public
 */
export class SnapshotCopyDisabledFault extends __BaseException {
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
 * <p>The specified snapshot schedule is already being updated.</p>
 * @public
 */
export class SnapshotScheduleUpdateInProgressFault extends __BaseException {
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
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
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
