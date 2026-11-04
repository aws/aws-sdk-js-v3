// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SageMakerRuntimeHTTP2ServiceException as __BaseException } from "./SageMakerRuntimeHTTP2ServiceException";

/**
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @public
 */
export class InputValidationError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#InputValidationError";
  readonly name = "InputValidationError" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InputValidationError, __BaseException>) {
    super({
      name: "InputValidationError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InputValidationError.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @public
 */
export class InternalServerError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#InternalServerError";
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * Internal stream failure that occurs during streaming.
 *
 * @public
 */
export class InternalStreamFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#InternalStreamFailure";
  readonly name = "InternalStreamFailure" as const;
  readonly $fault = "server" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalStreamFailure, __BaseException>) {
    super({
      name: "InternalStreamFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalStreamFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Model stream error that occurs during streaming.
 *
 * @public
 */
export class ModelStreamError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#ModelStreamError";
  readonly name = "ModelStreamError" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelStreamError, __BaseException>) {
    super({
      name: "ModelStreamError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelStreamError.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * An error occurred while processing the model.
 *
 * @public
 */
export class ModelError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#ModelError";
  readonly name = "ModelError" as const;
  readonly $fault = "client" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * HTTP status code returned by model.
   *
   * @public
   */
  OriginalStatusCode?: number | undefined;

  /**
   * Original error message from the model.
   *
   * @public
   */
  OriginalMessage?: string | undefined;

  /**
   * CloudWatch log stream ARN.
   *
   * @public
   */
  LogStreamArn?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelError, __BaseException>) {
    super({
      name: "ModelError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelError.prototype);
    this.Message = opts.Message;
    this.OriginalStatusCode = opts.OriginalStatusCode;
    this.OriginalMessage = opts.OriginalMessage;
    this.LogStreamArn = opts.LogStreamArn;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * The request has failed due to a temporary failure of the server.
 *
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerruntimehttp2#ServiceUnavailableError";
  readonly name = "ServiceUnavailableError" as const;
  readonly $fault = "server" as const;
  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableError, __BaseException>) {
    super({
      name: "ServiceUnavailableError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}
