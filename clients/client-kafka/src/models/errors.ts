// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KafkaServiceException as __BaseException } from "./KafkaServiceException";

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}
