// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DeadlineServiceException as __BaseException } from "./DeadlineServiceException";
import { ConflictExceptionReason, ServiceQuotaExceededExceptionReason, ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>You don't have permission to perform the action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
 * <p>Deadline Cloud can't process your request right now. Try again later.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name = "InternalServerErrorException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>The number of seconds a client should wait before retrying the request.</p>
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
 * <p>The requested resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that couldn't be found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that couldn't be found.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A string that describes the reason the quota was exceeded.</p>
   * @public
   */
  reason: ServiceQuotaExceededExceptionReason | undefined;

  /**
   * <p>The type of the affected resource</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>Identifies the service that exceeded the quota.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>Identifies the quota that has been exceeded.</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * <p>The identifier of the affected resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
 * <p>Your request exceeded a request rate quota.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>Identifies the service that is being throttled.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Identifies the quota that is being throttled.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The number of seconds a client should wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason that the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of the error.</p>
   * @public
   */
  reason: ConflictExceptionReason | undefined;

  /**
   * <p>The identifier of the resource in use.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource in use.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>Information about the resources in use when the exception was thrown.</p>
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
