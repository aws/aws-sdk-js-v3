// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { BackupServiceException as __BaseException } from "./BackupServiceException";

/**
 * The required resource already exists.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * @public
   */
  Arn?: string | undefined;

  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.CreatorRequestId = opts.CreatorRequestId;
    this.Arn = opts.Arn;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * Indicates that a required parameter is missing.
 *
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#MissingParameterValueException";
  readonly name = "MissingParameterValueException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * A resource that is required for the action doesn't exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
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
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * The request failed due to a temporary failure of the server.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * Backup is already performing an action on this recovery point. It can't perform the action you requested until the first action finishes. Try again later.
 *
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#InvalidResourceStateException";
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
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
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.
 *
 * @public
 */
export class DependencyFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.backup#DependencyFailureException";
  readonly name = "DependencyFailureException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * @public
   */
  Type?: string | undefined;

  /**
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailureException, __BaseException>) {
    super({
      name: "DependencyFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}
