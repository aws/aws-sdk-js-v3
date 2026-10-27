// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DeadlineServiceException as __BaseException } from "./DeadlineServiceException";
import type { ConflictExceptionReason, ServiceQuotaExceededExceptionReason, ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";

/**
 * You don't have permission to perform the action.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.context = opts.context;
  }
}

/**
 * Deadline Cloud can't process your request right now. Try again later.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#InternalServerErrorException";
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * The number of seconds a client should wait before retrying the request.
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * The requested resource can't be found.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the resource that couldn't be found.
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource that couldn't be found.
   * @public
   */
  resourceType: string | undefined;

  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.context = opts.context;
  }
}

/**
 * You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * A string that describes the reason the quota was exceeded.
   * @public
   */
  reason: ServiceQuotaExceededExceptionReason | undefined;

  /**
   * The type of the affected resource
   * @public
   */
  resourceType: string | undefined;

  /**
   * Identifies the service that exceeded the quota.
   * @public
   */
  serviceCode: string | undefined;

  /**
   * Identifies the quota that has been exceeded.
   * @public
   */
  quotaCode: string | undefined;

  /**
   * The identifier of the affected resource.
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.reason = opts.reason;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.resourceId = opts.resourceId;
    this.context = opts.context;
  }
}

/**
 * Your request exceeded a request rate quota.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * Identifies the service that is being throttled.
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * Identifies the quota that is being throttled.
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * The number of seconds a client should wait before retrying the request.
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.context = opts.context;
  }
}

/**
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The reason that the request failed validation.
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * A list of fields that failed validation.
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
    this.context = opts.context;
  }
}

/**
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.deadline#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * A description of the error.
   * @public
   */
  reason: ConflictExceptionReason | undefined;

  /**
   * The identifier of the resource in use.
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource in use.
   * @public
   */
  resourceType: string | undefined;

  /**
   * Information about the resources in use when the exception was thrown.
   * @public
   */
  context?: Record<string, string> | undefined;

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
    this.reason = opts.reason;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.context = opts.context;
  }
}
