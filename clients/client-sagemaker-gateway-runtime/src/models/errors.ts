// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { StreamErrorCode } from "./enums";
import { SageMakerGatewayRuntimeServiceException as __BaseException } from "./SageMakerGatewayRuntimeServiceException";

/**
 * The caller is not authorized to invoke this gateway. Invoking requires the
 * `sagemaker:InvokeGlobalInferenceGateway` permission, or
 * `sagemaker:InvokeGlobalInferenceGatewayWithResponseStream` for the streaming
 * operation, on the gateway ARN. A message starting `inference gateway` means
 * the inference gateway serving the model refused the request with a 401 or
 * 403, for example for its customer identity token. Its status code is in the
 * message (the response status is 403), and up to 256 bytes of its error
 * message are quoted.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the error. It starts with a prefix such as
   * `Global Inference Gateway: ` or `inference gateway: ` that says where the
   * error came from.
   * @public
   */
  Message: string | undefined;
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
 * 502 -- The gateway could not get a usable response from the inference
 * gateway. The `Message` prefix says why:
 *
 * * `Global Inference Gateway: could not reach the inference gateway: <reason>`
 *   -- the request could not be sent, or the connection closed before a
 *   response arrived (for example, the connection failed, or the inference
 *   gateway closed it after reading the request).
 * * `Global Inference Gateway: timed out waiting for the inference gateway`
 *   -- on the buffered operation, the inference gateway stopped sending
 *   partway through the response body and the gateway's read timeout expired.
 *   (The same text on a GatewayTimeoutException means no response arrived.)
 * * Any other `Global Inference Gateway: ` message -- the gateway ended a
 *   response before it was complete, for example because it exceeded the
 *   10 MiB limit of the buffered operation, the request exceeded its maximum
 *   duration, or the inference gateway was taken out of service.
 * * `inference gateway: <status> <message>` -- the inference gateway serving
 *   the model returned a 502, 500, 503 or another 5xx error. Its status code
 *   is in the message (the response status is 502), and up to 256 bytes of its
 *   error message are quoted.
 * * `inference gateway: response ended unexpectedly` -- the inference
 *   gateway's connection failed while it was sending the response.
 *
 * The inference gateway names a component in the prefix when it reports one:
 * `inference gateway (<component>): `, where the component is `config` (the
 * inference gateway's configuration and proxy layer), `scheduler` (its request
 * scheduler), `model selector` (its model selector) or `model server` (the
 * model server).
 *
 * Not modeled as retryable: a 502 can mean the inference already ran, and the
 * gateway may already have tried another inference gateway. Standard SDK retry
 * modes may still retry a 5xx status, which would run (and bill) the inference
 * again; set max attempts to 1 if a repeated inference is unacceptable.
 * @public
 */
export class BadGatewayException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#BadGatewayException";
  readonly name = "BadGatewayException" as const;
  readonly $fault = "server" as const;
  /**
   * A description of the error. It starts with a prefix such as
   * `Global Inference Gateway: ` or `inference gateway: ` that says where the
   * error came from.
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * 504 -- The inference gateway did not respond in time. The `Message` prefix
 * says whose time limit expired:
 *
 * * `Global Inference Gateway: timed out waiting for the inference gateway`
 *   -- the gateway's limit on the wait for the first part of the response.
 * * `inference gateway: <status> <message>` -- the inference gateway serving
 *   the model returned a 504, or a 408 because it timed out waiting for the
 *   request to arrive. Its status code is
 *   in the message (the response status is 504), and up to 256 bytes of its
 *   error message are quoted.
 *
 * The inference gateway names a component in the prefix when it reports one:
 * `inference gateway (<component>): `, where the component is `config` (the
 * inference gateway's configuration and proxy layer), `scheduler` (its request
 * scheduler), `model selector` (its model selector) or `model server` (the
 * model server).
 *
 * Not modeled as retryable: a timeout does not prove the inference did not
 * run, and the gateway may already have tried another inference gateway.
 * Standard SDK retry modes may still retry a 5xx status, which could run (and
 * bill) the inference again; set max attempts to 1 if a repeated inference is
 * unacceptable.
 * @public
 */
