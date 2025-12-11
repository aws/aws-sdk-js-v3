// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationError } from "./models_0";
import { ObservabilityAdminServiceException as __BaseException } from "./ObservabilityAdminServiceException";

/**
 * <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> The name of the exception. </p>
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
 * <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> The identifier of the resource which is in conflict with the requested operation. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The type of the resource which is in conflict with the requested operation. </p>
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
 * <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * <p> The name of the exception. </p>
   * @public
   */
  amznErrorType?: string | undefined;

  /**
   * <p>The number of seconds to wait before retrying the request.</p>
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
 * <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> The identifier of the resource which exceeds the service quota. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The type of the resource which exceeds the service quota. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p> The code for the service of the exceeded quota. </p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p> The code for the exceeded service quota. </p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p> The name of the exception. </p>
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
 * <p> The request throughput limit was exceeded. </p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
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
 * <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> The errors in the input which caused the exception. </p>
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
 * <p> The specified resource (such as a telemetry rule) could not be found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p> The identifier of the resource which could not be found. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The type of the resource which could not be found. </p>
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
 * <p> The requested operation cannot be completed on the specified resource in the current state. </p>
 * @public
 */
export class InvalidStateException extends __BaseException {
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
