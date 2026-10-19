// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { Cloud9ServiceException as __BaseException } from "./Cloud9ServiceException";

/**
 * <p>The target request is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>A conflict occurred.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>An access permissions issue occurred.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>An internal server error occurred.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>A service limit was exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>The target resource cannot be found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>Too many service requests were made over the given time period.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
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
    this.className = opts.className;
    this.code = opts.code;
  }
}

/**
 * <p>A concurrent access issue occurred.</p>
 * @public
 */
export class ConcurrentAccessException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloud9#ConcurrentAccessException";
  readonly name = "ConcurrentAccessException" as const;
  readonly $fault = "client" as const;
  className?: string | undefined;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentAccessException, __BaseException>) {
    super({
      name: "ConcurrentAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentAccessException.prototype);
    this.className = opts.className;
    this.code = opts.code;
  }
}
