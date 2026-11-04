// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ResourceShareError } from "./models_0";
import { MqServiceException as __BaseException } from "./MqServiceException";

/**
 * Returns information about an error.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}

/**
 * Returns information about an error.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}

/**
 * Returns information about an error.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}

/**
 * Returns information about an error.
 *
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}

/**
 * Returns information about an error.
 *
 * @public
 */
export class UnauthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#UnauthorizedException";
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}

/**
 * Returns information about an error.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mq#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The attribute which caused the error.
   *
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * The explanation of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of resource share errors.
   *
   * @public
   */
  ResourceShareErrors?: ResourceShareError[] | undefined;
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
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
    this.ResourceShareErrors = opts.ResourceShareErrors;
  }
}
