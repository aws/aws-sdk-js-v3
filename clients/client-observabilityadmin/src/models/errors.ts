// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationError } from "./models_0";
import { ObservabilityAdminServiceException as __BaseException } from "./ObservabilityAdminServiceException";

/**
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The name of the exception.
   *
   * @public
   */
  amznErrorType?: string | undefined;
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
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * The requested operation conflicts with the current state of the specified resource or with another request.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The identifier of the resource which is in conflict with the requested operation.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the resource which is in conflict with the requested operation.
   *
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * The name of the exception.
   *
   * @public
   */
  amznErrorType?: string | undefined;

  /**
   * The number of seconds to wait before retrying the request.
   *
   * @public
   */
  retryAfterSeconds?: number | undefined;
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
    this.amznErrorType = opts.amznErrorType;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * The requested operation would exceed the allowed quota for the specified resource type.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The identifier of the resource which exceeds the service quota.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the resource which exceeds the service quota.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The code for the service of the exceeded quota.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * The code for the exceeded service quota.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * The name of the exception.
   *
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * The request throughput limit was exceeded.
 *
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * Indicates input validation failed. Check your request parameters and retry the request.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The errors in the input which caused the exception.
   *
   * @public
   */
  Errors?: ValidationError[] | undefined;
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
    this.Errors = opts.Errors;
  }
}

/**
 * The specified resource (such as a telemetry rule) could not be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The identifier of the resource which could not be found.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the resource which could not be found.
   *
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
 * The requested operation cannot be completed on the specified resource in the current state.
 *
 * @public
 */
export class InvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.observabilityadmin#InvalidStateException";
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}
