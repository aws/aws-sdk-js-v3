// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AppStreamServiceException as __BaseException } from "./AppStreamServiceException";

/**
 * An API error occurred. Wait a few minutes and try again.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#InvalidParameterCombinationException";
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The requested limit exceeds the permitted limit for an account.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
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
 * The attempted operation is not permitted.
 *
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#OperationNotPermittedException";
  readonly name = "OperationNotPermittedException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource was not found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
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
  }
}

/**
 * The entitlement can't be found.
 *
 * @public
 */
export class EntitlementNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#EntitlementNotFoundException";
  readonly name = "EntitlementNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementNotFoundException, __BaseException>) {
    super({
      name: "EntitlementNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The image can't be updated because it's not compatible for updates.
 *
 * @public
 */
export class IncompatibleImageException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#IncompatibleImageException";
  readonly name = "IncompatibleImageException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleImageException, __BaseException>) {
    super({
      name: "IncompatibleImageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleImageException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support.
 *
 * @public
 */
export class InvalidAccountStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#InvalidAccountStatusException";
  readonly name = "InvalidAccountStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAccountStatusException, __BaseException>) {
    super({
      name: "InvalidAccountStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAccountStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The specified resource exists and is not in use, but isn't available.
 *
 * @public
 */
export class ResourceNotAvailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#ResourceNotAvailableException";
  readonly name = "ResourceNotAvailableException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotAvailableException, __BaseException>) {
    super({
      name: "ResourceNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotAvailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified role is invalid.
 *
 * @public
 */
export class InvalidRoleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#InvalidRoleException";
  readonly name = "InvalidRoleException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRoleException, __BaseException>) {
    super({
      name: "InvalidRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRoleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * WorkSpaces Applications can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.
 *
 * @public
 */
export class RequestLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#RequestLimitExceededException";
  readonly name = "RequestLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestLimitExceededException, __BaseException>) {
    super({
      name: "RequestLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The entitlement already exists.
 *
 * @public
 */
export class EntitlementAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#EntitlementAlreadyExistsException";
  readonly name = "EntitlementAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementAlreadyExistsException, __BaseException>) {
    super({
      name: "EntitlementAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The exception that is thrown when a dry run operation is requested. This indicates that the validation checks have been performed successfully, but no actual resources were created or modified.
 *
 * @public
 */
export class DryRunOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#DryRunOperationException";
  readonly name = "DryRunOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource is in use.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.appstream#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message in the exception.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}
