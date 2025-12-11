// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PinpointServiceException as __BaseException } from "./PinpointServiceException";

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name = "MethodNotAllowedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name = "PayloadTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message that's returned from the API.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The unique identifier for the request or response.</p>
   * @public
   */
  RequestID?: string | undefined;
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
    this.RequestID = opts.RequestID;
  }
}
