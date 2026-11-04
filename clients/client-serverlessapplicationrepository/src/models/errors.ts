// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  ServerlessApplicationRepositoryServiceException as __BaseException,
} from "./ServerlessApplicationRepositoryServiceException";

/**
 * One of the parameters in the request is invalid.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * 400
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * One of the parameters in the request is invalid.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * The resource already exists.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * 409
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The resource already exists.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * The client is not authenticated.
 *
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * 403
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The client is not authenticated.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * The AWS Serverless Application Repository service encountered an internal error.
 *
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * 500
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The AWS Serverless Application Repository service encountered an internal error.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * The client is sending more than the allowed number of requests per unit of time.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * 429
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The client is sending more than the allowed number of requests per unit of time.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * The resource (for example, an access policy statement) specified in the request doesn't exist.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.serverlessapplicationrepository#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * 404
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The resource (for example, an access policy statement) specified in the request doesn't exist.
   *
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}
