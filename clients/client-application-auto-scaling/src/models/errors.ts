// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ApplicationAutoScalingServiceException as __BaseException } from "./ApplicationAutoScalingServiceException";

/**
 * <p>Concurrent updates caused an exception, for example, if you request an update to an
 *          Application Auto Scaling resource that already has a pending update.</p>
 * @public
 */
export class ConcurrentUpdateException extends __BaseException {
  readonly name = "ConcurrentUpdateException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdateException, __BaseException>) {
    super({
      name: "ConcurrentUpdateException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service encountered an internal error.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified object could not be found. For any operation that depends on the existence
 *          of a scalable target, this exception is thrown if the scalable target with the specified
 *          service namespace, resource ID, and scalable dimension does not exist. For any operation
 *          that deletes or deregisters a resource, this exception is thrown if the resource cannot be
 *          found.</p>
 * @public
 */
export class ObjectNotFoundException extends __BaseException {
  readonly name = "ObjectNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotFoundException, __BaseException>) {
    super({
      name: "ObjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception was thrown for a validation issue. Review the available parameters for the
 *          API request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The next token supplied was invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Failed access to resources caused an exception. This exception is thrown when Application Auto Scaling
 *          is unable to retrieve the alarms associated with a scaling policy due to a client error,
 *          for example, if the role ARN specified for a scalable target does not have permission to
 *          call the CloudWatch <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> on your behalf.</p>
 * @public
 */
export class FailedResourceAccessException extends __BaseException {
  readonly name = "FailedResourceAccessException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedResourceAccessException, __BaseException>) {
    super({
      name: "FailedResourceAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedResourceAccessException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the Application Auto Scaling resource. This value is an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceName?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>A per-account resource limit is exceeded. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-limits.html">Application Auto Scaling service quotas</a>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request contains too many tags. Try the request again with fewer tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the Application Auto Scaling resource. This value is an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceName?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}
