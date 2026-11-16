// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  SageMakerInferenceRouterRuntimeServiceException as __BaseException,
} from "./SageMakerInferenceRouterRuntimeServiceException";

/**
 * <p>You don't have permission to perform this action. Check that the caller is allowed to invoke the inference router and every destination of the routing target.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request failed because of an error in an internal dependency. Retry the request with exponential backoff.</p>
 * @public
 */
export class InternalDependencyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#InternalDependencyException";
  readonly name = "InternalDependencyException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
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
 * <p>An internal error occurred. Retry the request with exponential backoff. The Amazon Web Services SDKs and the Amazon Web Services CLI do this by default.</p>
 * @public
 */
export class InternalFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#InternalFailure";
  readonly name = "InternalFailure" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
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
 * <p>The model in the destination that served the request returned an error. Check <code>OriginalStatusCode</code>, <code>OriginalMessage</code>, and the destination's logs in Amazon CloudWatch.</p>
 * @public
 */
export class ModelError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#ModelError";
  readonly name = "ModelError" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The HTTP status code that the model container returned.</p>
   * @public
   */
  OriginalStatusCode?: number | undefined;

  /**
   * <p>The error message that the model container returned.</p>
   * @public
   */
  OriginalMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch log stream for the destination that served the request.</p>
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
 * <p>The destination isn't ready to serve the model, for example because an inference component has no copies. Retry the request later.</p>
 * @public
 */
export class ModelNotReadyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#ModelNotReadyException";
  readonly name = "ModelNotReadyException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
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
 * <p>The inference router didn't receive the complete request within 300 seconds of accepting it, for example because of a very slow upload. Retry the request.</p>
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#RequestTimeoutException";
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is temporarily unavailable. For example, no destination of the routing target could serve the request, or a destination didn't respond. Retry the request with exponential backoff. The Amazon Web Services SDKs and the Amazon Web Services CLI do this by default.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A message that describes the error.</p>
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied because you exceeded the request rate for the inference router, or because a destination throttled the request. Retry the request with exponential backoff.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request isn't valid. Check the inference router name, the routing target name, and the request parameters, and then try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakerinferencerouterruntime#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}
