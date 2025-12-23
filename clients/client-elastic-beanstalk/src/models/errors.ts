// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  ElasticBeanstalkSyntheticServiceException as __BaseException,
} from "./ElasticBeanstalkSyntheticServiceException";

/**
 * <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 * @public
 */
export class InsufficientPrivilegesException extends __BaseException {
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
 * <p>A generic service exception has occurred.</p>
 * @public
 */
export class ElasticBeanstalkServiceException extends __BaseException {
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
 * <p>Cannot modify the managed action in its current state.</p>
 * @public
 */
export class ManagedActionInvalidStateException extends __BaseException {
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
 * <p>The specified account has reached its limit of environments.</p>
 * @public
 */
export class TooManyEnvironmentsException extends __BaseException {
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
 * <p>The specified account has reached its limit of applications.</p>
 * @public
 */
export class TooManyApplicationsException extends __BaseException {
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
 * <p>AWS CodeBuild is not available in the specified region.</p>
 * @public
 */
export class CodeBuildNotInServiceRegionException extends __BaseException {
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
 * <p>The specified S3 bucket does not belong to the S3 region in which the service is
 *       running. The following regions are supported:</p>
 *          <ul>
 *             <li>
 *                <p>IAD/us-east-1</p>
 *             </li>
 *             <li>
 *                <p>PDX/us-west-2</p>
 *             </li>
 *             <li>
 *                <p>DUB/eu-west-1</p>
 *             </li>
 *          </ul>
 * @public
 */
export class S3LocationNotInServiceRegionException extends __BaseException {
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
 * <p>The specified account has reached its limit of application versions.</p>
 * @public
 */
export class TooManyApplicationVersionsException extends __BaseException {
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
 * <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 * @public
 */
export class TooManyBucketsException extends __BaseException {
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
 * <p>The specified account has reached its limit of configuration templates.</p>
 * @public
 */
export class TooManyConfigurationTemplatesException extends __BaseException {
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
 * <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
 * @public
 */
export class TooManyPlatformsException extends __BaseException {
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
 * <p>The specified account does not have a subscription to Amazon S3.</p>
 * @public
 */
export class S3SubscriptionRequiredException extends __BaseException {
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
 * <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 * @public
 */
export class OperationInProgressException extends __BaseException {
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
 * <p>Unable to delete the Amazon S3 source bundle associated with the application version.
 *       The application version was deleted successfully.</p>
 * @public
 */
export class SourceBundleDeletionException extends __BaseException {
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
 * <p>You cannot delete the platform version because there are still environments running on it.</p>
 * @public
 */
export class PlatformVersionStillReferencedException extends __BaseException {
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
 * <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
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
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
 * @public
 */
export class ResourceTypeNotSupportedException extends __BaseException {
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
 * <p>The number of tags in the resource would exceed the number of tags that each resource
 *       can have.</p>
 *          <p>To calculate this, the operation considers both the number of tags the resource already has
 *       and the tags this operation would add if it succeeded.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
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
