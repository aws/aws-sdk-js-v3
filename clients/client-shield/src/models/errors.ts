// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";
import { ShieldServiceException as __BaseException } from "./ShieldServiceException";

/**
 * <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p>
 * @public
 */
export class AccessDeniedForDependencyException extends __BaseException {
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
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
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
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
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
 * <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Additional information about the exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>Fields that caused the exception.</p>
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
 * <p>Exception that indicates that the operation would exceed a limit.</p>
 * @public
 */
export class LimitsExceededException extends __BaseException {
  readonly name = "LimitsExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The type of limit that would be exceeded.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The threshold that would be exceeded.</p>
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
 * <p>The ARN of the role that you specified does not exist.</p>
 * @public
 */
export class NoAssociatedRoleException extends __BaseException {
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
 * <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 * @public
 */
export class OptimisticLockException extends __BaseException {
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
 * <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Type of resource.</p>
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
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 * @public
 */
export class InvalidResourceException extends __BaseException {
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
 * <p>Exception indicating the specified resource already exists. If available, this exception includes details in additional properties. </p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The type of resource that already exists.</p>
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
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 * @public
 */
export class LockedSubscriptionException extends __BaseException {
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
 * <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
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
