// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DeviceFarmServiceException as __BaseException } from "./DeviceFarmServiceException";

/**
 * <p>An invalid argument was specified.</p>
 * @public
 */
export class ArgumentException extends __BaseException {
  readonly name = "ArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ArgumentException, __BaseException>) {
    super({
      name: "ArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ArgumentException.prototype);
  }
}

/**
 * <p>The requested object could not be deleted.</p>
 * @public
 */
export class CannotDeleteException extends __BaseException {
  readonly name = "CannotDeleteException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDeleteException, __BaseException>) {
    super({
      name: "CannotDeleteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDeleteException.prototype);
  }
}

/**
 * <p>A limit was exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The specified entity was not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>There was a problem with the service account.</p>
 * @public
 */
export class ServiceAccountException extends __BaseException {
  readonly name = "ServiceAccountException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAccountException, __BaseException>) {
    super({
      name: "ServiceAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAccountException.prototype);
  }
}

/**
 * <p>The operation was not successful. Try again.</p>
 * @public
 */
export class TagOperationException extends __BaseException {
  readonly name = "TagOperationException" as const;
  readonly $fault = "client" as const;
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagOperationException, __BaseException>) {
    super({
      name: "TagOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagOperationException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>There was an error with the update request, or you do not have sufficient permissions
 *             to update this VPC endpoint configuration.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * <p>Exception gets thrown when a user is not eligible to perform the specified
 *             transaction.</p>
 * @public
 */
export class NotEligibleException extends __BaseException {
  readonly name = "NotEligibleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotEligibleException, __BaseException>) {
    super({
      name: "NotEligibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotEligibleException.prototype);
  }
}

/**
 * <p>An entity with the same name already exists.</p>
 * @public
 */
export class IdempotencyException extends __BaseException {
  readonly name = "IdempotencyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
  }
}

/**
 * <p>The request doesn't comply with the AWS Identity and Access Management (IAM) tag
 *             policy. Correct your request and then retry it.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
  readonly name = "TagPolicyException" as const;
  readonly $fault = "client" as const;
  resourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The list of tags on the repository is over the limit. The maximum number of tags that
 *             can be applied to a repository is 50. </p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  resourceName?: string | undefined;
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
    this.resourceName = opts.resourceName;
  }
}
