// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ResourceGroupsServiceException as __BaseException } from "./ResourceGroupsServiceException";

/**
 * The request includes one or more parameters that violate validation rules.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * The caller isn't authorized to make the request. Check permissions.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An internal error occurred while processing the request. Try again later.
 *
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
  }
}

/**
 * The request uses an HTTP method that isn't allowed for the specified resource.
 *
 * @public
 */
export class MethodNotAllowedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#MethodNotAllowedException";
  readonly name = "MethodNotAllowedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You've exceeded throttling limits by making too many requests in a period of time.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request was rejected because it doesn't have valid credentials for the target resource.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * One or more of the specified resources don't exist.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroups#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}
