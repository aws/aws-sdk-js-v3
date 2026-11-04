// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";
import { ShieldServiceException as __BaseException } from "./ShieldServiceException";

/**
 * Exception that indicates the specified `AttackId` does not exist, or the requester does not have the appropriate permissions to access the `AttackId`.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the `iam:PassRole` permission. This error indicates the user did not have the appropriate permissions. For more information, see [Granting a User Permissions to Pass a Role to an Amazon Web Services Service](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html).
 *
 * @public
 */
export class AccessDeniedForDependencyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#AccessDeniedForDependencyException";
  readonly name = "AccessDeniedForDependencyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedForDependencyException, __BaseException>) {
    super({
      name: "AccessDeniedForDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedForDependencyException.prototype);
  }
}

/**
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @public
 */
export class InternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#InternalErrorException";
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * Exception that indicates that the operation would not cause any change to occur.
 *
 * @public
 */
export class InvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#InvalidOperationException";
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
 * Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * Additional information about the exception.
   *
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * Fields that caused the exception.
   *
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * Exception that indicates that the operation would exceed a limit.
 *
 * @public
 */
export class LimitsExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#LimitsExceededException";
  readonly name = "LimitsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The type of limit that would be exceeded.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The threshold that would be exceeded.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitsExceededException, __BaseException>) {
    super({
      name: "LimitsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitsExceededException.prototype);
    this.Type = opts.Type;
    this.Limit = opts.Limit;
  }
}

/**
 * The ARN of the role that you specified does not exist.
 *
 * @public
 */
export class NoAssociatedRoleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#NoAssociatedRoleException";
  readonly name = "NoAssociatedRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAssociatedRoleException, __BaseException>) {
    super({
      name: "NoAssociatedRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAssociatedRoleException.prototype);
  }
}

/**
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @public
 */
export class OptimisticLockException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#OptimisticLockException";
  readonly name = "OptimisticLockException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptimisticLockException, __BaseException>) {
    super({
      name: "OptimisticLockException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptimisticLockException.prototype);
  }
}

/**
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * Type of resource.
   *
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceType = opts.resourceType;
  }
}

/**
 * Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.
 *
 * @public
 */
export class InvalidResourceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#InvalidResourceException";
  readonly name = "InvalidResourceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceException, __BaseException>) {
    super({
      name: "InvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceException.prototype);
  }
}

/**
 * Exception indicating the specified resource already exists. If available, this exception includes details in additional properties.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The type of resource that already exists.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.resourceType = opts.resourceType;
  }
}

/**
 * You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the `AutoRenew` parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change `AutoRenew` prior to that period.
 *
 * @public
 */
export class LockedSubscriptionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#LockedSubscriptionException";
  readonly name = "LockedSubscriptionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LockedSubscriptionException, __BaseException>) {
    super({
      name: "LockedSubscriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LockedSubscriptionException.prototype);
  }
}

/**
 * Exception that indicates that the `NextToken` specified in the request is invalid. Submit the request using the `NextToken` value that was returned in the prior response.
 *
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.shield#InvalidPaginationTokenException";
  readonly name = "InvalidPaginationTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}
