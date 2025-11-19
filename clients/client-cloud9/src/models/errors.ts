// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Cloud9ServiceException as __BaseException } from "./Cloud9ServiceException";

/**
 * <p>The target request is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
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
