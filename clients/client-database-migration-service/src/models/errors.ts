// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  DatabaseMigrationServiceServiceException as __BaseException,
} from "./DatabaseMigrationServiceServiceException";

/**
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @public
 */
export class AccessDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#AccessDeniedFault";
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
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @public
 */
export class InvalidResourceStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#InvalidResourceStateFault";
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
 * The resource could not be found.
 *
 * @public
 */
export class ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#ResourceNotFoundFault";
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
 * A dependency threw an exception.
 *
 * @public
 */
export class FailedDependencyFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#FailedDependencyFault";
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
 * The action or operation requested isn't valid.
 *
 * @public
 */
export class InvalidOperationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#InvalidOperationFault";
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
 * The resource you are attempting to create already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#ResourceAlreadyExistsFault";
  readonly name = "ResourceAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
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
 * The quota for this resource quota has been exceeded.
 *
 * @public
 */
export class ResourceQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#ResourceQuotaExceededFault";
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
 * DMS cannot access the KMS key.
 *
 * @public
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSKeyNotAccessibleFault";
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
 * Insufficient privileges are preventing access to an Amazon S3 object.
 *
 * @public
 */
export class S3AccessDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#S3AccessDeniedFault";
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
 * The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.
 *
 * @public
 */
export class KMSAccessDeniedFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSAccessDeniedFault";
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
 * The specified KMS key isn't enabled.
 *
 * @public
 */
export class KMSDisabledFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSDisabledFault";
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
 * The state of the specified KMS resource isn't valid for this request.
 *
 * @public
 */
export class KMSInvalidStateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSInvalidStateFault";
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
 * The specified KMS entity or resource can't be found.
 *
 * @public
 */
export class KMSNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSNotFoundFault";
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
 * This request triggered KMS request throttling.
 *
 * @public
 */
export class KMSThrottlingFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSThrottlingFault";
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
 * The SNS topic is invalid.
 *
 * @public
 */
export class SNSInvalidTopicFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#SNSInvalidTopicFault";
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
 * You are not authorized for the SNS subscription.
 *
 * @public
 */
export class SNSNoAuthorizationFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#SNSNoAuthorizationFault";
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
 * A specified Amazon S3 bucket, bucket folder, or other object can't be found.
 *
 * @public
 */
export class S3ResourceNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#S3ResourceNotFoundFault";
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
 * The subnet provided isn't valid.
 *
 * @public
 */
export class InvalidSubnet extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#InvalidSubnet";
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
 * The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.
 *
 * @public
 */
export class ReplicationSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#ReplicationSubnetGroupDoesNotCoverEnoughAZs";
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
 * There are not enough resources allocated to the database migration.
 *
 * @public
 */
export class InsufficientResourceCapacityFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#InsufficientResourceCapacityFault";
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
 * The storage quota has been exceeded.
 *
 * @public
 */
export class StorageQuotaExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#StorageQuotaExceededFault";
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
 * The specified collector doesn't exist.
 *
 * @public
 */
export class CollectorNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#CollectorNotFoundFault";
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
 * The certificate was not valid.
 *
 * @public
 */
export class InvalidCertificateFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#InvalidCertificateFault";
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
 * An upgrade dependency is preventing the database migration.
 *
 * @public
 */
export class UpgradeDependencyFailureFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#UpgradeDependencyFailureFault";
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
 * The specified subnet is already in use.
 *
 * @public
 */
export class SubnetAlreadyInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#SubnetAlreadyInUse";
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
 * An Key Management Service (KMS) error is preventing access to KMS.
 *
 * @public
 */
export class KMSFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.databasemigrationservice#KMSFault";
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
