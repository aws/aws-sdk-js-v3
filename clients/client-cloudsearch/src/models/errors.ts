// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudSearchServiceException as __BaseException } from "./CloudSearchServiceException";

/**
 * An error occurred while processing the request.
 *
 * @public
 */
export class BaseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#BaseException";
  readonly name = "BaseException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @public
 */
export class InternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#InternalException";
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it has invalid parameters.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
   *
   * @public
   */
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because a resource limit has already been met.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it specified an invalid type definition.
 *
 * @public
 */
export class InvalidTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#InvalidTypeException";
  readonly name = "InvalidTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it attempted an operation which is not enabled.
 *
 * @public
 */
export class DisabledOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearch#DisabledOperationException";
  readonly name = "DisabledOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * A machine-parsable string error or warning code.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable string error or warning message.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}
