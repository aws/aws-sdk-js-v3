// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { MgnServiceException as __BaseException } from "./MgnServiceException";
import { ErrorDetails, ValidationExceptionField } from "./models_0";

/**
 * <p>Operating denied due to a file permission or access check error.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>A conflict occurred when prompting for resource type.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>Conflict Exception specific errors.</p>
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
 * <p>Resource not found exception.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * <p>Resource ID not found error.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Resource type not found error.</p>
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
 * <p>The request could not be completed because its exceeded the service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * <p>Exceeded the service quota resource ID.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Exceeded the service quota resource type.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>Exceeded the service quota service code.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Exceeded the service quota code.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Exceeded the service quota value.</p>
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
 * <p>Uninitialized account exception.</p>
 * @public
 */
export class UninitializedAccountException extends __BaseException {
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
 * <p>Validate exception.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * <p>Validate exception reason.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>Validate exception field list.</p>
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
 * <p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.</p>
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
 * <p>Reached throttling quota exception.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Reached throttling quota exception service code.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Reached throttling quota exception.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Reached throttling quota exception will retry after x seconds.</p>
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
