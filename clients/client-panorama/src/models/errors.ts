// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  ConflictExceptionErrorArgument,
  ValidationExceptionErrorArgument,
  ValidationExceptionField,
  ValidationExceptionReason,
} from "./models_0";
import { PanoramaServiceException as __BaseException } from "./PanoramaServiceException";

/**
 * <p>The requestor does not have permission to access the target action or resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
 * <p>The target resource is in use.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The resource's ID.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource's type.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>A unique ID for the error.</p>
   * @public
   */
  ErrorId?: string | undefined;

  /**
   * <p>A list of attributes that led to the exception and their values.</p>
   * @public
   */
  ErrorArguments?: ConflictExceptionErrorArgument[] | undefined;
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
    this.ErrorId = opts.ErrorId;
    this.ErrorArguments = opts.ErrorArguments;
  }
}

/**
 * <p>An internal error occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
  /**
   * <p>The number of seconds a client should wait before retrying the call.</p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The request would cause a limit to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The target resource's ID.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The target resource's type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the limit.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  ServiceCode: string | undefined;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The request contains an invalid parameter value.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason that validation failed.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * <p>A unique ID for the error.</p>
   * @public
   */
  ErrorId?: string | undefined;

  /**
   * <p>A list of attributes that led to the exception and their values.</p>
   * @public
   */
  ErrorArguments?: ValidationExceptionErrorArgument[] | undefined;

  /**
   * <p>A list of request parameters that failed validation.</p>
   * @public
   */
  Fields?: ValidationExceptionField[] | undefined;
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
    this.Reason = opts.Reason;
    this.ErrorId = opts.ErrorId;
    this.ErrorArguments = opts.ErrorArguments;
    this.Fields = opts.Fields;
  }
}

/**
 * <p>The target resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The resource's ID.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource's type.</p>
   * @public
   */
  ResourceType: string | undefined;
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
