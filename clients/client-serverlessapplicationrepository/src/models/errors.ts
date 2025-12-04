// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServerlessApplicationRepositoryServiceException as __BaseException } from "./ServerlessApplicationRepositoryServiceException";

/**
 * <p>One of the parameters in the request is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>400</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>One of the parameters in the request is invalid.</p>
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
 * <p>The resource already exists.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>409</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The resource already exists.</p>
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
 * <p>The client is not authenticated.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>403</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The client is not authenticated.</p>
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
 * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>500</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The AWS Serverless Application Repository service encountered an internal error.</p>
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
 * <p>The client is sending more than the allowed number of requests per unit of time.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>429</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The client is sending more than the allowed number of requests per unit of time.</p>
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
 * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>404</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
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