export class GatewayTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#GatewayTimeoutException";
  readonly name = "GatewayTimeoutException" as const;
  readonly $fault = "server" as const;
  /**
   * A description of the error. It starts with a prefix such as
   * `Global Inference Gateway: ` or `inference gateway: ` that says where the
   * error came from.
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayTimeoutException, __BaseException>) {
    super({
      name: "GatewayTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An unexpected internal failure occurred.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * A description of the error. It starts with `Global Inference Gateway: `,
   * because the Global Inference Gateway returns this error itself.
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request body exceeds the 10 MiB limit. Reduce the size of the payload
 * and send the request again.
 * @public
 */
export class PayloadTooLargeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#PayloadTooLargeException";
  readonly name = "PayloadTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the error. It starts with `Global Inference Gateway: `,
   * because the Global Inference Gateway returns this error itself.
   * @public
   */
  Message: string | undefined;
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
  }
}

/**
 * No gateway with this ID exists in this account and Region, or no target of
 * the gateway serves the model named in the request body. A model that is
 * served but has no available target right now returns
 * ServiceUnavailableException instead. A message starting `inference gateway`
 * means the inference gateway serving the model returned a 404; up to 256
 * bytes of its error message are quoted.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the error. It starts with a prefix such as
   * `Global Inference Gateway: ` or `inference gateway: ` that says where the
   * error came from.
   * @public
   */
  Message: string | undefined;

  /**
   * The ID of the resource that was not found: the gateway ID, or the model
   * name.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The kind of resource that was not found: the gateway, or the model.
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * The service is temporarily unable to serve the request, for example because
 * no capacity is available for the requested model. The request was not
 * dispatched for inference. A 503 returned by the inference gateway serving
 * the model after dispatch is reported as BadGatewayException, with the 503
 * in its `Message`, not as this error.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * A description of the error. It starts with `Global Inference Gateway: `,
   * because the Global Inference Gateway returns this error itself.
   * @public
   */
  Message: string | undefined;
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
 * The request was throttled before it was dispatched for inference. Retry the
 * request with backoff, after the `Retry-After` seconds when the response
 * carries one. A message starting `inference gateway` means the last
 * inference gateway tried for the model returned a 429. The gateway may have
 * tried others first, and they may have failed for other reasons. Up to 256
 * bytes of its error message are quoted.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * A description of the error. It starts with a prefix such as
   * `Global Inference Gateway: ` or `inference gateway: ` that says where the
   * error came from.
   * @public
   */
  Message: string | undefined;
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
 * A failure after the stream started. The `Message` says where it came from:
 * `Global Inference Gateway: ` when a gateway time limit expired or the
 * inference gateway was taken out of service, or
 * `inference gateway: response ended unexpectedly` when the inference
 * gateway's connection failed while it was sending the response. The stream
 * ends after this event.
 * @public
 */
export class InternalStreamFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#InternalStreamFailure";
  readonly name = "InternalStreamFailure" as const;
  readonly $fault = "server" as const;
  /**
   * A description of the failure. It starts with `Global Inference Gateway: `
   * or `inference gateway: `, which says where the failure came from.
   * @public
   */
  Message: string | undefined;
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
 * Reserved for a model error during the stream. Not currently sent; a failure
 * after the stream starts is reported as InternalStreamFailure.
 * @public
 */
export class ModelStreamError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakergatewayruntime#ModelStreamError";
  readonly name = "ModelStreamError" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the error.
   * @public
   */
  Message: string | undefined;

  /**
   * The error code: `StreamBroken` if the model server's stream broke before
   * it completed, or `ModelInvocationTimeExceeded` if the model exceeded its
   * allowed invocation time.
   * @public
   */
  ErrorCode?: StreamErrorCode | undefined;
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
