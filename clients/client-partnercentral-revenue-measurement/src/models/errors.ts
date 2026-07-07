// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type {
  AccessDeniedExceptionReason,
  ConflictExceptionReason,
  ResourceNotFoundExceptionReason,
  ServiceQuotaExceededExceptionReason,
  ValidationExceptionReason,
} from "./enums";
import type { ValidationExceptionField } from "./models_0";
import {
  PartnerCentralRevenueMeasurementServiceException as __BaseException,
} from "./PartnerCentralRevenueMeasurementServiceException";

/**
 * <p>The request was denied due to insufficient permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason for the access denial.</p>
   * @public
   */
  Reason: AccessDeniedExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason for the conflict.</p>
   * @public
   */
  Reason: ConflictExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason the resource was not found.</p>
   * @public
   */
  Reason: ResourceNotFoundExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The request would exceed a service quota limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason the service quota was exceeded.</p>
   * @public
   */
  Reason: ServiceQuotaExceededExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The request was throttled due to too many requests. Retry your request.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  Message: string | undefined;
  /**
   * <p>The service code associated with the throttling error.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>The quota code associated with the throttling error.</p>
   * @public
   */
  QuotaCode?: string | undefined;
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
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * <p>The request failed validation due to invalid input parameters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason for the validation failure.</p>
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that failed validation.</p>
   * @public
   */
  FieldList?: ValidationExceptionField[] | undefined;
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
    this.FieldList = opts.FieldList;
  }
}
