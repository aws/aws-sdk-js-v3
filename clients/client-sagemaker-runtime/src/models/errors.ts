// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerRuntimeServiceException as __BaseException } from "./SageMakerRuntimeServiceException";

/**
 * <p>Your request caused an exception with an internal dependency. Contact customer
 *             support. </p>
 * @public
 */
export class InternalDependencyException extends __BaseException {
  readonly name = "InternalDependencyException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalDependencyException, __BaseException>) {
    super({
      name: "InternalDependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalDependencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> An internal failure occurred. </p>
 * @public
 */
export class InternalFailure extends __BaseException {
  readonly name = "InternalFailure" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailure, __BaseException>) {
    super({
      name: "InternalFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 * @public
 */
export class ModelError extends __BaseException {
  readonly name = "ModelError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> Original status code. </p>
   * @public
   */
  OriginalStatusCode?: number | undefined;

  /**
   * <p> Original message. </p>
   * @public
   */
  OriginalMessage?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the log stream. </p>
   * @public
   */
  LogStreamArn?: string | undefined;
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
  }
}

/**
 * <p>Either a serverless endpoint variant's resources are still being provisioned, or a
 *             multi-model endpoint is still downloading or loading the target model. Wait and try your
 *             request again.</p>
 * @public
 */
export class ModelNotReadyException extends __BaseException {
  readonly name = "ModelNotReadyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelNotReadyException, __BaseException>) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The service is unavailable. Try your call again. </p>
 * @public
 */
export class ServiceUnavailable extends __BaseException {
  readonly name = "ServiceUnavailable" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailable, __BaseException>) {
    super({
      name: "ServiceUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Inspect your request and try again. </p>
 * @public
 */
export class ValidationError extends __BaseException {
  readonly name = "ValidationError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationError, __BaseException>) {
    super({
      name: "ValidationError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
 * @public
 */
export class InternalStreamFailure extends __BaseException {
  readonly name = "InternalStreamFailure" as const;
  readonly $fault = "server" as const;
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
 * <p> An error occurred while streaming the response body. This error can have the
 *     following error codes:</p>
 *          <dl>
 *             <dt>ModelInvocationTimeExceeded</dt>
 *             <dd>
 *                <p>The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker AI.</p>
 *             </dd>
 *             <dt>StreamBroken</dt>
 *             <dd>
 *                <p>The Transmission Control Protocol (TCP) connection between the client and
 *                     the model was reset or closed.</p>
 *             </dd>
 *          </dl>
 * @public
 */
export class ModelStreamError extends __BaseException {
  readonly name = "ModelStreamError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>This error can have the following error codes:</p>
   *          <dl>
   *             <dt>ModelInvocationTimeExceeded</dt>
   *             <dd>
   *                <p>The model failed to finish sending the response within the timeout period
   *                         allowed by Amazon SageMaker AI.</p>
   *             </dd>
   *             <dt>StreamBroken</dt>
   *             <dd>
   *                <p>The Transmission Control Protocol (TCP) connection between the client and
   *                         the model was reset or closed.</p>
   *             </dd>
   *          </dl>
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
