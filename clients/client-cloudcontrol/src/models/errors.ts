// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudControlServiceException as __BaseException } from "./CloudControlServiceException";

/**
 * <p>The resource with the name requested already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is currently being modified by another operation.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource operation with the specified request token can't be found.</p>
 * @public
 */
export class RequestTokenNotFoundException extends __BaseException {
  readonly name = "RequestTokenNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTokenNotFoundException, __BaseException>) {
    super({
      name: "RequestTokenNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTokenNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified client token has already been used in another resource request.</p>
 *          <p>It's best practice for client tokens to be unique for each resource operation request.
 *       However, client token expire after 36 hours.</p>
 * @public
 */
export class ClientTokenConflictException extends __BaseException {
  readonly name = "ClientTokenConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientTokenConflictException, __BaseException>) {
    super({
      name: "ClientTokenConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientTokenConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Another resource operation is currently being performed on this resource.</p>
 * @public
 */
export class ConcurrentOperationException extends __BaseException {
  readonly name = "ConcurrentOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentOperationException, __BaseException>) {
    super({
      name: "ConcurrentOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the downstream service generated an error that
 *       doesn't map to any other handler error code.</p>
 * @public
 */
export class GeneralServiceException extends __BaseException {
  readonly name = "GeneralServiceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GeneralServiceException, __BaseException>) {
    super({
      name: "GeneralServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GeneralServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 * @public
 */
export class HandlerFailureException extends __BaseException {
  readonly name = "HandlerFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandlerFailureException, __BaseException>) {
    super({
      name: "HandlerFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HandlerFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 * @public
 */
export class HandlerInternalFailureException extends __BaseException {
  readonly name = "HandlerInternalFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HandlerInternalFailureException, __BaseException>) {
    super({
      name: "HandlerInternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HandlerInternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 * @public
 */
export class InvalidCredentialsException extends __BaseException {
  readonly name = "InvalidCredentialsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCredentialsException, __BaseException>) {
    super({
      name: "InvalidCredentialsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCredentialsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the request couldn't be completed due to networking
 *       issues, such as a failure to receive a response from the server.</p>
 * @public
 */
export class NetworkFailureException extends __BaseException {
  readonly name = "NetworkFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NetworkFailureException, __BaseException>) {
    super({
      name: "NetworkFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, NetworkFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 * @public
 */
export class NotStabilizedException extends __BaseException {
  readonly name = "NotStabilizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotStabilizedException, __BaseException>) {
    super({
      name: "NotStabilizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotStabilizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore can't be updated.</p>
 * @public
 */
export class NotUpdatableException extends __BaseException {
  readonly name = "NotUpdatableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotUpdatableException, __BaseException>) {
    super({
      name: "NotUpdatableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotUpdatableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cloud Control API hasn't received a valid response from the resource handler, due to a configuration
 *       error. This includes issues such as the resource handler returning an invalid response, or
 *       timing out.</p>
 * @public
 */
export class PrivateTypeException extends __BaseException {
  readonly name = "PrivateTypeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PrivateTypeException, __BaseException>) {
    super({
      name: "PrivateTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PrivateTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and can't be acted upon until that operation is
 *       finished.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource with the specified identifier can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 * @public
 */
export class ServiceInternalErrorException extends __BaseException {
  readonly name = "ServiceInternalErrorException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceInternalErrorException, __BaseException>) {
    super({
      name: "ServiceInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceInternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 * @public
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name = "ServiceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 * @public
 */
export class TypeNotFoundException extends __BaseException {
  readonly name = "TypeNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeNotFoundException, __BaseException>) {
    super({
      name: "TypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource doesn't support this resource operation.</p>
 * @public
 */
export class UnsupportedActionException extends __BaseException {
  readonly name = "UnsupportedActionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedActionException, __BaseException>) {
    super({
      name: "UnsupportedActionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedActionException.prototype);
    this.Message = opts.Message;
  }
}
