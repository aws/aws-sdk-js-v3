// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";

/**
 * <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 * @public
 */
export class AccessDeniedFault extends __BaseException {
  readonly name = "AccessDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedFault, __BaseException>) {
    super({
      name: "AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedFault.prototype);
  }
}

/**
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 * @public
 */
export class InvalidResourceStateFault extends __BaseException {
  readonly name = "InvalidResourceStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateFault, __BaseException>) {
    super({
      name: "InvalidResourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateFault.prototype);
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
 * <p>A dependency threw an exception.</p>
 * @public
 */
export class FailedDependencyFault extends __BaseException {
  readonly name = "FailedDependencyFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyFault, __BaseException>) {
    super({
      name: "FailedDependencyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyFault.prototype);
  }
}

/**
 * <p>The action or operation requested isn't valid.</p>
 * @public
 */
export class InvalidOperationFault extends __BaseException {
  readonly name = "InvalidOperationFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationFault, __BaseException>) {
    super({
      name: "InvalidOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationFault.prototype);
  }
}

/**
 * <p>The resource you are attempting to create already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsFault extends __BaseException {
  readonly name = "ResourceAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * <p></p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsFault, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsFault.prototype);
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>The quota for this resource quota has been exceeded.</p>
 * @public
 */
export class ResourceQuotaExceededFault extends __BaseException {
  readonly name = "ResourceQuotaExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceQuotaExceededFault, __BaseException>) {
    super({
      name: "ResourceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceQuotaExceededFault.prototype);
  }
}

/**
 * <p>DMS cannot access the KMS key.</p>
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
 * <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 * @public
 */
export class S3AccessDeniedFault extends __BaseException {
  readonly name = "S3AccessDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3AccessDeniedFault, __BaseException>) {
    super({
      name: "S3AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3AccessDeniedFault.prototype);
  }
}

/**
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 * @public
 */
export class KMSAccessDeniedFault extends __BaseException {
  readonly name = "KMSAccessDeniedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedFault, __BaseException>) {
    super({
      name: "KMSAccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedFault.prototype);
  }
}

/**
 * <p>The specified KMS key isn't enabled.</p>
 * @public
 */
export class KMSDisabledFault extends __BaseException {
  readonly name = "KMSDisabledFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledFault, __BaseException>) {
    super({
      name: "KMSDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledFault.prototype);
  }
}

/**
 * <p>The state of the specified KMS resource isn't valid for this request.</p>
 * @public
 */
export class KMSInvalidStateFault extends __BaseException {
  readonly name = "KMSInvalidStateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateFault, __BaseException>) {
    super({
      name: "KMSInvalidStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateFault.prototype);
  }
}

/**
 * <p>The specified KMS entity or resource can't be found.</p>
 * @public
 */
export class KMSNotFoundFault extends __BaseException {
  readonly name = "KMSNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundFault, __BaseException>) {
    super({
      name: "KMSNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundFault.prototype);
  }
}

/**
 * <p>This request triggered KMS request throttling.</p>
 * @public
 */
export class KMSThrottlingFault extends __BaseException {
  readonly name = "KMSThrottlingFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingFault, __BaseException>) {
    super({
      name: "KMSThrottlingFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingFault.prototype);
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
 * <p>You are not authorized for the SNS subscription.</p>
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
 * <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 * @public
 */
export class S3ResourceNotFoundFault extends __BaseException {
  readonly name = "S3ResourceNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3ResourceNotFoundFault, __BaseException>) {
    super({
      name: "S3ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3ResourceNotFoundFault.prototype);
  }
}

/**
 * <p>The subnet provided isn't valid.</p>
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
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 * @public
 */
export class ReplicationSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  readonly name = "ReplicationSubnetGroupDoesNotCoverEnoughAZs" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationSubnetGroupDoesNotCoverEnoughAZs, __BaseException>) {
    super({
      name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationSubnetGroupDoesNotCoverEnoughAZs.prototype);
  }
}

/**
 * <p>There are not enough resources allocated to the database migration.</p>
 * @public
 */
export class InsufficientResourceCapacityFault extends __BaseException {
  readonly name = "InsufficientResourceCapacityFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientResourceCapacityFault, __BaseException>) {
    super({
      name: "InsufficientResourceCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientResourceCapacityFault.prototype);
  }
}

/**
 * <p>The storage quota has been exceeded.</p>
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
 * <p>The specified collector doesn't exist.</p>
 * @public
 */
export class CollectorNotFoundFault extends __BaseException {
  readonly name = "CollectorNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CollectorNotFoundFault, __BaseException>) {
    super({
      name: "CollectorNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CollectorNotFoundFault.prototype);
  }
}

/**
 * <p>The certificate was not valid.</p>
 * @public
 */
export class InvalidCertificateFault extends __BaseException {
  readonly name = "InvalidCertificateFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateFault, __BaseException>) {
    super({
      name: "InvalidCertificateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateFault.prototype);
  }
}

/**
 * <p>An upgrade dependency is preventing the database migration.</p>
 * @public
 */
export class UpgradeDependencyFailureFault extends __BaseException {
  readonly name = "UpgradeDependencyFailureFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpgradeDependencyFailureFault, __BaseException>) {
    super({
      name: "UpgradeDependencyFailureFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpgradeDependencyFailureFault.prototype);
  }
}

/**
 * <p>The specified subnet is already in use.</p>
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
 * <p>An Key Management Service (KMS) error is preventing access to KMS.</p>
 * @public
 */
export class KMSFault extends __BaseException {
  readonly name = "KMSFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSFault, __BaseException>) {
    super({
      name: "KMSFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSFault.prototype);
  }
}
