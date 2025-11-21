// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerRuntimeHTTP2ServiceException as __BaseException } from "./SageMakerRuntimeHTTP2ServiceException";

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class InputValidationError extends __BaseException {
  readonly name = "InputValidationError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Error code.</p>
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
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Error code.</p>
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
 * <p>Internal stream failure that occurs during streaming.</p>
 * @public
 */
export class InternalStreamFailure extends __BaseException {
  readonly name = "InternalStreamFailure" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Error message.</p>
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
 * <p>Model stream error that occurs during streaming.</p>
 * @public
 */
export class ModelStreamError extends __BaseException {
  readonly name = "ModelStreamError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Error code.</p>
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
 * <p>An error occurred while processing the model.</p>
 * @public
 */
export class ModelError extends __BaseException {
  readonly name = "ModelError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>HTTP status code returned by model.</p>
   * @public
   */
  OriginalStatusCode?: number | undefined;

  /**
   * <p>Original error message from the model.</p>
   * @public
   */
  OriginalMessage?: string | undefined;

  /**
   * <p>CloudWatch log stream ARN.</p>
   * @public
   */
  LogStreamArn?: string | undefined;

  /**
   * <p>Error code.</p>
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
 * <p>The request has failed due to a temporary failure of the server.</p>
 * @public
 */
export class ServiceUnavailableError extends __BaseException {
  readonly name = "ServiceUnavailableError" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Error code.</p>
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
