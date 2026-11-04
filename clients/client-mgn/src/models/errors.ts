// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationExceptionReason } from "./enums";
import { MgnServiceException as __BaseException } from "./MgnServiceException";
import type { ErrorDetails, ValidationExceptionField } from "./models_0";

/**
 * Operation denied due to a file permission or access check error.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
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
    this.code = opts.code;
  }
}

/**
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * A conflict occurred when prompting for the Resource ID.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * A conflict occurred when prompting for resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Conflict Exception specific errors.
   *
   * @public
   */
  errors?: ErrorDetails[] | undefined;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.errors = opts.errors;
  }
}

/**
 * Resource not found exception.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * Resource ID not found error.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Resource type not found error.
   *
   * @public
   */
  resourceType?: string | undefined;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * The request could not be completed because it exceeded the service quota.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * Exceeded the service quota resource ID.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Exceeded the service quota resource type.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * Exceeded the service quota service code.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * Exceeded the service quota code.
   *
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * Exceeded the service quota value.
   *
   * @public
   */
  quotaValue?: number | undefined;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.quotaValue = opts.quotaValue;
  }
}

/**
 * Uninitialized account exception.
 *
 * @public
 */
export class UninitializedAccountException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#UninitializedAccountException";
  readonly name = "UninitializedAccountException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UninitializedAccountException, __BaseException>) {
    super({
      name: "UninitializedAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UninitializedAccountException.prototype);
    this.code = opts.code;
  }
}

/**
 * Validate exception.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * Validate exception reason.
   *
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * Validate exception field list.
   *
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.code = opts.code;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.
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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * Reached throttling quota exception.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mgn#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * Reached throttling quota exception service code.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * Reached throttling quota exception.
   *
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * Reached throttling quota exception will retry after x seconds.
   *
   * @public
   */
  retryAfterSeconds?: string | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}
