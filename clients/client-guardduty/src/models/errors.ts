// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { GuardDutyServiceException as __BaseException } from "./GuardDutyServiceException";

/**
 * A bad request exception object.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.guardduty#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * An internal server error exception object.
 *
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.guardduty#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * An access denied exception object.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.guardduty#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  Type?: string | undefined;
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
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * A request conflict exception object.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.guardduty#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  Type?: string | undefined;
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
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * The requested resource can't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.guardduty#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  Type?: string | undefined;
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
    this.Type = opts.Type;
  }
}
