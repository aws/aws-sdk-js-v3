// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  ElasticBeanstalkSyntheticServiceException as __BaseException,
} from "./ElasticBeanstalkSyntheticServiceException";

/**
 * The specified account does not have sufficient privileges for one or more Amazon Web Services services.
 *
 * @public
 */
export class InsufficientPrivilegesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException";
  readonly name = "InsufficientPrivilegesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPrivilegesException, __BaseException>) {
    super({
      name: "InsufficientPrivilegesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPrivilegesException.prototype);
  }
}

/**
 * A generic service exception has occurred.
 *
 * @public
 */
export class ElasticBeanstalkServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException";
  readonly name = "ElasticBeanstalkServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ElasticBeanstalkServiceException, __BaseException>) {
    super({
      name: "ElasticBeanstalkServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ElasticBeanstalkServiceException.prototype);
  }
}

/**
 * Cannot modify the managed action in its current state.
 *
 * @public
 */
export class ManagedActionInvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException";
  readonly name = "ManagedActionInvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedActionInvalidStateException, __BaseException>) {
    super({
      name: "ManagedActionInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedActionInvalidStateException.prototype);
  }
}

/**
 * The specified account has reached its limit of environments.
 *
 * @public
 */
export class TooManyEnvironmentsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException";
  readonly name = "TooManyEnvironmentsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyEnvironmentsException, __BaseException>) {
    super({
      name: "TooManyEnvironmentsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyEnvironmentsException.prototype);
  }
}

/**
 * The specified account has reached its limit of applications.
 *
 * @public
 */
export class TooManyApplicationsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyApplicationsException";
  readonly name = "TooManyApplicationsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyApplicationsException, __BaseException>) {
    super({
      name: "TooManyApplicationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyApplicationsException.prototype);
  }
}

/**
 * CodeBuild is not available in the specified region.
 *
 * @public
 */
export class CodeBuildNotInServiceRegionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException";
  readonly name = "CodeBuildNotInServiceRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeBuildNotInServiceRegionException, __BaseException>) {
    super({
      name: "CodeBuildNotInServiceRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeBuildNotInServiceRegionException.prototype);
  }
}

/**
 * The specified S3 bucket does not belong to the S3 region in which the service is running. The following regions are supported:
 *
 * - IAD/us-east-1
 * - PDX/us-west-2
 * - DUB/eu-west-1
 *
 * @public
 */
export class S3LocationNotInServiceRegionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException";
  readonly name = "S3LocationNotInServiceRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3LocationNotInServiceRegionException, __BaseException>) {
    super({
      name: "S3LocationNotInServiceRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3LocationNotInServiceRegionException.prototype);
  }
}

/**
 * The specified account has reached its limit of application versions.
 *
 * @public
 */
export class TooManyApplicationVersionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException";
  readonly name = "TooManyApplicationVersionsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyApplicationVersionsException, __BaseException>) {
    super({
      name: "TooManyApplicationVersionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyApplicationVersionsException.prototype);
  }
}

/**
 * The specified account has reached its limit of Amazon S3 buckets.
 *
 * @public
 */
export class TooManyBucketsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyBucketsException";
  readonly name = "TooManyBucketsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyBucketsException, __BaseException>) {
    super({
      name: "TooManyBucketsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyBucketsException.prototype);
  }
}

/**
 * The specified account has reached its limit of configuration templates.
 *
 * @public
 */
export class TooManyConfigurationTemplatesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException";
  readonly name = "TooManyConfigurationTemplatesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyConfigurationTemplatesException, __BaseException>) {
    super({
      name: "TooManyConfigurationTemplatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyConfigurationTemplatesException.prototype);
  }
}

/**
 * You have exceeded the maximum number of allowed platforms associated with the account.
 *
 * @public
 */
export class TooManyPlatformsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyPlatformsException";
  readonly name = "TooManyPlatformsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPlatformsException, __BaseException>) {
    super({
      name: "TooManyPlatformsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPlatformsException.prototype);
  }
}

/**
 * The specified account does not have a subscription to Amazon S3.
 *
 * @public
 */
export class S3SubscriptionRequiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException";
  readonly name = "S3SubscriptionRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3SubscriptionRequiredException, __BaseException>) {
    super({
      name: "S3SubscriptionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3SubscriptionRequiredException.prototype);
  }
}

/**
 * Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.
 *
 * @public
 */
export class OperationInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#OperationInProgressException";
  readonly name = "OperationInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

/**
 * Unable to delete the Amazon S3 source bundle associated with the application version. The application version was deleted successfully.
 *
 * @public
 */
export class SourceBundleDeletionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException";
  readonly name = "SourceBundleDeletionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceBundleDeletionException, __BaseException>) {
    super({
      name: "SourceBundleDeletionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceBundleDeletionException.prototype);
  }
}

/**
 * You cannot delete the platform version because there are still environments running on it.
 *
 * @public
 */
export class PlatformVersionStillReferencedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException";
  readonly name = "PlatformVersionStillReferencedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformVersionStillReferencedException, __BaseException>) {
    super({
      name: "PlatformVersionStillReferencedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformVersionStillReferencedException.prototype);
  }
}

/**
 * One or more input parameters is not valid. Please correct the input parameters and try the operation again.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * A resource doesn't exist for the specified Amazon Resource Name (ARN).
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.
 *
 * @public
 */
export class ResourceTypeNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException";
  readonly name = "ResourceTypeNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceTypeNotSupportedException, __BaseException>) {
    super({
      name: "ResourceTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceTypeNotSupportedException.prototype);
  }
}

/**
 * The number of tags in the resource would exceed the number of tags that each resource can have.
 *
 * To calculate this, the operation considers both the number of tags the resource already has and the tags this operation would add if it succeeded.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.elasticbeanstalk#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}
